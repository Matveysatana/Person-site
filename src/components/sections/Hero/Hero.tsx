import hero from '../../../assets/images/hero.png'
import logo from '../../../../public/logo.svg'


import './Hero.css'
import Button from "../../../ui/Button/Button";
import { scrollToSection } from "../../../utils/scrollUtils";
import Link from '../../../ui/Link/Link';


const Hero = () => {
    return (
        <section className="section" id="home">
            <div className="container flex-column">
                <div className={`container__header flex-between`}>
                    <a className="header__logo" href="/">
                        <img src={logo} alt="Логотип" className="logo" />
                        <span className="logo__text">Motty</span>
                    </a>
                    <nav>
                        <Link id={"#about"} className={"link"}>Обо мне</Link>
                        <Link id={"#service"} className={"link"}>Услуги</Link>
                        <Link id={"#portfolio"} className={"link"}>Кейсы</Link>
                        <Link id={"#social"} className={"link"}>Соц сети</Link>
                    </nav>
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