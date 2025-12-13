import ServiceCard from "../../../ui/ServiceCard/ServiceCard";
import { services } from "../../../types/ServiceCard";
import './Services.css'

const Services = () => {
    return (
        <section className="section" id="service">
            <div className="container ">
                <div className="text__block">
                    <p className="header2">Что я могу сделать для <span className="you">тебя </span></p>
                </div>

                <div className="cards ">
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