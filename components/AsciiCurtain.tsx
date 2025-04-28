'use client';

import { useEffect, useState } from 'react';

const AsciiCurtain = () => {
  const [isVisible, setIsVisible] = useState(true);
  
  // Check for reduced motion preference
  const prefersReducedMotion = typeof window !== 'undefined' 
    ? window.matchMedia('(prefers-reduced-motion: reduce)').matches 
    : false;
  
  useEffect(() => {
    if (!prefersReducedMotion) {
      const timer = setTimeout(() => {
        setIsVisible(false);
      }, 800);
      
      return () => clearTimeout(timer);
    }
  }, [prefersReducedMotion]);
  
  // Don't render the curtain if user prefers reduced motion
  if (prefersReducedMotion) return null;
  
  return (
    <div
      className={`font-mono text-accent text-[8px] leading-[8px] fixed inset-0 pointer-events-none z-40 transition-opacity duration-400 ease-out ${
        isVisible ? 'opacity-100' : 'opacity-0'
      }`}
    >
      <pre>{'@'.repeat(16000)}</pre>
    </div>
  );
};

export default AsciiCurtain; 