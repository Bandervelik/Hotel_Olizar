import React from 'react';
import Header from './Header';
import Navbar from './Navbar';
import Footer from './Footer';

const Facilities = () => {
  return (
    <div className="loading">
      <Header />
      <Navbar />

      <section className="section-breadcrumb">
        <h2 className="title">Наші Послуги</h2>
      </section>

      <section className="section-facilities">
        <h2 className="hidden">Services</h2>
        <div className="container">
          <div className="facilities-container">
            <div className="row">
              <div className="col-sm-6 col-md-3">
                <div className="content-box">
                  <img src="images/facility-1.jpg" className="img-centered img-responsive" alt="facility-1" />
                  <div className="tri-up"></div>
                  <h3 className="title">Бар на терасі</h3>
                  <p className="content">
                    Розташований у привабливому середовищі комплексу, Бар на терасі створює неповторний настрій та запрошує гостей на смачні пригоди.
                  </p>
                </div>
              </div>
              <div className="col-sm-6 col-md-3">
                <div className="content-box">
                  <img src="images/facility-2.jpg" className="img-centered img-responsive" alt="facility-2" />
                  <div className="tri-up"></div>
                  <h3 className="title">Конференц Зал</h3>
                  <p className="content">
                    Ідеальне місце для проведення різноманітних конференцій, семінарів, зустрічей, бізнес-подій та корпоративних заходів.
                  </p>
                </div>
              </div>
              {/* Additional facilities */}
            </div>
          </div>
        </div>
      </section>

      <section className="section-testimonials bg-secondary">
        <div className="text-center">
          <h2 className="title">Відгуки</h2>
        </div>
        <div className="moon-divider white"></div>
        <div className="container">
          <div className="testimonial-slider swiper-container">
            <div className="swiper-wrapper">
              <div className="swiper-slide">
                <div className="testimonial-box">
                  <p className="text">Незабутній відпочинок у Готельно-ресторанному комплексі "Olizar"!...</p>
                  <h3 className="name">Анна К.</h3>
                  <div className="position">турист</div>
                </div>
              </div>
              <div className="swiper-slide">
                <div className="testimonial-box">
                  <p className="text">Я залишився задоволений перебуванням у готелі "Olizar"....</p>
                  <h3 className="name">Олександр П.</h3>
                  <div className="position">бізнес-подорожуючий</div>
                </div>
              </div>
              {/* Additional testimonials */}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Facilities;
