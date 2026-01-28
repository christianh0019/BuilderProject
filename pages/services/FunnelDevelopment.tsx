import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, X, ChevronDown, ChevronUp, Compass, PenTool, Rocket, Users, Layout, Mail, Magnet, Filter, BarChart, FileText } from 'lucide-react';
import BrowserFrame from '../../components/ui/BrowserFrame';

const FunnelDevelopment: React.FC = () => {
    const [openFaq, setOpenFaq] = React.useState<number | null>(null);

    const toggleFaq = (index: number) => {
        setOpenFaq(openFaq === index ? null : index);
    };

    return (
        <div className="pt-20">
            {/* Hero Section */}
            <section className="relative bg-[#0F172A] text-white pt-32 pb-32 overflow-hidden">
                {/* Background Effects */}
                <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-purple-900/20 rounded-full blur-[120px] pointer-events-none mix-blend-screen animate-pulse"></div>
                <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-blue-900/10 rounded-full blur-[100px] pointer-events-none mix-blend-screen"></div>

                <div className="container mx-auto px-6 relative z-10">
                    <div className="max-w-7xl mx-auto text-center mb-20">
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-900/30 border border-purple-500/30 mb-8 backdrop-blur-sm">
                            <span className="flex h-2 w-2 rounded-full bg-green-400 animate-pulse"></span>
                            <span className="text-sm font-medium text-purple-200 uppercase tracking-widest">FUNNEL DEVELOPMENT</span>
                        </div>

                        <h1 className="text-5xl md:text-7xl font-serif font-bold mb-8 leading-tight tracking-tight">
                            Funnel Development & Lead Capture Systems
                            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 mt-2">For Custom Home Builders & Remodelers</span>
                        </h1>

                        <p className="text-xl md:text-2xl text-slate-300 mb-10 max-w-3xl mx-auto leading-relaxed font-light">
                            Stop losing 98% of your website visitors. Capture early-stage researchers and filter for high-value ready-to-build clients.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-5 justify-center items-center">
                            <Link to="/contact" className="group relative inline-flex items-center justify-center px-8 py-4 text-base font-bold text-white transition-all duration-200 bg-purple-600 font-pj rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-600 hover:bg-purple-700 shadow-[0_0_20px_rgba(168,85,247,0.4)] hover:shadow-[0_0_30px_rgba(168,85,247,0.6)]">
                                Start Your Project
                                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            </Link>
                            <Link to="/case-studies" className="inline-flex items-center justify-center px-8 py-4 text-base font-bold text-slate-300 transition-all duration-200 bg-transparent border border-slate-700 rounded-full hover:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-slate-700 hover:text-white hover:border-slate-500">
                                View Examples
                            </Link>
                        </div>
                    </div>

                    {/* Device Mockup Graphic */}
                    <div className="relative max-w-6xl mx-auto perspective-[1000px] group">
                        {/* Laptop */}
                        <div className="relative z-10 transform transition-all duration-700 hover:scale-[1.01]">
                            <div className="relative mx-auto bg-slate-900 rounded-t-[1rem] md:rounded-t-[1.5rem] p-2 shadow-[0_20px_50px_-12px_rgba(0,0,0,0.5)] border border-slate-800 ring-1 ring-white/10 w-[90%] md:w-full">
                                <div className="bg-slate-950 rounded-[0.5rem] md:rounded-[1rem] overflow-hidden aspect-[16/10] relative">
                                    <img src="/images/funnel-hero-desktop-v3.png" alt="Desktop Website Preview" className="w-full h-full object-cover object-top" />
                                    {/* Reflection/Sheen */}
                                    <div className="absolute inset-0 bg-gradient-to-tr from-white/5 to-transparent pointer-events-none"></div>
                                </div>
                            </div>
                            {/* Base */}
                            <div className="h-4 md:h-6 bg-slate-800 rounded-b-xl mx-auto w-[98%] md:w-[102%] shadow-lg mt-[-1px]"></div>
                        </div>

                        {/* Phone Overlay */}
                        <div className="absolute -bottom-6 -right-2 md:-bottom-12 md:-right-8 w-[100px] md:w-[220px] z-20 transform rotate-[-3deg] group-hover:rotate-0 transition-all duration-500 group-hover:scale-105 group-hover:translate-y-[-10px]">
                            <div className="bg-slate-900 rounded-[1.5rem] md:rounded-[2.5rem] p-1 md:p-2 shadow-[0_20px_40px_-12px_rgba(0,0,0,0.5)] border border-slate-800 ring-1 ring-white/10">
                                <div className="bg-slate-950 rounded-[1rem] md:rounded-[2rem] overflow-hidden aspect-[9/19] relative">
                                    <img src="/images/funnel-hero-mobile-v2.png" alt="Mobile Website Preview" className="w-full h-full object-cover object-top" />
                                </div>
                            </div>
                        </div>

                        {/* Abstract background glow */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-full bg-purple-500/10 blur-[120px] -z-10 rounded-full pointer-events-none"></div>
                    </div>
                </div>
            </section>

            {/* Conversion Stats Section */}
            <section className="py-24 bg-white">
                <div className="container mx-auto px-6">
                    <div className="max-w-4xl mx-auto">
                        <h2 className="text-3xl md:text-4xl font-serif font-bold text-slate-900 mb-8 text-center leading-tight">
                            Your Website Gets Hundreds of Visitors. You Get 2 Leads. <br className="hidden md:block" /> What Happened to the Other 98%?
                        </h2>

                        <p className="text-xl text-slate-600 mb-12 text-center max-w-3xl mx-auto">
                            They left. And you have no idea who they were, what they wanted, or how to follow up with them. <br /><br />
                            <strong>That's not a traffic problem. That's a capture problem.</strong>
                        </p>

                        <div className="grid md:grid-cols-2 gap-12 items-center mb-12">
                            <div className="bg-slate-50 p-8 rounded-2xl border border-slate-100 h-full">
                                <div className="flex justify-between items-start mb-6">
                                    <div className="text-4xl font-bold text-slate-400">0.5%</div>
                                    <div className="text-xs uppercase tracking-wider text-slate-500 font-bold bg-slate-200 px-3 py-1 rounded-full">Old Way</div>
                                </div>
                                <h3 className="text-xl font-bold text-slate-800 mb-4">Generic Contact Form</h3>
                                <p className="text-slate-600 leading-relaxed">
                                    Typical "Contact Us" forms convert at less than 1%. Here's why: visitors aren't ready to commit to a meeting yet. They're still researching.
                                </p>
                            </div>
                            <div className="bg-purple-50 p-8 rounded-2xl border border-purple-100 relative overflow-hidden h-full">
                                <div className="absolute top-0 right-0 p-4 opacity-10">
                                    <svg width="100" height="100" viewBox="0 0 24 24" fill="currentColor" className="text-purple-600"><path d="M16 6l2.29 2.29-4.88 4.88-4-4L2 16.59 3.41 18l6-6 4 4 6.3-6.29L22 12V6z" /></svg>
                                </div>
                                <div className="flex justify-between items-start mb-6">
                                    <div className="text-4xl font-bold text-purple-600">5-8%</div>
                                    <div className="text-xs uppercase tracking-wider text-purple-700 font-bold bg-purple-200 px-3 py-1 rounded-full">New Way</div>
                                </div>
                                <h3 className="text-xl font-bold text-slate-900 mb-4">Interactive Funnel</h3>
                                <p className="text-slate-800 font-medium leading-relaxed">
                                    Interactive value-first funnels engage researchers & convert them into leads by offering something in return.
                                </p>
                            </div>
                        </div>

                        <div className="bg-slate-900 text-slate-300 p-8 md:p-12 rounded-2xl leading-relaxed border border-slate-800 shadow-xl">
                            <h3 className="text-2xl font-serif text-white mb-6">Here's the difference:</h3>
                            <div className="space-y-6">
                                <p>
                                    A contact form just sits there asking for information without giving anything back. <span className="text-purple-400 font-bold">A funnel has a conversation.</span>
                                </p>
                                <p>
                                    It asks questions that help prospects understand if they're a fit. It provides instant value like budget estimates or helpful guides. It feels like using a tool, not submitting a request to a stranger.
                                </p>
                                <p className="border-l-4 border-purple-500 pl-6 italic text-lg text-white">
                                    "Visitors spend 4x longer engaging with interactive funnels because they're actually getting something out of it. And in return, you capture leads you would have otherwise lost forever."
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* The Two Funnels (Qualification vs Lead Magnet) */}
            <section className="py-24 bg-white relative overflow-hidden">
                <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-slate-50 rounded-full blur-3xl opacity-50 pointer-events-none"></div>

                <div className="container mx-auto px-6 max-w-6xl relative z-10">
                    <div className="text-center mb-20 max-w-4xl mx-auto">
                        <span className="text-purple-600 font-bold tracking-wider text-sm uppercase mb-4 block">The Ecosystem</span>
                        <h2 className="text-3xl md:text-5xl font-serif font-bold text-slate-900 mb-6">
                            You Need Two Types of Funnels
                        </h2>
                        <p className="text-xl text-slate-500">
                            Only 5% of people who land on your site are ready to book a call right now. If "Book a Call" is your only option, you're losing everyone else.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
                        {/* 1. Qualification Funnel */}
                        <div className="bg-slate-900 rounded-[2.5rem] p-8 md:p-12 text-white relative overflow-hidden group hover:-translate-y-1 transition-transform duration-300 flex flex-col">
                            <div className="absolute top-0 right-0 p-8 opacity-10">
                                <Filter size={120} />
                            </div>

                            <div className="relative z-10 flex-1">
                                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-900/50 border border-purple-500/30 mb-8">
                                    <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></div>
                                    <span className="text-xs font-bold text-purple-200 uppercase tracking-wider">For The Top 5%</span>
                                </div>

                                <h3 className="text-3xl font-serif font-bold mb-4">The Qualification Engine</h3>
                                <p className="text-slate-400 mb-8 leading-relaxed">
                                    Your main funnel for ready-to-build prospects. Filters out tire kickers before they waste your time.
                                </p>

                                <div className="space-y-4 mb-10">
                                    {[
                                        "Verifies Budget ($1M+)",
                                        "Confirms Land Ownership",
                                        "Validates Timeline",
                                        "Auto-Books Calendar"
                                    ].map((item, i) => (
                                        <div key={i} className="flex gap-3 items-center text-slate-200">
                                            <div className="w-6 h-6 rounded-full bg-slate-800 flex items-center justify-center text-purple-400 shadow-inner">
                                                <CheckCircle size={14} />
                                            </div>
                                            <span className="font-medium">{item}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div className="relative z-10 mt-auto">
                                <div className="bg-slate-800 rounded-xl p-6 border border-slate-700 mb-6">
                                    <div className="text-xs text-slate-400 uppercase tracking-wider font-bold mb-2">What it does:</div>
                                    <p className="text-sm text-slate-300 leading-relaxed">Someone fills out the survey. If they're qualified, they instantly see your calendar. If not, they get resources but don't waste your time.</p>
                                </div>

                                <div className="text-xs text-slate-500 uppercase tracking-wider font-bold">Best For: Google Ads, Retargeting, Referrals</div>
                            </div>
                        </div>

                        {/* 2. Lead Magnet Funnel */}
                        <div className="bg-white rounded-[2.5rem] p-8 md:p-12 border border-slate-200 shadow-xl relative overflow-hidden group hover:-translate-y-1 transition-transform duration-300 flex flex-col">
                            <div className="absolute top-0 right-0 p-8 opacity-5">
                                <Magnet size={120} className="text-slate-900" />
                            </div>

                            <div className="relative z-10 flex-1">
                                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-100 border border-slate-200 mb-8">
                                    <div className="w-2 h-2 rounded-full bg-blue-400"></div>
                                    <span className="text-xs font-bold text-slate-600 uppercase tracking-wider">For The Other 95%</span>
                                </div>

                                <h3 className="text-3xl font-serif font-bold text-slate-900 mb-4">The Nurture Engine</h3>
                                <p className="text-slate-500 mb-8 leading-relaxed">
                                    Captures researchers who aren't ready yet. Gives them value, stays in touch, moves them toward booking when they're ready.
                                </p>

                                <div className="space-y-4 mb-10">
                                    {[
                                        "Budget Calculators",
                                        "Planning Guides",
                                        "Instant Email Capture",
                                        "6-Month Auto Nurture"
                                    ].map((item, i) => (
                                        <div key={i} className="flex gap-3 items-center text-slate-700">
                                            <div className="w-6 h-6 rounded-full bg-purple-50 flex items-center justify-center text-purple-600">
                                                <CheckCircle size={14} />
                                            </div>
                                            <span className="font-medium">{item}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div className="relative z-10 mt-auto">
                                <div className="bg-slate-50 rounded-xl p-6 border border-slate-100 mb-6">
                                    <div className="text-xs text-slate-400 uppercase tracking-wider font-bold mb-2">What it does:</div>
                                    <p className="text-sm text-slate-600 leading-relaxed">They download a tool. You get their email. Over the next 6 months, they get helpful content. When ready to build, you're the only builder they know.</p>
                                </div>

                                <div className="text-xs text-slate-400 uppercase tracking-wider font-bold">Best For: Facebook/Instagram Ads, Cold Traffic</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Live Examples - Lead Magnets */}
            <section className="py-24 bg-slate-50">
                <div className="container mx-auto px-6">
                    <div className="max-w-4xl mx-auto text-center mb-20">
                        <h2 className="text-3xl md:text-5xl font-serif font-bold text-slate-900 mb-6">
                            Lead Magnet Funnel Examples
                        </h2>
                        <p className="text-lg text-slate-600">
                            These capture people who aren't ready to talk yet.
                        </p>
                    </div>

                    <div className="max-w-6xl mx-auto mb-20">
                        <div className="grid md:grid-cols-2 gap-10">
                            {/* Nurture 1: Budget Calculator */}
                            <div className="group relative bg-white p-8 rounded-3xl shadow-sm border border-slate-100 hover:shadow-xl transition-all duration-300">
                                <div className="aspect-[16/9] rounded-xl overflow-hidden mb-8 relative bg-slate-100 shadow-inner group-hover:shadow-md transition-all">
                                    <iframe
                                        width="100%"
                                        height="100%"
                                        src="https://www.youtube.com/embed/O3z4Eg-j8eg"
                                        title="Budget Calculator Demo"
                                        frameBorder="0"
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                        allowFullScreen
                                        className="absolute inset-0 w-full h-full"
                                    ></iframe>
                                </div>
                                <div className="pl-2">
                                    <h4 className="text-2xl font-serif font-bold text-slate-900 mb-3">
                                        Budget Calculator
                                    </h4>
                                    <p className="text-slate-500 leading-relaxed">
                                        They input square footage and finishes, get instant cost estimate. Perfect for "can I afford this?" stage.
                                    </p>
                                </div>
                            </div>

                            {/* Nurture 2: Planning Guide */}
                            <div className="group relative bg-white p-8 rounded-3xl shadow-sm border border-slate-100 hover:shadow-xl transition-all duration-300">
                                <div className="aspect-[16/9] rounded-xl overflow-hidden mb-8 relative bg-slate-100 shadow-inner group-hover:shadow-md transition-all">
                                    <iframe
                                        width="100%"
                                        height="100%"
                                        src="https://www.youtube.com/embed/qkvjNAa_ybQ"
                                        title="Planning Guide Preview"
                                        frameBorder="0"
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                        allowFullScreen
                                        className="absolute inset-0 w-full h-full"
                                    ></iframe>
                                </div>
                                <div className="pl-2">
                                    <h4 className="text-2xl font-serif font-bold text-slate-900 mb-3">
                                        Custom Home Planning Guide
                                    </h4>
                                    <p className="text-slate-500 leading-relaxed">
                                        Complete PDF walking through the process. For people who want to educate themselves first.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="max-w-4xl mx-auto text-center mb-16 mt-32">
                        <h2 className="text-3xl md:text-5xl font-serif font-bold text-slate-900 mb-6">
                            Qualification Funnel Examples
                        </h2>
                        <p className="text-lg text-slate-600">
                            These pre-screen serious prospects and book them to your calendar.
                        </p>
                    </div>

                    <div className="max-w-6xl mx-auto mb-20">
                        <div className="grid md:grid-cols-2 gap-10">
                            {/* Qual 1: Custom Home App (Was Project App) */}
                            <div className="group relative bg-white p-8 rounded-3xl shadow-sm border border-slate-100 ring-1 ring-slate-200 hover:shadow-xl transition-all duration-300">
                                <div className="aspect-[16/9] rounded-xl overflow-hidden mb-8 relative bg-slate-900 shadow-inner group-hover:shadow-md transition-all">
                                    <iframe
                                        width="100%"
                                        height="100%"
                                        src="https://www.youtube.com/embed/5yOT5oYsd3g"
                                        title="Custom Home App Preview"
                                        frameBorder="0"
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                        allowFullScreen
                                        className="absolute inset-0 w-full h-full"
                                    ></iframe>
                                </div>
                                <div className="pl-2">
                                    <h4 className="text-2xl font-serif font-bold text-slate-900 mb-3">
                                        Custom Home Application
                                    </h4>
                                    <p className="text-slate-500 leading-relaxed">
                                        Asks budget, land status, timeline, location. Only shows calendar to qualified prospects.
                                    </p>
                                </div>
                            </div>

                            {/* Qual 2: Remodel App */}
                            <div className="group relative bg-white p-8 rounded-3xl shadow-sm border border-slate-100 ring-1 ring-slate-200 hover:shadow-xl transition-all duration-300">
                                <div className="aspect-[16/9] rounded-xl overflow-hidden mb-8 relative bg-slate-900 shadow-inner group-hover:shadow-md transition-all">
                                    <iframe
                                        width="100%"
                                        height="100%"
                                        src="https://www.youtube.com/embed/Z3HQgI0Unf8"
                                        title="Remodel App Preview"
                                        frameBorder="0"
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                        allowFullScreen
                                        className="absolute inset-0 w-full h-full"
                                    ></iframe>
                                </div>
                                <div className="pl-2">
                                    <h4 className="text-2xl font-serif font-bold text-slate-900 mb-3">
                                        Remodel Application
                                    </h4>
                                    <p className="text-slate-500 leading-relaxed">
                                        Qualifies on project scope, budget, timeline, and property ownership. Built specifically for remodelers.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Why This Actually Works (Replacing AI Tech Section) */}
            <section className="py-24 bg-slate-900 text-white">
                <div className="container mx-auto px-6">
                    <div className="max-w-4xl mx-auto text-center mb-16">
                        <span className="text-purple-400 font-bold tracking-wider text-sm uppercase mb-4 block">The Real Impact</span>
                        <h2 className="text-3xl md:text-5xl font-serif font-bold mb-6">
                            Why This Actually Works
                        </h2>
                        <p className="text-lg text-slate-300">
                            Think about it. You're running Google ads. Someone clicks and lands on your site. They see "Contact Us" and think "I'm not ready to call" and leave.
                        </p>
                    </div>

                    <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
                        <div className="space-y-8 text-slate-300">
                            <div className="relative pl-6 border-l-2 border-purple-500/30">
                                <h4 className="text-white font-bold mb-3 text-lg">The "Aha" Moment:</h4>
                                <p className="leading-relaxed text-slate-400">
                                    They land on "See If You Qualify For A Custom Home." They're curious. They fill out the survey. Budget is $1.5M. They own land. Timeline is 6 months.
                                </p>
                                <div className="mt-4 flex items-center gap-3 text-green-400 font-bold bg-green-500/10 p-3 rounded-lg w-fit">
                                    <CheckCircle size={18} />
                                    Boom—they're qualified.
                                </div>
                                <p className="mt-4 text-slate-400">
                                    Your calendar pops up. They book Tuesday at 2pm.
                                </p>
                            </div>

                            <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700/50">
                                <p className="text-xl font-bold text-white mb-2">
                                    You just spent $47 on that click.
                                </p>
                                <div className="grid grid-cols-2 gap-4 mt-4">
                                    <div className="p-3 bg-red-500/10 rounded-lg border border-red-500/20 text-center">
                                        <div className="text-xs text-red-300 uppercase tracking-wider mb-1">Old Way</div>
                                        <div className="text-red-400 font-bold">Nothing</div>
                                    </div>
                                    <div className="p-3 bg-green-500/10 rounded-lg border border-green-500/20 text-center">
                                        <div className="text-xs text-green-300 uppercase tracking-wider mb-1">New Way</div>
                                        <div className="text-green-400 font-bold">Booked Call</div>
                                    </div>
                                </div>
                            </div>

                            <p className="text-slate-400 leading-relaxed">
                                Or someone sees your Facebook ad. They're 8 months out. With a contact form, they leave. With a budget calculator, they engage. You get their email. <span className="text-purple-400 font-medium">8 months later when they're ready, you've been nurturing them the whole time.</span>
                            </p>
                        </div>

                        <div className="relative">
                            {/* Comparison Container */}
                            <div className="grid grid-cols-2 gap-4">
                                {/* Left: Generic Form */}
                                <div className="bg-slate-800 rounded-xl p-4 border border-slate-700 opacity-50 scale-90 origin-right">
                                    <div className="h-4 w-24 bg-slate-700 rounded mb-4"></div>
                                    <div className="space-y-3">
                                        <div className="h-8 bg-slate-700/50 rounded border border-slate-700 w-full"></div>
                                        <div className="h-8 bg-slate-700/50 rounded border border-slate-700 w-full"></div>
                                        <div className="h-20 bg-slate-700/50 rounded border border-slate-700 w-full"></div>
                                        <div className="h-8 bg-slate-600 rounded w-full mt-2"></div>
                                    </div>
                                    <div className="mt-4 text-center">
                                        <span className="text-red-400 text-xs font-bold uppercase tracking-wider">Generic Form</span>
                                    </div>
                                </div>

                                {/* Right: Funnel */}
                                <div className="bg-white rounded-xl p-4 border-2 border-purple-500 shadow-[0_0_30px_rgba(168,85,247,0.2)] relative z-10 transform scale-110 -translate-x-4">
                                    <div className="flex justify-between items-center mb-6">
                                        <div className="h-2 w-16 bg-purple-200 rounded-full overflow-hidden">
                                            <div className="h-full w-2/3 bg-purple-600"></div>
                                        </div>
                                        <span className="text-xs font-bold text-purple-600">Step 2 of 3</span>
                                    </div>

                                    <div className="mb-6">
                                        <div className="text-slate-900 font-bold mb-4 text-sm">What's your project budget?</div>
                                        <div className="space-y-2">
                                            <div className="p-3 rounded-lg border border-purple-200 bg-purple-50 text-purple-700 text-sm font-medium flex justify-between items-center cursor-pointer">
                                                $1M - $2M
                                                <div className="w-4 h-4 rounded-full bg-purple-600 border border-purple-600 flex items-center justify-center">
                                                    <div className="w-1.5 h-1.5 bg-white rounded-full"></div>
                                                </div>
                                            </div>
                                            <div className="p-3 rounded-lg border border-slate-200 text-slate-500 text-sm hover:border-purple-200 transition-colors cursor-pointer">
                                                $2M - $5M
                                            </div>
                                            <div className="p-3 rounded-lg border border-slate-200 text-slate-500 text-sm hover:border-purple-200 transition-colors cursor-pointer">
                                                $5M+
                                            </div>
                                        </div>
                                    </div>

                                    <div className="text-center">
                                        <span className="text-purple-600 text-xs font-bold uppercase tracking-wider">Smart Funnel</span>
                                    </div>
                                </div>
                            </div>

                            {/* Arrow */}
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 bg-slate-900 rounded-full p-2 border border-slate-700">
                                <ArrowRight className="text-white w-4 h-4" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Comparison Table */}
            <section className="py-24 bg-slate-50">
                <div className="container mx-auto px-6 max-w-6xl">
                    <h2 className="text-3xl font-serif font-bold text-slate-900 mb-12 text-center">The Difference in One Table</h2>

                    <div className="overflow-x-auto">
                        <table className="w-full text-left bg-white rounded-2xl overflow-hidden shadow-sm border border-slate-200">
                            <thead className="bg-slate-50 border-b border-slate-200">
                                <tr>
                                    <th className="p-6 text-slate-500 font-bold uppercase text-sm tracking-wider">Criteria</th>
                                    <th className="p-6 text-slate-500 font-bold uppercase text-sm tracking-wider">Generic Contact Form</th>
                                    <th className="p-6 text-purple-600 font-bold uppercase text-sm tracking-wider bg-purple-50">BuilderProject Funnel</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-slate-100">
                                <tr>
                                    <td className="p-6 font-bold text-slate-900">Capture Rate</td>
                                    <td className="p-6 text-slate-600">0.5% (Most bail)</td>
                                    <td className="p-6 text-slate-900 font-medium bg-purple-50/30">5-8% (Actually engage)</td>
                                </tr>
                                <tr>
                                    <td className="p-6 font-bold text-slate-900">Qualification</td>
                                    <td className="p-6 text-slate-600">None. You get everyone</td>
                                    <td className="p-6 text-slate-900 font-medium bg-purple-50/30">Auto-filters tire kickers</td>
                                </tr>
                                <tr>
                                    <td className="p-6 font-bold text-slate-900">Follow-up</td>
                                    <td className="p-6 text-slate-600">Manual (whenever you remember)</td>
                                    <td className="p-6 text-slate-900 font-medium bg-purple-50/30">Instant, automated</td>
                                </tr>
                                <tr>
                                    <td className="p-6 font-bold text-slate-900">Mobile</td>
                                    <td className="p-6 text-slate-600">Tiny, frustrating</td>
                                    <td className="p-6 text-slate-900 font-medium bg-purple-50/30">Tap-friendly, smooth</td>
                                </tr>
                                <tr>
                                    <td className="p-6 font-bold text-slate-900">CRM Sync</td>
                                    <td className="p-6 text-slate-600">Basic email to you</td>
                                    <td className="p-6 text-slate-900 font-medium bg-purple-50/30">Direct pipeline integration</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <p className="text-center mt-8 text-slate-500">
                        One wastes your ad spend. The other turns it into booked calls with qualified prospects.
                    </p>
                </div>
            </section>

            {/* Inclusions */}
            <section className="py-32 bg-white relative overflow-hidden">
                {/* Background decoration */}
                <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                    <div className="absolute -top-24 -right-24 w-96 h-96 bg-purple-50 rounded-full blur-3xl opacity-50"></div>
                    <div className="absolute top-1/2 -left-24 w-72 h-72 bg-blue-50 rounded-full blur-3xl opacity-50"></div>
                </div>

                <div className="container mx-auto px-6 relative z-10">
                    <div className="text-center mb-20">
                        <span className="text-purple-600 font-bold tracking-wider text-sm uppercase mb-4 block">What You Get</span>
                        <h2 className="text-4xl md:text-5xl font-serif font-bold text-slate-900 mb-6">
                            Included in Every Funnel Build
                        </h2>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
                        {/* Card 1 */}
                        <div className="group bg-white p-10 rounded-[2rem] border border-slate-100 shadow-xl hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 relative overflow-hidden">
                            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-purple-500 to-indigo-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 bg-origin-border"></div>

                            <div className="w-16 h-16 bg-purple-50 rounded-2xl flex items-center justify-center text-purple-600 mb-8 group-hover:scale-110 transition-transform duration-500">
                                <Compass size={32} />
                            </div>

                            <h3 className="text-2xl font-serif font-bold text-slate-900 mb-6">Strategy & Offer Design</h3>
                            <p className="text-slate-600 leading-relaxed">
                                We discover what your prospects actually want and build funnels around it. Not guessing—strategy.
                            </p>
                        </div>

                        {/* Card 2 */}
                        <div className="group bg-slate-900 p-10 rounded-[2rem] shadow-2xl hover:-translate-y-2 transition-all duration-500 relative overflow-hidden text-white ring-1 ring-white/10">
                            <div className="absolute top-0 right-0 w-64 h-64 bg-purple-500/10 rounded-full blur-[60px] pointer-events-none"></div>

                            <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center text-white mb-8 border border-white/10 group-hover:scale-110 transition-transform duration-500">
                                <Layout size={32} />
                            </div>

                            <h3 className="text-2xl font-serif font-bold text-white mb-6">Custom Development</h3>
                            <p className="text-slate-300 leading-relaxed">
                                React-based apps, mobile-first, lightning-fast, branded to match your site perfectly.
                            </p>
                        </div>

                        {/* Card 3 */}
                        <div className="group bg-white p-10 rounded-[2rem] border border-slate-100 shadow-xl hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 relative overflow-hidden">
                            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-cyan-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 bg-origin-border"></div>

                            <div className="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center text-blue-600 mb-8 group-hover:scale-110 transition-transform duration-500">
                                <Users size={32} />
                            </div>

                            <h3 className="text-2xl font-serif font-bold text-slate-900 mb-6">CRM Integration & Automation</h3>
                            <p className="text-slate-600 leading-relaxed">
                                Direct connection to your CRM. Instant notifications. Auto-reply emails. Lead tagging. All automatic.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Process 2-3 Weeks */}
            <section className="py-24 bg-slate-900 text-white relative overflow-hidden">
                {/* Background Accents */}
                <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-slate-700 to-transparent"></div>
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-purple-900/20 rounded-full blur-[100px] pointer-events-none"></div>
                <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-900/10 rounded-full blur-[100px] pointer-events-none"></div>

                <div className="container mx-auto px-6 max-w-6xl relative z-10">
                    <div className="text-center mb-20">
                        <span className="text-purple-400 font-bold tracking-wider text-sm uppercase mb-4 block">The Process</span>
                        <h2 className="text-3xl md:text-5xl font-serif font-bold text-white mb-6">
                            3-Week Timeline
                        </h2>
                    </div>

                    <div className="relative">
                        {/* Connecting Line (Desktop) */}
                        <div className="hidden md:block absolute top-12 left-0 w-full h-0.5 bg-slate-800"></div>

                        <div className="grid md:grid-cols-3 gap-12">
                            {/* Step 1 */}
                            <div className="relative group">
                                <div className="hidden md:flex absolute -top-12 left-1/2 -translate-x-1/2 w-6 h-6 bg-slate-900 border-4 border-slate-800 rounded-full items-center justify-center z-10 group-hover:border-purple-500 transition-colors duration-500">
                                    <div className="w-1.5 h-1.5 bg-slate-600 rounded-full group-hover:bg-purple-400 transition-colors"></div>
                                </div>
                                <div className="bg-slate-800/50 p-8 rounded-2xl border border-slate-700 hover:border-purple-500/50 transition-all duration-500 hover:shadow-[0_0_30px_rgba(168,85,247,0.1)] h-full">
                                    <div className="w-14 h-14 bg-slate-800 rounded-xl flex items-center justify-center text-purple-400 mb-6 border border-slate-700 group-hover:scale-110 transition-transform duration-500 shadow-lg">
                                        <Compass size={28} />
                                    </div>
                                    <h3 className="text-xl font-bold text-white mb-2">Week 1: Strategy & Logic</h3>
                                    <div className="p-4 bg-slate-900/50 rounded-lg text-xs font-mono text-purple-300 border border-slate-800 flex items-center gap-2">
                                        <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
                                        You get: Flow Diagram
                                    </div>
                                </div>
                            </div>

                            {/* Step 2 */}
                            <div className="relative group">
                                <div className="hidden md:flex absolute -top-12 left-1/2 -translate-x-1/2 w-6 h-6 bg-slate-900 border-4 border-slate-800 rounded-full items-center justify-center z-10 group-hover:border-blue-500 transition-colors duration-500 delay-100">
                                    <div className="w-1.5 h-1.5 bg-slate-600 rounded-full group-hover:bg-blue-400 transition-colors"></div>
                                </div>
                                <div className="bg-slate-800/50 p-8 rounded-2xl border border-slate-700 hover:border-blue-500/50 transition-all duration-500 hover:shadow-[0_0_30px_rgba(59,130,246,0.1)] h-full">
                                    <div className="w-14 h-14 bg-slate-800 rounded-xl flex items-center justify-center text-blue-400 mb-6 border border-slate-700 group-hover:scale-110 transition-transform duration-500 shadow-lg">
                                        <PenTool size={28} />
                                    </div>
                                    <h3 className="text-xl font-bold text-white mb-2">Week 2: Build & Integration</h3>
                                    <div className="p-4 bg-slate-900/50 rounded-lg text-xs font-mono text-blue-300 border border-slate-800 flex items-center gap-2">
                                        <div className="w-2 h-2 rounded-full bg-yellow-500"></div>
                                        You get: Staging Link
                                    </div>
                                </div>
                            </div>

                            {/* Step 3 */}
                            <div className="relative group">
                                <div className="hidden md:flex absolute -top-12 left-1/2 -translate-x-1/2 w-6 h-6 bg-slate-900 border-4 border-slate-800 rounded-full items-center justify-center z-10 group-hover:border-green-500 transition-colors duration-500 delay-200">
                                    <div className="w-1.5 h-1.5 bg-slate-600 rounded-full group-hover:bg-green-400 transition-colors"></div>
                                </div>
                                <div className="bg-slate-800/50 p-8 rounded-2xl border border-slate-700 hover:border-green-500/50 transition-all duration-500 hover:shadow-[0_0_30px_rgba(34,197,94,0.1)] h-full">
                                    <div className="w-14 h-14 bg-slate-800 rounded-xl flex items-center justify-center text-green-400 mb-6 border border-slate-700 group-hover:scale-110 transition-transform duration-500 shadow-lg">
                                        <Rocket size={28} />
                                    </div>
                                    <h3 className="text-xl font-bold text-white mb-2">Week 3: Testing & Launch</h3>
                                    <div className="p-4 bg-slate-900/50 rounded-lg text-xs font-mono text-green-300 border border-slate-800 flex items-center gap-2">
                                        <div className="w-2 h-2 rounded-full bg-purple-500"></div>
                                        You get: Live Funnel
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* FAQ */}
            <section className="py-24 bg-white">
                <div className="container mx-auto px-6 max-w-3xl">
                    <h2 className="text-3xl font-serif font-bold text-slate-900 mb-12 text-center">Questions?</h2>
                    <div className="space-y-4">
                        {[
                            { q: "Will this replace my contact form?", a: "No, it complements it. Standard form stays for general inquiries. Funnels capture serious prospects." },
                            { q: "Do I need to write the nurture emails?", a: "No. We write them based on your business. You approve before they go live." },
                            { q: "Does it work on mobile?", a: "Yes. Built mobile-first. 60%+ of traffic is mobile." },
                            { q: "What CRM does it connect to?", a: "HubSpot, HighLevel, Buildertrend, CoConstruct, Salesforce, others." },
                            { q: "Can I change questions later?", a: "Yes. Updates at $100/hour, most changes take 30-60 min." }
                        ].map((faq, i) => (
                            <div key={i} className="border border-slate-200 rounded-xl overflow-hidden">
                                <button onClick={() => toggleFaq(i)} className="w-full flex items-center justify-between p-6 bg-slate-50 text-left font-bold text-slate-900 hover:bg-slate-100 transition-colors">
                                    {faq.q}
                                    {openFaq === i ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                                </button>
                                {openFaq === i && (
                                    <div className="p-6 bg-white text-slate-600 leading-relaxed border-t border-slate-100">
                                        {faq.a}
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Final CTA */}
            <section className="py-24 bg-slate-900 text-white text-center">
                <div className="container mx-auto px-6 max-w-4xl">
                    <h2 className="text-4xl font-serif font-bold mb-6">Stop Watching Leads Walk Away</h2>
                    <p className="text-xl text-slate-400 mb-10">
                        98% of your traffic is leaving without giving you a way to follow up. Let's fix that.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link to="/contact" className="inline-flex items-center bg-purple-600 hover:bg-purple-700 text-white px-8 py-4 rounded-full font-bold transition-all hover:scale-105 shadow-[0_0_20px_rgba(147,51,234,0.3)]">
                            Schedule Strategy Call <ArrowRight className="ml-2" />
                        </Link>
                        <Link to="/case-studies" className="inline-flex items-center border border-slate-600 hover:bg-slate-800 text-white px-8 py-4 rounded-full font-bold transition-all">
                            See Examples
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default FunnelDevelopment;
