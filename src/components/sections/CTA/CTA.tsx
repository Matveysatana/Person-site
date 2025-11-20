// components/CTA/CTA.jsx
import './CTA.css'

const CTA = () => {
    const socialNetworks = [
        {
            platform: 'YouTube',
            icon: '▶️',
            description: 'Челленджи, исследования, бизнес-аналитика. Здесь я делюсь своим путешествием в мир технологий и предпринимательства.',
            subscribers: '27 подписчиков',
            value: 'Узнай, как подросток строит бизнес в 15 лет',
            ctaText: 'Смотреть видео',
            link: '#'
        },
        {
            platform: 'Telegram',
            icon: '📢',
            description: 'Личный дневник моего развития. Факты обо мне, планы, мысли о бизнесе и мотивация для таких же подростков.',
            subscribers: '7 подписчиков',
            value: 'Будь в курсе моего пути и получай инсайты',
            ctaText: 'Присоединиться',
            link: '#'
        },
        {
            platform: 'TikTok',
            icon: '🎵',
            description: 'Эдиты, мотивационные ролики, забавные моменты. Короткий формат для быстрого вдохновения.',
            subscribers: '10 подписчиков',
            value: 'Получай заряд мотивации за 60 секунд',
            ctaText: 'Смотреть рилсы',
            link: '#'
        },
        {
            platform: 'Instagram',
            icon: '📸',
            description: 'Визуальная история моего пути. Посты о жизни, бизнесе и творчестве.',
            subscribers: '20 постов',
            value: 'Следи за визуальной стороной моего развития',
            ctaText: 'Подписаться',
            link: '#'
        }
    ];

    return (
        <section className="section cta" id="cta">
            <div className="container">
                <div className="cta__grid">
                    {/* Левая колонка - Заказ услуг */}
                    <div className="cta__services">
                        <h2>Готовы начать проект?</h2>
                        <p className="cta__subtitle">
                            Давайте создадим что-то крутое вместе! Я готов взяться за ваш проект 
                            и превратить идею в качественный цифровой продукт.
                        </p>
                        
                        <div className="services__list">
                            <div className="service__item">
                                <span className="service__icon">💻</span>
                                <div>
                                    <h4>Веб-разработка</h4>
                                    <p>Современные сайты на React</p>
                                </div>
                            </div>
                            <div className="service__item">
                                <span className="service__icon">🎨</span>
                                <div>
                                    <h4>Дизайн</h4>
                                    <p>UI/UX и графический дизайн</p>
                                </div>
                            </div>
                            <div className="service__item">
                                <span className="service__icon">🎬</span>
                                <div>
                                    <h4>Монтаж видео</h4>
                                    <p>Обработка и цветокоррекция</p>
                                </div>
                            </div>
                        </div>

                        <a href="#order" className="btn btn-primary btn-large">
                            🚀 Обсудить проект
                        </a>
                    </div>

                    {/* Правая колонка - Соцсети */}
                    <div className="cta__socials">
                        <h2>Следи за моим путешествием</h2>
                        <p className="cta__subtitle">
                            Подписывайся на мои соцсети — там я делюсь тем, 
                            что не попадает на сайт. Вместе строим комьюнити 
                            целеустремленных подростков!
                        </p>

                        <div className="socials__grid">
                            {socialNetworks.map((social, index) => (
                                <div key={index} className="social__card">
                                    <div className="social__header">
                                        <span className="social__icon">{social.icon}</span>
                                        <div>
                                            <h4>{social.platform}</h4>
                                            <span className="social__stats">{social.subscribers}</span>
                                        </div>
                                    </div>
                                    <p className="social__description">{social.description}</p>
                                    <div className="social__value">
                                        <strong>Что получишь:</strong> {social.value}
                                    </div>
                                    <a href={social.link} className="btn btn-outline btn-small">
                                        {social.ctaText}
                                    </a>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CTA;