import React from "react";
import Header from "./Header";
import Navbar from "./Navbar";
import Footer from "./Footer";

const Home = () => {
  return (
    <>
      <Header />
      <Navbar />

      <div id="main-slider" className="slider">
        <div className="swiper-containir">
          <h2 className="hidden">Main Slider</h2>
          <div className="swiper-wrapper">
            <div
              className="swiper-slide"
              style={{
                background: "url('images/home/slider-2.jpg') center center/cover no-repeat",
              }}
            >
              <div className="container">
                <div className="slide-content">
                  <div className="slide-subtitle"></div>
                  <h3 className="slide-title">
                    <strong></strong>
                  </h3>
                  <div className="slide-subtitle-italic" data-animate="fadeInLeft" data-delay="300"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="page-controls centered clearfix"></div>
        </div>
      </div>

      <section className="section-search-rooms">
        <h2 className="hidden">Пошук кімнат</h2>
        <div className="search-rooms-content">
          <div className="container">
            <div className="row">
              <div className="col-md-4 ">
                <div className="title-container">
                  <div className="title-area bg-primary">
                    <div className="title">Пошук кімнат</div>
                    <div className="subtitle">Ціни & опис & бронювання</div>
                  </div>
                  <div className="title-background bg-primary"></div>
                </div>
              </div>
              <div className="col-md-8">
                <div className="search-form">
                  <form className="form-inline check-rooms secondary" action="#1" onClick={() => smoothScroll("1")}>
                    <button type="submit" className="button">
                      Перейти
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-why-us">
        <h2 className="title text-center">Чому готель "Olizar"</h2>
        <div className="moon-divider"></div>
        <div className="container">
          <div className="row">
            {/* Пункти "Чому готель 'Olizar'" */}
            {[1, 2, 3].map((item) => (
              <div className="col-sm-4" key={item}>
                <div className="content-box">
                  <img
                    src={`images/home/why-moon-${item}.jpg`}
                    className="img-centered img-responsive"
                    data-animate="fadeIn"
                    alt={`why-moon-${item}`}
                  />
                  <h3 className="title">{item === 1 ? "Пропонуємо найкращий досвід" : item === 2 ? "Оновлені номери" : "Досвідчений та професійний персонал"}</h3>
                  <p className="content">
                    {/* Додайте текст відповідно до кожного блоку */}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-rooms">
        <h2 className="hidden">Кімнати</h2>
        <div className="container">
          <div className="rooms-area">
            {[1, 2, 3].map((room) => (
              <div className="row" key={room}>
                <div className="col-md-4 col-xs-6">
                  <div className="room-title-container">
                    <div className="title-room">Стандартний</div>
                    <h3 className="title">{room === 1 ? "Одномісний" : room === 2 ? "Двомісний" : "Тримісний"}</h3>
                    <p className="content muted">
                      {/* Опис кімнати для кожного блоку */}
                    </p>
                  </div>
                </div>
                <div className="col-md-4 hidden-xs hidden-sm">
                  <img
                    src={`images/room-${room}.jpg`}
                    className="img-centered img-responsive grayscale"
                    data-animate="fadeInLeft"
                    alt={`room-${room}`}
                  />
                </div>
                <div className="col-md-4 col-xs-6">
                  <div className="room-container">
                    <div className="price-text">
                      <span className="price">{room === 1 ? "20000 ₴" : room === 2 ? "30000 ₴" : "40000 ₴"}</span> / ніч
                    </div>
                    <p className="room-desc">
                      <strong>Всі номери вільні</strong>
                    </p>
                    <p className="room-desc">При бронюванні на тривалий термін, або групове бронювання можлива знижка</p>
                    <button onClick={() => openModal()} className="button">
                      Забронювати зараз
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Home;
