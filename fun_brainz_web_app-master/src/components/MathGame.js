import React, { useState, useEffect } from 'react';

const generatePuzzle = () => {
  const num1 = Math.floor(Math.random() * 10) + 1;
  const num2 = Math.floor(Math.random() * 10) + 1;
  return {
    question: `${num1} + ${num2}`,
    answer: num1 + num2
  };
};

const generateGrid = (size) => {
  const grid = [];
  for (let i = 0; i < size; i++) {
    grid.push(generatePuzzle());
  }
  return grid;
};

const MathGame = () => {
  const gridSize = 6; // Number of cells in the grid
  const [grid, setGrid] = useState(generateGrid(gridSize));
  const [selectedAnswer, setSelectedAnswer] = useState('');
  const [score, setScore] = useState(0);

  useEffect(() => {
    if (grid.length === 0) {
      alert('Congratulations! You have cleared all the puzzles.');
    }
  }, [grid]);

  const handleInputChange = (e) => {
    setSelectedAnswer(e.target.value);
  };

  const handleSolve = (index) => {
    const updatedGrid = grid.filter((_, i) => i !== index);
    const correctAnswer = grid[index].answer;
    if (parseInt(selectedAnswer) === correctAnswer) {
      setScore(score + 1);
    }
    setSelectedAnswer('');
    setGrid(updatedGrid);
  };

  const styles = {
    container: {
      textAlign: 'center',
      fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
      padding: '30px',
      background: 'linear-gradient(135deg, #f0f3f5, #dfe6e9)',
      minHeight: '100vh',
      animation: 'fadeIn 2s ease-in-out',
    },
    grid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3, 120px)',
      gap: '20px',
      justifyContent: 'center',
      margin: '30px auto',
    },
    cell: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      height: '120px',
      width: '120px',
      border: '2px solid #333',
      borderRadius: '15px',
      backgroundColor: '#fff',
      boxShadow: '0 6px 12px rgba(0, 0, 0, 0.15)',
      cursor: 'pointer',
      fontSize: '22px',
      fontWeight: '600',
      color: '#333',
      transition: 'transform 0.5s, box-shadow 0.5s, background-color 0.5s',
      animation: 'bounceIn 1s ease-in-out',
    },
    cellHovered: {
      backgroundColor: '#e0f7fa',
      transform: 'scale(1.08) rotate(2deg)',
      boxShadow: '0 8px 16px rgba(0, 0, 0, 0.25)',
    },
    input: {
      padding: '14px',
      fontSize: '18px',
      borderRadius: '8px',
      border: '2px solid #4caf50',
      marginBottom: '30px',
      width: '280px',
      boxShadow: '0 4px 10px rgba(0, 0, 0, 0.15)',
      outline: 'none',
      transition: 'border-color 0.4s ease, box-shadow 0.4s ease',
      animation: 'fadeInUp 1.5s ease-out',
    },
    inputFocus: {
      borderColor: '#388e3c',
    },
    header: {
      fontSize: '3em',
      color: '#4caf50',
      margin: '30px 0',
      textShadow: '2px 2px #cfd8dc',
      animation: 'zoomIn 1s ease-in-out',
    },
    score: {
      fontSize: '1.7em',
      color: '#333',
      marginBottom: '25px',
      animation: 'fadeIn 1.5s ease-in-out',
    },
    '@keyframes fadeIn': {
      '0%': { opacity: 0 },
      '100%': { opacity: 1 },
    },
    '@keyframes bounceIn': {
      '0%': { transform: 'scale(0.8)' },
      '50%': { transform: 'scale(1.1)' },
      '100%': { transform: 'scale(1)' },
    },
    '@keyframes fadeInUp': {
      '0%': { opacity: 0, transform: 'translateY(20px)' },
      '100%': { opacity: 1, transform: 'translateY(0)' },
    },
    '@keyframes zoomIn': {
      '0%': { transform: 'scale(0.5)' },
      '100%': { transform: 'scale(1)' },
    },
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.header}>Match Math Puzzle Game</h1>
      <p style={styles.score}>Score: {score}</p>
      <input
        type="number"
        value={selectedAnswer}
        onChange={handleInputChange}
        placeholder="Enter your answer"
        style={styles.input}
        onFocus={(e) => e.target.style.borderColor = styles.inputFocus.borderColor}
        onBlur={(e) => e.target.style.borderColor = '#4caf50'}
      />
      <div style={styles.grid}>
        {grid.map((puzzle, index) => (
          <div
            key={index}
            style={{ 
              ...styles.cell,
              ':hover': styles.cellHovered
            }}
            onMouseOver={(e) => Object.assign(e.target.style, styles.cellHovered)}
            onMouseOut={(e) => Object.assign(e.target.style, styles.cell)}
            onClick={() => handleSolve(index)}
          >
            {puzzle.question}
          </div>
        ))}
      </div>
    </div>
  );
};

export default MathGame;