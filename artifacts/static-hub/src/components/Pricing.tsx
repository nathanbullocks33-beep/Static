import { motion } from "framer-motion";
import { Check, Star } from "lucide-react";
import { cn } from "@/lib/utils";

const PLANS = [
  {
    name: "Weekly Plan",
    price: "$4.99",
    duration: "/week",
    description: "Perfect for testing the waters and short-term use.",
    features: [
      "Full Script Access",
      "Key System Bypassed",
      "Weekly Updates",
      "Discord Support",
      "Undetected Execution"
    ],
    popular: false,
  },
  {
    name: "Monthly Plan",
    price: "$8.99",
    duration: "/month",
    description: "Our most popular option for dedicated players.",
    features: [
      "Full Script Access",
      "Key System Bypassed",
      "Monthly Updates",
      "Priority Discord Support",
      "Undetected Execution",
      "Early Access to Features"
    ],
    popular: true,
  }
];

export function Pricing() {
  return (
    <section id="pricing" className="py-24 relative bg-black/40">
      {/* Decorative gradient */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-[1px] bg-gradient-to-r from-transparent via-primary/50 to-transparent"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-display font-bold text-white mb-4"
          >
            Simple Pricing
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-muted-foreground text-lg max-w-2xl mx-auto"
          >
            Unlock the full potential of Static Hub with a premium membership.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {PLANS.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className={cn(
                "relative rounded-3xl p-[1px] overflow-hidden",
                plan.popular ? "bg-gradient-to-b from-primary to-primary/10" : "bg-white/10"
              )}
            >
              {plan.popular && (
                <div className="absolute top-0 right-8 transform -translate-y-1/2 z-20">
                  <span className="bg-primary text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg shadow-primary/30 flex items-center gap-1 uppercase tracking-wider">
                    <Star className="w-3 h-3 fill-current" /> Best Value
                  </span>
                </div>
              )}
              
              <div className="h-full bg-card rounded-[23px] p-8 flex flex-col relative z-10">
                <div className="mb-6">
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <p className="text-muted-foreground text-sm h-10">{plan.description}</p>
                </div>
                
                <div className="mb-8 flex items-baseline">
                  <span className="text-5xl font-display font-bold text-white">{plan.price}</span>
                  <span className="text-muted-foreground ml-2">{plan.duration}</span>
                </div>
                
                <ul className="space-y-4 mb-8 flex-1">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3">
                      <div className="mt-1 bg-primary/20 rounded-full p-0.5">
                        <Check className="w-4 h-4 text-primary" />
                      </div>
                      <span className="text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <a 
                  href="https://discord.gg/dWrW52vNy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={cn(
                    "w-full py-4 rounded-xl font-bold text-center transition-all duration-300",
                    plan.popular 
                      ? "bg-primary text-white hover:bg-primary/90 shadow-lg shadow-primary/25 hover:shadow-xl hover:-translate-y-0.5" 
                      : "bg-white/5 text-white hover:bg-white/10 border border-white/10"
                  )}
                >
                  Get Started
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
