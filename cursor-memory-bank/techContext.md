# Technical Context

## Current Implementation State
Based on initial analysis, the project appears to be in an early stage with only basic Next.js setup:
- Basic Next.js 14 app with App Router (static export)
- Uses Geist and Geist Mono fonts (needs to be updated to Plus Jakarta Sans and Söhne Mono)
- Default Next.js starter page template
- Uses shadcn/ui component system with New York style
- Tailwind CSS v3.4.1 for better stability
- No custom components directory yet
- No content directory for MDX files yet
- Missing key page routes (/work, /services, /about, /contact, /legal)

## Required Technical Implementation

### Directory Structure
```
/app
  layout.tsx
  page.tsx
  /work/page.tsx
  /services/page.tsx
  /about/page.tsx
  /contact/page.tsx
  /legal/page.tsx
/components
  Header.tsx               # numeric nav
  Footer.tsx
  Card.tsx
  PortfolioGrid.tsx
  AsciiCurtain.tsx         # hero effect
/content                   # for MDX files
  /projects                # portfolio case studies
/public
  fonts/plus-jakarta-sans-variable.woff2
  fonts/soehne-mono.woff2
  fonts/inter.woff2
  logos/*
  og/*
tailwind.config.js
```

### Design Tokens (Tailwind)
Based on the provided design tokens:

```js
// tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: '#0F0F0F',
        text: '#F5F5F5',
        accent: '#35FFBE',
      },
      fontFamily: {
        display: ['"Plus Jakarta Sans"', 'sans-serif'],
        mono: ['"Söhne Mono"', 'monospace'],
        sans: ['Inter', 'sans-serif'],
      },
      boxShadow: {
        accent: '0 4px 12px rgba(53,255,190,0.25)',
      },
      fontSize: {
        h0: ['clamp(2.75rem,6vw,4.5rem)', {lineHeight:'1.1'}],
        h1: ['clamp(2.25rem,5vw,3rem)', {lineHeight:'1.2'}],
        body: '1.125rem',
      }
    },
  },
  plugins: [
    require('@tailwindcss/typography')
  ],
}
```

### Integration with libraries
The project should use a minimal set of dependencies to stay under the JS size limit:

- Next.js 14 (static export)
- Tailwind CSS v3.4.1
- Framer Motion (≤ 140 kB gzipped)
- MDX processing for content

### Key Components to Implement

1. **Header.tsx**: Navigation with numeric labels ("00 Work 01 Services 02 About 03 Contact")
2. **Footer.tsx**: Site footer with appropriate links
3. **Card.tsx**: Portfolio project cards with hover effects (lift 4px, slight tilt, accent glow)
4. **PortfolioGrid.tsx**: Portfolio display component
5. **AsciiCurtain.tsx**: Optional effect for homepage

### Motion Rules
- Page load: fade + 8px slide-up (0.4s)
- Card hover: lift 4px, slight tilt, accent glow
- Disable animations when prefers-reduced-motion
- Keep total JS ≤ 140 kB gzipped

### Performance Requirements
- LCP (mobile P75) ≤ 2.5s
- INP ≤ 200ms
- CLS ≤ 0.1
- Total JS ≤ 140 kB gzipped
- Lighthouse mobile score ≥ 90
- No contrast or alt-text errors 