import React from 'react';
import Header from './components/Header.jsx';
import Navbar from './components/Navbar.jsx';
import Home from './components/Home.jsx';
import Footer from './components/Footer.jsx';
import './index.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Navbar />
      <Home />
      <Footer />
    </div>
  );
}

export default App;
