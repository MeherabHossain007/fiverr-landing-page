import React from 'react';
import { motion } from 'framer-motion';
import { Code, Layout, Server, Database, Smartphone, Zap, Terminal, Globe, Layers } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Code,
      title: "JavaScript Bug Fixes",
      desc: "Fixing logic errors, undefined variables, and broken scripts."
    },
    {
      icon: Layout,
      title: "React Component Debugging",
      desc: "Solving state management, props drilling, and re-rendering issues."
    },
    {
      icon: Server,
      title: "Next.js Server Actions",
      desc: "Fixing API routes, server-side rendering, and hydration errors."
    },
    {
      icon: Globe,
      title: "HTML & CSS Corrections",
      desc: "Fixing layout shifts, broken styles, and z-index wars."
    },
    {
      icon: Layers,
      title: "Tailwind & Bootstrap",
      desc: "Resolving class conflicts and responsive design breaks."
    },
    {
      icon: Database,
      title: "API Integration Fixes",
      desc: "Debugging fetch requests, async/await, and data handling."
    },
    {
      icon: Smartphone,
      title: "Responsive Design",
      desc: "Ensuring your site looks perfect on Mobile, Tablet, and Desktop."
    },
    {
      icon: Zap,
      title: "Performance Tuning",
      desc: "Optimizing load times, reducing bundle size, and fixing memory leaks."
    },
    {
      icon: Terminal,
      title: "Console & Build Errors",
      desc: "Clearing up those red warnings and fixing build failures."
    }
  ];

  return (
    <section className="py-20 bg-slate-950">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Expert Services for <span className="text-cyan-400">Every Stack</span>
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            From simple CSS tweaks to complex React logic, I handle it all with precision and speed.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="p-6 bg-slate-900 rounded-xl border border-slate-800 hover:border-cyan-500/50 hover:shadow-lg hover:shadow-cyan-500/10 transition-all group"
            >
              <div className="w-12 h-12 bg-slate-800 rounded-lg flex items-center justify-center mb-4 group-hover:bg-cyan-500/20 transition-colors">
                <service.icon className="w-6 h-6 text-cyan-400" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">{service.title}</h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                {service.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
