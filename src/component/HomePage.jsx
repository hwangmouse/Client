import React from 'react';
import {Link} from 'react-router-dom'
import './Header.css';     // Header 스타일
import './HomePage.css';   // Hero 섹션 등 나머지 스타일
import './Footer.css';     // Footer 스타일

const HomePage = () => {
  return (
    <div className="container">
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
            <Link to={'/studygroup'}><button className="btn-secondary">See all studies</button></Link>
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
            <h2>StudySync</h2>
            <p>Our vision is to provide convenience for your study activity and help find your study mates.</p>
          </div>
          <div className="footer-links">
            <h4>What Services?</h4>
            <ul>
              <li>&nbsp;</li>
              <li>Communication through community page</li>
              <li>Edit your profile</li>
              <li>Find study groups and mates</li>
              <li>Manage your schedules</li>
            </ul>
          </div>
          

          <div className="footer-links">
            <div>
              <h4>Role</h4>
              <ul>
                <li>Back-end</li>
                <li>&nbsp;</li>
                <li>Front-end</li>
                <li>&nbsp;</li>
                <li>&nbsp;</li>
              </ul>
            </div>
            <div>
              <h4>Developer</h4>
              <ul>
                <li>장예은</li>
                <li>장인영</li>
                <li>노율</li>
                <li>최수정</li>
                <li>황지은</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>©2025 SE Team3. </p>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;
