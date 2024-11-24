// src/components/ScrollToTopButton.js
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import './ScrollToTopButton.css'; // Import the CSS for styling

const ScrollToTopButton = () => {
  const [visible, setVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.scrollY > 200) { // Adjust scroll position to your needs
      setVisible(true);
    } else {
      setVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  return (
    <motion.div
      className={`scroll-to-top ${visible ? 'visible' : ''}`}
      onClick={scrollToTop}
      aria-label="Scroll to Top"
      initial={{ opacity: 0 }}
      animate={{ opacity: visible ? 1 : 0 }}
      transition={{ duration: 0.3 }}
    >
      <img src="/images/tortoise-icon.png" alt="Scroll to Top" />
    </motion.div>
  );
};

export default ScrollToTopButton;
