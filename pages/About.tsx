import React from 'react';
import SEO from '../components/SEO';
import { Users, Target, Zap, Heart } from 'lucide-react';

const About: React.FC = () => {
    return (
        <div className="bg-white font-sans text-slate-900 selection:bg-purple-200 selection:text-purple-900 pt-32 pb-20">
            <SEO
                title="About Us | BuilderProject"
                description="We are a specialized marketing agency for custom home builders. Our mission is to help builders scale with predictable systems."
            />

            <div className="container mx-auto px-6">
                {/* Hero / Header */}
                <div className="max-w-4xl mx-auto text-center mb-20">
                    <span className="inline-block py-2 px-6 rounded-full bg-purple-100 text-purple-700 text-sm font-bold tracking-widest uppercase mb-6">
                        About Us
                    </span>
                    <h1 className="text-5xl md:text-6xl font-serif font-bold text-slate-900 mb-8 leading-tight">
                        We Don't Just Market Builders. <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-700 to-pink-600">
                            We Build Businesses.
                        </span>
                    </h1>
                    <p className="text-xl text-slate-500 leading-relaxed max-w-2xl mx-auto">
                        BuilderProject was founded on a simple belief: Custom home builders deserve better than generic marketing agencies effectively guessing with their budget.
                    </p>
                </div>

                {/* Mission Section */}
                <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 mb-32 items-center">
                    <div>
                        <div className="w-12 h-12 bg-purple-100 rounded-2xl flex items-center justify-center text-purple-600 mb-6">
                            <Target size={28} />
                        </div>
                        <h2 className="text-3xl font-serif font-bold text-slate-900 mb-6">Our Mission</h2>
                        <div className="space-y-4 text-lg text-slate-600 leading-relaxed">
                            <p>
                                The construction industry is full of incredible craftsmen who struggle to get the recognition (and revenue) they deserve. They rely on "word of mouth" while their inferior competitors dominate online.
                            </p>
                            <p>
                                <strong>We're here to change that.</strong>
                            </p>
                            <p>
                                We build specialized, predictable marketing systems that give high-quality builders control over their pipeline. No more hoping for referrals. No more "slow seasons". Just consistent, high-value projects on demand.
                            </p>
                        </div>
                    </div>
                    <div className="bg-slate-50 rounded-3xl p-8 border border-slate-100">
                        <div className="grid grid-cols-2 gap-6">
                            <div className="bg-white p-6 rounded-2xl shadow-sm">
                                <div className="text-4xl font-bold text-purple-600 mb-2">100+</div>
                                <div className="text-sm font-bold text-slate-600 uppercase tracking-wide">Builders Partnered</div>
                            </div>
                            <div className="bg-white p-6 rounded-2xl shadow-sm">
                                <div className="text-4xl font-bold text-purple-600 mb-2">$100M+</div>
                                <div className="text-sm font-bold text-slate-600 uppercase tracking-wide">Revenue Generated</div>
                            </div>
                            <div className="bg-white p-6 rounded-2xl shadow-sm">
                                <div className="text-4xl font-bold text-purple-600 mb-2">4</div>
                                <div className="text-sm font-bold text-slate-600 uppercase tracking-wide">Years Specialized</div>
                            </div>
                            <div className="bg-white p-6 rounded-2xl shadow-sm">
                                <div className="text-4xl font-bold text-purple-600 mb-2">100%</div>
                                <div className="text-sm font-bold text-slate-600 uppercase tracking-wide">Construction Focused</div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Values / Distinction */}
                <div className="bg-slate-900 text-white rounded-3xl p-12 md:p-20 mb-32 text-center">
                    <h2 className="text-3xl md:text-4xl font-serif font-bold mb-16">Why We're Different</h2>
                    <div className="grid md:grid-cols-3 gap-12">
                        <div>
                            <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-6 text-purple-400">
                                <Users size={32} />
                            </div>
                            <h3 className="text-xl font-bold mb-4">Specialized Expertise</h3>
                            <p className="text-slate-400 leading-relaxed">
                                We don't work with dentists, lawyers, or e-commerce stores. We only work with custom home builders. We know your industry inside and out.
                            </p>
                        </div>
                        <div>
                            <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-6 text-purple-400">
                                <Zap size={32} />
                            </div>
                            <h3 className="text-xl font-bold mb-4">Systems, Not Gimmicks</h3>
                            <p className="text-slate-400 leading-relaxed">
                                We don't just "run ads". We build complete client acquisition infrastructures—from initial click to signed contract.
                            </p>
                        </div>
                        <div>
                            <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-6 text-purple-400">
                                <Heart size={32} />
                            </div>
                            <h3 className="text-xl font-bold mb-4">Partnership Mentality</h3>
                            <p className="text-slate-400 leading-relaxed">
                                We view ourselves as your growth partner. When you win, we win. That's why our average client stays with us for years.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Team Section */}
                <div className="max-w-6xl mx-auto text-center">
                    <span className="text-purple-600 font-bold tracking-wider text-sm uppercase mb-3 block">Our People</span>
                    <h2 className="text-4xl font-serif font-bold text-slate-900 mb-16">Meet The Team</h2>

                    <div className="grid md:grid-cols-3 gap-8">
                        {/* Team Member 1 */}
                        <div className="group">
                            <div className="bg-slate-100 rounded-2xl aspect-[3/4] mb-6 overflow-hidden relative shadow-md group-hover:shadow-xl transition-all duration-300 group-hover:-translate-y-2">
                                <img
                                    src="/images/team-1.jpg"
                                    alt="Process & Strategy Director"
                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                                />
                            </div>
                            <h3 className="text-xl font-bold text-slate-900">Process & Strategy</h3>
                            <p className="text-purple-600 font-medium text-sm mb-2">Leadership</p>
                            <p className="text-slate-500 text-sm max-w-xs mx-auto">Ensuring every partner has a clear roadmap to growth.</p>
                        </div>

                        {/* Team Member 2 */}
                        <div className="group">
                            <div className="bg-slate-100 rounded-2xl aspect-[3/4] mb-6 overflow-hidden relative shadow-md group-hover:shadow-xl transition-all duration-300 group-hover:-translate-y-2">
                                <img
                                    src="/images/team-2.png"
                                    alt="Creative Director"
                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                                />
                            </div>
                            <h3 className="text-xl font-bold text-slate-900">Creative & Design</h3>
                            <p className="text-purple-600 font-medium text-sm mb-2">Production</p>
                            <p className="text-slate-500 text-sm max-w-xs mx-auto">Building brands that command premium prices.</p>
                        </div>

                        {/* Team Member 3 */}
                        <div className="group">
                            <div className="bg-slate-100 rounded-2xl aspect-[3/4] mb-6 overflow-hidden relative shadow-md group-hover:shadow-xl transition-all duration-300 group-hover:-translate-y-2">
                                <img
                                    src="/images/team-3.jpg"
                                    alt="Client Success Manager"
                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                                />
                            </div>
                            <h3 className="text-xl font-bold text-slate-900">Client Success</h3>
                            <p className="text-purple-600 font-medium text-sm mb-2">Operations</p>
                            <p className="text-slate-500 text-sm max-w-xs mx-auto">Dedicated to your day-to-day wins and long-term scaling.</p>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default About;
