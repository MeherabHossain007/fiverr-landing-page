import React from 'react';
import { Code, Twitter, Linkedin, Facebook, Mail, ArrowRight } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-slate-950 border-t border-slate-900 pt-20 pb-10">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-2">
            <a href="#" className="flex items-center gap-2 mb-6">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center text-white">
                <Code className="w-5 h-5" />
              </div>
              <span className="text-xl font-bold text-white tracking-tight">
                FixFlow<span className="text-cyan-400">.</span>
              </span>
            </a>
            <p className="text-slate-400 mb-8 max-w-sm">
              Enterprise-grade web development for ambitious brands. We build, scale, and secure your digital future.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-slate-900 flex items-center justify-center text-slate-400 hover:bg-cyan-500 hover:text-white transition-all">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-slate-900 flex items-center justify-center text-slate-400 hover:bg-blue-600 hover:text-white transition-all">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-slate-900 flex items-center justify-center text-slate-400 hover:bg-blue-500 hover:text-white transition-all">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-slate-900 flex items-center justify-center text-slate-400 hover:bg-red-500 hover:text-white transition-all">
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6">Company</h4>
            <ul className="space-y-4">
              <li><a href="#" className="text-slate-400 hover:text-cyan-400 transition-colors">About Us</a></li>
              <li><a href="#" className="text-slate-400 hover:text-cyan-400 transition-colors">Careers</a></li>
              <li><a href="#" className="text-slate-400 hover:text-cyan-400 transition-colors">Case Studies</a></li>
              <li><a href="#" className="text-slate-400 hover:text-cyan-400 transition-colors">Contact</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6">Stay Updated</h4>
            <p className="text-slate-400 text-sm mb-4">
              Get the latest tech trends and security alerts.
            </p>
            <form className="flex gap-2" onSubmit={(e) => e.preventDefault()}>
              <input 
                type="email" 
                placeholder="Email address" 
                className="bg-slate-900 border border-slate-800 rounded-lg px-4 py-2 text-white text-sm focus:outline-none focus:border-cyan-500 flex-1"
              />
              <button className="bg-cyan-500 hover:bg-cyan-400 text-slate-950 p-2 rounded-lg transition-colors">
                <ArrowRight className="w-5 h-5" />
              </button>
            </form>
          </div>
        </div>

        <div className="border-t border-slate-900 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-slate-500 text-sm">
            © {new Date().getFullYear()} FixFlow Agency. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-slate-500">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
