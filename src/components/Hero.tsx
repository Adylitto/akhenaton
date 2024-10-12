import React from 'react';
import { ExternalLink } from 'lucide-react';
import { motion } from 'framer-motion';

const Hero: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="container mx-auto py-16 text-center"
    >
      <motion.h1
        initial={{ scale: 0.5 }}
        animate={{ scale: 1 }}
        transition={{ type: 'spring', stiffness: 100, delay: 0.2 }}
        className="text-6xl font-bold mb-4"
      >
        Welcome to Akhenaton Coin
      </motion.h1>
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="text-2xl mb-8"
      >
        The memecoin that's as timeless as the pyramids!
      </motion.p>
      <motion.a
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        href="https://raydium.io/swap/"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-yellow-600 hover:bg-yellow-700 text-white font-bold py-3 px-6 rounded-full inline-flex items-center"
      >
        Buy on Raydium <ExternalLink className="ml-2" />
      </motion.a>
    </motion.div>
  );
};

export default Hero;