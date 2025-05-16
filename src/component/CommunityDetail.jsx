import React, { useState } from "react";
import Header from "./Header";
import { useParams, Link } from "react-router-dom";
import './CommunityDetail.css';

const CommunityDetail = () => {
  const { id } = useParams();

  // 임시로 데이터 샘플 넣어놓음
  const [posts, setPosts] = useState([
    { id: 1, title: "test1", createdAt: "2025-00-00" },
    { id: 2, title: "test2", createdAt: "2025-00-00" }
  ]);
  const post = posts.find(p => p.id === Number(id));

  return (
    <div>
      <div className="community-container">
        <h2 className="community-title">Community</h2>

        <div className="posts-table-wrapper">
          <table className="posts-table">
            <tbody>
              {post &&
              (
                <tr className="theadRole">
                  <td>{post.id}</td>
                  <td>{post.title}</td>
                  <td>{post.createdAt}</td>
                </tr>
              )}
                <tr>
                  <th style={{ height: "350px" }}>여기에 게시글 내용</th>  
                </tr>
            </tbody>
          </table>
        </div>
        <div className="back">
          <Link to={'/community/'}><button>{"back"}</button></Link>
        </div>
      </div>
    </div>
  );
};

export default CommunityDetail;