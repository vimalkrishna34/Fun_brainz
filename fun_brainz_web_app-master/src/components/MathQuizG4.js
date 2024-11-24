import React, { useState } from 'react';

const MathQuizG4 = () => {
  const [question, setQuestion] = useState(generateQuestion());
  const [score, setScore] = useState(0);
  const [message, setMessage] = useState('');

  function generateQuestion() {
    const num1 = Math.floor(Math.random() * 50) + 1; // Random number between 1 and 50
    const num2 = Math.floor(Math.random() * 50) + 1; // Random number between 1 and 50
    const operation = chooseOperation(); // Randomly choose an operation
    const correctAnswer = calculateAnswer(num1, num2, operation);
    const options = shuffleOptions([
      correctAnswer,
      correctAnswer + (Math.random() > 0.5 ? 2 : -2),
      correctAnswer + (Math.random() > 0.5 ? 5 : -5),
    ]);

    return { num1, num2, operation, correctAnswer, options };
  }

  function chooseOperation() {
    const operations = ['+', '-', '*', '/'];
    return operations[Math.floor(Math.random() * operations.length)];
  }

  function calculateAnswer(num1, num2, operation) {
    switch (operation) {
      case '+':
        return num1 + num2;
      case '-':
        return num1 - num2;
      case '*':
        return num1 * num2;
      case '/':
        // Ensure no division by zero and use integer division
        return num2 !== 0 ? Math.floor(num1 / num2) : num1;
      default:
        return 0;
    }
  }

  function shuffleOptions(options) {
    for (let i = options.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [options[i], options[j]] = [options[j], options[i]];
    }
    return options;
  }

  function handleAnswer(selectedAnswer) {
    if (selectedAnswer === question.correctAnswer) {
      setMessage('Correct!');
      setScore(score + 1);
    } else {
      setMessage('Try again!');
    }

    setQuestion(generateQuestion());
  }

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Math Game for 4th Graders</h1>
      <h2 style={styles.question}>
        What is {question.num1} {question.operation} {question.num2}?
      </h2>
      <div style={styles.optionsContainer}>
        {question.options.map((option, index) => (
          <button
            key={index}
            style={styles.button}
            onClick={() => handleAnswer(option)}
            onMouseEnter={(e) => e.target.style.backgroundColor = '#388e3c'}
            onMouseLeave={(e) => e.target.style.backgroundColor = '#4caf50'}
          >
            {option}
          </button>
        ))}
      </div>
      <p style={styles.message}>{message}</p>
      <h3 style={styles.score}>Your Score: {score}</h3>
    </div>
  );
};

const styles = {
  container: {
    textAlign: 'center',
    padding: '30px',
    fontFamily: 'Arial, sans-serif',
    backgroundColor: '#ffe0b2', // New soft orange background color
    borderRadius: '12px',
    boxShadow: '0 8px 16px rgba(0, 0, 0, 0.2)',
    maxWidth: '700px',
    margin: 'auto',
    position: 'relative',
    overflow: 'hidden',
    animation: 'fadeIn 1s ease-out',
  },
  title: {
    color: '#ff9800',
    fontSize: '2.5rem',
    margin: '0',
    padding: '10px 0',
    textShadow: '2px 2px 6px rgba(0, 0, 0, 0.2)',
    animation: 'slideIn 0.5s ease-out',
  },
  question: {
    color: '#2196f3',
    fontSize: '2rem',
    margin: '10px 0',
    animation: 'fadeIn 1s ease-out',
  },
  optionsContainer: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    gap: '20px',
    margin: '20px 0',
    animation: 'fadeIn 1s ease-out',
  },
  button: {
    backgroundColor: '#4caf50',
    border: 'none',
    borderRadius: '8px',
    color: '#fff',
    cursor: 'pointer',
    fontSize: '1.2rem', // Font size for button text
    padding: '20px 30px', // Increased padding for height
    minHeight: '60px', // Set a minimum height for buttons
    transition: 'background-color 0.3s, transform 0.3s, box-shadow 0.3s',
    boxShadow: '0 6px 12px rgba(0, 0, 0, 0.2)',
    outline: 'none',
    position: 'relative',
    overflow: 'hidden',
    animation: 'buttonPop 0.5s ease-out',
  },
  message: {
    fontSize: '1.5rem', // Slightly larger font size for message
    color: '#4caf50',
    fontWeight: 'bold',
    animation: 'fadeIn 1s ease-out',
  },
  score: {
    color: '#f44336',
    fontSize: '1.7rem', // Increased font size for score
    margin: '20px 0',
    animation: 'fadeIn 1s ease-out',
  },
};

// Adding keyframe animations
const styleSheet = document.styleSheets[0];
styleSheet.insertRule(`
  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`, styleSheet.cssRules.length);

styleSheet.insertRule(`
  @keyframes slideIn {
    from {
      transform: translateY(-20px);
      opacity: 0;
    }
    to {
      transform: translateY(0);
      opacity: 1;
    }
  }
`, styleSheet.cssRules.length);

styleSheet.insertRule(`
  @keyframes buttonPop {
    from {
      transform: scale(0.95);
      opacity: 0.8;
    }
    to {
      transform: scale(1);
      opacity: 1;
    }
  }
`, styleSheet.cssRules.length);

export default MathQuizG4;