import type { MiniCardProps } from '../../types/MiniCard';
import './MiniCard.css'

const MiniCard = ({ image, title, description }: MiniCardProps) => {
  const handleClick = () => {

    const servicesSection = document.getElementById('service');
    if (servicesSection) {
      servicesSection.scrollIntoView({
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="mini__card" onClick={handleClick}>
      <div className="mini__card__image">
        <img src={image} alt={title} />
      </div>
      <div className="mini__card__content">
        <h4 className="mini__card__title">{title}</h4>
        <div className="text text__mini">{description}</div>
      </div>
    </div>
  );
};

export default MiniCard;