import { motion } from "framer-motion";
import { ArrowUpRight, Shield } from "lucide-react";

export function SupportedGames() {
  return (
    <section id="supported-games" className="py-32 relative bg-[#0a0a0f] w-full">
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-gradient mb-5"
          >
            Supported Games
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-muted-foreground text-base md:text-lg max-w-xl mx-auto"
          >
            Hand-picked games with deep script integration and absolute dominance.
          </motion.p>
        </div>

        <div className="flex justify-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="w-full max-w-4xl"
          >
            <div className="glass-panel glass-panel-hover p-3 rounded-[2rem] overflow-hidden group">
              <div className="relative p-6 sm:p-8 z-10 flex flex-col md:flex-row items-center md:items-start gap-8">

                {/* Game Image */}
                <div className="w-40 h-40 md:w-48 md:h-48 rounded-2xl overflow-hidden flex-shrink-0 border border-white/10 shadow-xl shadow-black/60 group-hover:border-primary/40 transition-colors duration-500">
                  <img
                    src="/images/fias-game.png"
                    alt="[BUFF] Fight in a school"
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Content */}
                <div className="flex-1 flex flex-col w-full">
                  <div className="mb-4">
                    <h3 className="text-2xl md:text-3xl font-display font-bold text-white mb-3">
                      [BUFF] Fight in a school
                    </h3>
                    <div className="flex flex-wrap items-center gap-2.5">
                      <span className="inline-flex items-center px-3 py-1 rounded-lg text-xs font-semibold bg-blue-500/10 text-blue-400 border border-blue-500/20 uppercase tracking-wider">
                        Roblox
                      </span>
                      <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg text-xs font-semibold bg-green-500/10 text-green-400 border border-green-500/20 uppercase tracking-wider">
                        <Shield className="w-3.5 h-3.5" />
                        Fully Supported
                      </span>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2 mb-8 mt-3">
                    {["Auto Farm", "Teleportation", "Money Farm", "Reliable", "Speed Hack"].map(tag => (
                      <span key={tag} className="px-3 py-1 rounded-full text-xs font-medium bg-white/5 border border-white/10 text-gray-300">
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="mt-auto flex flex-col sm:flex-row gap-4">
                    <a
                      href="https://static.sellhub.cx/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 inline-flex items-center justify-center py-3.5 px-6 rounded-xl bg-primary text-white text-sm font-bold hover:bg-primary/90 shadow-[0_0_25px_rgba(0,212,255,0.3)] hover:shadow-[0_0_40px_rgba(0,212,255,0.45)] hover:-translate-y-0.5 transition-all duration-300 uppercase tracking-wider"
                    >
                      Get Script
                    </a>
                    <a
                      href="https://www.roblox.com/games/17698425045/fight-in-a-school"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 inline-flex items-center justify-center gap-2 py-3.5 px-6 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 text-white text-sm font-medium transition-all duration-300"
                    >
                      Play on Roblox
                      <ArrowUpRight className="w-4 h-4 text-gray-400" />
                    </a>
                  </div>
                </div>

              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
