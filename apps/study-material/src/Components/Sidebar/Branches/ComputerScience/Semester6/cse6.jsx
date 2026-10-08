import React from 'react';
//import './semester.css';
import { Link } from 'react-router-dom';

function cse6() {
    return (
        <div className="big-wrapper">
            <Link to="https://drive.google.com/drive/folders/1znPHJOgjU5DtVolDIr8_9sjR_Hvq6AvB?usp=sharing" className="small-wrapper">
                <h3>Machine Learning</h3>
            </Link>
            <Link to="https://drive.google.com/drive/folders/1FScR_JyGAomnQW3W201aTLQU-eY4maw-?usp=sharing" className="small-wrapper">
                <h3>Computer Craphics</h3>
            </Link>
            <Link to="https://drive.google.com/drive/folders/1O7-6EO7AXn12lzMoOvDmKiD6prVZlEtq?usp=sharing" className="small-wrapper">
                <h3>Compiler Design</h3>
            </Link>
            <Link to="https://drive.google.com/drive/folders/1c_72Ow3nYazZZMwhtYnGjl-jxi0JE0et?usp=sharing" className="small-wrapper">
                <h3>Cyber Security</h3>
            </Link>
            <Link to="https://example.com" className="small-wrapper">
                <h3>Elective Subject</h3>
            </Link>
        </div>
    );
}

export default cse6;
