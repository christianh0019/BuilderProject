import React from 'react';
import { ShieldCheck, CheckCircle, ArrowRight } from 'lucide-react';
import SEO from '../components/SEO';
import { Link } from 'react-router-dom';

const FreeTraining: React.FC = () => {
    return (
        <div className="bg-slate-900 min-h-screen text-white font-sans selection:bg-purple-500 selection:text-white pb-20">
            <SEO
                title="Free Marketing Training | BuilderProject"
                description="Watch our comprehensive 2-hour training on the exact marketing system we use to help custom home builders scale."
                canonical="/free-training"
                noindex={true}
            />

            {/* Header / Nav Area */}
            <div className="border-b border-white/10 bg-slate-900/50 backdrop-blur-md sticky top-0 z-50">
                <div className="container mx-auto px-6 py-4 flex items-center justify-between">
                    <Link to="/" className="font-serif text-xl font-bold tracking-tight flex items-center gap-2">
                        <img src="/images/logo_icon.png" alt="BuilderProject Logo" title="BuilderProject Logo" className="w-8 h-8 rounded-lg" />
                        <span>BuilderProject<span className="text-purple-500">.</span></span>
                    </Link>
                    <div className="text-xs font-bold uppercase tracking-widest text-slate-400">
                        Restricted Access
                    </div>
                </div>
            </div>

            <div className="container mx-auto px-6 pt-12 md:pt-20">
                {/* Headline */}
                <div className="max-w-4xl mx-auto text-center mb-12">
                    <div className="inline-flex items-center gap-2 bg-purple-500/10 border border-purple-500/20 text-purple-300 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest mb-6">
                        <ShieldCheck size={14} /> Internal Training Material
                    </div>
                    <h1 className="text-3xl md:text-5xl lg:text-6xl font-serif font-bold mb-6 leading-tight">
                        The Comprehensive <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">Builder Marketing System</span>
                    </h1>
                    <p className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed">
                        This 2-hour deep dive reveals every strategy, framework, and tactic we use to generate high-ticket leads for custom builders.
                    </p>
                </div>

                {/* Video Container */}
                <div className="max-w-5xl mx-auto mb-16 relative group">
                    <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-3xl blur opacity-25 group-hover:opacity-50 transition duration-1000"></div>
                    <div className="relative aspect-video bg-black rounded-2xl overflow-hidden shadow-2xl border border-white/10">
                        <iframe
                            className="w-full h-full"
                            src="https://www.youtube.com/embed/duJEpSTCq6I?si=D9beuLdLWFnmcJ5a"
                            title="Builder Marketing System Training"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            allowFullScreen
                        ></iframe>
                    </div>
                </div>

                {/* Content / Notes */}
                <div className="max-w-3xl mx-auto">
                    <div className="bg-white/5 border border-white/10 rounded-2xl p-8 md:p-10 mb-12">
                        <h3 className="text-2xl font-serif font-bold mb-6">What You'll Learn:</h3>
                        <ul className="space-y-4">
                            {[
                                "The 'Filtering Funnel' that disqualifies tire-kickers automatically",
                                "How to structure your website to convert visitors into booked appointments",
                                "The exact ad copy frameworks that drive high-quality leads",
                                "Sales process adjustments for high-ticket construction projects",
                                "How to track attribution so you know exactly where your revenue comes from"
                            ].map((item, i) => (
                                <li key={i} className="flex items-start gap-4">
                                    <div className="mt-1 bg-green-500/20 p-1 rounded-full">
                                        <CheckCircle size={16} className="text-green-400" />
                                    </div>
                                    <span className="text-slate-300 leading-relaxed">{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="text-center">
                        <p className="text-slate-400 mb-6">Ready to implement this system without doing the work yourself?</p>
                        <Link to="/booking" className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 text-white font-bold py-4 px-10 rounded-full text-lg shadow-lg shadow-purple-900/20 transition-all hover:scale-105">
                            Book Your Strategy Call <ArrowRight size={20} />
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FreeTraining;
