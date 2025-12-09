import React from 'react';
import { motion } from 'framer-motion';
import { Calendar } from 'lucide-react';

const MobileStickyBar = () => {
  return (
    <motion.div
      className="md:hidden fixed bottom-6 left-6 right-6 z-50"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 1 }}
    >
      <motion.button
        className="w-full bg-rose-500 text-white py-4 rounded-full shadow-xl font-bold tracking-widest uppercase text-sm flex items-center justify-center gap-2"
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        animate={{
          boxShadow: [
            "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
            "0 25px 50px -12px rgba(244, 63, 94, 0.25)",
            "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
          ]
        }}
        transition={{
          boxShadow: {
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }
        }}
      >
        <motion.div
          animate={{ rotate: [0, 10, -10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <Calendar size={18} />
        </motion.div>
        Book Appointment
      </motion.button>
    </motion.div>
  );
};

export default MobileStickyBar;
