import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, BarChart, Clock, Shield } from 'lucide-react';

const CaseStudies = () => {
  const cases = [
    {
      client: "FinTech Global",
      category: "Security & Scale",
      title: "Scaling to 1M+ Daily Transactions",
      metrics: [
        { label: "Uptime", value: "99.99%", icon: Clock },
        { label: "Security", value: "ISO 27001", icon: Shield },
        { label: "Speed", value: "+140%", icon: BarChart }
      ],
      image: "bg-gradient-to-br from-slate-800 to-slate-900"
    },
    {
      client: "E-Com Giants",
      category: "Performance Engineering",
      title: "Reducing Load Time by 2.5s",
      metrics: [
        { label: "Conversion", value: "+35%", icon: ArrowUpRight },
        { label: "Core Vitals", value: "100/100", icon: BarChart },
        { label: "Revenue", value: "+$2M/yr", icon: Clock }
      ],
      image: "bg-gradient-to-br from-blue-900 to-slate-900"
    },
    {
      client: "SaaS Startup",
      category: "Full-Stack Architecture",
      title: "From MVP to Enterprise Ready",
      metrics: [
        { label: "Users", value: "0 to 50k", icon: ArrowUpRight },
        { label: "Downtime", value: "0ms", icon: Shield },
        { label: "Deploy", value: "Auto", icon: Clock }
      ],
      image: "bg-gradient-to-br from-purple-900 to-slate-900"
    }
  ];

  return (
    <section className="py-24 bg-slate-950 relative border-t border-slate-900">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Proven <span className="text-cyan-400">Results</span>
            </h2>
            <p className="text-slate-400 max-w-xl">
              We don't just write code; we engineer business outcomes. See how we've helped others scale.
            </p>
          </div>
          <a href="#" className="text-cyan-400 font-bold flex items-center gap-2 hover:text-cyan-300 transition-colors">
            View All Case Studies <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {cases.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative rounded-2xl overflow-hidden border border-slate-800 hover:border-cyan-500/50 transition-colors bg-slate-900/50"
            >
              {/* Image Placeholder */}
              <div className={`h-48 ${item.image} relative overflow-hidden`}>
                <div className="absolute inset-0 bg-slate-950/20 group-hover:bg-transparent transition-colors"></div>
                {/* Abstract Shapes */}
                <div className="absolute -right-10 -top-10 w-40 h-40 bg-white/5 rounded-full blur-2xl group-hover:bg-cyan-500/20 transition-colors duration-500"></div>
              </div>

              <div className="p-8">
                <div className="text-xs font-bold text-cyan-400 uppercase tracking-wider mb-2">{item.category}</div>
                <h3 className="text-xl font-bold text-white mb-6 group-hover:text-cyan-400 transition-colors">{item.title}</h3>

                <div className="grid grid-cols-3 gap-4 border-t border-slate-800 pt-6">
                  {item.metrics.map((metric, i) => (
                    <div key={i} className="text-center">
                      <div className="text-lg font-bold text-white mb-1">{metric.value}</div>
                      <div className="text-xs text-slate-500">{metric.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;
