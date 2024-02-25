import React from 'react';
import Sidebar from './Components/Sidebar/Sidebar';
import BranchTemplate from './Components/Branch';
import CSc6 from './Components/Sidebar/Branches/ComputerScience/Semester6/cse6';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './Components/Sidebar/Sidebar.css'
import Navbar from './Components/Navbar/Navbar';

function App() {
  return (
    <Router className="App">
      <Navbar />
      <Sidebar />

      <Routes>
        <Route path="/mechanical" element={<BranchTemplate branch="mechanical" linkSuffix="mech" />} />
        <Route path="/civil" element={<BranchTemplate branch="civil" linkSuffix="civi" />} />
        <Route path="/electrical" element={<BranchTemplate branch="electrical" linkSuffix="elec" />} />
        <Route path="/computer-science" element={<BranchTemplate branch="computer-sciene" linkSuffix="cse" />} />
        <Route path="/computer-science/:id" element={<CSc6 />} />
        <Route path="/information-technology" element={<BranchTemplate branch="information-technology" linkSuffix="it" />} />
      </Routes>

    </Router>
  );
}

export default App;
