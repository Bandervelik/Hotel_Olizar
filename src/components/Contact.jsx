import React from 'react';
import Header from './Header.jsx';
import Navbar from './Navbar.jsx';
import Footer from './Footer.jsx';
import '../index.css';

const Contact = () => {
    return (
        <div className="loading">
            <section className="section-breadcrumb">
                <h2 className="title">Контакти</h2>        
            </section>
            <section className="section-style-2 section-contact-us">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="map-wrapper">
                                <div className="map">
                                    <iframe 
                                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3755.0595722582516!2d24.14703416594913!3d48.27922766646953!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4737122069e51fa7%3A0xa358a782cfc469ee!2z0KHQstC40YLQvtCy0LXRhg!5e0!3m2!1sru!2sua!4v1702147329872!5m2!1sru!2sua" 
                                        width="600" 
                                        height="450" 
                                        style={{ border: "0" }} 
                                        allowFullScreen 
                                        loading="lazy" 
                                        referrerPolicy="no-referrer-when-downgrade">
                                    </iframe>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <h3 className="title">Готель "Olizar" Свидовець</h3>
                            <p className="content">
                                Готель "Olizar" розташований поблизу Свидовецького хребта Карпатських гір на Закарпатті. До послуг гостей російська лазня, більярд та ресторан.
                            </p>
                            <p className="content">
                                Всі номери і люкси готелю з безкоштовним бездротовим доступом до Інтернету облаштовані телевізором з кабельними каналами і власною ванною кімнатою. У люксах з кондиціонером встановлено диван.
                            </p>
                            <p className="content">
                                В ресторані з обслуговування по меню подають різні види страв, зокрема традиційні українські, російські, угорські та закарпатські страви.
                            </p>
                            <p className="content">
                                Відстань від готелю "Olizar" до залізничного вокзалу смт. Ясіня становить 19 км, до смт. Черна Тиса 27 км, а до курорту Буковель - 39 км.
                            </p>
                            <div className="contact-details">
                                <div><i className="fa fa-map-marker"></i> <a href="https://www.google.com/maps/place/Свитовец">Гуцульська Вулиця 3, Свидовець, 90630, Україна</a></div>
                                <div><i className="fa fa-phone"></i> <a href="tel:+380971546438">+380 97 154 6438</a></div>
                                <div><i className="fa fa-envelope"></i> <a href="mailto:olizar.mykhailo@student.uzhnu.edu.ua">olizar.mykhailo@student.uzhnu.edu.ua</a></div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Contact;
