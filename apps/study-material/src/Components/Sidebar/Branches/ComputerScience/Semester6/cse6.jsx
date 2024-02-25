import React from 'react';
import './semester.css';
import { Link } from 'react-router-dom';

function cse6 () {
    return (
        <div className="big-wrapper">
            <Link to="https://example.com" className="small-wrapper">
                <h3>Machine Learning</h3>
            </Link>
            <Link to="https://example.com" className="small-wrapper">
                <h3>Computer Craphics</h3>
            </Link>
            <Link to="https://example.com" className="small-wrapper">
                <h3>Compiler Design</h3>
            </Link>
            <Link to="https://example.com" className="small-wrapper">
                <h3>Cyber Security</h3>
            </Link>
            <Link to="https://example.com" className="small-wrapper">
                <h3>Elective Subject</h3>
            </Link>
        </div>
    );
}

export default cse6;