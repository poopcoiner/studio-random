# Portfolio Content Structure

This document outlines the scalable content structure for managing portfolio projects in the Studio Random website.

## Directory Structure

```
/content
  /projects
    project-1.mdx
    project-2.mdx
    project-3.mdx
    ...
/public
  /images
    /projects
      /project-1
        cover.jpg
        detail-1.jpg
        detail-2.jpg
      /project-2
        ...
```

## Project MDX Schema

Each project is defined as an MDX file with frontmatter metadata:

```mdx
---
title: "Project Title"
slug: "project-slug"
description: "Short description of the project"
client: "Client Name"
date: "2023-01-15"
tags: ["Design", "Engineering", "Web"]
featured: true
coverImage: "/images/projects/project-slug/cover.jpg"
detailImages: [
  "/images/projects/project-slug/detail-1.jpg",
  "/images/projects/project-slug/detail-2.jpg"
]
---

## Overview

Detailed project description goes here. This content supports full MDX including:

- Lists
- **Bold text**
- *Italic text*
- [Links](https://example.com)
- And any custom MDX components

## Solution

More content about the project...
```

## Utility Functions (utils/projects.ts)

```typescript
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

// Types
export interface ProjectFrontmatter {
  title: string;
  slug: string;
  description: string;
  client: string;
  date: string;
  tags: string[];
  featured: boolean;
  coverImage: string;
  detailImages: string[];
}

export interface Project extends ProjectFrontmatter {
  content: string;
}

const projectsDirectory = path.join(process.cwd(), 'content/projects');

// Get all project slugs
export function getProjectSlugs() {
  const fileNames = fs.readdirSync(projectsDirectory);
  return fileNames.map((fileName) => {
    return {
      params: {
        slug: fileName.replace(/\.mdx$/, ''),
      },
    };
  });
}

// Get all projects
export function getAllProjects(): Project[] {
  const fileNames = fs.readdirSync(projectsDirectory);
  const allProjects = fileNames.map((fileName) => {
    const slug = fileName.replace(/\.mdx$/, '');
    const fullPath = path.join(projectsDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const { data, content } = matter(fileContents);
    
    return {
      ...(data as ProjectFrontmatter),
      content,
    };
  });
  
  // Sort by date (newest first)
  return allProjects.sort((a, b) => {
    return new Date(b.date).getTime() - new Date(a.date).getTime();
  });
}

// Get featured projects
export function getFeaturedProjects(): Project[] {
  return getAllProjects().filter((project) => project.featured);
}

// Get project by slug
export function getProjectBySlug(slug: string): Project | undefined {
  try {
    const fullPath = path.join(projectsDirectory, `${slug}.mdx`);
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const { data, content } = matter(fileContents);
    
    return {
      ...(data as ProjectFrontmatter),
      content,
    };
  } catch (error) {
    return undefined;
  }
}

// Filter projects by tag
export function getProjectsByTag(tag: string): Project[] {
  return getAllProjects().filter((project) => 
    project.tags.some((t) => t.toLowerCase() === tag.toLowerCase())
  );
}
```

## PortfolioGrid Component

The `PortfolioGrid.tsx` component will be designed to support both grid and list views:

```tsx
import { useState } from 'react';
import ViewToggle from './ViewToggle';
import Card from './Card';
import { Project } from '@/utils/projects';

interface PortfolioGridProps {
  projects: Project[];
  initialView?: 'grid' | 'list';
}

const PortfolioGrid = ({ projects, initialView = 'grid' }: PortfolioGridProps) => {
  const [view, setView] = useState<'grid' | 'list'>(initialView);
  
  return (
    <div className="mt-8">
      <div className="flex justify-end mb-6">
        <ViewToggle currentView={view} onChange={setView} />
      </div>
      
      {view === 'grid' ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <Card key={project.slug} project={project} />
          ))}
        </div>
      ) : (
        <div className="columns-2 md:columns-3 gap-y-1 font-mono">
          {projects.map((project) => (
            <a 
              key={project.slug}
              href={`/work/${project.slug}`}
              className="block mb-2 hover:underline hover:text-accent group"
            >
              {project.title}
              <span className="text-sm opacity-60 ml-2 group-hover:text-accent-soft">
                {project.client}
              </span>
            </a>
          ))}
        </div>
      )}
    </div>
  );
};

export default PortfolioGrid;
```

## Usage Example in Work Page

```tsx
// app/work/page.tsx
import { getAllProjects } from '@/utils/projects';
import PortfolioGrid from '@/components/PortfolioGrid';

export default function WorkPage() {
  const projects = getAllProjects();
  
  return (
    <main className="container mx-auto px-4 py-12">
      <h1 className="text-h2 font-display uppercase tracking-tight">
        00 Work
      </h1>
      
      <PortfolioGrid projects={projects} />
    </main>
  );
}
```

## Single Project Page

```tsx
// app/work/[slug]/page.tsx
import { getProjectBySlug, getProjectSlugs } from '@/utils/projects';
import { MDXRemote } from 'next-mdx-remote/rsc';
import { notFound } from 'next/navigation';
import Image from 'next/image';

export async function generateStaticParams() {
  return getProjectSlugs();
}

export default function ProjectPage({ params }: { params: { slug: string } }) {
  const project = getProjectBySlug(params.slug);
  
  if (!project) {
    notFound();
  }
  
  return (
    <main className="container mx-auto px-4 py-12">
      <h1 className="text-h2 font-display uppercase tracking-tight mb-8">
        {project.title}
      </h1>
      
      <div className="mb-8">
        <Image 
          src={project.coverImage}
          alt={project.title}
          width={1200}
          height={675}
          className="w-full h-auto"
        />
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
        <div className="md:col-span-3">
          <div className="prose prose-invert max-w-none">
            <MDXRemote source={project.content} />
          </div>
        </div>
        
        <div className="font-mono text-sm">
          <div className="mb-4">
            <span className="text-accent">Client</span>
            <p>{project.client}</p>
          </div>
          <div className="mb-4">
            <span className="text-accent">Date</span>
            <p>{new Date(project.date).getFullYear()}</p>
          </div>
          <div>
            <span className="text-accent">Tags</span>
            <div className="flex flex-wrap gap-2 mt-1">
              {project.tags.map((tag) => (
                <span key={tag} className="inline-block">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
      
      {project.detailImages.length > 0 && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {project.detailImages.map((image, index) => (
            <Image 
              key={index}
              src={image}
              alt={`${project.title} detail ${index + 1}`}
              width={600}
              height={400}
              className="w-full h-auto"
            />
          ))}
        </div>
      )}
    </main>
  );
}
```

## Benefits of This Approach

1. **Scalability**: Add new projects by simply creating new MDX files
2. **Separation of Concerns**: Content is separate from presentation
3. **Flexibility**: Easy to filter, sort, and display projects in different ways
4. **Performance**: Static generation for optimal loading speeds
5. **Developer Experience**: Simple content model that's easy to maintain
6. **Extensibility**: Can easily add new properties to the schema in the future 