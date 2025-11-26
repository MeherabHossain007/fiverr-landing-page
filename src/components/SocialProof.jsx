import React from 'react';
import { motion } from 'framer-motion';
import { Star, Quote, Building2, Users, ShieldCheck } from 'lucide-react';

const SocialProof = () => {
  const reviews = [
    {
      company: "TechFlow",
      role: "SaaS Enterprise",
      text: "FixFlow Agency completely transformed our infrastructure. Their maintenance plan has saved us countless hours of downtime and security headaches.",
      rating: 5
    },
    {
      company: "Creative Digital",
      role: "Marketing Agency",
      text: "We outsource all our complex backend integrations to them. They are essentially our extended engineering team. Reliable, fast, and professional.",
      rating: 5
    },
    {
      company: "NextGen",
      role: "Series A Startup",
      text: "The audit they performed uncovered critical vulnerabilities we missed. Their team fixed everything in 48 hours. Worth every penny.",
      rating: 5
    }
  ];

  return (
    <section className="py-24 bg-slate-900 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5" style={{ backgroundImage: 'radial-gradient(#22d3ee 1px, transparent 1px)', backgroundSize: '30px 30px' }}></div>

      <div className="container mx-auto px-4 relative z-10">
        
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Trusted by <span className="text-cyan-400">Industry Leaders</span>
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto font-light">
            We partner with ambitious companies to build scalable, secure, and high-performance digital products.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-slate-800/50 backdrop-blur-sm p-8 rounded-2xl border border-slate-700 relative hover:border-cyan-500/30 transition-colors"
            >
              <Quote className="absolute top-6 right-6 w-8 h-8 text-slate-700" />
              
              <div className="flex gap-1 text-yellow-400 mb-6">
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-current" />
                ))}
              </div>
              
              <p className="text-slate-300 mb-8 italic leading-relaxed font-light">
                "{review.text}"
              </p>
              
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center text-white font-bold text-sm shadow-lg">
                  {review.company[0]}
                </div>
                <div>
                  <div className="text-white font-bold">{review.company}</div>
                  <div className="text-slate-500 text-xs uppercase tracking-wider">{review.role}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Stats Row */}
        <div className="mt-20 pt-12 border-t border-slate-800 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
                <div className="text-3xl font-bold text-white mb-1">98%</div>
                <div className="text-slate-500 text-sm">Client Retention</div>
            </div>
            <div>
                <div className="text-3xl font-bold text-white mb-1">50+</div>
                <div className="text-slate-500 text-sm">Enterprise Projects</div>
            </div>
            <div>
                <div className="text-3xl font-bold text-white mb-1">24/7</div>
                <div className="text-slate-500 text-sm">Support Coverage</div>
            </div>
            <div>
                <div className="text-3xl font-bold text-white mb-1">ISO</div>
                <div className="text-slate-500 text-sm">Security Compliant</div>
            </div>
        </div>
      </div>
    </section>
  );
};

export default SocialProof;
