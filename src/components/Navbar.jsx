import React from 'react';

const Navbar = () => {
    return (
        <nav className="main-menu clearfix">
            <h2 className="hidden">Головне меню</h2>
            <ul>
                <li className="menu-item"><a href="index.html">Головна</a></li>
                <li className="menu-item"><a href="about.html">Про нас</a></li>
                <li className="menu-item"><a href="rooms.html">Кімнати</a></li>
                <li className="menu-item"><a href="facilities.html">Послуги</a></li>
                <li className="menu-item"><a href="gallery.html">Галерея</a></li>
                <li className="menu-item"><a href="contact.html">Контакти</a></li>
            </ul>
        </nav>
    );
};

export default Navbar;
