import type { MiniCardProps } from '../../types/MiniCard';
import { scrollToSection } from '../../utils/scrollUtils';
import './MiniCard.css'

const MiniCard = ({ image, title, description, section }: MiniCardProps) => {

  return (
    <div className="mini__card" onClick={() => scrollToSection(section)}>
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