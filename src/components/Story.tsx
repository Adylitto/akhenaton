import React from 'react';
import { motion } from 'framer-motion';

const Story: React.FC = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      id="story"
      className="container mx-auto py-16"
    >
      <motion.h2
        initial={{ y: 50 }}
        whileInView={{ y: 0 }}
        transition={{ type: 'spring', stiffness: 100 }}
        viewport={{ once: true }}
        className="text-4xl font-bold mb-8 text-center"
      >
        The Akhenaton Story
      </motion.h2>
      <motion.div
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2 }}
        viewport={{ once: true }}
        className="bg-white p-8 rounded-lg shadow-lg"
      >
        <p className="text-lg mb-4">
          Legend has it that Akhenaton, the ancient Egyptian Pharaoh, was not just a revolutionary monotheist, but also a time-traveling crypto enthusiast! One day, while meditating in his solar temple, he was suddenly transported to the year 2023.
        </p>
        <p className="text-lg mb-4">
          Confused but curious, Akhenaton stumbled upon a crypto conference. As he listened to talks about decentralization and digital assets, he had an epiphany: "This is the future of currency!"
        </p>
        <p className="text-lg">
          Before being whisked back to ancient Egypt, Akhenaton vowed to create a coin that would transcend time. And thus, Akhenaton Coin was born – a memecoin that bridges the ancient wisdom of Egypt with the wild world of crypto!
        </p>
      </motion.div>
    </motion.section>
  );
};

export default Story;