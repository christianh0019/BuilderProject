import React, { useState } from 'react';
import { ArrowRight, CheckCircle2, ChevronDown, ChevronUp, Clock, TrendingUp, AlertTriangle, Filter, Target, CalendarCheck, BarChart3, Smartphone, DollarSign, XCircle, PlayCircle, Lock, ShieldCheck, CheckCircle, MessageSquare, User } from 'lucide-react';
import Modal from '../../components/ui/Modal';
import { Link } from 'react-router-dom';

const PipelineProgram: React.FC = () => {
    const [openFaq, setOpenFaq] = useState<number | null>(null);
    const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);

    const toggleFaq = (index: number) => {
        setOpenFaq(openFaq === index ? null : index);
    };

    const HeroGraphic = () => (
        <div className="relative mx-auto w-full max-w-[300px] md:max-w-[340px]">
            {/* Phone Frame */}
            <div className="relative rounded-[2.5rem] border-[8px] border-slate-900 bg-slate-900 overflow-hidden shadow-2xl z-10">
                {/* Status Bar */}
                <div className="bg-slate-900 text-white px-6 py-3 flex justify-between items-center text-xs font-medium">
                    <span>9:41</span>
                    <div className="flex gap-1.5">
                        <div className="w-4 h-2.5 bg-white rounded-[2px]" />
                        <div className="w-3 h-2.5 bg-white rounded-[2px]" />
                    </div>
                </div>

                {/* App Content */}
                <div className="bg-slate-50 h-[550px] overflow-hidden flex flex-col relative">
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

            {/* Background Blob */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[110%] bg-purple-500/20 blur-3xl rounded-full -z-10 pointer-events-none"></div>
        </div>
    );

    return (
        <div className="pt-20 font-sans text-slate-900 selection:bg-purple-200 selection:text-purple-900">
            {/* 1. Hero Section */}
            <section className="relative bg-[#0F172A] text-white pt-24 pb-32 overflow-hidden">
                <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-purple-900/20 rounded-full blur-[120px] pointer-events-none mix-blend-screen animate-pulse"></div>
                <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-blue-900/10 rounded-full blur-[100px] pointer-events-none mix-blend-screen"></div>

                <div className="container mx-auto px-6 relative z-10">
                    <div className="flex flex-col md:flex-row items-center gap-16">
                        <div className="md:w-1/2 text-left">
                            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-900/30 border border-purple-500/30 mb-8 backdrop-blur-sm">
                                <span className="flex h-2 w-2 rounded-full bg-green-400 animate-pulse"></span>
                                <span className="text-sm font-medium text-purple-200 uppercase tracking-widest">Active Lead Generation</span>
                            </div>

                            <h1 className="text-4xl md:text-6xl font-serif font-bold mb-6 leading-tight">
                                Fill Your Pipeline While You're <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">On The Job Site.</span>
                            </h1>

                            <p className="text-xl text-slate-300 mb-8 leading-relaxed font-light">
                                We run your ads. You take the calls. 60 days to your first booked consultation. That's it.
                            </p>

                            <ul className="space-y-4 mb-10 text-slate-300">
                                <li className="flex items-center gap-3">
                                    <CheckCircle2 className="text-green-400 shrink-0" size={20} />
                                    Google & Facebook ads managed daily
                                </li>
                                <li className="flex items-center gap-3">
                                    <CheckCircle2 className="text-green-400 shrink-0" size={20} />
                                    Qualified leads delivered weekly
                                </li>
                                <li className="flex items-center gap-3">
                                    <CheckCircle2 className="text-green-400 shrink-0" size={20} />
                                    You never touch the ads
                                </li>
                                <li className="flex items-center gap-3 text-white font-bold">
                                    <div className="bg-purple-600 rounded-full p-1"><DollarSign size={14} /></div>
                                    $1,997/month + your ad budget
                                </li>
                            </ul>

                            <button onClick={() => setIsBookingModalOpen(true)} className="inline-flex items-center bg-purple-600 hover:bg-purple-700 text-white px-8 py-4 rounded-full font-bold transition-all hover:scale-105 shadow-[0_0_20px_rgba(168,85,247,0.4)]">
                                Start Generating Leads <ArrowRight className="ml-2" />
                            </button>
                        </div>

                        <div className="md:w-1/2 flex justify-center">
                            <HeroGraphic />
                        </div>
                    </div>
                </div>
            </section>

            {/* 2. The Problem */}
            <section className="py-24 bg-white">
                <div className="container mx-auto px-6 max-w-4xl text-center">
                    <h2 className="text-3xl md:text-5xl font-serif font-bold text-slate-900 mb-6">Your Pipeline is a Gamble.</h2>
                    <p className="text-xl text-slate-600 mb-12">The "Feast or Famine" cycle is killing your ability to plan.</p>

                    <div className="grid md:grid-cols-2 gap-8 text-left">
                        <div className="bg-slate-50 p-8 rounded-2xl border border-red-100">
                            <div className="flex items-center gap-3 mb-4 text-red-600 font-bold uppercase tracking-wider text-sm">
                                <XCircle size={18} /> The Reality
                            </div>
                            <h3 className="font-serif font-bold text-2xl text-slate-900 mb-4">Referral Roulette</h3>
                            <p className="text-slate-600 mb-6 leading-relaxed">
                                One quarter you're booked solid. The next? Silence. You have zero control over when the next project comes in. You can't forecast revenue. You can't plan hiring. You're just hoping the phone rings.
                            </p>
                        </div>

                        <div className="bg-slate-900 p-8 rounded-2xl text-white">
                            <div className="flex items-center gap-3 mb-4 text-purple-400 font-bold uppercase tracking-wider text-sm">
                                <AlertTriangle size={18} /> The Truth
                            </div>
                            <h3 className="font-serif font-bold text-2xl text-white mb-4">The Competitor</h3>
                            <p className="text-slate-300 mb-6 leading-relaxed">
                                Qualified homeowners ($1M+ budgets) are Googling builders right now. They're scrolling Instagram. They aren't finding you—they're finding your competitor who runs ads. They have a system. You have hope.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* 3. The Solution */}
            <section className="py-24 bg-purple-50">
                <div className="container mx-auto px-6 max-w-5xl">
                    <div className="text-center mb-16">
                        <span className="text-purple-600 font-bold uppercase tracking-widest text-sm mb-2 block">The Pipeline Shift</span>
                        <h2 className="text-3xl md:text-5xl font-serif font-bold text-slate-900 mb-6">What if Qualified Leads Just... Showed Up?</h2>
                        <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                            The Pipeline program does one thing: keeps qualified prospects flowing into your calendar every single week. You just take the calls and close the deals.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-4 gap-6 text-center">
                        {[
                            { icon: CalendarCheck, title: "No More Famine", desc: "Consistent lead flow you can count on." },
                            { icon: TrendingUp, title: "Predictable Growth", desc: "Forecast revenue with confidence." },
                            { icon: ShieldCheck, title: "Referral Proof", desc: "Pipeline stays full even when referrals slow." },
                            { icon: Target, title: "You Control It", desc: "Scale up or down on your terms." }
                        ].map((item, i) => (
                            <div key={i} className="bg-white p-6 rounded-xl shadow-sm border border-purple-100">
                                <div className="w-12 h-12 mx-auto bg-purple-100 rounded-full flex items-center justify-center text-purple-600 mb-4">
                                    <item.icon size={24} />
                                </div>
                                <h3 className="font-bold text-slate-900 mb-2">{item.title}</h3>
                                <p className="text-sm text-slate-500">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 4. How It Works */}
            <section className="py-24 bg-white">
                <div className="container mx-auto px-6 max-w-6xl">
                    <div className="text-center mb-20">
                        <h2 className="text-3xl md:text-5xl font-serif font-bold text-slate-900 mb-6">How It Works</h2>
                        <p className="text-xl text-slate-500">Simple. Predictable. Done for you.</p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-12">
                        <div className="relative">
                            <div className="text-9xl font-bold text-slate-100 absolute -top-10 -left-6 -z-10">1</div>
                            <h3 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-3">
                                <div className="w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center text-sm font-bold">1</div>
                                We Target Ideal Clients
                            </h3>
                            <p className="text-slate-600 leading-relaxed">
                                Facebook & Google ads reach homeowners in your area with the income and intent to build. We capture people searching "custom builder near me" and those browsing design inspiration.
                            </p>
                        </div>
                        <div className="relative">
                            <div className="text-9xl font-bold text-slate-100 absolute -top-10 -left-6 -z-10">2</div>
                            <h3 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-3">
                                <div className="w-8 h-8 rounded-full bg-purple-600 text-white flex items-center justify-center text-sm font-bold">2</div>
                                We Filter The "Junk"
                            </h3>
                            <p className="text-slate-600 leading-relaxed">
                                Not every lead is worth your time. Our system automatically asks qualifying questions: Budget? Timeline? Land ownership? We filter out the tire kickers so you don't have to.
                            </p>
                        </div>
                        <div className="relative">
                            <div className="text-9xl font-bold text-slate-100 absolute -top-10 -left-6 -z-10">3</div>
                            <h3 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-3">
                                <div className="w-8 h-8 rounded-full bg-green-600 text-white flex items-center justify-center text-sm font-bold">3</div>
                                Qualified Leads Book
                            </h3>
                            <p className="text-slate-600 leading-relaxed">
                                When someone is qualified, they book directly to your calendar. No back-and-forth. No chasing. You just show up to the consultation with a qualified prospect.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* 5. What's Included (Card Layout like Partner) */}
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
                        <div className="bg-white p-8 rounded-2xl border border-purple-200 shadow-lg relative transform md:-translate-y-4">
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

            {/* 6. The Math */}
            <section className="py-24 bg-white">
                <div className="container mx-auto px-6 max-w-4xl">
                    <div className="bg-gradient-to-br from-slate-50 to-purple-50 rounded-3xl p-8 md:p-12 border border-purple-100 shadow-lg">
                        <div className="text-center mb-10">
                            <h2 className="text-3xl md:text-5xl font-serif font-bold text-slate-900 mb-4">One Project Pays For 12+ Months</h2>
                            <p className="text-xl text-slate-600">The ROI math is simple.</p>
                        </div>

                        <div className="grid md:grid-cols-3 gap-8 items-center text-center">
                            <div>
                                <div className="text-sm text-slate-500 uppercase tracking-wide font-bold mb-2">Your Cost (Year)</div>
                                <div className="text-4xl font-bold text-slate-400 line-through decoration-red-500 decoration-2 opacity-60">$60k</div>
                                <div className="text-xs text-slate-400 mt-1">($5k/mo avg spend)</div>
                            </div>
                            <div className="hidden md:block text-slate-300">
                                <ArrowRight size={32} />
                            </div>
                            <div>
                                <div className="text-sm text-slate-500 uppercase tracking-wide font-bold mb-2">1 Project Profit</div>
                                <div className="text-5xl font-bold text-green-600">$200k+</div>
                                <div className="text-xs text-slate-400 mt-1">(Custom Home Avg)</div>
                            </div>
                        </div>

                        <div className="mt-10 text-center border-t border-purple-200 pt-8">
                            <p className="text-lg font-medium text-slate-800">
                                Most builders close 2-3 projects from pipeline in year 1.<br />
                                <span className="text-purple-600 font-bold">The real question is: Can you afford NOT to have a predictable lead source?</span>
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* 7. Why Beats DIY */}
            <section className="py-24 bg-slate-50">
                <div className="container mx-auto px-6 max-w-5xl">
                    <div className="grid md:grid-cols-2 gap-12">
                        <div>
                            <h3 className="text-2xl font-serif font-bold text-slate-900 mb-6">Why Pipeline Beats DIY</h3>
                            <p className="text-slate-600 mb-4">
                                You could spend 20 hours learning Facebook Ads Manager, waste $5k testing wrong audiences, get frustrated, and give up.
                            </p>
                            <p className="text-slate-600 mb-8 font-bold">
                                Or you can let us do it.
                            </p>
                            <div className="space-y-4">
                                <div className="flex items-center gap-3 text-slate-800 bg-white p-4 rounded-lg shadow-sm">
                                    <Clock className="text-purple-600" />
                                    <span>We save you <span className="font-bold">10+ hours/week</span></span>
                                </div>
                                <div className="flex items-center gap-3 text-slate-800 bg-white p-4 rounded-lg shadow-sm">
                                    <BarChart3 className="text-purple-600" />
                                    <span>We've spent <span className="font-bold">$2M+ testing</span> what works for builders</span>
                                </div>
                            </div>
                        </div>
                        <div className="relative bg-slate-200 rounded-2xl p-8 flex flex-col justify-center">
                            <div className="absolute inset-0 bg-slate-900/5 rounded-2xl"></div>
                            <blockquote className="relative italic text-xl text-slate-700 font-serif text-center">
                                "You're not paying for marketing. You're buying back your time to do what actually makes money: closing deals and running projects."
                            </blockquote>
                        </div>
                    </div>
                </div>
            </section>

            {/* 8. Real Results */}
            <section className="py-24 bg-white">
                <div className="container mx-auto px-6 max-w-6xl">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-5xl font-serif font-bold text-slate-900 mb-6">Real Results From Real Builders</h2>
                    </div>
                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            { name: "Eagle Rock Custom Homes", spend: "$5.5k Spend", result: "$3.2M Pipeline", time: "90 Days" },
                            { name: "Schwanz Custom Homes", spend: "$6k Spend", result: "$680k Closed", time: "Year 1" },
                            { name: "Homestead Builders", spend: "$8k Spend", result: "$2.5M Closed", time: "6 Months" }
                        ].map((stat, i) => (
                            <div key={i} className="text-center p-8 border border-slate-100 rounded-2xl hover:shadow-xl transition-shadow bg-slate-50 flex flex-col justify-center min-h-[300px]">
                                <h3 className="font-bold text-slate-900 mb-2 text-xl">{stat.name}</h3>
                                <div className="text-sm text-slate-500 mb-8">{stat.time}</div>
                                <div className="space-y-4">
                                    <div className="bg-red-50 text-red-600 py-1.5 px-4 rounded-full inline-block text-sm font-bold border border-red-100">{stat.spend}</div>
                                    <div className="text-4xl font-bold text-slate-900 block tracking-tight">{stat.result}</div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 9. Timeline (Roadmap Style) */}
            <section className="py-24 bg-white border-t border-slate-100">
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
                            <div key={i} className="flex flex-col md:flex-row gap-6 p-6 rounded-2xl hover:bg-slate-50 border border-transparent hover:border-slate-100 transition-all">
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

            {/* 10. Foundation Callout */}
            <section className="py-24 bg-slate-900 text-white">
                <div className="container mx-auto px-6 max-w-4xl text-center">
                    <div className="inline-flex items-center gap-2 bg-purple-900/50 text-purple-200 border border-purple-500/30 px-4 py-2 rounded-full font-bold text-sm mb-6">
                        <AlertTriangle size={16} /> Prerequisite Check
                    </div>
                    <h2 className="text-3xl font-serif font-bold text-white mb-6">Foundation Required</h2>
                    <p className="text-slate-300 mb-8 max-w-2xl mx-auto">
                        The Pipeline only works if your website converts. We drive traffic, but if your site looks amateur, we waste money.
                    </p>
                    <div className="bg-slate-800 p-6 rounded-xl shadow-sm border border-slate-700 inline-block text-left">
                        <div className="font-bold text-white mb-2">The Bundle Offer</div>
                        <p className="text-sm text-slate-400 mb-4">
                            Need both? Get Foundation + Pipeline together and save <span className="font-bold text-emerald-400">$1,000</span> on your Foundation investment.
                        </p>
                        <Link to="/programs/foundation" className="text-purple-400 font-bold text-sm underline hover:text-purple-300">Check Foundation w/ Bundle</Link>
                    </div>
                </div>
            </section>

            {/* 11. Investment */}
            <section className="py-24 bg-white">
                <div className="container mx-auto px-6 max-w-3xl text-center">
                    <h2 className="text-3xl md:text-5xl font-serif font-bold text-slate-900 mb-4">$1,997<span className="text-2xl text-slate-500 font-sans font-normal">/month</span></h2>
                    <p className="text-xl text-slate-500 mb-12">+ Ad Budget (Rec. $3k-$5k/mo)</p>

                    <div className="bg-slate-50 p-8 rounded-3xl border border-slate-100 text-left space-y-4 max-w-lg mx-auto mb-10">
                        <div className="flex gap-3"><CheckCircle2 className="text-green-500 shrink-0" /> Professional Ad Management</div>
                        <div className="flex gap-3"><CheckCircle2 className="text-green-500 shrink-0" /> Lead Filtering & Qualification</div>
                        <div className="flex gap-3"><CheckCircle2 className="text-green-500 shrink-0" /> Pipeline Integration</div>
                        <div className="flex gap-3"><CheckCircle2 className="text-green-500 shrink-0" /> Weekly Reporting</div>
                        <div className="flex gap-3"><CheckCircle2 className="text-green-500 shrink-0" /> Dedicated Account Manager</div>
                    </div>
                    <button onClick={() => setIsBookingModalOpen(true)} className="w-full max-w-md bg-purple-600 text-white font-bold py-4 rounded-full text-lg shadow-xl hover:bg-purple-700 transition-colors">Start Generating Leads</button>
                    <p className="text-xs text-slate-400 mt-4">Minimum 6-month commitment for proper testing/optimization.</p>
                </div>
            </section>

            {/* 12. FAQ */}
            <section className="py-24 bg-slate-50">
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

            {/* 13. Final CTA */}
            <section className="py-24 bg-slate-900 text-white text-center">
                <div className="container mx-auto px-6 max-w-4xl">
                    <h2 className="text-4xl font-serif font-bold mb-6">Ready For Predictable Leads?</h2>
                    <p className="text-xl text-slate-400 mb-10">
                        While your competitors wait for referrals, you could be managing a waitlist.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <button onClick={() => setIsBookingModalOpen(true)} className="inline-flex items-center bg-purple-600 hover:bg-purple-700 text-white px-8 py-4 rounded-full font-bold transition-all hover:scale-105 shadow-[0_0_20px_rgba(168,85,247,0.3)]">
                            Start Generating Leads <ArrowRight className="ml-2" />
                        </button>
                        <button onClick={() => setIsBookingModalOpen(true)} className="inline-flex items-center bg-transparent border border-white/20 hover:bg-white/10 text-white px-8 py-4 rounded-full font-bold transition-all">
                            Talk to Our Team First
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

export default PipelineProgram;
