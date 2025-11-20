
import type { SocialCardProps } from '../../types/SocialCard';
import './SocialCard.css';

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
                    <div className="social-card__icon">{icon}</div>
                    <h3 className="social-card__name">{name}</h3>
                    <div className="social-card__subscribers">{subscribers}</div>
                    <p className="social-card__description">{description}</p>
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