import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="row">
          <div className="col-sm-4">
            <h3 className="subtitle"><strong>Корисні Посилання</strong></h3>
            <ul className="site-links">
              <li><Link to="/facilities.html">Послуги</Link></li>
              <li><Link to="/rooms.html">Кімнати</Link></li>
              <li><Link to="/about.html">Про нас</Link></li>
              <li><Link to="/about.html">Часті запитання</Link></li>
            </ul>
          </div>
          <div className="col-sm-4 text-center">
            <h3 className="subtitle wide">Готель <strong>"Olizar"</strong></h3>
            <div className="moon-divider small"></div>
            <p>
              <a href="https://www.google.com/maps/place/Свитовец/@48.2782093,24.1488759,16.75z/data=!4m6!3m5!1s0x4737122069e51fa7:0xa358a782cfc469ee!8m2!3d48.2780228!4d24.152123!16s%2Fg%2F11fy9n3gh0?hl=ru-UA&entry=ttu">
                Гуцульська Вулиця 3, Свидовець, 90630, Україна
              </a>
            </p>
            <p><a href="tel:+380 97 154 6438">+380 97 154 6438</a></p>
            <p><a href="mailto:olizar.mykhailo@student.uzhnu.edu.ua">olizar.mykhailo@student.uzhnu.edu.ua</a></p>
            <p><Link to="/index.html">http://olizar.com</Link></p>
            <div className="moon-divider small"></div>
            <div className="social-links"></div>
          </div>
          <div className="col-sm-4 text-center">
            <h3 className="subtitle"><strong>Наші Мережі</strong></h3>
            <a className="social-link" href="https://www.facebook.com/olizar.pp.ua"><i className="fa fa-facebook"></i></a>
            <div>
              <a className="social-link" href="https://www.google.com/maps/place/Свитовец/@48.2782093,24.1488759,16.75z/data=!4m6!3m5!1s0x4737122069e51fa7:0xa358a782cfc469ee!8m2!3d48.2780228!4d24.152123!16s%2Fg%2F11fy9n3gh0?hl=ru-UA&entry=ttu">
                <i className="fa fa-google"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="copyright-area">
        <div className="container">
          <p>2023 Olizar. Create by <a href="https://www.facebook.com/olizar.pp.ua">
            <img className="logo" src="images/Privew.svg" height="70" alt="Logo"/>
          </a></p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;