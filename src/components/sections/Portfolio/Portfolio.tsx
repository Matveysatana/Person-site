import { useState, useEffect } from "react";
import { projects } from "../../../types/Case";
import Case from "../../../ui/Case/Case";
import "./Portfolio.css";

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
                <div className="portfolio__text">
                    <p className="header2">Мои работы</p>
                </div>

                <div className="portfolio__slider-container">
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
                </div>
            </div>
        </section>
    );
};

export default Portfolio;