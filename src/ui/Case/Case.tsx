import type { CaseProps } from "../../types/Case";
import { fadeInBottom, slideInLeft } from "../../utils/animations";
import "./Case.css"
import { motion } from 'framer-motion';

const Case = ({ link, image, title, result, description, author }: CaseProps) => {
    return (
        <div className="case__wallaper">

            <div className="project__image__block">

                <a className="project__image" href={link} target="_blank" rel="noopener noreferrer">
                    <img src={image} alt={title} />
                </a>
                <motion.div className="project__result"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.7 }}
                    variants={fadeInBottom}
                    transition={{ duration: 0.6 }}
                >
                    <span className="result">Результат: {result}</span>
                </motion.div>

            </div>

            <motion.div className="project__review__block"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.8 }}
                variants={slideInLeft}
                transition={{ duration: 0.6 }}
            >

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

            </motion.div>
        </div >
    );
};

export default Case;