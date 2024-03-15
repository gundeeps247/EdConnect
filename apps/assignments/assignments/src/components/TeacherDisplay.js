import React from 'react';
import './styles/teacherDisplay.css';

const TeacherDisplay = () => {
    // Existing assignment questions
    const assignmentQuestions = "Assignment questions go here.";

    // Additional assignment questions
    const additionalQuestions = `
        a) Justify the importance of Occam’s razor with respect to ID3 algorithm.<br>
        b) Implement ID3 for the given example with complete description at every step of the algorithm. Also Highlight the capabilities and limitations of decision tree classification.<br>
        c) Contrast the hypothesis space search in ID3 and candidate elimination algorithm.
    `;

    // Combined assignment questions
    const allQuestions = assignmentQuestions + "<br>" + additionalQuestions;

    const handleViewAssignment = () => {
        // Open a new window with a white color box containing assignment questions
        const newWindow = window.open('', '_blank', 'width=600,height=400');
        if (newWindow) {
            newWindow.document.body.style.backgroundColor = 'white';
            newWindow.document.body.innerHTML = `<div style="padding: 20px;">${allQuestions}</div>`;
        } else {
            console.error('Failed to open new window.');
        }
    };

    return (
        <div className="assignment-container">
            <h1 style={{fontWeight: 'bold'}}>Assignments</h1>
            <div className="assignment-box">
                <h3>View the assignment</h3>
                {/* Apply blue color to the button */}
                <button onClick={handleViewAssignment} className="assignment-button">View Assignment</button>
            </div>
        </div>
    );
};

export default TeacherDisplay;
