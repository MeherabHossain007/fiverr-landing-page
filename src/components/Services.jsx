import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Code, Layout, Server, Database, Smartphone, Zap, Shield, Globe, Lock } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Shield,
      title: "Infrastructure Assurance",
      desc: "Enterprise-grade security audits, penetration testing, and 24/7 threat monitoring."
    },
    {
      icon: Zap,
      title: "Performance Engineering",
      desc: "Advanced optimization for Core Web Vitals, server-side rendering, and database latency."
    },
    {
      icon: Code,
      title: "Full-Stack Architecture",
      desc: "Scalable system design using React, Next.js, and microservices architecture."
    },
    {
      icon: Server,
      title: "DevOps & Cloud",
      desc: "CI/CD pipeline automation, Docker containerization, and AWS/Vercel management."
    },
    {
      icon: Layout,
      title: "Interface Engineering",
      desc: "Pixel-perfect implementation of complex design systems with Framer Motion."
    },
    {
      icon: Database,
      title: "API Ecosystems",
      desc: "Robust API development, GraphQL integration, and legacy system modernization."
    },
    {
      icon: Smartphone,
      title: "Adaptive Experiences",
      desc: "Fluid, mobile-first interfaces that maintain consistency across all viewports."
    },
    {
      icon: Lock,
      title: "Legacy Refactoring",
      desc: "Modernizing technical debt into clean, maintainable, and type-safe codebases."
    },
    {
      icon: Globe,
      title: "Technical SEO",
      desc: "Deep-dive technical optimization to maximize organic search visibility."
    }
  ];

  return (
    <section className="py-24 bg-slate-950 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-cyan-500/5 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-white mb-4 tracking-tight"
          >
            Capabilities & <span className="text-cyan-400">Expertise</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-slate-400 max-w-2xl mx-auto font-light text-lg"
          >
            We don't just write code. We engineer robust digital solutions that drive business value.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard key={index} service={service} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

const ServiceCard = ({ service, index }) => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setPosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      onMouseMove={handleMouseMove}
      className="relative p-8 bg-slate-900/50 rounded-2xl border border-slate-800 overflow-hidden group hover:border-cyan-500/30 transition-colors"
    >
      {/* Spotlight Effect */}
      <div
        className="pointer-events-none absolute -inset-px opacity-0 group-hover:opacity-100 transition duration-300"
        style={{
          background: `radial-gradient(600px circle at ${position.x}px ${position.y}px, rgba(34, 211, 238, 0.05), transparent 40%)`,
        }}
      />

      <div className="relative z-10">
        <div className="w-12 h-12 bg-slate-800/50 rounded-xl flex items-center justify-center mb-6 group-hover:bg-cyan-500/10 group-hover:scale-110 transition-all duration-300 border border-slate-700 group-hover:border-cyan-500/30">
          <service.icon className="w-6 h-6 text-cyan-400" />
        </div>
        <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">{service.title}</h3>
        <p className="text-slate-400 text-sm leading-relaxed font-light">
          {service.desc}
        </p>
      </div>
    </motion.div>
  );
};

export default Services;
