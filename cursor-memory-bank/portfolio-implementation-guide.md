# Portfolio Implementation Guide

This guide provides step-by-step instructions for implementing the scalable portfolio system for Studio Random's website.

## 1. Dependencies Setup

First, add the necessary dependencies:

```bash
pnpm add gray-matter next-mdx-remote @tailwindcss/typography
```

These packages provide:
- `gray-matter`: Parse MDX frontmatter
- `next-mdx-remote`: Render MDX content in Next.js
- `@tailwindcss/typography`: Styling for MDX content

## 2. Directory Structure Setup

Create the necessary directories:

```bash
mkdir -p content/projects
mkdir -p public/images/projects
mkdir -p app/work
mkdir -p app/work/[slug]
mkdir -p utils
mkdir -p components
```

## 3. Create Utility Functions

Create the file `utils/projects.ts` with the utility functions for managing project content:

```tsx
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
  if (!fs.existsSync(projectsDirectory)) {
    return [];
  }
  
  const fileNames = fs.readdirSync(projectsDirectory);
  return fileNames
    .filter(fileName => fileName.endsWith('.mdx'))
    .map((fileName) => {
      return {
        params: {
          slug: fileName.replace(/\.mdx$/, ''),
        },
      };
    });
}

// Get all projects
export function getAllProjects(): Project[] {
  if (!fs.existsSync(projectsDirectory)) {
    return [];
  }
  
  const fileNames = fs.readdirSync(projectsDirectory)
    .filter(fileName => fileName.endsWith('.mdx'));
    
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

## 4. Create ViewToggle Component

Create the file `components/ViewToggle.tsx`:

```tsx
import React from 'react';

interface ViewToggleProps {
  currentView: 'grid' | 'list';
  onChange: (view: 'grid' | 'list') => void;
}

const ViewToggle: React.FC<ViewToggleProps> = ({ currentView, onChange }) => {
  return (
    <div className="inline-flex items-center bg-ink border border-base/10 rounded-full p-1 font-mono text-sm">
      <button
        className={`px-3 py-1 rounded-full transition-colors ${
          currentView === 'grid'
            ? 'bg-accent text-ink'
            : 'hover:text-accent'
        }`}
        onClick={() => onChange('grid')}
      >
        Grid
      </button>
      <button
        className={`px-3 py-1 rounded-full transition-colors ${
          currentView === 'list'
            ? 'bg-accent text-ink'
            : 'hover:text-accent'
        }`}
        onClick={() => onChange('list')}
      >
        List
      </button>
    </div>
  );
};

export default ViewToggle;
```

## 5. Create Card Component

Create the file `components/Card.tsx`:

```tsx
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { useReducedMotion } from 'framer-motion';
import { Project } from '@/utils/projects';

interface CardProps {
  project: Project;
}

const Card: React.FC<CardProps> = ({ project }) => {
  const reduce = useReducedMotion();
  
  const hoverVariants = reduce ? {} : {
    rest: { 
      scale: 1,
      boxShadow: "0 0 0 rgba(53, 255, 190, 0)" 
    },
    hover: { 
      scale: 1.02,
      boxShadow: "0 4px 12px rgba(53, 255, 190, 0.25)",
      transition: {
        duration: 0.3,
        ease: 'easeOut'
      }
    }
  };
  
  return (
    <motion.div
      initial="rest"
      whileHover="hover"
      animate="rest"
      variants={hoverVariants}
      className="bg-ink relative overflow-hidden rounded-md"
    >
      <Link href={`/work/${project.slug}`} className="block">
        <div className="relative aspect-[16/9] overflow-hidden">
          <Image 
            src={project.coverImage}
            alt={project.title}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover"
          />
        </div>
        <div className="p-4">
          <h3 className="text-lg font-display">{project.title}</h3>
          <p className="text-sm text-base/70 mt-1">{project.client}</p>
          <div className="flex gap-2 mt-3">
            {project.tags.slice(0, 2).map((tag) => (
              <span 
                key={tag} 
                className="text-xs py-1 px-2 rounded-full bg-base/5 text-base/80"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </Link>
    </motion.div>
  );
};

export default Card;
```

## 6. Create PortfolioGrid Component

Create the file `components/PortfolioGrid.tsx`:

```tsx
import { useState } from 'react';
import ViewToggle from './ViewToggle';
import Card from './Card';
import { Project } from '@/utils/projects';
import Link from 'next/link';

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
            <Link 
              key={project.slug}
              href={`/work/${project.slug}`}
              className="block mb-2 hover:underline hover:text-accent transition-colors group"
            >
              <span className="inline-block">{project.title}</span>
              <span className="text-sm opacity-60 ml-2 group-hover:text-accent-soft transition-colors">
                {project.client}
              </span>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default PortfolioGrid;
```

## 7. Create Work Page

Create the file `app/work/page.tsx`:

```tsx
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

## 8. Create Project Detail Page

Create the file `app/work/[slug]/page.tsx`:

```tsx
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
          priority
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

## 9. Update Tailwind Config

Update your `tailwind.config.js` to add support for typography:

```js
module.exports = {
  // ...existing config
  plugins: [
    require('@tailwindcss/typography'),
    // ...other plugins
  ],
}
```

## 10. Add Example Project

Create a sample project file at `content/projects/example-project.mdx`:

Copy the content from the example project MDX file provided earlier.

## 11. Add Project Images

Add placeholder images for the example project:

```
/public/images/projects/example-project/
  - cover.jpg
  - detail-1.jpg
  - detail-2.jpg
```

## 12. Display Featured Projects on Home Page

In your home page component (`app/page.tsx`), add a section to display featured projects:

```tsx
import { getFeaturedProjects } from '@/utils/projects';
import Card from '@/components/Card';
import Link from 'next/link';

// In your Home component:
const featuredProjects = getFeaturedProjects().slice(0, 3);

// In your JSX:
<section className="my-16">
  <h2 className="text-h2 font-display uppercase tracking-tight mb-8">
    00 What We Do
  </h2>
  
  <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
    {featuredProjects.map((project) => (
      <Card key={project.slug} project={project} />
    ))}
  </div>
  
  <div className="mt-8 text-center">
    <Link 
      href="/work" 
      className="font-mono inline-block border border-accent px-5 py-2 rounded-full hover:bg-accent hover:text-ink transition-colors"
    >
      View All Work
    </Link>
  </div>
</section>
```

## How to Add a New Project

1. Create a new MDX file in `content/projects/`, e.g., `new-project.mdx`
2. Add the required frontmatter metadata (title, slug, client, etc.)
3. Write the project content in Markdown format
4. Add project images to `/public/images/projects/new-project/`
5. The project will automatically appear in the work page and possibly the homepage if marked as featured

That's it! The project content system is now implemented and ready to use. This approach allows you to easily add, edit, or remove projects by simply managing MDX files, without touching the core application code. 