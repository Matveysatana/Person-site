import { useState, useEffect } from "react";
import { projects } from "../../../types/Case";
import Case from "../../../ui/Case/Case";
import "./Portfolio.css";
import { motion } from 'framer-motion';
import { fadeInBottom, springIn } from "../../../utils/animations";


const Portfolio = () => {
    const [currentSlide, setCurrentSlide] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentSlide((prev) =>
                prev === projects.length - 1 ? 0 : prev + 1
            );
        }, 15000);

        return () => clearInterval(interval);
    }, []);

    return (
        <section className='section' id='portfolio'>
            <div className="container">
                <motion.div className="portfolio__text"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.4 }}
                    variants={springIn}
                    transition={{ duration: 0.6 }}>
                    <p className="header2">Мои работы</p>
                </motion.div>

                <motion.div className="portfolio__slider-container"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}
                    variants={fadeInBottom}
                    transition={{ duration: 0.6 }}
                >
                    <div
                        className="portfolio__slider-track"
                        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
                    >
                        {projects.map((project) => (
                            <div key={project.id} className="portfolio__slide">
                                <Case {...project} />
                            </div>
                        ))}
                    </div>

                    {/* Индикаторы */}
                    <div className="portfolio__indicators">
                        {projects.map((_, index) => (
                            <button
                                key={index}
                                className={`portfolio__indicator ${index === currentSlide ? 'portfolio__indicator--active' : ''}`}
                                onClick={() => setCurrentSlide(index)}
                            />
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Portfolio;