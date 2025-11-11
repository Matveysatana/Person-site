import About from "../sections/About/About";
import Cases from "../sections/Cases/Cases";
import CTA from "../sections/CTA/CTA";
import Hero from "../sections/Hero/Hero";
import Order from "../sections/Order/Order";
import Reviwes from "../sections/Reviews/Reviwes";
import Services from "../sections/Services/Services";
import SocialProof from "../sections/SocialProof/SocialProof";
import './Layout.css'

const Layout = () => {
    return (
        <main className="layout">
            <Hero />
            <About />
            <Services />
            <Cases />
            <Reviwes />
            <CTA />
            <SocialProof />
            <Order />
        </main>
    );
};

export default Layout;