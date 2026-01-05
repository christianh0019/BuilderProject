import React from 'react';
import SimpleHeader from '../components/SimpleHeader';
import { CheckCircle2, ArrowRight } from 'lucide-react';

const Quickstart: React.FC = () => {
    return (
        <div className="min-h-screen bg-slate-50 flex flex-col">
            <SimpleHeader />

            <div className="flex-grow pt-24 pb-20 px-6">
                <div className="container mx-auto max-w-4xl">
                    <div className="text-center mb-16">
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-purple-100 text-purple-700 rounded-full text-sm font-bold mb-6 border border-purple-200 animate-fadeIn">
                            <span className="w-2 h-2 rounded-full bg-purple-600 animate-pulse"></span>
                            <span>Perfect For Growing Builders</span>
                        </div>

                        <h1 className="text-4xl md:text-5xl font-serif font-bold text-slate-900 mb-6 leading-tight">
                            Not Quite Ready for Full Service? <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-700 to-pink-600">
                                Start With The Essentials.
                            </span>
                        </h1>

                        <p className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
                            Based on your revenue, our Full-Service Partnership might be overkill right now.
                            But you still need looking professional to win better jobs.
                            That's why we built the <strong>Online Presence Quickstart</strong>.
                        </p>
                    </div>

                    <div className="bg-white rounded-3xl shadow-xl overflow-hidden border border-slate-200 mb-24">
                        <div className="p-8 md:p-12">
                            <div className="grid md:grid-cols-2 gap-12 items-center">
                                <div>
                                    <h2 className="text-2xl font-bold text-slate-900 mb-6 font-serif">What You Get:</h2>
                                    <ul className="space-y-4">
                                        {[
                                            "Professional High-Converting Website",
                                            "Google Business Profile Optimization",
                                            "Social Media Branding Kit",
                                            "Project Portfolio Setup",
                                            "Basic SEO Foundation"
                                        ].map((item, i) => (
                                            <li key={i} className="flex items-center gap-3 text-slate-700">
                                                <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center text-green-600 shrink-0">
                                                    <CheckCircle2 size={14} />
                                                </div>
                                                <span className="font-medium">{item}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                <div className="bg-slate-50 p-8 rounded-2xl border border-slate-100 text-center">
                                    <p className="text-slate-500 text-sm font-bold uppercase tracking-wider mb-2">One-Time Investment</p>
                                    <div className="text-4xl font-serif font-bold text-slate-900 mb-6">$4,970</div>
                                    <button className="w-full bg-slate-900 text-white font-bold py-4 rounded-xl hover:bg-gradient-to-r hover:from-purple-700 hover:to-pink-600 transition-all duration-300 shadow-lg shadow-purple-500/20 flex items-center justify-center gap-2 group">
                                        Get Started
                                        <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                                    </button>
                                    <p className="text-xs text-slate-400 mt-4">No monthly retainers. Just a solid foundation.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Benefit Sections */}
                    <div className="space-y-24">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl font-serif font-bold text-slate-900 mb-6">Why You Need This Now</h2>
                        </div>

                        <div className="grid md:grid-cols-3 gap-8">
                            <div className="bg-white p-8 rounded-2xl border border-slate-100 shadow-sm">
                                <div className="text-4xl mb-6">🏗️</div>
                                <h3 className="text-xl font-bold text-slate-900 mb-4">Look Like A Pro</h3>
                                <p className="text-slate-600 leading-relaxed">
                                    Stop losing jobs because your website looks like it was built in 1999. We build you a modern, credible site that proves you handle high-end projects.
                                </p>
                            </div>
                            <div className="bg-white p-8 rounded-2xl border border-slate-100 shadow-sm">
                                <div className="text-4xl mb-6">📍</div>
                                <h3 className="text-xl font-bold text-slate-900 mb-4">Get Found Locally</h3>
                                <p className="text-slate-600 leading-relaxed">
                                    We optimize your Google Business Profile so when people search "custom builder near me", you actually show up on the map.
                                </p>
                            </div>
                            <div className="bg-white p-8 rounded-2xl border border-slate-100 shadow-sm">
                                <div className="text-4xl mb-6">📱</div>
                                <h3 className="text-xl font-bold text-slate-900 mb-4">Social Proof</h3>
                                <p className="text-slate-600 leading-relaxed">
                                    We set up your Instagram and Facebook with branded templates so every photo you post looks polished and professional.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <footer className="py-8 text-center text-slate-400 text-sm">
                <p>© {new Date().getFullYear()} BuildSurge Collectives LLC DBA BuilderProject</p>
            </footer>
        </div>
    );
};

export default Quickstart;
