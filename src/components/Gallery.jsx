import React from 'react';
import { Link } from 'react-router-dom';
import Header from './Header.jsx';
import Navbar from './Navbar.jsx';
import Footer from './Footer.jsx';
import '../index.css';
import gallery1 from 'images/gallery/gallery-1.jpg';
import gallery2 from 'images/gallery/gallery-2.jpg';
import gallery3 from 'images/gallery/gallery-3.jpg';
import gallery4 from 'images/gallery/gallery-4.jpg';

const Gallery = () => {
  return (
    <div className="loading">
      <h1 className="hidden">Gallery</h1>
      <div id="preloader-wrapper">
        <div id="preloader"></div>
      </div>

      <section className="section-breadcrumb">
        <h2 className="title">Галерея</h2>
      </section>

      <section className="section-gallery">
        <div className="container">
          <div className="gallery-container">
            {[
                { link: 'gallery-rooms.html', imgSrc: gallery1, alt: 'gallery-1', title: 'Кімнати' },
                { link: 'gallery-bathrooms.html', imgSrc: gallery2, alt: 'gallery-2', title: 'Санвузли' },
                { link: 'gallery-veranda.html', imgSrc: gallery3, alt: 'gallery-3', title: 'Терасса' },
                { link: 'gallery-parking.html', imgSrc: gallery4, alt: 'gallery-4', title: 'Паркінг' }
            ].map((item, index) => (
              <div className="row gallery-row" key={index}>
                <div className="col-md-6">
                  <Link to={item.link}><img src={item.imgSrc} className="img-centered img-responsive" alt={item.alt} /></Link>
                </div>
                <div className="col-md-6">
                  <h3 className="content">{item.title}</h3>
                  <Link to={item.link} className="button secondary transparent">Перейти</Link>
                </div>
              </div>
            ))}
            <div className="row">
              <div className="col-md-12 page-controls text-center">
                <Link to="/gallery" className="button secondary transparent"><i className="fa fa-chevron-left"></i></Link>
                <Link to="/gallery" className="button">1</Link>
                <Link to="/gallery" className="button secondary transparent">2</Link>
                <Link to="/gallery" className="button secondary transparent"><i className="fa fa-chevron-right"></i></Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Gallery;
