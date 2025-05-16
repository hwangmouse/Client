// src/App.jsx
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

import Header from './component/Header';
import HomePage from './component/HomePage';
import LoginForm from './component/LoginForm';
import StudyGroupList from './component/StudyGroupList';
import SchedulePage from './component/SchedulePage';
import CommunityPage from './component/CommunityPage';
import CommunityDetail from './component/CommunityDetail';
import SignupForm from './component/SignupForm';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleLogout = () => {
    setIsAuthenticated(false);
  }
  return (
    <Router>
      <div style={{ width: '100vw', height: '100vh', margin: 0, padding: 0 }}>
        <Header isAuthenticated={isAuthenticated} onLogout={handleLogout}/>
        <Routes>
          <Route path="/" element={<HomePage/>} />
          <Route path="/signup" element={<SignupForm/>}/>
          <Route path="/login" element={<LoginForm onLogin={() => setIsAuthenticated(true)} />} />
          <Route path="/studygroup" element={isAuthenticated? <StudyGroupList /> : <Navigate to="/login" replace />} />
          <Route path="/schedule" element={isAuthenticated? <SchedulePage /> : <Navigate to="/login" replace />} />
          <Route path="/community" element={isAuthenticated? <CommunityPage /> : <Navigate to="/login" replace />} />
          <Route path="/community/:id" element={<CommunityDetail />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
