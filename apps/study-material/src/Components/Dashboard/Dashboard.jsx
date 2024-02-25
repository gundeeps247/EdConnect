import React from 'react';
import './Dashboard.css';

function Dashboard() {
  return (
        <div className="big-wrapper">
          <div className="small-wrapper">
            <Link to=''>
              <h3>Semester 1</h3>
            </Link>
          </div>
          <div className="small-wrapper">
            <Link to=''>
              <h3>Semester 2</h3>
            </Link>
          </div>
          <div className="small-wrapper">
            <Link to=''>
              <h3>Semester 3</h3>
            </Link>
          </div>
          <div className="small-wrapper">
            <Link to=''>
              <h3>Semester 4</h3>
            </Link>
          </div>
          <div className="small-wrapper">
            <Link to=''>
              <h3>Semester 5</h3>
            </Link>
          </div>
          <div className="small-wrapper">
            <Link to=''>
              <h3>Semester 6</h3>
            </Link>
          </div>
          <div className="small-wrapper">
            <Link to=''>
              <h3>Semester 7</h3>
            </Link>
            <div className="small-wrapper">
              <Link to=''>
                <h3>Semester 8</h3>
              </Link>
            </div>
          </div>
        </div>
  );
}

export default Dashboard;