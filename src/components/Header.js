import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header>
      <div className="container">
        <Link to="/index.html" className="logo-link">
          <img className="logo" src="images/logo.svg" height="110" alt="Logo" />
        </Link>
        <nav className="main-menu clearfix">
          <h2 className="hidden">Головне меню</h2>
          <ul>
            <li className="menu-item">
              <Link to="/index.html">Головна</Link>
            </li>
            <li className="menu-item">
              <Link to="/about.html">Про нас</Link>
            </li>
            <li className="menu-item">
              <Link to="/rooms.html">Кімнати</Link>
            </li>
            <li className="menu-item">
              <Link to="/facilities.html">Послуги</Link>
            </li>
            <li className="menu-item">
              <Link to="/gallery.html">Галерея</Link>
            </li>
            <li className="menu-item">
              <Link to="/contact.html">Контакти</Link>
            </li>
          </ul>
        </nav>
        <div id="menu-toggle">
          <div className="bar first"></div>
          <div className="bar second"></div>
          <div className="bar third"></div>
        </div>
      </div>
      <nav id="mobile-menu">
        <h2 className="hidden">Mobile Navigation Menu</h2>
        <ul>
          <li className="mobile-menu-item">
            <Link className="menu-item" to="/index.html">Головна</Link>
          </li>
          <li className="mobile-menu-item">
            <Link className="menu-item" to="/about.html">Про нас</Link>
          </li>
          <li className="mobile-menu-item">
            <Link className="menu-item" to="/rooms.html">Кімнати</Link>
          </li>
          <li className="mobile-menu-item">
            <Link className="menu-item" to="/facilities.html">Послуги</Link>
          </li>
          <li className="mobile-menu-item">
            <Link className="menu-item" to="/gallery.html">Галерея</Link>
          </li>
          <li className="mobile-menu-item">
            <Link className="menu-item" to="/contact.html">Контакти</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;