import logo from '../../../../public/logo.svg'
import youtube from '../../../assets/socialLogos/YouTube.svg'
import teleframm from '../../../assets/socialLogos/Telegtam.svg'
import tiktok from '../../../assets/socialLogos/TikTok.svg'
import instagramm from '../../../assets/socialLogos/Insta.svg'


import './Footer.css'
import Link from '../../../ui/Link/Link'


const Footer = () => {
    return (
        <div className='footer'>
            <div className="container footer__contetn">

                <img src={logo} alt="Логотип" className="logo" />

                <div className="footer__nav">
                    <nav>
                        <Link id={'#about'} className={'footer__link link'}>Обо мне</Link>
                        <Link id={'#service'} className={'footer__link link'}>Услуги</Link>
                        <Link id={'#portfolio'} className={'footer__link link'}>Кейсы</Link>
                        <Link id={'#social'} className={'footer__link link'}>Соц сети</Link>
                    </nav>
                </div>
                <div className="footer__social">
                    <Link id={""} className={"social"}>
                        <img src={youtube} alt="" />
                    </Link>
                    <Link id={""} className={"social"}>
                        <img src={teleframm} alt="" />
                    </Link>
                    <Link id={""} className={"social"}>
                        <img src={tiktok} alt="" />
                    </Link>
                    <Link id={""} className={"social"}>
                        <img src={instagramm} alt="" />
                    </Link>

                </div>
                <div className="footer__copr">
                    Все права защиещены
                    <span className='footer__title'> Сатановский Матвей 2025</span>
                </div>
            </div>
        </div>
    );
};

export default Footer;