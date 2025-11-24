import React from 'react';
import { motion } from 'framer-motion';
import { XCircle, CheckCircle, AlertTriangle, Zap, Shield, Clock } from 'lucide-react';

const ProblemSolution = () => {
  const problems = [
    "JavaScript errors breaking the app",
    "React components not updating",
    "Next.js routing/server errors",
    "CSS not responsive / Layout breaks",
    "Tailwind classes not applying",
    "Browser compatibility bugs"
  ];

  const solutions = [
    { icon: Clock, text: "Quick delivery (1 hour for simple fixes)" },
    { icon: Shield, text: "Clean, well-structured code" },
    { icon: Zap, text: "Performance optimization included" },
    { icon: CheckCircle, text: "Detailed bug reports + explanations" },
  ];

  return (
    <section className="py-20 bg-slate-900 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Problem Side */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-500/10 border border-red-500/20 text-red-400 text-sm font-medium mb-6">
              <AlertTriangle className="w-4 h-4" />
              Stuck on a bug?
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Don't Let <span className="text-red-400">Broken Code</span> Cost You Users
            </h2>
            <p className="text-slate-400 mb-8 text-lg">
              Every minute your app is buggy, you lose credibility. I fix the issues that drive developers crazy.
            </p>

            <div className="space-y-4">
              {problems.map((problem, index) => (
                <div key={index} className="flex items-center gap-3 p-4 bg-slate-800/50 rounded-lg border border-slate-800 hover:border-red-500/30 transition-colors">
                  <XCircle className="w-5 h-5 text-red-400 flex-shrink-0" />
                  <span className="text-slate-300">{problem}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Solution Side */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 blur-3xl rounded-full"></div>
            
            <div className="relative bg-slate-800 rounded-2xl p-8 border border-slate-700 shadow-2xl">
              <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                <span className="p-2 bg-green-500/20 rounded-lg text-green-400">
                  <CheckCircle className="w-6 h-6" />
                </span>
                The Expert Solution
              </h3>

              <div className="space-y-6">
                {solutions.map((item, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <div className="p-2 bg-slate-700/50 rounded-lg text-cyan-400">
                      <item.icon className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="text-white font-medium text-lg">{item.text}</h4>
                      <p className="text-slate-400 text-sm mt-1">Guaranteed fix or money back.</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8 pt-8 border-t border-slate-700">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-slate-400 text-sm">Fiverr Rating</div>
                    <div className="text-2xl font-bold text-white flex items-center gap-2">
                      5.0 <div className="flex text-yellow-400"><StarIcon /><StarIcon /><StarIcon /><StarIcon /><StarIcon /></div>
                    </div>
                  </div>
                  <a 
                    href="https://www.fiverr.com/meherab788/find-and-fix-javascript-errors-fix-code-and-fix-react-and-next-bugs"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 py-3 bg-cyan-500 hover:bg-cyan-400 text-slate-900 font-bold rounded-lg transition-colors"
                  >
                    Hire Me
                  </a>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

const StarIcon = () => (
  <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20">
    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
  </svg>
);

export default ProblemSolution;
