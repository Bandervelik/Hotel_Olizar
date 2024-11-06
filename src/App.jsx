import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header.jsx';
import Navbar from './components/Navbar.jsx';
import Home from './components/Home.jsx';
import About from './components/About.jsx';
import Rooms from './components/Rooms.jsx';
import Facilities from './components/Facilities.jsx';
import Gallery from './components/Gallery.jsx';
import Contact from './components/Contact.jsx';
import Footer from './components/Footer.jsx';
import './index.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/rooms" element={<Rooms />} />
          <Route path="/facilities" element={<Facilities />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
