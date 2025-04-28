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