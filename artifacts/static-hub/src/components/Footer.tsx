import { Terminal } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-white/10 bg-background/50 pt-16 pb-8 relative overflow-hidden">
      {/* Decorative blur */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-lg h-32 bg-primary/10 blur-[100px] pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 mb-12">
          <div className="flex flex-col items-center md:items-start gap-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary to-blue-500 p-[1px]">
                <div className="w-full h-full bg-background rounded-[7px] flex items-center justify-center">
                  <Terminal className="w-4 h-4 text-primary" />
                </div>
              </div>
              <span className="font-display font-bold text-xl text-white">
                Static Hub
              </span>
            </div>
            <p className="text-muted-foreground text-sm text-center md:text-left max-w-xs">
              The premier script hub experience. Designed for performance, security, and ease of use.
            </p>
          </div>
          
          <div className="flex flex-col items-center md:items-end gap-4">
            <h4 className="text-white font-semibold">Community</h4>
            <a 
              href="https://discord.gg/dWrW52vNy" 
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors flex items-center gap-2"
            >
              Join our Discord server
            </a>
            <a 
              href="https://youtu.be/owO1LNCPa-Y" 
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              Watch Showcase
            </a>
          </div>
        </div>
        
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-muted-foreground text-sm">
            &copy; {currentYear} Static Hub. All rights reserved.
          </p>
          <p className="text-muted-foreground/50 text-xs text-center">
            Not affiliated with Roblox Corporation.
          </p>
        </div>
      </div>
    </footer>
  );
}
