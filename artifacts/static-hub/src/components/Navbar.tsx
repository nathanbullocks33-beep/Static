import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

const NAV_LINKS = [
  { name: "Home", href: "#home" },
  { name: "Games", href: "#supported-games" },
  { name: "Pricing", href: "#pricing" },
  { name: "Payment Methods", href: "#payment-methods" },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
    setMobileMenuOpen(false);
  };

  return (
    <header
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-300",
        isScrolled 
          ? "bg-[#080808]/80 backdrop-blur-xl border-b border-white/10 py-4 shadow-lg shadow-black/50" 
          : "bg-transparent border-transparent py-6"
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <img 
              src="/images/static-logo.jpeg" 
              alt="Static Hub" 
              className="w-10 h-10 rounded object-cover shadow-lg shadow-primary/20" 
            />
            <span className="font-display font-bold text-2xl tracking-tight text-white">
              Static Hub
            </span>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => scrollToSection(e, link.href)}
                className="text-sm font-medium text-muted-foreground hover:text-white hover:text-primary transition-all duration-300"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* CTAs */}
          <div className="hidden lg:flex items-center gap-4">
            <a 
              href="https://static.sellhub.cx/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="px-6 py-2 rounded-xl text-sm font-medium text-white border border-white/10 hover:border-primary/50 hover:bg-primary/10 transition-all duration-300 shadow-[0_0_15px_rgba(0,212,255,0.0)] hover:shadow-[0_0_15px_rgba(0,212,255,0.15)]"
            >
              Store
            </a>
            <a 
              href="https://discord.gg/dWrW52vNy" 
              target="_blank" 
              rel="noopener noreferrer"
              className="px-6 py-2 rounded-xl text-sm font-bold text-white bg-primary hover:bg-primary/90 shadow-lg shadow-primary/25 hover:shadow-primary/40 hover:-translate-y-0.5 transition-all duration-300"
            >
              Discord
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="lg:hidden p-2 text-muted-foreground hover:text-white transition-colors focus:outline-none"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden border-t border-white/10 bg-[#080808]/95 backdrop-blur-xl overflow-hidden shadow-2xl"
          >
            <div className="px-4 py-6 space-y-4 flex flex-col max-w-7xl mx-auto">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => scrollToSection(e, link.href)}
                  className="text-lg font-medium text-muted-foreground hover:text-white transition-colors px-2 py-2 border-b border-white/5 last:border-none"
                >
                  {link.name}
                </a>
              ))}
              <div className="pt-6 flex flex-col gap-3">
                <a 
                  href="https://static.sellhub.cx/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center h-12 rounded-xl border border-white/10 text-white font-medium hover:bg-white/5 transition-colors"
                >
                  Store
                </a>
                <a 
                  href="https://discord.gg/dWrW52vNy" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center h-12 rounded-xl bg-primary text-white font-bold shadow-lg shadow-primary/25"
                >
                  Join Discord
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}