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
                <div className="max-w-4xl mx-auto mb-32">
                    <div className="text-center mb-16">
                        <div className="w-16 h-16 bg-purple-100 rounded-2xl flex items-center justify-center text-purple-600 mx-auto mb-6">
                            <Target size={32} />
                        </div>
                        <h2 className="text-4xl font-serif font-bold text-slate-900 mb-8">Our Mission</h2>
                        <div className="text-xl text-slate-600 leading-relaxed space-y-6">
                            <p>
                                The construction industry is full of incredible craftsmen who struggle to get the recognition (and revenue) they deserve. They rely on "word of mouth" while their inferior competitors dominate online.
                            </p>
                            <p className="font-medium text-slate-900">
                                We're here to change that.
                            </p>
                            <p>
                                We build specialized, predictable marketing systems that give high-quality builders control over their pipeline. No more hoping for referrals. No more "slow seasons". Just consistent, high-value projects on demand.
                            </p>
                        </div>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                        <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100 text-center hover:border-purple-200 transition-colors group">
                            <div className="text-3xl font-bold text-purple-600 mb-2 group-hover:scale-110 transition-transform duration-300">100+</div>
                            <div className="text-xs font-bold text-slate-500 uppercase tracking-wide">Builders Partnered</div>
                        </div>
                        <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100 text-center hover:border-purple-200 transition-colors group">
                            <div className="text-3xl font-bold text-purple-600 mb-2 group-hover:scale-110 transition-transform duration-300">$100M+</div>
                            <div className="text-xs font-bold text-slate-500 uppercase tracking-wide">Revenue Generated</div>
                        </div>
                        <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100 text-center hover:border-purple-200 transition-colors group">
                            <div className="text-3xl font-bold text-purple-600 mb-2 group-hover:scale-110 transition-transform duration-300">4</div>
                            <div className="text-xs font-bold text-slate-500 uppercase tracking-wide">Years Specialized</div>
                        </div>
                        <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100 text-center hover:border-purple-200 transition-colors group">
                            <div className="text-3xl font-bold text-purple-600 mb-2 group-hover:scale-110 transition-transform duration-300">100%</div>
                            <div className="text-xs font-bold text-slate-500 uppercase tracking-wide">Construction Focused</div>
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
                        {/* Founder (White Guy - team-3.jpg) */}
                        <div className="group">
                            <div className="bg-slate-100 rounded-2xl aspect-[3/4] mb-6 overflow-hidden relative shadow-md group-hover:shadow-xl transition-all duration-300 group-hover:-translate-y-2">
                                <img
                                    src="/images/team-3.jpg"
                                    alt="Founder"
                                    className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                                />
                            </div>
                            <h3 className="text-xl font-bold text-slate-900">Founder</h3>
                            <p className="text-purple-600 font-medium text-sm mb-4">Leadership</p>
                            <p className="text-slate-500 text-sm leading-relaxed px-4">
                                With over a decade in construction marketing, he leads the agency's vision, ensuring every partner builder achieves sustainable, scalable growth through systems-driven client acquisition.
                            </p>
                        </div>

                        {/* Marketing Strategist (Black Guy - team-2.png) */}
                        <div className="group">
                            <div className="bg-slate-100 rounded-2xl aspect-[3/4] mb-6 overflow-hidden relative shadow-md group-hover:shadow-xl transition-all duration-300 group-hover:-translate-y-2">
                                <img
                                    src="/images/team-2.png"
                                    alt="Marketing Strategist"
                                    className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                                />
                            </div>
                            <h3 className="text-xl font-bold text-slate-900">Marketing Strategist</h3>
                            <p className="text-purple-600 font-medium text-sm mb-4">Strategy</p>
                            <p className="text-slate-500 text-sm leading-relaxed px-4">
                                The architect behind our client campaigns. He develops data-driven roadmaps that turn cold traffic into qualified home-buyer leads, ensuring your pipeline is never empty.
                            </p>
                        </div>

                        {/* Creative & Design (Asian Guy - team-1.jpg) */}
                        <div className="group">
                            <div className="bg-slate-100 rounded-2xl aspect-[3/4] mb-6 overflow-hidden relative shadow-md group-hover:shadow-xl transition-all duration-300 group-hover:-translate-y-2">
                                <img
                                    src="/images/team-1.jpg"
                                    alt="Creative Director"
                                    className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                                />
                            </div>
                            <h3 className="text-xl font-bold text-slate-900">Creative Director</h3>
                            <p className="text-purple-600 font-medium text-sm mb-4">Creative</p>
                            <p className="text-slate-500 text-sm leading-relaxed px-4">
                                A visionary designer who translates your craftsmanship into a premium digital presence. He ensures your brand aesthetic matches the high quality of the homes you build.
                            </p>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default About;
