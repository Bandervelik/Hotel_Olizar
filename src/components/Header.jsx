import React from 'react';

const Header = () => {
    return (
        <header>
            <div className="container">
                <a href="index.html" className="logo-link">
                    <img className="logo" src="images/logo.svg" height="110" alt="Logo" />
                </a>
                <Navbar />
                <div id="menu-toggle">
                    <div className="bar first"></div>
                    <div className="bar second"></div>
                    <div className="bar third"></div>
                </div>
            </div>
        </header>
    );
};

export default Header;
