import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import LandingPage from './Pages/LandingPage';
import ResumePage from './Pages/ResumePage';
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage/>}/>
        <Route path="/resume" element={<ResumePage/>}/>
      </Routes>
    </BrowserRouter>
    
  );
}

export default App;
