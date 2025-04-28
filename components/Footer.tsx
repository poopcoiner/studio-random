import Link from 'next/link';
import Image from 'next/image';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-8 px-4 md:px-8 mt-16 border-t border-text/10">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <div className="flex items-center mb-2">
              <Image 
                src="/studio-random-logo.svg"
                alt="Studio Random Logo"
                width={24}
                height={24}
                className="mr-2"
              />
              <span className="font-mono text-lg font-bold uppercase tracking-wider">
                STUDIO RANDOM
              </span>
            </div>
            <p className="font-mono text-sm text-text/70">
              &copy; {currentYear} STUDIO RANDOM. All rights reserved.
            </p>
          </div>
          
          <nav>
            <ul className="flex space-x-6 font-mono text-sm">
              <li>
                <Link href="/work" className="hover:text-accent transition-colors">
                  Work
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-accent transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-accent transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-accent transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 