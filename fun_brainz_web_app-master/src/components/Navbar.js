import React, { useState } from 'react';
import {
  FaGamepad,
  FaVideo,
  FaQuestionCircle,
  FaFileAlt,
  FaTools,
  FaChevronDown,
  FaSearch,
} from 'react-icons/fa';
import './Navbar.css'; // Import the CSS for styling
import ProfilePopup from './ProfilePopup'; // Import the ProfilePopup component

const Navbar = () => {
  const [openDropdown, setOpenDropdown] = useState(null);
  const [isProfilePopupVisible, setIsProfilePopupVisible] = useState(false);

  // Function to toggle dropdown menus
  const toggleDropdown = (section) => {
    setOpenDropdown(openDropdown === section ? null : section);
  };

  // Function to toggle profile popup
  const toggleProfilePopup = () => {
    setIsProfilePopupVisible(!isProfilePopupVisible);
  };

  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <ul className="navbar-menu">
            {/* Games Section */}
            <li>
              <a href="#" onClick={() => toggleDropdown('games')}>
                <FaGamepad /> Games <FaChevronDown />
              </a>
              {openDropdown === 'games' && (
                <ul className="dropdown-menu">
                  <li>Preschool</li>
                  <li>Kindergarten</li>
                  <li>First Grade</li>
                  <li>Second Grade</li>
                  <li>Third Grade</li>
                  <li>Fourth Grade</li>
                  <li>Fifth Grade</li>
                  <li>All Games</li>
                  <li>Math Games</li>
                  <li>Language Games</li>
                  <li>Science Games</li>
                  <li>Geography Games</li>
                  <li>Multiplayer Games</li>
                  <li>Typing Games</li>
                  <li>Fun and More</li>
                  <li>Games by Topic</li>
                </ul>
              )}
            </li>

            {/* Videos Section */}
            <li>
              <a href="#" onClick={() => toggleDropdown('videos')}>
                <FaVideo /> Videos <FaChevronDown />
              </a>
              {openDropdown === 'videos' && (
                <ul className="dropdown-menu">
                  <li>Preschool</li>
                  <li>Kindergarten</li>
                  <li>First Grade</li>
                  <li>Second Grade</li>
                  <li>Third Grade</li>
                  <li>Fourth Grade</li>
                  <li>Fifth Grade</li>
                  <li>All Videos</li>
                  <li>Math Videos</li>
                  <li>Language Videos</li>
                  <li>Science Videos</li>
                  <li>Geography Videos</li>
                </ul>
              )}
            </li>

            {/* Quizzes Section */}
            <li>
              <a href="#" onClick={() => toggleDropdown('quizzes')}>
                <FaQuestionCircle /> Quizzes <FaChevronDown />
              </a>
              {openDropdown === 'quizzes' && (
                <ul className="dropdown-menu">
                  <li>Preschool</li>
                  <li>Kindergarten</li>
                  <li>First Grade</li>
                  <li>Second Grade</li>
                  <li>Third Grade</li>
                  <li>Fourth Grade</li>
                  <li>Fifth Grade</li>
                  <li>All Quizzes</li>
                  <li>Math Quizzes</li>
                  <li>Language Quizzes</li>
                  <li>Science Quizzes</li>
                  <li>Geography Quizzes</li>
                  <li>Assessment Tests</li>
                </ul>
              )}
            </li>

            {/* Worksheets Section */}
            <li>
              <a href="#" onClick={() => toggleDropdown('worksheets')}>
                <FaFileAlt /> Worksheets <FaChevronDown />
              </a>
              {openDropdown === 'worksheets' && (
                <ul className="dropdown-menu">
                  <li>All Worksheets</li>
                  <li>Math Worksheets</li>
                  <li>Language Worksheets</li>
                  <li>Science Worksheets</li>
                  <li>Geography Worksheets</li>
                </ul>
              )}
            </li>

            {/* Teaching Tools Section */}
            <li>
              <a href="#" onClick={() => toggleDropdown('teaching')}>
                <FaTools /> Teaching Tools <FaChevronDown />
              </a>
              {openDropdown === 'teaching' && (
                <ul className="dropdown-menu">
                  <li>Worksheet Generator</li>
                  <li>Assessment Tests</li>
                  <li>Reports</li>
                  <li>Manage Class</li>
                  <li>Manage Student</li>
                </ul>
              )}
            </li>

            {/* More Section */}
            <li className="dropdown">
              <a href="#" onClick={() => toggleDropdown('more')}>
                More <FaChevronDown />
              </a>
              {openDropdown === 'more' && (
                <ul className="dropdown-menu">
                  <li>Blogs</li>
                  <li>My Account</li>
                </ul>
              )}
            </li>
          </ul>

          {/* Search bar */}
          <div className="navbar-search">
            <input type="text" placeholder="Search..." className="search-input" />
            <FaSearch className="search-icon" />
          </div>

          {/* Profile Section */}
          <div className="profile-section" onClick={toggleProfilePopup}>
            <img
              src="/images/avatar.png" // Add your avatar image here
              alt="Profile Avatar"
              className="profile-avatar"
            />
            <p className="profile-text">My Profile</p>
          </div>

          {/* Signup and Login Buttons */}
          <div className="auth-buttons">
            <button className="login-btn">Login</button>
            <button className="signup-btn">Signup</button>
          </div>
        </div>
      </nav>

      {/* Profile Popup */}
      {isProfilePopupVisible && <ProfilePopup onClose={toggleProfilePopup} />}
    </>
  );
};

export default Navbar;
