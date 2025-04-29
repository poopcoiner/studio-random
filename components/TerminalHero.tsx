'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import GlitchText from './GlitchText';
import { useReducedMotion } from '@/utils/animation';

const TerminalHero = () => {
  const prefersReducedMotion = useReducedMotion();
  const [typedCommand, setTypedCommand] = useState('');
  const [showOutput, setShowOutput] = useState(false);
  const [typingDone, setTypingDone] = useState(false);
  const [cursorVisible, setCursorVisible] = useState(true);
  
  const command = 'studio-random --ship-it';
  
  useEffect(() => {
    // Skip animation if user prefers reduced motion
    if (prefersReducedMotion) {
      setTypedCommand(command);
      setShowOutput(true);
      setTypingDone(true);
      return;
    }
    
    // Type animation
    let currentIndex = 0;
    const typingInterval = setInterval(() => {
      if (currentIndex < command.length) {
        setTypedCommand(command.substring(0, currentIndex + 1));
        currentIndex++;
      } else {
        clearInterval(typingInterval);
        setTypingDone(true);
        setTimeout(() => setShowOutput(true), 400);
      }
    }, 100);
    
    // Cursor blink
    const cursorInterval = setInterval(() => {
      setCursorVisible(prev => !prev);
    }, 530);
    
    return () => {
      clearInterval(typingInterval);
      clearInterval(cursorInterval);
    };
  }, [prefersReducedMotion]);
  
  return (
    <section className="relative py-20 md:py-32 px-4">
      <div className="container mx-auto max-w-5xl">
        <div className="p-1 bg-gradient-to-r from-accent to-accent/30 rounded-md shadow-lg">
          <div className="bg-bg/95 backdrop-blur-sm rounded-md p-6 md:p-10">
            <div className="flex items-center mb-6">
              <div className="flex space-x-2 mr-4">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
              </div>
              <div className="font-mono text-sm text-text/50">studio-random ~ mainnet-alpha</div>
            </div>
            
            <div>
              <div className="font-mono text-sm mb-6">
                <span className="text-accent">$</span> {typedCommand}
                {!typingDone && cursorVisible && <span className="text-accent">▋</span>}
                {typingDone && cursorVisible && <span className="text-accent">▋</span>}
              </div>
              
              {showOutput && (
                <div className="pl-4 border-l-2 border-accent/30 mb-8 animate-fade-up">
                  <div className="mb-6">
                    <h1 className="text-3xl md:text-4xl lg:text-5xl font-display uppercase leading-tight tracking-tight">
                      <GlitchText intensity={1.2}>
                        DESIGN SHARP.
                      </GlitchText>
                      <br />
                      <GlitchText intensity={1.2}>
                        CODE FAST.
                      </GlitchText>
                      <br />
                      <GlitchText intensity={1.2}>
                        LAUNCH LOUD.
                      </GlitchText>
                    </h1>
                  </div>
                  
                  <p className="text-body max-w-3xl text-text/80 mb-8">
                    We design the look, write the smart contracts, and run the launch—turning Web3 ideas into mainnet reality in a single sprint.
                  </p>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-sm mb-8">
                    <div className="border-l-2 border-accent/50 pl-3">
                      <div className="font-bold mb-1">Design</div>
                      <div className="text-text/70 font-mono">48h Figma → code</div>
                    </div>
                    <div className="border-l-2 border-accent/50 pl-3">
                      <div className="font-bold mb-1">Engineering</div>
                      <div className="text-text/70 font-mono">0 exploits</div>
                    </div>
                    <div className="border-l-2 border-accent/50 pl-3">
                      <div className="font-bold mb-1">Launch</div>
                      <div className="text-text/70 font-mono">30 min to trend</div>
                    </div>
                  </div>
                  
                  <div className="flex flex-wrap gap-4">
                    <Link href="/services" className="inline-block bg-accent text-bg px-6 py-3 rounded-md font-mono hover:bg-accent/90 transition-colors">
                      Our Services
                    </Link>
                    <Link href="/contact" className="inline-block border border-accent/60 px-6 py-3 rounded-md font-mono text-accent hover:bg-accent/10 transition-colors">
                      Contact Us
                    </Link>
                  </div>
                </div>
              )}
              
              {showOutput && (
                <div className="font-mono text-sm animate-fade-up" style={{ animationDelay: '200ms' }}>
                  <span className="text-accent">$</span> <span className="opacity-0">_</span>
                  <span className={`text-accent ${cursorVisible ? 'opacity-100' : 'opacity-0'}`}>▋</span>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TerminalHero; 