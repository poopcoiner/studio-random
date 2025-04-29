# Tasks

## Phase 1 - Core Setup (Completed)
- [x] Create proper directory structure
  - [x] Create /components directory
  - [x] Create /content directory
  - [x] Create page directories (/work, /services, /about, /contact, /legal)
- [x] Configure tailwind.config.js with design tokens from PRD
  - [x] Define colors (#0F0F0F, #F5F5F5, #35FFBE)
  - [x] Create font size utilities
  - [x] Configure typography plugins
- [x] Implement base layout with dark theme

## Phase 2 - Core Components (Completed)
- [x] Implement core components
  - [x] Header.tsx with numeric navigation
  - [x] Footer.tsx
  - [x] AsciiCurtain.tsx for hero animation (using CSS transitions)
  - [x] Card.tsx for portfolio items (using CSS transitions)
  - [x] PortfolioGrid.tsx for work display
- [x] Set up portfolio content structure
  - [x] Create /content/projects directory
  - [x] Define project MDX schema/frontmatter format
  - [x] Create utility functions for content fetching

## Phase 3 - Content Implementation
- [x] Implement animation system
  - [x] Create animation utility hooks (useReducedMotion, useGlitch)
  - [x] Implement PageTransition component
  - [x] Update GlitchText component
  - [x] Update Card component with hover effects
  - [x] Add CSS animations to globals.css
- [x] Implement copy as specified in PRD
  - [x] Hero section
    - [x] Headline: "DESIGN SHARP. CODE FAST. LAUNCH LOUD."
    - [x] Sub-headline: "We design the look, write the smart contracts, and run the launch—turning Web3 ideas into mainnet reality in a single sprint."
  - [x] Services section (Four Cards)
    - [x] Design pillar details
    - [x] Engineering pillar details 
    - [x] Launch pillar details
    - [x] Capital & Network pillar details
  - [x] Mini-manifesto (three principles)
  - [x] About section (~120 words)
  - [x] Contact section with email and Telegram
- [x] Implement portfolio projects
  - [x] BRO - Telegram trading companion
  - [x] JustSteve.xyz - Personal brand hub
  - [x] PhantomTrading.xyz - Automated trading suite
  - [x] Popcoinz.io - Fan-powered music economy
  - [x] Moodee.dev - Community coin

## Phase 4 - Font & Styling Implementation
- [ ] Font implementation
  - [ ] Download and add Plus Jakarta Sans Variable
  - [ ] Download and add Söhne Mono
  - [ ] Download and add Inter (fallback)
  - [ ] Configure font loading in Next.js

## Phase 5 - Optimization and Testing
- [ ] Performance optimization
  - [ ] Image optimization for portfolio items
  - [ ] Code splitting for route-based loading
  - [ ] Font loading optimization
  - [ ] Reduce JS payload to ≤ 140 kB gzipped
- [ ] Accessibility implementation
  - [ ] Test with screen readers
  - [ ] Verify keyboard navigation
  - [ ] Fix contrast and alt-text errors
- [ ] Final QA and validation
  - [ ] Verify all contact methods work
    - [ ] Email mailto:hello@studiorandom.xyz
    - [ ] Telegram link https://t.me/studiorandom
  - [ ] Cross-browser testing
  - [ ] Mobile responsive testing
  - [ ] Run Lighthouse tests (target score ≥ 90)

## Acceptance Criteria (Updated)
- [x] All copy implemented with no placeholders
- [x] Portfolio lists all five projects with working links
- [x] Email and Telegram buttons function correctly
- [ ] Build passes using pnpm build && next export
- [ ] Performance targets met
  - [ ] LCP (mobile P75) ≤ 2.5s
  - [ ] INP ≤ 200ms
  - [ ] CLS ≤ 0.1
  - [ ] Total JS ≤ 140 kB gzipped
  - [ ] Lighthouse mobile score ≥ 90
  - [ ] No contrast or alt-text errors

## Next Steps
1. Add and optimize font loading
2. Optimize performance to meet targets
3. Run final validation against acceptance criteria 