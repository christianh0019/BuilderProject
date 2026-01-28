import React, { useState } from 'react';
import { ArrowRight, CheckCircle, ChevronDown, ChevronUp, Layout, MousePointerClick, Search, Smartphone, Users, Zap, Clock, TrendingUp, AlertTriangle, ShieldCheck, CheckCircle2, Star, MapPin, MessageSquare, BarChart3, Globe, LineChart } from 'lucide-react';
import BrowserFrame from '../../components/ui/BrowserFrame';
import VersoShowcase from '../../components/website/VersoShowcase';
import Modal from '../../components/ui/Modal';

// Images reused from Quickstart
const versoLogo = '/verso-logo.png';
const interiorKitchen = '/images/modern_kitchen.png';
const exteriorFront = '/images/homestead-hero.png';
const interiorLiving = '/images/stonebrook-hero.png';
const exteriorRear = '/images/open-prairie-poster.jpg';
const exteriorSide = '/images/eagle-rock-update.png';

import SEO from '../../components/SEO';

// ... imports remain the same

const FoundationProgram: React.FC = () => {
    const [openFaq, setOpenFaq] = useState<number | null>(null);
    const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);

    const toggleFaq = (index: number) => {
        setOpenFaq(openFaq === index ? null : index);
    };

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
        <div className="pt-20">
            <SEO
                title="Marketing Foundation for Custom Builders & Remodelers | BuilderProject"
                description="Build your digital presence in just 3 weeks. Our Marketing Foundation package provides custom home builders and remodelers with professional branding, a conversion-ready website, and a complete CRM setup to start generating business immediately."
                canonical="/programs/foundation"
                keywords="marketing for custom home builders, marketing for remodelers, builder branding, remodeler marketing strategy"
            />
            {/* 1. Hero Section */}
            <section className="relative bg-[#0F172A] text-white pt-32 pb-32 overflow-hidden">
                {/* Background Effects */}
                <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-purple-900/20 rounded-full blur-[120px] pointer-events-none mix-blend-screen animate-pulse"></div>
                <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-blue-900/10 rounded-full blur-[100px] pointer-events-none mix-blend-screen"></div>

                <div className="container mx-auto px-6 relative z-10">
                    <div className="max-w-7xl mx-auto text-center mb-20">
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-900/30 border border-purple-500/30 mb-8 backdrop-blur-sm">
                            <span className="flex h-2 w-2 rounded-full bg-green-400 animate-pulse"></span>
                            <span className="text-sm font-medium text-purple-200 uppercase tracking-widest">THE FOUNDATION</span>
                        </div>

                        <h1 className="text-[36px] md:text-6xl lg:text-7xl font-serif font-bold mb-8 leading-tight tracking-tight">
                            Build Your Marketing <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400">Foundation Right. Once.</span> <br />
                            Then Scale.
                        </h1>

                        <p className="text-xl md:text-2xl text-slate-300 mb-10 max-w-3xl mx-auto leading-relaxed font-light">
                            Before you spend another dollar on ads, your website, brand, and lead capture systems need to work. We set up everything you need in 3 weeks for one price.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-5 justify-center items-center">
                            <button onClick={() => setIsBookingModalOpen(true)} className="group relative inline-flex items-center justify-center px-8 py-4 text-base font-bold text-white transition-all duration-200 bg-purple-600 font-pj rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-600 hover:bg-purple-700 shadow-[0_0_20px_rgba(168,85,247,0.4)] hover:shadow-[0_0_30px_rgba(168,85,247,0.6)]">
                                Get Started
                                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            </button>
                        </div>
                    </div>

                    {/* Visual: Before/After */}
                    <div className="relative max-w-6xl mx-auto grid md:grid-cols-2 gap-8 items-center">
                        <div className="bg-slate-800 p-6 rounded-2xl border border-red-500/30 relative opacity-75 grayscale hover:grayscale-0 transition-all duration-500">
                            <div className="absolute top-4 right-4 bg-red-500 text-white text-xs font-bold px-3 py-1 rounded-full z-20">BEFORE</div>
                            <div className="bg-slate-900 rounded-lg p-4 mb-4 border border-slate-700">
                                <div className="h-4 w-3/4 bg-slate-700 rounded mb-2"></div>
                                <div className="h-3 w-1/2 bg-slate-800 rounded mb-6"></div>
                                <div className="h-32 bg-slate-800 rounded flex items-center justify-center text-slate-600 text-sm">
                                    [Generic Stock Photo]
                                </div>
                            </div>
                            <div className="flex gap-2 text-xs text-red-300">
                                <AlertTriangle size={14} /> Only "Contact Us" form
                            </div>
                            <div className="flex gap-2 text-xs text-red-300 mt-1">
                                <AlertTriangle size={14} /> Invisible on Google Maps
                            </div>
                        </div>

                        {/* NEW HERO GRAPHIC (Code Generated) */}
                        <div className="bg-slate-800 p-6 rounded-2xl border border-emerald-500/50 relative shadow-2xl transform md:-translate-y-4 ring-1 ring-emerald-500/20">
                            <div className="absolute top-4 right-4 bg-emerald-500 text-white text-xs font-bold px-3 py-1 rounded-full z-20">AFTER</div>
                            <div className="bg-slate-900 rounded-xl p-6 border border-slate-700 relative overflow-hidden">
                                {/* Dashboard Header */}
                                <div className="flex items-center justify-between mb-6 pb-4 border-b border-slate-800">
                                    <div className="flex items-center gap-3">
                                        <div className="w-8 h-8 rounded bg-purple-600 flex items-center justify-center text-white font-bold">BP</div>
                                        <span className="text-white font-bold">System Status</span>
                                    </div>
                                    <div className="flex items-center gap-2 text-emerald-400 text-xs font-bold bg-emerald-900/30 px-2 py-1 rounded">
                                        <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></div> Active
                                    </div>
                                </div>
                                {/* Main Stats */}
                                <div className="grid grid-cols-2 gap-4 mb-6">
                                    <div className="bg-slate-800 p-4 rounded-lg border border-slate-700">
                                        <div className="text-slate-400 text-xs mb-1">Conversion Rate</div>
                                        <div className="text-2xl font-bold text-white">2.5%</div>
                                        <div className="text-emerald-400 text-xs mt-1 flex items-center gap-1"><TrendingUp size={10} /> +400%</div>
                                    </div>
                                    <div className="bg-slate-800 p-4 rounded-lg border border-slate-700">
                                        <div className="text-slate-400 text-xs mb-1">Lead Flow</div>
                                        <div className="text-2xl font-bold text-white">Steady</div>
                                        <div className="text-emerald-400 text-xs mt-1 flex items-center gap-1"><CheckCircle size={10} /> Qualified</div>
                                    </div>
                                </div>
                                {/* System Modules */}
                                <div className="space-y-3">
                                    <div className="flex items-center justify-between bg-slate-800/50 p-3 rounded-lg border border-slate-700/50">
                                        <div className="flex items-center gap-3">
                                            <Globe size={16} className="text-purple-400" />
                                            <span className="text-slate-300 text-sm">Website</span>
                                        </div>
                                        <CheckCircle size={16} className="text-emerald-500" />
                                    </div>
                                    <div className="flex items-center justify-between bg-slate-800/50 p-3 rounded-lg border border-slate-700/50">
                                        <div className="flex items-center gap-3">
                                            <Search size={16} className="text-purple-400" />
                                            <span className="text-slate-300 text-sm">SEO & Google</span>
                                        </div>
                                        <CheckCircle size={16} className="text-emerald-500" />
                                    </div>
                                    <div className="flex items-center justify-between bg-slate-800/50 p-3 rounded-lg border border-slate-700/50">
                                        <div className="flex items-center gap-3">
                                            <Users size={16} className="text-purple-400" />
                                            <span className="text-slate-300 text-sm">CRM & Automation</span>
                                        </div>
                                        <CheckCircle size={16} className="text-emerald-500" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 2. Two Paths */}
            <section className="py-24 bg-white">
                <div className="container mx-auto px-6 max-w-6xl">
                    <div className="grid md:grid-cols-2 gap-12 relative">
                        {/* Divider */}
                        <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-slate-200 -ml-px"></div>
                        <div className="hidden md:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 bg-white border border-slate-200 rounded-full items-center justify-center text-slate-400 font-bold z-10">OR</div>

                        {/* Path 1 */}
                        <div className="md:pr-12 text-center md:text-right">
                            <div className="inline-block p-3 bg-purple-50 text-purple-600 rounded-2xl mb-6">
                                <TrendingUp size={32} />
                            </div>
                            <h3 className="text-2xl font-bold text-slate-900 mb-4">Starting a New Company</h3>
                            <p className="text-slate-600 leading-relaxed mb-6">
                                You're launching your building business and you want to do it right from the beginning. No amateur website. No winging it. You want to look established from day one so you attract the right clients and command premium pricing.
                            </p>
                        </div>

                        {/* Path 2 */}
                        <div className="md:pl-12 text-center md:text-left">
                            <div className="inline-block p-3 bg-purple-50 text-purple-600 rounded-2xl mb-6">
                                <Clock size={32} />
                            </div>
                            <h3 className="text-2xl font-bold text-slate-900 mb-4">Stuck on Referrals</h3>
                            <p className="text-slate-600 leading-relaxed mb-6">
                                You've been building for years. Your work is excellent. But 90% of your business comes from referrals. Your website generates zero leads. Your Google presence is weak. You know you're leaving money on the table.
                            </p>
                        </div>
                    </div>

                    <div className="mt-16 text-center max-w-3xl mx-auto bg-slate-50 p-8 rounded-2xl border border-slate-100">
                        <h4 className="font-bold text-lg text-slate-800 mb-2">Both paths lead here:</h4>
                        <p className="text-slate-600">
                            You need a complete digital foundation that makes you look professional, captures leads, and works 24/7 to grow your business.
                        </p>
                    </div>
                </div>
            </section>


            {/* 3. Leaky Bucket */}
            <section className="py-24 bg-slate-50">
                <div className="container mx-auto px-6 max-w-4xl text-center">
                    <h2 className="text-3xl md:text-5xl font-serif font-bold text-slate-900 mb-6">
                        Running Ads Without A Foundation Is Like <br />
                        <span className="text-red-600">Pouring Water Into a Leaky Bucket</span>
                    </h2>

                    <div className="grid md:grid-cols-2 gap-8 mt-12 mb-12">
                        <div className="bg-white p-8 rounded-2xl border border-red-200 shadow-sm">
                            <h3 className="font-bold text-slate-900 mb-4 text-lg">Scenario A: The Amateur Site</h3>
                            <p className="text-slate-500 mb-4 text-sm">Ad Spend: $5,000 → Traffic: 500 Visitors</p>
                            <div className="flex items-center justify-between bg-red-50 p-4 rounded-lg mb-2">
                                <span className="font-bold text-red-700">Conversion Rate</span>
                                <span className="font-bold text-red-700">0.5%</span>
                            </div>
                            <div className="font-bold text-2xl text-slate-900">2-3 Leads</div>
                        </div>

                        <div className="bg-white p-8 rounded-2xl border border-emerald-200 shadow-lg relative transform md:-translate-y-4">
                            <div className="absolute top-0 right-0 bg-emerald-500 text-white text-xs font-bold px-3 py-1 rounded-bl-lg rounded-tr-lg">WITH FOUNDATION</div>
                            <h3 className="font-bold text-slate-900 mb-4 text-lg">Scenario B: The Foundation</h3>
                            <p className="text-slate-500 mb-4 text-sm">Ad Spend: $5,000 → Traffic: 500 Visitors</p>
                            <div className="flex items-center justify-between bg-emerald-50 p-4 rounded-lg mb-2">
                                <span className="font-bold text-emerald-700">Conversion Rate</span>
                                <span className="font-bold text-emerald-700">2.5%</span>
                            </div>
                            <div className="font-bold text-2xl text-slate-900">12-15 Leads</div>
                        </div>
                    </div>

                    <p className="text-xl font-medium text-slate-800">
                        "You can't scale what's broken. Fix the foundation first. Then marketing actually works."
                    </p>
                </div>
            </section>

            {/* 4. What's Included (Visual Sections) */}
            <section className="py-24 bg-white">
                <div className="container mx-auto px-6 max-w-6xl">
                    <div className="text-center mb-24">
                        <h2 className="text-3xl md:text-5xl font-serif font-bold text-slate-900 mb-6">What You Actually Get</h2>
                        <p className="text-xl text-slate-500">We don't just "build a website". We install a revenue system.</p>
                    </div>

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

                        {/* Feature 2: CRM */}
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
                                        <div className="flex-1 bg-slate-900/50 rounded-lg p-2 space-y-2 opacity-75">
                                            <div className="text-[10px] uppercase text-slate-500 font-bold mb-1">Contacted (1)</div>
                                            <div className="bg-white p-2 rounded shadow-sm border-l-4 border-orange-500">
                                                <div className="text-xs font-bold text-slate-900">Mike Miller</div>
                                                <div className="text-[10px] text-slate-500">Site Visit</div>
                                            </div>
                                        </div>
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

                        {/* Feature 3: GBP */}
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

                        {/* Feature 4: Social Branding */}
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

                        {/* Feature 5: Portfolio */}
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

                        {/* Feature 6: SEO */}
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
            </section>

            {/* 5. Long Term Savings */}
            <section className="py-24 bg-slate-900 text-white">
                <div className="container mx-auto px-6 max-w-4xl text-center">
                    <h2 className="text-3xl md:text-5xl font-serif font-bold mb-8">This Pays For Itself. <br /> Then Makes You Money.</h2>

                    <div className="bg-slate-800 rounded-3xl p-8 md:p-12 mb-10 border border-slate-700">
                        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
                            <div className="text-left md:w-1/2">
                                <h3 className="text-xl font-bold mb-4 text-red-300">The "Scattered" Way</h3>
                                <ul className="space-y-2 text-slate-400 text-sm">
                                    <li className="flex justify-between border-b border-slate-700 pb-2"><span>Website (doesn't convert)</span> <span>$3,000</span></li>
                                    <li className="flex justify-between border-b border-slate-700 pb-2"><span>Social Mgmt (1 yr)</span> <span>$12,000</span></li>
                                    <li className="flex justify-between border-b border-slate-700 pb-2"><span>Reputation Tool (1 yr)</span> <span>$6,000</span></li>
                                    <li className="flex justify-between border-b border-slate-700 pb-2"><span>SEO Setup</span> <span>$2,000</span></li>
                                    <li className="flex justify-between pt-2 font-bold text-white text-lg"><span>Total Year 1:</span> <span>$23,000+</span></li>
                                </ul>
                            </div>
                            <div className="hidden md:block h-32 w-px bg-slate-600"></div>
                            <div className="text-left md:w-1/2">
                                <h3 className="text-xl font-bold mb-4 text-emerald-400">The Foundation</h3>
                                <div className="text-5xl font-bold text-white mb-2">$4,997</div>
                                <div className="text-slate-400 mb-4">One-time investment.</div>
                                <p className="text-sm text-slate-300">
                                    A complete system that actually works together. One additional project from better conversion pays for this 5-10x over.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 6. What Happens After */}
            <section className="py-24 bg-white">
                <div className="container mx-auto px-6 max-w-4xl text-center">
                    <h2 className="text-3xl font-serif font-bold text-slate-900 mb-6">First Foundation. Then Scale.</h2>
                    <p className="text-lg text-slate-600 mb-12">The Foundation gets you operational and generating leads. What comes next?</p>

                    <div className="grid md:grid-cols-2 gap-6 text-left">
                        <div className="p-6 border border-slate-200 rounded-xl hover:border-blue-300 transition-colors">
                            <div className="font-bold text-slate-900 mb-2">Want to scale aggressively?</div>
                            <div className="text-blue-600 font-bold mb-2">→ Add The Pipeline</div>
                            <p className="text-slate-500 text-sm">Active lead generation with ads and content management.</p>
                        </div>
                        <div className="p-6 border border-slate-200 rounded-xl hover:border-purple-300 transition-colors">
                            <div className="font-bold text-slate-900 mb-2">Want complete dominance?</div>
                            <div className="text-purple-600 font-bold mb-2">→ Upgrade to Partner Program</div>
                            <p className="text-slate-500 text-sm">Full-service marketing department and fractional CMO.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* 7. Timeline */}
            <section className="py-24 bg-slate-50">
                <div className="container mx-auto px-6 max-w-4xl">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-5xl font-serif font-bold text-slate-900 mb-6">3 Weeks to Launch</h2>
                        <p className="text-xl text-slate-500">From broken (or nonexistent) to professional in less than a month.</p>
                    </div>

                    <div className="space-y-6 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-slate-300 before:to-transparent">
                        {[
                            { week: "Week 1", title: "Discovery & Strategy", desc: "We map out your brand, gather your assets, and begin the custom build." },
                            { week: "Week 2", title: "Build & Integration", desc: "CRM setup, funnel development, copywriting, and branding finalization." },
                            { week: "Week 3", title: "Optimization & Launch", desc: "Google optimization, technical SEO, training call, and live launch." }
                        ].map((item, i) => (
                            <div key={i} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                                <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white bg-slate-50 group-[.is-active]:bg-purple-600 group-[.is-active]:text-white shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 text-slate-500 font-bold z-10">
                                    {i + 1}
                                </div>
                                <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-white p-6 rounded-xl border border-slate-100 shadow-sm">
                                    <div className="font-bold text-purple-600 text-sm mb-1 uppercase tracking-wider">{item.week}</div>
                                    <div className="font-bold text-slate-900 text-lg mb-2">{item.title}</div>
                                    <p className="text-slate-500 text-sm">{item.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 9. Investment & FAQ */}
            <section className="py-24 bg-white">
                <div className="container mx-auto px-6 max-w-3xl">
                    <div className="text-center mb-16">
                        <div className="text-5xl font-bold text-slate-900 mb-4">$4,997</div>
                        <div className="text-xl text-slate-500">One-Time Investment. Lifetime Stats.</div>
                    </div>

                    <h2 className="text-3xl font-serif font-bold text-slate-900 mb-12 text-center">Common Questions</h2>
                    <div className="space-y-4">
                        {[
                            { q: "What if I'm brand new and don't have projects?", a: "We can use AI to generate photorealistic images from your plans or renderings, or showcase the types of projects you want to attract. You don't need 50 completed projects to launch professionally." },
                            { q: "How is this different from a web designer?", a: "A web designer builds a website. We build a complete foundation—website, CRM, funnels, branding, Google presence, and SEO. It's the difference between one piece versus a complete system." },
                            { q: "Can I add marketing services later?", a: "Yes. Foundation is designed to be standalone or the base for Pipeline or Partner programs. Start here, and scale when you are ready." },
                            { q: "What if my business is too small?", a: "If you close just one additional $500K project because your website finally generates leads, that's a 100x ROI. You're not paying for a website. You're paying for a lead-generation system." }
                        ].map((faq, i) => (
                            <div key={i} className="bg-white border border-slate-200 rounded-xl overflow-hidden">
                                <button onClick={() => toggleFaq(i)} className="w-full flex items-center justify-between p-6 text-left font-bold text-slate-900 hover:bg-slate-50 transition-colors">
                                    {faq.q}
                                    {openFaq === i ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                                </button>
                                {openFaq === i && (
                                    <div className="p-6 pt-0 text-slate-600 leading-relaxed">
                                        {faq.a}
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 11. Final CTA */}
            <section className="py-24 bg-slate-900 text-white text-center">
                <div className="container mx-auto px-6 max-w-4xl">
                    <h2 className="text-4xl font-serif font-bold mb-6">Stop Losing Leads to Amateur Digital Presence</h2>
                    <p className="text-xl text-slate-400 mb-10">
                        Whether you're starting fresh or fixing what's broken, your foundation determines everything that comes after.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <button onClick={() => setIsBookingModalOpen(true)} className="inline-flex items-center bg-purple-600 hover:bg-purple-700 text-white px-8 py-4 rounded-full font-bold transition-all hover:scale-105 shadow-[0_0_20px_rgba(168,85,247,0.3)]">
                            Get Started <ArrowRight className="ml-2" />
                        </button>
                    </div>
                </div>
            </section>

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

export default FoundationProgram;
