import React, { useState } from "react";
import Header from "./Header";
import { useParams, Link } from "react-router-dom";
import './CommunityDetail.css';

const CommunityDetail = () => {
  const { id } = useParams();

  // 임시로 데이터 샘플 넣어놓음
  const [posts, setPosts] = useState([
    { id: 1, title: "test1", content: "content", createdAt: "2025-00-00" },
    { id: 2, title: "test2", content:"content", createdAt: "2025-00-00" }
  ]);
  const post = posts.find(p => p.id === Number(id));

  return (
    <div>
      <div className="community-container">
        <h2 className="community-title">Community</h2>

        <div className="posts-table-wrapper">
          <div style={{padding: '2rem'}}>
            <div className="title">
              {post.title}
            </div>
            <div className="createdAt">
              Created at. {post.createdAt}
            </div>
            <hr />
            <div className="content">
              {post.content}
            </div>
          </div>
        </div>
        <div className="back">
          <Link to={'/community/'}><button>{"back"}</button></Link>
        </div>
      </div>
    </div>
  );
};

export default CommunityDetail;