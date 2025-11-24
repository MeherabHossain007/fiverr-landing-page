import React from 'react';
import { motion } from 'framer-motion';
import { Lock, CheckCircle, Shield } from 'lucide-react';

const Funnel = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-slate-900 to-slate-950">
      <div className="container mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Don't waste hours stuck on code errors.
          </h2>
          <p className="text-xl text-slate-400 mb-10">
            Let an expert fix your issue quickly, safely, and professionally. Get back to building features, not fixing bugs.
          </p>

          <div className="flex flex-wrap justify-center gap-6 mb-10">
            <div className="flex items-center gap-2 px-4 py-2 bg-slate-800 rounded-full border border-slate-700 text-slate-300">
              <Lock className="w-4 h-4 text-green-400" />
              <span>Secure Workflow</span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 bg-slate-800 rounded-full border border-slate-700 text-slate-300">
              <CheckCircle className="w-4 h-4 text-cyan-400" />
              <span>Fiverr Verified</span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 bg-slate-800 rounded-full border border-slate-700 text-slate-300">
              <Shield className="w-4 h-4 text-blue-400" />
              <span>100% Confidential</span>
            </div>
          </div>

          <a 
            href="https://www.fiverr.com/meherab788/find-and-fix-javascript-errors-fix-code-and-fix-react-and-next-bugs"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-10 py-4 bg-white text-slate-900 font-bold text-lg rounded-full hover:bg-cyan-50 transition-colors shadow-lg hover:shadow-white/10"
          >
            Fix My Code Now
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Funnel;
