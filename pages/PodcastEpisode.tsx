import React from 'react';
import { Helmet } from 'react-helmet-async';
import VideoPlayer from '../components/VideoPlayer';
import { Play, Calendar, Clock, ArrowRight, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';

const PodcastEpisode: React.FC = () => {
    // Placeholder - Replace with actual ID when user provides it
    const VIDEO_ID = "dQw4w9WgXcQ"; // Default placeholder

    return (
        <div className="bg-slate-50 min-h-screen font-sans selection:bg-purple-200 selection:text-purple-900">
            <Helmet>
                <title>The Builder Backstage Ep. 001 | BuilderProject</title>
                <meta name="description" content="Watch the first episode of The Builder Backstage. We discuss the shift from word-of-mouth to predictable marketing systems." />
            </Helmet>

            {/* Hero Section */}
            <section className="relative pt-32 pb-20 px-6 overflow-hidden bg-white text-slate-900">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-purple-100/40 via-white to-white"></div>

                <div className="max-w-4xl mx-auto relative z-10 text-center">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-300 text-xs font-bold uppercase tracking-wider mb-6">
                        <span className="w-2 h-2 rounded-full bg-purple-500 animate-pulse"></span>
                        Episode 001 Now Live
                    </div>

                    <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6 leading-tight">
                        The Shift: From <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">Word-of-Mouth</span> to <span className="text-white">Predictable Growth</span>
                    </h1>

                    <p className="text-lg text-slate-400 max-w-2xl mx-auto mb-10 leading-relaxed">
                        In this inaugural episode, we break down exactly why the "good work speaks for itself" era is ending, and what the top 1% of builders are doing differently in 2026.
                    </p>

                    <div className="flex flex-wrap justify-center gap-4 text-sm text-slate-400 mb-12">
                        <div className="flex items-center gap-2">
                            <Calendar size={16} className="text-purple-500" />
                            <span>January 19, 2026</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <Clock size={16} className="text-purple-500" />
                            <span>45 min watch</span>
                        </div>
                    </div>
                </div>

                {/* Video Container with Glow */}
                <div className="max-w-5xl mx-auto relative z-10">
                    <div className="absolute -inset-4 bg-purple-500/20 blur-3xl opacity-50 rounded-full"></div>
                    <VideoPlayer videoId={VIDEO_ID} />
                </div>
            </section>

            {/* Content Section */}
            <section className="py-20 px-6">
                <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-12">

                    {/* Main Content */}
                    <div className="lg:col-span-2 space-y-12">
                        {/* Show Notes */}
                        <div className="prose prose-lg prose-slate max-w-none">
                            <h3 className="text-2xl font-bold text-slate-900 mb-4">About This Episode</h3>
                            <p>
                                Most custom home builders and high-end remodelers are stuck in a dangerous cycle: relying entirely on referrals. When the market is hot, this works fine. But when things slow down, the phone stops ringing.
                            </p>
                            <p>
                                In this episode, we explore the "Digital Model Home" concept—building an online presence that filters for quality, builds trust automatically, and generates leads while you sleep.
                            </p>

                            <h3 className="text-2xl font-bold text-slate-900 mt-12 mb-6">Key Takeaways</h3>
                            <ul className="space-y-4 list-none pl-0">
                                {[
                                    "Why 'Word of Mouth' is actually a vulnerability, not a badge of honor.",
                                    "The 3 missing systems in most builder's businesses.",
                                    "How to attract clients who value quality over low bids.",
                                    "The simple math behind a $10M pipeline."
                                ].map((item, i) => (
                                    <li key={i} className="flex items-start gap-3 bg-white p-4 rounded-xl border border-slate-100 shadow-sm">
                                        <div className="mt-1 bg-green-100 p-1 rounded-full shrink-0">
                                            <CheckCircle2 size={16} className="text-green-600" />
                                        </div>
                                        <span className="text-slate-700 font-medium">{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    {/* Sidebar / Stick CTA */}
                    <div className="lg:col-span-1">
                        <div className="sticky top-32 space-y-8">
                            {/* CTA Card */}
                            <div className="bg-slate-900 rounded-3xl p-8 text-white relative overflow-hidden group">
                                <div className="absolute top-0 right-0 w-32 h-32 bg-purple-500/20 rounded-full blur-3xl -mr-16 -mt-16 group-hover:bg-purple-500/30 transition-colors"></div>

                                <h3 className="text-xl font-bold mb-4 relative z-10">Implement This System</h3>
                                <p className="text-slate-400 text-sm mb-6 relative z-10 leading-relaxed">
                                    Want to build the "Digital Model Home" we talked about in this episode? Let's audit your current setup.
                                </p>

                                <Link
                                    to="/contact"
                                    className="block w-full text-center bg-white text-slate-900 font-bold py-4 rounded-xl hover:bg-purple-50 transition-colors shadow-lg relative z-10"
                                >
                                    Book Strategy Call
                                </Link>

                                <p className="text-center text-xs text-slate-500 mt-4 relative z-10">
                                    Free 30-min strategy session
                                </p>
                            </div>

                            {/* Subscribe Links */}
                            <div className="bg-white rounded-3xl p-8 border border-slate-100 shadow-sm">
                                <h4 className="font-bold text-slate-900 mb-4 text-sm uppercase tracking-wider">Subscribe</h4>
                                <div className="space-y-3">
                                    <a href="#" className="flex items-center gap-3 p-3 rounded-xl hover:bg-slate-50 transition-colors group">
                                        <div className="w-10 h-10 bg-black rounded-full flex items-center justify-center text-white">
                                            <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5"><path d="M12 2C6.477 2 2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.879V14.89h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12c0-5.523-4.477-10-10-10z" /></svg>
                                        </div>
                                        <span className="font-medium text-slate-700 group-hover:text-slate-900">Apple Podcasts</span>
                                    </a>
                                    <a href="#" className="flex items-center gap-3 p-3 rounded-xl hover:bg-slate-50 transition-colors group">
                                        <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center text-white">
                                            <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5"><path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.019.6-1.141 4.38-1.379 9.899-.719 13.56 1.56.419.3.6.84.3 1.26zm.12-3.36C15.18 8.46 8.82 8.28 5.16 9.36c-.6.18-1.2-.18-1.38-.72-.18-.6.18-1.2.72-1.38 4.2-1.26 11.28-1.02 14.82 1.08.6.36.78 1.14.42 1.68-.36.54-1.02.72-1.56.36z" /></svg>
                                        </div>
                                        <span className="font-medium text-slate-700 group-hover:text-slate-900">Spotify</span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default PodcastEpisode;
