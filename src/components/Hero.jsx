import React, { useState, useEffect } from 'react';
import { motion, useMotionTemplate, useMotionValue } from 'framer-motion';
import { Code, CheckCircle, ArrowRight, Star, Users, Globe, Cpu, ShieldCheck } from 'lucide-react';

const Hero = () => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  function handleMouseMove({ currentTarget, clientX, clientY }) {
    let { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  const [text, setText] = useState('');
  const fullText = "Scalable Futures";
  
  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setText(fullText.slice(0, i));
      i++;
      if (i > fullText.length) clearInterval(interval);
    }, 100);
    return () => clearInterval(interval);
  }, []);

  return (
    <section 
      className="relative min-h-screen flex flex-col justify-center pt-32 pb-20 overflow-hidden bg-slate-950 group"
      onMouseMove={handleMouseMove}
    >
      {/* Spotlight Effect */}
      <motion.div
        className="pointer-events-none absolute -inset-px rounded-xl opacity-0 transition duration-300 group-hover:opacity-100"
        style={{
          background: useMotionTemplate`
            radial-gradient(
              650px circle at ${mouseX}px ${mouseY}px,
              rgba(6, 182, 212, 0.1),
              transparent 80%
            )
          `,
        }}
      />

      {/* Dynamic Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] right-[-5%] w-[600px] h-[600px] bg-cyan-900/10 rounded-full blur-[120px] animate-pulse"></div>
        <div className="absolute bottom-[-10%] left-[-5%] w-[600px] h-[600px] bg-blue-900/10 rounded-full blur-[120px] animate-pulse" style={{ animationDelay: '2s' }}></div>
        {/* Animated Particles/Grid */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:60px_60px] [mask-image:radial-gradient(ellipse_at_center,black_50%,transparent_80%)]"></div>
      </div>

      <div className="container mx-auto px-4 grid lg:grid-cols-2 gap-16 items-center relative z-10 mb-20">
        
        {/* Left Content */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="space-y-8"
        >
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-slate-900/50 border border-slate-800 backdrop-blur-sm text-slate-300 text-sm font-medium tracking-wide"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-500 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
            </span>
            Engineering Digital Excellence
          </motion.div>

          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight text-white tracking-tight">
            We Build <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600">
              {text}<span className="animate-pulse">|</span>
            </span>
          </h1>
          
          <p className="text-lg text-slate-400 max-w-xl leading-relaxed font-light">
            FixFlow is your strategic engineering partner. We transform complex challenges into elegant, high-performance web solutions. Security, scalability, and speed—engineered to perfection.
          </p>

          <div className="flex flex-col sm:flex-row gap-5 pt-4">
            <a 
              href="https://www.fiverr.com/meherab788/find-and-fix-javascript-errors-fix-code-and-fix-react-and-next-bugs"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center justify-center gap-3 px-8 py-4 bg-white text-slate-950 font-bold rounded-lg hover:bg-cyan-50 transition-all shadow-[0_0_20px_rgba(255,255,255,0.1)] hover:shadow-[0_0_30px_rgba(34,211,238,0.3)] transform hover:-translate-y-1"
            >
              Start Your Project
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
            <a 
              href="#process"
              className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-transparent text-white font-medium rounded-lg border border-slate-700 hover:bg-slate-800/50 transition-all hover:border-slate-500"
            >
              <Cpu className="w-5 h-5 text-cyan-400" />
              Our Process
            </a>
          </div>

          <div className="flex items-center gap-8 pt-6 border-t border-slate-800/50">
            <div className="flex flex-col">
              <span className="text-2xl font-bold text-white">99.9%</span>
              <span className="text-xs text-slate-500 uppercase tracking-wider">Uptime</span>
            </div>
            <div className="flex flex-col">
              <span className="text-2xl font-bold text-white">50+</span>
              <span className="text-xs text-slate-500 uppercase tracking-wider">Enterprise Clients</span>
            </div>
            <div className="flex flex-col">
              <span className="text-2xl font-bold text-white">24/7</span>
              <span className="text-xs text-slate-500 uppercase tracking-wider">Monitoring</span>
            </div>
          </div>
        </motion.div>

        {/* Right Visual - Abstract Tech */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative perspective-1000 flex justify-center"
        >
          <div className="relative w-full max-w-md aspect-square">
            {/* Orbiting Elements */}
            <motion.div 
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="absolute inset-0 rounded-full border border-slate-800/50 border-dashed"
            ></motion.div>
            <motion.div 
              animate={{ rotate: -360 }}
              transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
              className="absolute inset-12 rounded-full border border-slate-800/30"
            ></motion.div>

            {/* Central Core */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-32 h-32 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-2xl shadow-[0_0_50px_rgba(34,211,238,0.3)] flex items-center justify-center relative z-10">
                <Globe className="w-16 h-16 text-white" />
              </div>
            </div>

            {/* Floating Cards */}
            <motion.div 
              animate={{ y: [-10, 10, -10] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute top-0 right-0 bg-slate-900/90 backdrop-blur-md p-4 rounded-xl border border-slate-700 shadow-xl z-20"
            >
              <div className="flex items-center gap-3">
                <ShieldCheck className="w-8 h-8 text-green-400" />
                <div>
                  <div className="text-white font-bold text-sm">Security Audit</div>
                  <div className="text-green-400 text-xs">Passed • 0 Vulnerabilities</div>
                </div>
              </div>
            </motion.div>

            <motion.div 
              animate={{ y: [10, -10, 10] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="absolute bottom-10 left-0 bg-slate-900/90 backdrop-blur-md p-4 rounded-xl border border-slate-700 shadow-xl z-20"
            >
              <div className="flex items-center gap-3">
                <Cpu className="w-8 h-8 text-cyan-400" />
                <div>
                  <div className="text-white font-bold text-sm">System Load</div>
                  <div className="text-cyan-400 text-xs">Optimized • 12ms Latency</div>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Marquee */}
      <div className="w-full border-y border-slate-800 bg-slate-900/30 overflow-hidden py-6">
        <div className="container mx-auto px-4">
          <p className="text-center text-slate-500 text-sm uppercase tracking-widest mb-4">Trusted by Innovative Companies</p>
          <div className="flex justify-center gap-12 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
             {/* Placeholders for logos - using text for now but styled like logos */}
             <span className="text-xl font-bold text-white">Acme Corp</span>
             <span className="text-xl font-bold text-white">GlobalTech</span>
             <span className="text-xl font-bold text-white">Nebula AI</span>
             <span className="text-xl font-bold text-white">Vertex Solutions</span>
             <span className="text-xl font-bold text-white">Quantum Systems</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
