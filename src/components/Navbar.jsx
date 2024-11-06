import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="main-menu clearfix">
            <h2 className="hidden">Головне меню</h2>
            <ul>
                <li className="menu-item"><Link to="/">Головна</Link></li>
                <li className="menu-item"><Link to="/about">Про нас</Link></li>
                <li className="menu-item"><Link to="/rooms">Кімнати</Link></li>
                <li className="menu-item"><Link to="/facilities">Послуги</Link></li>
                <li className="menu-item"><Link to="/gallery">Галерея</Link></li>
                <li className="menu-item"><Link to="/contact">Контакти</Link></li>
            </ul>
        </nav>
    );
};

export default Navbar;
