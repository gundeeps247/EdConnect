import React from 'react';
import Sidebar from './Components/Sidebar/Sidebar';
import BranchTemplate from './Components/Branch';
import CSc6 from './Components/Sidebar/Branches/ComputerScience/Semester6/cse6';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './Components/Sidebar/Sidebar.css'

function App() {
  return (
    <Router className="App">
      {/*<Sidebar />*/}
      <nav className='sidebar'>
        <ul>
          <li className='home'>
            <Link to={'/'} >Home</Link>
          </li>
          <li>
            <Link to="/mechanical">Mechanical</Link>
          </li>
          <li>
            <Link to="/civil">Civil</Link>
          </li>
          <li>
            <Link to="/electrical">Electrical</Link>
          </li>
          <li>
            <Link to="/computer-science">Computer Science</Link>
          </li>
          <li>
            <Link to="/information-technology">Information Technology</Link>
          </li>
        </ul>
      </nav>

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
