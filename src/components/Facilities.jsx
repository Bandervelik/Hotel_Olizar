import React from 'react';
import Header from './Header.jsx';
import Navbar from './Navbar.jsx';
import Footer from './Footer.jsx';
import '../index.css';
import facility1 from 'images/facility-1.jpg';
import facility2 from 'images/facility-2.jpg';
import facility3 from 'images/facility-3.jpg';
import facility4 from 'images/facility-4.jpg';
import facility5 from 'images/facility-5.jpg';
import facility6 from 'images/facility-6.jpg';
import facility7 from 'images/facility-7.jpg';
import facility8 from 'images/facility-8.jpg';

const Facilities = () => {
  return (
    <div className="loading">

      <section className="section-breadcrumb">
        <h2 className="title" >Наші Послуги</h2>
    </section>

    <section className="section-facilities">
        <h2 className="hidden">Services</h2>
        <div className="container">
            <div className="facilities-container">
                <div className="row">
                    <div className="col-sm-6 col-md-3">
                        <div className="content-box">
                            <img src={facility1} className="img-centered img-responsive" data-animate="zoomIn" alt="facility-1" />
                            <div className="tri-up"></div>
                            <h3 className="title">Бар на терасі</h3>
                            <p className="content">Розташований у привабливому середовищі комплексу, Бар на терасі створює неповторний настрій та запрошує гостей на смачні пригоди.</p>
                        </div>
                    </div>
                    <div className="col-sm-6 col-md-3">
                        <div className="content-box">
                            <img src={facility2} className="img-centered img-responsive" data-animate="zoomIn" alt="facility-2" />
                            <div className="tri-up"></div>
                            <h3 className="title">Конференц Зал</h3>
                            <p className="content">Ідеальне місце для проведення різноманітних конференцій, семінарів, зустрічей, бізнес-подій та корпоративних заходів.</p>
                        </div>
                    </div>
                    <div className="col-sm-6 col-md-3">
                        <div className="content-box">
                            <img src={facility3} className="img-centered img-responsive" data-animate="zoomIn" alt="facility-3" />
                            <div className="tri-up"></div>
                            <h3 className="title">Приватна автостоянка</h3>
                            <p className="content">Наша автостоянка пропонує безпечне та зручне місце для паркування, щоб ви мали спокій та впевненість у збереженні вашого транспорту.</p>
                        </div>
                    </div>
                    <div className="col-sm-6 col-md-3">
                        <div className="content-box">
                            <img src={facility4} className="img-centered img-responsive" data-animate="zoomIn" alt="facility-4" />
                            <div className="tri-up"></div>
                            <h3 className="title">Парова  лазня</h3>
                            <p className="content">Прекрасне місце для відпочинку та оздоровлення, де ви можете насолодитися терпким ароматом дерева та благотворними ефектами пару.</p>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm-6 col-md-3">
                        <div className="content-box">
                            <img src={facility5} className="img-centered img-responsive" data-animate="zoomIn" alt="facility-5" />
                            <div className="tri-up"></div>
                            <h3 className="title">Безкоштовний Wi-Fi</h3>
                            <p className="content">Наш безкоштовний Wi-Fi покриває всю територію готельно-ресторанного комплексу. Ми розуміємо важливість з'єднання з Інтернетом у сучасному світі тому забезпечуємо швидку бездротову мережу.</p>
                        </div>
                    </div>
                    <div className="col-sm-6 col-md-3">
                        <div className="content-box">
                            <img src={facility6} className="img-centered img-responsive" data-animate="zoomIn" alt="facility-6" />
                            <div className="tri-up"></div>
                            <h3 className="title">Більярд</h3>
                            <p className="content">Під час гри в більярд, ви можете насолоджуватися різноманітними напоями з нашого бару та смачними закусками, що зробить ваш відпочинок ще приємнішим.</p>
                        </div>
                    </div>
                    <div className="col-sm-6 col-md-3">
                        <div className="content-box">
                            <img src={facility7} className="img-centered img-responsive" data-animate="zoomIn" alt="facility-7" />
                            <div className="tri-up"></div>
                            <h3 className="title">Ресторан</h3>
                            <p className="content">Наш ресторан ідеально підходить для проведення особливих подій, включаючи банкети, святкування днів народження, корпоративні вечірки та інші заходи.</p>
                        </div>
                    </div>
                    <div className="col-sm-6 col-md-3">
                        <div className="content-box">
                            <img src={facility8} className="img-centered img-responsive" data-animate="zoomIn" alt="facility-8" />
                            <div className="tri-up"></div>
                            <h3 className="title">Весільна зала</h3>
                            <p className="content">Весільна зала готельно-ресторанного комплексу "Olizar" може бути прикрашена за вашим бажанням, враховуючи ваш стиль та тематику.</p>
                        </div>
                    </div>
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
                            <p className="text">Незабутній відпочинок у Готельно-ресторанному комплексі "Olizar"! Сподобався сервіс та комфортність номерів. Ресторан пропонує широкий вибір страв, а обслуговування на високому рівні. Рекомендую!</p>
                            <h3 className="name">Анна К.</h3>
                            <div className="position">турист</div>
                        </div>
                    </div>
                    
                    <div className="swiper-slide">
                        <div className="testimonial-box">
                            <p className="text">Я залишився задоволений перебуванням у готелі "Olizar". Привітний персонал, чисті та затишні номери. Ресторан пропонує смачні страви, а обслуговування було бездоганним.</p>
                            <h3 className="name">Олександр П.</h3>
                            <div className="position">бізнес-подорожуючий</div>
                        </div>
                    </div>
                    
                    <div className="swiper-slide">
                        <div className="testimonial-box">
                            <p className="text">Чудовий готель для відпочинку. Заїздав на вихідні з родиною і був приємно вражений. Просторі та зручні номери, велика дитяча кімната та смачний ресторан. Всім раджу відвідати "Olizar"!</p>
                            <h3 className="name">Петро М.</h3>
                            <div className="position">батько трьох дітей</div>
                        </div>
                    </div>
                    
                    <div className="swiper-slide">
                        <div className="testimonial-box">
                            <p className="text">Затишний готель з привітним персоналом. Відмінне розташування, близько до центру міста. Ресторан пропонує смачні страви, особливо рекомендую спробувати страви місцевої кухні!</p>
                            <h3 className="name">Марія І.</h3>
                            <div className="position">мандрівниця</div>
                        </div>
                    </div>
                    
                    <div className="swiper-slide">
                        <div className="testimonial-box">
                            <p className="text">Сповнений розкоші та комфорту готельно-ресторанний комплекс "Olizar" перевершив мої очікування. Привітний персонал, стильний дизайн та бездоганне обслуговування. Це місце, де я завжди повертатимусь.</p>
                            <h3 className="name">Олена І.</h3>
                            <div className="position">бізнес-туристка</div>
                        </div>
                    </div>
                    
                    <div className="swiper-slide">
                        <div className="testimonial-box">
                            <p className="text">Я захоплений сервісом і атмосферою в 'Olizarі'. Відмінні номери зі зручностями та чистотою. Ресторан пропонує смачні страви, а його шеф-кухар виявився справжнім майстром. Рекомендую це місце для розкішного відпочинку.</p>
                            <h3 className="name">Максим Г.</h3>
                            <div className="position">гурман</div>
                        </div>
                    </div>
                    
                    <div className="swiper-slide">
                        <div className="testimonial-box">
                            <p className="text">Готельно-ресторанний комплекс "Olizar" - ідеальне місце для проведення конференцій та заходів. Чудово обладнані конференц-зали та професійний персонал забезпечили успішне проведення нашого заходу. Номери були комфортні, а ресторан вразив своїми стравами.</p>
                            <h3 className="name">Ігор К.</h3>
                            <div className="position">організатор конференції</div>
                        </div>
                    </div>
                    
                    <div className="swiper-slide">
                        <div className="testimonial-box">
                            <p className="text">Я хочу відзначити високу якість обслуговування в 'Olizarі'. Персонал був дуже привітний та уважний до всіх моїх потреб. Номери були добре обладнані, а ресторан пропонував розкішні страви. Я відчувався, наче вдома. Вдячний за чудовий досвід!</p>
                            <h3 className="name">Людмила В.</h3>
                            <div className="position">задоволена клієнтка</div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="testimonial-slider-page-controls"></div>
        </div>
    </section>

    </div>
  );
};

export default Facilities;