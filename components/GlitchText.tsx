'use client';

import { ReactNode, createElement } from "react";
import { useGlitch, useReducedMotion } from "@/utils/animation";

interface GlitchTextProps {
  children: ReactNode;
  intensity?: number;
  className?: string;
  tag?: 'h1' | 'h2' | 'h3' | 'h4' | 'p' | 'span' | 'div';
}

const GlitchText = ({ 
  children, 
  intensity = 1, 
  className = '', 
  tag = 'span' 
}: GlitchTextProps) => {
  const prefersReducedMotion = useReducedMotion();
  
  // Convert children to string (if possible)
  const textContent = typeof children === 'string' ? children : '';
  
  // Use our custom hook
  const displayText = useGlitch(textContent, {
    intensity,
    disabled: prefersReducedMotion || !textContent,
    initialGlitchDuration: 500,
    stabilizationSpeed: 100,
  });
  
  // If we can't get textContent or user prefers reduced motion, just render children
  if (!textContent || prefersReducedMotion) {
    return createElement(tag, { className }, children);
  }
  
  return createElement(
    tag,
    { className: `inline-block overflow-hidden break-words ${className}` },
    displayText
  );
};

export default GlitchText; 