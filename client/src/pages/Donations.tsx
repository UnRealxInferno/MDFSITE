import { useState, useEffect } from "react";
import { Menu, X, Heart, Shield, Server, Wrench, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

// Assets
import logoImg from "@assets/MDFNEW_1771880281933.png";

export default function Donations() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-white selection:text-black overflow-x-hidden">
      <div className="scanline"></div>

      {/* Navigation */}
      <nav
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-background/95 backdrop-blur-md border-b border-white/10 py-4"
            : "bg-transparent py-6"
        }`}
      >
        <div className="container mx-auto px-4 md:px-8 flex justify-between items-center">
          <a href="/" className="flex items-center gap-3 group">
            <img src={logoImg} alt="M.D.F Logo" className="w-10 h-10" />
            <span className="font-heading text-2xl font-bold tracking-[0.2em]">
              M.D.F PMC
            </span>
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8 font-heading text-xs tracking-[0.3em] font-bold">
            <a href="/#about" className="hover:text-white/60 transition-colors uppercase">About</a>
            <a href="/#ops" className="hover:text-white/60 transition-colors uppercase">Operations</a>
            <a href="/#requirements" className="hover:text-white/60 transition-colors uppercase">Requirements</a>
            <a href="/#recruitment" className="hover:text-white/60 transition-colors uppercase">Apply</a>
            <a href="/#community" className="hover:text-white/60 transition-colors uppercase">Community</a>
            <a href="/#handbook" className="hover:text-white/60 transition-colors uppercase">Handbook</a>
          </div>

          {/* Mobile Toggle */}
          <button
            className="md:hidden text-foreground"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-background/95 backdrop-blur-md border-t border-white/10 px-4 py-6 flex flex-col gap-6 font-heading text-xs tracking-[0.3em] font-bold uppercase">
            <a href="/#about" onClick={() => setMobileMenuOpen(false)} className="hover:text-white/60 transition-colors">About</a>
            <a href="/#ops" onClick={() => setMobileMenuOpen(false)} className="hover:text-white/60 transition-colors">Operations</a>
            <a href="/#requirements" onClick={() => setMobileMenuOpen(false)} className="hover:text-white/60 transition-colors">Requirements</a>
            <a href="/#recruitment" onClick={() => setMobileMenuOpen(false)} className="hover:text-white/60 transition-colors">Apply</a>
            <a href="/#community" onClick={() => setMobileMenuOpen(false)} className="hover:text-white/60 transition-colors">Community</a>
            <a href="/#handbook" onClick={() => setMobileMenuOpen(false)} className="hover:text-white/60 transition-colors">Handbook</a>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="relative pt-48 pb-32 flex items-center justify-center border-b border-white/5">
        <div className="absolute inset-0 z-0 bg-gradient-to-b from-zinc-900/50 to-background pointer-events-none"></div>
        <div className="container relative z-10 mx-auto px-4 md:px-8 text-center flex flex-col items-center">
          <div className="inline-block p-1 border border-white/10 mb-8">
            <div className="border border-white/20 px-4 py-1 text-[10px] tracking-[0.5em] uppercase font-bold text-white/60">
              Internal // Team Members Only
            </div>
          </div>
          <Heart className="w-16 h-16 text-white/30 mb-8" strokeWidth={1} />
          <h1 className="text-5xl md:text-7xl font-heading font-black leading-none mb-6 tracking-tighter uppercase">
            Support <span className="text-white/20">M.D.F</span>
          </h1>
          <p className="max-w-xl text-lg text-muted-foreground mb-4 tracking-widest uppercase font-heading">
            Keep The Mission Running
          </p>
          <p className="max-w-2xl text-base text-muted-foreground leading-relaxed">
            Contributions from team members help cover server hosting, infrastructure, and operational costs that keep M.D.F PMC running. Every contribution, no matter the size, is appreciated.
          </p>
        </div>
      </section>

      {/* What Donations Fund */}
      <section className="py-24 bg-zinc-950">
        <div className="container mx-auto px-4 md:px-8">
          <h2 className="text-3xl md:text-5xl font-heading font-black mb-4 tracking-tighter uppercase text-center">
            Where Your <span className="text-white/20">Support Goes</span>
          </h2>
          <p className="text-center text-muted-foreground mb-16 text-sm tracking-[0.3em] uppercase">Funding breakdown</p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-1 max-w-4xl mx-auto">
            <div className="border border-white/10 p-8 bg-zinc-900/50 flex flex-col gap-4">
              <Server className="w-8 h-8 text-white/40" strokeWidth={1.5} />
              <h3 className="font-heading text-xl font-bold tracking-widest uppercase">Server Hosting</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Dedicated game servers for Arma 3 and Reforger operations, ensuring low latency and stable performance during every operation.
              </p>
            </div>
            <div className="border border-white/10 p-8 bg-zinc-900/50 flex flex-col gap-4">
              <Shield className="w-8 h-8 text-white/40" strokeWidth={1.5} />
              <h3 className="font-heading text-xl font-bold tracking-widest uppercase">Infrastructure</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Website hosting, domain costs, and backend services that keep the M.D.F digital presence operational around the clock.
              </p>
            </div>
            <div className="border border-white/10 p-8 bg-zinc-900/50 flex flex-col gap-4">
              <Wrench className="w-8 h-8 text-white/40" strokeWidth={1.5} />
              <h3 className="font-heading text-xl font-bold tracking-widest uppercase">Development</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Tools, software licenses, and resources used to build and improve the milsim experience for every member of the team.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Donation Options */}
      <section className="py-32 border-t border-white/5">
        <div className="container mx-auto px-4 md:px-8">
          <h2 className="text-3xl md:text-5xl font-heading font-black mb-4 tracking-tighter uppercase text-center">
            Choose Your <span className="text-white/20">Contribution</span>
          </h2>
          <p className="text-center text-muted-foreground mb-16 text-sm tracking-[0.3em] uppercase">One-time or recurring — every bit helps</p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto">

            {/* One-Time Donation */}
            <div className="border border-white/10 p-8 bg-zinc-900/30 flex flex-col gap-6">
              <div>
                <h3 className="font-heading text-2xl font-bold tracking-widest uppercase mb-2">One-Time Donation</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Make a single contribution of any amount to help cover operational costs.
                </p>
              </div>
              <div className="h-[1px] bg-white/10"></div>
              <div className="flex flex-col items-center gap-4">
                {/* TODO: Replace REPLACE_WITH_BUTTON_ID with your PayPal hosted button ID from paypal.com/buttons */}
                <form action="https://www.paypal.com/donate" method="post" target="_blank">
                  <input type="hidden" name="hosted_button_id" value="REPLACE_WITH_BUTTON_ID" />
                  <button
                    type="submit"
                    className="w-full bg-white text-black hover:bg-white/90 font-heading text-sm tracking-[0.3em] uppercase h-14 px-10 flex items-center justify-center gap-3 transition-colors"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor">
                      <path d="M7.076 21.337H2.47a.641.641 0 0 1-.633-.74L4.944.901C5.026.382 5.474 0 5.998 0h7.46c2.57 0 4.578.543 5.69 1.81 1.01 1.15 1.304 2.42 1.012 4.287-.023.143-.047.288-.077.437-.983 5.05-4.349 6.797-8.647 6.797h-2.19c-.524 0-.968.382-1.05.9l-1.12 7.106zm14.146-14.42a3.35 3.35 0 0 0-.607-.541c-.013.076-.026.175-.041.254-.59 3.025-2.566 6.082-8.558 6.082h-2.19a2.16 2.16 0 0 0-2.13 1.82l-1.12 7.106-.314 2H9.6l.388-2.46.006-.04 1.112-7.048.071-.45h.57c4.506 0 8.033-1.83 9.063-7.118.176-.91.18-1.672-.588-2.605z"/>
                    </svg>
                    Donate via PayPal
                  </button>
                </form>
                <p className="text-[10px] text-white/30 tracking-widest uppercase text-center">
                  Secured by PayPal
                </p>
              </div>
            </div>

            {/* Monthly Subscription */}
            <div className="border border-white/20 p-8 bg-zinc-900/30 flex flex-col gap-6 relative">
              <div className="absolute top-0 right-0 bg-white text-black text-[10px] font-heading font-bold tracking-[0.3em] uppercase px-3 py-1">
                Recommended
              </div>
              <div>
                <h3 className="font-heading text-2xl font-bold tracking-widest uppercase mb-2">Monthly Support</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Set up a recurring monthly contribution to provide consistent support for the team's infrastructure.
                </p>
              </div>
              <div className="h-[1px] bg-white/10"></div>
              <div className="flex flex-col items-center gap-4">
                {/* TODO: Replace REPLACE_WITH_PLAN_ID with your PayPal subscription plan ID from paypal.com/billing/plans */}
                <form action="https://www.paypal.com/webapps/billing/plans/subscribe" method="post" target="_blank">
                  <input type="hidden" name="plan_id" value="REPLACE_WITH_PLAN_ID" />
                  <button
                    type="submit"
                    className="w-full border border-white text-white hover:bg-white hover:text-black font-heading text-sm tracking-[0.3em] uppercase h-14 px-10 flex items-center justify-center gap-3 transition-colors"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor">
                      <path d="M7.076 21.337H2.47a.641.641 0 0 1-.633-.74L4.944.901C5.026.382 5.474 0 5.998 0h7.46c2.57 0 4.578.543 5.69 1.81 1.01 1.15 1.304 2.42 1.012 4.287-.023.143-.047.288-.077.437-.983 5.05-4.349 6.797-8.647 6.797h-2.19c-.524 0-.968.382-1.05.9l-1.12 7.106zm14.146-14.42a3.35 3.35 0 0 0-.607-.541c-.013.076-.026.175-.041.254-.59 3.025-2.566 6.082-8.558 6.082h-2.19a2.16 2.16 0 0 0-2.13 1.82l-1.12 7.106-.314 2H9.6l.388-2.46.006-.04 1.112-7.048.071-.45h.57c4.506 0 8.033-1.83 9.063-7.118.176-.91.18-1.672-.588-2.605z"/>
                    </svg>
                    Subscribe via PayPal
                  </button>
                </form>
                <p className="text-[10px] text-white/30 tracking-widest uppercase text-center">
                  Cancel anytime // Secured by PayPal
                </p>
              </div>
            </div>
          </div>

          {/* Disclaimer */}
          <div className="max-w-3xl mx-auto mt-12 border-l border-white/10 pl-6">
            <p className="text-xs text-muted-foreground leading-relaxed">
              <span className="font-heading font-bold uppercase tracking-widest text-white/40">Note: </span>
              Donations are entirely voluntary and are used solely to maintain and improve the M.D.F PMC infrastructure. No in-game ranks, advantages, or positions are tied to financial contributions. M.D.F PMC is a non-profit community group.
            </p>
          </div>
        </div>
      </section>

      {/* Simple Footer */}
      <footer className="py-12 border-t border-white/5 bg-black">
        <div className="container mx-auto px-4 md:px-8 flex flex-col md:flex-row justify-between items-center gap-8 opacity-40">
          <div className="flex items-center gap-3">
            <img src={logoImg} alt="Logo" className="w-6 h-6" />
            <span className="font-heading font-bold tracking-[0.2em]">M.D.F PMC</span>
          </div>
          <div className="text-[10px] tracking-[0.3em] uppercase">
            &copy; 2017-2026 M.D.F PMC
          </div>
          <div className="flex gap-8 text-[10px] tracking-[0.3em] uppercase">
            <a href="/#handbook" className="hover:text-white">Handbook</a>
            <a href="/#recruitment" className="hover:text-white">Apply</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
