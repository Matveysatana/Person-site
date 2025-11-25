import ServiceCard from "../../../ui/ServiceCard/ServiceCard";
import { services } from "../../../types/ServiceCard";
import './Services.css'

const Services = () => {
    return (
        <section className="section" id="service">
            <div className="container ">
                <div className="text__block">
                    <h2>Что я могу сделать для <span className="you">тебя</span></h2>
                    <p className="text">услуги, которые тебе могут подойти) </p>
                </div>

                <div className="cards ">
                    {services.map((service) => (
                        <ServiceCard
                            id={service.id}
                            key={service.id}
                            title={service.title}
                            description={service.description}
                            image={service.image}
                            features={service.features}
                        />

                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;