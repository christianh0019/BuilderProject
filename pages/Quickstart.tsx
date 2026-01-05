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

                    {/* Detailed Feature Sections */}
                    <div className="space-y-32">

                        {/* Feature 1: Website */}
                        <div className="flex flex-col md:flex-row gap-12 items-center">
                            <div className="md:w-1/2">
                                <span className="text-purple-600 font-bold tracking-wider text-sm uppercase mb-2 block">The Core</span>
                                <h3 className="text-3xl font-serif font-bold text-slate-900 mb-6">Professional High-Converting Website</h3>
                                <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                                    Your website is your "Digital Model Home". If it feels cheap, potential clients assume your work is cheap. We build you a high-performance site designed specifically for construction—showcasing your portfolio, establishing authority, and converting visitors into leads.
                                </p>
                                <ul className="space-y-3">
                                    <li className="flex items-center gap-3 text-slate-700 font-medium">
                                        <div className="bg-green-100 p-1 rounded-full text-green-600"><CheckCircle2 size={16} /></div>
                                        Fast-loading mobile optimization
                                    </li>
                                    <li className="flex items-center gap-3 text-slate-700 font-medium">
                                        <div className="bg-green-100 p-1 rounded-full text-green-600"><CheckCircle2 size={16} /></div>
                                        Lead-capture focused layout
                                    </li>
                                </ul>
                            </div>
                            <div className="md:w-1/2 bg-slate-100 rounded-3xl p-8 border border-slate-200 aspect-video flex items-center justify-center">
                                {/* Placeholder for visual or simplified browser frame */}
                                <div className="text-center">
                                    <div className="text-6xl mb-4">🖥️</div>
                                    <div className="font-bold text-slate-400 uppercase tracking-widest text-sm">Visual Representation</div>
                                </div>
                            </div>
                        </div>

                        {/* Feature 2: GBP */}
                        <div className="flex flex-col md:flex-row-reverse gap-12 items-center">
                            <div className="md:w-1/2">
                                <span className="text-blue-600 font-bold tracking-wider text-sm uppercase mb-2 block">Local Visibility</span>
                                <h3 className="text-3xl font-serif font-bold text-slate-900 mb-6">Google Business Profile Optimization</h3>
                                <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                                    When someone types "custom builder near me", you need to show up in the Map Pack. We claim, verify, and fully optimize your Google Business Profile to ensure you capture that high-intent local traffic.
                                </p>
                                <ul className="space-y-3">
                                    <li className="flex items-center gap-3 text-slate-700 font-medium">
                                        <div className="bg-green-100 p-1 rounded-full text-green-600"><CheckCircle2 size={16} /></div>
                                        Rank in local map searches
                                    </li>
                                    <li className="flex items-center gap-3 text-slate-700 font-medium">
                                        <div className="bg-green-100 p-1 rounded-full text-green-600"><CheckCircle2 size={16} /></div>
                                        Display reviews and credibility
                                    </li>
                                </ul>
                            </div>
                            <div className="md:w-1/2 bg-blue-50 rounded-3xl p-8 border border-blue-100 aspect-video flex items-center justify-center">
                                <div className="text-center">
                                    <div className="text-6xl mb-4">📍</div>
                                    <div className="font-bold text-blue-300 uppercase tracking-widest text-sm">Map Dominance</div>
                                </div>
                            </div>
                        </div>

                        {/* Feature 3: Social Branding */}
                        <div className="flex flex-col md:flex-row gap-12 items-center">
                            <div className="md:w-1/2">
                                <span className="text-pink-600 font-bold tracking-wider text-sm uppercase mb-2 block">Brand Perception</span>
                                <h3 className="text-3xl font-serif font-bold text-slate-900 mb-6">Social Media Branding Kit</h3>
                                <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                                    Inconsistent or ugly social channels scream "amateur". We provide you with professional bio setups, profile graphics, and a template system so every project photo you post looks like it belongs in a magazine.
                                </p>
                                <ul className="space-y-3">
                                    <li className="flex items-center gap-3 text-slate-700 font-medium">
                                        <div className="bg-green-100 p-1 rounded-full text-green-600"><CheckCircle2 size={16} /></div>
                                        Cohesive cross-platform identity
                                    </li>
                                    <li className="flex items-center gap-3 text-slate-700 font-medium">
                                        <div className="bg-green-100 p-1 rounded-full text-green-600"><CheckCircle2 size={16} /></div>
                                        Ready-to-use posting templates
                                    </li>
                                </ul>
                            </div>
                            <div className="md:w-1/2 bg-pink-50 rounded-3xl p-8 border border-pink-100 aspect-video flex items-center justify-center">
                                <div className="text-center">
                                    <div className="text-6xl mb-4">📱</div>
                                    <div className="font-bold text-pink-300 uppercase tracking-widest text-sm">Instant Authority</div>
                                </div>
                            </div>
                        </div>

                        {/* Feature 4: Portfolio */}
                        <div className="flex flex-col md:flex-row-reverse gap-12 items-center">
                            <div className="md:w-1/2">
                                <span className="text-orange-600 font-bold tracking-wider text-sm uppercase mb-2 block">Showcase</span>
                                <h3 className="text-3xl font-serif font-bold text-slate-900 mb-6">Project Portfolio Setup</h3>
                                <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                                    Turn your past projects into SEO gold. We don't just dump photo galleries online; we structure your project pages to rank for specific terms like "Modern Farmhouse in [City]" so your work sells itself 24/7.
                                </p>
                                <ul className="space-y-3">
                                    <li className="flex items-center gap-3 text-slate-700 font-medium">
                                        <div className="bg-green-100 p-1 rounded-full text-green-600"><CheckCircle2 size={16} /></div>
                                        SEO-optimized project descriptions
                                    </li>
                                    <li className="flex items-center gap-3 text-slate-700 font-medium">
                                        <div className="bg-green-100 p-1 rounded-full text-green-600"><CheckCircle2 size={16} /></div>
                                        High-end gallery layout
                                    </li>
                                </ul>
                            </div>
                            <div className="md:w-1/2 bg-orange-50 rounded-3xl p-8 border border-orange-100 aspect-video flex items-center justify-center">
                                <div className="text-center">
                                    <div className="text-6xl mb-4">📸</div>
                                    <div className="font-bold text-orange-300 uppercase tracking-widest text-sm">SEO Gold</div>
                                </div>
                            </div>
                        </div>

                        {/* Feature 5: SEO Foundation */}
                        <div className="flex flex-col md:flex-row gap-12 items-center">
                            <div className="md:w-1/2">
                                <span className="text-green-600 font-bold tracking-wider text-sm uppercase mb-2 block">Long-Term Growth</span>
                                <h3 className="text-3xl font-serif font-bold text-slate-900 mb-6">Basic SEO Foundation</h3>
                                <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                                    We bake SEO into the core of your new site. Proper schema markup, site speed optimization, and keyword-targeted architecture ensure that you start climbing the rankings from Day 1.
                                </p>
                                <ul className="space-y-3">
                                    <li className="flex items-center gap-3 text-slate-700 font-medium">
                                        <div className="bg-green-100 p-1 rounded-full text-green-600"><CheckCircle2 size={16} /></div>
                                        Google-ready site architecture
                                    </li>
                                    <li className="flex items-center gap-3 text-slate-700 font-medium">
                                        <div className="bg-green-100 p-1 rounded-full text-green-600"><CheckCircle2 size={16} /></div>
                                        Technical SEO best practices
                                    </li>
                                </ul>
                            </div>
                            <div className="md:w-1/2 bg-green-50 rounded-3xl p-8 border border-green-100 aspect-video flex items-center justify-center">
                                <div className="text-center">
                                    <div className="text-6xl mb-4">🚀</div>
                                    <div className="font-bold text-green-300 uppercase tracking-widest text-sm">Ranking Power</div>
                                </div>
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
