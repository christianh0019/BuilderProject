import React from 'react';
import { ArrowRight, Instagram, Phone, Mail, MapPin, Star } from 'lucide-react';

const VersoShowcase: React.FC = () => {
    return (
        <div className="font-sans antialiased text-stone-900 bg-[#FDFBF7]">
            {/* Mock Navigation */}
            <nav className="sticky top-0 z-50 bg-[#FDFBF7]/95 backdrop-blur-md border-b border-stone-200 px-6 md:px-12 py-5 flex justify-between items-center transition-all">
                <div className="text-xl md:text-2xl font-serif tracking-widest font-bold text-stone-900">VERSO BUILDERS</div>
                <div className="hidden md:flex space-x-8 text-xs font-bold tracking-widest uppercase text-stone-500">
                    <span className="cursor-pointer hover:text-stone-900 transition-colors">Portfolio</span>
                    <span className="cursor-pointer hover:text-stone-900 transition-colors">Our Process</span>
                    <span className="cursor-pointer hover:text-stone-900 transition-colors">About</span>
                    <span className="cursor-pointer hover:text-stone-900 transition-colors">Journal</span>
                </div>
                <button className="bg-stone-900 text-white px-6 py-3 text-xs font-bold tracking-widest uppercase hover:bg-stone-800 transition-colors">
                    Start Your Build
                </button>
            </nav>

            {/* Hero Section */}
            <header className="relative h-[600px] flex items-center justify-center text-center px-6">
                <div className="absolute inset-0 z-0">
                    {/* New England Style Home Background */}
                    <img
                        src="https://images.unsplash.com/photo-1605276374104-dee2a0ed3cd6?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
                        alt="South Shore Custom Home"
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-stone-900/40"></div>
                </div>

                <div className="relative z-10 text-white max-w-4xl mx-auto animate-fadeIn">
                    <p className="text-xs font-bold tracking-[0.3em] uppercase mb-6 text-stone-200">Hingham • Cohasset • Scituate</p>
                    <h1 className="text-5xl md:text-7xl font-serif mb-8 leading-tight">
                        Crafting The South Shore's <br /> Finest Custom Homes.
                    </h1>
                    <div className="flex flex-col md:flex-row gap-4 justify-center">
                        <button className="bg-white text-stone-900 px-8 py-4 text-xs font-bold tracking-widest uppercase hover:bg-stone-100 transition-all">
                            View Portfolio
                        </button>
                        <button className="border border-white text-white px-8 py-4 text-xs font-bold tracking-widest uppercase hover:bg-white hover:text-stone-900 transition-all">
                            Our Process
                        </button>
                    </div>
                </div>
            </header>

            {/* Intro Text */}
            <section className="py-24 px-6 bg-white">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-3xl md:text-4xl font-serif text-stone-900 mb-8 leading-relaxed">
                        "We believe a home should be a sanctuary—a quiet backdrop for the memories that define a life well lived."
                    </h2>
                    <div className="w-20 h-px bg-stone-300 mx-auto mb-8"></div>
                    <p className="text-stone-500 leading-loose max-w-2xl mx-auto">
                        Specializing in custom homes on the South Shore of Massachusetts. From the initial sketch to the final walk-through, every detail is managed with precision, transparency, and care.
                    </p>
                </div>
            </section>

            {/* Our Process Section */}
            <section className="py-24 px-6 bg-[#F5F5F0]">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-16">
                        <span className="text-stone-500 text-xs font-bold tracking-[0.2em] uppercase block mb-4">How We Build</span>
                        <h2 className="text-4xl font-serif text-stone-900">The Verso Standard</h2>
                    </div>

                    <div className="grid md:grid-cols-4 gap-8">
                        {[
                            {
                                step: "01",
                                title: "Meet",
                                desc: "We begin with a conversation about your land, lifestyle, and goals. We establish clarity on budget and timeline immediately to ensure a transparent partnership."
                            },
                            {
                                step: "02",
                                title: "Design",
                                desc: "Our in-house design team collaborates with you to develop floor plans and exterior styles that reflect exactly how you intend to live in your home."
                            },
                            {
                                step: "03",
                                title: "Plan",
                                desc: "Engineering, energy codes, permitting, and finish selections. We build the entire project on paper before breaking ground to eliminate surprises."
                            },
                            {
                                step: "04",
                                title: "Build",
                                desc: "Construction begins. Our owner, Darryl, remains personally involved from site prep to final walkthrough, ensuring outstanding craftsmanship."
                            }
                        ].map((item, idx) => (
                            <div key={idx} className="bg-white p-8 border border-stone-200 hover:border-stone-400 transition-all duration-300 group">
                                <div className="text-4xl font-serif text-stone-200 mb-6 group-hover:text-stone-900 transition-colors">{item.step}</div>
                                <h3 className="text-xl font-bold font-serif text-stone-900 mb-4">{item.title}</h3>
                                <p className="text-sm text-stone-500 leading-relaxed text-justify">
                                    {item.desc}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Portfolio Grid */}
            <section className="py-24 px-4 md:px-8">
                <div className="mb-12 flex justify-between items-end max-w-6xl mx-auto">
                    <div>
                        <span className="text-stone-500 text-xs font-bold tracking-[0.2em] uppercase block mb-4">Recent Projects</span>
                        <h2 className="text-4xl font-serif text-stone-900">Featured Homes</h2>
                    </div>
                    <button className="hidden md:flex items-center gap-2 text-xs font-bold tracking-widest uppercase hover:text-stone-600 transition-colors">
                        All Projects <ArrowRight size={16} />
                    </button>
                </div>

                <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
                    <div className="relative group cursor-pointer overflow-hidden aspect-[4/3]">
                        <img
                            src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
                            alt="Hingham Coastal"
                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-stone-900/0 group-hover:bg-stone-900/20 transition-colors"></div>
                        <div className="absolute bottom-8 left-8 text-white opacity-0 group-hover:opacity-100 transition-opacity transform translate-y-4 group-hover:translate-y-0 duration-500">
                            <p className="text-xs tracking-widest uppercase mb-2">Hingham, MA</p>
                            <h3 className="text-3xl font-serif">The Harbor Estate</h3>
                        </div>
                    </div>
                    <div className="relative group cursor-pointer overflow-hidden aspect-[4/3]">
                        <img
                            src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
                            alt="Cohasset Farmhouse"
                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-stone-900/0 group-hover:bg-stone-900/20 transition-colors"></div>
                        <div className="absolute bottom-8 left-8 text-white opacity-0 group-hover:opacity-100 transition-opacity transform translate-y-4 group-hover:translate-y-0 duration-500">
                            <p className="text-xs tracking-widest uppercase mb-2">Cohasset, MA</p>
                            <h3 className="text-3xl font-serif">Modern Farmhouse</h3>
                        </div>
                    </div>
                </div>
            </section>

            {/* Testimonials */}
            <section className="py-24 px-6 bg-[#FDFBF7]">
                <div className="max-w-4xl mx-auto text-center">
                    <div className="flex justify-center gap-1 text-yellow-500 mb-8">
                        {[1, 2, 3, 4, 5].map(i => <Star key={i} size={20} fill="currentColor" />)}
                    </div>
                    <h3 className="text-2xl md:text-4xl font-serif text-stone-900 mb-8 leading-tight">
                        "They delivered a beautiful, energy-efficient home right on schedule. The craftsmanship is outstanding, and the entire process was transparent and smooth."
                    </h3>
                    <div className="text-sm font-bold tracking-widest uppercase text-stone-500">
                        — The Anderson Family, Norwell
                    </div>
                </div>
            </section>

            {/* Services Section */}
            <section className="py-24 px-6 bg-stone-900 text-white">
                <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
                    <div>
                        <span className="text-stone-400 text-xs font-bold tracking-[0.2em] uppercase block mb-6">Our Services</span>
                        <h2 className="text-4xl font-serif mb-6">Built For You. <br /> Built To Last.</h2>
                        <p className="text-stone-400 mb-8 leading-relaxed">
                            We are a full-service custom home builder and renovation firm. We handle everything from the initial site analysis to the final coat of paint.
                        </p>
                        <ul className="space-y-4 mb-8">
                            {['New Construction', 'Historic Renovations', 'Architectural Design', 'Estate Management'].map(service => (
                                <li key={service} className="flex items-center gap-4 text-sm font-bold tracking-wider uppercase border-b border-stone-800 pb-4">
                                    <span className="w-2 h-2 bg-white rounded-full"></span>
                                    {service}
                                </li>
                            ))}
                        </ul>
                        <button className="bg-white text-stone-900 px-8 py-4 text-xs font-bold tracking-widest uppercase hover:bg-stone-200 transition-all">
                            Discuss Your Project
                        </button>
                    </div>
                    <div className="relative h-[600px]">
                        <img
                            src="https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                            alt="Interior Detail"
                            className="w-full h-full object-cover"
                        />
                        <div className="absolute -bottom-6 -left-6 bg-stone-800 p-8 max-w-xs border border-stone-700">
                            <p className="font-serif text-xl italic mb-4">"Trust is the foundation of every home we build."</p>
                            <p className="text-xs font-bold tracking-widest uppercase text-stone-400">- Darryl, Owner</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="bg-white pt-24 pb-12 px-8 border-t border-stone-100">
                <div className="max-w-6xl mx-auto grid md:grid-cols-4 gap-12 mb-16">
                    <div className="col-span-1 md:col-span-2">
                        <div className="text-2xl font-serif font-bold text-stone-900 mb-6">VERSO BUILDERS</div>
                        <p className="text-stone-500 max-w-sm mb-8">
                            Crafting legacy homes on the South Shore. We build with integrity, purpose, and a commitment to excellence that stands the test of time.
                        </p>
                        <div className="flex gap-4">
                            <div className="w-10 h-10 border border-stone-200 flex items-center justify-center text-stone-600 hover:bg-stone-900 hover:text-white transition-all cursor-pointer">
                                <Instagram size={18} />
                            </div>
                            <div className="w-10 h-10 border border-stone-200 flex items-center justify-center text-stone-600 hover:bg-stone-900 hover:text-white transition-all cursor-pointer">
                                <Mail size={18} />
                            </div>
                        </div>
                    </div>

                    <div>
                        <h4 className="text-xs font-bold tracking-widest uppercase text-stone-900 mb-6">Contact</h4>
                        <div className="space-y-4 text-sm text-stone-500">
                            <p className="flex items-center gap-3">
                                <MapPin size={16} /> 123 Main St, Hingham, MA
                            </p>
                            <p className="flex items-center gap-3">
                                <Phone size={16} /> (781) 555-0123
                            </p>
                            <p className="flex items-center gap-3">
                                <Mail size={16} /> hello@versobuilders.com
                            </p>
                        </div>
                    </div>

                    <div>
                        <h4 className="text-xs font-bold tracking-widest uppercase text-stone-900 mb-6">Menu</h4>
                        <ul className="space-y-4 text-sm text-stone-500">
                            <li className="hover:text-stone-900 cursor-pointer">Portfolio</li>
                            <li className="hover:text-stone-900 cursor-pointer">Our Process</li>
                            <li className="hover:text-stone-900 cursor-pointer">About Us</li>
                            <li className="hover:text-stone-900 cursor-pointer">Client Login</li>
                        </ul>
                    </div>
                </div>

                <div className="max-w-6xl mx-auto pt-8 border-t border-stone-100 flex flex-col md:flex-row justify-between items-center text-xs text-stone-400 tracking-wider uppercase">
                    <p>&copy; 2024 Verso Builders Inc. All Rights Reserved.</p>
                    <p>Designed & Built by BuilderProject</p>
                </div>
            </footer>
        </div>
    );
};

export default VersoShowcase;
