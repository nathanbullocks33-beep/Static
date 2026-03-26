import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { cn } from "@/lib/utils";

const PLANS = [
  {
    name: "Weekly",
    price: "$4.99",
    duration: "/week",
    features: [
      "Full Script Access",
      "All Game Features",
      "Discord Support",
      "Weekly Updates",
      "Undetected Guarantee"
    ],
    popular: false,
    buttonUrl: "https://static.sellhub.cx/"
  },
  {
    name: "Monthly",
    price: "$8.99",
    duration: "/month",
    features: [
      "Full Script Access",
      "All Game Features",
      "Priority Support",
      "Monthly Updates",
      "Undetected Guarantee",
      "Early Access"
    ],
    popular: true,
    buttonUrl: "https://static.sellhub.cx/"
  }
];

export function Pricing() {
  return (
    <section id="pricing" className="py-32 relative bg-[#080808]">
      {/* Decorative gradient line */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-primary/50 to-transparent"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-gradient mb-6"
          >
            Pricing
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto"
          >
            Unlock full access to the most advanced tools. Choose the plan that fits you best.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto items-center">
          {PLANS.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.5 }}
              className={cn(
                "relative rounded-[2rem] p-[1px] h-full",
                plan.popular 
                  ? "bg-gradient-to-b from-primary via-primary/20 to-transparent shadow-2xl shadow-primary/10" 
                  : "bg-white/10"
              )}
            >
              {plan.popular && (
                <div className="absolute -top-4 right-8 z-20">
                  <span className="bg-primary text-white text-xs font-black px-4 py-1.5 rounded-full shadow-[0_0_20px_rgba(0,212,255,0.4)] uppercase tracking-widest border border-white/20">
                    Best Value
                  </span>
                </div>
              )}
              
              <div className="h-full bg-[#0a0a0f] rounded-[2rem] p-8 sm:p-10 flex flex-col relative z-10">
                <div className="mb-8">
                  <h3 className="text-2xl font-bold text-white mb-2 uppercase tracking-wide">{plan.name}</h3>
                  <div className="flex items-baseline gap-2 mt-4">
                    <span className="text-5xl font-display font-black text-white">{plan.price}</span>
                    <span className="text-lg text-muted-foreground font-medium">{plan.duration}</span>
                  </div>
                </div>
                
                <ul className="space-y-5 mb-10 flex-1">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-4">
                      <div className={cn(
                        "w-6 h-6 rounded-full flex items-center justify-center shrink-0",
                        plan.popular ? "bg-primary/20 text-primary" : "bg-white/5 text-gray-400"
                      )}>
                        <Check className="w-3.5 h-3.5" strokeWidth={3} />
                      </div>
                      <span className="text-gray-200 font-medium">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <a 
                  href={plan.buttonUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={cn(
                    "w-full py-4 px-6 rounded-xl font-bold text-lg text-center transition-all duration-300 block",
                    plan.popular 
                      ? "bg-primary text-white hover:bg-primary/90 glow-cyan hover:-translate-y-1" 
                      : "bg-white/5 text-white hover:bg-white/10 border border-white/10 hover:border-white/20"
                  )}
                >
                  Get {plan.name}
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}