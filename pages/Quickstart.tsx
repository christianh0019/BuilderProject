
import React from 'react';
import SimpleHeader from '../components/SimpleHeader';
import { CheckCircle2, ArrowRight, Star, MapPin, Search } from 'lucide-react';
import BrowserFrame from '../components/ui/BrowserFrame';
import VersoShowcase from '../components/website/VersoShowcase';

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
                            Your Digital Model Home. <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-700 to-pink-600">
                                Built to Win Projects.
                            </span>
                        </h1>

                        <div className="max-w-3xl mx-auto space-y-6">
                            <p className="text-xl font-medium text-slate-800">
                                You build quality homes. It's time your online presence reflected that quality. This is the one-time investment you need to build brand credibility, attract better clients, and charge what you're worth.
                            </p>
                            <p className="text-lg text-slate-600 leading-relaxed">
                                Our Full-Service Partnership is for builders and remodelers doing over $1M/yr. in revenue. If you're not there yet, you don't need the complexity or the monthly retainers. You need a powerful first impression. The <strong>Online Presence Quickstart</strong> is a focused buildout of your critical digital assets—a high-converting website, Google visibility, and professional branding—to turn your growing reputation into reliable revenue.
                            </p>
                        </div>
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
                            <div className="md:w-1/2">
                                <div className="transform scale-95 hover:scale-100 transition-transform duration-500">
                                    <BrowserFrame url="versobuilders.com">
                                        <VersoShowcase />
                                    </BrowserFrame>
                                </div>
                            </div>
                        </div>

                        {/* Feature 2: GBP (Visual Update) */}
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
                            <div className="md:w-1/2 bg-slate-100 rounded-3xl p-8 border border-slate-200 flex items-center justify-center relative overflow-hidden group">
                                <div className="absolute inset-0 bg-[#eef0f3] z-0"></div>
                                {/* Map Mock */}
                                <div className="bg-white rounded-xl shadow-xl p-4 w-full max-w-sm relative z-10 transform group-hover:-translate-y-2 transition-transform duration-300">
                                    <div className="flex gap-4 mb-4">
                                        <div className="w-16 h-16 bg-stone-900 rounded-lg flex items-center justify-center text-white font-bold text-2xl overflow-hidden shrink-0">
                                            <img src="/verso-logo.png" alt="Verso Builders" className="w-full h-full object-cover" />
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-lg text-slate-900">Verso Custom Builders</h4>
                                            <div className="flex items-center gap-1 text-orange-400 text-sm mb-1">
                                                <Star fill="currentColor" size={14} />
                                                <Star fill="currentColor" size={14} />
                                                <Star fill="currentColor" size={14} />
                                                <Star fill="currentColor" size={14} />
                                                <Star fill="currentColor" size={14} />
                                                <span className="text-slate-500 ml-1">(48)</span>
                                            </div>
                                            <div className="text-xs text-slate-500">Custom home builder in Hingham, MA</div>
                                        </div>
                                    </div>
                                    <div className="space-y-2">
                                        <div className="flex items-center gap-3 text-sm text-slate-600">
                                            <MapPin size={16} className="text-blue-500" />
                                            <span>Serving Greater Hingham Area</span>
                                        </div>
                                        <div className="flex gap-2 mt-4">
                                            <div className="flex-1 bg-blue-600 text-white text-center py-2 rounded-lg font-bold text-sm">Website</div>
                                            <div className="flex-1 bg-slate-100 text-slate-700 text-center py-2 rounded-lg font-bold text-sm">Call</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Feature 3: Social Branding (Visual Update) */}
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
                            <div className="md:w-1/2 bg-slate-50 rounded-3xl p-8 border border-slate-100 flex items-center justify-center">
                                {/* Instagram Mock */}
                                <div className="bg-white rounded-3xl shadow-2xl border border-slate-200 p-4 w-64 transform rotate-1 hover:rotate-0 transition-transform duration-300">
                                    <div className="flex items-center gap-3 mb-6">
                                        <div className="w-12 h-12 rounded-full bg-gradient-to-tr from-yellow-400 via-red-500 to-purple-600 p-[2px] shrink-0">
                                            <div className="w-full h-full rounded-full bg-white p-[2px] overflow-hidden">
                                                <img src="/verso-logo.png" alt="Profile" className="w-full h-full object-cover rounded-full" />
                                            </div>
                                        </div>
                                        <div>
                                            <div className="h-3 w-24 bg-slate-900 rounded mb-1 text-[10px] font-bold leading-3">versobuilders</div>
                                            <div className="h-3 w-16 text-[8px] text-slate-500">Custom Homes</div>
                                        </div>
                                    </div>
                                    <div className="grid grid-cols-3 gap-0.5 mb-0.5">
                                        <img src="/project-images/interior-kitchen.png" className="aspect-square object-cover" />
                                        <img src="/project-images/exterior-front.png" className="aspect-square object-cover" />
                                        <img src="/project-images/interior-living.jpg" className="aspect-square object-cover" />
                                    </div>
                                    <div className="grid grid-cols-3 gap-0.5">
                                        <img src="/project-images/exterior-rear.jpg" className="aspect-square object-cover" />
                                        <img src="/project-images/exterior-side.png" className="aspect-square object-cover grayscale opacity-50" />
                                        <div className="aspect-square bg-slate-100 flex items-center justify-center text-[8px] text-slate-400">More...</div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Feature 4: Portfolio (Visual Update) */}
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
                            <div className="md:w-1/2 bg-slate-900 rounded-3xl p-8 border border-slate-800 flex items-center justify-center">
                                {/* Masonry Grid Mock */}
                                <div className="grid grid-cols-2 gap-4 w-full max-w-sm rotate-1 hover:rotate-0 transition-transform duration-500">
                                    <div className="space-y-4">
                                        <img
                                            src="/project-images/interior-living.jpg"
                                            className="h-40 object-cover rounded-lg w-full shadow-lg"
                                        />
                                        <img
                                            src="/project-images/exterior-front.png"
                                            className="h-24 object-cover rounded-lg w-full shadow-lg"
                                        />
                                    </div>
                                    <div className="space-y-4 pt-8">
                                        <img
                                            src="/project-images/interior-kitchen.png"
                                            className="h-24 object-cover rounded-lg w-full shadow-lg"
                                        />
                                        <img
                                            src="/project-images/exterior-rear.jpg"
                                            className="h-40 object-cover rounded-lg w-full shadow-lg"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Feature 5: SEO (Visual Update) */}
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
                            <div className="md:w-1/2 bg-white rounded-3xl p-8 border border-slate-200 shadow-sm flex flex-col justify-center">
                                {/* SEO Result Mock */}
                                <div className="bg-white w-full max-w-md mx-auto p-4 rounded-xl border border-slate-100 shadow-sm mb-4">
                                    <div className="flex items-center gap-2 mb-2">
                                        <div className="w-6 h-6 bg-slate-200 rounded-full"></div>
                                        <div className="flex flex-col">
                                            <div className="text-xs text-slate-800 font-medium">Verso Builders</div>
                                            <div className="text-[10px] text-slate-500">https://versobuilders.com</div>
                                        </div>
                                    </div>
                                    <div className="text-purple-700 text-lg hover:underline cursor-pointer mb-1 text-left">Custom Home Builders in Hingham | Luxury Design</div>
                                    <div className="text-sm text-slate-600 text-left">
                                        Award-winning custom home builders serving the Greater Hingham area. Start your dream home project today with Verso Builders.
                                    </div>
                                </div>
                                <div className="bg-white w-full max-w-md mx-auto p-4 rounded-xl border border-slate-100 shadow-sm opacity-50">
                                    <div className="h-4 w-32 bg-slate-100 rounded mb-2"></div>
                                    <div className="h-4 w-56 bg-slate-200 rounded mb-2"></div>
                                    <div className="h-12 w-full bg-slate-50 rounded"></div>
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
