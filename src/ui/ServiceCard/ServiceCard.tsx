import type { ServiceCardProps } from "../../types/ServiceCard";
import { slideInLeft, springIn } from "../../utils/animations";
import { scrollToSection } from "../../utils/scrollUtils";
import Button from "../Button/Button";
import './ServiceCard.css'
import { motion } from 'framer-motion';




const ServiceCard = ({ id, image, title, description, features }: ServiceCardProps) => {

    return (
        <div className="card__wallaper" >
            <motion.div className="number"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.4 }}
                variants={slideInLeft}
                transition={{ duration: 0.6 }}>{id}</motion.div>


            <motion.div className="card__image"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                variants={springIn}
                transition={{ duration: 0.6 }}>
                <img className="card__icon" src={image} alt={title} />
            </motion.div>

            <motion.div className="card__content"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                variants={springIn}
                transition={{ duration: 0.6 }}
            >

                <div className="card__text">
                    <h3 className="card__text__title">{title}</h3>
                    <p className="text">{description}</p>
                </div>

                {
                    <ul className="card__features">
                        {features?.map((feature, index) => (
                            <li key={index} className="card__feature">
                                {index > 0 && <span className="feature__icon">✓</span>}
                                {feature}
                            </li>
                        ))}
                    </ul>
                }

            </motion.div>

            <motion.div className="card__cta"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                variants={springIn}
                transition={{ duration: 0.6 }}>
                <Button className="acent" onClick={() => scrollToSection("order")}>Обсудить проект</Button>
            </motion.div>
        </div>
    );
};

export default ServiceCard;