import React, { useState } from 'react';
import SimpleHeader from '../components/SimpleHeader';
import Modal from '../components/ui/Modal';
import { CheckCircle2, ArrowRight, Star, MapPin, Search, Users, MessageSquare } from 'lucide-react';
import BrowserFrame from '../components/ui/BrowserFrame';
import VersoShowcase from '../components/website/VersoShowcase';

// Import Images
import versoLogo from '../assets/images/verso-logo.png';
import interiorKitchen from '../assets/images/interior-kitchen.png';
import exteriorFront from '../assets/images/exterior-front.png';
import interiorLiving from '../assets/images/interior-living.jpg';
import exteriorRear from '../assets/images/exterior-rear.jpg';
import exteriorSide from '../assets/images/exterior-side.png';

const Quickstart: React.FC = () => {
    const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);

    const SectionCTA = () => (
        <button
            onClick={() => setIsBookingModalOpen(true)}
            className="mt-8 bg-slate-900 text-white font-bold py-3 px-8 rounded-xl hover:bg-gradient-to-r hover:from-purple-700 hover:to-pink-600 transition-all duration-300 shadow-lg shadow-purple-500/20 flex items-center gap-2 group text-sm"
        >
            Get Started
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
        </button>
    );

    return (
        <div className="min-h-screen bg-slate-50 font-sans text-slate-900 selection:bg-purple-100 selection:text-purple-900">
            <SimpleHeader />

            <div className="pt-32 pb-20 px-6">
                <div className="max-w-7xl mx-auto">
                    {/* Hero Section */}
                    <div className="text-center mb-24 max-w-4xl mx-auto">
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-purple-100 text-purple-700 rounded-full text-sm font-bold mb-8 border border-purple-200 shadow-sm animate-fadeIn">
                            <Star size={16} fill="currentColor" />
                            <span>New Service Launch</span>
                        </div>

                        <h1 className="text-4xl md:text-5xl font-serif font-bold text-slate-900 mb-6 leading-tight">
                            Your Digital Model Home. <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-700 to-pink-600">
                                Built to Win Projects.
                            </span>
                        </h1>

                        <div className="max-w-3xl mx-auto space-y-8">

                            <p className="text-lg text-slate-600 leading-relaxed">
                                Our Full-Service Partnership is for builders and remodelers doing $1M+/yr. If you're not there yet, you don't need the complexity or monthly retainers—you need a powerful first impression.
                            </p>
                            <p className="text-lg text-slate-600 leading-relaxed">
                                The <strong>Online Presence Quickstart</strong> is a one-time investment in your critical digital assets: a high-converting website, Google visibility, and professional branding. Build credibility, attract better clients, and charge what you're worth.
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
                                            "BuilderProject CRM Setup (GHL)",
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
                                    <div className="text-4xl font-serif font-bold text-slate-900 mb-6">$4,997</div>
                                    <button
                                        onClick={() => setIsBookingModalOpen(true)}
                                        className="w-full bg-slate-900 text-white font-bold py-4 rounded-xl hover:bg-gradient-to-r hover:from-purple-700 hover:to-pink-600 transition-all duration-300 shadow-lg shadow-purple-500/20 flex items-center justify-center gap-2 group"
                                    >
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
                                <SectionCTA />
                            </div>
                            <div className="md:w-1/2">
                                <div className="transform scale-95 hover:scale-100 transition-transform duration-500">
                                    <BrowserFrame url="versobuilders.com">
                                        <VersoShowcase />
                                    </BrowserFrame>
                                </div>
                            </div>
                        </div>

                        {/* Feature 2: CRM (New) */}
                        <div className="flex flex-col md:flex-row-reverse gap-12 items-center">
                            <div className="md:w-1/2">
                                <span className="text-indigo-600 font-bold tracking-wider text-sm uppercase mb-2 block">Lead Engine</span>
                                <h3 className="text-3xl font-serif font-bold text-slate-900 mb-6">BuilderProject CRM Setup</h3>
                                <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                                    Stop using spreadsheets and sticky notes. We set you up with the full power of the BuilderProject CRM (powered by GoHighLevel). Automated lead capture, text/email follow-ups, and a clear pipeline dashboard so you never lose a potential project again.
                                </p>
                                <ul className="space-y-3">
                                    <li className="flex items-center gap-3 text-slate-700 font-medium">
                                        <div className="bg-green-100 p-1 rounded-full text-green-600"><CheckCircle2 size={16} /></div>
                                        Automated speed-to-lead follow-up
                                    </li>
                                    <li className="flex items-center gap-3 text-slate-700 font-medium">
                                        <div className="bg-green-100 p-1 rounded-full text-green-600"><CheckCircle2 size={16} /></div>
                                        Centralized Communication Hub
                                    </li>
                                </ul>
                                <SectionCTA />
                            </div>
                            <div className="md:w-1/2 bg-slate-900 rounded-3xl p-8 border border-slate-800 flex items-center justify-center">
                                {/* CRM Pipeline Mock */}
                                <div className="bg-slate-800 w-full max-w-sm rounded-xl border border-slate-700 p-4 shadow-2xl">
                                    <div className="flex items-center justify-between mb-4 border-b border-slate-700 pb-2">
                                        <span className="text-slate-200 font-bold text-sm">Opportunities</span>
                                        <div className="flex gap-2">
                                            <div className="w-16 h-2 bg-green-500 rounded-full"></div>
                                            <div className="w-8 h-2 bg-slate-600 rounded-full"></div>
                                        </div>
                                    </div>
                                    <div className="flex gap-3 overflow-hidden">
                                        {/* Column 1 */}
                                        <div className="flex-1 bg-slate-900/50 rounded-lg p-2 space-y-2">
                                            <div className="text-[10px] uppercase text-slate-500 font-bold mb-1">New Leads (3)</div>
                                            <div className="bg-white p-2 rounded shadow-sm border-l-4 border-blue-500">
                                                <div className="text-xs font-bold text-slate-900">John Smith</div>
                                                <div className="text-[10px] text-slate-500">$1.2M Custom</div>
                                            </div>
                                            <div className="bg-white p-2 rounded shadow-sm border-l-4 border-blue-500">
                                                <div className="text-xs font-bold text-slate-900">Sarah Jones</div>
                                                <div className="text-[10px] text-slate-500">Kitchen Remodel</div>
                                            </div>
                                        </div>
                                        {/* Column 2 */}
                                        <div className="flex-1 bg-slate-900/50 rounded-lg p-2 space-y-2 opacity-75">
                                            <div className="text-[10px] uppercase text-slate-500 font-bold mb-1">Contacted (1)</div>
                                            <div className="bg-white p-2 rounded shadow-sm border-l-4 border-orange-500">
                                                <div className="text-xs font-bold text-slate-900">Mike Miller</div>
                                                <div className="text-[10px] text-slate-500">Site Visit</div>
                                            </div>
                                        </div>
                                        {/* Column 3 */}
                                        <div className="flex-1 bg-slate-900/50 rounded-lg p-2 space-y-2 opacity-50">
                                            <div className="text-[10px] uppercase text-slate-500 font-bold mb-1">Proposal</div>
                                        </div>
                                    </div>
                                    <div className="mt-4 flex items-center gap-2 text-xs text-slate-400">
                                        <MessageSquare size={12} />
                                        <span>Automated SMS: "Hi John, saw you requested..."</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Feature 3: GBP (Visual Update) */}
                        <div className="flex flex-col md:flex-row gap-12 items-center">
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
                                <SectionCTA />
                            </div>
                            <div className="md:w-1/2 bg-slate-100 rounded-3xl p-8 border border-slate-200 flex items-center justify-center relative overflow-hidden group">
                                <div className="absolute inset-0 bg-[#eef0f3] z-0"></div>
                                {/* Map Mock */}
                                <div className="bg-white rounded-xl shadow-xl p-4 w-full max-w-sm relative z-10 transform group-hover:-translate-y-2 transition-transform duration-300">
                                    <div className="flex gap-4 mb-4">
                                        <div className="w-16 h-16 bg-stone-900 rounded-lg flex items-center justify-center text-white font-bold text-2xl overflow-hidden shrink-0">
                                            <img src={versoLogo} alt="Verso Builders" className="w-full h-full object-cover" />
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

                        {/* Feature 4: Social Branding (Visual Update) */}
                        <div className="flex flex-col md:flex-row-reverse gap-12 items-center">
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
                                <SectionCTA />
                            </div>
                            <div className="md:w-1/2 bg-slate-50 rounded-3xl p-8 border border-slate-100 flex items-center justify-center">
                                {/* Instagram Mock */}
                                <div className="bg-white rounded-3xl shadow-2xl border border-slate-200 p-4 w-full max-w-sm transform rotate-1 hover:rotate-0 transition-transform duration-300">
                                    <div className="flex items-center gap-3 mb-6">
                                        <div className="w-12 h-12 rounded-full bg-gradient-to-tr from-yellow-400 via-red-500 to-purple-600 p-[2px] shrink-0">
                                            <div className="w-full h-full rounded-full bg-white p-[2px] overflow-hidden">
                                                <img src={versoLogo} alt="Profile" className="w-full h-full object-cover rounded-full" />
                                            </div>
                                        </div>
                                        <div>
                                            <div className="h-3 w-24 bg-slate-900 rounded mb-1 text-[10px] font-bold leading-3">versobuilders</div>
                                            <div className="h-3 w-16 text-[8px] text-slate-500">Custom Homes</div>
                                        </div>
                                    </div>
                                    <div className="grid grid-cols-3 gap-0.5 mb-0.5">
                                        <img src={interiorKitchen} className="aspect-square object-cover" />
                                        <img src={exteriorFront} className="aspect-square object-cover" />
                                        <img src={interiorLiving} className="aspect-square object-cover" />
                                    </div>
                                    <div className="grid grid-cols-3 gap-0.5">
                                        <img src={exteriorRear} className="aspect-square object-cover" />
                                        <img src={exteriorSide} className="aspect-square object-cover grayscale opacity-50" />
                                        <div className="aspect-square bg-slate-100 flex items-center justify-center text-[8px] text-slate-400">More...</div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Feature 5: Portfolio (Visual Update) */}
                        <div className="flex flex-col md:flex-row gap-12 items-center">
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
                                <SectionCTA />
                            </div>
                            <div className="md:w-1/2 bg-slate-900 rounded-3xl p-8 border border-slate-800 flex items-center justify-center">
                                {/* Masonry Grid Mock */}
                                <div className="grid grid-cols-2 gap-4 w-full max-w-sm rotate-1 hover:rotate-0 transition-transform duration-500">
                                    <div className="space-y-4">
                                        <img
                                            src={interiorLiving}
                                            className="h-40 object-cover rounded-lg w-full shadow-lg"
                                        />
                                        <img
                                            src={exteriorFront}
                                            className="h-24 object-cover rounded-lg w-full shadow-lg"
                                        />
                                    </div>
                                    <div className="space-y-4 pt-8">
                                        <img
                                            src={interiorKitchen}
                                            className="h-24 object-cover rounded-lg w-full shadow-lg"
                                        />
                                        <img
                                            src={exteriorRear}
                                            className="h-40 object-cover rounded-lg w-full shadow-lg"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Feature 6: SEO (Visual Update) */}
                        <div className="flex flex-col md:flex-row-reverse gap-12 items-center">
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
                                <SectionCTA />
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

            {/* Final CTA Section */}
            <div className="bg-slate-900 py-24 px-6 text-center">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-3xl md:text-5xl font-serif font-bold text-white mb-6">
                        Ready to Build Your Online Presence?
                    </h2>
                    <p className="text-xl text-slate-400 mb-10 max-w-2xl mx-auto">
                        Stop losing projects to competitors who just look better online. Get the professional foundation you need to attract high-value clients.
                    </p>
                    <button
                        onClick={() => setIsBookingModalOpen(true)}
                        className="bg-white text-slate-900 font-bold py-4 px-10 rounded-xl hover:bg-slate-100 transition-all duration-300 shadow-xl shadow-white/10 text-lg flex items-center justify-center gap-3 mx-auto group"
                    >
                        Get Started - $4,997
                        <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                    </button>
                    <div className="mt-8 flex items-center justify-center gap-6 text-sm text-slate-500">
                        <span className="flex items-center gap-2"><CheckCircle2 size={14} className="text-green-500" /> One-time payment</span>
                        <span className="flex items-center gap-2"><CheckCircle2 size={14} className="text-green-500" /> No monthly fees</span>
                        <span className="flex items-center gap-2"><CheckCircle2 size={14} className="text-green-500" /> 100% Ownership</span>
                    </div>
                </div>
            </div>

            <footer className="py-8 text-center text-slate-400 text-sm bg-slate-950">
                <p>© {new Date().getFullYear()} BuildSurge Collectives LLC DBA BuilderProject</p>
            </footer>

            {/* Booking Modal */}
            <Modal isOpen={isBookingModalOpen} onClose={() => setIsBookingModalOpen(false)}>
                <iframe
                    src="https://api.leadconnectorhq.com/widget/booking/IBPe3yYeYt197wsoyG1r"
                    style={{ width: '100%', height: '800px', border: 'none' }}
                    id="booking-widget"
                    title="Booking Calendar"
                ></iframe>
            </Modal>
        </div>
    );
};

export default Quickstart;
