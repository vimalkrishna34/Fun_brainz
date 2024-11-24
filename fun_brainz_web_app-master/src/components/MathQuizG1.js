import React, { useState, useEffect } from 'react';

const MathQuizG1 = () => {
  const [question, setQuestion] = useState(generateQuestion());
  const [score, setScore] = useState(0);
  const [message, setMessage] = useState('');
  const [animateAnswer, setAnimateAnswer] = useState(false);

  useEffect(() => {
    if (message) {
      setAnimateAnswer(true);
      const timer = setTimeout(() => setAnimateAnswer(false), 1000);
      return () => clearTimeout(timer);
    }
  }, [message]);

  function generateQuestion() {
    const num1 = Math.floor(Math.random() * 10);
    const num2 = Math.floor(Math.random() * 10);
    const correctAnswer = num1 + num2;
    const options = shuffleOptions([correctAnswer, correctAnswer + 1, correctAnswer - 1]);

    return { num1, num2, correctAnswer, options };
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
      <h1 style={styles.title}>Math Game for 1st Graders</h1>
      <h2 style={styles.question}>
        What is {question.num1} + {question.num2}?
      </h2>
      <div style={styles.optionsContainer}>
        {question.options.map((option, index) => (
          <button
            key={index}
            style={styles.button}
            onClick={() => handleAnswer(option)}
          >
            {option}
          </button>
        ))}
      </div>
      <p style={{ ...styles.message, ...(animateAnswer ? styles.messageAnimation : {}) }}>
        {message}
      </p>
      <h3 style={styles.score}>Your Score: {score}</h3>
    </div>
  );
};

const styles = {
  container: {
    textAlign: 'center',
    padding: '30px',
    fontFamily: 'Comic Sans MS, cursive, sans-serif',
    backgroundColor: '#f0f4f8',
    borderRadius: '12px',
    boxShadow: '0 8px 16px rgba(0, 0, 0, 0.2)',
    maxWidth: '600px',
    margin: 'auto',
    animation: 'fadeIn 1s ease-out',
  },
  title: {
    color: '#ff5722',
    fontSize: '2.5rem',
    margin: '0',
    padding: '10px 0',
    textShadow: '2px 2px 6px rgba(0, 0, 0, 0.2)',
    animation: 'slideIn 0.5s ease-out',
  },
  question: {
    color: '#3f51b5',
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
    fontSize: '1.2rem',
    padding: '20px 30px',
    minHeight: '60px',
    transition: 'background-color 0.3s, transform 0.3s, box-shadow 0.3s',
    boxShadow: '0 6px 12px rgba(0, 0, 0, 0.2)',
    outline: 'none',
    position: 'relative',
    overflow: 'hidden',
    animation: 'buttonPop 0.5s ease-out',
  },
  buttonHover: {
    backgroundColor: '#45a049',
    transform: 'scale(1.05)',
  },
  message: {
    fontSize: '1.5rem',
    color: '#32cd32',
    fontWeight: 'bold',
    animation: 'fadeIn 1s ease-out',
  },
  messageAnimation: {
    animation: 'bounce 1s ease-out',
  },
  score: {
    color: '#ff4500',
    fontSize: '1.7rem',
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

styleSheet.insertRule(`
  @keyframes bounce {
    0%, 100% {
      transform: translateY(0);
    }
    50% {
      transform: translateY(-10px);
    }
  }
`, styleSheet.cssRules.length);

export default MathQuizG1;