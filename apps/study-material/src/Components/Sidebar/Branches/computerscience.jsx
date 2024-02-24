import React from 'react';
import './branches.css';

function ComputerScience() {
    const handleRedirect = (link) => {
        window.location.href = link;
    };

    return (
        <div className="big-wrapper">
            <div className="small-wrapper" onClick={() => handleRedirect('https://example.com')}>
                <h3>Semester 1</h3>
            </div>
            <div className="small-wrapper" onClick={() => handleRedirect('https://example.com')}>
                <h3>Semester 2</h3>
            </div>
            <div className="small-wrapper" onClick={() => handleRedirect('https://example.com')}>
                <h3>Semester 3</h3>
            </div>
            <div className="small-wrapper" onClick={() => handleRedirect('https://example.com')}>
                <h3>Semester 4</h3>
            </div>
            <div className="small-wrapper" onClick={() => handleRedirect('https://example.com')}>
                <h3>Semester 5</h3>
            </div>
        </div>
    );
}

export default ComputerScience;