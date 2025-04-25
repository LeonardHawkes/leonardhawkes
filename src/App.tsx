import React from 'react';
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Nav from './components/Nav';
import StarBackground from './components/StarBackground';
// import DJEvents from './pages/DJEvents';
// import Blog from './pages/Blog';
import Footer from './components/Footer';
import './App.css';

const App = () => {
  return (
    <Router>
      <div id='wrapper' className='fade-in'>
        <StarBackground />

        <Nav />

        <Routes>
          <Route path='/' element={<Home />} />
          {/* <Route path='/dj-events' element={<DJEvents />} />
          <Route path='/blog' element={<Blog />} /> */}
        </Routes>

        <Footer />
      </div>

    </Router>
  );
}

export default App;
