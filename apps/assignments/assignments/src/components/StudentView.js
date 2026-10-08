import React from 'react';
import { Document, Page } from 'react-pdf';
import samplePDF from './assets/sample.pdf';
import './styles/studentView.css';

const StudentView = () => {
    const pageNumber = 1;

    const handleLoadError = (error) => {
        console.error('Failed to load PDF file:', error);
        // Handle the error here, e.g., display a message to the user
    };

    return (
        <div className="pdf-container">
            <div className="upload-box">
                <h3 style={{fontWeight: 'bold'}}>Upload Assignment</h3>
                {/* <Document file={samplePDF} onLoadError={handleLoadError}>
                    <Page pageNumber={pageNumber} />
                </Document> */}
                <br />
                {/* Upload Assignment button */}
                <a href="https://edconnect-documents.vercel.app/" className="upload-link">
                    <button className="upload-button">Upload Assignment</button>
                </a>
            </div>
        </div>
    );
};

export default StudentView;
