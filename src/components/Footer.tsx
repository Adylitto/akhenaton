import React from 'react';
import { MessageCircle, Twitter } from 'lucide-react';
import { motion } from 'framer-motion';

const Footer: React.FC = () => {
  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="bg-yellow-600 text-white py-8"
    >
      <div className="container mx-auto text-center">
        <div className="flex justify-center space-x-6 mb-4">
          <motion.a
            whileHover={{ scale: 1.2, rotate: 15 }}
            href="https://t.me/AkhenatonCoin"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-yellow-200"
          >
            <MessageCircle className="w-8 h-8" />
          </motion.a>
          <motion.a
            whileHover={{ scale: 1.2, rotate: -15 }}
            href="https://twitter.com/AkhenatonCoin"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-yellow-200"
          >
            <Twitter className="w-8 h-8" />
          </motion.a>
        </div>
        <motion.p
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          viewport={{ once: true }}
        >
          &copy; 2023 Akhenaton Coin. All rights reserved.
        </motion.p>
        <motion.p
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-2 text-sm"
        >
          Disclaimer: This is a meme coin. Invest at your own risk and always do your own research.
        </motion.p>
      </div>
    </motion.footer>
  );
};

export default Footer;