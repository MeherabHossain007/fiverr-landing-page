import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, HelpCircle } from 'lucide-react';

const FAQ = () => {
  const faqs = [
    {
      question: "How fast can you fix my bug?",
      answer: "For most standard bugs, I deliver within 1-2 hours. Complex issues might take a bit longer, but I always prioritize speed without compromising quality."
    },
    {
      question: "What access do you need?",
      answer: "Usually, I need access to your GitHub repository or a zip file of your code. If it's a live site issue, I might need temporary access to your hosting or CMS."
    },
    {
      question: "Do you fix backend issues?",
      answer: "I specialize in frontend (React, Next.js, JS, CSS), but I can handle Next.js server actions and API integration issues. For deep backend logic (Node.js, DBs), please message me first."
    },
    {
      question: "Are revisions included?",
      answer: "Yes! I offer unlimited revisions for the Standard and Premium packages to ensure you are 100% satisfied with the fix."
    },
    {
      question: "Is the work secure?",
      answer: "Absolutely. I treat your code with strict confidentiality. I don't share your code with anyone, and I delete it from my local machine once the order is complete."
    }
  ];

  return (
    <section className="py-20 bg-slate-950">
      <div className="container mx-auto px-4 max-w-3xl">
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-slate-800 text-cyan-400 mb-4">
            <HelpCircle className="w-6 h-6" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Frequently Asked <span className="text-cyan-400">Questions</span>
          </h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <FAQItem key={index} faq={faq} />
          ))}
        </div>
      </div>
    </section>
  );
};

const FAQItem = ({ faq }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border border-slate-800 rounded-lg bg-slate-900/50 overflow-hidden">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between p-6 text-left hover:bg-slate-800/50 transition-colors"
      >
        <span className="font-semibold text-white text-lg">{faq.question}</span>
        <ChevronDown
          className={`w-5 h-5 text-slate-400 transition-transform duration-300 ${
            isOpen ? 'rotate-180' : ''
          }`}
        />
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="p-6 pt-0 text-slate-400 leading-relaxed border-t border-slate-800/50">
              {faq.answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default FAQ;
