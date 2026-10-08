// client/src/AdmitCard.js
import React from "react";

const AdmitCard = ({ userData }) => {
  return (
    <div className="admit-card">
      <h2>Admit Card</h2>
      <p><strong>Name:</strong> {userData.name}</p>
      <p><strong>Email:</strong> {userData.email}</p>
      <p><strong>Date of Birth:</strong> {userData.dateOfBirth}</p>
      {/* Add more details as needed */}
      <div className="signature">
        {/* Your signature image or any other signature representation */}
      </div>
    </div>
  );
};

export default AdmitCard;
