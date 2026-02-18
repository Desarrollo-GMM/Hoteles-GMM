'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';

const ShinyButton = () => {
  const [hovered, setHovered] = useState(false);

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-900">
      <motion.button
        className="relative px-8 py-4 text-lg font-bold text-white uppercase rounded-full bg-gradient-to-r from-pink-500 to-purple-600 overflow-hidden shadow-lg"
        initial={{ scale: 0, rotate: -10 }}
        animate={{ scale: 1, rotate: 0 }}
        transition={{
          type: 'spring',
          stiffness: 260,
          damping: 20,
          delay: 0.2,
        }}
        whileHover={{
          scale: 1.1,
          boxShadow: '0px 0px 20px rgba(255, 255, 255, 0.8)',
          transition: { type: 'spring', stiffness: 400, damping: 10 },
        }}
        whileTap={{ scale: 0.95 }}
        onHoverStart={() => setHovered(true)}
        onHoverEnd={() => setHovered(false)}
      >
        {/* Texto del botón */}
        <span className="relative z-10">¡Haz clic!</span>

        {/* Brillo deslizante (shimmer) */}
        <motion.div
          className="absolute inset-0 z-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-30"
          initial={{ x: '-100%' }}
          animate={hovered ? { x: '100%' } : { x: '-100%' }}
          transition={{ duration: 1, ease: 'easeInOut' }}
        />

        {/* Partículas decorativas (opcional) */}
        {hovered && (
          <>
            <motion.span
              className="absolute w-2 h-2 bg-white rounded-full top-1 left-4"
              initial={{ scale: 0 }}
              animate={{ scale: [0, 1, 0], y: -20, x: 10 }}
              transition={{ duration: 1, repeat: Infinity, delay: 0.2 }}
            />
            <motion.span
              className="absolute w-1 h-1 bg-yellow-300 rounded-full bottom-2 right-6"
              initial={{ scale: 0 }}
              animate={{ scale: [0, 1, 0], y: -10, x: -5 }}
              transition={{ duration: 0.8, repeat: Infinity, delay: 0.5 }}
            />
          </>
        )}
      </motion.button>
    </div>
  );
};

export default ShinyButton;