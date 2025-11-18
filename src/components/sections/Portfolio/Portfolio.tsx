import { projects } from "../../../types/Case";
import Case from "../../../ui/Case/Case";
import "./Portfolio.css"

const Portfolio = () => {
    return (
        <section className='section' id='portfolio'>
            <div className="container">
                <div className="portfolio__text">
                    <h2 className="title">Мои работы</h2>
                    <p className="text">портфолио собранное из реальных проектов и отзывов</p>
                </div>
                <div className="portfolio__slider">
                    {projects.map((project) => (
                        <Case
                            key={project.id}
                            {...project}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Portfolio;