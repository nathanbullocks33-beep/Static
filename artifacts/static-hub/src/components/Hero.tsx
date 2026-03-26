import { motion } from "framer-motion";
import { Key } from "lucide-react";

export function Hero() {
  return (
    <section id="home" className="relative min-h-screen w-full flex items-center justify-center pt-20 pb-16 overflow-hidden bg-[#080808]">
      {/* Background grid */}
      <div className="absolute inset-0 w-full h-full -z-10 grid-bg opacity-20"></div>
      {/* Subtle orbs */}
      <div className="absolute top-[15%] left-[5%] w-[500px] h-[500px] bg-white/4 rounded-full blur-[140px] pointer-events-none -z-10"></div>
      <div className="absolute bottom-[5%] right-[5%] w-[600px] h-[600px] bg-white/3 rounded-full blur-[180px] pointer-events-none -z-10"></div>

      <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col items-center text-center">

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-display font-extrabold mb-6 leading-none tracking-tight text-white"
          >
            Static Hub
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-sm sm:text-base md:text-lg text-muted-foreground max-w-xl mx-auto mb-8 leading-relaxed"
          >
            Elite-grade Roblox scripts with unmatched performance. Dominate every lobby you join.
          </motion.p>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="flex flex-wrap items-center justify-center gap-3 mb-10"
          >
            <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-medium text-gray-400">1 Supported Game</span>
            <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-medium text-gray-400">24/7 Support</span>
          </motion.div>

          {/* CTA Buttons — horizontal row */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="flex flex-wrap items-center justify-center gap-16"
          >
            {/* Buy Now */}
            <a
              href="https://static.sellhub.cx/"
              target="_blank"
              rel="noopener noreferrer"
              className="px-7 py-3.5 rounded-xl font-bold text-sm text-white bg-[#1c1c1c] border border-white/20 hover:bg-[#252525] hover:border-white/30 hover:-translate-y-0.5 transition-all duration-300 uppercase tracking-widest"
            >
              Buy Now
            </a>

            {/* Free Key */}
            <a
              href="https://ads.luarmor.net/get_key?for=Static-OWulwoDvNPea"
              target="_blank"
              rel="noopener noreferrer"
              className="px-7 py-3.5 rounded-xl font-bold text-sm text-white bg-[#1c1c1c] border border-white/20 hover:bg-[#252525] hover:border-white/30 hover:-translate-y-0.5 flex items-center gap-2 transition-all duration-300 uppercase tracking-widest"
            >
              <Key className="w-3.5 h-3.5" />
              Free Key
            </a>

          </motion.div>

        </div>
      </div>
    </section>
  );
}
