import React from 'react';
//import './branches.css';
import { Link } from 'react-router-dom';

function ComputerScience() {
    return (
        <div className="big-wrapper">
            <div className="small-wrapper">
                <h3><Link to=""></Link>Semester 1</h3>
            </div>
            <div className="small-wrapper">
                <h3><Link to=""></Link>Semester 2</h3>
            </div>
            <div className="small-wrapper">
                <h3><Link to=""></Link>Semester 3</h3>
            </div>
            <div className="small-wrapper">
                <h3><Link to=""></Link>Semester 4</h3>
            </div>
            <div className="small-wrapper">
                <h3><Link to=""></Link>Semester 5</h3>
            </div>
            <div className="small-wrapper">
                <h3><Link to="/cse-6"></Link>Semester 6</h3>
            </div>
            <div className="small-wrapper">
                <h3><Link to=""></Link>Semester 7</h3>
            </div>
            <div className="small-wrapper">
                <h3><Link to=""></Link>Semester 8</h3>
            </div>
        </div>
    );
}

export default ComputerScience;
