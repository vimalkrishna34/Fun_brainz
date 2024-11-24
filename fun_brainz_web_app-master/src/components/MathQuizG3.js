import React, { useState } from 'react';

const MathQuizG3 = () => {
  const [question, setQuestion] = useState(generateQuestion());
  const [score, setScore] = useState(0);
  const [message, setMessage] = useState('');

  function generateQuestion() {
    const num1 = Math.floor(Math.random() * 20) + 1;
    const num2 = Math.floor(Math.random() * 20) + 1;
    const operation = chooseOperation();
    const correctAnswer = calculateAnswer(num1, num2, operation);
    const options = shuffleOptions([
      correctAnswer,
      correctAnswer + (Math.random() > 0.5 ? 1 : -1),
      correctAnswer + (Math.random() > 0.5 ? 2 : -2),
    ]);

    return { num1, num2, operation, correctAnswer, options };
  }

  function chooseOperation() {
    const operations = ['+', '-', '*'];
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
      <h1 style={styles.header}>Math Game for 3rd Graders</h1>
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
    backgroundColor: '#f0f4f8',
    borderRadius: '15px',
    boxShadow: '0 12px 24px rgba(0, 0, 0, 0.2)',
    maxWidth: '600px',
    margin: 'auto',
    position: 'relative',
    overflow: 'hidden',
    animation: 'fadeIn 1s ease-out',
  },
  header: {
    color: '#00796b',
    fontSize: '3rem',
    margin: '0',
    padding: '10px 0',
    textShadow: '2px 2px 8px rgba(0, 0, 0, 0.3)',
    animation: 'slideIn 0.5s ease-out',
  },
  question: {
    color: '#004d40',
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
    backgroundColor: '#009688',
    border: 'none',
    borderRadius: '8px',
    color: '#fff',
    cursor: 'pointer',
    fontSize: '1.3rem',
    padding: '15px 30px',
    transition: 'background-color 0.3s ease, transform 0.3s ease, box-shadow 0.3s ease',
    boxShadow: '0 6px 12px rgba(0, 0, 0, 0.2)',
    outline: 'none',
    position: 'relative',
    overflow: 'hidden',
    animation: 'buttonPop 0.5s ease-out',
  },
  buttonHover: {
    backgroundColor: '#00796b',
    transform: 'scale(1.05)',
    boxShadow: '0 8px 16px rgba(0, 0, 0, 0.3)',
  },
  message: {
    fontSize: '1.5rem',
    color: '#e64a19',
    fontWeight: 'bold',
    animation: 'fadeIn 1s ease-out',
  },
  score: {
    color: '#004d40',
    fontSize: '1.8rem',
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

export default MathQuizG3;