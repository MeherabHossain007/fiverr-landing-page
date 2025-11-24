import React from 'react';
import { motion } from 'framer-motion';
import { Code, CheckCircle, ArrowRight, Star } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-20 pb-16 overflow-hidden bg-slate-950">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] right-[-5%] w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-[-10%] left-[-5%] w-96 h-96 bg-blue-600/10 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 grid lg:grid-cols-2 gap-12 items-center relative z-10">
        
        {/* Left Content */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-6"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-sm font-medium">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
            </span>
            Available for Instant Fixes
          </div>

          <h1 className="text-5xl md:text-6xl font-bold leading-tight text-white">
            Fix Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">JavaScript</span> & <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">React</span> Bugs — Fast!
          </h1>
          
          <p className="text-lg text-slate-400 max-w-xl">
            Get expert debugging, clean code fixes, and responsive UI corrections—starting at just $15. Don't let bugs slow down your launch.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <a 
              href="https://www.fiverr.com/meherab788/find-and-fix-javascript-errors-fix-code-and-fix-react-and-next-bugs"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-cyan-500/25 transition-all transform hover:-translate-y-1"
            >
              <Code className="w-5 h-5" />
              Fix My Code Now
            </a>
            <a 
              href="https://www.fiverr.com/meherab788/find-and-fix-javascript-errors-fix-code-and-fix-react-and-next-bugs"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-slate-800 text-white font-semibold rounded-lg border border-slate-700 hover:bg-slate-700 transition-all"
            >
              <Star className="w-5 h-5 text-yellow-400" />
              View 5-Star Profile
            </a>
          </div>

          <div className="flex items-center gap-6 pt-4 text-sm text-slate-500">
            <div className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-cyan-500" />
              <span>100+ Bugs Fixed</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-cyan-500" />
              <span>1 Hour Delivery</span>
            </div>
          </div>
        </motion.div>

        {/* Right Visual - Code Editor */}
        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative"
        >
          {/* Floating Elements */}
          <motion.div 
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -top-6 -right-6 z-20 bg-slate-800 p-3 rounded-lg border border-slate-700 shadow-xl"
          >
            <div className="flex items-center gap-2 text-green-400 text-sm font-mono">
              <CheckCircle className="w-4 h-4" />
              <span>Bug Fixed!</span>
            </div>
          </motion.div>

          <div className="bg-slate-900 rounded-xl border border-slate-800 shadow-2xl overflow-hidden">
            {/* Window Header */}
            <div className="flex items-center px-4 py-3 bg-slate-800/50 border-b border-slate-800">
              <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
              </div>
              <div className="ml-4 text-xs text-slate-500 font-mono">App.jsx</div>
            </div>
            
            {/* Code Content */}
            <div className="p-6 font-mono text-sm overflow-hidden relative">
              {/* Error Line */}
              <div className="absolute top-[104px] left-0 w-full h-6 bg-red-500/10 border-l-2 border-red-500"></div>
              
              <div className="space-y-1">
                <div className="text-slate-500">// Before: Uncaught TypeError</div>
                <div className="text-purple-400">const <span className="text-blue-400">UserProfile</span> = <span className="text-yellow-300">({'{'} user {'}'})</span> <span className="text-purple-400">=&gt;</span> {'{'}</div>
                <div className="pl-4 text-slate-300">return (</div>
                <div className="pl-8 text-slate-300">&lt;<span className="text-red-400">div</span>&gt;</div>
                <div className="pl-12 text-slate-300">Welcome, {'{'} <span className="text-red-400 underline decoration-wavy decoration-red-500">user.name</span> {'}'}</div>
                <div className="pl-8 text-slate-300">&lt;/<span className="text-red-400">div</span>&gt;</div>
                <div className="pl-4 text-slate-300">);</div>
                <div className="text-slate-300">{'}'};</div>
                
                <div className="h-4"></div>
                
                <div className="text-slate-500">// After: Fixed & Safe</div>
                <div className="text-purple-400">const <span className="text-blue-400">UserProfile</span> = <span className="text-yellow-300">({'{'} user {'}'})</span> <span className="text-purple-400">=&gt;</span> {'{'}</div>
                <div className="pl-4 text-purple-400">if <span className="text-yellow-300">(!user)</span> return null;</div>
                <div className="pl-4 text-slate-300">return (</div>
                <div className="pl-8 text-slate-300">&lt;<span className="text-green-400">div</span> className=<span className="text-green-300">"text-xl"</span>&gt;</div>
                <div className="pl-12 text-slate-300">Welcome, {'{'} <span className="text-green-400">user.name</span> {'}'}</div>
                <div className="pl-8 text-slate-300">&lt;/<span className="text-green-400">div</span>&gt;</div>
                <div className="pl-4 text-slate-300">);</div>
                <div className="text-slate-300">{'}'};</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
