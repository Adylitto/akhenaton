import React from 'react';
import { motion } from 'framer-motion';

const HowToBuy: React.FC = () => {
  const steps = [
    "Set up a Solana wallet (like Phantom or Solflare).",
    "Purchase SOL from an exchange and transfer it to your wallet.",
    "Visit Raydium.",
    "Connect your Solana wallet to Raydium.",
    "Select SOL as the \"From\" currency and Akhenaton Coin as the \"To\" currency.",
    "Enter the amount of SOL you want to swap.",
    "Review the transaction details and confirm the swap.",
    "Congratulations! You now own Akhenaton Coins!"
  ];

  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      id="how-to-buy"
      className="container mx-auto py-16"
    >
      <motion.h2
        initial={{ y: 50 }}
        whileInView={{ y: 0 }}
        transition={{ type: 'spring', stiffness: 100 }}
        viewport={{ once: true }}
        className="text-4xl font-bold mb-8 text-center"
      >
        How to Buy Akhenaton Coin
      </motion.h2>
      <motion.div
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2 }}
        viewport={{ once: true }}
        className="bg-white p-8 rounded-lg shadow-lg"
      >
        <ol className="list-decimal list-inside space-y-4">
          {steps.map((step, index) => (
            <motion.li
              key={index}
              initial={{ x: -50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              {step}
            </motion.li>
          ))}
        </ol>
      </motion.div>
    </motion.section>
  );
};

export default HowToBuy;