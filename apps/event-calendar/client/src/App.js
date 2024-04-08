import React from "react";
import Modal from "react-modal";
import Calendar from "./Components/Calendar";
import { BrowserRouter as Router } from "react-router-dom";
import Navbar from "./Components/Navbar.jsx";

Modal.setAppElement("#root");
const App = () => {
  return (
    <Router>
      <div>
        <Navbar />
        <div className="App"><h1>...</h1><h3>...</h3><Calendar /></div>


      </div>
    </Router>
  );
};

export default App;
