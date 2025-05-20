// src/component/UserInfo.jsx
import React, { useState } from 'react';
import './UserInfo.css';

const interestsList = [
  "AI", "Web 개발", "앱 개발", "자격증", "어학",
  "데이터 분석", "알고리즘", "보안", "취업 준비", "면접 대비",
  "네트워크", "시스템 설계", "블록체인", "스타트업", "기타"
];

const UserInfo = () => {
  const [selectedInterests, setSelectedInterests] = useState([]);

  const toggleInterest = (interest) => {
    if (selectedInterests.includes(interest)) {
      setSelectedInterests(selectedInterests.filter(i => i !== interest));
    } else {
      setSelectedInterests([...selectedInterests, interest]);
    }
  };

  return (
    <div className="user-info-container">
      <h2 className="user-info-title">My Profile</h2>
      <div className="user-info-section">
        <p><strong>Name:</strong> 조은이</p>
        <p><strong>Email:</strong> example@email.com</p>
        <p><strong>Age:</strong> 22</p>
        <p><strong>Gender:</strong> Female</p>
      </div>

      <h3 className="interest-title">관심 분야 선택</h3>
      <div className="interest-grid">
        {interestsList.map((interest, idx) => (
          <div
            key={idx}
            className={`interest-box ${selectedInterests.includes(interest) ? 'selected' : ''}`}
            onClick={() => toggleInterest(interest)}
          >
            {interest}
          </div>
        ))}
      </div>
    </div>
  );
};





export default UserInfo;
