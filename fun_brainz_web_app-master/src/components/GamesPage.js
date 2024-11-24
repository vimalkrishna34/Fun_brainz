import React from 'react';
import { motion } from 'framer-motion';
import './GamesPage.css';

const GamesPage = () => {
  return (
    <div className="games-page">
      <h2>Choose Your Game</h2>
      <div className="games-cards">
        {/* Math Games Card */}
        <motion.div 
          className="games-card" 
          whileHover={{ scale: 1.05 }} 
          transition={{ duration: 0.3 }}
          
        >
          <img src="/images/math-game.jpeg" alt="Math Games" className="card-image" />
          <h3>Math Games</h3>
          <p>Enhance your math skills through exciting games!</p>
          <button className="choose-button">Choose Game</button>
        </motion.div>

        {/* Science Games Card */}
        <motion.div 
          className="games-card" 
          whileHover={{ scale: 1.05 }} 
          transition={{ duration: 0.3 }}
          
        >
          <img src="/images/science-game.jpeg" alt="Science Games" className="card-image" />
          <h3>Science Games</h3>
          <p>Explore science concepts with interactive games!</p>
          <button className="choose-button">Choose Game</button>
        </motion.div>

        {/* Geography Games Card */}
        <motion.div 
          className="games-card" 
          whileHover={{ scale: 1.05 }} 
          transition={{ duration: 0.3 }}
        >
          <img src="/images/geography-game.jpeg" alt="Geography Games" className="card-image" />
          <h3>Geography Games</h3>
          <p>Learn about geography through fun games!</p>
          <button className="choose-button">Choose Game</button>
        </motion.div>
      </div>
    </div>
  );
};

export default GamesPage;
