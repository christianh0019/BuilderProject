import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, X, ChevronDown, ChevronUp, Users, Target, Zap, Layout, Megaphone, BarChart3, Clock, Calendar, ShieldCheck, Crown } from 'lucide-react';
import { caseStudies } from '../../data/caseStudies';

const PartnerProgram: React.FC = () => {
    const [openFaq, setOpenFaq] = useState<number | null>(null);

    const toggleFaq = (index: number) => {
        setOpenFaq(openFaq === index ? null : index);
    };

    const partnerStudies = caseStudies.filter(study => ['homestead', 'open-prairie', 'schwanz'].includes(study.id));

    return (
        <div className="pt-20">
            {/* 1. Hero Section */}
            <section className="relative bg-[#0F172A] text-white pt-32 pb-32 overflow-hidden">
                {/* Background Effects */}
                <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-purple-900/20 rounded-full blur-[120px] pointer-events-none mix-blend-screen animate-pulse"></div>
                <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-blue-900/10 rounded-full blur-[100px] pointer-events-none mix-blend-screen"></div>

                <div className="container mx-auto px-6 relative z-10">
                    <div className="max-w-7xl mx-auto text-center mb-20">
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-900/30 border border-purple-500/30 mb-8 backdrop-blur-sm">
                            <span className="flex h-2 w-2 rounded-full bg-green-400 animate-pulse"></span>
                            <span className="text-sm font-medium text-purple-200 uppercase tracking-widest">THE PARTNER PROGRAM</span>
                        </div>

                        <h1 className="text-[36px] md:text-6xl lg:text-7xl font-serif font-bold mb-8 leading-tight tracking-tight">
                            Dominate Your Market Without <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400">Managing Another Vendor</span>
                        </h1>

                        <p className="text-xl md:text-2xl text-slate-300 mb-10 max-w-3xl mx-auto leading-relaxed font-light">
                            We become your entire marketing and media department. You manage projects. We build your pipeline.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-5 justify-center items-center">
                            <Link to="/partner-application" className="group relative inline-flex items-center justify-center px-8 py-4 text-base font-bold text-white transition-all duration-200 bg-purple-600 font-pj rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-600 hover:bg-purple-700 shadow-[0_0_20px_rgba(168,85,247,0.4)] hover:shadow-[0_0_30px_rgba(168,85,247,0.6)]">
                                Apply for Partnership
                                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            </Link>
                        </div>
                    </div>

                    {/* Visual: Chaos vs Calm */}
                    <div className="relative max-w-6xl mx-auto grid md:grid-cols-2 gap-8 lg:gap-12 items-center">
                        {/* Chaos Side */}
                        <div className="bg-slate-800/50 backdrop-blur-sm p-8 rounded-2xl border border-red-500/30 relative overflow-hidden group hover:border-red-500/50 transition-all">
                            <div className="absolute top-0 right-0 p-4 opacity-20">
                                <X size={80} className="text-red-500" />
                            </div>
                            <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-3">
                                <span className="bg-red-500/20 text-red-500 p-2 rounded-lg"><X size={20} /></span>
                                The Chaos
                            </h3>
                            <div className="space-y-4">
                                <div className="flex items-center justify-between bg-slate-900/50 p-3 rounded-lg border border-slate-700/50">
                                    <span className="text-slate-400 text-sm">Web Designer</span>
                                    <span className="text-red-400 text-xs font-bold">"Not my job"</span>
                                </div>
                                <div className="flex items-center justify-between bg-slate-900/50 p-3 rounded-lg border border-slate-700/50">
                                    <span className="text-slate-400 text-sm">Ads Guy</span>
                                    <span className="text-red-400 text-xs font-bold">"Leads are good..."</span>
                                </div>
                                <div className="flex items-center justify-between bg-slate-900/50 p-3 rounded-lg border border-slate-700/50">
                                    <span className="text-slate-400 text-sm">SEO Agency</span>
                                    <span className="text-red-400 text-xs font-bold">"Validating..."</span>
                                </div>
                                <div className="mt-4 pt-4 border-t border-slate-700/50">
                                    <p className="text-red-300 text-sm italic">You spending 10hrs/week managing vendors</p>
                                </div>
                            </div>
                        </div>

                        {/* Order Side */}
                        <div className="bg-slate-900 p-8 rounded-2xl border border-emerald-500/50 relative overflow-hidden shadow-2xl transform md:-translate-y-4 ring-1 ring-emerald-500/20">
                            <div className="absolute top-0 right-0 p-4 opacity-20">
                                <Crown size={80} className="text-emerald-500" />
                            </div>
                            <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-3">
                                <span className="bg-emerald-500/20 text-emerald-500 p-2 rounded-lg"><CheckCircle size={20} /></span>
                                The Partner System
                            </h3>
                            <div className="space-y-4">
                                <div className="bg-emerald-900/10 p-4 rounded-xl border border-emerald-500/20">
                                    <div className="flex items-center gap-3 mb-2">
                                        <div className="w-8 h-8 rounded-full bg-emerald-500 flex items-center justify-center text-slate-900 font-bold text-xs">BP</div>
                                        <span className="font-bold text-emerald-400">Growth Director</span>
                                    </div>
                                    <p className="text-slate-300 text-sm pl-11">"We reviewed the pipeline. Ads are optimized. Content is live. Here's the revenue forecast for next month."</p>
                                </div>
                                <div className="mt-4 pt-4 border-t border-slate-700/50">
                                    <p className="text-emerald-300 text-sm italic">You reviewing results in 30 mins/month</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 2. The Problem Section */}
            <section className="py-24 bg-white">
                <div className="container mx-auto px-6 max-w-4xl text-center">
                    <h2 className="text-3xl md:text-5xl font-serif font-bold text-slate-900 mb-6">
                        Why Marketing Feels Like Herding Cattle
                    </h2>
                    <p className="text-xl text-slate-600 leading-relaxed mb-12">
                        You don't have a marketing problem. You have a coordination problem.
                    </p>

                    <div className="grid md:grid-cols-2 gap-8 text-left">
                        <div className="bg-slate-50 p-8 rounded-2xl border border-slate-200">
                            <h3 className="font-bold text-lg mb-4 text-slate-900">The Current Reality</h3>
                            <ul className="space-y-4">
                                <li className="flex gap-3 text-slate-600">
                                    <X className="text-red-500 shrink-0" size={20} />
                                    You hired a web designer, a social guy, an ads agency, and an SEO freelancer.
                                </li>
                                <li className="flex gap-3 text-slate-600">
                                    <X className="text-red-500 shrink-0" size={20} />
                                    They don't talk to each other. Nothing is coordinated.
                                </li>
                                <li className="flex gap-3 text-slate-600">
                                    <X className="text-red-500 shrink-0" size={20} />
                                    Results are mediocre because the pieces don't work together.
                                </li>
                                <li className="flex gap-3 text-slate-600">
                                    <X className="text-red-500 shrink-0" size={20} />
                                    When something breaks, everyone blames each other.
                                </li>
                            </ul>
                        </div>
                        <div className="flex items-center justify-center">
                            <div className="text-center">
                                <div className="inline-block p-4 bg-purple-100 rounded-full text-purple-600 mb-6">
                                    <Zap size={32} />
                                </div>
                                <h3 className="text-2xl font-bold text-slate-900 mb-4">The Insight</h3>
                                <p className="text-slate-600 text-lg">
                                    "You're spending 10 hours a week managing vendors instead of closing deals."
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 3. The Solution */}
            <section className="py-24 bg-slate-900 text-white">
                <div className="container mx-auto px-6 max-w-6xl">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-5xl font-serif font-bold mb-6">
                            One Team. Complete System. <br /> Total Dominance.
                        </h2>
                        <p className="text-xl text-slate-400">Here's what happens when we partner:</p>
                    </div>

                    <div className="grid md:grid-cols-4 gap-6">
                        {[
                            { icon: Users, title: "One Point of Contact", desc: "Your dedicated Growth Director." },
                            { icon: Layout, title: "One System", desc: "Where everything works together." },
                            { icon: Calendar, title: "One Meeting", desc: "Monthly review of actual revenue." },
                            { icon: ShieldCheck, title: "One Invoice", desc: "Instead of five disjointed bills." }
                        ].map((item, i) => (
                            <div key={i} className="bg-slate-800 p-8 rounded-2xl border border-slate-700 text-center hover:bg-slate-750 transition-colors">
                                <div className="w-12 h-12 bg-purple-900/50 rounded-xl flex items-center justify-center text-purple-400 mx-auto mb-6 border border-purple-500/20">
                                    <item.icon size={24} />
                                </div>
                                <h3 className="font-bold text-lg mb-2">{item.title}</h3>
                                <p className="text-slate-400 text-sm">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 4. What's Included (Outcome Focused) */}
            <section className="py-24 bg-slate-50">
                <div className="container mx-auto px-6 max-w-6xl">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-5xl font-serif font-bold text-slate-900 mb-6">What You Actually Get</h2>
                        <p className="text-xl text-slate-500">Not just features. Outcomes.</p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {/* Foundation */}
                        <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm">
                            <div className="text-sm font-bold text-purple-600 uppercase tracking-widest mb-4">Foundation ($5k Value)</div>
                            <h3 className="text-2xl font-bold text-slate-900 mb-4">"Your digital presence becomes as impressive as your builds"</h3>
                            <ul className="space-y-3">
                                <li className="flex gap-2 text-slate-600 text-sm"><CheckCircle size={16} className="text-green-500 mt-0.5" /> Website that converts</li>
                                <li className="flex gap-2 text-slate-600 text-sm"><CheckCircle size={16} className="text-green-500 mt-0.5" /> Funnels that capture</li>
                                <li className="flex gap-2 text-slate-600 text-sm"><CheckCircle size={16} className="text-green-500 mt-0.5" /> Brand that looks established</li>
                            </ul>
                        </div>

                        {/* Lead Gen */}
                        <div className="bg-white p-8 rounded-2xl border border-purple-200 shadow-lg relative transform md:-translate-y-4">
                            <div className="absolute top-0 right-0 bg-purple-600 text-white text-xs font-bold px-3 py-1 rounded-bl-lg rounded-tr-lg">Core Engine</div>
                            <div className="text-sm font-bold text-purple-600 uppercase tracking-widest mb-4">Complete Lead Gen</div>
                            <h3 className="text-2xl font-bold text-slate-900 mb-4">"You're everywhere your prospects are looking"</h3>
                            <ul className="space-y-3">
                                <li className="flex gap-2 text-slate-600 text-sm"><CheckCircle size={16} className="text-green-500 mt-0.5" /> Paid ads running 24/7</li>
                                <li className="flex gap-2 text-slate-600 text-sm"><CheckCircle size={16} className="text-green-500 mt-0.5" /> Content going out consistently</li>
                                <li className="flex gap-2 text-slate-600 text-sm"><CheckCircle size={16} className="text-green-500 mt-0.5" /> SEO building in background</li>
                            </ul>
                        </div>

                        {/* Dominance */}
                        <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm">
                            <div className="text-sm font-bold text-purple-600 uppercase tracking-widest mb-4">Digital Dominance</div>
                            <h3 className="text-2xl font-bold text-slate-900 mb-4">"Your competition looks invisible while you're unavoidable"</h3>
                            <ul className="space-y-3">
                                <li className="flex gap-2 text-slate-600 text-sm"><CheckCircle size={16} className="text-green-500 mt-0.5" /> 32 pieces of content / mo</li>
                                <li className="flex gap-2 text-slate-600 text-sm"><CheckCircle size={16} className="text-green-500 mt-0.5" /> Weekly Google posts</li>
                                <li className="flex gap-2 text-slate-600 text-sm"><CheckCircle size={16} className="text-green-500 mt-0.5" /> Reputation management</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* 5. The Omnipresence Effect */}
            <section className="py-24 bg-white overflow-hidden">
                <div className="container mx-auto px-6 max-w-6xl">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-5xl font-serif font-bold text-slate-900 mb-6">The Omnipresence Effect</h2>
                        <p className="text-xl text-slate-500">This is what your prospects experience. Warning: It's powerful.</p>
                    </div>

                    <div className="relative">
                        <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-slate-100 md:left-1/2 md:-ml-px"></div>
                        <div className="space-y-8">
                            {[
                                "They see your ad on Instagram",
                                "They Google you and find your ranking website",
                                "They check your Google reviews (you have 50+, all recent)",
                                "They follow you on Instagram (new content every other day)",
                                "They download your budget calculator (you're in their inbox)",
                                "They see retargeting ads for weeks (you're everywhere)",
                                "Their friend mentions you (reputation is strong)",
                                "They're ready and you're the only builder they're calling"
                            ].map((step, i) => (
                                <div key={i} className="relative flex items-center md:justify-center group">
                                    <div className="w-4 h-4 rounded-full bg-purple-600 absolute left-8 md:left-1/2 -ml-2 border-2 border-white z-10"></div>
                                    <div className={`md:w-1/2 p-4 ${i % 2 === 0 ? 'md:text-right md:pr-12 md:mr-auto' : 'md:text-left md:pl-12 md:ml-auto'}`}>
                                        <div className="bg-white p-4 rounded-xl border border-slate-100 shadow-sm inline-block">
                                            <span className="font-medium text-slate-800">{step}</span>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div className="text-center mt-12">
                            <p className="text-lg font-bold text-purple-600">"That's not luck. That's systematic market dominance."</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* 6. Who This Is For */}
            <section className="py-24 bg-slate-900 text-white">
                <div className="container mx-auto px-6 max-w-4xl">
                    <div className="text-center mb-16">
                        <span className="text-purple-400 font-bold uppercase tracking-widest text-sm">Selective Qualification</span>
                        <h2 className="text-3xl md:text-5xl font-serif font-bold mt-4 mb-4">Who We Partner With</h2>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8">
                        <div className="bg-slate-800/50 p-8 rounded-2xl border border-emerald-500/30 relative">
                            <div className="mb-6 flex items-center gap-3 border-b border-emerald-500/20 pb-4">
                                <CheckCircle className="text-emerald-400" size={28} />
                                <h3 className="font-bold text-lg">This IS For You If:</h3>
                            </div>
                            <ul className="space-y-4">
                                {[
                                    "Doing $3M+ per year, ready to scale to $10M+",
                                    "Tired of managing multiple marketing vendors",
                                    "Want to dominate your market, not just participate",
                                    "Ready to invest seriously in long-term growth",
                                    "Have capacity or want to build a 12-month waitlist"
                                ].map((item, i) => (
                                    <li key={i} className="flex gap-3 text-slate-300">
                                        <CheckCircle size={18} className="text-emerald-400 shrink-0 mt-1" />
                                        <span className="text-sm md:text-base">{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="bg-slate-800/50 p-8 rounded-2xl border border-red-500/30 relative">
                            <div className="mb-6 flex items-center gap-3 border-b border-red-500/20 pb-4">
                                <X className="text-red-400" size={28} />
                                <h3 className="font-bold text-lg">This Is NOT For You If:</h3>
                            </div>
                            <ul className="space-y-4">
                                {[
                                    "Looking for quick results (this takes 6-12 months)",
                                    "Want the cheapest option",
                                    "Not ready to invest $3K-$5K/month consistently",
                                    "Under $3M revenue (start with Foundation or Pipeline)"
                                ].map((item, i) => (
                                    <li key={i} className="flex gap-3 text-slate-300">
                                        <X size={18} className="text-red-400 shrink-0 mt-1" />
                                        <span className="text-sm md:text-base">{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* 7. Investment */}
            <section className="py-24 bg-white">
                <div className="container mx-auto px-6 max-w-4xl text-center">
                    <h2 className="text-3xl md:text-5xl font-serif font-bold text-slate-900 mb-8">What You're Really Buying</h2>

                    <div className="bg-slate-50 border border-slate-200 rounded-3xl p-8 md:p-12 mb-10">
                        <div className="flex flex-col md:flex-row justify-center items-end gap-2 mb-6">
                            <span className="text-5xl md:text-6xl font-bold text-slate-900">$2,997</span>
                            <span className="text-xl text-slate-500 font-medium mb-2">/ month + ad budget</span>
                        </div>

                        <div className="max-w-2xl mx-auto text-left space-y-4">
                            <p className="text-slate-600">Most builders spend more managing scattered vendors anyway:</p>
                            <div className="grid grid-cols-2 gap-4 text-sm text-slate-500 bg-white p-6 rounded-xl border border-slate-200">
                                <div>x SEO Specialist ($2,000)</div>
                                <div className="text-red-500 line-through">Chaos</div>
                                <div>x Website Manager ($500)</div>
                                <div className="text-red-500 line-through">Pain</div>
                                <div>x Ads Agency ($2,500)</div>
                                <div className="text-red-500 line-through">Blame</div>
                                <div>x Social Manager ($2,000)</div>
                                <div className="text-red-500 line-through">Mediocrity</div>
                                <div>x Copywriter ($1,500)</div>
                                <div className="text-red-500 line-through">Delay</div>
                                <div>x CRM Tech ($500)</div>
                                <div className="text-red-500 line-through">Broken</div>
                                <div className="font-bold border-t pt-2">Total: $9,000/mo</div>
                                <div className="font-bold border-t pt-2 text-red-500">Headache</div>
                            </div>
                            <p className="text-slate-900 font-medium text-center pt-4">
                                With us, you get a complete integrated team for less. And it actually works together.
                            </p>
                        </div>
                    </div>

                    <div className="max-w-2xl mx-auto bg-purple-50 p-6 rounded-xl border border-purple-100 text-purple-800 font-medium">
                        "One additional project per year pays for this 20x over. If this system helps you close 3 more deals, that's $3M+ in revenue from a $36K annual investment."
                    </div>
                </div>
            </section>

            {/* 8. Case Studies */}
            <section className="py-24 bg-slate-50">
                <div className="container mx-auto px-6 max-w-7xl">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-5xl font-serif font-bold text-slate-900 mb-6">Builders Scaling With This System</h2>
                    </div>
                    <div className="grid lg:grid-cols-3 gap-8">
                        {partnerStudies.map((study, i) => (
                            <div key={i} className="bg-white rounded-2xl border border-slate-200 overflow-hidden hover:shadow-xl transition-shadow flex flex-col h-full">
                                <div className="h-48 overflow-hidden relative">
                                    <img src={study.imageUrl} alt={study.title} className="w-full h-full object-cover" />
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
                                        <Link to={`/case-studies/${study.slug}`} className="text-purple-600 font-bold text-sm hover:underline">Read Full Story &rarr;</Link>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 9. 12-Month Roadmap */}
            <section className="py-24 bg-white">
                <div className="container mx-auto px-6 max-w-5xl">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-5xl font-serif font-bold text-slate-900 mb-6">The 12-Month Roadmap</h2>
                        <p className="text-xl text-slate-500">What to expect when you partner with us.</p>
                    </div>

                    <div className="space-y-8">
                        {[
                            { month: "Months 1-3", title: "Launch & Calibration", desc: "Foundation built, ads launched, content machine starting. We find the winning angles." },
                            { month: "Months 4-6", title: "Traction & Pipeline", desc: "SEO gaining traction, pipeline filling with qualified leads, first deals closing from the system." },
                            { month: "Months 7-9", title: "Scale & Reputation", desc: "Consistent lead flow, reputation building, market presence strong. You are becoming the dominant player." },
                            { month: "Months 10-12", title: "Market Leadership", desc: "Booked out, waitlist forming, referral engine amplifying the paid traffic." }
                        ].map((phase, i) => (
                            <div key={i} className="flex flex-col md:flex-row gap-6 p-6 rounded-2xl hover:bg-slate-50 border border-transparent hover:border-slate-100 transition-all">
                                <div className="md:w-32 shrink-0">
                                    <span className="inline-block px-4 py-2 bg-slate-900 text-white text-sm font-bold rounded-lg">{phase.month}</span>
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-slate-900 mb-2">{phase.title}</h3>
                                    <p className="text-slate-600">{phase.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 10. FAQ */}
            <section className="py-24 bg-slate-50">
                <div className="container mx-auto px-6 max-w-3xl">
                    <h2 className="text-3xl font-serif font-bold text-slate-900 mb-12 text-center">Questions?</h2>
                    <div className="space-y-4">
                        {[
                            { q: "How is this different from hiring an agency?", a: "Traditional agencies are transactional. They sell you 'SEO' or 'Ads' as a service. We operate as a growth partner. We integrate into your team, we own the revenue outcome, and we handle the entire funnel from click to close." },
                            { q: "What if I'm already working with someone?", a: "We can often audit their work. If they are amazing, keep them. Usually, we find they are disjointed from the rest of your strategy. We can replace them or augment them, but we must lead the strategy." },
                            { q: "Can I pause if I get too busy?", a: "This is a momentum game. Stopping marketing when you get busy is why you have 'famine' cycles later. We manage the lead flow so you build a waitlist, not just turn off the tap." },
                            { q: "Do I need to be involved?", a: "Yes, but strategically. You approve the angle, we do the work. You take the sales meetings, we bring the leads. We need your expertise as a builder, not your time as a marketer." },
                            { q: "How do I know if I'm ready?", a: "If you have a sales process (or can build one), can handle 5-10 new qualified projects a year, and have the budget to invest without panicking in month 1, you are ready." }
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
                    <h2 className="text-4xl font-serif font-bold mb-6">We Only Take 5 New Partners Per Quarter</h2>
                    <p className="text-xl text-slate-400 mb-10">
                        If you're a $3M+ builder serious about dominating your market, apply below.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link to="/partner-application" className="inline-flex items-center bg-purple-600 hover:bg-purple-700 text-white px-8 py-4 rounded-full font-bold transition-all hover:scale-105 shadow-[0_0_20px_rgba(168,85,247,0.3)]">
                            Apply for Partnership <ArrowRight className="ml-2" />
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default PartnerProgram;
