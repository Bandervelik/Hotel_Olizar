import React from 'react';
import Header from './Header.jsx';
import Navbar from './Navbar.jsx';
import Footer from './Footer.jsx';
import '../index.css';

const About = () => {
    return (
        <div className="loading">

            <h1 className="hidden">Про нас</h1>
            <div id="preloader-wrapper">
                <div id="preloader"></div>
            </div>

            <section className="section-breadcrumb">
                <h2 className="title">Про нас</h2>
            </section>

            <section className="section-style-2">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <h2 className="title">Відомості про нас</h2>
                            <div className="section-starter"></div>
                            <div className="row">
                                <div className="col-sm-6">
                                    <p className="content">
                                        Готель Olizar Свидовець – розташований поблизу Свидовецького хребта Карпатських гір на Закарпатті. Складається з головного корпусу, в якому розташовані номери, ресторан, конференц-зал, зона відпочинку і окремого котеджу з номерами класу Люкс. Біля готелю знаходиться паркінг з охороною. Готель Olizar оптимально підходить для проживання туристичних груп, які приїхали на відпочинок в Закарпатті і для проведення бізнес-семінарів.
                                    </p>
                                </div>
                                <div className="col-sm-6">
                                    <p className="content">
                                        Всього в готелі Olizar Свидовець в наявності є 56 номерів категорій: Стандарт, Напівлюкс і Люкс. Люкси підрозділяються на 3-кімнатні та дворівневі апартаменти. У всіх номерах: меблі і посуд, рушники, телевізор і холодильник, супутникове ТБ, кондиціонер. У ванних кімнатах ванна, санвузол, умивальник, набір косметики.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="row">
                                <div className="col-sm-6">
                                    <img src="images/about/story-1.jpg" className="story-1" alt="Готель Olizar" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="section-style-2 section-why-us section-bg-white">
                <div className="container">
                    <h2 className="title">Чому готель "Olizar"</h2>
                    <div className="section-starter"></div>
                    <div className="row">
                        <div className="col-sm-4">
                            <div className="content-box">
                                <img src="images/home/why-moon-1.jpg" className="img-centered img-responsive" alt="why-moon-1" />
                                <h3 className="title">Пропонуємо найкращий досвід</h3>
                                <p className="content">
                                    Ми прагнемо забезпечити нашим гостям незабутній відпочинок та найвищу якість обслуговування. Робимо все можливе, щоб забезпечити найкращий досвід для наших гостей.
                                </p>
                            </div>
                        </div>
                        <div className="col-sm-4">
                            <div className="content-box">
                                <img src="images/home/why-moon-2.jpg" className="img-centered img-responsive" alt="why-moon-2" />
                                <h3 className="title">Розкішні номери</h3>
                                <p className="content">
                                    Розкішні номери Готелю "Olizar" пропонують широкий простір, високу якість матеріалів, сучасні зручності, приватні балкони з видами, комфортні ванні кімнати та обслуговування номерів.
                                </p>
                            </div>
                        </div>
                        <div className="col-sm-4">
                            <div className="content-box">
                                <img src="images/home/why-moon-3.jpg" className="img-centered img-responsive" alt="why-moon-3" />
                                <h3 className="title">Досвідчений та професійний персонал</h3>
                                <p className="content">
                                    Наш персонал професійно підходить до кожної деталі, щоб забезпечити ваш комфорт та задоволення. Вони доброзичливі, уважні та завжди готові відповісти на ваші запитання.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="section-style-2 section-testimonials-2" style={{ overflow: 'clip' }}>
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <h2 className="title">Чому обирають нас</h2>
                            <div className="section-starter"></div>
                            <div className="panel-group accordion">
                                <div className="panel panel-default open">
                                    <div className="panel-heading">
                                        <h4 className="panel-title accordion-toggle">
                                            <a href="#collapse1" data-toggle="collapse" data-parent="#accordion">Розташування</a>
                                        </h4>
                                    </div>
                                    <div id="collapse1" className="panel-collapse collapse in">
                                        <div className="panel-body">
                                            Ми знаходимося в самому серці Мукачева, що робить нас ідеальним вибором для туристів, які бажають побачити визначні місця міста.
                                        </div>
                                    </div>
                                </div>
                                <div className="panel panel-default">
                                    <div className="panel-heading">
                                        <h4 className="panel-title accordion-toggle">
                                            <a href="#collapse2" data-toggle="collapse" data-parent="#accordion">Комфортні номери</a>
                                        </h4>
                                    </div>
                                    <div id="collapse2" className="panel-collapse collapse">
                                        <div className="panel-body">
                                            У нас ви знайдете сучасні та комфортні номери, обладнані зручними ліжками та ергономічними меблями.
                                        </div>
                                    </div>
                                </div>
                                <div className="panel panel-default">
                                    <div className="panel-heading">
                                        <h4 className="panel-title accordion-toggle">
                                            <a href="#collapse3" data-toggle="collapse" data-parent="#accordion">Ресторан та кухня</a>
                                        </h4>
                                    </div>
                                    <div id="collapse3" className="panel-collapse collapse">
                                        <div className="panel-body">
                                            Наші шеф-кухарі готують страви на будь-який смак, незалежно від ваших вподобань.
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default About;
