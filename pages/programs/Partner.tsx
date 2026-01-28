import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, X, ChevronDown, ChevronUp, Users, Target, Zap, Layout, Megaphone, BarChart3, ShieldCheck, Crown } from 'lucide-react';

const PartnerProgram: React.FC = () => {
    const [openFaq, setOpenFaq] = useState<number | null>(null);

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
                            <span className="text-sm font-medium text-purple-200 uppercase tracking-widest">Application Only • Limited Availability</span>
                        </div>

                        <h1 className="text-5xl md:text-7xl font-serif font-bold mb-8 leading-tight tracking-tight">
                            Your Fractional <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400">Chief Growth Team</span>
                        </h1>

                        <p className="text-xl md:text-2xl text-slate-300 mb-10 max-w-3xl mx-auto leading-relaxed font-light">
                            Stop managing disjointed agencies and freelancers. We integrate into your business as your dedicated marketing & sales department.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-5 justify-center items-center">
                            <Link to="/partner-application" className="group relative inline-flex items-center justify-center px-8 py-4 text-base font-bold text-white transition-all duration-200 bg-purple-600 font-pj rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-600 hover:bg-purple-700 shadow-[0_0_20px_rgba(168,85,247,0.4)] hover:shadow-[0_0_30px_rgba(168,85,247,0.6)]">
                                Apply for Partnership
                                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            </Link>
                            <Link to="/case-studies" className="inline-flex items-center justify-center px-8 py-4 text-base font-bold text-slate-300 transition-all duration-200 bg-transparent border border-slate-700 rounded-full hover:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-slate-700 hover:text-white hover:border-slate-500">
                                View Results
                            </Link>
                        </div>
                    </div>

                    {/* Team Visual */}
                    <div className="relative max-w-6xl mx-auto">
                        <div className="relative z-10 bg-slate-900/50 backdrop-blur-xl border border-slate-700 rounded-2xl p-8 md:p-12 shadow-2xl">
                            <div className="grid md:grid-cols-4 gap-8 divide-y md:divide-y-0 md:divide-x divide-slate-700/50 text-center">
                                <div className="p-4">
                                    <div className="w-16 h-16 bg-purple-900/30 rounded-full flex items-center justify-center mx-auto mb-4 border border-purple-500/20">
                                        <Crown className="text-purple-400" size={32} />
                                    </div>
                                    <h3 className="font-bold text-white mb-2">CMO Strategy</h3>
                                    <p className="text-sm text-slate-400">Quarterly planning, KPI ownership, and market positioning.</p>
                                </div>
                                <div className="p-4">
                                    <div className="w-16 h-16 bg-blue-900/30 rounded-full flex items-center justify-center mx-auto mb-4 border border-blue-500/20">
                                        <Megaphone className="text-blue-400" size={32} />
                                    </div>
                                    <h3 className="font-bold text-white mb-2">Media Buying</h3>
                                    <p className="text-sm text-slate-400">Expert management of Google, Meta, and YouTube ad campaigns.</p>
                                </div>
                                <div className="p-4">
                                    <div className="w-16 h-16 bg-pink-900/30 rounded-full flex items-center justify-center mx-auto mb-4 border border-pink-500/20">
                                        <Layout className="text-pink-400" size={32} />
                                    </div>
                                    <h3 className="font-bold text-white mb-2">Creative Studio</h3>
                                    <p className="text-sm text-slate-400">Video editing, graphic design, and copywriting that converts.</p>
                                </div>
                                <div className="p-4">
                                    <div className="w-16 h-16 bg-emerald-900/30 rounded-full flex items-center justify-center mx-auto mb-4 border border-emerald-500/20">
                                        <Zap className="text-emerald-400" size={32} />
                                    </div>
                                    <h3 className="font-bold text-white mb-2">Tech Infrastructure</h3>
                                    <p className="text-sm text-slate-400">CRM management, funnel building, and automation maintenance.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* The Agency Trap */}
            <section className="py-24 bg-white">
                <div className="container mx-auto px-6">
                    <div className="max-w-4xl mx-auto text-center mb-16">
                        <h2 className="text-3xl md:text-5xl font-serif font-bold text-slate-900 mb-6">
                            You Don't Need Another "Service Provider" <br /> You Need A Partner
                        </h2>
                        <p className="text-xl text-slate-600 leading-relaxed max-w-3xl mx-auto">
                            Most builders are stuck playing "Marketing Manager" to a dozen different vendors who don't talk to each other.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8 mb-16 max-w-6xl mx-auto">
                        <div className="bg-slate-50 p-10 rounded-3xl border border-slate-200 relative overflow-hidden group hover:border-red-200 transition-colors">
                            <div className="absolute top-0 right-0 p-8 opacity-10">
                                <X size={120} className="text-slate-900" />
                            </div>
                            <h3 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-3">
                                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-red-100 text-red-600 text-sm font-bold">X</span>
                                The "Vendor" Model
                            </h3>
                            <ul className="space-y-4 relative z-10">
                                {[
                                    "Web guy blames the SEO guy",
                                    "Ads guy says leads are good (they aren't)",
                                    "You have to come up with all the ideas",
                                    "Nobody looks at the holistic picture",
                                    "You pay retainers even when results suck"
                                ].map((item, i) => (
                                    <li key={i} className="flex gap-3 text-slate-600">
                                        <X size={20} className="text-red-400 shrink-0 mt-0.5" />
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="bg-slate-900 p-10 rounded-3xl border border-slate-800 relative overflow-hidden text-white shadow-xl transform md:-translate-y-4">
                            <div className="absolute top-0 right-0 p-8 opacity-10">
                                <CheckCircle size={120} className="text-white" />
                            </div>
                            <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-purple-500 text-white text-sm font-bold">✓</span>
                                The Partner Model
                            </h3>
                            <ul className="space-y-4 relative z-10">
                                {[
                                    "We own the revenue number, not just 'clicks'",
                                    "One team handling strategy, creative, and tech",
                                    "We bring the ideas and strategy to you",
                                    "Seamless data flow from Ad to Sale",
                                    "Incentivized by your growth"
                                ].map((item, i) => (
                                    <li key={i} className="flex gap-3 text-slate-300">
                                        <CheckCircle size={20} className="text-purple-400 shrink-0 mt-0.5" />
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* What's Included */}
            <section className="py-24 bg-slate-50">
                <div className="container mx-auto px-6 max-w-6xl">
                    <div className="text-center mb-20">
                        <h2 className="text-3xl md:text-5xl font-serif font-bold text-slate-900 mb-6">A Complete Revenue Engine</h2>
                        <p className="text-xl text-slate-500">We don't sell "services". We install a growth infrastructure.</p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            {
                                title: "Strategic Leadership",
                                desc: "Bi-weekly strategy calls with your dedicated Growth Director. We review pipeline acceleration, campaign performance, and set targets for the next sprint.",
                                icon: Crown,
                                color: "text-purple-600",
                                bg: "bg-purple-50"
                            },
                            {
                                title: "Full-Stack Media Buying",
                                desc: "Management of Google Search, YouTube, Facebook, and Instagram ads. We handle the budget, the targeting, and the ongoing optimization.",
                                icon: Target,
                                color: "text-blue-600",
                                bg: "bg-blue-50"
                            },
                            {
                                title: "Content Production",
                                desc: "Our creative team handles ad creatives, email copy, landing page design, and sales collateral. You just approve the assets.",
                                icon: Layout,
                                color: "text-pink-600",
                                bg: "bg-pink-50"
                            },
                            {
                                title: "CRM & Automation",
                                desc: "We build and maintain your entire backend. Automated follow-up sequences, pipeline stages, and reporting dashboards.",
                                icon: Zap,
                                color: "text-orange-600",
                                bg: "bg-orange-50"
                            },
                            {
                                title: "Sales Enablement",
                                desc: "We don't stop at the lead. We listen to your sales calls, provide feedback, and optimize the scripts to improve close rates.",
                                icon: Users,
                                color: "text-emerald-600",
                                bg: "bg-emerald-50"
                            },
                            {
                                title: "Data & Reporting",
                                desc: "Live dashboards showing you exactly what's happening. Cost per lead, cost per acquisition, and projected pipeline value.",
                                icon: BarChart3,
                                color: "text-slate-600",
                                bg: "bg-slate-100"
                            }
                        ].map((feature, i) => (
                            <div key={i} className="bg-white p-8 rounded-2xl border border-slate-200 hover:shadow-lg transition-shadow group">
                                <div className={`w-14 h-14 ${feature.bg} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                                    <feature.icon className={feature.color} size={28} />
                                </div>
                                <h3 className="text-xl font-bold text-slate-900 mb-3">{feature.title}</h3>
                                <p className="text-slate-600 leading-relaxed text-sm">{feature.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Who This Is For */}
            <section className="py-24 bg-slate-900 text-white">
                <div className="container mx-auto px-6 max-w-4xl">
                    <div className="text-center mb-16">
                        <span className="text-purple-400 font-bold uppercase tracking-widest text-sm">Qualification Criteria</span>
                        <h2 className="text-3xl md:text-5xl font-serif font-bold mt-4 mb-8">Who We Partner With</h2>
                        <p className="text-xl text-slate-300">
                            This is not a course or a DIY tool. It is a high-touch partnership requiring mutual commitment.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8">
                        <div className="bg-slate-800/50 p-8 rounded-2xl border border-emerald-500/30 relative">
                            <div className="absolute top-4 right-4 bg-emerald-500/20 text-emerald-400 px-3 py-1 rounded-full text-xs font-bold uppercase">Good Fit</div>
                            <ul className="space-y-4 mt-4">
                                {[
                                    "Custom Builders doing $2M - $10M+ annual revenue",
                                    "Willing to spend $3k+ per month on ad spend",
                                    "Have a dedicated sales process (or willing to build one)",
                                    "Looking for long-term growth, not a quick fix",
                                    "Values quality over quantity"
                                ].map((item, i) => (
                                    <li key={i} className="flex gap-3 text-slate-300">
                                        <CheckCircle size={20} className="text-emerald-400 shrink-0" />
                                        <span className="text-sm md:text-base">{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="bg-slate-800/50 p-8 rounded-2xl border border-red-500/30 relative">
                            <div className="absolute top-4 right-4 bg-red-500/20 text-red-400 px-3 py-1 rounded-full text-xs font-bold uppercase">Not a Fit</div>
                            <ul className="space-y-4 mt-4">
                                {[
                                    "Startups or new builders under $1M revenue",
                                    "Looking for 'cheap leads' only",
                                    "Refuse to use a CRM or track data",
                                    "Micromanagers who want to edit every ad copy",
                                    "Contractors with no sales process"
                                ].map((item, i) => (
                                    <li key={i} className="flex gap-3 text-slate-300">
                                        <X size={20} className="text-red-400 shrink-0" />
                                        <span className="text-sm md:text-base">{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* Application Process */}
            <section className="py-24 bg-white">
                <div className="container mx-auto px-6 max-w-4xl text-center">
                    <h2 className="text-3xl md:text-5xl font-serif font-bold text-slate-900 mb-12">The Partnership Process</h2>

                    <div className="grid md:grid-cols-3 gap-8 relative">
                        {/* Connecting Line */}
                        <div className="hidden md:block absolute top-12 left-0 w-full h-0.5 bg-slate-100 z-0"></div>

                        {[
                            {
                                step: "1",
                                title: "Application",
                                desc: "Fill out a brief application to see if your business qualifies for our territory availability."
                            },
                            {
                                step: "2",
                                title: "Strategy Audit",
                                desc: "We review your current market, website, and sales process to identify the growth gaps."
                            },
                            {
                                step: "3",
                                title: "Launch",
                                desc: "If accepted, we onboard your team and launch your new growth infrastructure in 14 days."
                            }
                        ].map((item, i) => (
                            <div key={i} className="relative z-10 bg-white p-6 rounded-xl border border-slate-100 shadow-sm hover:shadow-md transition-all">
                                <div className="w-12 h-12 bg-slate-900 text-white rounded-full flex items-center justify-center font-bold text-xl mx-auto mb-6 shadow-lg shadow-purple-500/20">
                                    {item.step}
                                </div>
                                <h3 className="text-xl font-bold text-slate-900 mb-2">{item.title}</h3>
                                <p className="text-slate-500 text-sm">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* FAQ */}
            <section className="py-24 bg-slate-50">
                <div className="container mx-auto px-6 max-w-3xl">
                    <h2 className="text-3xl font-serif font-bold text-slate-900 mb-12 text-center">Common Questions</h2>
                    <div className="space-y-4">
                        {[
                            { q: "How is this different from a marketing agency?", a: "Traditional agencies are transactional. They sell you 'SEO' or 'Ads' as a service. We operate as a growth partner. We integrate into your team, we own the revenue outcome, and we handle the entire funnel from click to close. We don't just send leads; we help you close them." },
                            { q: "Do you work with anyone?", a: "No. We offer territory exclusivity to our partners. We will only work with one major custom builder in a specific geographic market to avoid conflict of interest. This is why we have an application process." },
                            { q: "What is the commitment?", a: "Our partnerships operate on a 90-day initial sprint, followed by a month-to-month engagement. We believe we should earn your business every month, but real results in custom home building require at least a quarterly outlook." },
                            { q: "Do I still need my own sales team?", a: "Yes. We are not a sales agency. We generate qualified opportunities and position them for you, but you or your team must handle the meetings and closing. We provide the training and scripts to help you do this effectively." },
                            { q: "How fast can we launch?", a: "Once the agreement is signed, our onboarding takes roughly 10-14 days. This includes building your CRM, setting up ad accounts, creative production, and technical integration. You can expect leads to start flowing by Week 3." }
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

            {/* Final CTA */}
            <section className="py-24 bg-slate-900 text-white text-center">
                <div className="container mx-auto px-6 max-w-4xl">
                    <h2 className="text-4xl font-serif font-bold mb-6">Ready to Scale?</h2>
                    <p className="text-xl text-slate-400 mb-10">
                        Check availability in your market and apply for a partnership.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link to="/partner-application" className="inline-flex items-center bg-purple-600 hover:bg-purple-700 text-white px-8 py-4 rounded-full font-bold transition-all hover:scale-105 shadow-[0_0_20px_rgba(168,85,247,0.3)]">
                            Apply Now <ArrowRight className="ml-2" />
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default PartnerProgram;
