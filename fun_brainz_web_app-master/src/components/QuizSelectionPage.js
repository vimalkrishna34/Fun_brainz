import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import './QuizSelectionPage.css';

const QuizSelectionPage = () => {
  const navigate = useNavigate();

  return (
    <div className="quiz-selection-page">
      <h2>Select Your Quiz</h2>
      <div className="quiz-cards">
        {/* Math Quiz Card */}
        <motion.div 
          className="quiz-card" 
          whileHover={{ scale: 1.05 }} 
          transition={{ duration: 0.3 }}
          onClick={() => navigate('/grade-selection')}  // Navigate to GradeSelectionPage
        >
          <img src="/images/math-quiz.jpeg" alt="Math Quiz" className="card-image" />
          <h3>Math Quiz</h3>
          <p>Test your math skills with fun quizzes!</p>
          <button className="choose-button">Choose Quiz</button>
        </motion.div>

        {/* Science Quiz Card */}
        <motion.div 
          className="quiz-card" 
          whileHover={{ scale: 1.05 }} 
          transition={{ duration: 0.3 }}
          onClick={() => navigate('/grade-selection')}  // Navigate to GradeSelectionPage
        >
          <img src="/images/science-quiz.jpeg" alt="Science Quiz" className="card-image" />
          <h3>Science Quiz</h3>
          <p>Explore science with interactive quizzes!</p>
          <button className="choose-button">Choose Quiz</button>
        </motion.div>

        {/* Geography Quiz Card */}
        <motion.div 
          className="quiz-card" 
          whileHover={{ scale: 1.05 }} 
          transition={{ duration: 0.3 }}
          onClick={() => navigate('/grade-selection')}  // Navigate to GradeSelectionPage
        >
          <img src="/images/geography-quiz.jpeg" alt="Geography Quiz" className="card-image" />
          <h3>Geography Quiz</h3>
          <p>Test your knowledge of world geography!</p>
          <button className="choose-button">Choose Quiz</button>
        </motion.div>
      </div>
    </div>
  );
};

export default QuizSelectionPage;
