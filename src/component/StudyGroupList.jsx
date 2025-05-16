// src/components/StudyGroupList.js
import React from "react";
import "./StudyGroupList.css";
import "./Header.jsx";

const dummyGroups = Array.from({ length: 6 }, () => ({
  id: 10229485,
  topic: "Computer Science",
  members: 4,
  capacity: 8,
}));

const StudyGroupList = () => {
  return (
    <div className="studygroup-container">
      <h1 className="title">Find Your Group</h1>
      <div className="search-container">
        <input
          type="text"
          placeholder="Enter topic or group ID"
          className="search-input"
        />
        <button className="search-button">Search</button>
      </div>
      <div className="group-list">
        {dummyGroups.map((group, index) => (
          <div className="group-item" key={index}>
            <div className="group-info">
              <span className="pill">Topic: {group.topic}</span>
              <span className="pill">ID: {group.id}</span>
              <span className="pill">
                {group.members}/{group.capacity}
              </span>
            </div>
            <button className="join-button">Join</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StudyGroupList;