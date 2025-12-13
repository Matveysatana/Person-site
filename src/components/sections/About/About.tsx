import aboutFoto from '../../../assets/images/about.jpg'
import { benefit } from '../../../types/BenefitItem';
import BenefitItem from '../../../ui/BenefitItem/BenefitItem';
import Link from '../../../ui/Link/Link';
import { motion } from 'framer-motion';

import './About.css'
import { slideInLeft, slideInRight, springIn } from '../../../utils/animations';


const About = () => {
    return (
        <section className="section" id="about">
            <div className="container about_flex">
                <div className="about">
                    <motion.div className="about__image_block"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.5 }}
                        variants={slideInLeft}
                        transition={{ duration: 0.6 }}
                    >
                        <img src={aboutFoto} className="about__image" alt="Фото Матвея" loading='lazy' />
                        <figcaption className="about__image_caption">
                            Фотка с первенства Крыма, поподробнее можно посмотреть <Link id='https://vt.tiktok.com/ZSfVqQ6Tn/' className='link__text'>здесь</Link>
                        </figcaption>
                    </motion.div>
                    <motion.div className="about__text"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.5 }}
                        variants={slideInRight}
                        transition={{ duration: 0.6 }}>

                        <p className="header2">Почему выбирают меня?</p>
                        <blockquote className="about__quote">
                            "Современный мир не спрашивает возраст — он ценит идеи, скорость и смелость их реализации"
                        </blockquote>
                        <p className="text">Приветствую тебя еще раз! Мне 15 лет и давай познакомимся немного поближе. Весь мой путь я начинал с увлечения программированием, однако, позже меня затянул монтаж и дизайн, ведь с детсва мечтал делать крутые видео и посты ;) <br /> Так же я занимаюсь волейболом и веду активный здоровый образ жизни, спорт помогает бороться со стрессом и выгоранием. Проще говоря, я разносторонний человек. Сейчас я совмещаю все 3 направления и строю свою империю - <Link className='link' target='_blanck' id='https://t.me/Mottyrix'> личный бренд. </Link>  </p>


                        <p className="text">Для меня каждый проект — это возможность создать что-то крутое и полезное. Я уже руковожу,<Link className='link' id='#social'> несколькими инициативами </Link>и планирую масштабироваться. Я ответственно подхожу к любым задачам. Мой принцип — если берусь за дело, то довожу до идеала.</p>

                        <p className="text">
                            Готов создать для тебя проект, который будет выделяться?<br /> С моими преимуществами ты можешь ознакомиться ниже  ↓
                        </p>
                    </motion.div>

                </div>

                <motion.div className="about__benefit"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.3 }}
                    variants={springIn}
                    transition={{ duration: 0.6 }}>
                    {benefit.map((benefit) => (
                        <BenefitItem
                            key={benefit.id}
                            {...benefit} />
                    ))}
                </motion.div>
            </div>
        </section >
    );
};

export default About;