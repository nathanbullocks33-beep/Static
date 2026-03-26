import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { cn } from "@/lib/utils";

const PLANS = [
  {
    name: "Weekly",
    price: "$4.99",
    duration: "/week",
    features: [
      "Access to Comp Script",
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
      "Access to Comp Script",
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
    <section id="pricing" className="py-32 relative bg-[#080808] w-full">
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-primary/40 to-transparent"></div>
      <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/5 to-transparent"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-gradient mb-5"
          >
            Purchase
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-muted-foreground text-base md:text-lg max-w-xl mx-auto"
          >
            Unlock full access to the most advanced tools. Choose the plan that fits you.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto items-stretch">
          {PLANS.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15, duration: 0.5 }}
              className={cn(
                "relative rounded-3xl p-[1px] h-full",
                plan.popular
                  ? "bg-gradient-to-b from-primary via-primary/30 to-transparent shadow-2xl shadow-primary/15"
                  : "bg-white/8"
              )}
            >
              {plan.popular && (
                <div className="absolute -top-4 right-8 z-20">
                  <span className="bg-primary text-white text-xs font-black px-4 py-1.5 rounded-full shadow-[0_0_25px_rgba(0,212,255,0.5)] uppercase tracking-widest border border-white/20">
                    Best Value
                  </span>
                </div>
              )}

              <div className="h-full bg-[#09090f] rounded-3xl p-8 sm:p-10 flex flex-col">
                <div className="mb-8">
                  <h3 className="text-xl font-bold text-white uppercase tracking-widest mb-4">{plan.name}</h3>
                  <div className="flex items-baseline gap-1.5">
                    <span className="text-5xl font-display font-black text-white">{plan.price}</span>
                    <span className="text-base text-muted-foreground font-medium">{plan.duration}</span>
                  </div>
                </div>

                <ul className="space-y-4 mb-10 flex-1">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-3.5">
                      <div className={cn(
                        "w-5 h-5 rounded-full flex items-center justify-center shrink-0",
                        plan.popular ? "bg-primary/20 text-primary border border-primary/30" : "bg-white/5 text-gray-400 border border-white/10"
                      )}>
                        <Check className="w-3 h-3" strokeWidth={3} />
                      </div>
                      <span className={cn(
                        "text-sm font-medium",
                        feature === "Access to Comp Script" ? "text-primary font-semibold" : "text-gray-300"
                      )}>{feature}</span>
                    </li>
                  ))}
                </ul>

                <a
                  href={plan.buttonUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={cn(
                    "w-full py-4 px-6 rounded-xl font-bold text-sm text-center transition-all duration-300 block uppercase tracking-wider",
                    plan.popular
                      ? "bg-primary text-white hover:bg-primary/90 shadow-[0_0_30px_rgba(0,212,255,0.3)] hover:shadow-[0_0_50px_rgba(0,212,255,0.45)] hover:-translate-y-0.5"
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
