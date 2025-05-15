import React from 'react';
import './Header.css';     // Header 스타일
import './HomePage.css';   // Hero 섹션 등 나머지 스타일
import './Footer.css';     // Footer 스타일

const HomePage = () => {
  return (
    <div className="container">
      {/* Header */}
      <header className="header">
        <div className="logo">StudySync</div>
        <nav className="nav">
          <a href="#" className="nav-link">Home</a>
          <a href="#" className="nav-link">studygroup</a>
          <a href="#" className="nav-link">schedule</a>
          <a href="#" className="nav-link">community</a>
        </nav>

        <div className="header-search">
          <input type="text" placeholder="Search" className="search-input" />
          <button className="search-button">🔍</button>
        </div>

        <div className="header-right">
          <a href="#" className="nav-link">Register</a>
          <a href="#" className="login-button">Log In</a>
        </div>
      </header>

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-left">
          <p className="small-text">Neque porro quisquam est qui dolorem ipsum quia</p>
          <h1 className="hero-title">FIND YOUR<br />STUDY MATES</h1>
          <p className="hero-description">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Ut enim ad minim veniam, quis nostrud exercitation
          </p>
          <div className="hero-buttons">
            <button className="btn-primary">Join Study</button>
            <button className="btn-secondary">See all studies</button>
          </div>
        </div>
        <div className="hero-right">
          <div className="image-placeholder">
              <img src="src/assets/mainStudy.png" alt="Study" className="image-inside" />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-top">
          <div className="footer-logo">
            <h2>Logo</h2>
            <p>Our vision is to provide convenience and help increase your sales business.</p>
            <div className="social-icons">
              <a href="#">🌐</a>
              <a href="#">🐦</a>
              <a href="#">📷</a>
            </div>
          </div>

          <div className="footer-links">
            <div>
              <h4>About</h4>
              <ul>
                <li><a href="#">How it works</a></li>
                <li><a href="#">Featured</a></li>
                <li><a href="#">Partnership</a></li>
                <li><a href="#">Business Relation</a></li>
              </ul>
            </div>

            <div>
              <h4>Community</h4>
              <ul>
                <li><a href="#">Events</a></li>
                <li><a href="#">Blog</a></li>
                <li><a href="#">Podcast</a></li>
                <li><a href="#">Invite a friend</a></li>
              </ul>
            </div>

            <div>
              <h4>Socials</h4>
              <ul>
                <li><a href="#">Discord</a></li>
                <li><a href="#">Instagram</a></li>
                <li><a href="#">Twitter</a></li>
                <li><a href="#">Facebook</a></li>
              </ul>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>©2022 Company Name. All rights reserved</p>
          <div className="footer-policy">
            <a href="#">Privacy & Policy</a>
            <a href="#">Terms & Condition</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;
