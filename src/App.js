
import './App.css';
import React from 'react';
import Home from './page/home'; 
import{ BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Profile from './page/profile';
import { keepThemes } from './utils/themes';
import { useEffect } from 'react';
import PortofolioProt from './page/portofolioproto';
function App() {
  useEffect(()=>{
    keepThemes()
  },[])
  return (
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/portofolio" element={<PortofolioProt />} />
      </Routes>
  );
}

export default App;
