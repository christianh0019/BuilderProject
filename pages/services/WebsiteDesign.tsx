import React from 'react';
import { Link } from 'react-router-dom';
import { Monitor, Smartphone, Gauge, Search, ArrowRight, CheckCircle } from 'lucide-react';

const WebsiteDesign: React.FC = () => {
    return (
        <div className="pt-20">
            {/* Hero Section */}
            <section className="relative bg-slate-900 text-white pt-20 pb-32 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-slate-900 to-slate-800"></div>
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')] opacity-10 bg-cover bg-center mix-blend-overlay"></div>

                <div className="container mx-auto px-6 relative z-10">
                    <div className="max-w-4xl mx-auto text-center">
                        <span className="text-purple-400 font-bold tracking-wider text-sm uppercase mb-4 block">Premium Website Design</span>
                        <h1 className="text-5xl md:text-7xl font-serif font-bold mb-8 leading-tight">
                            Build a Digital Model Home <br />That Sells Itself
                        </h1>
                        <p className="text-xl text-slate-300 mb-10 max-w-2xl mx-auto leading-relaxed">
                            Your website is your 24/7 sales center. We build lightning-fast, SEO-optimized sites designed specifically to convert high-net-worth homeowners.
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

            {/* Stats / Benefits */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-6">
                    <div className="grid md:grid-cols-3 gap-12 text-center">
                        <div className="p-8 rounded-2xl bg-slate-50 border border-slate-100">
                            <Gauge size={48} className="text-purple-600 mx-auto mb-6" />
                            <h3 className="text-xl font-bold text-slate-900 mb-3">Google Score 100/100</h3>
                            <p className="text-slate-600">
                                We code from scratch. No bloated templates. Just pure speed that Google loves and users appreciate.
                            </p>
                        </div>
                        <div className="p-8 rounded-2xl bg-slate-50 border border-slate-100">
                            <Smartphone size={48} className="text-purple-600 mx-auto mb-6" />
                            <h3 className="text-xl font-bold text-slate-900 mb-3">Mobile First Design</h3>
                            <p className="text-slate-600">
                                Over 60% of your traffic is on mobile. We ensure your portfolio looks stunning on any device.
                            </p>
                        </div>
                        <div className="p-8 rounded-2xl bg-slate-50 border border-slate-100">
                            <Search size={48} className="text-purple-600 mx-auto mb-6" />
                            <h3 className="text-xl font-bold text-slate-900 mb-3">SEO Foundation</h3>
                            <p className="text-slate-600">
                                Built-in schema markup, proper heading structures, and local SEO signals to help you rank.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Feature Split */}
            <section className="py-20 bg-slate-50">
                <div className="container mx-auto px-6">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <div className="order-2 lg:order-1">
                            <img
                                src="https://images.unsplash.com/photo-1547658719-da2b51169166?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                                alt="Web Design Process"
                                className="rounded-2xl shadow-2xl"
                            />
                        </div>
                        <div className="order-1 lg:order-2">
                            <h2 className="text-4xl font-serif font-bold text-slate-900 mb-6">More Than Just a Pretty Face</h2>
                            <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                                Most builders use generic Wix or Squarespace templates. We build custom applications that act as a lead generation engine.
                            </p>
                            <ul className="space-y-4">
                                {[
                                    "Custom Portfolio Filtering (Style, Location, Price)",
                                    "Interactive Floor Plan Integrations",
                                    "High-Converting 'Get a Quote' funnels",
                                    "Automated CRM Lead Injection"
                                ].map((item, i) => (
                                    <li key={i} className="flex items-center text-slate-800 font-medium">
                                        <CheckCircle size={20} className="text-green-500 mr-3 flex-shrink-0" />
                                        {item}
                                    </li>
                                ))}
                            </ul>
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
