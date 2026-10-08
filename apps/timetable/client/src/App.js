import React from 'react';
import './App.css';
import { BrowserRouter as Router } from 'react-router-dom'
import Navbar from './components/Navbar.jsx'

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <div className="container">
          <h1 className="page-heading">Timetable</h1>
          <table className="table">
            <thead>
              <tr>
                <th>Day</th>
                <th>Time</th>
                <th>Period 1</th>
                <th>Period 2</th>
                <th>Period 3</th>
                <th>Period 4</th>
                <th>Period 5</th>
                <th>Period 6</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Monday</td>
                <td>9:00 AM - 10:00 AM</td>
                <td> Computer Graphics</td>
                <td>Physics</td>
                <td>English</td>
                <td>History</td>
                <td>Chemistry</td>
                <td>Machine Learning</td>
              </tr>
              <tr>
                <td>Tuesday</td>
                <td>10:00 AM - 11:00 AM</td>
                <td>English</td>
                <td>Chemistry</td>
                <td>Computer Graphics</td>
                <td>Machine Learning</td>
                <td>Physics</td>
                <td>History</td>
              </tr>
              <tr>
                <td>Wednesday</td>
                <td>11:00 AM - 12:00 PM</td>
                <td>Physics</td>
                <td>History</td>
                <td>Machine Learning</td>
                <td>English</td>
                <td>Computer Graphics</td>
                <td>Chemistry</td>
              </tr>
              <tr>
                <td>Thursday</td>
                <td>1:00 PM - 2:00 PM</td>
                <td>History</td>
                <td>Chemistry</td>
                <td>Physics</td>
                <td>Computer Graphicss</td>
                <td>English</td>
                <td>Machine Learning</td>
              </tr>
              <tr>
                <td>Friday</td>
                <td>2:00 PM - 3:00 PM</td>
                <td>Machine Learning</td>
                <td>History</td>
                <td>English</td>
                <td>Computer Graphics</td>
                <td>Chemistry</td>
                <td>Physics</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </Router>
  );
}

export default App;
