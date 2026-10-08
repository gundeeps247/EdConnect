// src/App.js
import React from 'react';
import AdmitCardGenerator from './components/AdmitCardGenerator'; // Import AdmitCardGenerator component
import './App.css'; // Import CSS file for styling

function App() {
  return (
    <div className="App">
      <h1 className="heading">College Management System</h1> {/* Add a class for styling */}
      <AdmitCardGenerator /> {/* Render the AdmitCardGenerator component */}
    </div>
  );
}

export default App;
