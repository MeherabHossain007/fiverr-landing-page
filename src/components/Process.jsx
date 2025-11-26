import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Search, Compass, Code, Rocket } from 'lucide-react';

const Process = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const steps = [
    {
      icon: Search,
      title: "Discovery",
      desc: "We dive deep into your infrastructure to identify bottlenecks and security gaps."
    },
    {
      icon: Compass,
      title: "Strategy",
      desc: "Our architects design a scalable roadmap tailored to your business goals."
    },
    {
      icon: Code,
      title: "Execution",
      desc: "Agile development sprints with rigorous testing and code reviews."
    },
    {
      icon: Rocket,
      title: "Scale",
      desc: "Continuous monitoring and optimization to support your growth."
    }
  ];

  return (
    <section className="py-24 bg-slate-950 relative overflow-hidden" ref={containerRef}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-24">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            The <span className="text-cyan-400">FixFlow Methodology</span>
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto font-light">
            A proven framework for digital transformation. Transparent, efficient, and results-driven.
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* Vertical Progress Line (Mobile/Tablet) */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-slate-800 md:hidden">
            <motion.div 
              style={{ scaleY: scrollYProgress, transformOrigin: "top" }}
              className="absolute top-0 left-0 w-full h-full bg-cyan-500"
            />
          </div>

          {/* Horizontal Progress Line (Desktop) */}
          <div className="hidden md:block absolute top-12 left-0 w-full h-0.5 bg-slate-800">
             <motion.div 
              style={{ scaleX: scrollYProgress, transformOrigin: "left" }}
              className="absolute top-0 left-0 w-full h-full bg-cyan-500"
            />
          </div>

          <div className="grid md:grid-cols-4 gap-12 relative z-10">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="relative pl-20 md:pl-0 md:pt-24 group"
              >
                {/* Icon Bubble */}
                <div className="absolute left-0 top-0 md:left-1/2 md:-top-4 md:-translate-x-1/2 w-16 h-16 bg-slate-900 rounded-full border-2 border-slate-800 flex items-center justify-center z-20 group-hover:border-cyan-500 group-hover:shadow-[0_0_20px_rgba(6,182,212,0.4)] transition-all duration-500">
                  <step.icon className="w-6 h-6 text-slate-400 group-hover:text-cyan-400 transition-colors" />
                  <div className="absolute -top-2 -right-2 w-6 h-6 bg-cyan-500 rounded-full flex items-center justify-center text-slate-950 text-xs font-bold opacity-0 group-hover:opacity-100 transition-opacity">
                    {index + 1}
                  </div>
                </div>

                <div className="bg-slate-900/50 p-6 rounded-xl border border-slate-800 hover:bg-slate-800/80 transition-colors text-left md:text-center">
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">{step.title}</h3>
                  <p className="text-slate-400 text-sm leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;
