import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
      <ul>
        <Link to="/">
          <li>Home</li>
        </Link>

        <Link to="/mechanical">
          <li>Mechanical</li>
        </Link>

        <Link to="/civil">
          <li>Civil</li>
        </Link>

        <Link to="/electrical">
          <li>Electrical</li>
        </Link>

        <Link to="/computer-science">
          <li>Computer Science</li>
        </Link>

        <Link to="/information-technology">
          <li>Information Technology</li>
        </Link>

        {/* <Link to="/attendance">
          <li>Attendance</li>
        </Link>

        <a href="https://curacare.vercel.app/" target="_blank" rel="noopener noreferrer">
          <li>Communicate</li>
        </a>

        <Link to="/my-account">
          <li>My Account</li>
        </Link>

        <Link to="/settings">
          <li>Settings</li>
        </Link>

        <Link to="/change-password">
          <li>Change Password</li>
        </Link>

        <Link to="/logout">
          <li>Logout</li>
        </Link>
        Add more links as needed */}
      </ul>
    </nav >
  );
}

export default Navbar;
