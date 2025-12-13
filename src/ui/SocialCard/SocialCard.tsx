
import type { SocialCardProps } from '../../types/SocialCard';
import { fadeInBottom, springIn } from '../../utils/animations';
import './SocialCard.css';
import { motion } from 'framer-motion';

const SocialCard = ({
    name,
    subscribers,
    description,
    icon,
    link,
    buttonText,
    color
}: SocialCardProps) => {
    return (
        <a
            href={link}
            className="social-card"
            target="_blank"
            rel="noopener noreferrer"
            style={{ '--accent-color': color } as React.CSSProperties}

        >
            <div className="social-card__inner">
                <div className="social-card__content">

                    <motion.div className="social-card__icon"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.5 }}
                        variants={springIn}
                        transition={{ duration: 0.5 }}>

                        {icon}
                    </motion.div>

                    <motion.h3 className="social-card__name"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.3 }}
                        variants={fadeInBottom}
                        transition={{ duration: 0.6 }}>{name}</motion.h3>

                    <motion.div className="social-card__subscribers"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.3 }}
                        variants={fadeInBottom}
                        transition={{ duration: 0.6 }}>{subscribers}</motion.div>

                    <motion.p className="social-card__description"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.3 }}
                        variants={fadeInBottom}
                        transition={{ duration: 0.6 }}>{description}</motion.p>

                </div>

                <div className="social-card__hover">
                    <button className="social-card__button">
                        {buttonText}
                    </button>
                </div>
            </div>
        </a>
    );
};

export default SocialCard;