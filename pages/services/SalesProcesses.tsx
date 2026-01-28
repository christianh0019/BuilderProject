import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, X, ChevronDown, ChevronUp, Users, MessageSquare, DollarSign, BarChart3, Filter, ShieldCheck, Clock, CheckSquare } from 'lucide-react';
import SEO from '../../components/SEO';
const SalesProcesses: React.FC = () => {
    const [openFaq, setOpenFaq] = React.useState<number | null>(null);

    const toggleFaq = (index: number) => {
        setOpenFaq(openFaq === index ? null : index);
    };

    return (
        <div className="pt-20">
            <SEO
                title="Sales Process Consulting for Builders | BuilderProject"
                description="Optimize your sales cycle. From first call to signed contract, we structure your process to close larger deals."
                canonical="/services/sales-processes"
                keywords="construction sales training, builder sales process, closing custom homes"
            />
            {/* Hero Section */}
            <section className="relative bg-[#0F172A] text-white pt-32 pb-32 overflow-hidden">
                {/* Background Effects */}
                <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-purple-900/20 rounded-full blur-[120px] pointer-events-none mix-blend-screen animate-pulse"></div>
                <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-blue-900/10 rounded-full blur-[100px] pointer-events-none mix-blend-screen"></div>

                <div className="container mx-auto px-6 relative z-10">
                    <div className="max-w-7xl mx-auto text-center mb-20">
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-900/30 border border-purple-500/30 mb-8 backdrop-blur-sm">
                            <span className="flex h-2 w-2 rounded-full bg-green-400 animate-pulse"></span>
                            <span className="text-sm font-medium text-purple-200 uppercase tracking-widest">SALES PROCESSES</span>
                        </div>

                        <h1 className="text-[36px] md:text-7xl font-serif font-bold mb-8 leading-tight tracking-tight">
                            Complete Sales Pipeline Systems <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400">For Custom Home Builders</span>
                        </h1>

                        <p className="text-xl md:text-2xl text-slate-300 mb-10 max-w-3xl mx-auto leading-relaxed font-light">
                            Stop losing qualified leads because you forgot to follow up. Build a systematic sales process that closes 3-4x more deals from the same traffic.
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

                    {/* Dashboard Preview Graphic */}
                    <div className="relative max-w-6xl mx-auto perspective-[1000px] group">
                        <div className="relative z-10 transform transition-all duration-700 hover:scale-[1.01]">
                            <div className="relative mx-auto bg-slate-900 rounded-xl p-2 shadow-2xl border border-slate-700 ring-1 ring-white/10 w-full">
                                <div className="bg-slate-950 rounded-lg overflow-hidden relative">
                                    <img
                                        src="https://storage.googleapis.com/msgsndr/bH5sQz691OWPQdZXU6N2/media/697a0b891d09826b2e7df3c3.png"
                                        alt="Sales Pipeline Dashboard"
                                        className="w-full h-auto"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-tr from-purple-500/10 to-transparent pointer-events-none"></div>
                                </div>
                            </div>
                        </div>
                        {/* Abstract background glow */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-full bg-purple-500/10 blur-[120px] -z-10 rounded-full pointer-events-none"></div>
                    </div>
                </div>
            </section>

            {/* The Gap Section */}
            <section className="py-24 bg-white">
                <div className="container mx-auto px-6">
                    <div className="max-w-4xl mx-auto text-center mb-16">
                        <h2 className="text-3xl md:text-5xl font-serif font-bold text-slate-900 mb-6">
                            Why Your Marketing Leads Aren't <br /> Closing Like Your Referrals
                        </h2>
                        <p className="text-xl text-slate-600 leading-relaxed max-w-3xl mx-auto">
                            Referrals close at 30-40%. Marketing leads close at 1%. You see that gap and think "marketing doesn't work for builders." Here's what's actually happening.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8 mb-16 max-w-5xl mx-auto">
                        <div className="bg-slate-50 p-8 rounded-3xl border border-slate-200">
                            <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center text-green-600 mb-6">
                                <ShieldCheck size={24} />
                            </div>
                            <h3 className="text-2xl font-bold text-slate-900 mb-4">Referrals</h3>
                            <p className="text-slate-600 leading-relaxed">
                                Close like crazy because someone the prospect already trusts vouched for you. They show up ready to move forward. Fewer objections. More flexible on price. Faster decisions.
                            </p>
                        </div>
                        <div className="bg-slate-50 p-8 rounded-3xl border border-slate-200">
                            <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center text-red-600 mb-6">
                                <Users size={24} />
                            </div>
                            <h3 className="text-2xl font-bold text-slate-900 mb-4">Marketing Leads</h3>
                            <p className="text-slate-600 leading-relaxed">
                                They found you on Google or clicked your ad. They don't know you yet. They're comparing you to 5 other builders. Half of them are just researching and won't be ready for months.
                            </p>
                        </div>
                    </div>

                    <div className="max-w-4xl mx-auto bg-purple-900 rounded-3xl p-8 md:p-12 text-white text-center relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-purple-600/30 rounded-full blur-3xl -mr-32 -mt-32"></div>
                        <div className="relative z-10">
                            <h3 className="text-2xl md:text-3xl font-bold mb-6">The Math That Matters</h3>
                            <p className="text-lg md:text-xl text-purple-100 mb-8 leading-relaxed">
                                Even at $50 per lead, 100 leads costs you $5,000. Close just ONE project—whether that's a $1.5M custom home or a $400K whole-home remodel—and you're making $100K to $300K in profit.
                            </p>
                            <div className="inline-block bg-white/10 backdrop-blur-md px-8 py-4 rounded-xl border border-white/20">
                                <span className="font-bold text-white">The Difference? Not better leads. Better systems.</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* The Problem: Memory Management */}
            <section className="py-24 bg-slate-50">
                <div className="container mx-auto px-6 max-w-6xl">
                    <div className="text-center mb-20">
                        <span className="text-purple-600 font-bold tracking-wider uppercase text-sm">The Real Problem</span>
                        <h2 className="text-3xl md:text-5xl font-serif font-bold text-slate-900 mt-2 mb-6">You're Managing 600+ Conversations <br /> Per Year With Your Memory</h2>
                    </div>

                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div className="bg-white p-8 md:p-12 rounded-3xl shadow-sm border border-red-100 relative overflow-hidden">
                            <div className="absolute top-0 left-0 w-full h-1 bg-red-500"></div>
                            <h3 className="text-2xl font-bold text-slate-900 mb-8">Without a System</h3>
                            <ul className="space-y-6">
                                {[
                                    "Leads scattered across email, texts, DMs",
                                    "You forget who needs a callback",
                                    "Missed follow-ups because you're busy",
                                    "Qualified prospects slip away"
                                ].map((item, i) => (
                                    <li key={i} className="flex items-start gap-4 text-slate-600">
                                        <div className="w-6 h-6 rounded-full bg-red-50 flex items-center justify-center text-red-500 shrink-0 mt-0.5">
                                            <X size={14} />
                                        </div>
                                        <span className="text-lg">{item}</span>
                                    </li>
                                ))}
                            </ul>
                            <div className="mt-10 pt-8 border-t border-slate-100">
                                <div className="flex items-end gap-2">
                                    <span className="text-5xl font-bold text-red-500 mb-[-6px]">0-1</span>
                                    <span className="text-slate-500 font-medium">closed per 10 leads</span>
                                </div>
                            </div>
                        </div>

                        <div className="bg-white p-8 md:p-12 rounded-3xl shadow-xl border border-green-100 relative overflow-hidden transform md:-translate-y-4">
                            <div className="absolute top-0 left-0 w-full h-1 bg-green-500"></div>
                            <h3 className="text-2xl font-bold text-slate-900 mb-8">With a System</h3>
                            <ul className="space-y-6">
                                {[
                                    "Every lead captured in one place",
                                    "Instant status of every deal",
                                    "Automated follow-up at right times",
                                    "Focus only on hot conversations"
                                ].map((item, i) => (
                                    <li key={i} className="flex items-start gap-4 text-slate-600">
                                        <div className="w-6 h-6 rounded-full bg-green-50 flex items-center justify-center text-green-500 shrink-0 mt-0.5">
                                            <CheckCircle size={14} />
                                        </div>
                                        <span className="text-lg">{item}</span>
                                    </li>
                                ))}
                            </ul>
                            <div className="mt-10 pt-8 border-t border-slate-100">
                                <div className="flex items-end gap-2">
                                    <span className="text-5xl font-bold text-green-500 mb-[-6px]">3-4</span>
                                    <span className="text-slate-500 font-medium">closed per 10 leads</span>
                                </div>
                                <p className="text-green-600 font-bold mt-4 text-sm uppercase tracking-wide">3-4x Revenue Multiplier</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* What We Build For You */}
            <section className="py-24 bg-white">
                <div className="container mx-auto px-6 max-w-6xl">
                    <div className="text-center mb-20">
                        <h2 className="text-3xl md:text-5xl font-serif font-bold text-slate-900 mb-6">What We Build For You</h2>
                        <p className="text-xl text-slate-500">A complete ecosystem to manage your sales pipeline.</p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[
                            {
                                title: "Qualification System",
                                desc: "Fast filtering process that screens prospects before they waste your time. Only qualified people with the right budget, timeline, and project scope get through.",
                                icon: <Filter size={32} className="text-blue-500" />
                            },
                            {
                                title: "Discovery Framework",
                                desc: "Structured first conversation that uncovers what they actually want, what's frustrating them, and gives you everything you need to present the right solution.",
                                icon: <MessageSquare size={32} className="text-purple-500" />
                            },
                            {
                                title: "Consultation Process",
                                desc: "How to run meetings that close. Not generic presentations—specific solutions tied to what they told you matters most.",
                                icon: <Users size={32} className="text-pink-500" />
                            },
                            {
                                title: "Early Payment Strategy",
                                desc: "Stop doing free work hoping they sign eventually. Get paid for design and planning upfront. It filters serious buyers and increases close rates.",
                                icon: <DollarSign size={32} className="text-green-500" />
                            },
                            {
                                title: "Pipeline Management",
                                desc: "Visual tracking showing every deal, what stage they're in, who needs follow-up, and total pipeline value. Review it weekly in 30 minutes.",
                                icon: <BarChart3 size={32} className="text-orange-500" />
                            },
                            {
                                title: "Implementation Support",
                                desc: "We don't just dump documents on you. We help you set it up, train your team, and ensure you're actually using the system daily.",
                                icon: <CheckSquare size={32} className="text-slate-500" />
                            }
                        ].map((feature, i) => (
                            <div key={i} className="group p-8 rounded-2xl border border-slate-200 bg-white hover:border-purple-200 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                                <div className="w-16 h-16 bg-slate-50 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                                    {feature.icon}
                                </div>
                                <h3 className="text-xl font-bold text-slate-900 mb-3">{feature.title}</h3>
                                <p className="text-slate-600 leading-relaxed">{feature.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Before vs After Detailed */}
            <section className="py-24 bg-slate-900 text-white">
                <div className="container mx-auto px-6 max-w-6xl">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <div>
                            <h2 className="text-3xl md:text-5xl font-serif font-bold mb-6">What Changes With A System</h2>
                            <p className="text-slate-400 text-lg leading-relaxed mb-8">
                                Same leads. Same person running sales. The system just keeps everything from falling apart.
                            </p>

                            <div className="space-y-8">
                                <div className="flex gap-4">
                                    <div className="w-10 h-10 rounded-full bg-purple-900/50 flex items-center justify-center text-purple-400 font-bold shrink-0">1</div>
                                    <div>
                                        <h4 className="font-bold text-white text-lg">Instant Qualification</h4>
                                        <p className="text-slate-400 mt-1">Lead comes in and is filtered within an hour. Only qualified ones move forward.</p>
                                    </div>
                                </div>
                                <div className="flex gap-4">
                                    <div className="w-10 h-10 rounded-full bg-purple-900/50 flex items-center justify-center text-purple-400 font-bold shrink-0">2</div>
                                    <div>
                                        <h4 className="font-bold text-white text-lg">Automated Scheduling</h4>
                                        <p className="text-slate-400 mt-1">Discovery calls get booked automatically without email tag.</p>
                                    </div>
                                </div>
                                <div className="flex gap-4">
                                    <div className="w-10 h-10 rounded-full bg-purple-900/50 flex items-center justify-center text-purple-400 font-bold shrink-0">3</div>
                                    <div>
                                        <h4 className="font-bold text-white text-lg">Contextual Meetings</h4>
                                        <p className="text-slate-400 mt-1">Every meeting is prepped with exactly what they told you they want.</p>
                                    </div>
                                </div>
                                <div className="flex gap-4">
                                    <div className="w-10 h-10 rounded-full bg-purple-900/50 flex items-center justify-center text-purple-400 font-bold shrink-0">4</div>
                                    <div>
                                        <h4 className="font-bold text-white text-lg">Paid Design</h4>
                                        <p className="text-slate-400 mt-1">Serious prospects pay for concept design, filtering out tire kickers.</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="bg-slate-800 rounded-3xl p-8 border border-slate-700">
                            <h3 className="text-2xl font-bold mb-8 text-center border-b border-slate-700 pb-4">Built For Long Sales Cycles</h3>
                            <p className="text-slate-300 text-center mb-8">Projects take 6-18 months. We handle the wait.</p>
                            <div className="space-y-4">
                                {[
                                    "Automated follow-up between conversations",
                                    "Milestone reminders (Land, Financing)",
                                    "Manual touch-points at key moments",
                                    "Documentation so you remember context",
                                    "Deal aging alerts"
                                ].map((item, i) => (
                                    <div key={i} className="flex items-center gap-3 bg-slate-900/50 p-4 rounded-xl border border-slate-700/50">
                                        <CheckCircle className="text-green-400 shrink-0" size={20} />
                                        <span className="text-slate-200">{item}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Implementation Timeline */}
            <section className="py-24 bg-white">
                <div className="container mx-auto px-6 max-w-6xl">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-5xl font-serif font-bold text-slate-900 mb-6">Implementation in 3 Weeks</h2>
                        <p className="text-xl text-slate-500">Rapid deployment so you can start closing.</p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        <div className="p-8 border border-slate-200 rounded-2xl bg-white relative hover:shadow-lg transition-shadow">
                            <div className="w-12 h-12 bg-slate-100 rounded-xl flex items-center justify-center font-bold text-slate-400 text-xl mb-6">1</div>
                            <h3 className="text-xl font-bold text-slate-900 mb-3">Process Mapping</h3>
                            <p className="text-slate-600 mb-4">We document your entire sales stage process, scripts, and frameworks.</p>
                            <span className="inline-block text-xs font-bold text-purple-600 bg-purple-50 px-3 py-1 rounded-full">Week 1</span>
                        </div>

                        <div className="p-8 border-2 border-purple-100 rounded-2xl bg-purple-50/50 relative hover:shadow-xl transition-shadow transform md:-translate-y-4">
                            <div className="absolute top-0 right-0 px-4 py-1 bg-purple-600 text-white text-xs font-bold uppercase rounded-bl-xl rounded-tr-xl">Most Work</div>
                            <div className="w-12 h-12 bg-purple-200 rounded-xl flex items-center justify-center font-bold text-purple-700 text-xl mb-6">2</div>
                            <h3 className="text-xl font-bold text-slate-900 mb-3">Pipeline Setup</h3>
                            <p className="text-slate-600 mb-4">Configuring the CRM, building dashboards, and setting up automation.</p>
                            <span className="inline-block text-xs font-bold text-purple-600 bg-white border border-purple-200 px-3 py-1 rounded-full">Week 2</span>
                        </div>

                        <div className="p-8 border border-slate-200 rounded-2xl bg-white relative hover:shadow-lg transition-shadow">
                            <div className="w-12 h-12 bg-slate-100 rounded-xl flex items-center justify-center font-bold text-slate-400 text-xl mb-6">3</div>
                            <h3 className="text-xl font-bold text-slate-900 mb-3">Training & Launch</h3>
                            <p className="text-slate-600 mb-4">Handing off the system and training your team on daily execution.</p>
                            <span className="inline-block text-xs font-bold text-purple-600 bg-purple-50 px-3 py-1 rounded-full">Week 3</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* FAQ */}
            <section className="py-24 bg-slate-50">
                <div className="container mx-auto px-6 max-w-3xl">
                    <h2 className="text-3xl font-serif font-bold text-slate-900 mb-12 text-center">Questions?</h2>
                    <div className="space-y-4">
                        {[
                            { q: "Is this sales training?", a: "No. We're building you frameworks and systems. Documentation your team follows. Not coaching calls." },
                            { q: "Will this work if my close rate on referrals is already good?", a: "That's common. Referrals are easy to close. This is for when you start marketing and your close rate tanks because cold leads are different. This system fixes that gap." },
                            { q: "Do I need your CRM service too?", a: "Most builders get both. CRM is the technology. Sales Process is the frameworks. They work together but can be purchased separately." },
                            { q: "What if I'm doing sales myself?", a: "Perfect. This system frees your time by filtering bad leads and automating follow-up so you only focus on real conversations." },
                            { q: "How is this different from hiring a sales consultant?", a: "Consultants talk. We build. You get actual documentation, pipeline setup, automation configured, and systems ready to execute. Not advice—implementation." }
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
                    <h2 className="text-4xl font-serif font-bold mb-6">Stop Losing Deals to Chaos</h2>
                    <p className="text-xl text-slate-400 mb-10">
                        If qualified leads are slipping away because you don't have systems, let's fix that.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link to="/contact" className="inline-flex items-center bg-purple-600 hover:bg-purple-700 text-white px-8 py-4 rounded-full font-bold transition-all hover:scale-105 shadow-[0_0_20px_rgba(168,85,247,0.3)]">
                            Schedule Strategy Call <ArrowRight className="ml-2" />
                        </Link>
                        <Link to="/case-studies" className="inline-flex items-center border border-slate-600 hover:bg-slate-800 text-white px-8 py-4 rounded-full font-bold transition-all">
                            See Results
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default SalesProcesses;
