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
                            Custom Home Builder Website Design
                        </span>
                        <h1 className="text-5xl md:text-7xl font-serif font-bold mb-8 leading-tight">
                            Build a Digital Model Home <br /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">That Sells Itself</span>
                        </h1>
                        <p className="text-xl text-slate-300 mb-10 max-w-2xl mx-auto leading-relaxed">
                            We don't just build "brochure" sites. We deliver **high-performance construction website development** on a foundation tested across 50+ successful builder websites.
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

            {/* Live Preview Section */}
            <section className="py-24 bg-slate-50 border-y border-slate-200">
                <div className="container mx-auto px-6">
                    <div className="max-w-4xl mx-auto text-center mb-16">
                        <span className="text-purple-600 font-bold tracking-wider text-sm uppercase mb-4 block">The "Premium" Difference</span>
                        <h2 className="text-3xl md:text-5xl font-serif font-bold text-slate-900 mb-6">
                            See A Real Example
                        </h2>
                        <p className="text-lg text-slate-600">
                            Interact with "Verso Builders" below. This is the caliber of design we deliver as a baseline.
                        </p>
                    </div>

                    <div className="max-w-6xl mx-auto mb-20">
                        <BrowserFrame url="versobuilders.com">
                            <VersoShowcase />
                        </BrowserFrame>
                    </div>

                    <div className="max-w-4xl mx-auto text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-serif font-bold text-slate-900 mb-6">
                            Stonebrook Construction
                        </h2>
                        <p className="text-lg text-slate-600">
                            A luxury custom home builder in Phoenix, AZ. High-end aesthetic with clear conversion paths.
                        </p>
                    </div>

                    <div className="max-w-6xl mx-auto mb-20">
                        <BrowserFrame url="stonebrookconstruction.com" contentClassName="h-auto">
                            <img
                                src="/images/stonebrook-hero.png"
                                alt="Stonebrook Construction Website Design"
                                className="w-full h-auto"
                            />
                        </BrowserFrame>
                    </div>

                    <div className="max-w-4xl mx-auto text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-serif font-bold text-slate-900 mb-6">
                            Homestead Home Builders
                        </h2>
                        <p className="text-lg text-slate-600">
                            Sustainable design-build services in Loveland, CO. Clean, modern interface emphasizing local connection.
                        </p>
                    </div>

                    <div className="max-w-6xl mx-auto">
                        <BrowserFrame url="homesteadhomebuilders.com" contentClassName="h-auto">
                            <img
                                src="/images/homestead-hero.png"
                                alt="Homestead Home Builders Website Design"
                                className="w-full h-auto"
                            />
                        </BrowserFrame>
                    </div>
                </div>

                {/* Project Page vs Gallery Differentiation */}
                <div className="max-w-6xl mx-auto px-6 mt-24">
                    <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-slate-100">
                        <div className="text-center mb-12">
                            <h3 className="text-3xl font-serif font-bold text-slate-900 mb-4">Stop Hiding Your Best Work in a "Gallery"</h3>
                            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                                Most builder websites dump photos into a grid without context. We turn every project into a sales asset.
                            </p>
                        </div>

                        <div className="grid md:grid-cols-2 gap-12 items-center">
                            {/* The Old Way */}
                            <div className="space-y-6 opacity-75 grayscale transition-all hover:grayscale-0 hover:opacity-100 duration-500">
                                <div className="bg-slate-100 rounded-xl p-8 border border-slate-200">
                                    <h4 className="font-bold text-slate-500 mb-4 flex items-center gap-2">
                                        <div className="w-2 h-2 rounded-full bg-red-400"></div>
                                        The Standard "Gallery"
                                    </h4>
                                    <div className="grid grid-cols-3 gap-2 mb-4">
                                        <div className="aspect-square bg-slate-300 rounded"></div>
                                        <div className="aspect-square bg-slate-300 rounded"></div>
                                        <div className="aspect-square bg-slate-300 rounded"></div>
                                        <div className="aspect-square bg-slate-300 rounded"></div>
                                        <div className="aspect-square bg-slate-300 rounded"></div>
                                        <div className="aspect-square bg-slate-300 rounded"></div>
                                    </div>
                                    <ul className="space-y-2 text-sm text-slate-500">
                                        <li className="flex gap-2"><span className="text-red-400">×</span> No context or story</li>
                                        <li className="flex gap-2"><span className="text-red-400">×</span> "How much did this cost?" (Unqualified leads)</li>
                                        <li className="flex gap-2"><span className="text-red-400">×</span> Invisible to Google</li>
                                    </ul>
                                </div>
                            </div>

                            {/* The BuilderProject Way */}
                            <div className="relative">
                                <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl blur opacity-20"></div>
                                <div className="relative bg-white rounded-xl p-8 border border-purple-100 shadow-lg">
                                    <h4 className="font-bold text-slate-900 mb-4 flex items-center gap-2">
                                        <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
                                        Our "Featured Project" Page
                                    </h4>
                                    <div className="bg-slate-50 rounded-lg p-4 mb-4 border border-slate-100">
                                        <div className="h-4 w-3/4 bg-slate-200 rounded mb-2"></div>
                                        <div className="h-20 bg-slate-200 rounded mb-2"></div>
                                        <div className="flex gap-2">
                                            <div className="h-6 w-20 bg-green-100 text-green-700 text-[10px] flex items-center justify-center font-bold rounded">BUDGET REVEALED</div>
                                            <div className="h-6 w-20 bg-purple-100 text-purple-700 text-[10px] flex items-center justify-center font-bold rounded">TIMELINE</div>
                                        </div>
                                    </div>
                                    <ul className="space-y-3 text-sm text-slate-700 font-medium">
                                        <li className="flex gap-2 items-center"><CheckCircle size={16} className="text-green-500" /> Tells the "Challenge & Solution" story</li>
                                        <li className="flex gap-2 items-center"><CheckCircle size={16} className="text-green-500" /> Pre-qualifies via Budget ranges</li>
                                        <li className="flex gap-2 items-center"><CheckCircle size={16} className="text-green-500" /> Ranks for "Modern Farmhouse [City]"</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

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
                                        <Zap size={24} />
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-slate-900 text-lg">Built for Speed</h3>
                                        <p className="text-slate-600">Your site loads instantly. No spinning wheels means customers don't bounce, and you get more leads.</p>
                                    </div>
                                </div>
                                <div className="flex gap-4">
                                    <div className="w-12 h-12 rounded-xl bg-green-50 text-green-600 flex items-center justify-center flex-shrink-0 border border-green-100">
                                        <Search size={24} />
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-slate-900 text-lg">Google-Ready Architecture</h3>
                                        <p className="text-slate-600">We structure your site so Google knows exactly where you build and what you do. No extra "SEO plugins" needed.</p>
                                    </div>
                                </div>
                                <div className="flex gap-4">
                                    <div className="w-12 h-12 rounded-xl bg-purple-50 text-purple-600 flex items-center justify-center flex-shrink-0 border border-purple-100">
                                        <Lock size={24} />
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-slate-900 text-lg">Fail-Safe Reliability</h3>
                                        <p className="text-slate-600">Your site never goes down. Period. We use enterprise-grade hosting that handles traffic spikes without breaking a sweat.</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Comparison Table */}
                        <div className="relative">
                            <div className="absolute -inset-4 bg-gradient-to-tr from-purple-100 to-blue-100 rounded-[2rem] blur-xl opacity-50"></div>
                            <div className="relative bg-white rounded-2xl border border-slate-200 shadow-xl overflow-hidden">
                                <div className="bg-slate-900 text-white p-6 text-center">
                                    <h3 className="font-bold text-xl">The "Model Home" Difference</h3>
                                </div>
                                <div className="p-8">
                                    <div className="grid grid-cols-3 gap-4 border-b border-slate-100 pb-4 mb-4 text-sm font-bold text-slate-400 uppercase tracking-wider">
                                        <div>Feature</div>
                                        <div className="text-center">Typical Agency</div>
                                        <div className="text-center text-purple-600">BuilderProject</div>
                                    </div>

                                    <div className="space-y-6">
                                        <div className="grid grid-cols-3 gap-4 items-center">
                                            <div className="font-bold text-slate-700 text-sm md:text-base">Focus</div>
                                            <div className="text-center text-slate-500 text-sm">"Pretty Design"</div>
                                            <div className="text-center font-bold text-green-600 text-sm md:text-base">Lead Generation</div>
                                        </div>
                                        <div className="grid grid-cols-3 gap-4 items-center">
                                            <div className="font-bold text-slate-700 text-sm md:text-base">SEO</div>
                                            <div className="text-center text-slate-500 text-sm">Basic Plugin</div>
                                            <div className="text-center font-bold text-green-600 text-sm md:text-base">Built-in Local Architecture</div>
                                        </div>
                                        <div className="grid grid-cols-3 gap-4 items-center">
                                            <div className="font-bold text-slate-700 text-sm md:text-base">Portfolio</div>
                                            <div className="text-center text-slate-500 text-sm">Image Grid</div>
                                            <div className="text-center font-bold text-green-600 text-sm md:text-base">Story-Driven Case Studies</div>
                                        </div>
                                        <div className="grid grid-cols-3 gap-4 items-center">
                                            <div className="font-bold text-slate-700 text-sm md:text-base">Speed</div>
                                            <div className="text-center text-slate-500 text-sm">Slow WordPress</div>
                                            <div className="text-center font-bold text-green-600 text-sm md:text-base">
                                                <span className="inline-flex items-center gap-1"><Zap size={14} fill="currentColor" /> Instant Load</span>
                                            </div>
                                        </div>
                                        <div className="grid grid-cols-3 gap-4 items-center">
                                            <div className="font-bold text-slate-700 text-sm md:text-base">Cost</div>
                                            <div className="text-center text-slate-500 text-sm">Hidden Fees</div>
                                            <div className="text-center font-bold text-green-600 text-sm md:text-base">Flat & Transparent</div>
                                        </div>
                                    </div>
                                </div>
                                <div className="bg-purple-50 p-4 text-center border-t border-purple-100">
                                    <p className="text-purple-900 font-medium text-sm">Stop building "Brochure Sites". Build a Sales Engine.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* SEO Deep Dive */}
            <section className="py-24 bg-slate-50">
                <div className="container mx-auto px-6 max-w-6xl text-center">
                    <h2 className="text-3xl font-serif font-bold text-slate-900 mb-8">Rank on Google. Dominate Your Market.</h2>
                    <p className="text-lg text-slate-600 mb-12 leading-relaxed max-w-4xl mx-auto">
                        A pretty website that no one visits is a billboard in the desert. We bake Local SEO into every line of code. From <strong>Service Area Pages</strong> that capture traffic from neighboring towns to <strong>Project Galleries</strong> that rank for "Custom Home [City Name]", we engineer your site to be found by the people ready to build.
                    </p>

                    <div className="grid md:grid-cols-3 gap-8 text-left max-w-6xl mx-auto">
                        <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group">
                            <div className="bg-green-100 w-12 h-12 rounded-full flex items-center justify-center text-green-600 mb-6 font-bold text-sm group-hover:scale-110 transition-transform">01</div>
                            <h4 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-purple-700 transition-colors">Local Dominance</h4>
                            <p className="text-slate-600 leading-relaxed">We create dedicated pages for every city and neighborhood you build in tailored to that specific market.</p>
                        </div>
                        <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group">
                            <div className="bg-green-100 w-12 h-12 rounded-full flex items-center justify-center text-green-600 mb-6 font-bold text-sm group-hover:scale-110 transition-transform">02</div>
                            <h4 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-purple-700 transition-colors">Project Showcases</h4>
                            <p className="text-slate-600 leading-relaxed">Turn your portfolio into SEO gold. Each project page ranks for specific renovation types and locations.</p>
                        </div>
                        <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group">
                            <div className="bg-green-100 w-12 h-12 rounded-full flex items-center justify-center text-green-600 mb-6 font-bold text-sm group-hover:scale-110 transition-transform">03</div>
                            <h4 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-purple-700 transition-colors">Speed Signals</h4>
                            <p className="text-slate-600 leading-relaxed">Core Web Vitals are now a ranking factor. Our sites ace them by default, giving you an unfair advantage.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Process Timeline */}
            <section className="py-24 bg-white border-y border-slate-100">
                <div className="container mx-auto px-6">
                    <div className="max-w-4xl mx-auto text-center mb-16">
                        <h2 className="text-3xl md:text-5xl font-serif font-bold text-slate-900 mb-6">
                            From "Discovery" to "Done" <br /> in 4 Weeks
                        </h2>
                        <p className="text-lg text-slate-600">
                            We don't drag projects out for months. Our streamlined system gets your new sales engine live fast.
                        </p>
                    </div>

                    <div className="max-w-6xl mx-auto">
                        <div className="grid md:grid-cols-4 gap-8">
                            {[
                                {
                                    step: "01",
                                    title: "Discovery",
                                    desc: "We interview you to extract your brand voice, best projects, and ideal client profile.",
                                    week: "Week 1"
                                },
                                {
                                    step: "02",
                                    title: "Architecture",
                                    desc: "We map out your SEO sitemap and wireframe the perfect conversion path.",
                                    week: "Week 2"
                                },
                                {
                                    step: "03",
                                    title: "Design & Build",
                                    desc: "We code your Digital Model Home, optimizing every pixel for speed and SEO.",
                                    week: "Weeks 3"
                                },
                                {
                                    step: "04",
                                    title: "Launch",
                                    desc: "Final walkthrough, feedback round, and we take your new site live to the world.",
                                    week: "Week 4"
                                }
                            ].map((item, i) => (
                                <div key={i} className="relative group">
                                    <div className="bg-slate-50 rounded-2xl p-8 h-full border border-slate-100 hover:border-purple-200 hover:shadow-lg transition-all duration-300">
                                        <div className="text-xs font-bold text-purple-600 uppercase tracking-wider mb-4">{item.week}</div>
                                        <div className="text-4xl font-serif font-bold text-slate-200 mb-4 group-hover:text-purple-100 transition-colors">{item.step}</div>
                                        <h3 className="text-xl font-bold text-slate-900 mb-2">{item.title}</h3>
                                        <p className="text-slate-600 text-sm leading-relaxed">{item.desc}</p>
                                    </div>
                                    {i < 3 && (
                                        <div className="hidden md:block absolute top-1/2 -right-4 translate-x-1/2 text-slate-300 z-10">
                                            <ArrowRight />
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Qualifier Section */}
            <section className="py-24 bg-slate-50">
                <div className="container mx-auto px-6">
                    <div className="max-w-5xl mx-auto">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl md:text-5xl font-serif font-bold text-slate-900 mb-6">
                                Is This Right For You?
                            </h2>
                            <p className="text-lg text-slate-600">
                                We are not a volume agency. We partner with serious builders who want to dominate their specific market.
                            </p>
                        </div>

                        <div className="grid md:grid-cols-2 gap-8">
                            <div className="bg-white p-10 rounded-3xl border border-green-100 shadow-sm relative overflow-hidden">
                                <div className="absolute top-0 left-0 w-full h-2 bg-green-500"></div>
                                <h3 className="text-2xl font-serif font-bold text-slate-900 mb-6 flex items-center gap-3">
                                    <CheckCircle className="text-green-500" fill="currentColor" className="text-white" />
                                    We're A Perfect Fit If...
                                </h3>
                                <ul className="space-y-4">
                                    {[
                                        "You do $2M+ in annual revenue",
                                        "You build high-end custom homes or large-scale remodels",
                                        "You value brand reputation over being the 'cheapest'",
                                        "You want a long-term partner, not a one-off vendor",
                                        "You have professional photography of your work"
                                    ].map((item, i) => (
                                        <li key={i} className="flex items-start gap-3 text-slate-700">
                                            <div className="min-w-6 mt-1"><CheckCircle size={18} className="text-green-500" /></div>
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <div className="bg-slate-100 p-10 rounded-3xl border border-slate-200 relative overflow-hidden opacity-75">
                                <h3 className="text-2xl font-serif font-bold text-slate-500 mb-6 flex items-center gap-3">
                                    <div className="w-8 h-8 rounded-full bg-slate-300 flex items-center justify-center text-white text-lg font-bold">×</div>
                                    We're NOT a Match If...
                                </h3>
                                <ul className="space-y-4">
                                    {[
                                        "You are just starting out (under $500k revenue)",
                                        "You just want a 'brochure' site to show mom",
                                        "You are looking for the cheapest option possible",
                                        "You need a site launched in 48 hours",
                                        "You don't care about ranking on Google"
                                    ].map((item, i) => (
                                        <li key={i} className="flex items-start gap-3 text-slate-500">
                                            <div className="min-w-6 mt-1 text-slate-400">×</div>
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
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
