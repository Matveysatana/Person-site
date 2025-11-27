import { useState } from 'react';
import hero from '../../../assets/images/hero.png'
import logo from '../../../../public/logo.svg'
import './Hero.css'
import Button from "../../../ui/Button/Button";
import { scrollToSection } from "../../../utils/scrollUtils";
import Link from '../../../ui/Link/Link';

const Hero = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const handleLinkClick = (sectionId: string) => {
        scrollToSection(sectionId);
        setIsMenuOpen(false);
    };

    return (
        <section className="section" id="home">
            <div className="container flex-column">
                <div className={`container__header flex-between`}>
                    <Link className="header__logo" target="_blank" id="https://t.me/Mottyrix">
                        <img src={logo} alt="Логотип" className="logo" />
                        <span className="logo__text">Motty</span>
                    </Link>

                    {/* Бургер-кнопка */}
                    <button
                        className={`burger ${isMenuOpen ? 'burger--active' : ''}`}
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                    >
                        <span></span>
                        <span></span>
                        <span></span>
                    </button>

                    {/* Основное меню */}
                    <nav className="nav">
                        <Link id={"#about"} className={"link"}>Обо мне</Link>
                        <Link id={"#service"} className={"link"}>Услуги</Link>
                        <Link id={"#portfolio"} className={"link"}>Кейсы</Link>
                        <Link id={"#social"} className={"link"}>Соц сети</Link>
                    </nav>

                    {/* Боковое меню */}
                    <div className={`side-menu ${isMenuOpen ? 'side-menu--active' : ''}`}
                        onClick={() => setIsMenuOpen(false)}>
                        <nav className="side-nav" onClick={(e) => e.stopPropagation()}>
                            <Link
                                id={"#about"}
                                className={"link"}
                                onClick={() => handleLinkClick("about")}
                            >Обо мне</Link>
                            <Link
                                id={"#service"}
                                className={"link"}
                                onClick={() => handleLinkClick("service")}
                            >Услуги</Link>
                            <Link
                                id={"#portfolio"}
                                className={"link"}
                                onClick={() => handleLinkClick("portfolio")}
                            >Кейсы</Link>
                            <Link
                                id={"#social"}
                                className={"link"}
                                onClick={() => handleLinkClick("social")}
                            >Соц сети</Link>
                        </nav>
                    </div>
                </div>
                <div className={`container__hero`}>
                    <div className="hero__text">
                        <h1 className="hero__text__title">Контент-мейкер Гений,&nbsp;Филантроп <span className="name">Сатановский Матвей</span></h1>
                        <p className="text">Директор по Себе | Основатель Своего Будущего <br /> Превращаю идеи в цифровую реальность через монтаж, код и тексты. <br /> Добро пожаловать на стройплощадку.</p>
                        <div className="buttons">
                            <Button size="normal" onClick={() => scrollToSection("about")}>Поподробнее</Button>
                            <Button className="acent" size="big" onClick={() => scrollToSection("service")}>Начать коллабарацию</Button>
                        </div>
                    </div>
                    <div className="hero__image">
                        <img src={hero} alt="Фото автора" className="hero-img" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;