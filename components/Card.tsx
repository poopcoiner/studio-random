'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Project } from '@/utils/projects';
import { useReducedMotion } from '@/utils/animation';

interface CardProps {
  project: Project;
}

const Card: React.FC<CardProps> = ({ project }) => {
  // Use our custom hook for reduced motion preference
  const prefersReducedMotion = useReducedMotion();
  
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
  const folderName = getFolderName(project.slug);
  
  // Project logo path - handle both PNG and WebP
  const logoPath = folderName === 'moodee' 
    ? `/images/projects/${folderName}/logo.webp` 
    : `/images/projects/${folderName}/logo.png`;
  
  return (
    <div 
      className={`
        relative overflow-hidden rounded-md bg-bg border border-text/10
        ${!prefersReducedMotion ? 'hover-card transition-all duration-300' : ''}
      `}
    >
      <Link href={`/work/${project.slug}`} className="block">
        <div className="relative aspect-[16/9] overflow-hidden bg-bg flex items-center justify-center p-8">
          <Image 
            src={logoPath}
            alt={`${project.title} Logo`}
            width={120}
            height={120}
            className="object-contain"
          />
        </div>
        <div className="p-4">
          <h3 className="text-lg font-bold">{project.title}</h3>
          <p className="text-sm mt-1 text-text/70">{project.description}</p>
          <div className="flex gap-2 mt-3">
            {project.tags.slice(0, 2).map((tag) => (
              <span 
                key={tag} 
                className="text-xs py-1 px-2 rounded-full text-text/80 bg-text/5"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Card; 