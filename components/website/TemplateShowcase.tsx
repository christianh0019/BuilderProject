import Hero from '../template/Hero';
import Services from '../template/Services';
import Process from '../template/Process';
import Portfolio from '../template/Portfolio';
import Testimonials from '../template/Testimonials';
import About from '../template/About';
import Contact from '../template/Contact';
import Header from '../template/Header';
import Footer from '../template/Footer';

const TemplateShowcase = () => {
    return (
        <div className="bg-white font-sans text-slate-900 pointer-events-none select-none">
            <Header />
            <Hero />
            <Services />
            <Process />
            <Portfolio showViewAll={false} />
            <About />
            <Testimonials />
            <Contact />
            <Footer />
        </div>
    );
};

export default TemplateShowcase;
