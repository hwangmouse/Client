// src/component/LoginForm.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';  // ✅ 추가
import './LoginForm.css';

const LoginForm = ({ onLogin }) => {
  const navigate = useNavigate(); // ✅ 리디렉션용 훅

  const handleSubmit = (e) => {
    e.preventDefault();
    onLogin();            // 인증 상태 true로 설정
    navigate('/');        // ✅ 로그인 후 홈으로 이동
  };

  return (
    <div className="login-container">
      <form className="form-section" onSubmit={handleSubmit}>
        <h1>Login for StudySync!</h1>
        <label>Email</label>
        <input type="email" placeholder="example@gmail.com" required />
        <label>Password</label>
        <input type="password" placeholder="password" required />
        <button type="submit">Login</button>
      </form>
      <div className="image-section">
        <div className="placeholder-image" />
      </div>
    </div>
  );
};

export default LoginForm;
