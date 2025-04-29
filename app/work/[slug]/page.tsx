'use client';

import { useEffect, useState } from 'react';
import { notFound, usePathname } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import PageTransition from '@/components/PageTransition';

// Define the project type
interface Project {
  title: string;
  content: string;
  client: string;
  date: string;
  tags: string[];
}

export default function ProjectPage() {
  const pathname = usePathname();
  const slug = pathname.split('/').pop() || '';
  const [project, setProject] = useState<Project | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadProject() {
      try {
        const response = await fetch(`/api/projects/${slug}`);
        if (!response.ok) {
          notFound();
        }
        const data = await response.json();
        setProject(data);
      } catch (error) {
        console.error('Failed to load project:', error);
      } finally {
        setLoading(false);
      }
    }

    if (slug) {
      loadProject();
    }
  }, [slug]);

  if (loading) {
    return (
      <PageTransition>
        <div className="container mx-auto px-4 py-16">
          <div className="mb-6">
            <Link href="/work" className="font-mono text-sm text-text/70 hover:text-accent transition-colors">
              ← Back to all work
            </Link>
          </div>
          <p>Loading project...</p>
        </div>
      </PageTransition>
    );
  }

  if (!project) {
    notFound();
  }

  // Map slug to folder name
  const getFolderName = (slug: string) => {
    switch(slug) {
      case 'juststeve-xyz': return 'juststeve';
      case 'moodee-dev': return 'moodee';
      case 'phantomtrading-xyz': return 'phantomtrading';
      case 'popcoinz-io': return 'popcoinz';
      default: return slug;
    }
  };
  
  // Get correct folder name
  const folderName = getFolderName(slug);
  
  // Project logo path - handle both PNG and WebP
  const logoPath = folderName === 'moodee' 
    ? `/images/projects/${folderName}/logo.webp` 
    : `/images/projects/${folderName}/logo.png`;
  
  return (
    <PageTransition>
      <div className="container mx-auto px-4 py-16">
        <div className="mb-6">
          <Link href="/work" className="font-mono text-sm text-text/70 hover:text-accent transition-colors">
            ← Back to all work
          </Link>
        </div>
        
        <h1 className="text-h1 font-display uppercase tracking-tight mb-8">
          {project.title}
        </h1>
        
        <div className="mb-12 bg-bg border border-text/10 rounded-md p-12 flex justify-center">
          <Image 
            src={logoPath}
            alt={project.title}
            width={240}
            height={240}
            className="w-auto h-auto"
            priority
          />
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-16">
          <div className="md:col-span-3">
            <div className="prose prose-invert max-w-none">
              <div dangerouslySetInnerHTML={{ __html: project.content }} />
            </div>
          </div>
          
          <div className="font-mono text-sm space-y-6">
            <div>
              <h3 className="text-accent mb-2">Client</h3>
              <p>{project.client}</p>
            </div>
            <div>
              <h3 className="text-accent mb-2">Date</h3>
              <p>{new Date(project.date).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
              })}</p>
            </div>
            <div>
              <h3 className="text-accent mb-2">Tags</h3>
              <div className="flex flex-wrap gap-2 mt-1">
                {project.tags.map((tag: string) => (
                  <span 
                    key={tag} 
                    className="py-1 px-2 rounded-full bg-text/5 text-text/80"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-text/10 pt-12 mt-12">
          <h2 className="text-xl font-mono uppercase tracking-wider mb-6 accent-gradient clip-text">
            STUDIO RANDOM CONTRIBUTION
          </h2>
          <div className="flex flex-col md:flex-row gap-6 justify-around">
            <div className="bg-bg border border-text/10 rounded-md p-8 text-center md:w-1/3">
              <Image 
                src="/studio-random-logo.svg"
                alt="Studio Random Logo"
                width={60}
                height={60}
                className="w-auto h-auto mx-auto mb-4"
              />
              <h3 className="font-mono text-accent mb-2">Design</h3>
              <p className="text-sm text-text/70">Visual identity, user interface, and interaction design</p>
            </div>
            <div className="bg-bg border border-text/10 rounded-md p-8 text-center md:w-1/3">
              <Image 
                src="/studio-random-logo.svg"
                alt="Studio Random Logo"
                width={60}
                height={60}
                className="w-auto h-auto mx-auto mb-4"
              />
              <h3 className="font-mono text-accent mb-2">Engineering</h3>
              <p className="text-sm text-text/70">Technical architecture, smart contracts, and implementation</p>
            </div>
            <div className="bg-bg border border-text/10 rounded-md p-8 text-center md:w-1/3">
              <Image 
                src="/studio-random-logo.svg"
                alt="Studio Random Logo"
                width={60}
                height={60}
                className="w-auto h-auto mx-auto mb-4"
              />
              <h3 className="font-mono text-accent mb-2">Launch</h3>
              <p className="text-sm text-text/70">Market entry strategy, community building, and execution</p>
            </div>
          </div>
        </div>
      </div>
    </PageTransition>
  );
} 