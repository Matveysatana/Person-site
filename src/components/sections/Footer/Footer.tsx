import logo from '../../../../public/logo.svg'
import youtube from '../../../assets/socialLogos/YouTube.svg'
import teleframm from '../../../assets/socialLogos/Telegtam.svg'
import tiktok from '../../../assets/socialLogos/TikTok.svg'
import instagramm from '../../../assets/socialLogos/Insta.svg'

import Navigate from '../../../ui/Navigate/Navigate';

import './Footer.css'


const Footer = () => {
    return (
        <div className='footer'>
            <div className="container footer__contetn">

                <img src={logo} alt="Логотип" className="logo" />

                <div className="footer__nav">
                    навигация
                    <Navigate />
                </div>
                <div className="footer__social">
                    <img src={youtube} alt="" />
                    <img src={teleframm} alt="" />
                    <img src={tiktok} alt="" />
                    <img src={instagramm} alt="" />

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