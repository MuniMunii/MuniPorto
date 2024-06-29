
import './App.css';
import React from 'react';
import Home from './page/home'; 
import{ BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Profile from './page/profile';
import Portfolio from './page/portofolio';
import { keepThemes } from './utils/themes';
import { useEffect } from 'react';
function App() {
  useEffect(()=>{
    keepThemes()
  },[])
  return (
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/portfolio" element={<Portfolio />} />
      </Routes>
  );
}

export default App;
