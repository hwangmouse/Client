// src/App.jsx
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

import Header from './component/Header';
import HomePage from './component/HomePage';
import LoginForm from './component/LoginForm';
import StudyGroupList from './component/StudyGroupList';
import SchedulePage from './component/SchedulePage';
import CommunityPage from './component/CommunityPage';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return (
    <Router>
      <div style={{ width: '100vw', height: '100vh', margin: 0, padding: 0 }}>
        {isAuthenticated && <Header />}
        <Routes>
          <Route
            path="/"
            element={isAuthenticated ? <HomePage /> : <Navigate to="/login" replace />}
          />
          <Route path="/login" element={<LoginForm onLogin={() => setIsAuthenticated(true)} />} />
          <Route path="/studygroup" element={<StudyGroupList />} />
          <Route path="/schedule" element={<SchedulePage />} />
          <Route path="/community" element={<CommunityPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
