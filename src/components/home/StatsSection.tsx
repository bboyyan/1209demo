import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const StatsSection = () => {
  const [counts, setCounts] = useState({ clients: 0, satisfaction: 0, experience: 0 });

  const stats = [
    {
      num: "1500+",
      title: "Happy Clients",
      desc: "累積超過千位女性的見證，找回自信光采。",
      target: 1500,
      key: 'clients' as const
    },
    {
      num: "98%",
      title: "Satisfaction",
      desc: "幾近完美的滿意度，來自對細節的極致苛求。",
      target: 98,
      key: 'satisfaction' as const
    },
    {
      num: "12",
      title: "Years Experience",
      desc: "十年磨一劍，獨家研發的深層美胸手技。",
      target: 12,
      key: 'experience' as const
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCounts(prev => {
        const newCounts = { ...prev };
        let allComplete = true;

        stats.forEach(stat => {
          if (newCounts[stat.key] < stat.target) {
            newCounts[stat.key] += Math.ceil(stat.target / 50);
            if (newCounts[stat.key] > stat.target) {
              newCounts[stat.key] = stat.target;
            }
            allComplete = false;
          }
        });

        if (allComplete) {
          clearInterval(interval);
        }

        return newCounts;
      });
    }, 50);

    return () => clearInterval(interval);
  }, []);

  return (
    <motion.div
      className="mb-20 border-t border-neutral-200 pt-20"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8 }}
    >
      <motion.div
        className="flex flex-col md:flex-row justify-between items-end mb-12 gap-4"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <div>
          <motion.span
            className="text-rose-400 text-xs font-bold tracking-[0.3em] uppercase mb-2 block"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            Our Impact
          </motion.span>
          <motion.h3
            className="text-4xl font-['Playfair_Display'] text-neutral-800"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Results that Speak
          </motion.h3>
        </div>
        <motion.div
          className="hidden md:block"
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <motion.button
            className="border border-neutral-300 rounded-full px-8 py-3 text-xs tracking-widest uppercase hover:bg-neutral-900 hover:text-white transition-all"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            View All Reviews
          </motion.button>
        </motion.div>
      </motion.div>

      <motion.div
        className="grid grid-cols-1 md:grid-cols-3 gap-0 border-t border-l-0 md:border-l border-neutral-200"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.6 }}
      >
        {stats.map((stat, index) => (
          <motion.div
            key={index}
            className="border-r-0 md:border-r border-b border-neutral-200 p-8 md:p-10 hover:bg-white transition-colors group cursor-pointer"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.7 + index * 0.1 }}
            whileHover={{ y: -5 }}
          >
            <motion.h4
              className="text-5xl md:text-6xl font-['Cormorant_Garamond'] text-neutral-300 group-hover:text-rose-400 transition-colors mb-4"
              animate={{ opacity: [0.7, 1, 0.7] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              {stat.key === 'clients' ? `${counts.clients}+` :
               stat.key === 'satisfaction' ? `${counts.satisfaction}%` :
               counts.experience}
            </motion.h4>
            <p className="text-neutral-900 font-bold tracking-widest uppercase text-xs mb-2">{stat.title}</p>
            <p className="text-neutral-500 text-xs font-light leading-relaxed">{stat.desc}</p>
          </motion.div>
        ))}
      </motion.div>

      {/* Mobile Only Button */}
      <motion.div
        className="mt-8 md:hidden text-center"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 1.0 }}
      >
        <motion.button
          className="border border-neutral-300 rounded-full px-8 py-3 text-xs tracking-widest uppercase hover:bg-neutral-900 hover:text-white transition-all w-full"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          View All Reviews
        </motion.button>
      </motion.div>
    </motion.div>
  );
};

export default StatsSection;
