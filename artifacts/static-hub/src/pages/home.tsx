import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { SupportedGames } from "@/components/SupportedGames";
import { Pricing } from "@/components/Pricing";
import { PaymentMethods } from "@/components/PaymentMethods";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col selection:bg-primary/30 overflow-hidden">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <SupportedGames />
        <Pricing />
        <PaymentMethods />
      </main>
      <Footer />
    </div>
  );
}