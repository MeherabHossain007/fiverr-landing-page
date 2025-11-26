import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Code, ChevronRight } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Services', href: '#services' },
    { name: 'Process', href: '#process' },
    { name: 'Reviews', href: '#reviews' },
    { name: 'Pricing', href: '#pricing' },
    { name: 'FAQ', href: '#faq' },
  ];

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, type: 'spring', stiffness: 100 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled 
            ? 'py-4 bg-slate-950/70 backdrop-blur-xl border-b border-white/5 shadow-2xl shadow-cyan-900/10' 
            : 'py-6 bg-transparent'
        }`}
      >
        <div className="container mx-auto px-4 flex items-center justify-between">
          {/* Logo */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="relative w-10 h-10 flex items-center justify-center">
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-xl blur-md opacity-50 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative w-full h-full bg-slate-900 rounded-xl border border-white/10 flex items-center justify-center text-white group-hover:border-cyan-500/50 transition-colors">
                <Code className="w-5 h-5 text-cyan-400" />
              </div>
            </div>
            <span className="text-xl font-bold text-white tracking-tight font-mono">
              FixFlow<span className="text-cyan-400 animate-pulse">_</span>
            </span>
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-1 bg-slate-900/50 p-1.5 rounded-full border border-white/5 backdrop-blur-md">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="relative px-5 py-2 text-sm font-medium text-slate-400 hover:text-white transition-colors rounded-full group"
              >
                {link.name}
                <span className="absolute inset-0 bg-white/5 rounded-full scale-0 group-hover:scale-100 transition-transform duration-300"></span>
              </a>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <a
              href="#pricing"
              className="relative inline-flex items-center gap-2 px-6 py-2.5 bg-cyan-500 text-slate-950 font-bold text-sm rounded-lg overflow-hidden group hover:shadow-[0_0_20px_rgba(6,182,212,0.4)] transition-shadow duration-300"
            >
              <span className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></span>
              <span className="relative flex items-center gap-2">
                Free Consultation
                <ChevronRight className="w-4 h-4" />
              </span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white p-2 relative z-50"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <AnimatePresence mode="wait">
              {isMobileMenuOpen ? (
                <motion.div
                  key="close"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                >
                  <X className="w-6 h-6 text-cyan-400" />
                </motion.div>
              ) : (
                <motion.div
                  key="menu"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                >
                  <Menu className="w-6 h-6" />
                </motion.div>
              )}
            </AnimatePresence>
          </button>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, clipPath: "circle(0% at 100% 0%)" }}
            animate={{ opacity: 1, clipPath: "circle(150% at 100% 0%)" }}
            exit={{ opacity: 0, clipPath: "circle(0% at 100% 0%)" }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="fixed inset-0 z-40 bg-slate-950/95 backdrop-blur-xl pt-24 px-6 md:hidden flex flex-col"
          >
            <div className="flex flex-col gap-2">
              {navLinks.map((link, index) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  initial={{ x: 50, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: index * 0.1 }}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-3xl font-bold text-white py-4 border-b border-white/5 hover:text-cyan-400 transition-colors"
                >
                  {link.name}
                </motion.a>
              ))}
              <motion.a
                href="#pricing"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.5 }}
                onClick={() => setIsMobileMenuOpen(false)}
                className="mt-8 w-full py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-bold text-center rounded-xl shadow-lg shadow-cyan-500/20"
              >
                Book Consultation
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
