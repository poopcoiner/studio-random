import Link from 'next/link';
import Image from 'next/image';
import GlitchText from './GlitchText';

const Header = () => {
  return (
    <header className="py-6 px-4 md:px-8 flex justify-between items-center">
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

      {/* Navigation */}
      <nav className="font-mono text-sm md:text-base">
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
    </header>
  );
};

export default Header; 