import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Layout, PenTool, TrendingUp, ChevronRight } from 'lucide-react';

const Services: React.FC = () => {
    return (
        <div className="pt-20 font-sans text-slate-900">
            {/* Hero */}
            <section className="bg-slate-900 text-white py-24 px-6 text-center relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-purple-900/40 to-pink-900/40 opacity-50"></div>
                <div className="max-w-4xl mx-auto relative z-10">
                    <span className="inline-block py-1 px-3 rounded-full bg-purple-900/50 border border-purple-500 text-purple-300 text-xs font-bold tracking-wider uppercase mb-6">
                        Comprehensive Solutions
                    </span>
                    <h1 className="text-4xl md:text-7xl font-serif font-bold mb-8">
                        Everything You Need To Dominate Your Market
                    </h1>
                    <p className="text-xl md:text-2xl text-slate-300 leading-relaxed max-w-2xl mx-auto font-light">
                        We don't just "do marketing." We build the entire digital infrastructure required to scale a custom home building business to 8-figures.
                    </p>
                </div>
            </section>

            {/* Services Grid */}
            <section className="py-20 md:py-32 bg-white">
                <div className="container mx-auto px-6">
                    <div className="grid lg:grid-cols-3 gap-8">

                        {/* 1. Website Design */}
                        <div className="group border border-slate-200 rounded-[2rem] p-8 md:p-12 hover:shadow-2xl hover:shadow-purple-900/10 hover:-translate-y-2 transition-all duration-300 flex flex-col items-start">
                            <div className="w-16 h-16 bg-slate-50 rounded-2xl flex items-center justify-center mb-8 text-slate-900 group-hover:bg-slate-900 group-hover:text-white transition-colors">
                                <Layout size={32} />
                            </div>
                            <h3 className="text-3xl font-serif font-bold text-slate-900 mb-4">Website Design</h3>
                            <p className="text-slate-600 text-lg leading-relaxed mb-10 flex-grow">
                                A high-performance digital showroom that builds trust instantly. We design custom sites specifically for the construction industry, focusing on portfolio showcases and lead capture.
                            </p>
                            <Link to="/services/website-design" className="inline-flex items-center text-purple-600 font-bold text-lg group-hover:translate-x-2 transition-transform">
                                Explore Web Design <ArrowRight className="ml-2" />
                            </Link>
                        </div>

                        {/* 2. Paid Advertising */}
                        <div className="group border border-slate-200 rounded-[2rem] p-8 md:p-12 hover:shadow-2xl hover:shadow-purple-900/10 hover:-translate-y-2 transition-all duration-300 flex flex-col items-start">
                            <div className="w-16 h-16 bg-slate-50 rounded-2xl flex items-center justify-center mb-8 text-slate-900 group-hover:bg-slate-900 group-hover:text-white transition-colors">
                                <TrendingUp size={32} />
                            </div>
                            <h3 className="text-3xl font-serif font-bold text-slate-900 mb-4">Paid Advertising</h3>
                            <p className="text-slate-600 text-lg leading-relaxed mb-10 flex-grow">
                                Stop relying on referrals. We deploy precision-targeted Google & Facebook ad campaigns to put your brand in front of homeowners actively looking to build or remodel.
                            </p>
                            <Link to="/services/paid-advertising" className="inline-flex items-center text-purple-600 font-bold text-lg group-hover:translate-x-2 transition-transform">
                                Explore Advertising <ArrowRight className="ml-2" />
                            </Link>
                        </div>

                        {/* 3. Content Marketing */}
                        <div className="group border border-slate-200 rounded-[2rem] p-8 md:p-12 hover:shadow-2xl hover:shadow-purple-900/10 hover:-translate-y-2 transition-all duration-300 flex flex-col items-start">
                            <div className="w-16 h-16 bg-slate-50 rounded-2xl flex items-center justify-center mb-8 text-slate-900 group-hover:bg-slate-900 group-hover:text-white transition-colors">
                                <PenTool size={32} />
                            </div>
                            <h3 className="text-3xl font-serif font-bold text-slate-900 mb-4">Content Marketing</h3>
                            <p className="text-slate-600 text-lg leading-relaxed mb-10 flex-grow">
                                Nurture your leads and become the authority in your market. We handle your SEO, email newsletters, and social media content so you stay top-of-mind.
                            </p>
                            <Link to="/services/content-marketing" className="inline-flex items-center text-purple-600 font-bold text-lg group-hover:translate-x-2 transition-transform">
                                Explore Content <ArrowRight className="ml-2" />
                            </Link>
                        </div>

                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="bg-slate-50 py-24 px-6 text-center">
                <div className="max-w-3xl mx-auto">
                    <h2 className="text-4xl md:text-5xl font-serif font-bold text-slate-900 mb-8">Not sure which one you need?</h2>
                    <p className="text-xl text-slate-600 mb-12">
                        Most builders start with our Partner Program, which includes everything for a flat monthly rate.
                    </p>
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                        <Link to="/programs" className="w-full sm:w-auto px-10 py-4 rounded-full bg-slate-900 text-white font-bold text-lg hover:bg-slate-800 transition-all">
                            View Packages
                        </Link>
                        <Link to="/contact" className="w-full sm:w-auto px-10 py-4 rounded-full border-2 border-slate-200 text-slate-900 font-bold text-lg hover:border-purple-200 hover:bg-white transition-all">
                            Book a Strategy Call
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Services;
