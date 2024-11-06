import React from 'react';
import { Link } from 'react-router-dom';
import Header from './Header.jsx';
import Navbar from './Navbar.jsx';
import Footer from './Footer.jsx';
import '../index.css';

const Rooms = () => {
  return (
    <div className="rooms-page">
    

      <section className="section-breadcrumb">
        <h2 className="title">Розміщення</h2>        
      </section>

      <section className="section-style-2 section-check-rooms">
        <h2 className="hidden">Розділ кімнат</h2>
        <div className="container">            
          <div className="row">
            <h3 className="hidden">Список кімнат</h3>

            <div className="col-sm-4">
              <div className="room-box">
                <img src="images/room-1.jpg" className="img-centered img-responsive" alt="room-1" />
                <h4 className="title-big">Стандартний <strong>Одномісний</strong></h4>
                <p className="content">Зручне помешкання, призначене для однієї особи. Він пропонує комфортне ліжко, телевізор, робочий стіл, шафа або гардероб. Ванна кімната з душем. Безкоштовний Wi-Fi доступ забезпечує з'єднання з Інтернетом. Наші стандартні одномісні номери дбають про ваш комфорт та задоволення.</p>
              </div>
            </div>

            <div className="col-sm-4">
              <div className="room-box">
                <img src="images/room-2.jpg" className="img-centered img-responsive" alt="room-2" />
                <h4 className="title-big">Стандартний <strong>Двомісний</strong></h4>
                <p className="content">Затишне помешкання для двох осіб. В ньому є зручне двоспальне ліжко, телевізор, телефон, робочий стіл та міні-холодильник. Ванна кімната оснащена душем або ванною. Наші стандартні двомісні номери створені для забезпечення вашого комфорту та зручності під час перебування у нашому комплексі.</p>
              </div>
            </div>

            <div className="col-sm-4">
              <div className="room-box">
                <img src="images/room-3.jpg" className="img-centered img-responsive" alt="room-3" />
                <h4 className="title-big">Стандартний <strong>Тримісний</strong></h4>
                <p className="content">Комфортне помешкання з достатньою площею для трьох осіб. Він має зручності, включаючи ліжко, телевізор. Ванна кімната з душем або ванною. Безкоштовний Wi-Fi доступ. Чистота та комфорт гарантовані для приємного перебування.</p>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-sm-4">
              <div className="room-box">
                <img src="images/room-4.jpg" className="img-centered img-responsive" alt="room-4" />
                <h4 className="title-big"><strong>Люкс</strong></h4>
                <p className="content">Насолоджуйтесь комфортом та особливим досвідом у наших номерах "Люкс". Вони просторі та стильно обладнані, зручними ліжками та власною ванною кімнатою. Зона відпочинку дозволить вам розслабитися. Із безкоштовним Wi-Fi та телевізором з кабельними каналами ви завжди будете зв'язані зі світом.</p>
              </div>
            </div>

            <div className="col-sm-4">
              <div className="room-box">
                <img src="images/room-5.jpg" className="img-centered img-responsive" alt="room-5" />
                <h4 className="title-big"><strong>Дуплекс</strong></h4>
                <p className="content">Відчуйте справжеій просторір та комфорт у наших дворівневих номерах "Дуплекс". Це особливі номери з окремими зонами відпочинку на кожному рівні, зручними ліжками та приватною ванною кімнатою.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Rooms;
