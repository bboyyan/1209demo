import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = ['The Brand', 'Treatments', 'Membership', 'Contact'];

  return (
    <nav className="absolute top-0 left-0 w-full z-50 px-6 py-6 md:px-12 md:py-8">
      <div className="flex justify-between items-center">
        {/* Logo */}
        <motion.div
          className="text-2xl md:text-3xl font-['Playfair_Display'] font-bold text-white tracking-[0.15em] drop-shadow-sm z-50"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          LUMIÈRE <span className="text-rose-200 font-light italic">Spa</span>
        </motion.div>

        {/* Desktop Menu */}
        <motion.div
          className="hidden md:flex bg-white/5 backdrop-blur-md px-10 py-4 rounded-full border border-white/10 space-x-10 items-center hover:bg-white/10 transition-all duration-300"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {menuItems.map((item, index) => (
            <motion.a
              key={item}
              href="#"
              className="text-xs font-medium text-white/90 hover:text-white transition-colors tracking-[0.2em] uppercase font-sans"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {item}
            </motion.a>
          ))}
          <div className="w-px h-3 bg-white/20 mx-2"></div>
          <motion.button
            className="text-white/90 text-xs font-bold hover:text-white transition-colors tracking-widest uppercase"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Book Now
          </motion.button>
        </motion.div>

        {/* Mobile Menu Button */}
        <motion.button
          className="md:hidden text-white z-50 relative p-2 bg-white/10 backdrop-blur rounded-full"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          whileTap={{ scale: 0.95 }}
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={isMenuOpen ? 'close' : 'open'}
              initial={{ opacity: 0, rotate: -90 }}
              animate={{ opacity: 1, rotate: 0 }}
              exit={{ opacity: 0, rotate: 90 }}
              transition={{ duration: 0.2 }}
            >
              {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </motion.div>
          </AnimatePresence>
        </motion.button>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            className="fixed inset-0 bg-neutral-900/95 z-40 flex flex-col items-center justify-center space-y-8 md:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            {menuItems.map((item, index) => (
              <motion.a
                key={item}
                href="#"
                className="text-2xl font-['Playfair_Display'] text-white tracking-widest italic"
                onClick={() => setIsMenuOpen(false)}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {item}
              </motion.a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
