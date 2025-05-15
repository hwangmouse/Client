// CommunityPage.js
import React from "react";
import Header from "../Header/Header";
import "./CommunityPage.css";

const CommunityPage = () => {
  return (
    <div>
      <Header />
      <div className="community-container">
        <h2 className="community-title">Community</h2>

        <div className="community-search">
          <input
            type="text"
            className="community-search-input"
            placeholder="Search..."
          />
          <button className="community-search-button">Search</button>
        </div>

        <div className="community-table-wrapper">
          <table className="community-table">
            <thead>
              <tr>
                <th>No</th>
                <th>Title</th>
                <th>Created at.</th>
              </tr>
            </thead>
            <tbody>
              <tr><td colSpan="3" style={{ height: "350px" }}></td></tr>
            </tbody>
          </table>
          
          <div className="pagination">
            <button>{"<"}</button>
            <span>1</span>
            <button>{">"}</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CommunityPage;
