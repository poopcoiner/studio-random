# Active Context

## Current Project State
The Studio Random website implementation is being updated with new requirements. The key focus areas are:

1. **Tech Stack Specifics**
   - Next.js 14 (static export)
   - Tailwind CSS
   - Framer Motion ≤ 140 kB (disabled for prefers-reduced-motion)
   - MDX files in /content
   - Vercel hosting
   - Plausible analytics

2. **Site Map & Navigation**
   - Homepage (/)
   - Work page (/work) - Portfolio grid + case pages
   - Services page (/services) - Four-pillar overview
   - About page (/about) - Team & ethos
   - Contact page (/contact) - Email + Telegram
   - Legal page (/legal) - T&Cs
   - Header links in mono font: "00 Work 01 Services 02 About 03 Contact"

3. **Copy Requirements**
   - Hero headline: "DESIGN SHARP. CODE FAST. LAUNCH LOUD."
   - Sub-headline about Web3 ideas
   - Four service pillars: Design, Engineering, Launch, Capital & Network
   - Mini-manifesto with three principles
   - Portfolio with five specific projects
   - About section (~120 words)
   - Contact with email and Telegram links

## Design Specifications
- Dark theme with black background (#0F0F0F) and light text (#F5F5F5)
- Neon green accent color (#35FFBE)
- Tailwind design tokens defined:
  ```js
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
  ```

## Portfolio Content
Five projects must be included:
1. BRO - Telegram trading companion (18k wallets in week 1)
2. JustSteve.xyz - Personal brand hub for a crypto creator
3. PhantomTrading.xyz - Automated trading suite
4. Popcoinz.io - Fan-powered music economy
5. Moodee.dev - Community coin with sentiment-driven dynamic tax system

Card layout: logo • tagline • "View Case"
Case MDX page fields: Challenge · Solution · Results (≤ 3 metrics) · 1–3 images

## Motion Rules
- Page load: fade + 8px slide-up (0.4s)
- Card hover: lift 4px, slight tilt, accent glow
- Disable when prefers-reduced-motion

## Performance & A11y Targets
- LCP (mobile P75) ≤ 2.5s
- INP ≤ 200ms
- CLS ≤ 0.1
- Total JS ≤ 140 kB gzipped
- Lighthouse mobile score ≥ 90
- No contrast or alt-text errors

## Acceptance Checklist
- All copy rendered with no placeholders
- Portfolio lists all five projects with working links
- Email & Telegram buttons function
- Build passes using pnpm build && next export
- Performance targets met on test devices 