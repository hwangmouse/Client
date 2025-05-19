// SchedulePage.jsx
import React, {useState} from "react";
import Header from "./Header";
import "./SchedulePage.css";

const SchedulePage = () => {
const currentUser = "user1"; // 로그인한 사용자 (mock)
  //mock data
  const [mySchedule, setMySchedule] = useState([
    {
      groupName: "AI Study Group",
      schedule: ["05/12 (Mon) 10:00 - Intro to AI"]
    },
    {
      groupName: "Data Science Club",
      schedule: ["05/17 (Mon) 15:00 - Presentation"]
    }
  ]);
  // 그룹별로 나뉜 그룹 스케줄
  const [groupSchedules, setGroupSchedules] = useState([
    {
      groupName: "AI Study Group",
      creatorId: "user1", // 본인이 생성한 그룹
      schedule: [
        "05/12 (Mon) 10:00 - Intro to AI",
        "05/17 (Mon) 14:00 - ML Workshop"
      ]
    },
    {
      groupName: "Data Science Club",
      creatorId: "admin", // 다른 사람이 만든 그룹
      schedule: [
        "05/30 (Fri) 15:00 - Presentation",
        "06/01 (Sat) 10:00 - Kaggle Sprint"
      ]
    }
  ]);

  const [editingGroupName, setEditingGroupName] = useState(null);
  const [newItemText, setNewItemText] = useState("");
  const [editingIndex, setEditingIndex] = useState(null);
  const [editInput, setEditInput] = useState("");
  const [showGroupPicker, setShowGroupPicker] = useState(false);
  const [selectedGroupItem, setSelectedGroupItem] = useState("");
  
  const handleAddItem = (groupName) => {
    if (!newItemText.trim()) return;

    setGroupSchedules(prev =>
      prev.map(group =>
        group.groupName === groupName
          ? { ...group, schedule: [...group.schedule, newItemText] }
          : group
      )
    );
    setNewItemText("");
  };

  const handleDeleteItem = (groupName, index) => {
    setGroupSchedules(prev =>
      prev.map(group =>
        group.groupName === groupName
          ? { ...group, schedule: group.schedule.filter((_, i) => i !== index) }
          : group
      )
    );
  };

  const handleUpdateItem = (groupName, index) => {
    if (!editInput.trim()) return;
    setGroupSchedules(prev =>
      prev.map(group =>
        group.groupName === groupName
          ? {
              ...group,
              schedule: group.schedule.map((item, i) =>
                i === index ? editInput : item
              )
            }
          : group
      )
    );
    setEditingIndex(null);
    setEditInput("");
  };

  
  return (
    <div>
      <div className="schedule-container">
        <div className="schedule-box my-schedule">
          <div className="schedule-label">My Schedule</div>
          <div className="schedule-list">
            {mySchedule.length === 0 ? (
              <p>No schedule assigned.</p>
            ) : (
              mySchedule.map((group, idx) => (
                <div key={idx} className="group-block">
                  <div className="group-header">
                    <h4 className="group-name my-group-label">{group.groupName}</h4>
                  </div>
                  {group.schedule.map((item, i) => (
                    <div key={i} className="schedule-item">
                      {item}
                      {showGroupPicker && (
                        <button
                          className="delete-button"
                          onClick={() => {
                            const updated = [...mySchedule];
                            updated[idx].schedule.splice(i, 1);
                            if (updated[idx].schedule.length === 0) {
                              updated.splice(idx, 1); // 일정 다 지워지면 그룹도 삭제
                            }
                            setMySchedule(updated);
                          }}
                        >
                          🗑
                        </button>
                      )}
                    </div>
                  ))}
                </div>
              ))
            )}
          </div>

          {/* 🔽 그룹 스케줄 중 선택해서 추가하는 UI */}
          {showGroupPicker && (
            <div className="schedule-add-row">
              <select
                value={selectedGroupItem}
                onChange={(e) => setSelectedGroupItem(e.target.value)}
              >
                <option value="">그룹 일정 선택</option>
                {groupSchedules.flatMap(group =>
                  group.schedule.map((item, i) => (
                    <option key={`${group.groupName}-${i}`} value={item}>
                      [{group.groupName}] {item}
                    </option>
                  ))
                )}
              </select>
              <button
                onClick={() => {
                  if (selectedGroupItem && !mySchedule.some(group => group.schedule.includes(selectedGroupItem))) {
                    const matchedGroup = groupSchedules.find(group =>
                      group.schedule.includes(selectedGroupItem)
                    );
                    if (!matchedGroup) return;

                    setMySchedule(prev => {
                      const existingGroup = prev.find(g => g.groupName === matchedGroup.groupName);
                      if (existingGroup) {
                        return prev.map(g =>
                          g.groupName === matchedGroup.groupName
                            ? { ...g, schedule: [...g.schedule, selectedGroupItem] }
                            : g
                        );
                      } else {
                        return [...prev, { groupName: matchedGroup.groupName, schedule: [selectedGroupItem] }];
                      }
                    });
                    setSelectedGroupItem("");
                  }
                }}
              >
                ➕ 추가
              </button>
            </div>
          )}

          <button
            className="add-button-white"
            onClick={() => {
              setShowGroupPicker(!showGroupPicker);
              setSelectedGroupItem(""); // 선택값 초기화
            }}
          >
            ✏️
          </button>
        </div>



        <div className="schedule-box group-schedule">
          <div className="schedule-label group">Group Schedule</div>
          <div className="schedule-list">
            {groupSchedules.length === 0 ? (
              <p>No group schedules.</p>
            ) : (
              groupSchedules.map((group, idx) => (
                <div key={idx} className="group-block">
                  <div className="group-header">
                  <h4 className="group-name">{group.groupName}</h4>
                  {group.creatorId === currentUser && (
                    <button className="edit-button" onClick={() =>
                      setEditingGroupName(editingGroupName === group.groupName ? null : group.groupName)
                    }>
                      ✏️ 편집
                    </button>
                  )}
                  </div>
                  {group.schedule.map((item, i) => (
                  <div key={i} className="schedule-item">
                    {editingGroupName === group.groupName && editingIndex === i ? (
                      <>
                        <input
                          value={editInput}
                          onChange={(e) => setEditInput(e.target.value)}
                          className="schedule-edit-input"
                          placeholder="수정할 일정"
                        />
                        <button onClick={() => handleUpdateItem(group.groupName, i)}>✅</button>
                        <button onClick={() => setEditingIndex(null)}>❌</button>
                      </>
                    ) : (
                      <>
                        {item}
                        {editingGroupName === group.groupName && (
                          <>
                            <button onClick={() => {
                              setEditingIndex(i);
                              setEditInput(item);
                            }}>✏️</button>
                            <button onClick={() => handleDeleteItem(group.groupName, i)}>🗑</button>
                          </>
                        )}
                      </>
                    )}
                  </div>
                ))}

                {/* 일정 추가 입력창 */}
                {editingGroupName === group.groupName && (
                  <div className="schedule-add-row">
                    <input
                      value={newItemText}
                      onChange={(e) => setNewItemText(e.target.value)}
                      placeholder="새 일정 입력"
                    />
                    <button onClick={() => handleAddItem(group.groupName)}>➕ 추가</button>
                  </div>
                )}
              </div>
            )))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SchedulePage;