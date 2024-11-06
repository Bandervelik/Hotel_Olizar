import React from 'react';

const Footer = () => {
    return (
        <footer>
            <div className="container">
                <div className="row">
                    <div className="col-sm-4">
                        <h3 className="subtitle"><strong>Корисні Посилання</strong></h3>
                        <ul className="site-links">
                            <li><a href="Facilities.jsx">Послуги</a></li>
                            <li><a href="Rooms.jsx">Кімнати</a></li>
                            <li><a href="About.jsx">Про нас</a></li>
                            <li><a href="About.jsx">Часті запитання</a></li>
                        </ul>
                    </div>
                    <div className="col-sm-4 text-center">
                        <h3 className="subtitle wide">Готель <strong>"Olizar"</strong></h3>
                        <p><a href="https://www.google.com/maps/place/Свитовец">Гуцульська Вулиця 3, Свидовець, 90630, Україна</a></p>
                        <p><a href="tel:+380971546438">+380 97 154 6438</a></p>
                        <p><a href="mailto:olizar.mykhailo@student.uzhnu.edu.ua">olizar.mykhailo@student.uzhnu.edu.ua</a></p>
                        <p><a href="Home.jsx">http://olizar.com</a></p>
                    </div>
                    <div className="col-sm-4 text-center">
                        <h3 className="subtitle"><strong>Наші Мережі</strong></h3>
                        <a className="social-link" href="https://www.facebook.com/olizar.pp.ua"><i className="fa fa-facebook"></i></a>
                        <a className="social-link" href="https://www.google.com/maps/place/Свитовец"><i className="fa fa-google"></i></a>
                    </div>
                </div>
            </div>
            <div className="copyright-area">
                <div className="container">
                    <p>2023 Olizar. Create by <a href="https://www.facebook.com/olizar.pp.ua"><img className="logo" src="images/Privew.svg" height="70" /></a></p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
