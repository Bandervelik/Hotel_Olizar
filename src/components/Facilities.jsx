import React from 'react';
import Header from './Header.jsx';
import Navbar from './Navbar.jsx';
import Footer from './Footer.jsx';
import '../index.css';
import facility1 from '../images/facility-1.jpg';
import facility2 from '../images/facility-2.jpg';
import facility3 from '../images/facility-3.jpg';
import facility4 from '../images/facility-4.jpg';
import facility5 from '../images/facility-5.jpg';
import facility6 from '../images/facility-6.jpg';
import facility7 from '../images/facility-7.jpg';
import facility8 from '../images/facility-8.jpg';

const Facilities = () => {
  return (
    <div className="loading">

      <section className="section-breadcrumb">
        <h2 className="title">Наші Послуги</h2>
      </section>

      <section class="section-facilities">
        <h2 class="hidden">Services</h2>
        <div class="container">
            <div class="facilities-container">
                <div class="row">
                    <div class="col-sm-6 col-md-3">
                        <div class="content-box">
                            <img src={facility1} className="img-centered img-responsive" data-animate="zoomIn" alt="facility-1" />
                            <div class="tri-up"></div>
                            <h3 class="title">Бар на терасі</h3>
                            <p class="content">Розташований у привабливому середовищі комплексу, Бар на терасі створює неповторний настрій та запрошує гостей на смачні пригоди.</p>
                        </div>
                    </div>
                    <div class="col-sm-6 col-md-3">
                        <div class="content-box">
                            <img src={facility2} className="img-centered img-responsive" data-animate="zoomIn" alt="facility-2" />
                            <h3 class="title">Конференц Зал</h3>
                            <p class="content">Ідеальне місце для проведення різноманітних конференцій, семінарів, зустрічей, бізнес-подій та корпоративних заходів.</p>
                        </div>
                    </div>
                    <div class="col-sm-6 col-md-3">
                        <div class="content-box">
                            <img src={facility3} className="img-centered img-responsive" data-animate="zoomIn" alt="facility-3" />
                            <div class="tri-up"></div>
                            <h3 class="title">Приватна автостоянка</h3>
                            <p class="content">Наша автостоянка пропонує безпечне та зручне місце для паркування, щоб ви мали спокій та впевненість у збереженні вашого транспорту.</p>
                        </div>
                    </div>
                    <div class="col-sm-6 col-md-3">
                        <div class="content-box">
                            <img src={facility4} className="img-centered img-responsive" data-animate="zoomIn" alt="facility-4" />
                            <div class="tri-up"></div>
                            <h3 class="title">Парова  лазня</h3>
                            <p class="content">Прекрасне місце для відпочинку та оздоровлення, де ви можете насолодитися терпким ароматом дерева та благотворними ефектами пару.</p>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-sm-6 col-md-3">
                        <div class="content-box">
                            <img src={facility5} className="img-centered img-responsive" data-animate="zoomIn" alt="facility-5" />
                            <div class="tri-up"></div>
                            <h3 class="title">Безкоштовний Wi-Fi</h3>
                            <p class="content">Наш безкоштовний Wi-Fi покриває всю територію готельно-ресторанного комплексу. Ми розуміємо важливість з'єднання з Інтернетом у сучасному світі тому забезпечуємо швидку бездротову мережу.</p>
                        </div>
                    </div>
                    <div class="col-sm-6 col-md-3">
                        <div class="content-box">
                            <img src={facility6} className="img-centered img-responsive" data-animate="zoomIn" alt="facility-6" />
                            <div class="tri-up"></div>
                            <h3 class="title">Більярд</h3>
                            <p class="content">Під час гри в більярд, ви можете насолоджуватися різноманітними напоями з нашого бару та смачними закусками, що зробить ваш відпочинок ще приємнішим.</p>
                        </div>
                    </div>
                    <div class="col-sm-6 col-md-3">
                        <div class="content-box">
                            <img src={facility7} className="img-centered img-responsive" data-animate="zoomIn" alt="facility-7" />
                            <div class="tri-up"></div>
                            <h3 class="title">Ресторан</h3>
                            <p class="content">Наш ресторан ідеально підходить для проведення особливих подій, включаючи банкети, святкування днів народження, корпоративні вечірки та інші заходи.</p>
                        </div>
                    </div>
                    <div class="col-sm-6 col-md-3">
                        <div class="content-box">
                            <img src={facility8} className="img-centered img-responsive" data-animate="zoomIn" alt="facility-8" >
                            <div class="tri-up"></div>
                            <h3 class="title">Весільна зала</h3>
                            <p class="content">Весільна зала готельно-ресторанного комплексу "Olizar" може бути прикрашена за вашим бажанням, враховуючи ваш стиль та тематику.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section class="section-testimonials bg-secondary">
        <div class="text-center">
            <h2 class="title">Відгуки</h2>
        </div>
        <div class="moon-divider white"></div>
        <div class="container">
            <div class="testimonial-slider swiper-container">
                <div class="swiper-wrapper">
                    
                    <div class="swiper-slide">
                        <div class="testimonial-box">
                            <p class="text">Незабутній відпочинок у Готельно-ресторанному комплексі "Olizar"! Сподобався сервіс та комфортність номерів. Ресторан пропонує широкий вибір страв, а обслуговування на високому рівні. Рекомендую!</p>
                            <h3 class="name">Анна К.</h3>
                            <div class="position">турист</div>
                        </div>
                    </div>
                    
                    <div class="swiper-slide">
                        <div class="testimonial-box">
                            <p class="text">Я залишився задоволений перебуванням у готелі "Olizar". Привітний персонал, чисті та затишні номери. Ресторан пропонує смачні страви, а обслуговування було бездоганним.</p>
                            <h3 class="name">Олександр П.</h3>
                            <div class="position">бізнес-подорожуючий</div>
                        </div>
                    </div>
                    
                    <div class="swiper-slide">
                        <div class="testimonial-box">
                            <p class="text">Чудовий готель для відпочинку. Заїздав на вихідні з родиною і був приємно вражений. Просторі та зручні номери, велика дитяча кімната та смачний ресторан. Всім раджу відвідати "Olizar"!</p>
                            <h3 class="name">Петро М.</h3>
                            <div class="position">батько трьох дітей</div>
                        </div>
                    </div>
                    
                    <div class="swiper-slide">
                        <div class="testimonial-box">
                            <p class="text">Затишний готель з привітним персоналом. Відмінне розташування, близько до центру міста. Ресторан пропонує смачні страви, особливо рекомендую спробувати страви місцевої кухні!</p>
                            <h3 class="name">Марія І.</h3>
                            <div class="position">мандрівниця</div>
                        </div>
                    </div>
                    
                    <div class="swiper-slide">
                        <div class="testimonial-box">
                            <p class="text">Сповнений розкоші та комфорту готельно-ресторанний комплекс "Olizar" перевершив мої очікування. Привітний персонал, стильний дизайн та бездоганне обслуговування. Це місце, де я завжди повертатимусь.</p>
                            <h3 class="name">Олена І.</h3>
                            <div class="position">бізнес-туристка</div>
                        </div>
                    </div>
                    
                    <div class="swiper-slide">
                        <div class="testimonial-box">
                            <p class="text">Я захоплений сервісом і атмосферою в 'Olizarі'. Відмінні номери зі зручностями та чистотою. Ресторан пропонує смачні страви, а його шеф-кухар виявився справжнім майстром. Рекомендую це місце для розкішного відпочинку.</p>
                            <h3 class="name">Максим Г.</h3>
                            <div class="position">гурман</div>
                        </div>
                    </div>
                    
                    <div class="swiper-slide">
                        <div class="testimonial-box">
                            <p class="text">Готельно-ресторанний комплекс "Olizar" - ідеальне місце для проведення конференцій та заходів. Чудово обладнані конференц-зали та професійний персонал забезпечили успішне проведення нашого заходу. Номери були комфортні, а ресторан вразив своїми стравами.</p>
                            <h3 class="name">Ігор К.</h3>
                            <div class="position">організатор конференції</div>
                        </div>
                    </div>
                   
                    <div class="swiper-slide">
                        <div class="testimonial-box">
                            <p class="text">Я хочу відзначити високу якість обслуговування в 'Olizarі'. Персонал був дуже привітний та уважний до всіх моїх потреб. Номери були добре обладнані, а ресторан пропонував розкішні страви. Я відчувався, наче вдома. Вдячний за чудовий досвід!</p>
                            <h3 class="name">Людмила В.</h3>
                            <div class="position">задоволена клієнтка</div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="testimonial-slider-page-controls"></div>
        </div>
    </section>
    </div>
  );
};

export default Facilities;
