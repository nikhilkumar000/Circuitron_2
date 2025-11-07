import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const FloatingRegisterButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show button after scrolling down 300px
      setIsVisible(window.scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleRegisterClick = () => {
    window.open('https://forms.gle/mmUiZV4xpYRamn5r8', '_blank', 'noopener,noreferrer');
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, scale: 0, x: 100 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          exit={{ opacity: 0, scale: 0, x: 100 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          className="fixed bottom-8 right-8 z-50"
        >
          <motion.button
            onClick={handleRegisterClick}
            whileHover={{ 
              scale: 1.1, 
              boxShadow: "0 0 30px rgba(0, 191, 255, 0.5)",
              y: -2
            }}
            whileTap={{ scale: 0.95 }}
            className="relative group"
          >
            {/* Main button */}
            <div className="bg-gradient-to-r from-primary to-accent text-white font-bold py-4 px-6 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center space-x-2">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.293l-3-3a1 1 0 00-1.414 1.414L10.586 9H7a1 1 0 100 2h3.586l-1.293 1.293a1 1 0 101.414 1.414l3-3a1 1 0 000-1.414z" clipRule="evenodd" />
              </svg>
              <span>Register Now</span>
            </div>

            {/* Pulse effect */}
            <motion.div
              animate={{ scale: [1, 1.2, 1], opacity: [0.7, 0, 0.7] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="absolute inset-0 bg-gradient-to-r from-primary to-accent rounded-full"
            />

            {/* Tooltip */}
            <div className="absolute right-full mr-4 top-1/2 transform -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
              <div className="bg-secondary text-white text-sm px-3 py-2 rounded-lg shadow-lg whitespace-nowrap border border-primary/20">
                Click to register for TechXpo 2025
                <div className="absolute left-full top-1/2 transform -translate-y-1/2 w-0 h-0 border-l-4 border-l-secondary border-t-4 border-t-transparent border-b-4 border-b-transparent"></div>
              </div>
            </div>
          </motion.button>

          {/* Close button */}
          <motion.button
            onClick={() => setIsVisible(false)}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="absolute -top-2 -right-2 w-6 h-6 bg-gray-600 hover:bg-gray-500 text-white rounded-full flex items-center justify-center text-xs font-bold transition-colors duration-200"
          >
            ×
          </motion.button>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default FloatingRegisterButton;
