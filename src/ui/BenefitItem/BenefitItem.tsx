import type { BenefitItemProps } from "../../types/BenefitItem";
import { scrollToSection } from "../../utils/scrollUtils";
import './BenefitItem.css'

const BenefitItem = ({ image, title, description, section }: BenefitItemProps) => {
    return (
        <div className="benefit__item" onClick={() => scrollToSection(section)}>
            <div className="benefit__icon">
                <img src={image} alt={title} loading="lazy" />
            </div>
            <div className="benefit__text">
                <h4 className="benefit__title">{title}</h4>
                <p className="text text__mini">{description}</p>
            </div>
        </div>
    );
};

export default BenefitItem;