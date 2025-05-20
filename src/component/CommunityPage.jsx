// CommunityPage.js
import React, {useState} from "react";
import Header from "./Header";
import { Link } from 'react-router-dom';
import CommunityForm from "./CommunityForm";
import "./CommunityPage.css";

const CommunityPage = () => {
  //임시로 데이터 샘플 넣어놓음
  const [posts, setPosts] = useState([
    { id: 1, title: "test1", createdAt: "2025-00-00" },
    { id: 2, title: "test2", createdAt: "2025-00-00" }
  ]);

  const [showModal, setShowModal] = useState(false);

  const handleSubmit = (formData) => {
    // 서버랑 연결 로직 작성
    setShowModal(false);
  }

  return (
    <div>
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
              {posts.length === 0 ? (
                <tr><td colSpan="3" style={{ height: "350px" }}>게시글이 없습니다.</td></tr>
              ) : (
                posts.map((post, idx) => (
                  <tr key={post.id}>
                    <td>{idx+1}</td>
                    <td>
                    <Link to={`/community/${post.id}`}>{post.title}</Link>
                    </td>
                    <td>{post.createdAt}</td>
                  </tr>
                )
              ))
             }
            </tbody>
          </table>
          
          <div className="pagination">
            <button>{"<"}</button>
            <span>1</span>
            <button>{">"}</button>
          </div>

          <div className="post">
            <button onClick={()=> setShowModal(true)}>post</button>
          </div>
        </div>
      </div>
      {showModal && (
        <div className="modal-backdrop">
          <div className="modal">
            <CommunityForm
              onSubmit={handleSubmit}
              onCancel={()=>setShowModal(false)}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default CommunityPage;
