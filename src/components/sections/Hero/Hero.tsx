import Navigate from "../../../ui/Navigate/Navigate";
import hero from '../../../assets/images/1.png'
import logo from '../../../../public/logo.svg'
import './Hero.css'
import Button from "../../../ui/Button/Button";



const Hero = () => {
    return (
        <div className="section" id="home">
            <div className={`container ${"flex-column"}`}>
                <div className={`container__header ${'felx-between'}`}>
                    <a className="header__logo" href="/">
                        <img src={logo} alt="Логотип" className="logo" />
                        <span className="logo__text">Motty</span>
                    </a>
                    <Navigate />
                </div>
                <div className={`container__hero ${'felx-between'}`}>
                    <div className="hero__text">
                        <h1 className="hero__text__title">Контент-мейкер Гений,&nbsp;Филантроп <span className="name">Сатановский Матвей</span></h1>
                        <p className="hero__text__desc">Директор по Себе | Основатель Своего Будущего <br/> Превращаю идеи в цифровую реальность через монтаж, код и тексты. <br/> Добро пожаловать на стройплощадку.</p>
                        <div className="buttons">
                            <Button size="normal">Поподробнее</Button>
                            <Button className="acent" size="big">Начать коллабарацию</Button>
                        </div>

                    </div>
                    <div className="hero__image">
                        <img src={hero} alt="Фото автора" className="hero-img" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;