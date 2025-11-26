import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Check, Zap, Code, Shield, Info } from 'lucide-react';

const Pricing = () => {
  const [hoveredFeature, setHoveredFeature] = useState(null);

  const tiers = [
    {
      name: "Starter Fix",
      price: "$150",
      desc: "One-time fix for critical bugs or small feature implementation.",
      icon: Code,
      features: [
        { name: "1 Critical Bug Fix", tooltip: "Resolution of a single blocking issue" },
        { name: "Code Explanation", tooltip: "Detailed comments and walkthrough" },
        { name: "24h Turnaround", tooltip: "Guaranteed delivery within 24 hours" },
        { name: "30 Days Warranty", tooltip: "Free fixes if the issue reoccurs" }
      ],
      recommended: false
    },
    {
      name: "Growth Retainer",
      price: "$999",
      desc: "Monthly maintenance and development for growing businesses.",
      icon: Zap,
      features: [
        { name: "20 Hours Development/mo", tooltip: "Flexible hours for any dev task" },
        { name: "Weekly Security Audits", tooltip: "Automated & manual vulnerability checks" },
        { name: "Priority Support", tooltip: "Direct Slack access, <4h response" },
        { name: "Performance Monitoring", tooltip: "24/7 uptime and speed tracking" }
      ],
      recommended: true
    },
    {
      name: "Enterprise",
      price: "Custom",
      desc: "Full-scale development team dedicated to your project.",
      icon: Shield,
      features: [
        { name: "Dedicated Team (3+ Devs)", tooltip: "Full stack team assigned to you" },
        { name: "24/7 SLA Support", tooltip: "15-minute response time guarantee" },
        { name: "Architecture Design", tooltip: "Scalable system planning" },
        { name: "Unlimited Revisions", tooltip: "We work until it's perfect" }
      ],
      recommended: false
    }
  ];

  return (
    <section id="pricing" className="py-20 bg-slate-950 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-cyan-900/10 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Flexible <span className="text-cyan-400">Engagement Models</span>
          </h2>
          <p className="text-slate-400">
            Choose the plan that fits your business stage.
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
              className={`relative p-8 rounded-2xl border transition-all duration-300 group ${
                tier.recommended 
                  ? 'bg-slate-900 border-cyan-500 shadow-2xl shadow-cyan-500/10 scale-105 z-10' 
                  : 'bg-slate-900/50 border-slate-800 hover:border-slate-700'
              }`}
            >
              {tier.recommended && (
                <>
                  <div className="absolute inset-0 bg-cyan-500/5 blur-xl rounded-2xl -z-10"></div>
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-cyan-500 to-blue-600 text-white text-xs font-bold px-4 py-1 rounded-full shadow-lg flex items-center gap-1">
                    <Zap className="w-3 h-3 fill-current" /> MOST POPULAR
                  </div>
                </>
              )}

              <div className="mb-8">
                <div className={`w-12 h-12 rounded-lg flex items-center justify-center mb-4 transition-colors ${
                  tier.recommended ? 'bg-cyan-500/20 text-cyan-400' : 'bg-slate-800 text-slate-400 group-hover:bg-slate-700'
                }`}>
                  <tier.icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-white">{tier.name}</h3>
                <div className="mt-2 flex items-baseline gap-1">
                  <span className="text-4xl font-bold text-white">{tier.price}</span>
                  {tier.price !== "Custom" && <span className="text-slate-500">{tier.name.includes("Retainer") ? "/mo" : "/fix"}</span>}
                </div>
                <p className="text-slate-400 text-sm mt-4">{tier.desc}</p>
              </div>

              <ul className="space-y-4 mb-8">
                {tier.features.map((feature, i) => (
                  <li key={i} className="flex items-center gap-3 text-sm text-slate-300 relative group/item">
                    <Check className={`w-4 h-4 ${tier.recommended ? 'text-cyan-400' : 'text-slate-500'}`} />
                    <span className="flex-1 border-b border-dashed border-slate-800 pb-0.5 cursor-help">
                      {feature.name}
                    </span>
                    
                    {/* Tooltip */}
                    <div className="absolute left-1/2 -translate-x-1/2 bottom-full mb-2 w-48 p-2 bg-slate-800 text-xs text-white rounded-lg shadow-xl opacity-0 invisible group-hover/item:opacity-100 group-hover/item:visible transition-all duration-200 z-20 text-center pointer-events-none">
                      {feature.tooltip}
                      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-2 h-2 bg-slate-800 rotate-45"></div>
                    </div>
                  </li>
                ))}
              </ul>

              <motion.a 
                href="https://www.fiverr.com/meherab788/find-and-fix-javascript-errors-fix-code-and-fix-react-and-next-bugs"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className={`block w-full py-3 text-center font-bold rounded-lg transition-all relative overflow-hidden ${
                  tier.recommended 
                    ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-lg shadow-cyan-500/25' 
                    : 'bg-slate-800 hover:bg-slate-700 text-white'
                }`}
              >
                <span className="relative z-10">{tier.price === "Custom" ? "Contact Sales" : "Get Started"}</span>
                {tier.recommended && (
                  <div className="absolute inset-0 bg-white/20 translate-y-full hover:translate-y-0 transition-transform duration-300"></div>
                )}
              </motion.a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
