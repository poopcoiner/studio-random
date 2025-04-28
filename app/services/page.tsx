import PageTransition from "@/components/PageTransition";

export default function ServicesPage() {
  return (
    <PageTransition>
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-h1 font-display uppercase tracking-tight mb-12">
          02 Services
        </h1>
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-12">
          {/* Design Services */}
          <div className="space-y-4">
            <h2 className="font-display text-xl border-b border-accent pb-2">
              Design
            </h2>
            <p className="text-text/80 leading-relaxed">
              Names, logos, UI kits, character & meme art—everything a token needs to look inevitable on day one.
            </p>
            <div className="font-mono text-sm mt-6">
              <div className="flex justify-between items-center">
                <span className="text-accent">Figma → code</span>
                <span className="text-lg">48h</span>
              </div>
            </div>
          </div>
          
          {/* Engineering Services */}
          <div className="space-y-4">
            <h2 className="font-display text-xl border-b border-accent pb-2">
              Engineering
            </h2>
            <p className="text-text/80 leading-relaxed">
              Gas-optimised ERC-20/SPL contracts, bespoke bots, audits, APIs. 40+ contracts, 0 exploits.
            </p>
            <div className="font-mono text-sm mt-6">
              <div className="flex justify-between items-center">
                <span className="text-accent">Exploits</span>
                <span className="text-lg">0</span>
              </div>
            </div>
          </div>
          
          {/* Launch Services */}
          <div className="space-y-4">
            <h2 className="font-display text-xl border-b border-accent pb-2">
              Launch
            </h2>
            <p className="text-text/80 leading-relaxed">
              Liquidity, listings, community & comms packs. Median 30 min from TGE to trending.
            </p>
            <div className="font-mono text-sm mt-6">
              <div className="flex justify-between items-center">
                <span className="text-accent">TGE to trend</span>
                <span className="text-lg">30 min</span>
              </div>
            </div>
          </div>
          
          {/* Capital & Network Services */}
          <div className="space-y-4">
            <h2 className="font-display text-xl border-b border-accent pb-2">
              Capital & Network
            </h2>
            <p className="text-text/80 leading-relaxed">
              Pre-seed tickets and fast intros to launchpads, market-makers and promo partners.
            </p>
            <div className="font-mono text-sm mt-6">
              <div className="flex justify-between items-center">
                <span className="text-accent">Partner routes</span>
                <span className="text-lg">25+</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-20 bg-bg border border-text/10 rounded-md p-8 max-w-2xl mx-auto">
          <h2 className="font-display text-xl mb-4 text-center">
            Ready to start a project?
          </h2>
          <p className="text-center mb-6">
            Let's discuss how we can help bring your vision to life.
          </p>
          <div className="flex justify-center">
            <a 
              href="/contact" 
              className="inline-block border border-accent px-6 py-3 rounded-full font-mono hover:bg-accent hover:text-bg transition-colors"
            >
              Get in touch
            </a>
          </div>
        </div>
      </div>
    </PageTransition>
  );
} 