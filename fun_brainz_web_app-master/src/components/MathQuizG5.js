import React, { useState, useEffect } from 'react';

const MathQuizG5 = () => {
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
    const num1 = Math.floor(Math.random() * 100) + 1;
    const num2 = Math.floor(Math.random() * 100) + 1;
    const operation = chooseOperation();
    const correctAnswer = calculateAnswer(num1, num2, operation);
    const options = shuffleOptions([
      correctAnswer,
      generateFakeAnswer(correctAnswer),
      generateFakeAnswer(correctAnswer),
    ]);

    return { num1, num2, operation, correctAnswer, options };
  }

  function chooseOperation() {
    const operations = ['+', '-', '*', '/', 'frac'];
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
        return num2 !== 0 ? Math.floor(num1 / num2) : num1;
      case 'frac':
        return `${num1}/${num2}`; // Return as string
      default:
        return 0;
    }
  }

  function generateFakeAnswer(correctAnswer) {
    const offset = Math.floor(Math.random() * 10) + 1;
    return Math.random() > 0.5 ? correctAnswer + offset : correctAnswer - offset;
  }

  function shuffleOptions(options) {
    for (let i = options.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [options[i], options[j]] = [options[j], options[i]];
    }
    return options;
  }

  function handleAnswer(selectedAnswer) {
    if (selectedAnswer === question.correctAnswer.toString()) {
      setMessage('Correct!');
      setScore(score + 1);
    } else {
      setMessage('Try again!');
    }

    setQuestion(generateQuestion());
  }

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Math Game for 5th Graders</h1>
      <h2 style={styles.question}>
        What is {question.num1} {question.operation === 'frac' ? '/' : question.operation} {question.num2}?
      </h2>
      <div style={styles.optionsContainer}>
        {question.options.map((option, index) => (
          <button
            key={index}
            style={styles.button}
            onClick={() => handleAnswer(option)}
            onMouseEnter={(e) => (e.target.style.backgroundColor = '#388e3c')}
            onMouseLeave={(e) => (e.target.style.backgroundColor = '#4caf50')}
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
    padding: '20px',
    fontFamily: 'Arial, sans-serif',
    backgroundColor: '#f5f5f5',
    borderRadius: '15px',
    boxShadow: '0 8px 16px rgba(0, 0, 0, 0.2)',
    maxWidth: '600px',
    margin: 'auto',
    marginTop: '20px',
  },
  title: {
    color: '#2196f3',
    fontSize: '2.5rem',
    margin: '0',
    padding: '10px 0',
    fontWeight: 'bold',
    textShadow: '2px 2px 6px rgba(0, 0, 0, 0.2)',
  },
  question: {
    color: '#333',
    fontSize: '1.8rem',
    margin: '15px 0',
    fontWeight: 'normal',
  },
  optionsContainer: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    gap: '15px',
    margin: '25px 0',
  },
  button: {
    backgroundColor: '#4caf50',
    border: 'none',
    borderRadius: '8px',
    color: 'white',
    cursor: 'pointer',
    fontSize: '1.2rem',
    padding: '12px 24px',
    transition: 'background-color 0.3s, transform 0.2s',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
    outline: 'none',
    position: 'relative',
    overflow: 'hidden',
  },
  message: {
    fontSize: '1.2rem',
    color: '#388e3c',
    fontWeight: 'bold',
    margin: '10px 0',
  },
  messageAnimation: {
    animation: 'bounce 1s ease-out',
  },
  score: {
    color: '#f44336',
    fontSize: '1.5rem',
    margin: '20px 0',
  },
};

// Adding keyframe animations
const styleSheet = document.styleSheets[0];
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

export default MathQuizG5;
