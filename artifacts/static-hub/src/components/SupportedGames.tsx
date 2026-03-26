import { motion } from "framer-motion";
import { Gamepad2, ArrowUpRight } from "lucide-react";

export function SupportedGames() {
  return (
    <section id="supported-games" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-display font-bold text-white mb-4"
          >
            Supported Games
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-muted-foreground text-lg max-w-2xl mx-auto"
          >
            Flawless integration with top experiences. More coming soon.
          </motion.p>
        </div>

        <div className="flex justify-center">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="w-full max-w-md group"
          >
            <div className="glass-panel p-2 rounded-3xl relative overflow-hidden transition-all duration-500 hover:border-primary/50 hover:shadow-2xl hover:shadow-primary/20">
              {/* Subtle background glow on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <div className="relative p-6 z-10 flex items-start gap-5">
                <div className="w-16 h-16 rounded-2xl bg-secondary/50 flex items-center justify-center flex-shrink-0 border border-white/5">
                  <Gamepad2 className="w-8 h-8 text-primary" />
                </div>
                
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-primary transition-colors">
                    [BUFF] Fight in a school
                  </h3>
                  <div className="flex items-center gap-2 mb-6">
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-500/10 text-green-400 border border-green-500/20">
                      Fully Supported
                    </span>
                    <span className="text-xs text-muted-foreground">Undetected</span>
                  </div>
                  
                  <a 
                    href="https://www.roblox.com/games/17698425045/fight-in-a-school"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 w-full py-3 px-4 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-white font-medium transition-colors"
                  >
                    Play on Roblox
                    <ArrowUpRight className="w-4 h-4 text-muted-foreground group-hover:text-white transition-colors" />
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
