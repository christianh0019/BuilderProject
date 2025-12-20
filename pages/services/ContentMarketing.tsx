import React from 'react';
import { Link } from 'react-router-dom';
import { PenTool, Mail, Share2, ArrowRight, CheckCircle } from 'lucide-react';

const ContentMarketing: React.FC = () => {
    return (
        <div className="pt-20">
            {/* Hero Section */}
            {/* Hero Section */}
            <section className="relative bg-[#0F172A] text-white pt-20 pb-32 overflow-hidden">
                {/* Abstract Background */}
                <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-purple-900/30 rounded-full blur-[120px] pointer-events-none"></div>
                <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-blue-900/20 rounded-full blur-[100px] pointer-events-none"></div>

                <div className="container mx-auto px-6 relative z-10">
                    <div className="max-w-4xl mx-auto text-center">
                        <span className="inline-block py-1 px-3 rounded-full bg-purple-900/50 border border-purple-500 text-purple-300 text-xs font-bold tracking-wider uppercase mb-6">
                            SEO for Home Builders
                        </span>
                        <h1 className="text-5xl md:text-7xl font-serif font-bold mb-8 leading-tight">
                            Stay Top of Mind <br /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">Until They're Ready</span>
                        </h1>
                        <p className="text-xl text-slate-300 mb-10 max-w-2xl mx-auto leading-relaxed">
                            Custom homes take months to plan. We keep your brand relevant with **construction copywriting** and automated email nurture, so when they break ground, they call you.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link to="/contact" className="bg-white text-slate-900 px-8 py-4 rounded-full font-bold hover:bg-purple-50 transition-colors">
                                Get a Content Plan
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* Services Grid */}
            <section className="py-20 bg-slate-50">
                <div className="container mx-auto px-6">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <h2 className="text-3xl font-serif font-bold text-slate-900 mb-4">Complete Authority Building</h2>
                        <p className="text-slate-600">We position you as the expert builder in your market.</p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
                            <PenTool size={40} className="text-purple-600 mb-6" />
                            <h3 className="text-xl font-bold text-slate-900 mb-3">SEO Blogging</h3>
                            <p className="text-slate-600">High-quality articles targeting local search terms like "Cost to build in [Your City]" or "Modern farmhouse trends."</p>
                        </div>
                        <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
                            <Mail size={40} className="text-purple-600 mb-6" />
                            <h3 className="text-xl font-bold text-slate-900 mb-3">Email Nurture</h3>
                            <p className="text-slate-600">Automated sequences that educate prospects on your process, ensuring you don't lose leads to "ghosting."</p>
                        </div>
                        <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
                            <Share2 size={40} className="text-purple-600 mb-6" />
                            <h3 className="text-xl font-bold text-slate-900 mb-3">Social Assets</h3>
                            <p className="text-slate-600">We repurpose your project photos into engaging Instagram/Facebook posts to showcase your craftsmanship.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Process */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-6 max-w-4xl">
                    <h2 className="text-3xl font-serif font-bold text-slate-900 mb-12 text-center">How It Works</h2>
                    <div className="space-y-12">
                        {[
                            {
                                title: "1. Strategy Session",
                                desc: "We identify your ideal client avatars and the questions they are asking online.",
                            },
                            {
                                title: "2. Content Creation",
                                desc: "Our construction-specialized writers produce high-value guides and articles.",
                            },
                            {
                                title: "3. Distribution",
                                desc: "We publish to your blog, send to your email list, and push to social media.",
                            },
                            {
                                title: "4. Lead Scoring",
                                desc: "We track who reads what, identifying the prospects ready to buy."
                            }
                        ].map((step, i) => (
                            <div key={i} className="flex gap-6 items-start">
                                <div className="w-12 h-12 rounded-full bg-slate-900 text-white flex items-center justify-center font-bold text-lg flex-shrink-0">
                                    {i + 1}
                                </div>
                                <div>
                                    <h4 className="text-xl font-bold text-slate-900 mb-2">{step.title}</h4>
                                    <p className="text-slate-600">{step.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-24 bg-slate-900 text-white text-center">
                <div className="container mx-auto px-6 max-w-4xl">
                    <h2 className="text-4xl font-serif font-bold mb-6">Stop letting leads go cold.</h2>
                    <p className="text-xl text-slate-400 mb-10">
                        Build a machine that educates and converts while you sleep.
                    </p>
                    <Link to="/contact" className="inline-flex items-center bg-purple-600 hover:bg-purple-700 text-white px-8 py-4 rounded-full font-bold transition-all hover:scale-105">
                        Book a Strategy Call <ArrowRight className="ml-2" />
                    </Link>
                </div>
            </section>
        </div>
    );
};

export default ContentMarketing;
