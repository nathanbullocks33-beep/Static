import { motion } from "framer-motion";

const DiscordIcon = ({ className = "w-4 h-4" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057c.002.022.015.043.032.054a19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028c.462-.63.874-1.295 1.226-1.994a.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03z"/>
  </svg>
);

export function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;
      window.scrollTo({ top: offsetPosition, behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-[#080808] border-t border-white/10 pt-20 pb-10 relative overflow-hidden">
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-primary/5 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-24 mb-16">

          {/* Left Column */}
          <div className="flex flex-col items-start gap-6">
            <div className="flex items-center gap-3">
              <img
                src="/images/static-logo.jpeg"
                alt="Static"
                className="w-10 h-10 rounded object-cover shadow-lg shadow-primary/20"
              />
              <span className="font-display font-bold text-xl text-white">Static</span>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed max-w-sm">
              Premium Roblox scripts for elite players. Delivering unmatched performance, security, and features.
            </p>
            <a
              href="https://discord.gg/dWrW52vNy"
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white hover:bg-[#5865F2] hover:border-[#5865F2] transition-all duration-300"
              aria-label="Discord"
            >
              <DiscordIcon className="w-4 h-4" />
            </a>
          </div>

          {/* Center Column */}
          <div className="flex flex-col gap-4 md:pl-10">
            <h4 className="text-white font-bold text-sm uppercase tracking-wider mb-2">Quick Links</h4>
            <ul className="space-y-3">
              {[
                { name: "Home", href: "#home" },
                { name: "Games", href: "#supported-games" },
                { name: "Purchase", href: "#pricing" },
                { name: "Payment Methods", href: "#payment-methods" },
              ].map(link => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    onClick={(e) => scrollToSection(e, link.href)}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors font-medium"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Right Column */}
          <div className="flex flex-col gap-4">
            <h4 className="text-white font-bold text-sm uppercase tracking-wider mb-2">Get Started</h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="https://static.sellhub.cx/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors font-medium"
                >
                  Buy Script
                </a>
              </li>
              <li>
                <a
                  href="https://youtu.be/owO1LNCPa-Y"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors font-medium"
                >
                  Watch Showcase
                </a>
              </li>
              <li>
                <a
                  href="https://discord.gg/dWrW52vNy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors font-medium"
                >
                  Join Discord
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Developer Section */}
        <div className="relative pt-12 mb-12">
          <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
          <h4 className="text-white font-bold text-sm uppercase tracking-wider mb-6 text-center">Team</h4>
          <div className="flex justify-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="glass-panel rounded-2xl p-5 flex items-center gap-5 w-full max-w-xs hover:border-white/15 transition-all duration-300"
            >
              {/* Avatar */}
              <div className="w-14 h-14 rounded-full bg-gradient-to-br from-primary/40 to-purple-600/40 flex items-center justify-center border border-white/10 shrink-0 text-lg font-bold text-white">
                F
              </div>
              {/* Info */}
              <div className="flex flex-col gap-1.5">
                <span className="text-white font-bold text-base leading-none">Freeme</span>
                <span className="text-muted-foreground text-xs font-medium uppercase tracking-wider">Developer / Owner</span>
                <div className="flex items-center gap-2 mt-1">
                  <a
                    href="https://discord.com/channels/@me"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-7 h-7 rounded-md bg-[#5865F2]/20 border border-[#5865F2]/30 flex items-center justify-center text-[#5865F2] hover:bg-[#5865F2] hover:text-white transition-all duration-300"
                    aria-label="Discord"
                  >
                    <DiscordIcon className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="relative pt-8 flex items-center justify-center">
          <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
          <p className="text-muted-foreground/50 text-xs font-medium">
            &copy; {currentYear} Static. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
