
const About = () => {
    return (
        <section className="py-32 bg-white overflow-hidden">
            <div className="container mx-auto px-6">
                <div className="flex flex-col lg:flex-row items-center gap-20">
                    <div className="lg:w-1/2 relative">
                        <div className="absolute -top-10 -left-10 w-40 h-40 bg-[#2B70B6]/20 rounded-full blur-3xl"></div>
                        <img
                            src="/images/modern_kitchen.png"
                            alt="Luxury Custom Home Interior"
                            className="w-full h-auto shadow-2xl relative z-10"
                        />
                        <div className="absolute -bottom-10 -right-10 bg-slate-900 p-10 text-white z-20 hidden md:block">
                            <span className="block text-4xl font-serif font-bold text-[#2B70B6] mb-1">30+</span>
                            <span className="uppercase tracking-widest text-sm">Years Experience</span>
                        </div>
                    </div>

                    <div className="lg:w-1/2">
                        <span className="text-[#2B70B6] font-bold tracking-widest uppercase text-sm mb-4 block">Our Heritage</span>
                        <h2 className="text-4xl md:text-5xl font-serif font-bold text-slate-900 mb-8 leading-tight">Rooted in Northern Colorado,<br />Built on Trust.</h2>
                        <p className="text-slate-600 text-lg mb-8 leading-relaxed">
                            We started in 1990 with a simple mission: build quality you can see. Today, Homestead Home Builders is Northern Colorado's most trusted partner for complex custom builds and seamless renovations.
                        </p>

                        <div className="grid grid-cols-2 gap-8 mb-10">
                            <div>
                                <h4 className="font-bold text-slate-900 mb-2">Detailed Planning</h4>
                                <p className="text-sm text-slate-600">Fixed-price contracts and clear schedules.</p>
                            </div>
                            <div>
                                <h4 className="font-bold text-slate-900 mb-2">Master Craftsmanship</h4>
                                <p className="text-sm text-slate-600">We don't cut corners. We build legacies.</p>
                            </div>
                        </div>

                        <button className="inline-flex items-center px-8 py-4 bg-slate-900 text-white font-bold uppercase tracking-widest hover:bg-[#2B70B6] transition-colors">
                            Meet The Team
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
