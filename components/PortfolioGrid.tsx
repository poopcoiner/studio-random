'use client'
import { useState } from 'react';
import ViewToggle from './ViewToggle';
import Card from './Card';
import Link from 'next/link';
import { Project } from '@/utils/projects';

interface PortfolioGridProps {
  projects: Project[];
  initialView?: 'grid' | 'list';
}

const PortfolioGrid: React.FC<PortfolioGridProps> = ({ 
  projects, 
  initialView = 'grid' 
}) => {
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