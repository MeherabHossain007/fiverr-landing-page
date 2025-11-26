import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, HelpCircle } from 'lucide-react';

const FAQ = () => {
  const faqs = [
    {
      question: "How fast can you fix our bugs?",
      answer: "For critical issues, our rapid response team can deploy fixes within 1-2 hours. For larger maintenance tasks, we provide a clear timeline before starting."
    },
    {
      question: "What access do you need?",
      answer: "We typically require access to your version control (GitHub/GitLab) and hosting environment. We can sign NDAs before access is granted."
    },
    {
      question: "Do you handle full-stack development?",
      answer: "Yes, we have a dedicated team for both frontend (React, Next.js) and backend (Node.js, Databases) development. We can handle end-to-end project delivery."
    },
    {
      question: "How do your retainer plans work?",
      answer: "Our monthly retainers include a set number of development hours, priority support, and weekly health checks. Unused hours can roll over to the next month."
    },
    {
      question: "Is our code secure with you?",
      answer: "Security is our top priority. We follow ISO-compliant security protocols, use encrypted communication, and strictly adhere to NDA terms."
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
