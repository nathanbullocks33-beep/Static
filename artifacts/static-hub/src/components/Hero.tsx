import { motion } from "framer-motion";
import { Play, Check, ShieldCheck } from "lucide-react";
import { cn } from "@/lib/utils";

export function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-24 pb-16 overflow-hidden bg-[#080808]">
      {/* Background Effects */}
      <div className="absolute inset-0 w-full h-full -z-10 grid-bg opacity-40"></div>
      
      {/* Big glowing orbs */}
      <div className="absolute top-[20%] left-[10%] w-[500px] h-[500px] bg-primary/20 rounded-full blur-[120px] pointer-events-none -z-10 animate-pulse-glow"></div>
      <div className="absolute bottom-[10%] right-[10%] w-[600px] h-[600px] bg-purple-600/15 rounded-full blur-[150px] pointer-events-none -z-10"></div>
      <div className="absolute top-[40%] left-[50%] -translate-x-1/2 w-[800px] h-[400px] bg-blue-500/10 rounded-full blur-[100px] pointer-events-none -z-10"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="flex flex-col items-center text-center">
          
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-panel mb-8 border-primary/30"
          >
            <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse shadow-[0_0_8px_rgba(34,197,94,0.8)]"></div>
            <span className="text-xs sm:text-sm font-semibold text-primary uppercase tracking-widest">Now Available</span>
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-display font-extrabold mb-6 leading-tight"
          >
            The Most Powerful <br className="hidden sm:block" />
            <span className="text-gradient-primary">Roblox Script Hub</span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-lg sm:text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto mb-8 leading-relaxed font-medium"
          >
            Static delivers elite-grade scripts with unmatched performance. Dominate every game you play.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="flex flex-wrap items-center justify-center gap-4 mb-12"
          >
            <span className="px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-sm font-medium text-gray-300">1 Supported Game</span>
            <span className="px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-sm font-medium text-gray-300">99.9% Undetected</span>
            <span className="px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-sm font-medium text-gray-300">24/7 Support</span>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-5 w-full sm:w-auto mb-16"
          >
            <a 
              href="https://static.sellhub.cx/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-10 py-4 rounded-xl font-bold text-lg text-white bg-primary hover:bg-primary/90 glow-cyan hover:shadow-[0_0_80px_rgba(0,212,255,0.25)] hover:-translate-y-1 transition-all duration-300"
            >
              Buy Now
            </a>
            
            <a 
              href="https://youtu.be/owO1LNCPa-Y" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-8 py-4 rounded-xl font-semibold text-white bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 flex items-center justify-center gap-3 transition-all duration-300"
            >
              <Play className="w-5 h-5 text-gray-300" fill="currentColor" />
              Watch Showcase
            </a>

            <a 
              href="https://discord.gg/dWrW52vNy" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-8 py-4 rounded-xl font-semibold text-muted-foreground hover:text-white hover:bg-white/5 transition-all duration-300"
            >
              Join Discord
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="w-full max-w-lg mx-auto animate-float"
          >
            <div className="glass-panel p-6 rounded-2xl text-left border-t border-t-white/20 shadow-2xl shadow-black/50">
              <div className="flex items-center justify-between mb-6 pb-4 border-b border-white/10">
                <div className="flex items-center gap-3">
                  <ShieldCheck className="w-6 h-6 text-primary" />
                  <h3 className="font-display font-bold text-xl text-white">Static v2.0</h3>
                </div>
                <div className="flex items-center gap-2 bg-green-500/10 px-3 py-1 rounded-full border border-green-500/20">
                  <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></div>
                  <span className="text-xs font-bold text-green-400">Active</span>
                </div>
              </div>
              
              <div className="space-y-4">
                {[
                  "Aimbot & ESP",
                  "Auto Farm & Auto Play",
                  "Bypass Detection"
                ].map((feature, idx) => (
                  <div key={idx} className="flex items-center gap-3">
                    <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center border border-primary/30">
                      <Check className="w-3 h-3 text-primary" strokeWidth={3} />
                    </div>
                    <span className="text-gray-300 font-medium">{feature}</span>
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