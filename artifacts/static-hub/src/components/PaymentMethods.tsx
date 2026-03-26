import { motion } from "framer-motion";
import { CreditCard, Wallet } from "lucide-react";
import { cn } from "@/lib/utils";

export function PaymentMethods() {
  const methods = [
    {
      name: "Credit/Debit Cards",
      description: "Secure payments via all major card providers",
      icon: <CreditCard className="w-7 h-7 text-white" />,
      color: "bg-gradient-to-br from-blue-500 to-indigo-600"
    },
    {
      name: "PayPal",
      description: "Fast and secure checkout with your PayPal account",
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-7 h-7 text-white">
          <path d="M7.076 21.337H2.47a.641.641 0 0 1-.633-.74L4.944.901C5.026.382 5.474 0 6.007 0h7.46c2.57 0 4.578.543 5.69 1.81 1.01 1.15 1.304 2.42 1.012 4.287-.023.143-.047.288-.077.437-.983 5.05-4.349 6.797-8.647 6.797h-2.19c-.524 0-.968.382-1.05.9l-1.12 7.106a.64.64 0 0 1-.633.54z"/>
        </svg>
      ),
      color: "bg-[#003087]"
    },
    {
      name: "Apple Pay",
      description: "One-touch payment on supported Apple devices",
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-7 h-7 text-white">
          <path d="M12.152 6.896c-.948 0-2.415-1.078-3.96-1.04-2.04.027-3.91 1.183-4.961 3.014-2.117 3.675-.546 9.103 1.519 12.09 1.013 1.454 2.208 3.09 3.792 3.039 1.52-.065 2.09-.987 3.935-.987 1.831 0 2.35.987 3.96.948 1.641-.026 2.62-1.503 3.614-2.951 1.143-1.677 1.611-3.299 1.637-3.377-.039-.013-3.16-1.213-3.199-4.836-.04-3.038 2.478-4.489 2.595-4.568-1.428-2.09-3.64-2.388-4.435-2.425-1.65-.17-3.197.907-4.015.907a5.5 5.5 0 0 1-1.39-1.27c1.378-1.68 2.298-4.004 2.046-6.284-1.43.052-3.136.96-4.06 2.115z" />
        </svg>
      ),
      color: "bg-black border border-white/20"
    }
  ];

  return (
    <section id="payment-methods" className="py-24 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-display font-bold text-white mb-4"
          >
            Accepted Payment Methods
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-muted-foreground"
          >
            We process payments securely. Open a ticket in Discord to purchase.
          </motion.p>
        </div>

        <div className="grid gap-4">
          {methods.map((method, index) => (
            <motion.div
              key={method.name}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="glass-panel p-4 sm:p-6 rounded-2xl flex items-center gap-4 hover:bg-white/5 transition-colors"
            >
              <div className={cn("w-14 h-14 rounded-xl flex items-center justify-center shrink-0 shadow-lg", method.color)}>
                {method.icon}
              </div>
              <div>
                <h3 className="text-lg font-bold text-white">{method.name}</h3>
                <p className="text-sm text-muted-foreground">{method.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
