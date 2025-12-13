import { useState } from 'react';
import { motion } from "framer-motion";
import hero from '../../../assets/images/hero.png';
import logo from '../../../../public/logo.svg';
import './Hero.css';
import Button from "../../../ui/Button/Button";
import { scrollToSection } from "../../../utils/scrollUtils";
import Link from '../../../ui/Link/Link';
import { fadeInUp, slideInLeft, slideInRight } from '../../../utils/animations';

const Hero = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const handleLinkClick = (sectionId: string) => {
        scrollToSection(sectionId);
        setIsMenuOpen(false);
    };

    return (
        <section className="section" id="home">
            <div className="container flex-column">
                <motion.div
                    className={`container__header flex-between`}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.3 }}
                    variants={fadeInUp}
                    transition={{ duration: 0.5 }}
                >
                    <Link className="header__logo" target="_blank" id="https://t.me/Mottyrix">
                        <img src={logo} alt="Логотип" className="logo" />
                        <span className="logo__text">Motty</span>
                    </Link>
                    <button
                        className={`burger ${isMenuOpen ? 'burger--active' : ''}`}
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                    >
                        <span></span>
                        <span></span>
                        <span></span>
                    </button>
                    <nav className="nav">
                        <Link id={"#about"} className={"link"}>Обо мне</Link>
                        <Link id={"#service"} className={"link"}>Услуги</Link>
                        <Link id={"#portfolio"} className={"link"}>Кейсы</Link>
                        <Link id={"#social"} className={"link"}>Соц сети</Link>
                    </nav>
                    <div className={`side-menu ${isMenuOpen ? 'side-menu--active' : ''}`}
                        onClick={() => setIsMenuOpen(false)}>
                        <nav className="side-nav" onClick={(e) => e.stopPropagation()}>
                            <Link id={"#about"} className={"link"} onClick={() => handleLinkClick("about")}>Обо мне</Link>
                            <Link id={"#service"} className={"link"} onClick={() => handleLinkClick("service")}>Услуги</Link>
                            <Link id={"#portfolio"} className={"link"} onClick={() => handleLinkClick("portfolio")}>Кейсы</Link>
                            <Link id={"#social"} className={"link"} onClick={() => handleLinkClick("social")}>Соц сети</Link>
                        </nav>
                    </div>
                </motion.div>

                <div className={`container__hero`}>
                    <motion.div
                        className="hero__text"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.3 }}
                        variants={slideInLeft}
                        transition={{ duration: 0.6 }}
                    >
                        <h1 className="hero__text__title">Контент-мейкер Гений,&nbsp;Филантроп <span className="name">Сатановский Матвей</span></h1>
                        <p className="text text_hero ">Директор по Себе | Основатель Своего Будущего <br /> Превращаю идеи в цифровую реальность через монтаж, код и тексты. <br /> Добро пожаловать на стройплощадку.</p>
                        <div className="buttons">
                            <Button size="normal" onClick={() => scrollToSection("about")}>Поподробнее</Button>
                            <Button className="acent" size="big" onClick={() => scrollToSection("service")}>Начать коллаборацию</Button>
                        </div>
                    </motion.div>

                    <div className="hero__image">
                        <motion.img
                            src={hero}
                            alt="Фото автора"
                            className="hero-img"
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.3 }}
                            variants={slideInRight}
                            transition={{ duration: 0.7 }}

                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;