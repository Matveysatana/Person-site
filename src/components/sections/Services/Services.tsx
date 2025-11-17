import ServiceCard from "../../../ui/ServiceCard/ServiceCard";
import { services } from "../../../types/ServiceCard";
import './Services.css'

const Services = () => {
    return (
        <section className="section dark" id="service">
            <div className="container ">
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