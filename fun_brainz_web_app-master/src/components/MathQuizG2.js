import React, { useState } from 'react';

const MathQuizG2 = () => {
  const [question, setQuestion] = useState(generateQuestion());
  const [score, setScore] = useState(0);
  const [message, setMessage] = useState('');

  function generateQuestion() {
    const num1 = Math.floor(Math.random() * 20) + 1; // Random number between 1 and 20
    const num2 = Math.floor(Math.random() * 20) + 1; // Random number between 1 and 20
    const operation = Math.random() > 0.5 ? '+' : '-'; // Randomly choose between addition or subtraction
    const correctAnswer = operation === '+' ? num1 + num2 : num1 - num2;
    const options = shuffleOptions([
      correctAnswer,
      correctAnswer + (Math.random() > 0.5 ? 1 : -1),
      correctAnswer + (Math.random() > 0.5 ? 2 : -2),
    ]);

    return { num1, num2, operation, correctAnswer, options };
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
      <h1 style={styles.title}>Math Game for 2nd Graders</h1>
      <h2 style={styles.question}>
        What is {question.num1} {question.operation} {question.num2}?
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
      <p style={styles.message}>{message}</p>
      <h3 style={styles.score}>Your Score: {score}</h3>
    </div>
  );
};

const styles = {
  container: {
    textAlign: 'center',
    padding: '20px',
    fontFamily: 'Arial, sans-serif',
    backgroundColor: '#e0f7fa',
    borderRadius: '15px',
    boxShadow: '0 10px 20px rgba(0, 0, 0, 0.3)',
    maxWidth: '600px',
    margin: 'auto',
    position: 'relative',
    overflow: 'hidden',
    animation: 'fadeIn 1s ease-out',
  },
  title: {
    color: '#004d40',
    fontSize: '3rem',
    margin: '0',
    padding: '10px 0',
    textShadow: '2px 2px 5px rgba(0, 0, 0, 0.3)',
    animation: 'slideIn 0.5s ease-out',
  },
  question: {
    color: '#00796b',
    fontSize: '2.5rem',
    margin: '20px 0',
    animation: 'fadeIn 1s ease-out',
  },
  optionsContainer: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    gap: '15px',
    margin: '20px 0',
    animation: 'fadeIn 1s ease-out',
  },
  button: {
    backgroundColor: '#4db6ac',
    border: 'none',
    borderRadius: '8px',
    color: '#fff',
    cursor: 'pointer',
    fontSize: '1.3rem',
    padding: '15px 30px',
    transition: 'background-color 0.3s ease, transform 0.3s ease, box-shadow 0.3s ease',
    boxShadow: '0 6px 12px rgba(0, 0, 0, 0.3)',
    outline: 'none',
    position: 'relative',
    overflow: 'hidden',
  },
  buttonHover: {
    backgroundColor: '#00796b',
    transform: 'scale(1.05)',
    boxShadow: '0 8px 16px rgba(0, 0, 0, 0.4)',
  },
  message: {
    fontSize: '1.3rem',
    color: '#388e3c',
    fontWeight: 'bold',
    animation: 'fadeIn 1s ease-out',
  },
  score: {
    color: '#d32f2f',
    fontSize: '1.8rem',
    margin: '20px 0',
    animation: 'fadeIn 1s ease-out',
  },
};

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

export default MathQuizG2;