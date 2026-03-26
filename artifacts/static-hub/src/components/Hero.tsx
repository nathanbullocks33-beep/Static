import { motion } from "framer-motion";
import { Play, Check, ShieldCheck } from "lucide-react";

const DiscordIcon = () => (
  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
    <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057c.002.022.015.043.032.054a19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028c.462-.63.874-1.295 1.226-1.994a.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03z"/>
  </svg>
);

export function Hero() {
  return (
    <section id="home" className="relative min-h-screen w-full flex items-center justify-center pt-20 pb-16 overflow-hidden bg-[#080808]">
      {/* Background grid */}
      <div className="absolute inset-0 w-full h-full -z-10 grid-bg opacity-40"></div>
      {/* Orbs */}
      <div className="absolute top-[15%] left-[5%] w-[500px] h-[500px] bg-primary/20 rounded-full blur-[130px] pointer-events-none -z-10 animate-pulse-glow"></div>
      <div className="absolute bottom-[5%] right-[5%] w-[600px] h-[600px] bg-purple-600/15 rounded-full blur-[160px] pointer-events-none -z-10"></div>
      <div className="absolute top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2 w-[900px] h-[500px] bg-blue-500/5 rounded-full blur-[100px] pointer-events-none -z-10"></div>

      <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col items-center text-center">

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-display font-extrabold mb-6 leading-none tracking-tight"
          >
            <span className="text-gradient-primary">Static Hub</span>
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

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto mb-20"
          >
            <a
              href="https://static.sellhub.cx/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-10 py-4 rounded-xl font-bold text-sm text-white bg-primary hover:bg-primary/90 shadow-[0_0_40px_rgba(0,212,255,0.35)] hover:shadow-[0_0_70px_rgba(0,212,255,0.5)] hover:-translate-y-0.5 transition-all duration-300 uppercase tracking-widest"
            >
              Buy Now
            </a>

            <a
              href="https://www.youtube.com/@StaticHub"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-8 py-4 rounded-xl font-semibold text-sm text-white bg-white/5 border border-white/12 hover:bg-white/10 hover:border-white/25 flex items-center justify-center gap-2.5 transition-all duration-300"
            >
              <Play className="w-4 h-4 text-gray-300" fill="currentColor" />
              Watch Showcases
            </a>

            <a
              href="https://discord.gg/dWrW52vNy"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-8 py-4 rounded-xl font-semibold text-sm text-white/50 hover:text-white hover:bg-white/5 flex items-center justify-center gap-2.5 transition-all duration-300"
            >
              <DiscordIcon />
              Join Discord
            </a>
          </motion.div>

          {/* Floating Feature Card */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="w-full max-w-sm mx-auto animate-float"
          >
            <div className="glass-panel p-5 rounded-2xl text-left shadow-2xl shadow-black/60" style={{ border: "1px solid rgba(0,212,255,0.12)" }}>
              <div className="flex items-center justify-between mb-5 pb-4 border-b border-white/8">
                <div className="flex items-center gap-2.5">
                  <ShieldCheck className="w-5 h-5 text-primary" />
                  <h3 className="font-display font-bold text-sm text-white tracking-wide">Static Script</h3>
                </div>
                <div className="flex items-center gap-1.5 bg-green-500/10 px-2.5 py-1 rounded-full border border-green-500/20">
                  <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></div>
                  <span className="text-xs font-bold text-green-400">Active</span>
                </div>
              </div>

              <div className="space-y-3">
                {[
                  "Free and Paid version",
                  "Auto Farm & Auto Play",
                  "Bypass Detection"
                ].map((feature, idx) => (
                  <div key={idx} className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded-full bg-primary/15 flex items-center justify-center border border-primary/25 shrink-0">
                      <Check className="w-3 h-3 text-primary" strokeWidth={3} />
                    </div>
                    <span className="text-xs text-gray-300 font-medium">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
