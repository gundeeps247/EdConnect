// client/src/App.js
import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";
import html2canvas from 'html2canvas';
import { jsPDF } from "jspdf";

function App() {
  const [users, setUsers] = useState([]);
  const [email, setEmail] = useState('');
  const [userData, setUserData] = useState(null);
  const [error, setError] = useState('');
  const [admitCardPdf, setAdmitCardPdf] = useState(null);

  useEffect(() => {
    axios
      .get("http://localhost:5010/api/users")
      .then((response) => {
        setUsers(response.data);
      })
      .catch((error) => {
        console.error("Error fetching users:", error);
      });
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    const foundUser = users.find(user => user.email === email);
    if (foundUser) {
      setUserData(foundUser);
      setError('');
    } else {
      setError('User not found');
      setUserData(null);
    }
  }

  const generatePDF = (userData) => {
    const doc = new jsPDF();
    const canvas = document.createElement("canvas");
    const ctx = canvas.getContext("2d");
    
    // Set canvas dimensions
    canvas.width = 100; // Adjust as needed
    canvas.height = 100; // Adjust as needed
    
    // Set canvas background to transparent
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    const img = new Image();
    img.crossOrigin = "Anonymous";
    img.src = userData.pic;
    img.onload = function () {
      ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
      const imageData = canvas.toDataURL("image/jpeg");
      doc.setFontSize(12);
      doc.addImage(imageData, "JPEG", 10, 10, 50, 50);
      doc.text(`Name: ${userData.name}`, 70, 20);
      doc.text(`Email: ${userData.email}`, 70, 30);
      doc.text(`Role: ${userData.role}`, 70, 40);
      doc.text(`Date of Birth: ${userData.dateOfBirth}`, 70, 50);
      setAdmitCardPdf(doc.output('bloburl'));
      window.open(doc.output('bloburl'), '_blank');
    };
  };

  const handleDownload = () => {
    if (admitCardPdf) {
      const link = document.createElement('a');
      link.href = admitCardPdf;
      link.download = "admit-card.pdf";
      link.click();
    }
  };

  return (
    <div className="app-container">
      <h1 className="title">Search User</h1>
      <form onSubmit={handleSubmit} className="search-form">
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Enter user's email" className="email-input" />
        <button type="submit" className="search-button">Search</button>
      </form>
      {error && <p className="error">{error}</p>}
      {userData && (
        <div className="user-info">
          {/* <h2>User Found</h2> */}
          <img src={userData.pic} alt="User" className="user-image" />
          <p><strong>Name:</strong> {userData.name}</p>
          <p><strong>Email:</strong> {userData.email}</p>
          <p><strong>Role:</strong> {userData.role}</p>
          <p><strong>Date of Birth:</strong> {userData.dateOfBirth}</p>
          <div className="button-container">
            <button onClick={() => generatePDF(userData)} className="print-button" style={{ marginRight: '10px', backgroundColor: 'blue', color: 'white', padding: '5px 10px', border: 'none', borderRadius: '5px' }}>Print</button>
            <button onClick={handleDownload} className="download-button" style={{ backgroundColor: 'blue', color: 'white', padding: '5px 10px', border: 'none', borderRadius: '5px' }}>Download</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
