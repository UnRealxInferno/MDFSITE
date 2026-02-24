import { Link } from "wouter";
import { Menu, X, Shield, ChevronRight, Crosshair, Map, Activity } from "lucide-react";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";

// Assets
import logoImg from "@assets/MDFNEW_1771880281933.png";
import heroImg from "@assets/107410-20200628093536-1_orig_upscaled_1771880281933.png";
import securityImg from "@assets/security-detail_orig_1771880297339.png";
import boatImg from "@assets/showboat_orig_1771880297339.png";
import heliImg from "@assets/unknown_orig_1771880297339.png";

export default function Home() {
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
          <Link href="/">
            <a className="flex items-center gap-3 group" data-testid="link-logo">
              <img src={logoImg} alt="M.D.F Logo" className="w-10 h-10 grayscale invert brightness-200" />
              <span className="font-heading text-2xl font-bold tracking-[0.2em]">
                M.D.F
              </span>
            </a>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8 font-heading text-xs tracking-[0.3em] font-bold">
            <a href="#ops" className="hover:text-white/60 transition-colors uppercase" data-testid="link-nav-ops">Operations</a>
            <a href="#intel" className="hover:text-white/60 transition-colors uppercase" data-testid="link-nav-intel">Intel</a>
            <a href="#recruitment" className="hover:text-white/60 transition-colors uppercase" data-testid="link-nav-recruitment">Recruitment</a>
            <Button variant="outline" className="border-white text-white hover:bg-white hover:text-black rounded-none font-heading tracking-[0.2em] uppercase text-[10px]" data-testid="button-nav-join">
              Initialize
            </Button>
          </div>

          {/* Mobile Toggle */}
          <button 
            className="md:hidden text-foreground"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            data-testid="button-mobile-menu"
          >
            {mobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative h-[90vh] flex items-center justify-center overflow-hidden border-b border-white/5">
        <div className="absolute inset-0 z-0">
          <img 
            src={heroImg} 
            alt="Milsim Environment" 
            className="w-full h-full object-cover grayscale brightness-50"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/20"></div>
        </div>

        <div className="container relative z-10 mx-auto px-4 md:px-8 text-center flex flex-col items-center">
          <img src={logoImg} alt="M.D.F" className="w-32 h-32 mb-8 grayscale invert brightness-200 opacity-80" />
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-heading font-black leading-none mb-6 tracking-tighter">
            M.D.F <span className="text-white/20">UNIT</span>
          </h1>
          
          <p className="max-w-xl text-lg text-muted-foreground mb-10 tracking-widest uppercase font-heading">
            Multinational Deployment Force // Tactical Supremacy // Grayscale Protocol
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <Button size="lg" className="bg-white text-black hover:bg-white/90 rounded-none font-heading text-sm tracking-[0.3em] uppercase h-14 px-12" data-testid="button-hero-enlist">
              Enlist
            </Button>
            <Button size="lg" variant="outline" className="border-white/20 text-white hover:bg-white/5 rounded-none font-heading text-sm tracking-[0.3em] uppercase h-14 px-12" data-testid="button-hero-comms">
              Comms
            </Button>
          </div>
        </div>
      </section>

      {/* Grid Features */}
      <section id="ops" className="py-24 border-b border-white/5">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-1">
            <div className="group relative aspect-[4/5] overflow-hidden bg-zinc-900 border border-white/5">
              <img src={securityImg} alt="Security" className="w-full h-full object-cover grayscale opacity-40 group-hover:opacity-60 transition-all duration-700 group-hover:scale-105" />
              <div className="absolute inset-0 p-8 flex flex-col justify-end bg-gradient-to-t from-black to-transparent">
                <h3 className="text-2xl font-heading font-bold mb-2">PROTECTION</h3>
                <p className="text-xs text-muted-foreground tracking-widest uppercase">Asset Security // Transport Control</p>
              </div>
            </div>
            <div className="group relative aspect-[4/5] overflow-hidden bg-zinc-900 border border-white/5">
              <img src={boatImg} alt="Maritime" className="w-full h-full object-cover grayscale opacity-40 group-hover:opacity-60 transition-all duration-700 group-hover:scale-105" />
              <div className="absolute inset-0 p-8 flex flex-col justify-end bg-gradient-to-t from-black to-transparent">
                <h3 className="text-2xl font-heading font-bold mb-2">INTERDICTION</h3>
                <p className="text-xs text-muted-foreground tracking-widest uppercase">Maritime Ops // Area Denial</p>
              </div>
            </div>
            <div className="group relative aspect-[4/5] overflow-hidden bg-zinc-900 border border-white/5">
              <img src={heliImg} alt="Airborne" className="w-full h-full object-cover grayscale opacity-40 group-hover:opacity-60 transition-all duration-700 group-hover:scale-105" />
              <div className="absolute inset-0 p-8 flex flex-col justify-end bg-gradient-to-t from-black to-transparent">
                <h3 className="text-2xl font-heading font-bold mb-2">INSERTION</h3>
                <p className="text-xs text-muted-foreground tracking-widest uppercase">Rapid Deployment // Air Cavalry</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Intel Section */}
      <section id="intel" className="py-32 bg-zinc-950">
        <div className="container mx-auto px-4 md:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-4 mb-12">
              <div className="h-[1px] flex-1 bg-white/10"></div>
              <Activity className="w-6 h-6 text-white/40" />
              <div className="h-[1px] flex-1 bg-white/10"></div>
            </div>
            
            <div className="text-center mb-20">
              <h2 className="text-4xl md:text-6xl font-heading font-black mb-8 tracking-tighter uppercase">Our <span className="text-white/20">Philosophy</span></h2>
              <p className="text-xl text-muted-foreground leading-relaxed font-light italic">
                "We operate in the gray space. No nation, no politics, only the contract. 
                Efficiency is our only metric, success is our only currency."
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div className="border-l border-white/20 pl-8 py-4">
                <h4 className="font-heading text-lg font-bold mb-4 tracking-widest uppercase">Global Operations</h4>
                <p className="text-sm text-muted-foreground leading-loose">
                  Our network spans across every major theater. We provide logistics and tactical support where others cannot.
                </p>
              </div>
              <div className="border-l border-white/20 pl-8 py-4">
                <h4 className="font-heading text-lg font-bold mb-4 tracking-widest uppercase">Professionalism</h4>
                <p className="text-sm text-muted-foreground leading-loose">
                  M.D.F maintains the highest standards of simulation integrity. We are a community built on mutual respect and tactical growth.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Recruitment CTA */}
      <section id="recruitment" className="py-32 border-t border-white/5">
        <div className="container mx-auto px-4 text-center">
          <div className="inline-block p-1 border border-white/10 mb-8">
            <div className="border border-white/20 px-4 py-1 text-[10px] tracking-[0.5em] uppercase font-bold text-white/60">
              Status: Open
            </div>
          </div>
          <h2 className="text-5xl md:text-7xl font-heading font-black uppercase tracking-tighter mb-8">
            Enlist in <span className="text-white/20">M.D.F</span>
          </h2>
          <Button size="lg" className="bg-white text-black hover:bg-white/90 rounded-none font-heading text-xl tracking-[0.4em] uppercase h-24 px-16 group" data-testid="button-cta-apply">
            Apply Now <ChevronRight className="ml-4 group-hover:translate-x-2 transition-transform" />
          </Button>
        </div>
      </section>

      {/* Simple Footer */}
      <footer className="py-12 border-t border-white/5 bg-black">
        <div className="container mx-auto px-4 md:px-8 flex flex-col md:flex-row justify-between items-center gap-8 opacity-40">
          <div className="flex items-center gap-3">
             <img src={logoImg} alt="Logo" className="w-6 h-6 grayscale invert brightness-200" />
             <span className="font-heading font-bold tracking-[0.2em]">M.D.F</span>
          </div>
          <div className="text-[10px] tracking-[0.3em] uppercase">
            &copy; {new Date().getFullYear()} Multinational Deployment Force
          </div>
          <div className="flex gap-8 text-[10px] tracking-[0.3em] uppercase">
            <a href="#" className="hover:text-white">Terms</a>
            <a href="#" className="hover:text-white">Privacy</a>
            <a href="#" className="hover:text-white">Comms</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
