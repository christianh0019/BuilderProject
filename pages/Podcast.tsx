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

                    <div className="flex flex-wrap gap-4 items-center justify-center">
                        <a href="#" className="flex items-center gap-2 bg-red-600 text-white px-6 py-3 rounded-full font-bold hover:bg-red-700 transition-colors min-w-[200px] justify-center">
                            <Play size={18} fill="currentColor" />
                            YouTube
                        </a>
                        <a href="#" className="flex items-center gap-2 bg-[#1DB954] text-white px-6 py-3 rounded-full font-bold hover:bg-[#1ed760] transition-colors min-w-[200px] justify-center">
                            <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                                <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z" />
                            </svg>
                            Spotify
                        </a>
                        <a href="#" className="flex items-center gap-2 bg-slate-900 text-white px-6 py-3 rounded-full font-bold hover:bg-slate-800 transition-colors min-w-[200px] justify-center">
                            <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                                <path d="M18.7 19.5l-1.5.3a1 1 0 00-1 1v.5a1 1 0 01-1 1h-3a1 1 0 01-1-1v-2a1 1 0 011-1h1a1 1 0 011 1v1h2v-2.5a1 1 0 00-1-1h-3a1 1 0 00-1 1v4a1 1 0 001 1h3a1 1 0 001-1v-1a1 1 0 00-1-1zM5.4 19.5l1.5.3a1 1 0 011 1v.5a1 1 0 001 1h3a1 1 0 001-1v-2a1 1 0 00-1-1h-1a1 1 0 00-1 1v1h-2v-2.5a1 1 0 011-1h3a1 1 0 011 1v4a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a1 1 0 011-1zM13 3.5a1 1 0 00-1 1v6a1 1 0 001 1h1a1 1 0 001-1v-6a1 1 0 00-1-1h-1zM9 13v-1h.5a.5.5 0 01.5.5v.5H9zM8 3.5a1 1 0 00-1 1v6a1 1 0 001 1h1a1 1 0 001-1v-6a1 1 0 00-1-1H8z" opacity="0" />
                                <path d="M15.46 9.53a.9.9 0 00-.57-.86L12.3 8a.92.92 0 00-1.16.89v4.22a.92.92 0 001.16.89l2.59-1.07a.9.9 0 00.57-.86V9.53zm-1.66 2.05l-1 .41V10l1 .42zM12 1a11 11 0 1011 11A11 11 0 0012 1zm0 18a.74.74 0 01-.15 0 4.19 4.19 0 00-.73-2.6 1.15 1.15 0 01-.26-.7v-3.4a2.76 2.76 0 012.3-2.7 2.77 2.77 0 013.25 2.7 1.2 1.2 0 01-.27.75 4.22 4.22 0 00-1 2.39 3.09 3.09 0 01-1.32 2.76A7 7 0 0112 19zm0-16.14a5.15 5.15 0 014.28 2.22 6.13 6.13 0 00-1.28-1.51 3.58 3.58 0 00-2.48-1 3.65 3.65 0 00-3.6 3.6v.9a.57.57 0 00.57.57H10a.57.57 0 00.58-.57v-.9a2.5 2.5 0 012.42-2.31zM6.86 8.35a3.65 3.65 0 00-2.48 1 6.13 6.13 0 00-1.28 1.51 5.14 5.14 0 017.33-8.83 2.5 2.5 0 012.42 2.31v.9a.57.57 0 00.57.57h.54a.57.57 0 00.57-.57v-.9a3.65 3.65 0 00-3.6-3.6 3.58 3.58 0 00-2.48 1 6.13 6.13 0 00-1.28 1.51z" />
                            </svg>
                            Apple Podcasts
                        </a>
                        <a href="#" className="flex items-center gap-2 bg-[#4285F4] text-white px-6 py-3 rounded-full font-bold hover:bg-[#3367D6] transition-colors min-w-[200px] justify-center">
                            <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                                <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="currentColor" />
                                <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="currentColor" />
                                <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.84z" fill="currentColor" />
                                <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="currentColor" />
                            </svg>
                            Google Podcasts
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Podcast;
