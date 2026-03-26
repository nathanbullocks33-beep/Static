import { motion } from "framer-motion";

const DiscordIcon = () => (
  <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="currentColor">
    <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057c.002.022.015.043.032.054a19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028c.462-.63.874-1.295 1.226-1.994a.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03z"/>
  </svg>
);

export function Developers() {
  return (
    <section className="py-28 relative bg-[#080808] w-full">
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/8 to-transparent"></div>
      <div className="absolute inset-0 pointer-events-none -z-10">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-purple-700/8 rounded-full blur-[120px]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-display font-bold text-gradient mb-4"
          >
            Developers
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-muted-foreground text-sm max-w-sm mx-auto"
          >
            The people behind Static
          </motion.p>
        </div>

        <div className="flex justify-center">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="glass-panel rounded-2xl p-6 flex items-center gap-5 w-full max-w-sm transition-all duration-300"
            style={{ border: "1px solid rgba(255,255,255,0.08)" }}
          >
            {/* Avatar */}
            <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-white/10 shrink-0 shadow-lg shadow-black/50">
              <img
                src="https://imgs.search.brave.com/43-T7AKmMV372lZAa2WKlkwnROsZhM-znVbGPEzmOlI/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzLzNjLzA5/LzBkLzNjMDkwZDIw/MmI4NDI4YTgyZjll/M2YyMTczNGM5OTJh/LmpwZw"
                alt="Freeme"
                className="w-full h-full object-cover"
                onError={(e) => {
                  const target = e.currentTarget as HTMLImageElement;
                  target.style.display = "none";
                  const parent = target.parentElement;
                  if (parent) {
                    parent.classList.add("bg-gradient-to-br", "from-primary/40", "to-purple-600/40", "flex", "items-center", "justify-center");
                    parent.innerHTML = '<span class="text-xl font-bold text-white">F</span>';
                  }
                }}
              />
            </div>

            {/* Info */}
            <div className="flex flex-col gap-1">
              <span className="text-white font-bold text-lg leading-tight">Freeme</span>
              <span className="text-muted-foreground text-xs font-semibold uppercase tracking-widest">Developer / Owner</span>
              <div className="flex items-center gap-2 mt-2">
                <a
                  href="https://discord.com/channels/@me"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#5865F2]/15 border border-[#5865F2]/30 text-[#5865F2] hover:bg-[#5865F2] hover:text-white transition-all duration-300 text-xs font-semibold"
                  aria-label="Discord"
                >
                  <DiscordIcon />
                  Discord
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
