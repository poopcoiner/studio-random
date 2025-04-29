# Project Brief: Studio Random - Dark Elegance

## Overview
A website for Studio Random featuring a dark design language with glitch text elements. The design focuses on a black canvas, neon accent colors, numeric section labels, and a portfolio grid with case pages.

## Stack
- Framework: Next.js 14 (App Router, static export)
- Styling: Tailwind CSS
- Motion: Framer Motion ≤ 140 kB (disabled for prefers-reduced-motion)
- Content: MDX files in `/content`
- Hosting: Vercel
- Analytics: Plausible

## Site Map & Navigation
```
/            – Home
/work        – Portfolio grid + case pages
/services    – Four-pillar overview
/about       – Team & ethos
/contact     – Email + Telegram
/legal       – T&Cs
```
Header links (mono font): 00 Work 01 Services 02 About 03 Contact

## Design Direction
- Dark theme with black background (`#0F0F0F`) and light text (`#F5F5F5`)
- Neon green accent color (`#35FFBE`)
- Numeric section labels in header and page titles
- Glitch text effects preserved
- Minimalist, elegant motion effects

## Copy Elements
- Hero Headline: "DESIGN SHARP. CODE FAST. LAUNCH LOUD."
- Sub-headline: "We design the look, write the smart contracts, and run the launch—turning Web3 ideas into mainnet reality in a single sprint."
- Four service pillars: Design, Engineering, Launch, Capital & Network
- Mini-manifesto with three principles
- Portfolio with five projects (BRO, JustSteve.xyz, PhantomTrading.xyz, Popcoinz.io, Moodee.dev)
- About section (~120 words)
- Contact with email and Telegram

## Performance Targets
- Largest Contentful Paint (mobile P75) ≤ 2.5s
- Interaction to Next Paint ≤ 200ms
- Cumulative Layout Shift ≤ 0.1
- Total JS payload ≤ 140 kB gzipped
- Lighthouse mobile score ≥ 90
- No contrast or alt-text errors
- All flows operable with motion disabled 