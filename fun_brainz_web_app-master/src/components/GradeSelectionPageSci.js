import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import './GradeSelectionPage.css';  // You can reuse the same CSS as the regular GradeSelectionPage

const GradeSelectionPageSci = () => {
  const navigate = useNavigate();

  const startScienceGame = (grade) => {
    navigate(`/science-game/${grade}`); // Navigate to the science game for the selected grade
  };

  return (
    <div className="grade-selection-page">
      <h2>Select a Grade</h2>
      <div className="grade-cards">
        {/* Grade 1 Card */}
        <motion.div
          className="grade-card"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
        
        >
          <img src="/images/sci-grade-1.jpg" alt="Grade 1" className="card-image" />
          <h3>Grade 1</h3>
          <p>Engage with interactive science quizzes for Grade 1.</p>
          <button
            className="start-button"
            onClick={() => startScienceGame('grade-1')}
          >
            Start
          </button>
        </motion.div>

        {/* Grade 2 Card */}
        <motion.div
          className="grade-card"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
        >
          <img src="/images/sci-grade-2.jpg" alt="Grade 2" className="card-image" />
          <h3>Grade 2</h3>
          <p>Explore quizzes designed for Grade 2 students.</p>
          <button
            className="start-button"
            onClick={() => startScienceGame('grade-2')}
          >
            Start
          </button>
        </motion.div>

        {/* Grade 3 Card */}
        <motion.div
          className="grade-card"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
        >
          <img src="/images/sci-grade-3.jpg" alt="Grade 3" className="card-image" />
          <h3>Grade 3</h3>
          <p>Challenge yourself with quizzes for Grade 3.</p>
          <button
            className="start-button"
            onClick={() => startScienceGame('grade-3')}
          >
            Start
          </button>
        </motion.div>

        {/* Grade 4 Card */}
        <motion.div
          className="grade-card"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
        >
          <img src="/images/sci-grade-4.jpg" alt="Grade 4" className="card-image" />
          <h3>Grade 4</h3>
          <p>Advance your skills with Grade 4 science quizzes.</p>
          <button
            className="start-button"
            onClick={() => startScienceGame('grade-4')}
          >
            Start
          </button>
        </motion.div>

        {/* Grade 5 Card */}
        <motion.div
          className="grade-card"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
        >
          <img src="/images/sci-grade-5.jpg" alt="Grade 5" className="card-image" />
          <h3>Grade 5</h3>
          <p>Prepare for the next level with Grade 5 quizzes.</p>
          <button
            className="start-button"
            onClick={() => startScienceGame('grade-5')}
          >
            Start
          </button>
        </motion.div>
      </div>
    </div>
  );
};

export default GradeSelectionPageSci;
