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
                <div className="max-w-4xl mx-auto">
                    <div className="space-y-6">
                        {/* List Header */}
                        <div className="flex items-center justify-between border-b border-slate-100 pb-4 mb-6">
                            <h3 className="text-sm font-bold text-slate-400 uppercase tracking-wider">Latest Episodes</h3>
                            <span className="text-sm text-slate-400">1 Episode Available</span>
                        </div>

                        {/* Episode 001 - List Item Style */}
                        <div className="group relative bg-white rounded-2xl p-4 md:p-6 transition-all duration-300 hover:bg-slate-50 border border-transparent hover:border-slate-100">
                            <div className="flex flex-col md:flex-row gap-6 md:items-center">
                                {/* Thumbnail */}
                                <div className="w-full md:w-48 aspect-video rounded-xl overflow-hidden shadow-sm relative shrink-0">
                                    <div className="absolute inset-0 bg-slate-900 group-hover:scale-105 transition-transform duration-700">
                                        <div className="w-full h-full flex items-center justify-center bg-slate-800 text-slate-600">
                                            <Play size={32} className="text-white/20 group-hover:text-white/40 transition-colors" />
                                        </div>
                                    </div>
                                    <div className="absolute top-2 left-2 bg-black/60 backdrop-blur-md text-white text-[10px] font-bold px-2 py-0.5 rounded-full border border-white/10">
                                        EP 001
                                    </div>
                                </div>

                                {/* Content */}
                                <div className="flex-1 min-w-0">
                                    <div className="flex items-center gap-3 text-xs font-medium text-slate-500 mb-2">
                                        <span className="text-purple-600 bg-purple-50 px-2 py-0.5 rounded-full">Strategy</span>
                                        <span className="flex items-center gap-1"><Calendar size={12} /> Jan 19, 2026</span>
                                        <span className="flex items-center gap-1"><Clock size={12} /> 45 min</span>
                                    </div>

                                    <h2 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-purple-700 transition-colors line-clamp-1">
                                        The Shift: From Word-of-Mouth to Predictable Growth
                                    </h2>

                                    <p className="text-slate-600 text-sm mb-4 leading-relaxed line-clamp-2 md:line-clamp-1">
                                        Why the "good work speaks for itself" era is ending, and what the top 1% of builders are doing differently.
                                    </p>

                                    <a href="#/podcast/001" className="inline-flex items-center text-sm font-bold text-slate-900 hover:text-purple-600 transition-colors group/link">
                                        Watch Episode <Play size={14} className="ml-2 group-hover/link:translate-x-1 transition-transform" fill="currentColor" />
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
                                Executive Strategies for the<br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">Modern Design-Build Firm.</span>
                            </h2>

                            <div className="grid md:grid-cols-2 gap-12 text-left max-w-4xl mx-auto mt-12">
                                <div className="space-y-4">
                                    <h3 className="text-xl font-bold text-white flex items-center gap-3">
                                        <div className="w-8 h-8 rounded-full bg-purple-500/20 flex items-center justify-center text-purple-400">1</div>
                                        Market Leadership
                                    </h3>
                                    <p className="text-slate-400 leading-relaxed">
                                        Designed exclusively for established custom builders and remodelers ($2M-$50M+ revenue) seeking to transition from referral-dependence to predictable market dominance.
                                    </p>
                                </div>

                                <div className="space-y-4">
                                    <h3 className="text-xl font-bold text-white flex items-center gap-3">
                                        <div className="w-8 h-8 rounded-full bg-pink-500/20 flex items-center justify-center text-pink-400">2</div>
                                        Operational Excellence
                                    </h3>
                                    <p className="text-slate-400 leading-relaxed">
                                        We dissect the proprietary frameworks, sales engineering, and brand architecture used by the industry's highest-performing firms to command premium margins.
                                    </p>
                                </div>
                            </div>

                            <div className="mt-16 pt-12 border-t border-white/10">
                                <p className="text-slate-500 font-medium mb-6">AVAILABLE NOW ON</p>
                                <div className="flex flex-wrap justify-center gap-4">
                                    <a href="https://podcasts.apple.com/us/podcast/the-builder-backstage-marketing-strategies-for-custom-home-builders-and-remodelers/id1870640500" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 bg-white/5 border border-white/10 px-6 py-3 rounded-xl hover:bg-white/10 transition-colors cursor-pointer group">
                                        <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center text-black group-hover:scale-110 transition-transform">
                                            <svg viewBox="0 0 24 24" fill="currentColor" className="w-3 h-3"><path d="M12 2C6.477 2 2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.879V14.89h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12c0-5.523-4.477-10-10-10z" /></svg>
                                        </div>
                                        <span className="text-white font-bold">Apple Podcasts</span>
                                    </a>
                                    <a href="https://open.spotify.com/show/5doxQvUkR4JR4M9HJAdJS5" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 bg-white/5 border border-white/10 px-6 py-3 rounded-xl hover:bg-white/10 transition-colors cursor-pointer group">
                                        <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center text-white group-hover:scale-110 transition-transform">
                                            <svg viewBox="0 0 24 24" fill="currentColor" className="w-3 h-3"><path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.019.6-1.141 4.38-1.379 9.899-.719 13.56 1.56.419.3.6.84.3 1.26zm.12-3.36C15.18 8.46 8.82 8.28 5.16 9.36c-.6.18-1.2-.18-1.38-.72-.18-.6.18-1.2.72-1.38 4.2-1.26 11.28-1.02 14.82 1.08.6.36.78 1.14.42 1.68-.36.54-1.02.72-1.56.36z" /></svg>
                                        </div>
                                        <span className="text-white font-bold">Spotify</span>
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
