import React from 'react';
import './LoginForm.css';

const LoginForm = () => {
  return (
    <div className="login-container">
      <div className="form-section">
        <h1>Login for StudySync!</h1>
        <label>Email</label>
        <input type="email" placeholder="example.gmail.com" />
        <label>Password</label>
        <input type="password" placeholder="password" />
        <button>Login</button>
      </div>
      <div className="image-section">
        <div className="placeholder-image" />
      </div>
    </div>
  );
};

export default LoginForm;
