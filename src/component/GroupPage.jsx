// src/components/GroupPage.js
import React, { useState, useRef, useEffect } from "react";
import { useParams } from "react-router-dom";
import "./GroupPage.css";

const mockGroupData = {
  name: "AI Study Group",
  topic: "Artificial Intelligence and Deep Learning Systems for Real-World Applications",
  members: ["user1", "user2", "user3"],
  joinRequests: ["user4", "user5"],
  announcements: ["Welcome to the group!", "First meeting on Monday 10am"],
  schedule: ["Mon 10:00 - Intro to AI", "Wed 14:00 - ML Workshop"]
};

const GroupPage = () => {
  const { id } = useParams();
  const [activeTab, setActiveTab] = useState("info");
  const group = mockGroupData;

  const nameRef = useRef(null);
  const topicRef = useRef(null);
  const [shrinkTitle, setShrinkTitle] = useState(false);
  const [shrinkTopic, setShrinkTopic] = useState(false);

  useEffect(() => {
    if (nameRef.current && nameRef.current.scrollWidth > nameRef.current.clientWidth) {
      setShrinkTitle(true);
    }
    if (topicRef.current && topicRef.current.scrollWidth > topicRef.current.clientWidth) {
      setShrinkTopic(true);
    }
  }, []);

  const handleApprove = (userId) => {
    alert(`${userId} approved`);
  };

  const handleReject = (userId) => {
    alert(`${userId} rejected`);
  };

  return (
    <div className="group-page-wrapper large">
      <div className="groupPage-header">
        <h1 ref={nameRef} className={shrinkTitle ? "shrink" : ""}>{group.name}</h1>
        <p ref={topicRef} className={shrinkTopic ? "shrink" : ""}>Topic: {group.topic}</p>
      </div>

      <div className="tab-buttons">
        <button className={activeTab === "info" ? "active" : ""} onClick={() => setActiveTab("info")}>Info</button>
        <button className={activeTab === "members" ? "active" : ""} onClick={() => setActiveTab("members")}>Members</button>
        <button className={activeTab === "requests" ? "active" : ""} onClick={() => setActiveTab("requests")}>Requests</button>
        <button className={activeTab === "announcements" ? "active" : ""} onClick={() => setActiveTab("announcements")}>Announcements</button>
        <button className={activeTab === "schedule" ? "active" : ""} onClick={() => setActiveTab("schedule")}>Schedule</button>
      </div>

      <div className={`tab-content ${activeTab === "info" ? "active" : ""}`}>
        <p>This group is focused on exploring Artificial Intelligence.</p>
      </div>

      <div className={`tab-content ${activeTab === "members" ? "active" : ""}`}>
        {group.members.map((user) => (
          <div className="member-card" key={user}>{user}</div>
        ))}
      </div>

      <div className={`tab-content ${activeTab === "requests" ? "active" : ""}`}>
        {group.joinRequests.length === 0 ? (
          <p>No pending requests.</p>
        ) : (
          group.joinRequests.map((user) => (
            <div className="request-row" key={user}>
              <span className="user-id">{user}</span>
              <button className="approve" onClick={() => handleApprove(user)}>Approve</button>
              <button className="reject" onClick={() => handleReject(user)}>Reject</button>
            </div>
          ))
        )}
      </div>

      <div className={`tab-content ${activeTab === "announcements" ? "active" : ""}`}>
        {group.announcements.map((note, idx) => (
          <div className="member-card" key={idx}>{note}</div>
        ))}
      </div>

      <div className={`tab-content ${activeTab === "schedule" ? "active" : ""}`}>
        {group.schedule.map((item, idx) => (
          <div className="member-card" key={idx}>{item}</div>
        ))}
      </div>
    </div>
  );
};

export default GroupPage;
