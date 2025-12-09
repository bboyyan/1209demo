import React from 'react';
import { motion } from 'framer-motion';
import { Droplets } from 'lucide-react';

const SignatureTreatment = () => {
  const benefits = [
    '疏通乳腺堆積',
    '改善副乳問題',
    '提升胸型輪廓',
    '產後恢復彈性'
  ];

  return (
    <motion.div
      className="flex flex-col-reverse lg:flex-row items-center gap-12 md:gap-24 mb-32"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8 }}
    >
      {/* Text Section */}
      <motion.div
        className="w-full lg:w-1/2"
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <motion.span
          className="text-rose-400 font-bold tracking-[0.2em] text-xs uppercase mb-4 block"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          Signature Treatment
        </motion.span>

        <motion.h2
          className="text-4xl md:text-5xl font-['Playfair_Display'] text-neutral-900 mb-6 leading-tight"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          Deep Tissue <br />
          <span className="italic text-neutral-400">& Meridian Massage</span>
        </motion.h2>

        <motion.p
          className="text-neutral-500 text-lg leading-loose font-light mb-8 font-['Cormorant_Garamond']"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          這不只是一次按摩，而是一場深度的排毒旅程。針對腋下淋巴、乳腺與胸大肌進行深層疏通，有效改善氣血循環，提升胸部彈性與緊實度。
        </motion.p>

        <motion.ul
          className="space-y-4 mb-8"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          {benefits.map((benefit, idx) => (
            <motion.li
              key={idx}
              className="flex items-center gap-3 text-neutral-600 font-['Cormorant_Garamond'] text-lg"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.7 + idx * 0.1 }}
              whileHover={{ x: 5 }}
            >
              <div className="w-1.5 h-1.5 rounded-full bg-rose-400"></div>
              {benefit}
            </motion.li>
          ))}
        </motion.ul>

        <motion.button
          className="px-8 py-3 border border-neutral-900 rounded-full hover:bg-neutral-900 hover:text-white transition-all text-sm tracking-widest uppercase"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.9 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          View Treatment Menu
        </motion.button>
      </motion.div>

      {/* Image Section */}
      <motion.div
        className="w-full lg:w-1/2 relative"
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.3 }}
      >
        <div className="relative h-[400px] md:h-[550px] w-full rounded-full overflow-hidden border-[1px] border-neutral-200 p-4">
          <motion.div
            className="w-full h-full rounded-full overflow-hidden shadow-2xl relative"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            <motion.img
              src="https://images.unsplash.com/photo-1544161515-4ab6ce6db874?q=80&w=2070&auto=format&fit=crop"
              alt="Massage Treatment"
              className="w-full h-full object-cover hover:scale-110 transition-transform duration-1000"
              whileHover={{ scale: 1.1 }}
            />
            <div className="absolute inset-0 bg-neutral-900/10"></div>
          </motion.div>
        </div>

        {/* Floating Tag */}
        <motion.div
          className="absolute top-10 left-0 bg-white/90 backdrop-blur py-3 px-6 rounded-full shadow-lg flex items-center gap-2"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          animate={{
            y: [0, -5, 0],
          }}
          transition={{
            opacity: { duration: 0.6, delay: 0.8 },
            y: {
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut"
            }
          }}
        >
          <Droplets size={16} className="text-rose-400" />
          <span className="text-xs font-bold tracking-widest uppercase">Essential Oil</span>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default SignatureTreatment;
