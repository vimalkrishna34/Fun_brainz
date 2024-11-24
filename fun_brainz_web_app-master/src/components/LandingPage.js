// src/components/LandingPage.js
import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom'; // Import useNavigate for navigation
import { FaBook, FaPuzzlePiece, FaLightbulb } from 'react-icons/fa';
import './LandingPage.css'; // Import styles

const LandingPage = () => {
  const navigate = useNavigate(); // Use navigate for routing

  return (
    <div className="landing-page">
      {/* Hero Section */}
      <motion.div
        className="hero"
        initial={{ opacity: 0, y: -100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h1 className="hero-title">
          Welcome to <span className="brand-name">FunBrainz</span>
        </h1>
        <p className="hero-subtitle">
          Play, Learn, and Master Math & Science with fun games and quizzes!
        </p>
        <motion.img
          src="/images/kids_image.jpg"
          alt="Kids Learning"
          className="hero-image"
          initial={{ scale: 0.3 }}
          animate={{ scale: 1 }}
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.5 }}
        />
        <motion.button
          className="cta-button"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => navigate('/learning')} // Navigate to Learning Page on click
        >
          Start Learning Now!
        </motion.button>
      </motion.div>

      {/* Features Section */}
      <motion.div
        className="features"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
      >
        <h2 className="section-title">Why You'll Love FunBrainz!</h2>
        <div className="feature-cards">
          <motion.div
            className="feature-card"
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.5 }}
          >
            <FaBook className="feature-icon" />
            <h3>Interactive Lessons</h3>
            <p>Engage in math and science challenges through interactive games!</p>
          </motion.div>
          <motion.div
            className="feature-card"
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.5 }}
          >
            <FaPuzzlePiece className="feature-icon" />
            <h3>Fun Quizzes</h3>
            <p>Test your knowledge and win badges and rewards.</p>
          </motion.div>
          <motion.div
            className="feature-card"
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.5 }}
          >
            <FaLightbulb className="feature-icon" />
            <h3>Learning Adventures</h3>
            <p>Embark on exciting journeys to explore math and science concepts.</p>
          </motion.div>
        </div>
      </motion.div>

      {/* Quote Section */}
      <motion.div
        className="quote-section"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2, duration: 1 }}
      >
        <blockquote>
          <p>"Education is not the filling of a pail, but the lighting of a fire!"</p>
          <footer>– William Butler Yeats</footer>
        </blockquote>
      </motion.div>

      {/* Footer */}
      <motion.footer
        className="footer"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 3, duration: 1 }}
      >
        <p>&copy; 2024 FunBrainz. All Rights Reserved.</p>
        <div className="social-icons">
          <a href="#" aria-label="Facebook">
            <img src="/images/facebook-icon.png" alt="Facebook" />
          </a>
          <a href="#" aria-label="Instagram">
            <img src="/images/instagram-icon.png" alt="Instagram" />
          </a>
          <a href="#" aria-label="Twitter">
            <img src="/images/twitter-icon.png" alt="Twitter" />
          </a>
        </div>
      </motion.footer>
    </div>
  );
};

export default LandingPage;
