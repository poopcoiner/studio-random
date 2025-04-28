import PageTransition from "@/components/PageTransition";

export default function AboutPage() {
  return (
    <PageTransition>
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-h1 font-display uppercase tracking-tight mb-12">
          02 About
        </h1>
        
        {/* Studio Story */}
        <div className="max-w-2xl mb-16">
          <h2 className="font-display text-xl mb-6 border-b border-accent pb-2 inline-block">
            Our Story
          </h2>
          <p className="text-body leading-relaxed">
            STUDIO RANDOM began as a two-person skunk-works helping friends launch tokens that actually worked. 
            Today we're a distributed crew of designers, chain engineers and growth tacticians. We embed as 
            hidden co-founders—putting skin in the game alongside code—so founders move from spark to mainnet 
            before the window closes. We believe clarity beats noise, finished products beat promises, and 
            momentum beats marketing. If that sounds like your tempo, let's build.
          </p>
        </div>
        
        {/* Values */}
        <div className="mb-16">
          <h2 className="font-display text-xl mb-6 border-b border-accent pb-2 inline-block">
            Our Values
          </h2>
          <div className="flex flex-wrap gap-4">
            <div className="px-4 py-2 border border-accent/50 rounded-full">
              <span className="font-mono text-accent">Clarity</span>
            </div>
            <div className="px-4 py-2 border border-accent/50 rounded-full">
              <span className="font-mono text-accent">Speed</span>
            </div>
            <div className="px-4 py-2 border border-accent/50 rounded-full">
              <span className="font-mono text-accent">Craft</span>
            </div>
            <div className="px-4 py-2 border border-accent/50 rounded-full">
              <span className="font-mono text-accent">Integrity</span>
            </div>
            <div className="px-4 py-2 border border-accent/50 rounded-full">
              <span className="font-mono text-accent">Curiosity</span>
            </div>
          </div>
        </div>
        
        {/* Our Work */}
        <div className="mb-16">
          <h2 className="font-display text-xl mb-6 border-b border-accent pb-2 inline-block">
            Our Approach
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-bg border border-text/10 rounded-md p-6">
              <h3 className="font-mono text-accent mb-3">Design</h3>
              <p>We create visually striking and functionally intuitive designs that make your Web3 project look inevitable on day one.</p>
            </div>
            <div className="bg-bg border border-text/10 rounded-md p-6">
              <h3 className="font-mono text-accent mb-3">Build</h3>
              <p>Our engineers build gas-optimized smart contracts and responsive interfaces with security and performance as priorities.</p>
            </div>
            <div className="bg-bg border border-text/10 rounded-md p-6">
              <h3 className="font-mono text-accent mb-3">Launch</h3>
              <p>We coordinate seamless launches with liquidity provision, market making partnerships, and targeted promotion strategies.</p>
            </div>
          </div>
        </div>
      </div>
    </PageTransition>
  );
} 