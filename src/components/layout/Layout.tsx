import About from "../sections/About/About";
import CTA from "../sections/CTA/CTA";
import Hero from "../sections/Hero/Hero";
import Order from "../sections/Order/Order";
import Portfolio from "../sections/Portfolio/Portfolio";
import Services from "../sections/Services/Services";
import SocialProof from "../sections/SocialProof/SocialProof";
import './Layout.css'

const Layout = () => {
    return (
        <main className="layout">
            <Hero />
            <About />
            <Services />
            <Portfolio />
            <CTA />
            <SocialProof />
            <Order />
        </main>
    );
};

export default Layout;