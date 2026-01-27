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
                            <span className="flex h-2 w-2 rounded-full bg-purple-400 animate-pulse"></span>
                            <span className="text-sm font-medium text-purple-200 uppercase tracking-widest">Lead Capture & Qualification</span>
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
                        <h2 className="text-3xl md:text-4xl font-serif font-bold text-slate-900 mb-8 text-center">
                            Stop Hoping, Start Capturing
                        </h2>

                        <div className="grid md:grid-cols-2 gap-12 items-center mb-12">
                            <div className="bg-slate-50 p-8 rounded-2xl border border-slate-100">
                                <p className="text-lg text-slate-600 mb-6">
                                    Typical "Contact Us" forms convert at less than 1%. Visitors aren't ready to commit to a meeting yet, so they leave.
                                </p>
                                <div className="text-4xl font-bold text-slate-400 mb-2">0.5%</div>
                                <div className="text-sm uppercase tracking-wider text-slate-500 font-bold">Generic Contact Form</div>
                            </div>
                            <div className="bg-purple-50 p-8 rounded-2xl border border-purple-100 relative overflow-hidden">
                                <div className="absolute top-0 right-0 p-4 opacity-10">
                                    <svg width="100" height="100" viewBox="0 0 24 24" fill="currentColor" className="text-purple-600"><path d="M16 6l2.29 2.29-4.88 4.88-4-4L2 16.59 3.41 18l6-6 4 4 6.3-6.29L22 12V6z" /></svg>
                                </div>
                                <p className="text-lg text-slate-900 font-medium mb-6">
                                    Interactive value-first funnels engage researchers & convert them into leads.
                                </p>
                                <div className="text-4xl font-bold text-purple-600 mb-2">5-8%</div>
                                <div className="text-sm uppercase tracking-wider text-purple-700 font-bold">Interactive Funnel</div>
                            </div>
                        </div>

                        <p className="text-lg text-slate-600 leading-relaxed text-center mb-12">
                            Visitors spend <strong>4x longer</strong> engaging with interactive tools (like budget calculators or quizzes) than they do reading static text. By giving value first, you earn the right to ask for their contact info.
                        </p>

                        <div className="bg-slate-900 text-slate-300 p-8 md:p-10 rounded-2xl leading-relaxed border border-slate-800 shadow-xl">
                            <p className="mb-4">
                                <span className="text-white font-bold">Here's the problem with generic contact forms:</span> They don't speak to your prospect. They just sit there asking for information without giving anything in return.
                            </p>
                            <p className="mb-4">
                                A funnel, on the other hand, has a conversation. It asks questions that help prospects understand if they're a fit. It provides value like instant budget estimates or helpful guides.
                            </p>
                            <p>
                                It feels like using a tool, not just submitting a request to a stranger. That's why funnels convert 10x better.
                            </p>
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
                            If you only have one way to engage (like "Book a Call"), you're losing 95% of your traffic.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
                        {/* 1. Qualification Funnel */}
                        <div className="bg-slate-900 rounded-[2.5rem] p-8 md:p-12 text-white relative overflow-hidden group hover:-translate-y-1 transition-transform duration-300">
                            <div className="absolute top-0 right-0 p-8 opacity-10">
                                <Filter size={120} />
                            </div>

                            <div className="relative z-10">
                                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-900/50 border border-purple-500/30 mb-8">
                                    <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></div>
                                    <span className="text-xs font-bold text-purple-200 uppercase tracking-wider">For The Top 5%</span>
                                </div>

                                <h3 className="text-3xl font-serif font-bold mb-4">The Qualification Engine</h3>
                                <p className="text-slate-400 mb-8 leading-relaxed h-14">
                                    Filters out tire kickers and delivers only high-intent, budget-qualified leads to your calendar.
                                </p>

                                <div className="space-y-4 mb-10">
                                    {[
                                        "Verifies Budget ($1M+)",
                                        "Confirms Land Ownership",
                                        "Validates Timeline",
                                        "Auto-Books Appointments"
                                    ].map((item, i) => (
                                        <div key={i} className="flex gap-3 items-center text-slate-200">
                                            <div className="w-6 h-6 rounded-full bg-slate-800 flex items-center justify-center text-purple-400 shadow-inner">
                                                <CheckCircle size={14} />
                                            </div>
                                            <span className="font-medium">{item}</span>
                                        </div>
                                    ))}
                                </div>

                                <div className="bg-slate-800 rounded-xl p-6 border border-slate-700">
                                    <div className="text-xs text-slate-400 uppercase tracking-wider font-bold mb-2">Ideal For:</div>
                                    <div className="text-white font-medium">Google Ads, Re-Targeting, Referral Traffic</div>
                                </div>
                            </div>
                        </div>

                        {/* 2. Lead Magnet Funnel */}
                        <div className="bg-white rounded-[2.5rem] p-8 md:p-12 border border-slate-200 shadow-xl relative overflow-hidden group hover:-translate-y-1 transition-transform duration-300">
                            <div className="absolute top-0 right-0 p-8 opacity-5">
                                <Magnet size={120} className="text-slate-900" />
                            </div>

                            <div className="relative z-10">
                                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-100 border border-slate-200 mb-8">
                                    <div className="w-2 h-2 rounded-full bg-blue-400"></div>
                                    <span className="text-xs font-bold text-slate-600 uppercase tracking-wider">For The Other 95%</span>
                                </div>

                                <h3 className="text-3xl font-serif font-bold text-slate-900 mb-4">The Nurture Engine</h3>
                                <p className="text-slate-500 mb-8 leading-relaxed h-14">
                                    Captures research-phase prospects with value, then nurtures them automatically until they are ready to build.
                                </p>

                                <div className="space-y-4 mb-10">
                                    {[
                                        "Promotes Budget Calculators",
                                        "Offers Planning Guides",
                                        "Captures Emails Instantly",
                                        "Sends 6-Month Nurture Seq"
                                    ].map((item, i) => (
                                        <div key={i} className="flex gap-3 items-center text-slate-700">
                                            <div className="w-6 h-6 rounded-full bg-purple-50 flex items-center justify-center text-purple-600">
                                                <CheckCircle size={14} />
                                            </div>
                                            <span className="font-medium">{item}</span>
                                        </div>
                                    ))}
                                </div>

                                <div className="bg-slate-50 rounded-xl p-6 border border-slate-100">
                                    <div className="text-xs text-slate-400 uppercase tracking-wider font-bold mb-2">Ideal For:</div>
                                    <div className="text-slate-900 font-medium">Facebook/Instagram Ads, Cold Traffic</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Live Examples */}
            <section className="py-24 bg-slate-50">
                <div className="container mx-auto px-6">
                    <div className="max-w-4xl mx-auto text-center mb-20">
                        <h2 className="text-3xl md:text-5xl font-serif font-bold text-slate-900 mb-6">
                            Lead Magnet Funnel Examples
                        </h2>
                        <p className="text-lg text-slate-600">
                            Tools that capture early-stage researchers who aren't ready to talk yet.
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
                                        Prospects input size/finishes to get instant cost estimate. Captures people figuring out if they can afford to build.
                                    </p>
                                </div>
                            </div>

                            {/* Nurture 2: Planning Guide */}
                            <div className="group relative bg-white p-8 rounded-3xl shadow-sm border border-slate-100 hover:shadow-xl transition-all duration-300">
                                <div className="aspect-[16/9] rounded-xl overflow-hidden mb-8 relative bg-slate-100 flex items-center justify-center shadow-inner">
                                    <FileText size={64} className="text-slate-300" />
                                </div>
                                <div className="pl-2">
                                    <h4 className="text-2xl font-serif font-bold text-slate-900 mb-3">
                                        Custom Home Planning Guide
                                    </h4>
                                    <p className="text-slate-500 leading-relaxed">
                                        Comprehensive PDF download walking through the entire process from land to move-in.
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
                            Applications that pre-screen serious prospects and book them directly to your calendar.
                        </p>
                    </div>

                    <div className="max-w-6xl mx-auto mb-20">
                        <div className="grid md:grid-cols-2 gap-10">
                            {/* Qual 1: Custom Home App (Was Project App) */}
                            <div className="group relative bg-white p-8 rounded-3xl shadow-sm border border-slate-100 ring-1 ring-slate-200 hover:shadow-xl transition-all duration-300">
                                <div className="aspect-[16/9] rounded-xl overflow-hidden mb-8 relative bg-slate-900 flex items-center justify-center shadow-inner">
                                    <CheckCircle size={64} className="text-purple-400" />
                                </div>
                                <div className="pl-2">
                                    <h4 className="text-2xl font-serif font-bold text-slate-900 mb-3">
                                        Custom Home Application
                                    </h4>
                                    <p className="text-slate-500 leading-relaxed">
                                        Full qualification survey asking budget, land status, timeline, location. Only qualified prospects see your calendar.
                                    </p>
                                </div>
                            </div>

                            {/* Qual 2: Remodel App */}
                            <div className="group relative bg-white p-8 rounded-3xl shadow-sm border border-slate-100 ring-1 ring-slate-200 hover:shadow-xl transition-all duration-300">
                                <div className="aspect-[16/9] rounded-xl overflow-hidden mb-8 relative bg-slate-900 flex items-center justify-center shadow-inner">
                                    <PenTool size={64} className="text-blue-400" />
                                </div>
                                <div className="pl-2">
                                    <h4 className="text-2xl font-serif font-bold text-slate-900 mb-3">
                                        Remodel Application
                                    </h4>
                                    <p className="text-slate-500 leading-relaxed">
                                        Tailored for remodelers. Qualifies on project scope, budget, timeline, and property ownership.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* AI Coding Tech */}
            <section className="py-24 bg-slate-900 text-white">
                <div className="container mx-auto px-6">
                    <div className="max-w-4xl mx-auto text-center mb-16">
                        <span className="text-purple-400 font-bold tracking-wider text-sm uppercase mb-4 block">Our Advantage</span>
                        <h2 className="text-3xl md:text-5xl font-serif font-bold mb-6">
                            Built With Logic, Not Just Form Fields
                        </h2>
                        <p className="text-lg text-slate-300">
                            Stop using "dumb" contact forms. Our funnels are intelligent tools that think like your best salesperson.
                        </p>
                    </div>

                    <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
                        <div className="space-y-6 text-slate-300">
                            <p>
                                Most agencies slap a generic WordPress contact form on your site and call it a day. That form creates friction and asks too much too soon.
                            </p>
                            <p className="text-white font-bold text-xl">
                                We custom-code logic-based applications that guide the user through a qualification journey.
                            </p>
                            <p>
                                This increases conversion rates because the user feels like they are using a helpful tool, not just submitting a request.
                            </p>

                            <ul className="space-y-4 pt-4">
                                {[
                                    "Conditional Logic - Asks questions based on previous answers",
                                    "Instant Calculations - Gives budget estimates in real-time",
                                    "Automatic Qualification - Filters out leads that don't meet your criteria",
                                    "CRM Integration - Pushes data directly to your sales pipeline",
                                    "Mobile Optimized - Works perfectly on phones"
                                ].map((item, i) => (
                                    <li key={i} className="flex gap-3 text-slate-200">
                                        <CheckCircle className="text-purple-500 shrink-0" size={20} />
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
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
                    <h2 className="text-3xl font-serif font-bold text-slate-900 mb-12 text-center">Why Funnels Beat Forms</h2>

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
                                    <td className="p-6 text-slate-600">0.5% (Most leave)</td>
                                    <td className="p-6 text-slate-900 font-medium bg-purple-50/30">5-8% (High engagement)</td>
                                </tr>
                                <tr>
                                    <td className="p-6 font-bold text-slate-900">Qualification</td>
                                    <td className="p-6 text-slate-600">None. Spam + unqualified leads</td>
                                    <td className="p-6 text-slate-900 font-medium bg-purple-50/30">Advanced filtering automatically</td>
                                </tr>
                                <tr>
                                    <td className="p-6 font-bold text-slate-900">CRM Integration</td>
                                    <td className="p-6 text-slate-600">Basic email notification</td>
                                    <td className="p-6 text-slate-900 font-medium bg-purple-50/30">Direct sync to HubSpot, HighLevel, Buildertrend</td>
                                </tr>
                                <tr>
                                    <td className="p-6 font-bold text-slate-900">Follow-up</td>
                                    <td className="p-6 text-slate-600">Manual (When you get to it)</td>
                                    <td className="p-6 text-slate-900 font-medium bg-purple-50/30">Instant automated SMS & Email</td>
                                </tr>
                                <tr>
                                    <td className="p-6 font-bold text-slate-900">Mobile</td>
                                    <td className="p-6 text-slate-600">Tiny fields, hard to type</td>
                                    <td className="p-6 text-slate-900 font-medium bg-purple-50/30">Tap-friendly, app-like experience</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
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
                        <span className="text-purple-600 font-bold tracking-wider text-sm uppercase mb-4 block">Everything You Need</span>
                        <h2 className="text-4xl md:text-5xl font-serif font-bold text-slate-900 mb-6">
                            Included in Every Funnel Build
                        </h2>
                        <p className="text-xl text-slate-500 max-w-2xl mx-auto">
                            We don't just build the form. We build the entire lead generation system.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
                        {/* Card 1 */}
                        <div className="group bg-white p-10 rounded-[2rem] border border-slate-100 shadow-xl hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 relative overflow-hidden">
                            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-purple-500 to-indigo-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 bg-origin-border"></div>

                            <div className="w-16 h-16 bg-purple-50 rounded-2xl flex items-center justify-center text-purple-600 mb-8 group-hover:scale-110 transition-transform duration-500">
                                <Compass size={32} />
                            </div>

                            <h3 className="text-2xl font-serif font-bold text-slate-900 mb-6">Strategy & Offer Design</h3>
                            <ul className="space-y-4">
                                {[
                                    "Hook Discovery - What will they trade info for?",
                                    "Value Proposition Crafting",
                                    "Logic Mapping",
                                    "Offer Creation (PDF/Calculator/Quiz)"
                                ].map((item, i) => (
                                    <li key={i} className="flex gap-3 text-slate-600 text-sm font-medium items-start">
                                        <div className="w-5 h-5 rounded-full bg-purple-100 flex items-center justify-center text-purple-600 shrink-0 mt-0.5">
                                            <CheckCircle size={12} strokeWidth={3} />
                                        </div>
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Card 2 */}
                        <div className="group bg-slate-900 p-10 rounded-[2rem] shadow-2xl hover:-translate-y-2 transition-all duration-500 relative overflow-hidden text-white ring-1 ring-white/10">
                            <div className="absolute top-0 right-0 w-64 h-64 bg-purple-500/10 rounded-full blur-[60px] pointer-events-none"></div>

                            <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center text-white mb-8 border border-white/10 group-hover:scale-110 transition-transform duration-500">
                                <Layout size={32} />
                            </div>

                            <h3 className="text-2xl font-serif font-bold text-white mb-6">Custom Development</h3>
                            <ul className="space-y-4">
                                {[
                                    "Custom React-based application",
                                    "Mobile-first interface",
                                    "Lightning fast performance",
                                    "Seamless brand integration"
                                ].map((item, i) => (
                                    <li key={i} className="flex gap-3 text-slate-300 text-sm font-medium items-start">
                                        <div className="w-5 h-5 rounded-full bg-green-500 flex items-center justify-center text-white shrink-0 mt-0.5 shadow-lg shadow-green-500/20">
                                            <CheckCircle size={12} strokeWidth={3} />
                                        </div>
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Card 3 */}
                        <div className="group bg-white p-10 rounded-[2rem] border border-slate-100 shadow-xl hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 relative overflow-hidden">
                            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-cyan-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 bg-origin-border"></div>

                            <div className="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center text-blue-600 mb-8 group-hover:scale-110 transition-transform duration-500">
                                <Users size={32} />
                            </div>

                            <h3 className="text-2xl font-serif font-bold text-slate-900 mb-6">CRM Integration & Nurture</h3>
                            <ul className="space-y-4">
                                {[
                                    "Direct CRM connection",
                                    "Admin notifications",
                                    "Auto-reply templates",
                                    "Lead routing & tagging"
                                ].map((item, i) => (
                                    <li key={i} className="flex gap-3 text-slate-600 text-sm font-medium items-start">
                                        <div className="w-5 h-5 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 shrink-0 mt-0.5">
                                            <CheckCircle size={12} strokeWidth={3} />
                                        </div>
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* Process 2-3 Weeks (Dark Premium Timeline) */}
            <section className="py-24 bg-slate-900 text-white relative overflow-hidden">
                {/* Background Accents */}
                <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-slate-700 to-transparent"></div>
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-purple-900/20 rounded-full blur-[100px] pointer-events-none"></div>
                <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-900/10 rounded-full blur-[100px] pointer-events-none"></div>

                <div className="container mx-auto px-6 max-w-6xl relative z-10">
                    <div className="text-center mb-20">
                        <span className="text-purple-400 font-bold tracking-wider text-sm uppercase mb-4 block">The Sprint</span>
                        <h2 className="text-3xl md:text-5xl font-serif font-bold text-white mb-6">
                            From Idea to Leads in 3 Weeks
                        </h2>
                        <p className="text-lg text-slate-400 max-w-2xl mx-auto">
                            We move fast. You get a working funnel ready to fill your pipeline in less than a month.
                        </p>
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
                                    <p className="text-slate-400 mb-6 text-sm leading-relaxed">Map conversion flow, define qualifying questions, design the hook.</p>
                                    <div className="p-4 bg-slate-900/50 rounded-lg text-xs font-mono text-purple-300 border border-slate-800 flex items-center gap-2">
                                        <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
                                        Output: Flow Diagram
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
                                    <h3 className="text-xl font-bold text-white mb-2">Week 2: Build & Integrate</h3>
                                    <p className="text-slate-400 mb-6 text-sm leading-relaxed">Build custom application, style to brand, connect to CRM.</p>
                                    <div className="p-4 bg-slate-900/50 rounded-lg text-xs font-mono text-blue-300 border border-slate-800 flex items-center gap-2">
                                        <div className="w-2 h-2 rounded-full bg-yellow-500"></div>
                                        Output: Staging Link
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
                                    <p className="text-slate-400 mb-6 text-sm leading-relaxed">Test every scenario, verify lead routing, push live.</p>
                                    <div className="p-4 bg-slate-900/50 rounded-lg text-xs font-mono text-green-300 border border-slate-800 flex items-center gap-2">
                                        <div className="w-2 h-2 rounded-full bg-purple-500"></div>
                                        Output: Live Funnel
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
                    <h2 className="text-3xl font-serif font-bold text-slate-900 mb-12 text-center">Have Questions? We Got You</h2>
                    <div className="space-y-4">
                        {[
                            { q: "Will this replace my contact form?", a: "No, it complements it. You'll keep your standard form for general inquiries. These funnels capture and qualify serious prospects who are evaluating builders." },
                            { q: "Do I need to write the nurture emails?", a: "No. We write all automated email sequences based on discovery calls about your business. You review and approve before they go live." },
                            { q: "Does it work on mobile?", a: "Yes. Built mobile-first. Over 60% of your traffic is mobile, so this is critical." },
                            { q: "What CRM does it connect to?", a: "All major platforms: HubSpot, HighLevel, Buildertrend, CoConstruct, Salesforce, and others." },
                            { q: "Can I change the questions later?", a: "Yes. Updates billed at $100/hour. Most changes take 30-60 minutes." }
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
                    <h2 className="text-4xl font-serif font-bold mb-6">Ready to Capture Every Visitor?</h2>
                    <p className="text-xl text-slate-400 mb-10">
                        Stop watching potential clients leave your site without a trace. Let's build you a funnel system that actually works.
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
