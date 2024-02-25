import React from 'react';
import './branches.css';
import { Link } from 'react-router-dom';

export default function Mechanical() {
  return (
    <div className="big-wrapper">
      <div className="small-wrapper">
        <h3><Link to="">Semester 1</Link></h3>
      </div>
      <div className="small-wrapper">
        <h3><Link to="">Semester 2</Link></h3>
      </div>
      <div className="small-wrapper">
        <h3><Link to="">Semester 3</Link></h3>
      </div>
      <div className="small-wrapper">
        <h3><Link to="">Semester 4</Link></h3>
      </div>
      <div className="small-wrapper">
        <h3><Link to="">Semester 5</Link></h3>
      </div>
      <div className="small-wrapper">
        <h3><Link to="/cse-6">Semester 6</Link></h3>
      </div>
      <div className="small-wrapper">
        <h3><Link to="">Semester 7</Link></h3>
      </div>
      <div className="small-wrapper">
        <h3><Link to="">Semester 8</Link></h3>
      </div>
    </div>
  );
}
