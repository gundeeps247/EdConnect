import React from 'react';
import TeacherDisplay from './components/TeacherDisplay';
import StudentView from './components/StudentView';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <div className="App">
          <TeacherDisplay />
          <StudentView />
        </div>
      </div>

    </Router>
  );
}

export default App;
