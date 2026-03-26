import { Terminal } from "lucide-react";
import { Link } from "wouter";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background p-4 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-primary/20 rounded-full blur-[100px] pointer-events-none"></div>
      
      <div className="glass-panel p-10 md:p-16 rounded-3xl max-w-md w-full text-center relative z-10 border border-white/10 shadow-2xl shadow-black/50">
        <div className="w-20 h-20 mx-auto bg-white/5 rounded-2xl flex items-center justify-center border border-white/10 mb-6">
          <Terminal className="w-10 h-10 text-primary" />
        </div>
        <h1 className="text-4xl font-display font-bold text-white mb-2">404</h1>
        <p className="text-muted-foreground mb-8">
          The script you're looking for doesn't exist.
        </p>
        <Link href="/" className="inline-flex items-center justify-center w-full px-6 py-3 rounded-xl bg-primary text-white font-semibold hover:bg-primary/90 transition-colors shadow-lg shadow-primary/20">
          Return to Hub
        </Link>
      </div>
    </div>
  );
}
