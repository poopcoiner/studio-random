'use client';

import { ReactNode, useEffect, useState } from 'react';
import { useReducedMotion } from '@/utils/animation';

interface PageTransitionProps {
  children: ReactNode;
}

const PageTransition: React.FC<PageTransitionProps> = ({ children }) => {
  const prefersReducedMotion = useReducedMotion();
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    // No animation for users who prefer reduced motion
    if (prefersReducedMotion) {
      setIsVisible(true);
      return;
    }
    
    // Set a short timeout to ensure the CSS transition triggers properly
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 10);
    
    return () => clearTimeout(timer);
  }, [prefersReducedMotion]);
  
  // If reduced motion is preferred, skip animation
  if (prefersReducedMotion) {
    return <>{children}</>;
  }
  
  return (
    <div className={`
      page-enter 
      ${isVisible ? 'page-enter-active' : ''}
    `}>
      {children}
    </div>
  );
};

export default PageTransition; 