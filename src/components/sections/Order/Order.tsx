import myPhoto from "../../../assets/images/order.png"
import Button from '../../../ui/Button/Button';
import './Order.css'
import { useForm } from 'react-hook-form';

interface OrderFormData {
    name: string;
    email: string;
    service: string;
    message: string;
}

const Order = () => {
    const { register, handleSubmit, formState: { errors } } = useForm<OrderFormData>();

    const onSubmit = (data: OrderFormData) => {
        console.log('Форма отправлена:', data);
    };

    return (
        <section className="section" id="order">
            <div className="container">
                <div className="order__wrapper">
                    {/* Левая часть - Фото и текст */}
                    <div className="order__info">
                        <div className="order__photo-container">
                            <img src={myPhoto} alt="Мое фото" className="order__photo" />
                        </div>
                        <div className="order__text">
                            <h3>Начнем ваш проект вместе!</h3>
                            <p className="order__description">
                                Давайте обсудим вашу задачу и найдем лучшее решение. От концепции до реализации — я помогу вам создать качественный продукт, который будет решать ваши бизнес-задачи.
                            </p>
                        </div>
                    </div>

                    <div className="order__form-container">
                        <form onSubmit={handleSubmit(onSubmit)} className="order__form">
                            <h4 className="form__title">Обсудить проект</h4>
                            <p className="form__subtitle">Оставьте заявку, и я свяжусь с вами в течение 24 часов</p>

                            <div className="form__group">
                                <label htmlFor="name" className="form__label">Ваше имя *</label>
                                <input
                                    id="name"
                                    type="text"
                                    className={`form__input ${errors.name ? 'form__input--error' : ''}`}
                                    placeholder="Введите ваше имя"
                                    {...register('name', {
                                        required: 'Имя обязательно',
                                        minLength: { value: 2, message: 'Минимум 2 символа' }
                                    })}
                                />
                                {errors.name && <span className="form__error">{errors.name.message}</span>}
                            </div>

                            <div className="form__group">
                                <label htmlFor="email" className="form__label">Email *</label>
                                <input
                                    id="email"
                                    type="email"
                                    className={`form__input ${errors.email ? 'form__input--error' : ''}`}
                                    placeholder="your@email.com"
                                    {...register('email', {
                                        required: 'Email обязателен',
                                        pattern: {
                                            value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                                            message: 'Некорректный email'
                                        }
                                    })}
                                />
                                {errors.email && <span className="form__error">{errors.email.message}</span>}
                            </div>

                            <div className="form__group">
                                <label htmlFor="service" className="form__label">Услуга *</label>
                                <select
                                    id="service"
                                    className={`form__input ${errors.service ? 'form__input--error' : ''}`}
                                    {...register('service', { required: 'Выберите услугу' })}
                                >
                                    <option value="">Выберите услугу</option>
                                    <option value="Веб-разработка">Веб-разработка</option>
                                    <option value="Графический дизайн">Графический дизайн</option>
                                    <option value="Видеомонтаж">Видеомонтаж</option>
                                </select>
                                {errors.service && <span className="form__error">{errors.service.message}</span>}
                            </div>

                            <div className="form__group">
                                <label htmlFor="message" className="form__label">Сообщение *</label>
                                <textarea
                                    id="message"
                                    rows={4}
                                    className={`form__input form__textarea ${errors.message ? 'form__input--error' : ''}`}
                                    placeholder="Опишите детали вашего проекта, сроки и пожелания..."
                                    {...register('message', {
                                        required: 'Сообщение обязательно',
                                        minLength: { value: 10, message: 'Минимум 10 символов' }
                                    })}
                                />
                                {errors.message && <span className="form__error">{errors.message.message}</span>}
                            </div>

                            <Button
                                type="submit"
                                className="form__button"
                            >
                                Отправить заявку
                            </Button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Order;