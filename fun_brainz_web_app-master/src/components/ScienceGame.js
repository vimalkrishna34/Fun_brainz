import React, { useState } from 'react';

// Planet data with challenges and image URLs
const planets = [
  { name: 'Mars', color: '#ff4d4d', image: 'images/mars.png', challenge: 'What is the largest volcano on Mars?' },
  { name: 'Jupiter', color: '#ffcc00', image: 'images/jupiter.png', challenge: 'Which planet has the most moons?' },
  { name: 'Saturn', color: '#f4c542', image: 'images/saturn.png', challenge: 'What is Saturn known for?' },
  { name: 'Earth', color: '#4d94ff', image: 'images/earth.png', challenge: 'What is the only planet known to have liquid water?' }
];

const correctAnswers = {
  'Mars': 'Olympus Mons',
  'Jupiter': 'Jupiter',
  'Saturn': 'Rings',
  'Earth': 'Liquid Water'
};

const ScienceGame = () => {
  const [selectedPlanet, setSelectedPlanet] = useState(null);
  const [userAnswer, setUserAnswer] = useState('');
  const [feedback, setFeedback] = useState('');

  const handlePlanetClick = (planet) => {
    setSelectedPlanet(planet);
    setFeedback('');
    setUserAnswer('');
  };

  const handleAnswerChange = (e) => {
    setUserAnswer(e.target.value);
  };

  const handleSubmitAnswer = () => {
    if (selectedPlanet) {
      const correctAnswer = correctAnswers[selectedPlanet.name];
      if (userAnswer.trim().toLowerCase() === correctAnswer.toLowerCase()) {
        setFeedback('Correct! You’ve learned about ' + selectedPlanet.name);
        setSelectedPlanet(null); // Move to next planet or end the game
      } else {
        setFeedback('Try Again! Think about the features of ' + selectedPlanet.name);
      }
    }
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Planet Explorer</h1>
      <div style={styles.instructions}>
        <p>Click on a planet to learn more and solve its challenge!</p>
      </div>
      <div style={styles.planets}>
        {planets.map((planet) => (
          <div
            key={planet.name}
            style={{
              ...styles.planet,
              backgroundColor: planet.color,
              border: selectedPlanet === planet ? '3px solid #333' : '2px solid #000',
            }}
            onClick={() => handlePlanetClick(planet)}
          >
            <img src={planet.image} alt={planet.name} style={styles.planetImage} />
            <div style={styles.planetName}>{planet.name}</div>
          </div>
        ))}
      </div>
      {selectedPlanet && (
        <div style={styles.challengeContainer}>
          <h2 style={styles.challengeTitle}>{selectedPlanet.challenge}</h2>
          <input
            type="text"
            value={userAnswer}
            onChange={handleAnswerChange}
            placeholder="Enter your answer"
            style={styles.input}
          />
          <button style={styles.submitButton} onClick={handleSubmitAnswer}>Submit Answer</button>
        </div>
      )}
      {feedback && <p style={styles.feedback}>{feedback}</p>}
    </div>
  );
};

const styles = {
  container: {
    textAlign: 'center',
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
    padding: '20px',
    background: 'linear-gradient(180deg, #eef2f3, #8e9eab)',
    minHeight: '100vh',
    animation: 'fadeIn 1.5s ease-in-out',
  },
  title: {
    fontSize: '2.5em',
    marginBottom: '20px',
    color: '#333',
    animation: 'zoomIn 1s ease-in-out',
    textShadow: '2px 2px 8px #888',
  },
  instructions: {
    fontSize: '1.2em',
    marginBottom: '20px',
    animation: 'fadeInUp 2s ease-out',
  },
  planets: {
    display: 'flex',
    justifyContent: 'center',
    gap: '20px',
    marginBottom: '20px',
    animation: 'slideInLeft 1.5s ease-out',
  },
  planet: {
    width: '120px',
    height: '120px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: '50%',
    border: '2px solid #000',
    cursor: 'pointer',
    fontSize: '18px',
    color: '#fff',
    fontWeight: 'bold',
    position: 'relative',
    transition: 'transform 0.3s, box-shadow 0.3s',
    boxShadow: '0 8px 16px rgba(0, 0, 0, 0.2)',
    animation: 'bounceIn 1s ease',
  },
  planetImage: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    borderRadius: '50%',
    transition: 'transform 0.4s ease',
  },
  planetName: {
    position: 'absolute',
    bottom: '10px',
    fontSize: '14px',
    fontWeight: 'bold',
    textShadow: '1px 1px 5px #000',
  },
  challengeContainer: {
    marginTop: '20px',
    animation: 'fadeIn 1.2s ease-in-out',
  },
  challengeTitle: {
    fontSize: '1.8em',
    marginBottom: '15px',
    animation: 'zoomIn 0.8s ease-in-out',
  },
  input: {
    padding: '10px',
    fontSize: '16px',
    marginBottom: '10px',
    border: '2px solid #4caf50',
    borderRadius: '5px',
    transition: 'border-color 0.4s ease',
    animation: 'fadeInUp 1s ease-out',
  },
  submitButton: {
    padding: '10px 20px',
    fontSize: '16px',
    cursor: 'pointer',
    backgroundColor: '#4caf50',
    color: 'white',
    border: 'none',
    borderRadius: '5px',
    transition: 'background-color 0.3s ease',
    animation: 'fadeInUp 1.5s ease-out',
  },
  feedback: {
    fontSize: '1.2em',
    fontWeight: 'bold',
    color: '#333',
    marginTop: '20px',
    animation: 'fadeIn 1s ease-in-out',
  },
  '@keyframes fadeIn': {
    '0%': { opacity: 0 },
    '100%': { opacity: 1 },
  },
  '@keyframes zoomIn': {
    '0%': { transform: 'scale(0.5)' },
    '100%': { transform: 'scale(1)' },
  },
  '@keyframes fadeInUp': {
    '0%': { opacity: 0, transform: 'translateY(20px)' },
    '100%': { opacity: 1, transform: 'translateY(0)' },
  },
  '@keyframes slideInLeft': {
    '0%': { transform: 'translateX(-100%)' },
    '100%': { transform: 'translateX(0)' },
  },
  '@keyframes bounceIn': {
    '0%': { transform: 'scale(0.8)' },
    '50%': { transform: 'scale(1.1)' },
    '100%': { transform: 'scale(1)' },
  },
};

export default ScienceGame;