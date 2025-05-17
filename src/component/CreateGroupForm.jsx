// src/components/CreateGroupForm.js
import React, { useState } from "react";
import "./StudyGroupList.css";

const CreateGroupForm = ({ onSubmit, onClose }) => {
  const [formData, setFormData] = useState({
    topic: "",
    groupName: "",
    memberLimit: "",
    mode: "Online",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
    setFormData({ topic: "", groupName: "", memberLimit: "", mode: "Online" });
    onClose();
  };

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <form className="create-form" onSubmit={handleSubmit}>
          <h2>Create Group</h2>
          <input
            type="text"
            name="topic"
            placeholder="Topic"
            value={formData.topic}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="groupName"
            placeholder="Group Name"
            value={formData.groupName}
            onChange={handleChange}
            required
          />
          <input
            type="number"
            name="memberLimit"
            placeholder="Member Limit"
            value={formData.memberLimit}
            onChange={handleChange}
            required
            min="1"
          />
          <select name="mode" value={formData.mode} onChange={handleChange}>
            <option value="Online">Online</option>
            <option value="Offline">Offline</option>
          </select>
          <div className="modal-buttons">
            <button type="submit">create</button>
            <button type="button" className="cancel-button" onClick={onClose}>
              cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateGroupForm;
