import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import './style/style.css';
import './fonts/fontawesome/css/font-awesome.min.css';
import './fonts/icomoon/style.css';
import './css/jquery-ui.min.css';
import './bootstrap/css/bootstrap.min.css';
import './css/animate.css';
import './css/swiper.min.css';

function App() {
  return (
    <Router>
      <div className="loading">
        <h1 className="hidden">Головна</h1>
        <div id="preloader-wrapper">
          <div id="preloader"></div>
        </div>

        <header>
          <div className="container">
            <Link to="/" className="logo-link"><img className="logo" src="images/logo.svg" height="110" alt="Logo" /></Link>
            <nav className="main-menu clearfix">
              <h2 className="hidden">Головне меню</h2>
              <ul>
                <li className="menu-item"><Link to="/">Головна</Link></li>
                <li className="menu-item"><Link to="/about">Про нас</Link></li>
                <li className="menu-item"><Link to="/rooms">Кімнати</Link></li>
                <li className="menu-item"><Link to="/facilities">Послуги</Link></li>
                <li className="menu-item"><Link to="/booking-reservation">Бронювання</Link></li>
                <li className="menu-item"><Link to="/gallery">Галерея</Link></li>
                <li className="menu-item"><Link to="/contact">Контакти</Link></li>
              </ul>
            </nav>

            <div id="menu-toggle">
              <div className="bar first"></div>
              <div className="bar second"></div>
              <div className="bar third"></div>
            </div>
          </div>

          <nav id="mobile-menu">
            <h2 className="hidden">Mobile Navigation Menu</h2>
            <ul>
              <li className="mobile-menu-item"><Link to="/">Головна</Link></li>
              <li className="mobile-menu-item"><Link to="/about">Про нас</Link></li>
              <li className="mobile-menu-item"><Link to="/rooms">Кімнати</Link></li>
              <li className="mobile-menu-item"><Link to="/facilities">Послуги</Link></li>
              <li className="mobile-menu-item"><Link to="/booking-reservation">Бронювання</Link></li>
              <li className="mobile-menu-item"><Link to="/gallery">Галерея</Link></li>
              <li className="mobile-menu-item"><Link to="/contact">Контакти</Link></li>
            </ul>
          </nav>
        </header>

        <div id="main-slider" className="slider">
          <div className="swiper-container">
            <h2 className="hidden">Main Slider</h2>
            <div className="swiper-wrapper">
              <div className="swiper-slide" style={{ background: "url('images/home/slider-2.jpg') center center/cover no-repeat" }}>
                <div className="container">
                  <div className="slide-content">
                    <div className="slide-subtitle"></div>
                    <h3 className="slide-title"><strong></strong></h3>
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
                <div className="col-md-4">
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
                    <form className="form-inline check-rooms secondary" action="#1" onClick={() => smoothScroll('1')}>
                      <button type="submit" className="button">Перейти</button>
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
              <div className="col-sm-4">
                <div className="content-box">
                  <img src="images/home/why-moon-1.jpg" className="img-centered img-responsive" data-animate="fadeIn" alt="why-moon-1" />
                  <h3 className="title">Пропонуємо найкращий досвід</h3>
                  <p className="content">Ми прагнемо забезпечити нашим гостям незабутній відпочинок та найвищу якість обслуговування. Робимо все можливе, щоб забезпечити найкращий досвід для наших гостей. Ваше задоволення та комфорт - наш пріоритет. Приходьте до Готелю "Olizar" та насолоджуйтесь найвищим рівнем обслуговування та задоволення усіх ваших потреб.</p>
                </div>
              </div>
              <div className="col-sm-4">
                <div className="content-box">
                  <img src="images/home/why-moon-2.jpg" className="img-centered img-responsive" data-animate="fadeIn" alt="why-moon-2" />
                  <h3 className="title">Оновлені номери</h3>
                  <p className="content">Оновлені номери Готелю "Olizar" пропонують широкий простір, високу якість матеріалів, сучасні зручності, приватні балкони з видами, комфортні ванні кімнати та обслуговування номерів. Наші номери створені для незабутнього та комфортного перебування.</p>
                </div>
              </div>
              <div className="col-sm-4">
                <div className="content-box">
                  <img src="images/home/why-moon-3.jpg" className="img-centered img-responsive" data-animate="fadeIn" alt="why-moon-3" />
                  <h3 className="title">Досвідчений та професійний персонал</h3>
                  <p className="content">Наш персонал професійно підходить до кожної деталі, щоб забезпечити ваш комфорт та задоволення. Вони доброзичливі, уважні та завжди готові відповісти на ваші запитання, виконати ваші побажання та надати необхідну допомогу під час вашого перебуванн��. Вони володіють відмінними комунікативними навичками, мають чуття відповідальності та ставлять ваше задоволення на перше місце.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section-rooms">
          <h2 className="hidden">Кімнати</h2>
          <div className="container">
            <div className="rooms-area">
              <div className="row">
                <div className="col-md-4 col-xs-6">
                  <div className="room-title-container">
                    <div className="title-room">Стандартний</div>
                    <h3 className="title">Одномісний</h3>
                    <p className="content muted">Зручне помешкання, призначене для однієї особи. Він пропонує комфортне ліжко, телевізор, робочий стіл, шафа або гардероб. Ванна кімната з душем. Безкоштовний Wi-Fi доступ забезпечує з'єднання з Інтернетом. Наші стандартні одномісні номери дбають про ваш комфорт та задоволення.</p>
                  </div>
                </div>
                <div className="col-md-4 hidden-xs hidden-sm">
                  <img src="images/room-1.jpg" className="img-centered img-responsive grayscale" data-animate="fadeInLeft" alt="room-1" />
                </div>
                <div className="col-md-4 col-xs-6" id="1">
                  <div className="room-container">
                    <div className="price-text"><span className="price">20000 ₴</span> / ніч</div>
                    <p className="room-desc"><strong>Всі номери вільні</strong></p>
                    <p className="room-desc">При бронюванні на тривалий термін, або групове бронювання можлива знижка</p>
                    <button onClick={openModal} className="button">Забронювати зараз</button>
                    <div className="modal" id="myModal">
                      <div className="modal-content">
                        <span className="close" onClick={closeModal}>&times;</span>
                        <p className="buping">Чи бажаєте перейти на зовнішній ресурс?</p>
                        <a href="https://www.booking.com/index.uk.html?label=gen173nr-1FCAso6QFCDmhvdGVsLWludHVyaXN0SClYBGjpAYgBAZgBKbgBF8gBFdgBAegBAfgBAogCAagCA7gCiefbqwbAAgHSAiQ3OTdmNzU1NS0zNGQ1LTQyM2MtOGJjNi04MWEyZWRjNTA5MzXYAgXgAgE&sid=328db4e567d7fa0cea776577f2a2da94&aid=304142" className="button">Так</a>
                        <button onClick={closeModal} className="buton">Ні</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-4 col-xs-6">
                  <div className="room-title-container">
                    <div className="title-room">Стандартний</div>
                    <h3 className="title">Двомісний</h3>
                    <p className="content muted">Затишне помешкання для двох осіб. В ньому є зручне двоспальне ліжко, телевізор, телефон, робочий стіл та міні-холодильник. Ванна кімната оснащена душем або ванною. Наші стандартні двомісні номери створені для забезпечення вашого комфорту та зручності під час перебування у нашому комплексі.</p>
                  </div>
                </div>
                <div className="col-md-4 hidden-xs hidden-sm">
                  <img src="images/room-2.jpg" className="img-centered img-responsive grayscale" data-animate="fadeInLeft" alt="room-2" />
                </div>
                <div className="col-md-4 col-xs-6">
                  <div className="room-container">
                    <div className="price-text"><span className="price">30000 ₴</span> / ніч</div>
                    <p className="room-desc"><strong>Всі номери вільні</strong></p>
                    <p className="room-desc">При бронюванні на тривалий термін, або групове бронювання можлива знижка</p>
                    <button onClick={openModal} className="button">Забронювати зараз</button>
                    <div className="modal" id="myModal">
                      <div className="modal-content">
                        <span className="close" onClick={closeModal}>&times;</span>
                        <p className="buping">Чи бажаєте перейти на зовнішній ресурс?</p>
                        <a href="https://www.booking.com/index.uk.html?label=gen173nr-1FCAso6QFCDmhvdGVsLWludHVyaXN0SClYBGjpAYgBAZgBKbgBF8gBFdgBAegBAfgBAogCAagCA7gCiefbqwbAAgHSAiQ3OTdmNzU1NS0zNGQ1LTQyM2MtOGJjNi04MWEyZWRjNTA5MzXYAgXgAgE&sid=328db4e567d7fa0cea776577f2a2da94&aid=304142" className="button">Так</a>
                        <button onClick={closeModal} className="buton">Ні</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-4 col-xs-6">
                  <div className="room-title-container">
                    <div className="title-room">Стандартний</div>
                    <h3 className="title">Тримісний</h3>
                    <p className="content muted">Комфортне помешкання з достатньою площею для трьох осіб. Він має зручності, включаючи ліжко, телевізор. Ва��на кімната з душем або ванною. Безкоштовний Wi-Fi доступ. Чистота та комфорт гарантовані для приємного перебування.</p>
                  </div>
                </div>
                <div className="col-md-4 hidden-xs hidden-sm">
                  <img src="images/room-3.jpg" className="img-centered img-responsive grayscale" data-animate="fadeInLeft" alt="room-3" />
                </div>
                <div className="col-md-4 col-xs-6">
                  <div className="room-container">
                    <div className="price-text"><span className="price">40000 ₴</span> / ніч</div>
                    <p className="room-desc"><strong>Всі номери вільні</strong></p>
                    <p className="room-desc">При бронюванні на тривалий термін, або групове бронювання можлива знижка</p>
                    <button onClick={openModal} className="button">��абронювати зараз</button>
                    <div className="modal" id="myModal">
                      <div className="modal-content">
                        <span className="close" onClick={closeModal}>&times;</span>
                        <p className="buping">Чи бажаєте перейти на зовнішній ресурс?</p>
                        <a href="https://www.booking.com/index.uk.html?label=gen173nr-1FCAso6QFCDmhvdGVsLWludHVyaXN0SClYBGjpAYgBAZgBKbgBF8gBFdgBAegBAfgBAogCAagCA7gCiefbqwbAAgHSAiQ3OTdmNzU1NS0zNGQ1LTQyM2MtOGJjNi04MWEyZWRjNTA5MzXYAgXgAgE&sid=328db4e567d7fa0cea776577f2a2da94&aid=304142" className="button">Так</a>
                        <button onClick={closeModal} className="buton">Ні</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-offset-8 col-xs-offset-6 rooms-background bg-secondary"></div>
          </div>
        </section>

        <Footer />
      </div>
    </Router>
  );
}

function openModal() {
  document.getElementById('myModal').style.display = 'block';
}

function closeModal() {
  document.getElementById('myModal').style.display = 'none';
}

ReactDOM.render(<App />, document.getElementById('root'));