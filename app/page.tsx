import Link from "next/link";
import AsciiCurtain from "@/components/AsciiCurtain";
import GlitchText from "@/components/GlitchText";
import PageTransition from "@/components/PageTransition";
import { getAllProjects, Project } from "@/utils/projects";
import Card from "@/components/Card";

export default function Home() {
  // Get the first 3 projects for the home page
  const projects = getAllProjects().slice(0, 3);
  
  return (
    <PageTransition>
      {/* ASCII Curtain Effect */}
      <AsciiCurtain />
      
      {/* Hero Section */}
      <section className="py-20 md:py-32 px-4">
        <div className="container mx-auto">
          <h1 className="text-h0 font-display uppercase tracking-tight mb-4">
            <GlitchText tag="span" intensity={1.2}>
              DESIGN SHARP. CODE FAST. LAUNCH LOUD.
            </GlitchText>
          </h1>
          <p className="mt-6 text-body max-w-xl text-text/80">
            We design the look, write the smart contracts, and run the launch—turning Web3 ideas into mainnet reality in a single sprint.
          </p>
        </div>
      </section>

      {/* What We Do Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <h2 className="text-h1 font-display uppercase tracking-tight mb-12">
            00 What We Do
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Design Pillar */}
            <div className="bg-bg border border-text/10 rounded-md overflow-hidden p-6">
              <h3 className="text-xl font-display mb-3">Design</h3>
              <p className="text-text/80 mb-4">
                Names, logos, UI kits, character & meme art—everything a token needs to look inevitable on day one.
              </p>
              <div className="font-mono text-accent mt-auto">48h Figma → code</div>
            </div>
            
            {/* Engineering Pillar */}
            <div className="bg-bg border border-text/10 rounded-md overflow-hidden p-6">
              <h3 className="text-xl font-display mb-3">Engineering</h3>
              <p className="text-text/80 mb-4">
                Gas-optimised ERC-20/SPL contracts, bespoke bots, audits, APIs. 40+ contracts, 0 exploits.
              </p>
              <div className="font-mono text-accent mt-auto">0 exploits</div>
            </div>
            
            {/* Launch Pillar */}
            <div className="bg-bg border border-text/10 rounded-md overflow-hidden p-6">
              <h3 className="text-xl font-display mb-3">Launch</h3>
              <p className="text-text/80 mb-4">
                Liquidity, listings, community & comms packs. Median 30 min from TGE to trending.
              </p>
              <div className="font-mono text-accent mt-auto">30 min to trend</div>
            </div>
            
            {/* Capital & Network Pillar */}
            <div className="bg-bg border border-text/10 rounded-md overflow-hidden p-6">
              <h3 className="text-xl font-display mb-3">Capital & Network</h3>
              <p className="text-text/80 mb-4">
                Pre-seed tickets and fast intros to launchpads, market-makers and promo partners.
              </p>
              <div className="font-mono text-accent mt-auto">25+ partner routes</div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Selected Work Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <h2 className="text-h1 font-display uppercase tracking-tight mb-12">
            01 Selected Work
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project: Project) => (
              <Card key={project.slug} project={project} />
            ))}
          </div>
          
          <div className="mt-12 text-center">
            <Link
              href="/work"
              className="inline-block border border-accent px-6 py-3 rounded-full font-mono hover:bg-accent hover:text-bg transition-colors"
            >
              View All Work
            </Link>
          </div>
        </div>
      </section>

      {/* Mini Manifesto */}
      <section className="py-16 px-4 bg-bg border-y border-text/10">
        <div className="container mx-auto max-w-2xl">
          <h2 className="text-h1 font-display uppercase tracking-tight mb-8 text-center">
            02 Mini-Manifesto
          </h2>
          <ul className="space-y-6 font-mono text-lg">
            <li className="flex items-start">
              <span className="text-accent mr-3">01.</span>
              <span>Momentum rewards finished products.</span>
            </li>
            <li className="flex items-start">
              <span className="text-accent mr-3">02.</span>
              <span>Clarity compounds faster than hype.</span>
            </li>
            <li className="flex items-start">
              <span className="text-accent mr-3">03.</span>
              <span>Ship, measure, iterate.</span>
            </li>
          </ul>
        </div>
      </section>
    </PageTransition>
  );
}
