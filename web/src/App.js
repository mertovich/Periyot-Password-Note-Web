import React from 'react';
import NavBar from './components/NavBar';
import Home from './pages/Home';
import About from './pages/About';
import { Routes, Route } from 'react-router-dom'
import Features from './pages/Features';

const App = () => {
  return <div style={{ overflowX: 'hidden' }} >
    <NavBar />
    <Routes>
      <Route exact path='Periyot-Password-Note-Web/' element={<Home />}/>
      <Route path='Periyot-Password-Note-Web/About' element={<About />}/>
      <Route path='Periyot-Password-Note-Web/Features' element={<Features/>}/>
    </Routes> 
  </div>;
};

export default App;
