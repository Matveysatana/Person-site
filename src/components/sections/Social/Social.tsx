import './Social.css'
import { socialData } from '../../../types/SocialCard';
import SocialCard from '../../../ui/SocialCard/SocialCard';

const Social = () => {
    return (
        <section className='section' id='social'>
            <div className="cta__text">
                <h2>Еще не готовы к заказу?</h2>
                <p className="text">Тогда, можете посмотреть меня в других сферах медийности и знать обо мне побольше!</p>
            </div>
            <div className="social__cards">
                {socialData.map((card) => (
                    <SocialCard
                        key={card.id}
                        {...card}
                    />
                ))}
            </div>
        </section>
    );
};

export default Social;