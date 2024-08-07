
import './App.css';
import React from 'react';
import Home from './page/home'; 
import{ BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Profile from './page/profile';
import { keepThemes,setThemes } from './utils/themes';
import { useEffect,useState,useSyncExternalStore } from 'react';
import PortofolioProt from './page/portofolioproto';
import ResumeComp from './page/resume';
import PageComp from './component/page';
function App() {
  const storedTheme=localStorage.getItem('theme') || 'dark-theme'
  const [lightMode, setLightMode] = useState(
    storedTheme==='light-theme'
  );
  console.log(localStorage.getItem("theme") === 'light-theme');
  
  function syncWithTheme() {
    // true
    setLightMode(localStorage.getItem("theme") === 'light-theme');
  }
  useEffect(() => {
    keepThemes()
    window.addEventListener("storage", syncWithTheme);
    return () => {
      window.removeEventListener("storage", syncWithTheme);
    };
  }, []);
  useEffect(() => {
    const currentTheme = lightMode ? "light-theme" : "dark-theme";
    document.documentElement.className = currentTheme;
    document.body.className = lightMode
      ? "bg-LightModeBody"
      : "bg-DarkModeBody";
  }, [lightMode]);
  return (
      <Routes>
        <Route path={`/`} element={<PageComp content={(props)=> <Home {...props}/>} lightMode={lightMode}/>} />
        <Route path={`/profile`} element={<PageComp content={(props)=> <Profile {...props}/>} lightMode={lightMode}/>} />
        <Route path={`/portofolio`} element={<PageComp content={(props)=> <PortofolioProt {...props}/>} lightMode={lightMode}/>} />
        <Route path={`/resume`} element={<PageComp content={(props)=> <ResumeComp {...props}/>} lightMode={lightMode}/>} />
      </Routes>
  );
}

export default App;