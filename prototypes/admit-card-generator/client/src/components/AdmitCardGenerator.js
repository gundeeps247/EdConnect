// client/src/components/AdmitCardGenerator.js
import React, { useState } from 'react';
import axios from 'axios';
import './AdmitCardGenerator.css'; // Import CSS file for styling

const AdmitCardGenerator = () => {
  const [studentId, setStudentId] = useState('');
  const [admitCard, setAdmitCard] = useState(null);
  const [error, setError] = useState('');

  const handleChange = (event) => {
    setStudentId(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault(); // Prevent the default form submission behavior
    try {
      const response = await axios.get(`/api/admit-card/${studentId}`);
      setAdmitCard(response.data);
      setError('');
    } catch (error) {
      setAdmitCard(null);
      setError('Student not found');
    }
  };

  return (
    <div className="admit-card-container">
      <div className="admit-card-background"></div>
      <div className="admit-card-content">
        <h1 className="heading">Generate Admit Card</h1>
        <form onSubmit={handleSubmit}>
          <div className="input-container">
            <input
              type="text"
              placeholder="Enter Student ID"
              value={studentId}
              onChange={handleChange}
            />
            <button type="submit">Generate Admit Card</button>
          </div>
        </form>
        {error && <p className="error-message">{error}</p>}
        {admitCard && (
          <div className="admit-card">
            <h3>Admit Card</h3>
            <p><strong>Name:</strong> {admitCard.name}</p>
            <p><strong>Roll Number:</strong> {admitCard.rollNumber}</p>
            {/* Display other admit card details */}
          </div>
        )}
      </div>
    </div>
  );
};

export default AdmitCardGenerator;
