import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Heart } from 'lucide-react';

const PhilosophySection = () => {
  return (
    <motion.div
      className="flex flex-col lg:flex-row items-center gap-12 md:gap-20 mb-32"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8 }}
    >
      {/* Image Section */}
      <motion.div
        className="w-full lg:w-1/2 -mt-10 md:-mt-48 relative"
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <div className="relative h-[500px] md:h-[600px] w-full rounded-t-[200px] rounded-b-[20px] overflow-hidden shadow-2xl">
          <motion.img
            src="https://images.unsplash.com/photo-1519823551278-64ac92734fb1?q=80&w=2149&auto=format&fit=crop"
            alt="Elegant Woman"
            className="w-full h-full object-cover hover:scale-105 transition-transform duration-1000"
            whileHover={{ scale: 1.05 }}
          />
        </div>
        <motion.div
          className="hidden md:block absolute -bottom-10 -right-10 w-40 h-40 rounded-full border-8 border-[#FAFAFA] overflow-hidden shadow-xl"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          animate={{ rotate: 360 }}
          transition={{
            opacity: { duration: 0.6, delay: 0.5 },
            scale: { duration: 0.6, delay: 0.5 },
            rotate: { duration: 20, repeat: Infinity, ease: "linear" }
          }}
        >
          <img
            src="https://images.unsplash.com/photo-1605265058693-855115206973?q=80&w=2070&auto=format&fit=crop"
            alt="Oil"
            className="w-full h-full object-cover"
          />
        </motion.div>
      </motion.div>

      {/* Text Section */}
      <motion.div
        className="w-full lg:w-1/2 pt-0 md:pt-10"
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.3 }}
      >
        <motion.span
          className="text-rose-400 font-bold tracking-[0.2em] text-xs uppercase mb-4 block"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          Our Philosophy
        </motion.span>

        <motion.h2
          className="text-4xl md:text-5xl font-['Playfair_Display'] text-neutral-900 mb-8 leading-tight"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          The Art of <br />
          <span className="italic text-rose-400">Sculpting Curves</span>
        </motion.h2>

        <motion.p
          className="text-neutral-500 text-lg leading-loose font-light mb-8 font-['Cormorant_Garamond']"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          我們相信，美是一種流動的能量。LUMIÈRE 結合傳統中醫經絡智慧與現代解剖學，獨創「深層律動手技」。
        </motion.p>

        <motion.div
          className="grid grid-cols-2 gap-6 mb-10"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.7 }}
        >
          <motion.div
            className="flex items-center gap-2 mb-2"
            whileHover={{ scale: 1.05 }}
          >
            <Sparkles size={16} className="text-rose-400" />
            <h4 className="font-bold text-sm uppercase">Natural Oil</h4>
          </motion.div>
          <motion.div
            className="flex items-center gap-2 mb-2"
            whileHover={{ scale: 1.05 }}
          >
            <Heart size={16} className="text-rose-400" />
            <h4 className="font-bold text-sm uppercase">Private Room</h4>
          </motion.div>
          <p className="text-neutral-400 text-sm col-span-2">歐盟認證有機精油 • 全獨立包廂隱私</p>
        </motion.div>

        <motion.button
          className="group flex items-center gap-4 text-neutral-900 text-sm font-bold tracking-[0.2em] uppercase hover:text-rose-500 transition-colors"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.8 }}
          whileHover={{ x: 10 }}
        >
          Discover Our Story
          <div className="w-12 h-[1px] bg-neutral-300 group-hover:bg-rose-500 transition-colors"></div>
        </motion.button>
      </motion.div>
    </motion.div>
  );
};

export default PhilosophySection;
