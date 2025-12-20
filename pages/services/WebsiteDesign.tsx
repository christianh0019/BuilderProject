import React from 'react';
import { Link } from 'react-router-dom';
import { Monitor, Smartphone, Gauge, Search, ArrowRight, CheckCircle, Database, Layers, Lock, Zap } from 'lucide-react';
import PortfolioSection from '../../components/website/PortfolioSection';
import BrowserFrame from '../../components/ui/BrowserFrame';
import VersoShowcase from '../../components/website/VersoShowcase';

const WebsiteDesign: React.FC = () => {
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
                            Premium Website Design
                        </span>
                        <h1 className="text-5xl md:text-7xl font-serif font-bold mb-8 leading-tight">
                            Build a Digital Model Home <br /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">That Sells Itself</span>
                        </h1>
                        <p className="text-xl text-slate-300 mb-10 max-w-2xl mx-auto leading-relaxed">
                            We don't just build "brochure" sites. We build high-performance digital assets on a foundation tested across 50+ successful builder websites.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link to="/contact" className="bg-white text-slate-900 px-8 py-4 rounded-full font-bold hover:bg-purple-50 transition-colors">
                                Start Your Project
                            </Link>
                            <Link to="/case-studies" className="border border-slate-600 text-white px-8 py-4 rounded-full font-bold hover:bg-slate-800 transition-colors">
                                View Our Work
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* Interactive Portfolio */}
            <PortfolioSection />

            {/* The Foundation Section */}
            <section className="py-24 bg-white overflow-hidden">
                <div className="container mx-auto px-6">
                    <div className="grid lg:grid-cols-2 gap-20 items-center">
                        <div>
                            <span className="text-purple-600 font-bold tracking-wider text-sm uppercase mb-4 block">The Foundation</span>
                            <h2 className="text-4xl font-serif font-bold text-slate-900 mb-6">
                                Why Our 50+ Sites <br />Outrank the Competition
                            </h2>
                            <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                                Most agencies slap a WordPress template together and call it a day. We've spent years refining a proprietary tech stack designed specifically for the construction industry. It's not just code; it's a lead generation engine.
                            </p>

                            <div className="space-y-6">
                                <div className="flex gap-4">
                                    <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center flex-shrink-0 border border-blue-100">
                                        <Layers size={24} />
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-slate-900 text-lg">React & Next.js Core</h3>
                                        <p className="text-slate-600">We use the same technology as Netflix and Airbnb. Zero "plugin bloat", instant page loads, and unhackable security.</p>
                                    </div>
                                </div>
                                <div className="flex gap-4">
                                    <div className="w-12 h-12 rounded-xl bg-green-50 text-green-600 flex items-center justify-center flex-shrink-0 border border-green-100">
                                        <Database size={24} />
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-slate-900 text-lg">Structured Data Architecture</h3>
                                        <p className="text-slate-600">Every project you upload is automatically tagged with Schema.org markup so Google knows exactly what you built and where.</p>
                                    </div>
                                </div>
                                <div className="flex gap-4">
                                    <div className="w-12 h-12 rounded-xl bg-purple-50 text-purple-600 flex items-center justify-center flex-shrink-0 border border-purple-100">
                                        <Lock size={24} />
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-slate-900 text-lg">Enterprise Grade Hosting</h3>
                                        <p className="text-slate-600">Deployed on the edge. Your site loads in under 100ms regardless of where your client is located.</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Visual Tech Stack Representation */}
                        <div className="relative">
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gradient-to-tr from-purple-200 to-blue-200 rounded-full filter blur-[100px] opacity-50"></div>
                            <div className="relative bg-slate-900 rounded-2xl p-8 border border-slate-700 shadow-2xl transform rotate-1 hover:rotate-0 transition-transform duration-500">
                                <div className="flex items-center gap-2 mb-6 border-b border-slate-800 pb-4">
                                    <div className="w-3 h-3 rounded-full bg-red-500"></div>
                                    <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                                    <div className="ml-auto text-slate-500 text-xs font-mono">performance_audit.json</div>
                                </div>
                                <div className="space-y-4 font-mono text-sm">
                                    <div className="flex justify-between text-green-400">
                                        <span>"firstContentfulPaint"</span>
                                        <span>"0.4s"</span>
                                    </div>
                                    <div className="flex justify-between text-green-400">
                                        <span>"interactive"</span>
                                        <span>"0.8s"</span>
                                    </div>
                                    <div className="flex justify-between text-green-400">
                                        <span>"accessibility"</span>
                                        <span>100</span>
                                    </div>
                                    <div className="flex justify-between text-green-400">
                                        <span>"seo_score"</span>
                                        <span>100</span>
                                    </div>
                                    <div className="h-px bg-slate-800 my-4"></div>
                                    <div className="text-slate-400">
                          // The BuilderProject Difference<br />
                                        <span className="text-purple-400">const</span> <span className="text-blue-400">conversion</span> = <span className="text-yellow-300">true</span>;<br />
                                        <span className="text-purple-400">if</span> (visitor.isQualified) {'{'}<br />
                                        &nbsp;&nbsp;scheduleCall();<br />
                                        {'}'}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* SEO Deep Dive */}
            <section className="py-24 bg-slate-50">
                <div className="container mx-auto px-6 max-w-4xl text-center">
                    <h2 className="text-3xl font-serif font-bold text-slate-900 mb-8">Rank on Google. Dominate Your Market.</h2>
                    <p className="text-lg text-slate-600 mb-12 leading-relaxed">
                        A pretty website that no one visits is a billboard in the desert. We bake Local SEO into every line of code. From <strong>Service Area Pages</strong> that capture traffic from neighboring towns to <strong>Project Galleries</strong> that rank for "Custom Home [City Name]", we engineer your site to be found.
                    </p>

                    <div className="grid md:grid-cols-3 gap-6 text-left">
                        <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100">
                            <div className="bg-green-100 w-10 h-10 rounded-full flex items-center justify-center text-green-600 mb-4 font-bold text-sm">01</div>
                            <h4 className="font-bold text-slate-900 mb-2">Local Dominance</h4>
                            <p className="text-sm text-slate-600">We create dedicated pages for every city and neighborhood you build in.</p>
                        </div>
                        <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100">
                            <div className="bg-green-100 w-10 h-10 rounded-full flex items-center justify-center text-green-600 mb-4 font-bold text-sm">02</div>
                            <h4 className="font-bold text-slate-900 mb-2">Project Showcases</h4>
                            <p className="text-sm text-slate-600">Turn your portfolio into SEO gold. Each project ranks for specific renovation types.</p>
                        </div>
                        <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100">
                            <div className="bg-green-100 w-10 h-10 rounded-full flex items-center justify-center text-green-600 mb-4 font-bold text-sm">03</div>
                            <h4 className="font-bold text-slate-900 mb-2">Speed Signals</h4>
                            <p className="text-sm text-slate-600">Core Web Vitals are now a ranking factor. Our sites ace them by default.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-24 bg-slate-900 text-white text-center">
                <div className="container mx-auto px-6 max-w-4xl">
                    <h2 className="text-4xl font-serif font-bold mb-6">Ready to upgrade your digital presence?</h2>
                    <p className="text-xl text-slate-400 mb-10">
                        Stop losing leads to competitors with better websites. Let's build your new site in as little as 4 weeks.
                    </p>
                    <Link to="/contact" className="inline-flex items-center bg-purple-600 hover:bg-purple-700 text-white px-8 py-4 rounded-full font-bold transition-all hover:scale-105">
                        Schedule a Demo <ArrowRight className="ml-2" />
                    </Link>
                </div>
            </section>
        </div>
    );
};

export default WebsiteDesign;
