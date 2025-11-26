import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, X } from 'lucide-react';

const FloatingCTA = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 20, scale: 0.8 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 20, scale: 0.8 }}
          className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-4"
        >
          {/* Chat Bubble */}
          <div className="bg-white text-slate-900 px-4 py-3 rounded-xl rounded-br-none shadow-xl mb-2 max-w-[200px] text-sm font-medium relative animate-bounce">
            Hi! Need a quick quote? 👋
            <div className="absolute bottom-0 right-0 translate-y-full w-4 h-4 overflow-hidden">
              <div className="w-4 h-8 bg-white rounded-tl-xl"></div>
            </div>
          </div>

          {/* Button */}
          <a
            href="https://wa.me/1234567890" // Replace with actual WhatsApp/Contact link
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center justify-center w-14 h-14 bg-cyan-500 rounded-full shadow-lg shadow-cyan-500/30 hover:bg-cyan-400 transition-all hover:scale-110"
          >
            <MessageCircle className="w-7 h-7 text-white fill-current" />
          </a>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default FloatingCTA;
