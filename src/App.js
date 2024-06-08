
import './App.css';
import Home from './page/home'; 
import{ BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Profile from './page/profile';
import Portfolio from './page/portofolio';
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/portfolio" element={<Portfolio />} />
      </Routes>
    </Router>
  );
}

export default App;
