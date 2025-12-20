import React from 'react';
import { ArrowRight, Instagram } from 'lucide-react';

const VersoShowcase: React.FC = () => {
    return (
        <div className="font-sans antialiased text-stone-900 bg-[#FDFBF7]">
            {/* Mock Navigation */}
            <nav className="sticky top-0 z-50 bg-[#FDFBF7]/90 backdrop-blur-md border-b border-stone-200 px-8 py-5 flex justify-between items-center">
                <div className="text-xl font-serif tracking-widest font-bold text-stone-900">VERSO BUILDERS</div>
                <div className="hidden md:flex space-x-8 text-xs font-bold tracking-widest uppercase text-stone-500">
                    <span>Portfolio</span>
                    <span>Process</span>
                    <span>About</span>
                    <span>Journal</span>
                </div>
                <button className="bg-stone-900 text-white px-5 py-2 text-xs font-bold tracking-widest uppercase hover:bg-stone-700 transition-colors">
                    Inquire
                </button>
            </nav>

            {/* Hero Section */}
            <header className="relative h-[500px] flex items-center justify-center text-center px-6">
                <div className="absolute inset-0 z-0">
                    <img
                        src="https://images.unsplash.com/photo-1600607686527-6fb886090705?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
                        alt="Luxury Interior"
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-stone-900/30"></div>
                </div>

                <div className="relative z-10 text-white max-w-2xl">
                    <p className="text-xs font-bold tracking-[0.3em] uppercase mb-4 text-stone-200">Established 1985 • Boston, MA</p>
                    <h1 className="text-5xl md:text-7xl font-serif mb-8 leading-tight">
                        Timeless Homes.<br />Modern Living.
                    </h1>
                    <button className="border border-white text-white px-8 py-3 text-xs font-bold tracking-widest uppercase hover:bg-white hover:text-stone-900 transition-all">
                        View The Collection
                    </button>
                </div>
            </header>

            {/* Intro Text */}
            <section className="py-24 px-6">
                <div className="max-w-3xl mx-auto text-center">
                    <h2 className="text-3xl font-serif italic text-stone-800 mb-8">
                        "We believe a home should be a sanctuary—a quiet backdrop for the memories that define a life well lived."
                    </h2>
                    <div className="w-12 h-px bg-stone-300 mx-auto"></div>
                </div>
            </section>

            {/* Portfolio Grid */}
            <section className="pb-24 px-4 md:px-8">
                <div className="grid md:grid-cols-2 gap-4">
                    <div className="relative group cursor-pointer overflow-hidden">
                        <img
                            src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                            alt="Beacon Hill Renovation"
                            className="w-full h-[400px] object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-stone-900/0 group-hover:bg-stone-900/20 transition-colors"></div>
                        <div className="absolute bottom-6 left-6 text-white opacity-0 group-hover:opacity-100 transition-opacity">
                            <p className="text-xs tracking-widest uppercase mb-1">Beacon Hill</p>
                            <h3 className="text-2xl font-serif">The Brownstone</h3>
                        </div>
                    </div>
                    <div className="relative group cursor-pointer overflow-hidden">
                        <img
                            src="https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                            alt="Cape Cod Estate"
                            className="w-full h-[400px] object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-stone-900/0 group-hover:bg-stone-900/20 transition-colors"></div>
                        <div className="absolute bottom-6 left-6 text-white opacity-0 group-hover:opacity-100 transition-opacity">
                            <p className="text-xs tracking-widest uppercase mb-1">Cape Cod</p>
                            <h3 className="text-2xl font-serif">Ocean Front Estate</h3>
                        </div>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="bg-stone-900 text-stone-400 py-16 px-8 text-center text-xs tracking-widest uppercase">
                <div className="flex justify-center gap-6 mb-8">
                    <Instagram size={16} />
                </div>
                <p>&copy; 2024 Verso Builders. Crafted by BuilderProject.</p>
            </footer>
        </div>
    );
};

export default VersoShowcase;
