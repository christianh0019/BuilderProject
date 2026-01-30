
import Hero from '../template/Hero';
import Services from '../template/Services';
import Process from '../template/Process';
import Portfolio from '../template/Portfolio';
import Testimonials from '../template/Testimonials';
import About from '../template/About';
import Contact from '../template/Contact';

const TemplateShowcase = () => {
    return (
        <div className="bg-white">
            <Hero />
            <Services />
            <Process />
            <Portfolio showViewAll={false} />
            <About />
            <Testimonials />
            <Contact />
        </div>
    );
};

export default TemplateShowcase;
