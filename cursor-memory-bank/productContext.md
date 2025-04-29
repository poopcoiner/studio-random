# Product Context

## Website Purpose
Studio Random website serves as the online presence for a design and engineering studio focused on Web3 projects. The site showcases their work, services, and ethos with a dark, elegant aesthetic featuring neon accents, numeric navigation, and glitch text effects.

## Page Structure & Content

### Home (`/`)
- **Hero Section**: 
  - Headline: "DESIGN SHARP. CODE FAST. LAUNCH LOUD."
  - Sub-headline: "We design the look, write the smart contracts, and run the launch—turning Web3 ideas into mainnet reality in a single sprint."

- **What We Do Section**: Four service pillar cards
  - **Design**: Names, logos, UI kits, character & meme art—everything a token needs to look inevitable on day one. (48h Figma → code)
  - **Engineering**: Gas-optimised ERC-20/SPL contracts, bespoke bots, audits, APIs. 40+ contracts, 0 exploits. (0 exploits)
  - **Launch**: Liquidity, listings, community & comms packs. Median 30 min from TGE to trending. (30 min to trend)
  - **Capital & Network**: Pre-seed tickets and fast intros to launchpads, market-makers and promo partners. (25+ partner routes)

- **Mini-manifesto**: Three principles
  - Momentum rewards finished products.
  - Clarity compounds faster than hype.
  - Ship, measure, iterate.

### Work (`/work`)
- **Portfolio Grid**:
  1. **BRO**: Telegram trading companion—18k wallets in week 1 (UI/UX + bot dev)
  2. **JustSteve.xyz**: Personal brand hub for a crypto creator (Naming, branding, site)
  3. **PhantomTrading.xyz**: Automated trading suite mirroring pro strategies (Product strategy, UI/UX, branding, backend)
  4. **Popcoinz.io**: Fan-powered music economy where fans own a stake in artists (Brand system, UI kit, responsive site)
  5. **Moodee.dev**: Community coin with sentiment-driven dynamic tax system (UI/UX, website, token mechanics)
  
- **Case Study Pages**: 
  - Each project has a dedicated page with Challenge, Solution, Results (≤3 metrics), and 1-3 images

### Services (`/services`)
- Four-pillar overview matching the home page cards with more detail

### About (`/about`)
- **Studio Story** (~120 words):
  - Studio Random began as a two-person skunk-works helping friends launch tokens that actually worked. Today they're a distributed crew of designers, chain engineers and growth tacticians. They embed as hidden co-founders—putting skin in the game alongside code—so founders move from spark to mainnet before the window closes. They believe clarity beats noise, finished products beat promises, and momentum beats marketing.
  
- **Values**: Clarity • Speed • Craft • Integrity • Curiosity

### Contact (`/contact`)
- Tagline: "Talk is cheap. Shipping isn't. Ping us—reply in < 24 h."
- Two buttons:
  - Email: mailto:hello@studiorandom.xyz
  - Telegram: https://t.me/studiorandom

### Legal (`/legal`)
- Terms and conditions page

## Design Elements
- Dark background (#0F0F0F) with light text (#F5F5F5)
- Neon green accent color (#35FFBE)
- Mono font for navigation with numeric section labels
- Fonts: Plus Jakarta Sans (display), Söhne Mono (mono), Inter (sans)
- Motion effects: fade + slide animations, hover effects
- Glitch text preserved from previous version

## Performance Requirements
- LCP (mobile P75) ≤ 2.5s
- INP ≤ 200ms
- CLS ≤ 0.1
- Total JS ≤ 140 kB gzipped
- Lighthouse mobile score ≥ 90
- No contrast or alt-text errors
- All animations respect prefers-reduced-motion 