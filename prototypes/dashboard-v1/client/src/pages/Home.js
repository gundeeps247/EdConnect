// Home.js

import React from 'react';
import './Home.css';
import ProgressChart from '../components/ProgressChart'; // Import ProgressChart component
import Calendar from '../components/Calendar'; // Import Calendar component

const Home = () => {
  return (
    <div className="home-container">
      <div className="content-container">
        <div className="welcome-container">
          <div className="welcome-box">
            <h2>Welcome to College Dashboard</h2>
            <p>This is the home page of our college dashboard.</p>
          </div>
          <div className="calendar-container">
            <Calendar />
          </div>
        </div>
        <div className="boxes-container">
          <div className="box">
            <h3>Due Assignments</h3>
            <p>Due assignment details here...</p>
          </div>
          <div className="box">
            <h3>Attendance</h3>
            <p>Attendance details here...</p>
          </div>
        </div>
      </div>
      <div className="chart-container">
        <div className="box">
          <ProgressChart />
        </div>
      </div>
    </div>
  );
}

export default Home;
