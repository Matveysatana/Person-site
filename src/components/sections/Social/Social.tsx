import './Social.css'
import { socialData } from '../../../types/SocialCard';
import SocialCard from '../../../ui/SocialCard/SocialCard';
import { motion } from 'framer-motion';
import { fadeInBottom, springIn } from '../../../utils/animations';

const Social = () => {
    return (
        <section className='section' id='social'>
            <div className="container">
                <motion.div className="cta__text"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}
                    variants={springIn}
                    transition={{ duration: 0.6 }}>
                    <p className='header2'>Еще не готовы к заказу?</p>
                    <p className="text">Тогда, можете посмотреть меня в других сферах медийности и знать обо мне побольше!</p>
                </motion.div>
                <div className="social__cards">
                    {socialData.map((card) => (
                        <SocialCard
                            key={card.id}
                            {...card}
                        />
                    ))}
                </div>
                <motion.div className="extra_text"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}
                    variants={fadeInBottom}
                    transition={{ duration: 0.6 }}>
                    <p className="text_social">Данные за 2025 год</p>
                </motion.div>
            </div>

        </section>
    );
};

export default Social;