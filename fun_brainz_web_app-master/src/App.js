// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LandingPage from './components/LandingPage';
import LearningPage from './components/LearningPage';
import QuizSelectionPage from './components/QuizSelectionPage';
import ScrollToTopButton from './components/ScrollToTopButton';
import Navbar from './components/Navbar';
import GamesPage from './components/GamesPage';
import VideosPage from './components/VideosPage';
import GradeSelectionPage from './components/GradeSelectionPage'; 
import GradeSelectionPageSci from './components/GradeSelectionPageSci'; 
import MathQuizG1 from './components/MathQuizG1';
import MathQuizG2 from './components/MathQuizG2';
import MathQuizG3 from './components/MathQuizG3';
import MathQuizG4 from './components/MathQuizG4';
import MathQuizG5 from './components/MathQuizG5';
import MathGame from './components/MathGame';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar /> {/* Navbar stays fixed */}
        <Routes>
          {/* Route for the LandingPage */}
          <Route path="/" element={<LandingPage />} />
          {/* Route for the LearningPage */}
          <Route path="/learning" element={<LearningPage />} />
          
          <Route path="/quizzes" element={<QuizSelectionPage />} />
          <Route path="/games" element={<GamesPage />} />
          <Route path="/videos" element={<VideosPage />} />
          <Route path="/grade-selection" element={<GradeSelectionPage />} /> 
          <Route path="/grade-selection-sci" element={<GradeSelectionPageSci />} /> 
          <Route path="/math-game/grade-1" element={<MathQuizG1 />} />
          <Route path="/math-game/grade-2" element={<MathQuizG2 />} />
          <Route path="/math-game/grade-3" element={<MathQuizG3 />} />
          <Route path="/math-game/grade-4" element={<MathQuizG4 />} />
          <Route path="/math-game/grade-5" element={<MathQuizG5 />} />

          <Route path="/game-select" element={< MathGame/>} />





        </Routes>
        <ScrollToTopButton />
      </div>
    </Router>
  );
}

export default App;
