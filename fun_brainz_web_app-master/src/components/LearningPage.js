import React from 'react';
import { useNavigate } from 'react-router-dom';  // Import useNavigate for navigation
import { motion } from 'framer-motion';
import './LearningPage.css';

const LearningPage = () => {
  const navigate = useNavigate();  // Initialize the navigation hook

  return (
    <div className="learning-page">
      <h2>Pick a Learning Path!</h2>
      <div className="learning-cards">
        {/* Quizzes Card */}
        <motion.div 
          className="learning-card" 
          whileHover={{ scale: 1.05 }} 
          transition={{ duration: 0.3 }}
        >
          <img src="/images/quiz-image.jpeg" alt="Quizzes" className="card-image" />
          <h3>Quizzes</h3>
          <p>Test your knowledge with fun and challenging quizzes!</p>
          <button 
            className="start-button" 
            onClick={() => navigate('/quizzes')}  // Navigate to QuizzesPage
          >
            Start Quiz
          </button>
        </motion.div>

        {/* Games Card */}
        <motion.div 
          className="learning-card" 
          whileHover={{ scale: 1.05 }} 
          transition={{ duration: 0.3 }}
          onClick={() => navigate('/game-select')}
        >
          <img src="/images/game-image.jpeg" alt="Games" className="card-image" />
          <h3>Games</h3>
          <p>Play games and master math & science concepts!</p>
          <button 
            className="start-button" 
            onClick={() => navigate('/games')}  // Navigate to GamesPage
          >
            Start Game
          </button>
        </motion.div>

        {/* Video Tutorials Card */}
        <motion.div 
          className="learning-card" 
          whileHover={{ scale: 1.05 }} 
          transition={{ duration: 0.3 }}

        >
          <img src="/images/video-image.jpeg" alt="Videos" className="card-image" />
          <h3>Video Tutorials</h3>
          <p>Watch video tutorials to deepen your understanding.</p>
          <button 
            className="start-button" 
            onClick={() => navigate('/videos')}  // Navigate to VideosPage
          >
            Start Video
          </button>
        </motion.div>
      </div>
    </div>
  );
};

export default LearningPage;
