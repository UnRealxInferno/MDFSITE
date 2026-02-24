import { Link } from "wouter";
import { Menu, X, Shield, ChevronRight, Crosshair, Map, Activity, BookOpen, Users, Clock, CheckCircle } from "lucide-react";
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
            <span className="flex items-center gap-3 group cursor-pointer" data-testid="link-logo">
              <img src={logoImg} alt="M.D.F Logo" className="w-10 h-10" />
              <span className="font-heading text-2xl font-bold tracking-[0.2em]">
                M.D.F PMC
              </span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8 font-heading text-xs tracking-[0.3em] font-bold">
            <a href="#about" className="hover:text-white/60 transition-colors uppercase" data-testid="link-nav-about">About</a>
            <a href="#ops" className="hover:text-white/60 transition-colors uppercase" data-testid="link-nav-ops">Operations</a>
            <a href="#requirements" className="hover:text-white/60 transition-colors uppercase" data-testid="link-nav-requirements">Requirements</a>
            <a href="#recruitment" className="hover:text-white/60 transition-colors uppercase" data-testid="link-nav-recruitment">Apply</a>
            <a href="#handbook" className="hover:text-white/60 transition-colors uppercase" data-testid="link-nav-handbook">Handbook</a>
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
          <img src={logoImg} alt="M.D.F PMC" className="w-32 h-32 mb-8 opacity-80" />
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-heading font-black leading-none mb-6 tracking-tighter">
            M.D.F <span className="text-white/20">PMC</span>
          </h1>
          
          <p className="max-w-xl text-lg text-muted-foreground mb-10 tracking-widest uppercase font-heading">
            Private Military Company // Established 2017
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <a href="#recruitment">
              <Button size="lg" className="bg-white text-black hover:bg-white/90 rounded-none font-heading text-sm tracking-[0.3em] uppercase h-14 px-12" data-testid="button-hero-enlist">
                Apply Now
              </Button>
            </a>
            <a href="#about">
              <Button size="lg" variant="outline" className="border-white/20 text-white hover:bg-white/5 rounded-none font-heading text-sm tracking-[0.3em] uppercase h-14 px-12" data-testid="button-hero-about">
                Learn More
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-32 bg-zinc-950">
        <div className="container mx-auto px-4 md:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-4 mb-12">
              <div className="h-[1px] flex-1 bg-white/10"></div>
              <Activity className="w-6 h-6 text-white/40" />
              <div className="h-[1px] flex-1 bg-white/10"></div>
            </div>
            
            <div className="text-center mb-20">
              <h2 className="text-4xl md:text-6xl font-heading font-black mb-4 tracking-tighter uppercase">About <span className="text-white/20">M.D.F</span></h2>
              <p className="text-sm text-muted-foreground tracking-[0.3em] uppercase mb-8">Established in 2017</p>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                Originally established as a security provider based in New York, The MDF transitioned into the realm of military solutions in 2017, a transformation catalysed by its involvement in managing a flashpoint crisis on Altis before NATO and CSTO intervention.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                The MDF does not represent any single nation, it operates on behalf of nations that seek out our services, with members around The Globe. The team is heavily inspired by Militaires Sans Frontières, a fictional mercenary unit that operated for clients regardless of nationality or identity.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Features / What We Offer */}
      <section id="ops" className="py-24 border-b border-white/5">
        <div className="container mx-auto px-4 md:px-8">
          <h2 className="text-4xl md:text-6xl font-heading font-black mb-16 tracking-tighter uppercase text-center">What We <span className="text-white/20">Offer</span></h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-16">
            <div className="border-l border-white/20 pl-8 py-4">
              <h4 className="font-heading text-lg font-bold mb-4 tracking-widest uppercase">Curated Mod Pack</h4>
              <p className="text-sm text-muted-foreground leading-loose">
                Carefully selected mods to ensure the best experience you can get.
              </p>
            </div>
            <div className="border-l border-white/20 pl-8 py-4">
              <h4 className="font-heading text-lg font-bold mb-4 tracking-widest uppercase">Advanced Combat Medicine</h4>
              <p className="text-sm text-muted-foreground leading-loose">
                Injuries and treatment have never been more realistic; Tuned for realism.
              </p>
            </div>
            <div className="border-l border-white/20 pl-8 py-4">
              <h4 className="font-heading text-lg font-bold mb-4 tracking-widest uppercase">Immersive Experience</h4>
              <p className="text-sm text-muted-foreground leading-loose">
                Thousands of tweaks, configurations and changes in house to ensure an immersive experience.
              </p>
            </div>
            <div className="border-l border-white/20 pl-8 py-4">
              <h4 className="font-heading text-lg font-bold mb-4 tracking-widest uppercase">Merit-Based Ranks</h4>
              <p className="text-sm text-muted-foreground leading-loose">
                Earn your rank through your contributions to the team. Ranks aren't locked behind donations unlike other teams.
              </p>
            </div>
          </div>

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

      {/* Membership Requirements */}
      <section id="requirements" className="py-32 bg-zinc-950">
        <div className="container mx-auto px-4 md:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-6xl font-heading font-black mb-4 tracking-tighter uppercase text-center">Got What It <span className="text-white/20">Takes?</span></h2>
            <p className="text-center text-muted-foreground mb-16 text-lg">Membership Requirements</p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
              <div className="flex items-start gap-4">
                <CheckCircle className="w-5 h-5 text-white/60 mt-1 flex-shrink-0" />
                <p className="text-muted-foreground">Speak English</p>
              </div>
              <div className="flex items-start gap-4">
                <CheckCircle className="w-5 h-5 text-white/60 mt-1 flex-shrink-0" />
                <p className="text-muted-foreground">Listen to orders and follow code of conduct</p>
              </div>
              <div className="flex items-start gap-4">
                <CheckCircle className="w-5 h-5 text-white/60 mt-1 flex-shrink-0" />
                <p className="text-muted-foreground">Able to attend at least one operation a week</p>
              </div>
              <div className="flex items-start gap-4">
                <CheckCircle className="w-5 h-5 text-white/60 mt-1 flex-shrink-0" />
                <p className="text-muted-foreground font-bold">18+ NO EXCEPTIONS</p>
              </div>
            </div>

            <div className="border border-white/10 p-8 mb-16">
              <h3 className="font-heading text-2xl font-bold mb-6 tracking-widest uppercase text-center">Operation Schedule</h3>
              <p className="text-center text-sm text-muted-foreground mb-6 tracking-[0.3em] uppercase">All times in UK Timezone</p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center border-l border-white/20 pl-4">
                  <Clock className="w-5 h-5 text-white/40 mx-auto mb-2" />
                  <h4 className="font-heading font-bold tracking-widest uppercase mb-1">Tuesday</h4>
                  <p className="text-sm text-muted-foreground">6:30PM Onwards (A3)</p>
                </div>
                <div className="text-center border-l border-white/20 pl-4">
                  <Clock className="w-5 h-5 text-white/40 mx-auto mb-2" />
                  <h4 className="font-heading font-bold tracking-widest uppercase mb-1">Thursday</h4>
                  <p className="text-sm text-muted-foreground">6:30PM Onwards (A3)</p>
                </div>
                <div className="text-center border-l border-white/20 pl-4">
                  <Clock className="w-5 h-5 text-white/40 mx-auto mb-2" />
                  <h4 className="font-heading font-bold tracking-widest uppercase mb-1">Sunday</h4>
                  <p className="text-sm text-muted-foreground">6:30PM Onwards (Reforger)</p>
                </div>
              </div>
            </div>

            <div className="text-center">
              <p className="text-lg text-muted-foreground leading-relaxed italic">
                Don't worry about your skill level when joining, our in-depth training sessions have got you covered. We keep an eye on all members across various types of training to make sure everyone is at peak performance.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Recruitment / Application Form */}
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
          <p className="text-muted-foreground mb-12 text-lg max-w-2xl mx-auto">
            Ready to join? Fill out our application form to get started.
          </p>
          <a href="https://forms.gle/DvNtsqjMjP28gdhH7" target="_blank" rel="noopener noreferrer">
            <Button size="lg" className="bg-white text-black hover:bg-white/90 rounded-none font-heading text-xl tracking-[0.4em] uppercase h-24 px-16 group" data-testid="button-cta-apply">
              Apply Now <ChevronRight className="ml-4 group-hover:translate-x-2 transition-transform" />
            </Button>
          </a>
        </div>
      </section>

      {/* Handbook Section */}
      <section id="handbook" className="py-24 bg-zinc-950 border-t border-white/5">
        <div className="container mx-auto px-4 md:px-8 text-center">
          <BookOpen className="w-12 h-12 text-white/40 mx-auto mb-6" />
          <h2 className="text-4xl md:text-5xl font-heading font-black uppercase tracking-tighter mb-6">
            Team <span className="text-white/20">Handbook</span>
          </h2>
          <p className="text-muted-foreground mb-8 text-lg max-w-2xl mx-auto">
            Read our team handbook for detailed information on procedures, guidelines, and everything you need to know about M.D.F PMC.
          </p>
          <a href="https://docs.google.com/document/d/1zkZBOdBcWz5M_NZ2LaUkru-aP1vJoOgVlVC8AqInTfA/edit?usp=sharing" target="_blank" rel="noopener noreferrer">
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-black rounded-none font-heading text-sm tracking-[0.3em] uppercase h-14 px-12" data-testid="button-handbook">
              View Handbook <ChevronRight className="ml-2" />
            </Button>
          </a>
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
            &copy; {new Date().getFullYear()} M.D.F PMC
          </div>
          <div className="flex gap-8 text-[10px] tracking-[0.3em] uppercase">
            <a href="#handbook" className="hover:text-white">Handbook</a>
            <a href="#recruitment" className="hover:text-white">Apply</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
