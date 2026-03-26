import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

const DiscordIcon = () => (
  <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="currentColor">
    <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057c.002.022.015.043.032.054a19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028c.462-.63.874-1.295 1.226-1.994a.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03z"/>
  </svg>
);

const EXECUTORS = [
  {
    name: "Velocity",
    version: "0.8.6",
    tags: ["sUNC", "Free"],
    website: "https://realvelocity.xyz/",
    discord: "https://discord.com/invite/velocityide",
    uncPercent: 99,
    suncPercent: 94,
    decompiler: true,
    multiInject: true,
    note: "This exploit bypasses client modification bans but could still be affected by banwaves",
  },
  {
    name: "Volt",
    version: "1.2.8.0",
    tags: ["sUNC", "$5.99 Weekly"],
    website: "https://volt.bz/",
    discord: "https://discord.com/invite/voltbz",
    uncPercent: 99,
    suncPercent: 98,
    decompiler: true,
    multiInject: true,
    note: null,
  },
  {
    name: "Wave",
    version: "NEW-1.2.0",
    tags: ["sUNC", "$5.99 Weekly"],
    website: "https://getwave.gg/",
    discord: "https://discord.com/invite/rARhPpN7fY",
    uncPercent: 99,
    suncPercent: 100,
    decompiler: true,
    multiInject: true,
    note: "This exploit bypasses client modification bans but could still be affected by banwaves",
  },
];

export function Executors() {
  return (
    <section id="executors" className="py-28 relative bg-[#080808] w-full">
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/8 to-transparent" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-14">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-display font-bold text-white mb-4"
          >
            Executors
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-muted-foreground text-sm max-w-sm mx-auto"
          >
            Recommended executors that work with Static scripts
          </motion.p>
        </div>

        {/* Executor Cards */}
        <div className="flex flex-col gap-4">
          {EXECUTORS.map((ex, i) => (
            <motion.div
              key={ex.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="rounded-xl border border-white/8 bg-white/3 p-5 backdrop-blur-sm"
            >
              {/* Top row */}
              <div className="flex items-start justify-between gap-4 mb-3">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="text-white font-bold text-lg">{ex.name}</span>
                  <span className="text-xs text-white/40 font-mono">{ex.version}</span>
                  {ex.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs px-2 py-0.5 rounded bg-white/8 border border-white/10 text-white/60 font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <span className="shrink-0 text-xs px-3 py-1 rounded-full bg-green-500/15 border border-green-500/30 text-green-400 font-semibold">
                  Updated
                </span>
              </div>

              {/* Warning note */}
              {ex.note && (
                <div className="mb-4 px-4 py-2.5 rounded-lg bg-white/4 border border-white/8 text-xs text-white/50">
                  {ex.note}
                </div>
              )}

              {/* Stats grid */}
              <div className="grid grid-cols-2 gap-x-8 gap-y-2 mb-5 text-sm">
                <div className="text-white/50">
                  UNC Percentage: <span className="text-white font-semibold">{ex.uncPercent}%</span>
                </div>
                <div className="text-white/50">
                  sUNC Percentage: <span className="text-white font-semibold">{ex.suncPercent}%</span>
                </div>
                <div className="text-white/50">
                  Decompiler: <span className="text-green-400 font-semibold">✓</span>
                </div>
                <div className="text-white/50">
                  Multi-Inject: <span className="text-green-400 font-semibold">✓</span>
                </div>
              </div>

              {/* Buttons */}
              <div className="flex items-center gap-3">
                <a
                  href={ex.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 px-4 py-2 rounded-lg border border-white/15 text-white/80 hover:text-white hover:bg-white/8 text-xs font-semibold transition-all duration-200"
                >
                  <ExternalLink className="w-3.5 h-3.5" />
                  Website
                </a>
                <a
                  href={ex.discord}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 px-4 py-2 rounded-lg bg-[#5865F2]/15 border border-[#5865F2]/30 text-[#7289da] hover:bg-[#5865F2] hover:text-white text-xs font-semibold transition-all duration-200"
                >
                  <DiscordIcon />
                  Discord
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Coming soon */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="text-center text-white/30 text-sm mt-8 tracking-wide"
        >
          More Executors Coming soon..
        </motion.p>
      </div>
    </section>
  );
}
