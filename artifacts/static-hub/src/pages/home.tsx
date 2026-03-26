import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Executors } from "@/components/Executors";
import { SupportedGames } from "@/components/SupportedGames";
import { Pricing } from "@/components/Pricing";
import { PaymentMethods } from "@/components/PaymentMethods";
import { Developers } from "@/components/Developers";
import { Footer } from "@/components/Footer";
import { CursorGlow } from "@/components/CursorGlow";

export default function Home() {
  return (
    <div className="min-h-screen w-full bg-[#080808] text-foreground flex flex-col selection:bg-primary/30 overflow-x-hidden">
      <CursorGlow />
      <Navbar />
      <main className="flex-1 w-full">
        <Hero />
        <Executors />
        <SupportedGames />
        <Pricing />
        <PaymentMethods />
        <Developers />
      </main>
      <Footer />
    </div>
  );
}
