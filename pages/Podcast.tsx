import React from 'react';
import { Mic, Calendar, Clock, Play } from 'lucide-react';
import SEO from '../components/SEO';

const Podcast: React.FC = () => {
    return (
        <div className="bg-white font-sans text-slate-900 selection:bg-purple-200 selection:text-purple-900 pt-32 pb-20">
            <SEO
                title="The Builder Backstage | BuilderProject Podcast"
                description="Behind the scenes with the top custom home builders in the country. Learn the systems, marketing, and sales strategies driving $10M+ businesses."
            />

            <div className="container mx-auto px-6">
                {/* Header */}
                <div className="max-w-4xl mx-auto text-center mb-20">
                    <span className="inline-block py-2 px-6 rounded-full bg-purple-100 text-purple-700 text-sm font-bold tracking-widest uppercase mb-6">
                        The Builder Backstage
                    </span>
                    <h1 className="text-5xl md:text-7xl font-serif font-bold text-slate-900 mb-8 leading-tight">
                        Real Talk with <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-700 to-pink-600">
                            Top Builders.
                        </span>
                    </h1>
                    <p className="text-xl text-slate-500 leading-relaxed max-w-2xl mx-auto">
                        Join us as we interview successful custom home builders and reveal the exact systems they use to dominate their markets.
                    </p>
                </div>

                {/* Episodes List */}
                <div className="max-w-4xl mx-auto space-y-12">

                    {/* Episode 001 - Featured */}
                    <div className="group relative bg-white rounded-3xl p-6 md:p-10 shadow-xl border border-slate-100 hover:shadow-2xl transition-all duration-300 overflow-hidden">
                        <div className="absolute top-0 left-0 w-2 h-full bg-gradient-to-b from-purple-500 to-pink-500 group-hover:w-3 transition-all"></div>

                        <div className="flex flex-col md:flex-row gap-8 items-start">
                            {/* Thumbnail */}
                            <div className="w-full md:w-1/3 aspect-square md:aspect-[4/3] rounded-2xl overflow-hidden shadow-lg relative shrink-0">
                                <div className="absolute inset-0 bg-slate-900 group-hover:scale-105 transition-transform duration-700">
                                    {/* Placeholder for now, or use the cover */}
                                    <div className="w-full h-full flex items-center justify-center bg-slate-800 text-slate-600">
                                        <Play size={48} className="text-white/20 group-hover:text-white/40 transition-colors" />
                                    </div>
                                </div>
                                <div className="absolute top-3 left-3 bg-black/60 backdrop-blur-md text-white text-xs font-bold px-3 py-1 rounded-full border border-white/10">
                                    EPISODE 001
                                </div>
                            </div>

                            {/* Content */}
                            <div className="flex-1">
                                <div className="flex items-center gap-3 text-sm font-medium text-slate-500 mb-4">
                                    <span className="text-purple-600 bg-purple-50 px-3 py-1 rounded-full">Strategy</span>
                                    <span className="flex items-center gap-1"><Calendar size={14} /> Jan 19, 2026</span>
                                    <span className="flex items-center gap-1"><Clock size={14} /> 45 min</span>
                                </div>

                                <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4 group-hover:text-purple-700 transition-colors">
                                    The Shift: From Word-of-Mouth to Predictable Growth
                                </h2>

                                <p className="text-slate-600 mb-8 leading-relaxed">
                                    We break down exactly why the "good work speaks for itself" era is ending, and what the top 1% of builders are doing differently in 2026.
                                </p>

                                <div className="flex items-center gap-4">
                                    <a href="#/podcast/001" className="inline-flex items-center gap-2 bg-slate-900 text-white px-6 py-3 rounded-full font-bold hover:bg-purple-600 transition-colors shadow-lg shadow-purple-900/10">
                                        <Play size={18} fill="currentColor" />
                                        Watch Episode
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Podcast;
