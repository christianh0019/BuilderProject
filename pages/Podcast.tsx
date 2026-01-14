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

                {/* Coming Soon / Placeholder Content */}
                <div className="max-w-4xl mx-auto bg-slate-50 rounded-2xl p-12 text-center border border-slate-100">
                    <div className="w-64 h-64 mx-auto mb-8 rounded-2xl overflow-hidden shadow-2xl border-4 border-white/50">
                        <img
                            src="/images/podcast-cover.png"
                            alt="The Builder Backstage Podcast"
                            className="w-full h-full object-cover"
                        />
                    </div>
                    <h2 className="text-3xl font-serif font-bold text-slate-900 mb-4">First Episodes Dropping Soon</h2>
                    <p className="text-lg text-slate-600 mb-8 max-w-xl mx-auto">
                        We're currently recording with some of the biggest names in the industry. Subscribe to get notified when we launch.
                    </p>

                    <div className="inline-flex gap-4 items-center justify-center">
                        <a href="https://www.youtube.com/@BuilderProjectCo" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 bg-red-600 text-white px-6 py-3 rounded-full font-bold hover:bg-red-700 transition-colors">
                            <Play size={18} fill="currentColor" />
                            Subscribe on YouTube
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Podcast;
