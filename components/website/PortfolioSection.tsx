import React, { useState } from 'react';
import { ArrowUpRight, Zap, Target, Search, BarChart } from 'lucide-react';

interface Project {
    id: number;
    title: string;
    category: string;
    image: string;
    stats: {
        speedScore: number;
        seoRank: string;
        leadsIncrease: string;
    };
}

const projects: Project[] = [
    {
        id: 1,
        title: "Modern Estate Builders",
        category: "Luxury Custom Homes",
        image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80",
        stats: {
            speedScore: 99,
            seoRank: "#1 'Custom Builder Austin'",
            leadsIncrease: "+145%"
        }
    },
    {
        id: 2,
        title: "Heritage Renovations",
        category: "High-End Remodeling",
        image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80",
        stats: {
            speedScore: 100,
            seoRank: "#1 'Luxury Remodel'",
            leadsIncrease: "+210%"
        }
    },
    {
        id: 3,
        title: "Ironwood Barndominiums",
        category: "Niche Construction",
        image: "https://images.unsplash.com/photo-1449844908441-8829872d2607?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80",
        stats: {
            speedScore: 98,
            seoRank: "#1 'Barndominium Builder'",
            leadsIncrease: "+300%"
        }
    }
];

const PortfolioSection: React.FC = () => {
    const [hoveredId, setHoveredId] = useState<number | null>(null);

    return (
        <section className="py-24 bg-slate-50">
            <div className="container mx-auto px-6">
                <div className="max-w-3xl mx-auto text-center mb-16">
                    <span className="text-purple-600 font-bold tracking-wider text-sm uppercase mb-4 block">Interactive Results</span>
                    <h2 className="text-4xl md:text-5xl font-serif font-bold text-slate-900 mb-6">
                        We Don't Just Build Websites.<br /> We Build Assets.
                    </h2>
                    <p className="text-lg text-slate-600">
                        Hover over our recent projects to see the real data behind the design. Beautiful pixels are minimum stakes; performance is where we win.
                    </p>
                </div>

                <div className="grid lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
                    {projects.map((project) => (
                        <div
                            key={project.id}
                            className="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
                            onMouseEnter={() => setHoveredId(project.id)}
                            onMouseLeave={() => setHoveredId(null)}
                        >
                            {/* Image Container */}
                            <div className="relative h-80 overflow-hidden">
                                <div className="absolute inset-0 bg-slate-900/10 group-hover:bg-slate-900/40 transition-colors z-10"></div>
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                />

                                {/* Overlay Stats Card */}
                                <div
                                    className={`absolute inset-0 z-20 flex items-center justify-center transition-opacity duration-300 p-6 ${hoveredId === project.id ? 'opacity-100' : 'opacity-0'
                                        }`}
                                >
                                    <div className="bg-white/95 backdrop-blur-md rounded-xl p-6 w-full shadow-2xl transform transition-transform duration-300 scale-95 group-hover:scale-100">
                                        <div className="space-y-4">
                                            <div className="flex items-center justify-between border-b border-slate-100 pb-2">
                                                <div className="flex items-center text-slate-700 font-semibold">
                                                    <Zap size={18} className="text-yellow-500 mr-2" /> Speed Index
                                                </div>
                                                <span className="font-bold text-slate-900 text-lg">{project.stats.speedScore}/100</span>
                                            </div>
                                            <div className="flex items-center justify-between border-b border-slate-100 pb-2">
                                                <div className="flex items-center text-slate-700 font-semibold">
                                                    <Search size={18} className="text-blue-500 mr-2" /> Rank
                                                </div>
                                                <span className="font-bold text-green-600 text-sm">{project.stats.seoRank}</span>
                                            </div>
                                            <div className="flex items-center justify-between">
                                                <div className="flex items-center text-slate-700 font-semibold">
                                                    <BarChart size={18} className="text-purple-500 mr-2" /> Leads
                                                </div>
                                                <span className="font-bold text-purple-600 text-lg">{project.stats.leadsIncrease}</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Content */}
                            <div className="p-8">
                                <div className="text-xs font-bold text-purple-600 tracking-wider uppercase mb-2">{project.category}</div>
                                <h3 className="text-2xl font-bold text-slate-900 mb-2 flex items-center justify-between group-hover:text-purple-700 transition-colors">
                                    {project.title}
                                    <ArrowUpRight size={20} className="opacity-0 group-hover:opacity-100 transition-opacity transform translate-y-2 group-hover:translate-y-0" />
                                </h3>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default PortfolioSection;
