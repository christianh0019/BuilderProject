import { Link } from 'react-router-dom';
import { Home as HomeIcon, Hammer, Layout, Ruler, ArrowRight } from 'lucide-react';

const Services = () => {
    return (
        <section className="py-32 bg-white">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
                    {/* Sidebar Title */}
                    <div className="lg:col-span-4 lg:sticky lg:top-32 h-fit">
                        <span className="text-[#2B70B6] font-bold tracking-widest uppercase text-sm block mb-4">What We Do</span>
                        <h2 className="text-4xl md:text-5xl font-serif font-bold text-slate-900 mb-8 leading-tight">Master Craftsmanship<br />For Every Scale.</h2>
                        <p className="text-slate-600 text-lg leading-relaxed mb-8">
                            From concept to completion, we handle every aspect of your residential construction project with precision, transparency, and architectural integrity.
                        </p>
                        <button className="inline-flex items-center text-slate-900 font-bold border-b-2 border-[#2B70B6] pb-1 hover:text-[#2B70B6] transition-colors">
                            Explore All Services <ArrowRight className="ml-2 w-4 h-4" />
                        </button>
                    </div>

                    {/* Grid */}
                    <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-8">
                        {[
                            {
                                icon: HomeIcon,
                                title: "Custom Homes",
                                desc: "Design & build services for new custom and semi-custom homes on your lot.",
                                link: "/services/new-construction"
                            },
                            {
                                icon: Hammer,
                                title: "Remodeling",
                                desc: "Whole-home remodels, adapting your existing space to your changing needs.",
                                link: "/services/remodeling"
                            },
                            {
                                icon: Layout,
                                title: "Basements",
                                desc: "Add usable square footage with custom basement finishing and suites.",
                                link: "/services/basement-finishing"
                            },
                            {
                                icon: Ruler,
                                title: "Additions",
                                desc: "Pop-tops, ADUs, and ground-level additions to maximize your property.",
                                link: "/services/additions"
                            }
                        ].map((service, index) => (
                            <div key={index} className="group p-10 bg-slate-50 hover:bg-slate-900 transition-colors duration-500">
                                <service.icon size={48} className="text-[#2B70B6] mb-8" />
                                <h3 className="text-2xl font-serif font-bold text-slate-900 group-hover:text-white mb-4 transition-colors">{service.title}</h3>
                                <p className="text-slate-600 group-hover:text-slate-300 mb-8 leading-relaxed transition-colors">{service.desc}</p>
                                <button className="text-slate-900 group-hover:text-[#2B70B6] font-bold inline-flex items-center uppercase tracking-widest text-xs transition-colors">
                                    Learn More <ArrowRight size={14} className="ml-2 group-hover:translate-x-1 transition-transform" />
                                </button>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Services;
