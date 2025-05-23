// src/component/Header.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = ({isAuthenticated, onLogout}) => {
  return (
    <header className="header">
      <Link to={'/'}><div className="logo">StudySync</div></Link>
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
        {!isAuthenticated && (
          <>
            <Link to="/signup" className="nav-link">Register</Link>
            <Link to="/login" className="login-button">Log In</Link>
          </>
        )}
        {isAuthenticated && (
          <>
            <Link to="/profile" className="nav-link">My Info</Link> {/* 회원정보 버튼 */}
            <button className="login-button" onClick={onLogout}>Log Out</button>
          </>
        )}
      </div>
    </header>
  );
};

export default Header;
