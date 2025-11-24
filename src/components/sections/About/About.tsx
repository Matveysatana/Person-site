import aboutFoto from '../../../assets/images/about.jpg'
import { benefit } from '../../../types/BenefitItem';
import BenefitItem from '../../../ui/BenefitItem/BenefitItem';
import Link from '../../../ui/Link/Link';

import './About.css'


const About = () => {
    return (
        <section className="section" id="about">
            <div className="container flex-between">
                <div className="about__image_block">
                    <img src={aboutFoto} className="about__image" alt="Фото Матвея" />
                    <figcaption className="about__image_caption">
                        Фотка с первенства Крыма, поподробнее можно посмотреть <Link id='' className='link__text'>здесь</Link>
                    </figcaption>
                </div>
                <div className="about__text">
                    <h2 className="about__text__title">Почему выбирают меня?</h2>
                    <blockquote className="about__quote">
                        "Возраст — не показатель экспертизы, а энергия и современный взгляд — моё конкурентное преимущество"
                    </blockquote>
                    <p className="text">Мне 15 лет, и я уже успел освоить веб-разработку, дизайн и монтаж видео.
                        Я не просто выполняю задачи — я понимаю, как создавать продукты, которые
                        решают реальные бизнес-проблемы и нравятся пользователям.</p>


                    <p className="text">Для меня каждый проект — это возможность создать
                        что-то крутое и полезное.</p>

                    <div className="about__benefit">
                        {benefit.map((benefit) => (
                            <BenefitItem
                                key={benefit.id}
                                section={benefit.section}
                                title={benefit.title}
                                description={benefit.description}
                                image={benefit.image} />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;