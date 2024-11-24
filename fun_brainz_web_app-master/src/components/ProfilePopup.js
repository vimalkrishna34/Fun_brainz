import React from 'react';
import './ProfilePopup.css';

const ProfilePopup = ({ onClose }) => {
  return (
    <div className="popup-overlay">
      <div className="profile-popup">
        <button className="close-btn" onClick={onClose}>X</button>
        <h2>Kid's Progress</h2>
        <div className="progress-bar">
          <div className="progress-fill" style={{ width: '75%' }}></div>
        </div>
        <p>Levels Completed: 15/20</p>
        <div className="badges-section">
          <h3>Badges Earned:</h3>
          <div className="badge-list">
            <span className="badge">Math Master</span>
            <span className="badge">Science Star</span>
            <span className="badge">Quiz Wizard</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePopup;
