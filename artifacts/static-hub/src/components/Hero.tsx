import { motion } from "framer-motion";
import { Play, Key } from "lucide-react";

const DiscordIcon = () => (
  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
    <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057c.002.022.015.043.032.054a19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028c.462-.63.874-1.295 1.226-1.994a.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03z"/>
  </svg>
);

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

          {/* CTA Buttons — 2×2 grid */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="grid grid-cols-2 gap-5 w-full max-w-xs"
          >
            {/* Buy Now — white */}
            <a
              href="https://static.sellhub.cx/"
              target="_blank"
              rel="noopener noreferrer"
              className="col-span-2 flex items-center justify-center px-6 py-2.5 rounded-lg font-bold text-xs text-black bg-white hover:bg-gray-100 hover:-translate-y-0.5 transition-all duration-300 uppercase tracking-widest shadow-lg shadow-white/10"
            >
              Buy Now
            </a>

            {/* Watch Showcases — red (YouTube) */}
            <a
              href="https://www.youtube.com/@StaticHub"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-lg font-semibold text-xs text-white bg-red-600/90 hover:bg-red-600 hover:-translate-y-0.5 transition-all duration-300 shadow-lg shadow-red-600/20"
            >
              <Play className="w-3 h-3" fill="currentColor" />
              Showcases
            </a>

            {/* Free Key — green */}
            <a
              href="https://ads.luarmor.net/get_key?for=Static-OWulwoDvNPea"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-lg font-semibold text-xs text-white bg-green-600/90 hover:bg-green-600 hover:-translate-y-0.5 transition-all duration-300 uppercase tracking-wider shadow-lg shadow-green-600/20"
            >
              <Key className="w-3 h-3" />
              Free Key
            </a>

            {/* Join Discord — discord blue, full width */}
            <a
              href="https://discord.gg/dWrW52vNy"
              target="_blank"
              rel="noopener noreferrer"
              className="col-span-2 flex items-center justify-center gap-2 px-6 py-2.5 rounded-lg font-semibold text-xs text-white bg-[#5865F2] hover:bg-[#4752C4] hover:-translate-y-0.5 transition-all duration-300 shadow-lg shadow-[#5865F2]/25"
            >
              <DiscordIcon />
              Join Discord
            </a>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
