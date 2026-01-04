import React, { useEffect } from 'react';
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import emailjs from '@emailjs/browser'
import Home from './pages/Home';
import Nav from './components/Nav';
import Blog from './pages/Blog';
import NlpLlmsFinancePost from './pages/BlogPost_NlpLlmsFinance';
import Snake from './pages/Snake';
import Footer from './components/Footer';
import { ThemeProvider } from './context/ThemeContext';
import './App.css';
import DJEvents from './pages/DJEvents';

const App = () => {
  useEffect(() => {
    //Initialize EmailJS with your public key
    emailjs.init("K6j47qyf3_C62qXBU")
  }, []);

  return (
    <ThemeProvider>
      <Router>
        <div className='app-container'>
          <Nav />

        <main className='content-container'>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/dj-events' element={<DJEvents />} />
            <Route path='/snake' element={<Snake />} />
            <Route path='/blog' element={<Blog />} />
            <Route path='/blog/nlp-llms-reshaping-finance' element={<NlpLlmsFinancePost />} />
          </Routes>
        </main>

        <Footer />
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;
