import About from "../sections/About/About";
import Hero from "../sections/Hero/Hero";
import Order from "../sections/Order/Order";
import Portfolio from "../sections/Portfolio/Portfolio";
import Services from "../sections/Services/Services";
import Social from "../sections/Social/Social";
import './Layout.css'

const Layout = () => {
    return (
        <main className="layout">
            <Hero />
            <About />
            <Services />
            <Portfolio />
            <Social />
            <Order />
        </main>
    );
};

export default Layout;