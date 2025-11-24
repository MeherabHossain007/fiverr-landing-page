import React from 'react';
import { motion } from 'framer-motion';
import { Star, Quote, Award, Users, ShieldCheck } from 'lucide-react';

const SocialProof = () => {
  const reviews = [
    {
      name: "alex_dev",
      role: "Frontend Developer",
      text: "Fixed my Next.js hydration error in less than an hour. The code was clean and he explained exactly what went wrong. Highly recommended!",
      rating: 5
    },
    {
      name: "sarah_studio",
      role: "Agency Owner",
      text: "I was stuck with a responsive layout issue for days. He solved it instantly and even optimized the CSS. Will definitely hire again.",
      rating: 5
    },
    {
      name: "tech_startup",
      role: "CTO",
      text: "Professional, fast, and knows React inside out. Helped us debug a complex state management bug before our launch.",
      rating: 5
    }
  ];

  return (
    <section className="py-20 bg-slate-900 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5" style={{ backgroundImage: 'radial-gradient(#22d3ee 1px, transparent 1px)', backgroundSize: '30px 30px' }}></div>

      <div className="container mx-auto px-4 relative z-10">
        
        {/* Trust Badges */}
        <div className="flex flex-wrap justify-center gap-8 md:gap-16 mb-20 border-b border-slate-800 pb-12">
          <div className="flex items-center gap-3 text-slate-400">
            <Award className="w-8 h-8 text-yellow-400" />
            <span className="font-semibold text-lg">Top Rated on Fiverr</span>
          </div>
          <div className="flex items-center gap-3 text-slate-400">
            <Users className="w-8 h-8 text-cyan-400" />
            <span className="font-semibold text-lg">100+ Successful Fixes</span>
          </div>
          <div className="flex items-center gap-3 text-slate-400">
            <ShieldCheck className="w-8 h-8 text-green-400" />
            <span className="font-semibold text-lg">Trusted by Devs</span>
          </div>
        </div>

        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Trusted by <span className="text-cyan-400">Developers Worldwide</span>
          </h2>
          <div className="flex justify-center items-center gap-2 text-yellow-400 text-xl font-bold">
            <Star className="fill-current" />
            <Star className="fill-current" />
            <Star className="fill-current" />
            <Star className="fill-current" />
            <Star className="fill-current" />
            <span className="text-white ml-2 text-lg font-normal">(5.0 Average Rating)</span>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-slate-800 p-8 rounded-2xl relative"
            >
              <Quote className="absolute top-6 right-6 w-8 h-8 text-slate-700" />
              
              <div className="flex gap-1 text-yellow-400 mb-4">
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-current" />
                ))}
              </div>
              
              <p className="text-slate-300 mb-6 italic leading-relaxed">
                "{review.text}"
              </p>
              
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center text-white font-bold text-sm">
                  {review.name[0].toUpperCase()}
                </div>
                <div>
                  <div className="text-white font-semibold">{review.name}</div>
                  <div className="text-slate-500 text-xs">{review.role}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SocialProof;
