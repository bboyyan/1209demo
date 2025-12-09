import React from 'react';
import { motion } from 'framer-motion';

const CTASection = () => {
  return (
    <motion.div
      className="relative rounded-[30px] overflow-hidden bg-neutral-900 text-white min-h-[400px] flex flex-col md:flex-row"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8 }}
    >
      {/* Left Side Image */}
      <motion.div
        className="w-full md:w-1/2 relative h-64 md:h-auto"
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <motion.img
          src="https://images.unsplash.com/photo-1540555700478-4be289fbecef?q=80&w=2070&auto=format&fit=crop"
          alt="Spa Atmosphere"
          className="absolute inset-0 w-full h-full object-cover opacity-60"
          initial={{ scale: 1.1 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2 }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-neutral-900 to-transparent"></div>
      </motion.div>

      {/* Right Side Content */}
      <motion.div
        className="w-full md:w-1/2 p-10 md:p-16 flex flex-col justify-center items-start relative z-10 bg-neutral-900 md:bg-transparent"
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.3 }}
      >
        <motion.span
          className="text-rose-400 text-xs font-bold tracking-[0.3em] uppercase mb-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          Book Appointment
        </motion.span>

        <motion.h3
          className="text-3xl md:text-5xl font-['Playfair_Display'] italic mb-6 leading-tight"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          Ready to start your <br/> transformation?
        </motion.h3>

        <motion.p
          className="text-neutral-400 max-w-md mb-10 font-['Cormorant_Garamond'] text-lg"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          給自己一個下午的時間，享受一場身心靈的極致寵愛。名額有限，建議提前一週預約。
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row gap-4 w-full"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.7 }}
        >
          <motion.button
            className="bg-white text-neutral-900 px-8 py-4 rounded-full font-bold tracking-widest uppercase hover:bg-rose-200 transition-colors text-center flex-1"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            Book Now
          </motion.button>
          <motion.button
            className="border border-white/20 text-white px-8 py-4 rounded-full font-bold tracking-widest uppercase hover:bg-white/10 transition-colors text-center flex-1"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            Contact Us
          </motion.button>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default CTASection;
