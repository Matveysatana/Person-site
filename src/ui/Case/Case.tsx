import type { CaseProps } from "../../types/Case";
import "./Case.css"

const Case = ({ link, image, title, result, description, author }: CaseProps) => {
    return (
        <div className="case__wallaper">

            <div className="project__image__block">

                <a className="project__image" href={link} target="_blank" rel="noopener noreferrer">
                    <img src={image} alt={title} />
                </a>
                <div className="project__result">
                    <span className="result">Результат: {result}</span>
                </div>

            </div>

            <div className="project__review__block">

                <div className="project__text">
                    <h4 className="project__title">{title}</h4>
                    <p className="text">{description}</p>
                </div>

                <div className="project__content">
                    <div className="review__author">
                        <img src={author.image} alt={author.name} className="author__avatar" />
                        <span className="author__name">{author.name}</span>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Case;