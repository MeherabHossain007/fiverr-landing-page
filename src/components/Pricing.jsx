import React from 'react';
import { motion } from 'framer-motion';
import { Check, Zap, Code, Bug } from 'lucide-react';

const Pricing = () => {
  const tiers = [
    {
      name: "Basic Fix",
      price: "$15",
      desc: "Quick fix for small CSS/HTML issues or simple JS errors.",
      icon: Bug,
      features: [
        "1 Small Bug Fix",
        "1 Hour Delivery",
        "Code Explanation",
        "1 Revision"
      ],
      recommended: false
    },
    {
      name: "Standard Debug",
      price: "$40",
      desc: "Detailed debugging for React components or API integration issues.",
      icon: Code,
      features: [
        "Complex Logic Fix",
        "Component Optimization",
        "Detailed Comments",
        "2 Revisions"
      ],
      recommended: true
    },
    {
      name: "Full Optimization",
      price: "$80",
      desc: "Complete review, refactoring, and performance tuning.",
      icon: Zap,
      features: [
        "Multiple Bug Fixes",
        "Code Refactoring",
        "Performance Audit",
        "Unlimited Revisions"
      ],
      recommended: false
    }
  ];

  return (
    <section className="py-20 bg-slate-950">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Simple, Transparent <span className="text-cyan-400">Pricing</span>
          </h2>
          <p className="text-slate-400">
            No hidden fees. Pay for exactly what you need.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {tiers.map((tier, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`relative p-8 rounded-2xl border ${tier.recommended ? 'bg-slate-900 border-cyan-500 shadow-2xl shadow-cyan-500/10' : 'bg-slate-900/50 border-slate-800'}`}
            >
              {tier.recommended && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-cyan-500 text-slate-900 text-xs font-bold px-4 py-1 rounded-full">
                  MOST POPULAR
                </div>
              )}

              <div className="mb-8">
                <div className={`w-12 h-12 rounded-lg flex items-center justify-center mb-4 ${tier.recommended ? 'bg-cyan-500/20 text-cyan-400' : 'bg-slate-800 text-slate-400'}`}>
                  <tier.icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-white">{tier.name}</h3>
                <div className="mt-2 flex items-baseline gap-1">
                  <span className="text-4xl font-bold text-white">{tier.price}</span>
                  <span className="text-slate-500">/ fix</span>
                </div>
                <p className="text-slate-400 text-sm mt-4">{tier.desc}</p>
              </div>

              <ul className="space-y-4 mb-8">
                {tier.features.map((feature, i) => (
                  <li key={i} className="flex items-center gap-3 text-sm text-slate-300">
                    <Check className={`w-4 h-4 ${tier.recommended ? 'text-cyan-400' : 'text-slate-500'}`} />
                    {feature}
                  </li>
                ))}
              </ul>

              <a 
                href="https://www.fiverr.com/meherab788/find-and-fix-javascript-errors-fix-code-and-fix-react-and-next-bugs"
                target="_blank"
                rel="noopener noreferrer"
                className={`block w-full py-3 text-center font-bold rounded-lg transition-all ${
                  tier.recommended 
                    ? 'bg-cyan-500 hover:bg-cyan-400 text-slate-900 hover:shadow-lg hover:shadow-cyan-500/25' 
                    : 'bg-slate-800 hover:bg-slate-700 text-white'
                }`}
              >
                Order on Fiverr
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
