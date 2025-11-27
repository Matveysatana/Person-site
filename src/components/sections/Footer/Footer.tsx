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

                <Link id={"https://t.me/Mottyrix"} target="_blank" ><img src={logo} alt="Логотип" className="footer_logo" /></Link>

                <div className="footer__nav">
                    <nav>
                        <Link id={'#about'} className={'footer__link link'}>Обо мне</Link>
                        <Link id={'#service'} className={'footer__link link'}>Услуги</Link>
                        <Link id={'#portfolio'} className={'footer__link link'}>Кейсы</Link>
                        <Link id={'#social'} className={'footer__link link'}>Соц сети</Link>
                    </nav>
                </div>
                <div className="footer__social">
                    <Link id={"https://youtube.com/@mottyrix"} className={"social youtube"} target="_blank">
                        <img src={youtube} alt="" />
                    </Link>
                    <Link id={"https://t.me/Mottyrix"} className={"social telegram"} target="_blank">
                        <img src={teleframm} alt="" />
                    </Link>
                    <Link id={"https://www.tiktok.com/@mottyrix"} className={"social tiktok"} target="_blank">
                        <img src={tiktok} alt="" />
                    </Link>
                    <Link id={"https://www.instagram.com/motty.world"} className={"social instagram"} target="_blank">
                        <img src={instagramm} alt="" />
                    </Link>

                </div>
                <div className="footer__copr">
                    <p className="text">Все права защиещены</p>
                    <Link id={'https://t.me/Mottyrix'} className='footer_copy' ><span className='footer__title'> @Сатановский&nbsp;Матвей&nbsp;2025</span></Link>
                </div>
            </div>
        </div>
    );
};

export default Footer;