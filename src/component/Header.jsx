// src/component/Header.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="logo">StudySync</div>
      <nav className="nav">
        <Link to="/" className="nav-link">Home</Link>
        <Link to="/studygroup" className="nav-link">studygroup</Link>
        <Link to="/schedule" className="nav-link">schedule</Link>
        <Link to="/community" className="nav-link">community</Link>
      </nav>
      <div className="header-search">
        <input type="text" placeholder="Search" className="search-input" />
        <button className="search-button">🔍</button>
      </div>
      <div className="header-right">
        <Link to="/signup" className="nav-link">Register</Link>
        <Link to="/login" className="login-button">Log In</Link>
      </div>
    </header>
  );
};

export default Header;
