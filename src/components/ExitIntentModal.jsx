import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Gift, ArrowRight } from 'lucide-react';

const ExitIntentModal = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [hasShown, setHasShown] = useState(false);

  useEffect(() => {
    const handleMouseLeave = (e) => {
      if (e.clientY <= 0 && !hasShown) {
        setIsVisible(true);
        setHasShown(true);
      }
    };

    document.addEventListener('mouseleave', handleMouseLeave);
    return () => document.removeEventListener('mouseleave', handleMouseLeave);
  }, [hasShown]);

  return (
    <AnimatePresence>
      {isVisible && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsVisible(false)}
            className="absolute inset-0 bg-slate-950/80 backdrop-blur-sm"
          />

          {/* Modal */}
          <motion.div
            initial={{ scale: 0.9, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 20 }}
            className="relative w-full max-w-lg bg-slate-900 border border-cyan-500/30 rounded-2xl shadow-2xl shadow-cyan-500/20 overflow-hidden"
          >
            <button 
              onClick={() => setIsVisible(false)}
              className="absolute top-4 right-4 text-slate-400 hover:text-white transition-colors z-10"
            >
              <X className="w-6 h-6" />
            </button>

            <div className="flex flex-col md:flex-row">
              {/* Left Side (Visual) */}
              <div className="hidden md:flex w-1/3 bg-gradient-to-br from-cyan-600 to-blue-700 items-center justify-center p-6">
                <Gift className="w-16 h-16 text-white animate-bounce" />
              </div>

              {/* Right Side (Content) */}
              <div className="p-8 md:w-2/3">
                <h3 className="text-2xl font-bold text-white mb-2">Wait! Don't Miss Out</h3>
                <p className="text-slate-400 text-sm mb-6">
                  Get a <span className="text-cyan-400 font-bold">Free Architecture Audit</span> worth $500. Limited time offer for new clients.
                </p>

                <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                  <div>
                    <input 
                      type="email" 
                      placeholder="Enter your email" 
                      className="w-full px-4 py-3 bg-slate-950 border border-slate-800 rounded-lg text-white focus:outline-none focus:border-cyan-500 transition-colors"
                    />
                  </div>
                  <button className="w-full py-3 bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold rounded-lg transition-colors flex items-center justify-center gap-2">
                    Claim Free Audit <ArrowRight className="w-4 h-4" />
                  </button>
                  <p className="text-xs text-center text-slate-500">
                    No spam. Unsubscribe anytime.
                  </p>
                </form>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default ExitIntentModal;
