// Home.js

import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import './Home.css';
import ProgressChart from '../components/ProgressChart'; // Import ProgressChart component
import Calendar from '../components/Calendar'; // Import Calendar component
import AttendanceHistogram from '../components/AttendanceHistogram'; // Import AttendanceHistogram component
import CoursePieChart from '../components/CoursePieChart'; // Import CoursePieChart component

const Home = () => {
  // Dummy data for attendance histogram
  const attendanceData = [
    { name: 'Math', attendance: 80 },
    { name: 'Science', attendance: 90 },
    { name: 'History', attendance: 75 },
    // Add more courses as needed
  ];

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
            <Link to="/assignments"> {/* Link to the assignments page */}
              <h3>Due Assignments</h3>
              <p>Due assignment details here...</p>
            </Link>
          </div>
          <div className="box">
            <h3>Attendance</h3>
            <AttendanceHistogram data={attendanceData} />
          </div>
          <div className="box">
            <Link to="/courses"> {/* Link to the courses page */}
              <h3>Course Pie Chart</h3>
              <CoursePieChart courses={attendanceData} />
            </Link>
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
