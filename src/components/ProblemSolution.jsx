import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { AlertTriangle, XCircle, Clock, CheckCircle, ShieldCheck, Zap, ArrowRight } from 'lucide-react';

const ProblemSolution = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const problems = [
    {
      icon: AlertTriangle,
      title: "Technical Debt",
      desc: "Spaghetti code and legacy systems slowing down new features.",
      color: "text-red-500"
    },
    {
      icon: XCircle,
      title: "Security Vulnerabilities",
      desc: "Exposed endpoints and unpatched dependencies risking data.",
      color: "text-orange-500"
    },
    {
      icon: Clock,
      title: "Slow Performance",
      desc: "High latency and poor core web vitals killing conversion.",
      color: "text-yellow-500"
    }
  ];

  const solutions = [
    {
      icon: Zap,
      title: "Modern Architecture",
      desc: "Clean, modular codebases built for speed and scalability.",
      color: "text-cyan-400"
    },
    {
      icon: ShieldCheck,
      title: "Enterprise Security",
      desc: "ISO-compliant audits and automated penetration testing.",
      color: "text-green-400"
    },
    {
      icon: CheckCircle,
      title: "Performance First",
      desc: "Sub-100ms load times and optimized rendering pipelines.",
      color: "text-blue-400"
    }
  ];

  return (
    <section className="py-24 bg-slate-950 relative overflow-hidden">
      {/* Background Split */}
      <div className="absolute inset-0 flex">
        <div className="w-1/2 bg-slate-950/50 border-r border-slate-900/50"></div>
        <div className="w-1/2 bg-slate-900/20"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Stop Patching. <span className="text-cyan-400">Start Scaling.</span>
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            Move from chaos to clarity with our engineering-first approach.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center max-w-5xl mx-auto">
          {/* Left: The Problem (Chaos) */}
          <div className="space-y-6">
            <div className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-4 pl-2">The Old Way</div>
            {problems.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                className={`p-6 rounded-xl border border-slate-800/50 bg-slate-900/30 transition-all duration-300 cursor-default ${
                  hoveredIndex === index ? 'opacity-50 blur-[1px]' : 'opacity-100'
                }`}
              >
                <div className="flex items-start gap-4">
                  <div className={`p-3 rounded-lg bg-slate-950 border border-slate-800 ${item.color}`}>
                    <item.icon className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className={`text-lg font-bold mb-1 ${item.color} font-mono`}>{item.title}</h3>
                    <p className="text-slate-500 text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Center Connector (Desktop) */}
          <div className="hidden md:flex flex-col items-center justify-center gap-2 absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
            <div className="w-12 h-12 rounded-full bg-slate-900 border border-cyan-500/30 flex items-center justify-center shadow-[0_0_20px_rgba(6,182,212,0.2)]">
              <ArrowRight className="w-5 h-5 text-cyan-400" />
            </div>
          </div>

          {/* Right: The Solution (Order) */}
          <div className="space-y-6">
            <div className="text-xs font-bold text-cyan-500 uppercase tracking-widest mb-4 pl-2 text-right">The FixFlow Way</div>
            {solutions.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 + 0.2 }}
                className={`p-6 rounded-xl border transition-all duration-500 ${
                  hoveredIndex === index 
                    ? 'bg-slate-900 border-cyan-500 shadow-[0_0_30px_rgba(6,182,212,0.15)] scale-105 z-10' 
                    : 'bg-slate-900/50 border-slate-800'
                }`}
              >
                <div className="flex items-start gap-4">
                  <div className={`p-3 rounded-lg bg-gradient-to-br from-slate-800 to-slate-900 border border-slate-700 ${item.color}`}>
                    <item.icon className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white mb-1">{item.title}</h3>
                    <p className="text-slate-400 text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSolution;
