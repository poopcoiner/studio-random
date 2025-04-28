import { getAllProjects } from '@/utils/projects';
import PortfolioGrid from '@/components/PortfolioGrid';
import PageTransition from "@/components/PageTransition";

export default function WorkPage() {
  // Get all projects
  const projects = getAllProjects();
  
  return (
    <PageTransition>
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-h1 font-display uppercase tracking-tight">
          01 Work
        </h1>
        
        <p className="mt-4 mb-8 max-w-xl text-text/80">
          Our selected portfolio of Web3 projects showcasing the STUDIO RANDOM approach to design, engineering, and launch services.
        </p>
        
        <PortfolioGrid projects={projects} />
      </div>
    </PageTransition>
  );
} 