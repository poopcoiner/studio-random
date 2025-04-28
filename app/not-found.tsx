import Link from 'next/link';
import Image from 'next/image';

export default function NotFound() {
  return (
    <div className="container mx-auto px-4 py-32 text-center">
      <div className="flex justify-center mb-8">
        <Image 
          src="/studio-random-logo.svg"
          alt="Studio Random Logo"
          width={80}
          height={80}
        />
      </div>
      <h1 className="text-h1 font-display uppercase tracking-tight mb-6 accent-gradient">
        404
      </h1>
      <h2 className="text-xl font-display mb-8">Page Not Found</h2>
      <p className="max-w-md mx-auto mb-12 text-text/80">
        The page you're looking for doesn't exist or has been moved.
      </p>
      <Link
        href="/"
        className="inline-block border border-accent px-6 py-3 rounded-full font-mono hover:bg-accent hover:text-bg transition-colors"
      >
        Return Home
      </Link>
    </div>
  );
} 