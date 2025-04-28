'use client';

import { useState, useEffect } from 'react';

/**
 * Hook to detect if user prefers reduced motion
 * @returns {boolean} True if user prefers reduced motion
 */
export function useReducedMotion(): boolean {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  
  useEffect(() => {
    // Default to false on server
    if (typeof window === 'undefined') return;
    
    // Check initial state
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(mediaQuery.matches);
    
    // Create event listener for changes
    const onChange = (event: MediaQueryListEvent) => {
      setPrefersReducedMotion(event.matches);
    };
    
    // Add listener and cleanup
    mediaQuery.addEventListener('change', onChange);
    return () => mediaQuery.removeEventListener('change', onChange);
  }, []);
  
  return prefersReducedMotion;
}

/**
 * Hook to create glitch text effect
 * @param {string} text - Original text to glitch
 * @param {Object} options - Configuration options
 * @returns {string} The glitched text to display
 */
export function useGlitch(
  text: string, 
  options: { 
    intensity?: number; 
    disabled?: boolean;
    glitchChars?: string;
    stabilizationSpeed?: number;
    initialGlitchDuration?: number;
  } = {}
): string {
  const {
    intensity = 1,
    disabled = false,
    glitchChars = '!<>-_\\/[]{}—=+*^?#',
    stabilizationSpeed = 100,
    initialGlitchDuration = 500
  } = options;
  
  const [displayText, setDisplayText] = useState(text);
  
  useEffect(() => {
    // Skip effect if disabled
    if (disabled) {
      setDisplayText(text);
      return;
    }
    
    // For initial render or text change, reset the animation
    let startTime: number;
    let animationId: number;
    let phaseOneComplete = false;
    let stableCount = 0;
    
    // Animation function
    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const elapsed = timestamp - startTime;
      
      // Phase 1: Full glitching (all random)
      if (elapsed < initialGlitchDuration) {
        let newText = '';
        for (let i = 0; i < text.length; i++) {
          // Adjust chance based on intensity
          if (Math.random() > 0.3 / intensity) {
            newText += glitchChars[Math.floor(Math.random() * glitchChars.length)];
          } else {
            newText += text[i];
          }
        }
        setDisplayText(newText);
        animationId = requestAnimationFrame(animate);
      }
      // Phase 2: Sequential stabilization
      else if (!phaseOneComplete) {
        phaseOneComplete = true;
        stableCount = 0;
        
        // Start sequential stabilization
        const stabilizeLetters = () => {
          if (stableCount > text.length) {
            return; // Animation complete
          }
          
          let newText = '';
          for (let i = 0; i < text.length; i++) {
            if (i < stableCount) {
              // Stable letters
              newText += text[i];
            } else {
              // Still glitching
              if (Math.random() > 0.3 / intensity) {
                newText += glitchChars[Math.floor(Math.random() * glitchChars.length)];
              } else {
                newText += text[i];
              }
            }
          }
          
          setDisplayText(newText);
          
          // Continue animation
          if (stableCount <= text.length) {
            stableCount++;
            setTimeout(stabilizeLetters, stabilizationSpeed / intensity);
          }
        };
        
        stabilizeLetters();
      }
    };
    
    // Start animation
    animationId = requestAnimationFrame(animate);
    
    // Cleanup
    return () => {
      if (animationId) cancelAnimationFrame(animationId);
    };
  }, [text, intensity, disabled, glitchChars, stabilizationSpeed, initialGlitchDuration]);
  
  return displayText;
} 