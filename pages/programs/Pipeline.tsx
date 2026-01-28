import React, { useState } from 'react';
import { ArrowRight, CheckCircle2, ChevronDown, ChevronUp, Clock, TrendingUp, AlertTriangle, Filter, Target, CalendarCheck, BarChart3, Smartphone, DollarSign, XCircle, PlayCircle, Lock, ShieldCheck, CheckCircle, MessageSquare, User, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';
import { caseStudies } from '../../data/caseStudies';
import SEO from '../../components/SEO';

const PipelineProgram: React.FC = () => {
    const [openFaq, setOpenFaq] = useState<number | null>(null);

    const toggleFaq = (index: number) => {
        setOpenFaq(openFaq === index ? null : index);
    };

    // Filter case studies relevant to Pipeline (mostly all of them rely on the pipeline engine)
    const pipelineStudies = caseStudies.filter(study => ['eagle-rock', 'schwanz', 'homestead'].includes(study.id));

    const HeroGraphic = () => (
        <div className="relative mx-auto w-full max-w-[320px]">
            {/* Phone Frame */}
            <div className="relative rounded-[3rem] border-[8px] border-slate-900 bg-slate-900 overflow-hidden shadow-2xl z-10Ring">
                {/* Status Bar */}
                <div className="bg-slate-900 text-white px-6 py-4 flex justify-between items-center text-xs font-medium rounded-t-[2.5rem]">
                    <span>9:41</span>
                    <div className="flex gap-1.5">
                        <div className="w-4 h-2.5 bg-white rounded-[2px]" />
                        <div className="w-3 h-2.5 bg-white rounded-[2px]" />
                    </div>
                </div>

                {/* App Content */}
                <div className="bg-slate-50 h-[600px] overflow-hidden flex flex-col relative rounded-b-[2.5rem]">
                    {/* Header */}
                    <div className="bg-white p-4 border-b border-slate-100 shadow-sm z-10">
                        <div className="flex justify-between items-center mb-1">
                            <span className="text-slate-500 text-xs font-bold uppercase">Pipeline</span>
                            <span className="text-emerald-600 text-xs font-bold flex items-center gap-1"><div className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-pulse" /> Live</span>
                        </div>
                        <h3 className="font-bold text-slate-900 text-lg">Opportunities</h3>
                    </div>

                    {/* Notification Overlay (Animated) */}
                    <div className="absolute top-16 left-2 right-2 z-20 animate-[slideIn_0.5s_ease-out_1s_forwards] opacity-0 translate-y-[-20px]" style={{ animationFillMode: 'forwards', animationDelay: '1s', animationName: 'slideDownFade' }}>
                        <div className="bg-slate-900/90 backdrop-blur-md text-white p-3 rounded-xl shadow-xl flex items-center gap-3 border border-slate-700">
                            <div className="w-8 h-8 rounded-full bg-green-500 flex items-center justify-center shrink-0">
                                <DollarSign size={16} className="text-white" />
                            </div>
                            <div>
                                <div className="text-xs font-bold">New Qualified Lead</div>
                                <div className="text-[10px] text-slate-300">Budget: $1.2M • Ready: Now</div>
                            </div>
                        </div>
                    </div>

                    {/* CRM List */}
                    <div className="p-3 space-y-2.5 overflow-y-auto flex-1">
                        {/* Lead Card 1 */}
                        <div className="bg-white p-3 rounded-xl border border-slate-200 shadow-sm relative">
                            <div className="flex justify-between items-start mb-2">
                                <div className="flex items-center gap-2">
                                    <div className="w-8 h-8 rounded-full bg-purple-100 text-purple-600 flex items-center justify-center font-bold text-xs">JD</div>
                                    <div>
                                        <div className="font-bold text-slate-900 text-sm">James D.</div>
                                        <div className="text-[10px] text-slate-500">Custom Home Build</div>
                                    </div>
                                </div>
                                <span className="text-[10px] font-bold bg-green-100 text-green-700 px-2 py-0.5 rounded-full">Qualified</span>
                            </div>
                            <div className="grid grid-cols-2 gap-2 text-[10px] text-slate-500 bg-slate-50 p-2 rounded-lg">
                                <div><span className="font-medium text-slate-700">Budget:</span> $850k-$1M</div>
                                <div><span className="font-medium text-slate-700">Land:</span> Yes</div>
                            </div>
                        </div>

                        {/* Lead Card 2 */}
                        <div className="bg-white p-3 rounded-xl border border-slate-200 shadow-sm">
                            <div className="flex justify-between items-start mb-2">
                                <div className="flex items-center gap-2">
                                    <div className="w-8 h-8 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center font-bold text-xs">SR</div>
                                    <div>
                                        <div className="font-bold text-slate-900 text-sm">Sarah R.</div>
                                        <div className="text-[10px] text-slate-500">Whole Home Reno</div>
                                    </div>
                                </div>
                                <span className="text-[10px] font-bold bg-yellow-100 text-yellow-700 px-2 py-0.5 rounded-full">New</span>
                            </div>
                            <div className="grid grid-cols-2 gap-2 text-[10px] text-slate-500 bg-slate-50 p-2 rounded-lg">
                                <div><span className="font-medium text-slate-700">Budget:</span> $350k+</div>
                                <div><span className="font-medium text-slate-700">Timeline:</span> ASAP</div>
                            </div>
                        </div>

                        {/* Lead Card 3 */}
                        <div className="bg-white p-3 rounded-xl border border-slate-200 shadow-sm opacity-60">
                            <div className="flex justify-between items-start mb-2">
                                <div className="flex items-center gap-2">
                                    <div className="w-8 h-8 rounded-full bg-slate-100 text-slate-600 flex items-center justify-center font-bold text-xs">MK</div>
                                    <div>
                                        <div className="font-bold text-slate-900 text-sm">Mike K.</div>
                                        <div className="text-[10px] text-slate-500">Addition</div>
                                    </div>
                                </div>
                                <span className="text-[10px] font-bold bg-slate-100 text-slate-500 px-2 py-0.5 rounded-full">Contacted</span>
                            </div>
                        </div>
                        {/* Lead Card 4 */}
                        <div className="bg-white p-3 rounded-xl border border-slate-200 shadow-sm opacity-40">
                            <div className="flex justify-between items-start mb-2">
                                <div className="flex items-center gap-2">
                                    <div className="w-8 h-8 rounded-full bg-slate-100 text-slate-600 flex items-center justify-center font-bold text-xs">TB</div>
                                    <div>
                                        <div className="font-bold text-slate-900 text-sm">Tom B.</div>
                                        <div className="text-[10px] text-slate-500">New Build</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Bottom Selectors */}
                    <div className="bg-white border-t border-slate-200 p-3 flex justify-around text-slate-400">
                        <Smartphone size={20} className="text-purple-600" />
                        <MessageSquare size={20} />
                        <CalendarCheck size={20} />
                        <User size={20} />
                    </div>
                </div>
            </div>

            {/* Background Blob behind phone */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[140%] h-[120%] bg-purple-600/20 blur-[80px] rounded-full -z-10 pointer-events-none"></div>
        </div>
    );

    return (
        <div className="pt-20 font-sans text-slate-900 selection:bg-purple-200 selection:text-purple-900">
            <SEO
                title="Lead Generation for Custom Builders & Remodelers | BuilderProject"
                description="Stop chasing unqualified leads. Our Automated Lead Pipeline attracts exclusive, high-net-worth homeowners specifically for custom home builders and remodelers. We help you fill your calendar with ready-to-buy clients and eliminate tire-kickers."
                canonical="/programs/pipeline"
                keywords="lead generation for custom home builders, leads for remodelers, construction lead gen, get clients for home builders"
            />
            {/* 1. Hero Section (Centered Match) */}
            <section className="relative bg-[#0F172A] text-white pt-32 pb-32 overflow-hidden">
                {/* Background Effects */}
                <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-purple-900/20 rounded-full blur-[120px] pointer-events-none mix-blend-screen animate-pulse"></div>
                <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-blue-900/10 rounded-full blur-[100px] pointer-events-none mix-blend-screen"></div>

                <div className="container mx-auto px-6 relative z-10">
                    <div className="max-w-7xl mx-auto text-center mb-16">
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-900/30 border border-purple-500/30 mb-8 backdrop-blur-sm">
                            <span className="flex h-2 w-2 rounded-full bg-green-400 animate-pulse"></span>
                            <span className="text-sm font-medium text-purple-200 uppercase tracking-widest">THE PIPELINE</span>
                        </div>

                        <h1 className="text-[36px] md:text-6xl lg:text-7xl font-serif font-bold mb-8 leading-tight tracking-tight">
                            Fill Your Pipeline While You're <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400">On The Job Site</span>
                        </h1>

                        <p className="text-xl md:text-2xl text-slate-300 mb-10 max-w-3xl mx-auto leading-relaxed font-light">
                            We run your ads. You take the calls. 60 days to your first booked consultation. Predictable growth without the agency fluff.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-5 justify-center items-center">
                            <Link to="/partner-application" className="group relative inline-flex items-center justify-center px-8 py-4 text-base font-bold text-white transition-all duration-200 bg-purple-600 font-pj rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-600 hover:bg-purple-700 shadow-[0_0_20px_rgba(168,85,247,0.4)] hover:shadow-[0_0_30px_rgba(168,85,247,0.6)]">
                                Start Generating Leads
                                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            </Link>
                        </div>
                    </div>

                    {/* Hero Visual: The System */}
                    <div className="relative mt-20">
                        <HeroGraphic />
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-2xl h-[400px] bg-purple-500/10 blur-[100px] rounded-full -z-10"></div>
                    </div>
                </div>
            </section>

            {/* 2. The Problem (Comparison Cards) */}
            <section className="py-24 bg-white">
                <div className="container mx-auto px-6 max-w-6xl text-center">
                    <h2 className="text-3xl md:text-5xl font-serif font-bold text-slate-900 mb-6">Your Pipeline is a Gamble.</h2>
                    <p className="text-xl text-slate-600 mb-16 max-w-3xl mx-auto">The "Feast or Famine" cycle is killing your ability to plan. You need a lever you can pull.</p>

                    <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-center text-left">
                        {/* Chaos Side */}
                        <div className="bg-slate-50 p-8 rounded-2xl border border-red-200 relative overflow-hidden group hover:border-red-300 transition-all">
                            <div className="absolute top-0 right-0 p-4 opacity-10">
                                <XCircle size={80} className="text-red-500" />
                            </div>
                            <h3 className="text-xl font-bold text-slate-900 mb-6 flex items-center gap-3">
                                <span className="bg-red-100 text-red-600 p-2 rounded-lg"><XCircle size={20} /></span>
                                Referral Roulette
                            </h3>
                            <div className="space-y-4">
                                <div className="flex items-center justify-between bg-white p-3 rounded-lg border border-slate-200">
                                    <span className="text-slate-500 text-sm">Next Project</span>
                                    <span className="text-red-500 text-xs font-bold">"Maybe next month?"</span>
                                </div>
                                <div className="flex items-center justify-between bg-white p-3 rounded-lg border border-slate-200">
                                    <span className="text-slate-500 text-sm">Lead Quality</span>
                                    <span className="text-red-500 text-xs font-bold">"Friends of friends (cheap)"</span>
                                </div>
                                <div className="flex items-center justify-between bg-white p-3 rounded-lg border border-slate-200">
                                    <span className="text-slate-500 text-sm">Control</span>
                                    <span className="text-red-500 text-xs font-bold">Zero</span>
                                </div>
                            </div>
                        </div>

                        {/* Truth Side */}
                        <div className="bg-slate-900 p-8 rounded-2xl border border-purple-500/50 relative overflow-hidden shadow-2xl transform md:-translate-y-4 ring-1 ring-purple-500/20">
                            <div className="absolute top-0 right-0 p-4 opacity-10">
                                <Target size={80} className="text-purple-500" />
                            </div>
                            <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-3">
                                <span className="bg-purple-500/20 text-purple-500 p-2 rounded-lg"><CheckCircle size={20} /></span>
                                The Predictable Pipeline
                            </h3>
                            <div className="space-y-4">
                                <div className="bg-purple-900/10 p-4 rounded-xl border border-purple-500/20">
                                    <div className="flex items-center gap-3 mb-2">
                                        <div className="w-8 h-8 rounded-full bg-purple-500 flex items-center justify-center text-slate-900 font-bold text-xs">AI</div>
                                        <span className="font-bold text-purple-400">System Notification</span>
                                    </div>
                                    <p className="text-slate-300 text-sm pl-11">"New lead verified: $1.5M Budget, Has Land, Ready to Start. Added to your calendar for Tuesday at 2pm."</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 3. The Solution Benefits */}
            <section className="py-24 bg-slate-900 text-white">
                <div className="container mx-auto px-6 max-w-6xl">
                    <div className="text-center mb-16">
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-900/30 border border-purple-500/30 mb-6 backdrop-blur-sm">
                            <span className="text-sm font-medium text-purple-200 uppercase tracking-widest">The Pipeline Shift</span>
                        </div>
                        <h2 className="text-3xl md:text-5xl font-serif font-bold mb-6">
                            What if Qualified Leads Just... <br /> <span className="text-purple-400">Showed Up?</span>
                        </h2>
                        <p className="text-xl text-slate-400 max-w-3xl mx-auto">
                            The Pipeline program does one thing: keeps qualified prospects flowing into your calendar every single week. No managing ads. No chasing tire kickers.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-4 gap-6">
                        {[
                            { icon: CalendarCheck, title: "No More Famine", desc: "Consistent lead flow you can count on." },
                            { icon: TrendingUp, title: "Predictable Growth", desc: "Forecast revenue with confidence." },
                            { icon: ShieldCheck, title: "Referral Proof", desc: "Pipeline stays full even when referrals slow." },
                            { icon: Target, title: "You Control It", desc: "Scale up or down on your terms." }
                        ].map((item, i) => (
                            <div key={i} className="bg-slate-800 p-8 rounded-2xl border border-slate-700 text-center hover:bg-slate-750 transition-colors group">
                                <div className="w-12 h-12 bg-purple-900/50 rounded-xl flex items-center justify-center text-purple-400 mx-auto mb-6 border border-purple-500/20 group-hover:scale-110 transition-transform">
                                    <item.icon size={24} />
                                </div>
                                <h3 className="font-bold text-lg mb-2 text-white">{item.title}</h3>
                                <p className="text-slate-400 text-sm">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 4. How It Works - Cards */}
            <section className="py-24 bg-white">
                <div className="container mx-auto px-6 max-w-6xl">
                    <div className="text-center mb-20">
                        <h2 className="text-3xl md:text-5xl font-serif font-bold text-slate-900 mb-6">How It Works</h2>
                        <p className="text-xl text-slate-500">Simple. Predictable. Done for you.</p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            { number: "01", title: "We Target", desc: "Facebook & Google ads reach homeowners in your area with the income and intent to build." },
                            { number: "02", title: "We Filter", desc: "Our system asks the awkward questions (Budget? Land?) so you don't have to." },
                            { number: "03", title: "You Build", desc: "Qualified leads book directly to your calendar. You show up and close." }
                        ].map((step, i) => (
                            <div key={i} className="bg-slate-50 p-8 rounded-3xl border border-slate-100 relative overflow-hidden group hover:shadow-lg transition-all">
                                <div className="text-8xl font-bold text-slate-200/50 absolute -top-4 -right-4 transition-transform group-hover:scale-110">{step.number}</div>
                                <div className="relative z-10">
                                    <div className="w-10 h-10 bg-purple-600 rounded-full flex items-center justify-center text-white font-bold mb-6 shadow-lg shadow-purple-500/30">
                                        {i + 1}
                                    </div>
                                    <h3 className="text-2xl font-bold text-slate-900 mb-4">{step.title}</h3>
                                    <p className="text-slate-600 leading-relaxed">{step.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 5. What's Included (Feature Grid) */}
            <section className="py-24 bg-slate-50">
                <div className="container mx-auto px-6 max-w-6xl">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-5xl font-serif font-bold text-slate-900 mb-6">Everything You Need To Grow</h2>
                        <p className="text-xl text-slate-500">A complete lead generation department. Managed for you.</p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {/* Ads Management */}
                        <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-all">
                            <div className="text-sm font-bold text-purple-600 uppercase tracking-widest mb-4">Traffic Engine</div>
                            <h3 className="text-2xl font-bold text-slate-900 mb-4">Ads Managed Daily</h3>
                            <p className="text-slate-600 mb-6 text-sm">We build, test, and optimize your campaigns on Google and Facebook. You never have to log into an ad manager again.</p>
                            <ul className="space-y-3">
                                <li className="flex gap-2 text-slate-600 text-sm"><CheckCircle size={16} className="text-green-500 mt-0.5" /> Google Search (High Intent)</li>
                                <li className="flex gap-2 text-slate-600 text-sm"><CheckCircle size={16} className="text-green-500 mt-0.5" /> Facebook/Instagram (Visual)</li>
                                <li className="flex gap-2 text-slate-600 text-sm"><CheckCircle size={16} className="text-green-500 mt-0.5" /> Retargeting Campaigns</li>
                            </ul>
                        </div>

                        {/* System (Central) */}
                        <div className="bg-white p-8 rounded-2xl border border-purple-200 shadow-lg relative transform md:-translate-y-4 z-10">
                            <div className="absolute top-0 right-0 bg-purple-600 text-white text-xs font-bold px-3 py-1 rounded-bl-lg rounded-tr-lg">Core Feature</div>
                            <div className="text-sm font-bold text-purple-600 uppercase tracking-widest mb-4">Lead Filtering</div>
                            <h3 className="text-2xl font-bold text-slate-900 mb-4">The "Gatekeeper"</h3>
                            <p className="text-slate-600 mb-6 text-sm">Our system acts as your filter. We ask the awkward questions (Budget, Land, Timeline) before they ever reach your calendar.</p>
                            <ul className="space-y-3">
                                <li className="flex gap-2 text-slate-600 text-sm"><CheckCircle size={16} className="text-green-500 mt-0.5" /> Budget Qualification</li>
                                <li className="flex gap-2 text-slate-600 text-sm"><CheckCircle size={16} className="text-green-500 mt-0.5" /> Location Verification</li>
                                <li className="flex gap-2 text-slate-600 text-sm"><CheckCircle size={16} className="text-green-500 mt-0.5" /> Timeline Confirmation</li>
                            </ul>
                        </div>

                        {/* Reporting */}
                        <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-all">
                            <div className="text-sm font-bold text-purple-600 uppercase tracking-widest mb-4">Visibility</div>
                            <h3 className="text-2xl font-bold text-slate-900 mb-4">Weekly Reporting</h3>
                            <p className="text-slate-600 mb-6 text-sm">Know exactly what's happening. No marketing jargon, just clear numbers on leads, cost, and booked appointments.</p>
                            <ul className="space-y-3">
                                <li className="flex gap-2 text-slate-600 text-sm"><CheckCircle size={16} className="text-green-500 mt-0.5" /> ROI Dashboard</li>
                                <li className="flex gap-2 text-slate-600 text-sm"><CheckCircle size={16} className="text-green-500 mt-0.5" /> Dedicated Account Manager</li>
                                <li className="flex gap-2 text-slate-600 text-sm"><CheckCircle size={16} className="text-green-500 mt-0.5" /> CRM Integration</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* 6. Real Results (Case Study Popups Match) */}
            <section className="py-24 bg-white">
                <div className="container mx-auto px-6 max-w-7xl">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-5xl font-serif font-bold text-slate-900 mb-6">Real Results From Real Builders</h2>
                        <p className="text-xl text-slate-500">Builders just like you are scaling with this system.</p>
                    </div>
                    <div className="grid lg:grid-cols-3 gap-8">
                        {pipelineStudies.map((study, i) => (
                            <div key={i} className="bg-white rounded-2xl border border-slate-200 overflow-hidden hover:shadow-xl transition-shadow flex flex-col h-full group">
                                <div className="h-48 overflow-hidden relative">
                                    <img src={study.imageUrl} alt={study.title} title={study.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                                    <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-slate-900">
                                        {study.builderName}
                                    </div>
                                </div>
                                <div className="p-8 flex flex-col flex-grow">
                                    <h3 className="text-xl font-bold text-slate-900 mb-4">{study.title}</h3>
                                    <div className="grid grid-cols-2 gap-4 mb-6">
                                        {study.results.slice(0, 2).map((res, j) => (
                                            <div key={j}>
                                                <div className="text-xs text-slate-500 uppercase tracking-wider">{res.label}</div>
                                                <div className="font-bold text-slate-900">{res.value}</div>
                                            </div>
                                        ))}
                                    </div>
                                    <div className="mt-auto">
                                        <Link to={`/case-studies/${study.slug}`} className="text-purple-600 font-bold text-sm hover:underline flex items-center gap-1">Read Full Story <ArrowRight size={14} /></Link>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 7. The Math (Premium Card) */}
            <section className="py-24 bg-slate-50">
                <div className="container mx-auto px-6 max-w-4xl">
                    <div className="relative bg-gradient-to-br from-slate-900 to-slate-800 rounded-3xl p-8 md:p-12 border border-slate-700 shadow-2xl overflow-hidden">
                        {/* Glow effect */}
                        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-purple-600/20 rounded-full blur-[100px] pointer-events-none"></div>

                        <div className="text-center mb-10 relative z-10">
                            <h2 className="text-3xl md:text-5xl font-serif font-bold text-white mb-4">One Project Pays For 12+ Months</h2>
                            <p className="text-xl text-slate-400">The ROI math is simple. It's an investment, not an expense.</p>
                        </div>

                        <div className="grid md:grid-cols-3 gap-8 items-center text-center relative z-10">
                            <div>
                                <div className="text-sm text-slate-400 uppercase tracking-wide font-bold mb-2">Your Cost (Year)</div>
                                <div className="text-4xl font-bold text-slate-500 line-through decoration-red-500 decoration-2 opacity-60">$24k</div>
                                <div className="text-xs text-slate-500 mt-1">($2k/mo program)</div>
                            </div>
                            <div className="hidden md:block text-slate-600">
                                <ArrowRight size={32} />
                            </div>
                            <div>
                                <div className="text-sm text-purple-400 uppercase tracking-wide font-bold mb-2">1 Project Profit</div>
                                <div className="text-5xl font-bold text-emerald-400">$200k+</div>
                                <div className="text-xs text-emerald-500/80 mt-1">(Custom Home Avg)</div>
                            </div>
                        </div>

                        <div className="mt-10 text-center border-t border-slate-700 pt-8 relative z-10">
                            <p className="text-lg font-medium text-slate-300">
                                Most builders close 2-3 projects from pipeline in year 1.<br />
                                <span className="text-purple-400 font-bold">Can you afford NOT to have a predictable lead source?</span>
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* 8. Timeline (Roadmap Style) */}
            <section className="py-24 bg-white">
                <div className="container mx-auto px-6 max-w-5xl">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-5xl font-serif font-bold text-slate-900 mb-6">When Will You See Results?</h2>
                        <p className="text-xl text-slate-500">This isn't a get-rich-quick scheme. It's building a predictable system.</p>
                    </div>

                    <div className="space-y-8">
                        {[
                            { month: "Weeks 1-2", title: "Launch & Leads", desc: "Ads go live. You start getting notifications. 10-20 qualified leads/mo begin flowing in." },
                            { month: "Months 1-3", title: "Pipeline Building", desc: "You're taking consultations and sending estimates. Your CRM pipeline is visually filling up with opportunities." },
                            { month: "Months 6-12", title: "Closing & ROI", desc: "Deals mature and close. Revenue hits the bank. The system pays for its entire year cost 5-10x over." }
                        ].map((phase, i) => (
                            <div key={i} className="flex flex-col md:flex-row gap-6 p-6 rounded-2xl bg-white border border-slate-200 hover:border-purple-200 hover:shadow-lg transition-all">
                                <div className="md:w-32 shrink-0">
                                    <span className="inline-block px-4 py-2 bg-slate-900 text-white text-sm font-bold rounded-lg w-full text-center">{phase.month}</span>
                                </div>
                                <div className="flex-1">
                                    <h3 className="text-xl font-bold text-slate-900 mb-2">{phase.title}</h3>
                                    <p className="text-slate-600">{phase.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 9. Investment */}
            <section className="py-24 bg-slate-50">
                <div className="container mx-auto px-6 max-w-3xl text-center">
                    <span className="text-purple-600 font-bold uppercase tracking-widest text-sm mb-4 block">Simple Pricing</span>
                    <h2 className="text-5xl font-serif font-bold text-slate-900 mb-4">$1,997<span className="text-2xl text-slate-500 font-sans font-normal">/month</span></h2>
                    <p className="text-xl text-slate-500 mb-12">+ Ad Budget (Rec. $3k-$5k/mo)</p>

                    <div className="bg-white p-8 rounded-3xl border border-slate-200 text-left space-y-4 max-w-lg mx-auto mb-10 shadow-sm">
                        <div className="flex gap-3"><CheckCircle2 className="text-green-500 shrink-0" /> Professional Ad Management</div>
                        <div className="flex gap-3"><CheckCircle2 className="text-green-500 shrink-0" /> Lead Filtering & Qualification</div>
                        <div className="flex gap-3"><CheckCircle2 className="text-green-500 shrink-0" /> Pipeline CRM Software Included</div>
                        <div className="flex gap-3"><CheckCircle2 className="text-green-500 shrink-0" /> Weekly Performance Reporting</div>
                        <div className="flex gap-3"><CheckCircle2 className="text-green-500 shrink-0" /> Dedicated Account Manager</div>
                    </div>
                    <Link to="/partner-application" className="w-full block max-w-md mx-auto bg-purple-600 text-white font-bold py-4 rounded-full text-lg shadow-xl shadow-purple-500/30 hover:bg-purple-700 transition-colors">Start Generating Leads</Link>
                    <p className="text-xs text-slate-400 mt-4">Minimum 6-month commitment for proper testing/optimization.</p>
                </div>
            </section>

            {/* 10. FAQ */}
            <section className="py-24 bg-white">
                <div className="container mx-auto px-6 max-w-3xl">
                    <h2 className="text-3xl font-serif font-bold text-slate-900 mb-12 text-center">Common Questions</h2>
                    <div className="space-y-4">
                        {[
                            { q: "Do I need The Foundation first?", a: "Unless you already have a high-converting website and brand, usually yes. We'll audit your current setup honestly. If it won't convert traffic, we won't run ads to it." },
                            { q: "How many leads will I get?", a: "It depends entirely on your market and budget. Typically 10-30 qualified leads per month with a healthy ad spend ($3k-$5k). Quality > Quantity." },
                            { q: "What if the leads are bad quality?", a: "That's why we have the filtering system. We qualify on budget, timeline, and land ownership before they reach you. If lead quality drops, we adjust targeting immediately." },
                            { q: "What's the minimum commitment?", a: "6 months. That is the minimum time required to properly test targeting, build the pipeline, and see deals begin to mature. You can cancel after 6 months if it's not working." }
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
            <section className="py-24 bg-white text-center">
                <div className="container mx-auto px-6 max-w-4xl">
                    <h2 className="text-4xl font-serif font-bold text-slate-900 mb-6">Ready For Predictable Leads?</h2>
                    <p className="text-xl text-slate-500 mb-10">
                        While your competitors wait for referrals, you could be managing a waitlist.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link to="/partner-application" className="inline-flex items-center bg-purple-600 hover:bg-purple-700 text-white px-8 py-4 rounded-full font-bold transition-all hover:scale-105 shadow-[0_0_20px_rgba(168,85,247,0.3)]">
                            Start Generating Leads <ArrowRight className="ml-2" />
                        </Link>
                    </div>
                </div>
            </section>

        </div>
    );
};

export default PipelineProgram;
