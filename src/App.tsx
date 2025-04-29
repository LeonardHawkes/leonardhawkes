import React, { useEffect } from 'react';
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import emailjs from '@emailjs/browser'
import Home from './pages/Home';
import Nav from './components/Nav';
// import DJEvents from './pages/DJEvents';
import Blog from './pages/Blog';
import Footer from './components/Footer';
import './App.css';

const App = () => {
  useEffect(() => {
    //Initialize EmailJS with your public key
    emailjs.init("K6j47qyf3_C62qXBU")
  }, []);
  
  return (
    <Router>
      <div className='app-container'>
        <Nav />

        <main className='content-container'>
          <Routes>
            <Route path='/' element={<Home />} />
            {/* <Route path='/dj-events' element={<DJEvents />} /> */}
            <Route path='/blog' element={<Blog />} /> 
          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
