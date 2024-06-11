import React from 'react';
import { motion } from 'framer-motion';

const Loader = () => {
  return (
    <div className="flex flex-col justify-center items-center h-64">
      <motion.div
        className="w-12 h-12 rounded-full bg-purple-500"
        animate={{
          scale: [1, 1.5, 1],
          opacity: [1, 0.5, 1],
        }}
        transition={{
          duration: 1.5,
          ease: "easeInOut",
          repeat: Infinity,
        }}
      />
      <p className="mt-4 text-purple-500">Loading data...</p>
    </div>
  );
};

export default Loader;
