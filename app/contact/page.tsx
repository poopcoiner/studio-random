import PageTransition from "@/components/PageTransition";

export default function ContactPage() {
  return (
    <PageTransition>
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-h1 font-display uppercase tracking-tight mb-6">
          03 Contact
        </h1>
        
        <div className="max-w-xl">
          <p className="text-body leading-relaxed mb-12">
            Talk is cheap. Shipping isn't. Ping us—reply in &lt; 24 h.
          </p>
          
          <div className="space-y-8">
            {/* Email Button */}
            <div className="bg-bg border border-text/10 rounded-md p-8">
              <h2 className="font-display text-xl mb-4">Email Us</h2>
              <p className="mb-6 text-text/80">
                For project inquiries, collaborations, or general questions.
              </p>
              <a 
                href="mailto:hello@studiorandom.xyz" 
                className="inline-block border border-accent px-6 py-3 rounded-full font-mono hover:bg-accent hover:text-bg transition-colors"
              >
                hello@studiorandom.xyz
              </a>
            </div>
            
            {/* Telegram Button */}
            <div className="bg-bg border border-text/10 rounded-md p-8">
              <h2 className="font-display text-xl mb-4">Message on Telegram</h2>
              <p className="mb-6 text-text/80">
                For quicker responses and informal chats about potential projects.
              </p>
              <a 
                href="https://t.me/studiorandom" 
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block border border-accent px-6 py-3 rounded-full font-mono hover:bg-accent hover:text-bg transition-colors"
              >
                @studiorandom
              </a>
            </div>
          </div>
          
          <div className="mt-16 font-mono text-sm">
            <p className="text-accent">We work with clients globally, across all time zones.</p>
          </div>
        </div>
      </div>
    </PageTransition>
  );
} 