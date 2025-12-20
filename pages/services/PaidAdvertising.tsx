import React from 'react';
import { Link } from 'react-router-dom';
import { Target, Users, BarChart3, ArrowRight, CheckCircle } from 'lucide-react';

const PaidAdvertising: React.FC = () => {
    return (
        <div className="pt-20">
            {/* Hero Section */}
            <section className="relative bg-[#0F172A] text-white pt-20 pb-32 overflow-hidden">
                {/* Abstract Background */}
                <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-purple-900/30 rounded-full blur-[120px] pointer-events-none"></div>
                <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-blue-900/20 rounded-full blur-[100px] pointer-events-none"></div>

                <div className="container mx-auto px-6 relative z-10">
                    <div className="max-w-4xl mx-auto text-center">
                        <span className="inline-block py-1 px-3 rounded-full bg-purple-900/50 border border-purple-500 text-purple-300 text-xs font-bold tracking-wider uppercase mb-6">
                            Paid Search & Social
                        </span>
                        <h1 className="text-5xl md:text-7xl font-serif font-bold mb-8 leading-tight">
                            Predictable Leads. <br /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">Guaranteed ROI.</span>
                        </h1>
                        <p className="text-xl text-slate-300 mb-10 max-w-2xl mx-auto leading-relaxed">
                            We run high-intent campaigns that put your homes in front of qualified buyers, not just window shoppers.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link to="/contact" className="bg-white text-slate-900 px-8 py-4 rounded-full font-bold hover:bg-purple-50 transition-colors">
                                Get an Ad Audit
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* The Problem / Solution */}
            <section className="py-24 bg-white">
                <div className="container mx-auto px-6">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <div className="space-y-8">
                            <h2 className="text-4xl font-serif font-bold text-slate-900">
                                Most agencies focus on clicks.<br /> We focus on <span className="text-purple-600">contracts.</span>
                            </h2>
                            <p className="text-lg text-slate-600 leading-relaxed">
                                Clicks don't buy houses. We use advanced targeting on Meta (Facebook/Instagram) and Google to find landowners and high-net-worth individuals ready to build.
                            </p>

                            <div className="space-y-6">
                                <div className="flex gap-4">
                                    <div className="w-12 h-12 rounded-xl bg-red-100 text-red-600 flex items-center justify-center flex-shrink-0">
                                        <Users size={24} />
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-slate-900 text-lg">No "Lead Gen" Junk</h3>
                                        <p className="text-slate-600">We filter out people looking for rentals, renovations, or cheap repairs.</p>
                                    </div>
                                </div>
                                <div className="flex gap-4">
                                    <div className="w-12 h-12 rounded-xl bg-green-100 text-green-600 flex items-center justify-center flex-shrink-0">
                                        <Target size={24} />
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-slate-900 text-lg">Detailed Targeting</h3>
                                        <p className="text-slate-600">We target by income, interests (Architecture, design), and life events.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="relative">
                            <img
                                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                                alt="Analytics Dashboard"
                                className="rounded-2xl shadow-2xl"
                            />
                            <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-xl border border-slate-100 max-w-xs">
                                <div className="flex items-center gap-3 mb-2">
                                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                                    <span className="font-bold text-slate-900">Results (Last 30 Days)</span>
                                </div>
                                <div className="text-3xl font-bold text-slate-900 mb-1">14 Qualified Leads</div>
                                <div className="text-sm text-slate-500">Avg Cost: $42 / lead</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Platforms */}
            <section className="py-20 bg-slate-50">
                <div className="container mx-auto px-6">
                    <div className="grid md:grid-cols-3 gap-8">
                        <div className="bg-white p-8 rounded-2xl border-t-4 border-blue-600 shadow-sm">
                            <h3 className="text-2xl font-bold text-slate-900 mb-4">Meta Ads</h3>
                            <p className="text-slate-600 mb-6">Facebook & Instagram. Perfect for visual storytelling and reaching passive buyers before they search.</p>
                            <ul className="space-y-2">
                                <li className="flex items-center text-sm text-slate-700"><CheckCircle size={16} className="text-green-500 mr-2" /> Visual Portfolio Ads</li>
                                <li className="flex items-center text-sm text-slate-700"><CheckCircle size={16} className="text-green-500 mr-2" /> Lead Forms</li>
                            </ul>
                        </div>
                        <div className="bg-white p-8 rounded-2xl border-t-4 border-red-500 shadow-sm">
                            <h3 className="text-2xl font-bold text-slate-900 mb-4">Google Ads</h3>
                            <p className="text-slate-600 mb-6">Capture active intent. Show up exactly when they search "Custom home builder near me."</p>
                            <ul className="space-y-2">
                                <li className="flex items-center text-sm text-slate-700"><CheckCircle size={16} className="text-green-500 mr-2" /> Local Search</li>
                                <li className="flex items-center text-sm text-slate-700"><CheckCircle size={16} className="text-green-500 mr-2" /> Competitor Keywords</li>
                            </ul>
                        </div>
                        <div className="bg-white p-8 rounded-2xl border-t-4 border-purple-600 shadow-sm">
                            <h3 className="text-2xl font-bold text-slate-900 mb-4">Retargeting</h3>
                            <p className="text-slate-600 mb-6">Don't let them forget you. We follow site visitors with branded ads across the web.</p>
                            <ul className="space-y-2">
                                <li className="flex items-center text-sm text-slate-700"><CheckCircle size={16} className="text-green-500 mr-2" /> Brand Awareness</li>
                                <li className="flex items-center text-sm text-slate-700"><CheckCircle size={16} className="text-green-500 mr-2" /> Social Proof</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-24 bg-white text-center">
                <div className="container mx-auto px-6 max-w-4xl">
                    <h2 className="text-4xl font-serif font-bold text-slate-900 mb-6">Stop wasting money on bad clicks.</h2>
                    <p className="text-xl text-slate-600 mb-10">
                        We'll audit your current ad account for free and show you where you're losing money.
                    </p>
                    <Link to="/contact" className="inline-flex items-center bg-slate-900 text-white px-8 py-4 rounded-full font-bold hover:bg-purple-600 transition-colors">
                        Get Your Free Audit <ArrowRight className="ml-2" />
                    </Link>
                </div>
            </section>
        </div>
    );
};

export default PaidAdvertising;
