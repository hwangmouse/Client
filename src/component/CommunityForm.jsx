import React, { useState } from "react";
import './CommunityForm.css';

const CommunityForm = ({ onSubmit, onCancel }) => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  return (
    <div className="modal-overlay">
        <div className="modal-content">
            <form className="create-form" onSubmit={e => { e.preventDefault(); onSubmit({ title, content }); }}>
                <h2>Create Post</h2>
                <input 
                    type="text"
                    value={title} 
                    onChange={e => setTitle(e.target.value)} 
                    placeholder="Title"
                    required />
                <textarea 
                    value={content} 
                    onChange={e => setContent(e.target.value)} 
                    placeholder="Content"
                    required />
                <button className="submit" type="submit">등록</button>
                <button className="cancel" type="button" onClick={onCancel}>취소</button>
            </form>
        </div>
    </div>
  );
};

export default CommunityForm;