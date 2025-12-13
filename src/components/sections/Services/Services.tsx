import ServiceCard from "../../../ui/ServiceCard/ServiceCard";
import { services } from "../../../types/ServiceCard";
import './Services.css'
import { motion } from 'framer-motion';
import { scaleIn } from "../../../utils/animations";

const Services = () => {
    return (
        <section className="section" id="service">
            <div className="container ">
                <motion.div className="text__block"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}
                    variants={scaleIn}
                    transition={{ duration: 0.6 }}>
                    <p className="header2">Что я могу сделать для <span className="you">тебя </span></p>
                </motion.div>

                <div className="cards"
                >
                    {services.map((service) => (
                        <ServiceCard
                            key={service.id}
                            {...service}
                        />

                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;