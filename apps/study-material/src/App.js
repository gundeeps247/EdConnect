import React from 'react';
import Sidebar from './Components/Sidebar/Sidebar';
import Mechanical from './Components/Sidebar/Branches/mechanical';
import Civil from './Components/Sidebar/Branches/civil';
import Electrical from './Components/Sidebar/Branches/electrical';
import ComputerScience from './Components/Sidebar/Branches/computerscience';
import InformationTechnology from './Components/Sidebar/Branches/it';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="*" element={
            <>
              <Sidebar />
              <Routes>
              <Route path="/mechanical" element={<Mechanical/>} />
              <Route path="/civil" element={<Civil />} />
              <Route path="/electrical" element={<Electrical />} />
              <Route path="/computer-science" element={<ComputerScience />} />
              <Route path="/information-technology" element={<InformationTechnology />} />
              </Routes>
            </>
          } />
        </Routes>
      </Router>
    </div>
  );
}

export default App;