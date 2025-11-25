import type { ServiceCardProps } from "../../types/ServiceCard";
import { scrollToSection } from "../../utils/scrollUtils";
import Button from "../Button/Button";
import './ServiceCard.css'




const ServiceCard = ({ id, image, title, description, features }: ServiceCardProps) => {

    return (
        <div className="card__wallaper" >
            <div className="number">{id}</div>


            <div className="card__image">
                <img className="card__icon" src={image} alt={title} />
            </div>

            <div className="card__content">

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

            </div>

            <div className="card__cta">
                <Button className="acent" onClick={() => scrollToSection("order")}>Обсудить проект</Button>
            </div>
        </div>
    );
};

export default ServiceCard;