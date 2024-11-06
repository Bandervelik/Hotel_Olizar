import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Modal from './Modal'; 

const Navbar = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);
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
                <li className="menu-item"><button onClick={openModal}>Увійти / Зареєструватися</button></li>
            </ul>
            {isModalOpen && <Modal closeModal={closeModal} />}
        </nav>
    );
};

export default Navbar;
