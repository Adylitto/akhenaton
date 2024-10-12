import React, { useState } from 'react';
import { Pyramid, Menu, X, MessageCircle, Twitter } from 'lucide-react';
import { motion } from 'framer-motion';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: 'spring', stiffness: 120, damping: 20 }}
      className="bg-yellow-500 p-4 sticky top-0 z-50"
    >
      <div className="container mx-auto flex justify-between items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
          className="flex items-center"
        >
          <Pyramid className="w-8 h-8 mr-2" />
          <span className="text-2xl font-bold">Akhenaton Coin</span>
        </motion.div>
        <div className="hidden md:flex items-center space-x-6">
          <nav>
            <ul className="flex space-x-4">
              <motion.li whileHover={{ scale: 1.1 }}>
                <a href="#story" className="hover:text-white">Story</a>
              </motion.li>
              <motion.li whileHover={{ scale: 1.1 }}>
                <a href="#how-to-buy" className="hover:text-white">How to Buy</a>
              </motion.li>
            </ul>
          </nav>
          <div className="flex space-x-4">
            <motion.a
              whileHover={{ scale: 1.2, rotate: 15 }}
              href="https://t.me/AkhenatonCoin"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white"
            >
              <MessageCircle className="w-6 h-6" />
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.2, rotate: -15 }}
              href="https://twitter.com/AkhenatonCoin"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white"
            >
              <Twitter className="w-6 h-6" />
            </motion.a>
          </div>
        </div>
        <motion.button
          whileTap={{ scale: 0.95 }}
          className="md:hidden"
          onClick={toggleMenu}
        >
          {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </motion.button>
      </div>
      <motion.div
        initial={{ height: 0, opacity: 0 }}
        animate={{ height: isMenuOpen ? 'auto' : 0, opacity: isMenuOpen ? 1 : 0 }}
        transition={{ duration: 0.3 }}
        className="md:hidden overflow-hidden"
      >
        <nav>
          <ul className="space-y-2 mt-4">
            <motion.li whileHover={{ scale: 1.05 }}>
              <a href="#story" className="block hover:text-white" onClick={toggleMenu}>Story</a>
            </motion.li>
            <motion.li whileHover={{ scale: 1.05 }}>
              <a href="#how-to-buy" className="block hover:text-white" onClick={toggleMenu}>How to Buy</a>
            </motion.li>
          </ul>
        </nav>
        <div className="flex space-x-4 mt-4">
          <motion.a
            whileHover={{ scale: 1.2, rotate: 15 }}
            href="https://t.me/AkhenatonCoin"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white"
          >
            <MessageCircle className="w-6 h-6" />
          </motion.a>
          <motion.a
            whileHover={{ scale: 1.2, rotate: -15 }}
            href="https://twitter.com/AkhenatonCoin"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white"
          >
            <Twitter className="w-6 h-6" />
          </motion.a>
        </div>
      </motion.div>
    </motion.header>
  );
};

export default Header;