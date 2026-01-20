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

                {/* About the Podcast Section */}
                <div className="mt-32 max-w-5xl mx-auto">
                    <div className="bg-slate-900 rounded-3xl p-8 md:p-16 text-center relative overflow-hidden">
                        {/* Background Decor */}
                        <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-20 pointer-events-none">
                            <div className="absolute top-0 right-0 w-96 h-96 bg-purple-500 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
                            <div className="absolute bottom-0 left-0 w-64 h-64 bg-pink-500 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>
                        </div>

                        <div className="relative z-10">
                            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/10 text-white text-sm font-bold uppercase tracking-wider mb-8 backdrop-blur-sm">
                                <Mic size={16} className="text-purple-400" />
                                About The Show
                            </div>

                            <h2 className="text-3xl md:text-5xl font-serif font-bold text-white mb-8 leading-tight">
                                No Fluff. No Theory.<br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">Just Systems That Scale.</span>
                            </h2>

                            <div className="grid md:grid-cols-2 gap-12 text-left max-w-4xl mx-auto mt-12">
                                <div className="space-y-4">
                                    <h3 className="text-xl font-bold text-white flex items-center gap-3">
                                        <div className="w-8 h-8 rounded-full bg-purple-500/20 flex items-center justify-center text-purple-400">1</div>
                                        For The Top 1%
                                    </h3>
                                    <p className="text-slate-400 leading-relaxed">
                                        The Builder Backstage isn't for hobbyists. It's for custom builders and remodelers doing $2M-$50M+ who want to escape the "word of mouth" trap and build a predictable business.
                                    </p>
                                </div>

                                <div className="space-y-4">
                                    <h3 className="text-xl font-bold text-white flex items-center gap-3">
                                        <div className="w-8 h-8 rounded-full bg-pink-500/20 flex items-center justify-center text-pink-400">2</div>
                                        Behind Curtains
                                    </h3>
                                    <p className="text-slate-400 leading-relaxed">
                                        We don't just talk high-level strategy. We tear apart the actual marketing funnels, sales scripts, and operational systems that are winning right now.
                                    </p>
                                </div>
                            </div>

                            <div className="mt-16 pt-12 border-t border-white/10">
                                <p className="text-slate-500 font-medium mb-6">AVAILABLE ON</p>
                                <div className="flex flex-wrap justify-center gap-4">
                                    <div className="flex items-center gap-3 bg-white/5 border border-white/10 px-6 py-3 rounded-xl hover:bg-white/10 transition-colors cursor-pointer">
                                        <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center text-black">
                                            <svg viewBox="0 0 24 24" fill="currentColor" className="w-3 h-3"><path d="M12 2C6.477 2 2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.879V14.89h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12c0-5.523-4.477-10-10-10z" /></svg>
                                        </div>
                                        <span className="text-white font-bold">Apple Podcasts</span>
                                    </div>
                                    <div className="flex items-center gap-3 bg-white/5 border border-white/10 px-6 py-3 rounded-xl hover:bg-white/10 transition-colors cursor-pointer">
                                        <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center text-white">
                                            <svg viewBox="0 0 24 24" fill="currentColor" className="w-3 h-3"><path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.019.6-1.141 4.38-1.379 9.899-.719 13.56 1.56.419.3.6.84.3 1.26zm.12-3.36C15.18 8.46 8.82 8.28 5.16 9.36c-.6.18-1.2-.18-1.38-.72-.18-.6.18-1.2.72-1.38 4.2-1.26 11.28-1.02 14.82 1.08.6.36.78 1.14.42 1.68-.36.54-1.02.72-1.56.36z" /></svg>
                                        </div>
                                        <span className="text-white font-bold">Spotify</span>
                                    </div>
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
