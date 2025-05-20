import React, { useState, useRef, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import "./GroupPage.css";

const GroupPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [group, setGroup] = useState(null);
  const [activeTab, setActiveTab] = useState("info");

  const nameRef = useRef(null);
  const topicRef = useRef(null);
  const [shrinkTitle, setShrinkTitle] = useState(false);
  const [shrinkTopic, setShrinkTopic] = useState(false);

  // ✅ 그룹 정보 로드
  useEffect(() => {
    const storedGroups = JSON.parse(localStorage.getItem("groups")) || [];
    const foundGroup = storedGroups.find((g) => g.id === id);

    if (!foundGroup) {
      alert("그룹 정보를 찾을 수 없습니다.");
      navigate("/studygroup");
    } else {
      setGroup(foundGroup);
    }
  }, [id, navigate]);

  // ✅ 제목 줄이기 처리
  useEffect(() => {
    if (nameRef.current && nameRef.current.scrollWidth > nameRef.current.clientWidth) {
      setShrinkTitle(true);
    }
    if (topicRef.current && topicRef.current.scrollWidth > topicRef.current.clientWidth) {
      setShrinkTopic(true);
    }
  }, [group]);

  const handleApprove = (userId) => {
    alert(`${userId} approved`);
  };

  const handleReject = (userId) => {
    alert(`${userId} rejected`);
  };

  if (!group) return <div>Loading...</div>;

  return (
    <div className="group-page-wrapper large">
      <div className="groupPage-header">
        <h1 ref={nameRef} className={shrinkTitle ? "shrink" : ""}>{group.name}</h1>
        <p ref={topicRef} className={shrinkTopic ? "shrink" : ""}>Topic: {group.topic}</p>
        {group.subTopic && (
          <p className="sub-topic-line">SubTopic: {group.subTopic}</p>
        )}
      </div>

      <div className="tab-buttons">
        <button className={activeTab === "info" ? "active" : ""} onClick={() => setActiveTab("info")}>Info</button>
        <button className={activeTab === "members" ? "active" : ""} onClick={() => setActiveTab("members")}>Members</button>
        <button className={activeTab === "requests" ? "active" : ""} onClick={() => setActiveTab("requests")}>Requests</button>
        <button className={activeTab === "announcements" ? "active" : ""} onClick={() => setActiveTab("announcements")}>Announcements</button>
        <button className={activeTab === "schedule" ? "active" : ""} onClick={() => setActiveTab("schedule")}>Schedule</button>
      </div>

      <div className={`tab-content ${activeTab === "info" ? "active" : ""}`}>
        <p>This group is focused on <strong>{group.topic}</strong>.</p>

        <div className="group-info-box">
          <div className="group-info-item">
            <strong>Mode</strong>: {group.mode}
          </div>
          <div className="group-info-item">
            <strong>Member limit</strong>: {group.capacity}
          </div>
        </div>
      </div>

      <div className={`tab-content ${activeTab === "members" ? "active" : ""}`}>
        {group.memberList?.map((user) => (
          <div className="member-card" key={user}>{user}</div>
        ))}
      </div>

      <div className={`tab-content ${activeTab === "requests" ? "active" : ""}`}>
        {group.joinRequests?.length === 0 ? (
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
        {group.announcements?.map((note, idx) => (
          <div className="member-card" key={idx}>{note}</div>
        ))}
      </div>

      <div className={`tab-content ${activeTab === "schedule" ? "active" : ""}`}>
        {group.schedule?.map((item, idx) => (
          <div className="member-card" key={idx}>{item}</div>
        ))}
      </div>
    </div>
  );
};

export default GroupPage;
