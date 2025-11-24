import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Github, Twitter, Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-slate-950 border-t border-slate-900 pt-20 pb-10">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-white mb-8"
          >
            Ready to <span className="text-cyan-400">Fix Your Code?</span>
          </motion.h2>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <a 
              href="https://www.fiverr.com/meherab788/find-and-fix-javascript-errors-fix-code-and-fix-react-and-next-bugs"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-10 py-5 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-bold text-xl rounded-xl hover:shadow-lg hover:shadow-cyan-500/25 transition-all transform hover:-translate-y-1"
            >
              Order Now on Fiverr
              <ArrowRight className="w-6 h-6" />
            </a>
            <p className="mt-4 text-slate-500 text-sm">
              100% Satisfaction Guarantee • Fast Delivery
            </p>
          </motion.div>
        </div>

        <div className="border-t border-slate-900 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-slate-500 text-sm">
            © {new Date().getFullYear()} Expert Bug Fixes. All rights reserved.
          </div>
          
          <div className="flex items-center gap-6">
            <a href="#" className="text-slate-500 hover:text-cyan-400 transition-colors">
              <Github className="w-5 h-5" />
            </a>
            <a href="#" className="text-slate-500 hover:text-cyan-400 transition-colors">
              <Twitter className="w-5 h-5" />
            </a>
            <a href="#" className="text-slate-500 hover:text-cyan-400 transition-colors">
              <Linkedin className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
