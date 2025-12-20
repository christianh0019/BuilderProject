import React from 'react';
import { Link } from 'react-router-dom';
import { PenTool, Mail, Share2, ArrowRight, CheckCircle } from 'lucide-react';

const ContentMarketing: React.FC = () => {
    return (
        <div className="pt-20">
            {/* Hero Section */}
            <section className="relative bg-white pt-20 pb-32 overflow-hidden">
                <div className="container mx-auto px-6 relative z-10">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <div>
                            <span className="text-purple-600 font-bold tracking-wider text-sm uppercase mb-4 block">Content Marketing & Nurture</span>
                            <h1 className="text-5xl md:text-7xl font-serif font-bold text-slate-900 mb-8 leading-tight">
                                Stay Top of Mind <br />Until They're Ready
                            </h1>
                            <p className="text-xl text-slate-600 mb-10 leading-relaxed">
                                Custom homes take months (or years) to plan. We keep your brand relevant with educational content and automated email usage, so when they break ground, they call you.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4">
                                <Link to="/contact" className="bg-slate-900 text-white px-8 py-4 rounded-full font-bold hover:bg-purple-600 transition-colors">
                                    Get a Content Plan
                                </Link>
                            </div>
                        </div>
                        <div className="relative">
                            <div className="absolute -inset-4 bg-purple-100 rounded-full filter blur-3xl opacity-50"></div>
                            <img
                                src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
                                alt="Content Strategy"
                                className="relative rounded-2xl shadow-2xl transform rotate-3 hover:rotate-0 transition-transform duration-500"
                            />
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
