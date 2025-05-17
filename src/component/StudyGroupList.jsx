// src/components/StudyGroupList.js
import React, { useState } from "react"; // ✅ useState 추가
import { useNavigate } from "react-router-dom";
import "./StudyGroupList.css";
import CreateGroupForm from "./CreateGroupForm"; // ✅ 분리한 컴포넌트도 import
// "./Header.jsx"는 실제로 사용하지 않으므로 제거해도 됨

const exampleGroups = [
  {
    id: 10001,
    topic: "Web Development",
    members: 5,
    capacity: 10,
    mode: "Offline",
  },
  {
    id: 10002,
    topic: "Data Science",
    members: 3,
    capacity: 8,
    mode: "Online",
  },
  {
    id: 10003,
    topic: "AI & ML",
    members: 6,
    capacity: 6,
    mode: "Offline",
  },
];

const StudyGroupList = () => {
  const navigate = useNavigate();
  const [showForm, setShowForm] = useState(false);

  const handleJoin = (groupId) => {
    alert("Join 요청이 전송되었습니다");
  };

  const handleCreateSubmit = (formData) => {
    alert(`그룹 "${formData.groupName}" 생성 완료`);
    navigate(`/group/${formData.groupName}`); // ID로 이동 (실제론 고유 ID 추천)
  };


  return (
    <div className="studygroup-container">
      <h1 className="title">Find Your Group</h1>

      <div className="create-container">
        <button
          className="create-button"
          onClick={() => setShowForm(!showForm)}
        >
          + Create Group
        </button>
      </div>

      {showForm && (
        <CreateGroupForm
          onSubmit={handleCreateSubmit}
          onClose={() => setShowForm(false)}
        />
      )}

      <div className="search-container">
        <input
          type="text"
          placeholder="Enter topic or group ID"
          className="search-input"
        />
        <button className="search-button">Search</button>
      </div>

      <div className="group-box">
        <div className="group-header">
          <div>ID</div>
          <div>Topic</div>
          <div>Mode</div>
          <div>Member</div>
          <div></div>
        </div>

        {exampleGroups.map((group, index) => (
          <div className="group-row" key={index}>
            <div>{group.id}</div>
            <div>{group.topic}</div>
            <div>{group.mode}</div>
            <div>
              {group.members}/{group.capacity}
            </div>
            <button
              className="join-button"
              onClick={() => handleJoin(group.id)}
            >
              Join
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StudyGroupList;
