// SchedulePage.jsx
import React from "react";
import Header from "../Header/Header";
import "./SchedulePage.css";

const SchedulePage = () => {
  return (
    <div>
      <Header />
      <div className="schedule-container">
        <div className="schedule-box my-schedule">
          <div className="schedule-label">My Schedule</div>
          <button className="add-button-white">＋</button>
        </div>

        <div className="schedule-box group-schedule">
          <div className="schedule-label group">Group Schedule</div>
          <button className="add-button-purple">＋</button>
        </div>
      </div>
    </div>
  );
};

export default SchedulePage;