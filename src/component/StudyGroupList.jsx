import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./StudyGroupList.css";
import CreateGroupForm from "./CreateGroupForm";

const StudyGroupList = () => {
  const navigate = useNavigate();
  const [showForm, setShowForm] = useState(false);
  const [groups, setGroups] = useState([]);
  const [selectedTopic, setSelectedTopic] = useState("");

  const topicOptions = ["AI", "Web", "Backend", "Data Science"];

  useEffect(() => {
    const storedGroups = JSON.parse(localStorage.getItem("groups")) || [];
    setGroups(storedGroups);
  }, []);

  const handleCreateSubmit = (formData) => {
    const newGroup = {
      id: Date.now().toString(),
      topic: formData.topic,
      subTopic: formData.subTopic || "",
      name: formData.groupName,
      members: 1,
      capacity: Number(formData.memberLimit),
      mode: formData.mode,
      memberList: ["you"],
      joinRequests: [],
      announcements: [],
      schedule: [],
    };

    const updatedGroups = [...groups, newGroup];
    localStorage.setItem("groups", JSON.stringify(updatedGroups));
    setGroups(updatedGroups);
    setShowForm(false);
    navigate(`/group/${newGroup.id}`);
  };

  const handleJoin = (groupId) => {
    alert(`Join 요청이 전송되었습니다.`);
  };

  const filteredGroups = groups.filter((group) => {
    return !selectedTopic || group.topic === selectedTopic;
  });

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

      <div className="filter-container">
        <select
          className="filter-select"
          value={selectedTopic}
          onChange={(e) => setSelectedTopic(e.target.value)}
        >
          <option value="">Select Topic</option>
          {topicOptions.map((topic) => (
            <option key={topic} value={topic}>{topic}</option>
          ))}
        </select>
      </div>

      {/* ✅ 테이블 기반으로 구조 변경 */}
      <div className="group-box">
        <table className="group-table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Topic</th>
              <th>SubTopic</th>
              <th>Mode</th>
              <th>Member</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {filteredGroups.map((group, index) => (
              <tr key={index}>
                <td>{group.id}</td>
                <td>{group.topic}</td>
                <td>{group.subTopic || "-"}</td>
                <td>{group.mode}</td>
                <td>{group.members}/{group.capacity || "-"}</td>
                <td>
                  <button
                    className="join-button"
                    onClick={() => handleJoin(group.id)}
                  >
                    Join
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default StudyGroupList;
