import myPhoto from "../../../assets/images/order.png";
import Button from '../../../ui/Button/Button';
import './Order.css';
import { useForm } from 'react-hook-form';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { scaleIn, slideInLeft, slideInRight, springIn } from "../../../utils/animations";

interface OrderFormData {
    name: string;
    email: string;
    service: string;
    message: string;
}

const Order = () => {
    const { register, handleSubmit, formState: { errors }, reset } = useForm<OrderFormData>();
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitMessage, setSubmitMessage] = useState('');

    // Удален старый EMAIL_API_URL

    const onSubmit = async (data: OrderFormData) => {
        setIsSubmitting(true);
        setSubmitMessage('');

        try {
            const formData = new FormData();
            formData.append("name", data.name);
            formData.append("email", data.email);
            formData.append("service", data.service);
            formData.append("message", data.message);
            formData.append("access_key", "679221b8-3718-4e30-8418-7058b7b93515");

            const response = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                body: formData
            });

            const result = await response.json();

            if (result.success) {
                setSubmitMessage('✅ Сообщение отправлено! Я свяжусь с вами в течение 24 часов.');
                reset();
            } else {
                setSubmitMessage(`❌ ${result.message || 'Произошла ошибка при отправке.'}`);
            }
        } catch (error) {
            console.error('Ошибка отправки:', error);
            setSubmitMessage('❌ Ошибка отправки. Пожалуйста, попробуйте еще раз или свяжитесь со мной другим способом.');
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <section className="section" id="order">
            <div className="container">
                <div className="order__wrapper">
                    {/* Левая часть - Фото и текст */}
                    <motion.div className="order__info"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.6 }}
                        variants={slideInLeft}
                        transition={{ duration: 0.6 }}>
                        <div className="order__photo-container">
                            <img src={myPhoto} alt="Мое фото" className="order__photo" />
                        </div>
                        <motion.div className="order__text"
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.3 }}
                            variants={scaleIn}
                            transition={{ duration: 0.6 }}>
                            <h3>Начнем ваш проект вместе!</h3>
                            <p className="order__description">
                                Давайте обсудим вашу задачу и найдем лучшее решение. От концепции до реализации — я помогу вам создать качественный продукт, который будет решать ваши бизнес-задачи.
                            </p>
                        </motion.div>
                    </motion.div>

                    {/* Правая часть - Форма */}
                    <motion.div className="order__form-container"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.3 }}
                        variants={slideInRight}
                        transition={{ duration: 0.6 }}>
                        <motion.form onSubmit={handleSubmit(onSubmit)} className="order__form"
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.6 }}
                            variants={springIn}
                            transition={{ duration: 0.6 }}>
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
                                disabled={isSubmitting}
                            >
                                {isSubmitting ? 'Отправка...' : 'Отправить заявку'}
                            </Button>

                            {submitMessage && (
                                <div className={`submit-message ${submitMessage.includes('✅') ? 'submit-message--success' : 'submit-message--error'}`}>
                                    {submitMessage}
                                </div>
                            )}
                        </motion.form>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Order;