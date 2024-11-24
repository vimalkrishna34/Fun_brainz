import React from 'react';
import { motion } from 'framer-motion';
import './VideosPage.css';

const VideosPage = () => {
  return (
    <div className="videos-page">
      <h2>Choose Your Video</h2>
      <div className="videos-cards">
        {/* Math Videos Card */}
        <motion.div 
          className="videos-card" 
          whileHover={{ scale: 1.05 }} 
          transition={{ duration: 0.3 }}
        >
          <img src="/images/math-video.jpeg" alt="Math Videos" className="card-image" />
          <h3>Math Videos</h3>
          <p>Watch videos to improve your math skills!</p>
          <button className="choose-button">Choose Video</button>
        </motion.div>

        {/* Science Videos Card */}
        <motion.div 
          className="videos-card" 
          whileHover={{ scale: 1.05 }} 
          transition={{ duration: 0.3 }}
        >
          <img src="/images/science-video.jpeg" alt="Science Videos" className="card-image" />
          <h3>Science Videos</h3>
          <p>Explore science concepts with engaging videos!</p>
          <button className="choose-button">Choose Video</button>
        </motion.div>

        {/* Geography Videos Card */}
        <motion.div 
          className="videos-card" 
          whileHover={{ scale: 1.05 }} 
          transition={{ duration: 0.3 }}
        >
          <img src="/images/geography-video.jpeg" alt="Geography Videos" className="card-image" />
          <h3>Geography Videos</h3>
          <p>Learn about geography through interesting videos!</p>
          <button className="choose-button">Choose Video</button>
        </motion.div>
      </div>
    </div>
  );
};

export default VideosPage;
