import { motion } from "framer-motion";
import { CreditCard, CheckCircle2 } from "lucide-react";
import { cn } from "@/lib/utils";

export function PaymentMethods() {
  const methods = [
    {
      name: "Credit & Debit Cards",
      description: "Visa, Mastercard, American Express — all major cards accepted",
      icon: <CreditCard className="w-8 h-8 text-white" strokeWidth={1.5} />,
      bgColor: "bg-gradient-to-br from-blue-600 to-blue-800"
    },
    {
      name: "PayPal",
      description: "Fast checkout using your PayPal account or balance",
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8 text-white">
          <path d="M7.076 21.337H2.47a.641.641 0 0 1-.633-.74L4.944.901C5.026.382 5.474 0 6.007 0h7.46c2.57 0 4.578.543 5.69 1.81 1.01 1.15 1.304 2.42 1.012 4.287-.023.143-.047.288-.077.437-.983 5.05-4.349 6.797-8.647 6.797h-2.19c-.524 0-.968.382-1.05.9l-1.12 7.106a.64.64 0 0 1-.633.54z"/>
        </svg>
      ),
      bgColor: "bg-[#003087]"
    },
    {
      name: "Apple Pay",
      description: "One-touch payment on iPhone, iPad, and Mac",
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8 text-white">
          <path d="M12.152 6.896c-.948 0-2.415-1.078-3.96-1.04-2.04.027-3.91 1.183-4.961 3.014-2.117 3.675-.546 9.103 1.519 12.09 1.013 1.454 2.208 3.09 3.792 3.039 1.52-.065 2.09-.987 3.935-.987 1.831 0 2.35.987 3.96.948 1.641-.026 2.62-1.503 3.614-2.951 1.143-1.677 1.611-3.299 1.637-3.377-.039-.013-3.16-1.213-3.199-4.836-.04-3.038 2.478-4.489 2.595-4.568-1.428-2.09-3.64-2.388-4.435-2.425-1.65-.17-3.197.907-4.015.907a5.5 5.5 0 0 1-1.39-1.27c1.378-1.68 2.298-4.004 2.046-6.284-1.43.052-3.136.96-4.06 2.115z" />
        </svg>
      ),
      bgColor: "bg-black border border-white/20"
    }
  ];

  return (
    <section id="payment-methods" className="py-32 relative bg-[#0d0d14]">
      {/* Top separator */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/5 to-transparent"></div>
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-display font-bold text-gradient mb-6"
          >
            Payment Methods
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-muted-foreground text-lg"
          >
            Secure and instant payment processing via Discord ticket.
          </motion.p>
        </div>

        <div className="flex flex-col gap-6">
          {methods.map((method, index) => (
            <motion.div
              key={method.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15, duration: 0.5 }}
              className="glass-panel glass-panel-hover p-6 sm:p-8 rounded-[1.5rem] flex flex-col sm:flex-row items-start sm:items-center gap-6 cursor-default"
            >
              <div className={cn("w-[72px] h-[72px] rounded-2xl flex items-center justify-center shrink-0 shadow-lg", method.bgColor)}>
                {method.icon}
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-white mb-2">{method.name}</h3>
                <p className="text-base text-muted-foreground">{method.description}</p>
              </div>
              <div className="hidden sm:flex shrink-0 w-12 h-12 rounded-full bg-white/5 items-center justify-center">
                <CheckCircle2 className="w-6 h-6 text-green-400" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}