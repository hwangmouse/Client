import React from 'react';
import './SignupForm.css';

const SignupForm = () => {
  return (
    <div className="signup-container">
      <div className="image-section">
        <div className="placeholder-image" />
      </div>
      <div className="form-section">
        <h1>Welcome to StudySync!</h1>
        <form className="form-fields">
          <label>Name*</label>
          <input type="text" placeholder="John Carter" />

          <label>Email*</label>
          <input type="email" placeholder="example@email.com" />

          <label>Birth Date*</label>
          <input type="text" placeholder="19980825" />

          <label>Password*</label>
          <input type="password" placeholder="password" />

          <label>Confirm your Password*</label>
          <input type="password" placeholder="password" />

          <label>Major</label>
          <input type="text" placeholder="Software" />
        </form>
        <button className="signup-button">Sign Up</button>
      </div>
    </div>
  );
};

export default SignupForm;
