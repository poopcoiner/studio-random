"use client";

import Link from 'next/link';
import Image from 'next/image';
import GlitchText from './GlitchText';
import { useState, useEffect } from 'react';

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  // Ensure hydration mismatch doesn't occur
  useEffect(() => {
    setMounted(true);
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <header className="py-6 px-4 md:px-8 flex justify-between items-center relative">
      {/* Logo */}
      <div>
        <Link href="/" className="flex items-center">
          <Image 
            src="/studio-random-logo.svg"
            alt="Studio Random Logo"
            width={40}
            height={40}
            className="mr-2"
          />
          <GlitchText 
            intensity={0.8}
            tag="span" 
            className="font-mono text-lg md:text-xl font-bold uppercase tracking-wider accent-gradient"
          >
            STUDIO RANDOM
          </GlitchText>
        </Link>
      </div>

      {/* Mobile Menu Toggle */}
      <button 
        className="md:hidden flex flex-col justify-center items-center w-8 h-8 space-y-1.5 z-50"
        onClick={toggleMobileMenu}
        aria-label="Toggle menu"
      >
        <span className={`block w-6 h-0.5 bg-text transition-transform duration-300 ${mobileMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
        <span className={`block w-6 h-0.5 bg-text transition-opacity duration-300 ${mobileMenuOpen ? 'opacity-0' : 'opacity-100'}`}></span>
        <span className={`block w-6 h-0.5 bg-text transition-transform duration-300 ${mobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
      </button>

      {/* Desktop Navigation */}
      <nav className="hidden md:block font-mono text-sm md:text-base">
        <ul className="flex space-x-4 md:space-x-8">
          <li>
            <Link
              href="/work"
              className="hover:text-accent hover:underline underline-offset-4 transition-colors"
            >
              00 Work
            </Link>
          </li>
          <li>
            <Link
              href="/services"
              className="hover:text-accent hover:underline underline-offset-4 transition-colors"
            >
              01 Services
            </Link>
          </li>
          <li>
            <Link
              href="/about"
              className="hover:text-accent hover:underline underline-offset-4 transition-colors"
            >
              02 About
            </Link>
          </li>
          <li>
            <Link
              href="/contact"
              className="hover:text-accent hover:underline underline-offset-4 transition-colors"
            >
              03 Contact
            </Link>
          </li>
        </ul>
      </nav>

      {/* Mobile Navigation */}
      {mounted && (
        <div 
          className={`fixed inset-0 bg-bg bg-opacity-95 z-40 md:hidden flex items-center justify-center transition-all duration-300 ${
            mobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
          }`}
        >
          <nav className="w-full h-full flex items-center justify-center">
            <ul className="flex flex-col space-y-8 text-center font-mono text-xl">
              <li>
                <Link
                  href="/work"
                  className="hover:text-accent hover:underline underline-offset-4 transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  00 Work
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="hover:text-accent hover:underline underline-offset-4 transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  01 Services
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="hover:text-accent hover:underline underline-offset-4 transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  02 About
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="hover:text-accent hover:underline underline-offset-4 transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  03 Contact
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header; 