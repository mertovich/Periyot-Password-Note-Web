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
      <Route path='/' element={<Home />}/>
      <Route path='/About' element={<About />}/>
      <Route path='/Features' element={<Features/>}/>
    </Routes> 
  </div>;
};

export default App;
