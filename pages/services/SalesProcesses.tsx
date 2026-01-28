import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle, ArrowRight, XCircle, Clock, DollarSign, BarChart3, ChevronDown, ChevronUp, AlertCircle } from 'lucide-react';

const SalesProcesses: React.FC = () => {
    const [openFaq, setOpenFaq] = useState<number | null>(null);

    const toggleFaq = (index: number) => {
        setOpenFaq(openFaq === index ? null : index);
    };

    return (
        <div className="bg-white">
            {/* Hero Section */}
            <section className="relative pt-32 pb-20 bg-slate-900 text-white overflow-hidden">
                <div className="absolute inset-0 bg-[#0B1120]"></div>
                <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 to-blue-900/20"></div>

                <div className="container mx-auto px-6 relative z-10">
                    <div className="max-w-4xl mx-auto text-center">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-300 text-sm font-medium mb-6">
                            <span className="w-2 h-2 rounded-full bg-purple-400 animate-pulse"></span>
                            Sales Pipeline Systems
                        </div>
                        <h1 className="text-4xl md:text-6xl font-serif font-bold mb-6 leading-tight">
                            Complete Sales Pipeline Systems For <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">Custom Home Builders & Remodelers</span>
                        </h1>
                        <p className="text-xl text-slate-300 mb-10 max-w-2xl mx-auto leading-relaxed">
                            Stop losing qualified leads because you forgot to follow up. Build a systematic sales process that closes 3-4x more deals from the same traffic.
                        </p>
                        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                            <Link to="/contact" className="px-8 py-4 bg-white text-slate-900 rounded-full font-bold hover:bg-slate-100 transition-colors flex items-center gap-2">
                                Start Your Project <ArrowRight size={18} />
                            </Link>
                            <Link to="/case-studies" className="px-8 py-4 bg-transparent border border-slate-700 text-white rounded-full font-bold hover:bg-white/5 transition-colors">
                                View Examples
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* The Gap Section */}
            <section className="py-24 bg-white">
                <div className="container mx-auto px-6 max-w-4xl">
                    <h2 className="text-3xl font-serif font-bold text-slate-900 mb-8">Why Your Marketing Leads Aren't Closing Like Your Referrals</h2>
                    <div className="prose prose-lg text-slate-600">
                        <p className="mb-6">
                            Referrals close at 30-40%. Marketing leads close at 1%.
                        </p>
                        <p className="mb-6">
                            You see that gap and think "marketing doesn't work for builders."
                        </p>
                        <p className="font-bold text-slate-900 mb-4">Here's what's actually happening:</p>
                        <div className="grid md:grid-cols-2 gap-8 mb-8">
                            <div className="bg-slate-50 p-6 rounded-xl border border-slate-100">
                                <h3 className="font-bold text-slate-900 mb-2 flex items-center gap-2">
                                    <CheckCircle className="text-green-500" size={20} /> Referrals
                                </h3>
                                <p className="text-sm">Close like crazy because someone the prospect already trusts vouched for you. They show up ready to move forward. Fewer objections. More flexible on price. Faster decisions.</p>
                            </div>
                            <div className="bg-slate-50 p-6 rounded-xl border border-slate-100">
                                <h3 className="font-bold text-slate-900 mb-2 flex items-center gap-2">
                                    <XCircle className="text-red-500" size={20} /> Marketing Leads
                                </h3>
                                <p className="text-sm">They found you on Google or clicked your ad. They don't know you yet. They're comparing you to 5 other builders. Half of them are just researching and won't be ready for months.</p>
                            </div>
                        </div>
                        <p className="mb-6">
                            A 1% close rate on cold traffic is normal. Actually, it's healthy.
                        </p>
                        <div className="bg-purple-50 p-8 rounded-2xl border border-purple-100 my-8">
                            <h3 className="text-xl font-bold text-purple-900 mb-4 flex items-center gap-2">
                                <DollarSign className="text-purple-600" /> The Math That Matters
                            </h3>
                            <p className="text-purple-800 mb-0">
                                Even at $50 per lead, 100 leads costs you $5,000. Close just ONE project—whether that's a $1.5M custom home or a $400K whole-home remodel—and you're making $100K to $500K in profit. The economics work even if lead costs go way up.
                            </p>
                        </div>
                        <p className="mb-6">
                            So why do most builders give up on marketing? They expect cold traffic to behave like referrals. They run ads for 2 months, don't close anything immediately, and shut it down.
                        </p>
                        <p className="mb-6">
                            The builders who win? They understand timelines are long. They know tire kickers come with the territory. And they have systems that manage hundreds of conversations without relying on memory and sticky notes.
                        </p>
                        <p className="font-bold text-slate-900">
                            That's the difference. Not better leads. Better systems.
                        </p>
                    </div>
                </div>
            </section>

            {/* The Problem: Memory Management */}
            <section className="py-24 bg-slate-50">
                <div className="container mx-auto px-6 max-w-5xl">
                    <div className="text-center mb-16">
                        <span className="text-purple-600 font-bold tracking-wider uppercase text-sm">The Real Problem</span>
                        <h2 className="text-3xl md:text-4xl font-serif font-bold text-slate-900 mt-2">You're Managing 600+ Conversations Per Year With Your Memory</h2>
                        <p className="text-slate-600 mt-4 max-w-2xl mx-auto">
                            If you're generating 50 leads per month, that's 600 conversations over a year. Some are qualified. Some aren't. Some are ready now. Some are 8 months out.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200 relative overflow-hidden">
                            <div className="absolute top-0 left-0 w-full h-1 bg-red-500"></div>
                            <h3 className="text-2xl font-bold text-slate-900 mb-6">Without a System</h3>
                            <ul className="space-y-4">
                                <li className="flex items-start gap-3 text-slate-600">
                                    <XCircle className="text-red-500 shrink-0 mt-1" size={18} />
                                    <span>They're scattered across email, texts, Instagram DMs, sticky notes</span>
                                </li>
                                <li className="flex items-start gap-3 text-slate-600">
                                    <XCircle className="text-red-500 shrink-0 mt-1" size={18} />
                                    <span>You forget who's who when they call back</span>
                                </li>
                                <li className="flex items-start gap-3 text-slate-600">
                                    <XCircle className="text-red-500 shrink-0 mt-1" size={18} />
                                    <span>You miss follow-ups because you're busy running jobs</span>
                                </li>
                                <li className="flex items-start gap-3 text-slate-600">
                                    <XCircle className="text-red-500 shrink-0 mt-1" size={18} />
                                    <span>Qualified prospects slip away because someone else stayed organized</span>
                                </li>
                            </ul>
                            <div className="mt-8 pt-8 border-t border-slate-100">
                                <div className="text-sm font-bold text-slate-500 uppercase mb-2">Result</div>
                                <p className="text-lg font-bold text-slate-900">You close <span className="text-red-600">0-1</span> out of every 10 qualified leads.</p>
                            </div>
                        </div>

                        <div className="bg-white p-8 rounded-2xl shadow-xl border border-purple-100 relative overflow-hidden transform md:-translate-y-4">
                            <div className="absolute top-0 left-0 w-full h-1 bg-green-500"></div>
                            <h3 className="text-2xl font-bold text-slate-900 mb-6">With a System</h3>
                            <ul className="space-y-4">
                                <li className="flex items-start gap-3 text-slate-600">
                                    <CheckCircle className="text-green-500 shrink-0 mt-1" size={18} />
                                    <span>Every lead captured in one place automatically</span>
                                </li>
                                <li className="flex items-start gap-3 text-slate-600">
                                    <CheckCircle className="text-green-500 shrink-0 mt-1" size={18} />
                                    <span>You know exactly where each deal stands</span>
                                </li>
                                <li className="flex items-start gap-3 text-slate-600">
                                    <CheckCircle className="text-green-500 shrink-0 mt-1" size={18} />
                                    <span>Follow-up happens automatically at the right times</span>
                                </li>
                                <li className="flex items-start gap-3 text-slate-600">
                                    <CheckCircle className="text-green-500 shrink-0 mt-1" size={18} />
                                    <span>You only focus on the conversations that need your personal attention</span>
                                </li>
                            </ul>
                            <div className="mt-8 pt-8 border-t border-slate-100">
                                <div className="text-sm font-bold text-slate-500 uppercase mb-2">Result</div>
                                <p className="text-lg font-bold text-slate-900">You close <span className="text-green-600">3-4</span> out of every 10 qualified leads.</p>
                                <p className="text-sm text-purple-600 font-bold mt-2">That's 3-4x more revenue from the exact same spend.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* What We Build */}
            <section className="py-24 bg-white">
                <div className="container mx-auto px-6 max-w-5xl">
                    <h2 className="text-3xl font-serif font-bold text-slate-900 mb-16 text-center">What We Build For You</h2>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[
                            {
                                title: "Qualification System",
                                desc: "Fast filtering process that screens prospects before they waste your time. Only qualified people with the right budget, timeline, and project scope get through to real conversations.",
                                icon: Filter
                            },
                            {
                                title: "Discovery Framework",
                                desc: "Structured first conversation that uncovers what they actually want, what's frustrating them, and gives you everything you need to present the right solution.",
                                icon: MessageSquare
                            },
                            {
                                title: "Consultation Process",
                                desc: "How to run meetings that close. Not generic presentations—specific solutions tied to what they told you matters most.",
                                icon: Users
                            },
                            {
                                title: "Early Payment Strategy",
                                desc: "Stop doing free work hoping they sign eventually. Get paid for design and planning upfront. It filters serious buyers and increases close rates dramatically.",
                                icon: DollarSign
                            },
                            {
                                title: "Pipeline Management",
                                desc: "Visual tracking showing every deal, what stage they're in, who needs follow-up, what's stalled, and your total pipeline value. Review it weekly in 30 minutes.",
                                icon: BarChart3
                            }
                        ].map((feature, i) => (
                            <div key={i} className="p-6 rounded-xl border border-slate-100 bg-slate-50 hover:shadow-lg transition-shadow">
                                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center text-purple-600 mb-6">
                                    <feature.icon size={24} />
                                </div>
                                <h3 className="text-xl font-bold text-slate-900 mb-3">{feature.title}</h3>
                                <p className="text-slate-600 text-sm leading-relaxed">{feature.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Before vs After Detailed */}
            <section className="py-24 bg-slate-900 text-white">
                <div className="container mx-auto px-6 max-w-5xl">
                    <h2 className="text-3xl font-serif font-bold mb-12 text-center">What Changes When You Have This</h2>
                    <div className="grid md:grid-cols-2 gap-px bg-slate-700 rounded-2xl overflow-hidden border border-slate-700">
                        <div className="p-10 bg-[#0F172A]">
                            <h3 className="text-xl font-bold text-red-400 mb-6 uppercase tracking-wider text-sm">Before System</h3>
                            <div className="space-y-6 relative">
                                <div className="absolute left-[11px] top-2 bottom-2 w-0.5 bg-slate-800"></div>
                                <div className="relative flex items-center gap-4 text-slate-400">
                                    <div className="w-6 h-6 rounded-full bg-slate-800 border border-slate-700 flex items-center justify-center text-xs shrink-0">1</div>
                                    <p>Qualified lead comes in</p>
                                </div>
                                <div className="relative flex items-center gap-4 text-slate-400">
                                    <div className="w-6 h-6 rounded-full bg-slate-800 border border-slate-700 flex items-center justify-center text-xs shrink-0">2</div>
                                    <p>You respond when you remember</p>
                                </div>
                                <div className="relative flex items-center gap-4 text-slate-400">
                                    <div className="w-6 h-6 rounded-full bg-slate-800 border border-slate-700 flex items-center justify-center text-xs shrink-0">3</div>
                                    <p>Have conversation, forget to follow up</p>
                                </div>
                                <div className="relative flex items-center gap-4 text-slate-400">
                                    <div className="w-6 h-6 rounded-full bg-slate-800 border border-slate-700 flex items-center justify-center text-xs shrink-0">4</div>
                                    <p>Three months later they sign with competitor</p>
                                </div>
                            </div>
                        </div>

                        <div className="p-10 bg-slate-800/50">
                            <h3 className="text-xl font-bold text-green-400 mb-6 uppercase tracking-wider text-sm">After System</h3>
                            <div className="space-y-6 relative">
                                <div className="absolute left-[11px] top-2 bottom-2 w-0.5 bg-green-500/20"></div>
                                <div className="relative flex items-center gap-4 text-white">
                                    <div className="w-6 h-6 rounded-full bg-green-500 flex items-center justify-center text-xs font-bold text-slate-900 shrink-0">1</div>
                                    <p>Lead comes in, qualification happens within an hour</p>
                                </div>
                                <div className="relative flex items-center gap-4 text-white">
                                    <div className="w-6 h-6 rounded-full bg-green-500 flex items-center justify-center text-xs font-bold text-slate-900 shrink-0">2</div>
                                    <p>They're filtered and only qualified ones move forward</p>
                                </div>
                                <div className="relative flex items-center gap-4 text-white">
                                    <div className="w-6 h-6 rounded-full bg-green-500 flex items-center justify-center text-xs font-bold text-slate-900 shrink-0">3</div>
                                    <p>Discovery call gets scheduled automatically</p>
                                </div>
                                <div className="relative flex items-center gap-4 text-white">
                                    <div className="w-6 h-6 rounded-full bg-green-500 flex items-center justify-center text-xs font-bold text-slate-900 shrink-0">4</div>
                                    <p>Meetings prepped with full context</p>
                                </div>
                                <div className="relative flex items-center gap-4 text-white">
                                    <div className="w-6 h-6 rounded-full bg-green-500 flex items-center justify-center text-xs font-bold text-slate-900 shrink-0">5</div>
                                    <p>System tracks milestones & reminders</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Long Sales Cycle & Math */}
            <section className="py-24 bg-white">
                <div className="container mx-auto px-6 max-w-4xl">
                    <div className="mb-16">
                        <h2 className="text-3xl font-serif font-bold text-slate-900 mb-6">Built For The Reality of Long Sales Cycles</h2>
                        <p className="text-lg text-slate-600 mb-8">
                            Projects take 6-18 months from inquiry to signed contract. That's just reality. Your system needs to handle that without you manually remembering everyone.
                        </p>
                        <div className="bg-slate-50 p-6 rounded-xl border border-slate-100">
                            <h4 className="font-bold text-slate-900 mb-4">We build:</h4>
                            <ul className="grid sm:grid-cols-2 gap-4">
                                {[
                                    "Automated follow-up between conversations",
                                    "Milestone reminders based on their timeline",
                                    "Manual touch-points at key moments",
                                    "Context documentation for every lead"
                                ].map((item, i) => (
                                    <li key={i} className="flex items-start gap-2 text-slate-600 text-sm">
                                        <CheckCircle size={16} className="text-purple-600 shrink-0 mt-0.5" />
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                            <p className="text-slate-500 text-sm mt-6 italic">This keeps deals alive while your competitors forget about people after one conversation.</p>
                        </div>
                    </div>

                    <div className="bg-purple-900 text-white rounded-3xl p-10 md:p-16 text-center">
                        <h2 className="text-3xl font-serif font-bold mb-6">The Math That Makes This Worth It</h2>
                        <p className="text-xl text-purple-200 mb-8 max-w-2xl mx-auto">
                            One additional project pays for this entire system multiple times over.
                        </p>
                        <div className="bg-white/10 rounded-xl p-8 backdrop-blur-sm max-w-2xl mx-auto mb-8">
                            <p className="text-lg font-medium leading-relaxed">
                                If this system helps you close just <span className="text-white font-bold">2 more deals per year</span> that you would have otherwise lost to disorganization, and those deals are worth $1M each with $200K profit...
                            </p>
                            <div className="text-4xl font-bold text-green-400 mt-6 md:mt-4">
                                +$400,000 Profit
                            </div>
                        </div>
                        <p className="text-purple-300">The system costs a fraction of one project. And works for years.</p>
                    </div>
                </div>
            </section>

            {/* What You Get / Timeline */}
            <section className="py-24 bg-slate-50">
                <div className="container mx-auto px-6 max-w-5xl">
                    <div className="grid md:grid-cols-2 gap-16">
                        <div>
                            <h2 className="text-3xl font-serif font-bold text-slate-900 mb-8">What You Get</h2>
                            <div className="space-y-8">
                                <div>
                                    <div className="flex items-center gap-3 mb-2">
                                        <div className="w-8 h-8 rounded-full bg-purple-100 flex items-center justify-center text-purple-600 font-bold">1</div>
                                        <h3 className="text-xl font-bold text-slate-900">Complete Process Documentation</h3>
                                    </div>
                                    <p className="text-slate-600 pl-11">Frameworks for every stage. Scripts that work. Structures your team follows. Everything documented so execution is consistent.</p>
                                </div>
                                <div>
                                    <div className="flex items-center gap-3 mb-2">
                                        <div className="w-8 h-8 rounded-full bg-purple-100 flex items-center justify-center text-purple-600 font-bold">2</div>
                                        <h3 className="text-xl font-bold text-slate-900">Pipeline Setup</h3>
                                    </div>
                                    <p className="text-slate-600 pl-11">CRM configured with your sales stages. Dashboards. Tracking. Team training. Ready to use day one.</p>
                                </div>
                                <div>
                                    <div className="flex items-center gap-3 mb-2">
                                        <div className="w-8 h-8 rounded-full bg-purple-100 flex items-center justify-center text-purple-600 font-bold">3</div>
                                        <h3 className="text-xl font-bold text-slate-900">Automation & Follow-Up</h3>
                                    </div>
                                    <p className="text-slate-600 pl-11">Sequences for each stage. Reminders when deals need attention. Your team knows exactly what to do and when.</p>
                                </div>
                            </div>
                        </div>
                        <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200">
                            <h3 className="text-xl font-bold text-slate-900 mb-6">Implementation in 3 Weeks</h3>
                            <div className="space-y-6 relative">
                                <div className="absolute left-[15px] top-4 bottom-4 w-0.5 bg-slate-100"></div>
                                <div className="relative flex items-start gap-4">
                                    <div className="w-8 h-8 rounded-full bg-slate-900 text-white flex items-center justify-center text-sm font-bold shrink-0 z-10">W1</div>
                                    <div>
                                        <h4 className="font-bold text-slate-900">Process Mapping</h4>
                                        <p className="text-sm text-slate-500">Documentation & Strategy</p>
                                    </div>
                                </div>
                                <div className="relative flex items-start gap-4">
                                    <div className="w-8 h-8 rounded-full bg-slate-900 text-white flex items-center justify-center text-sm font-bold shrink-0 z-10">W2</div>
                                    <div>
                                        <h4 className="font-bold text-slate-900">Pipeline Setup</h4>
                                        <p className="text-sm text-slate-500">Configuration & Automation</p>
                                    </div>
                                </div>
                                <div className="relative flex items-start gap-4">
                                    <div className="w-8 h-8 rounded-full bg-slate-900 text-white flex items-center justify-center text-sm font-bold shrink-0 z-10">W3</div>
                                    <div>
                                        <h4 className="font-bold text-slate-900">Training & Launch</h4>
                                        <p className="text-sm text-slate-500">Team Handoff</p>
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
                            { q: "Is this sales training?", a: "No. We're building you frameworks and systems. Documentation your team follows. Not coaching calls." },
                            { q: "Will this work if my close rate on referrals is already good?", a: "That's common. Referrals are easy to close. This is for when you start marketing and your close rate tanks because cold leads are different. This system fixes that gap." },
                            { q: "Do I need your CRM service too?", a: "Most builders get both. CRM is the technology. Sales Process is the frameworks. They work together but can be purchased separately." },
                            { q: "What if I'm doing sales myself?", a: "Perfect. This system frees your time by filtering bad leads and automating follow-up so you only focus on real conversations." },
                            { q: "How is this different from hiring a sales consultant?", a: "Consultants talk. We build. You get actual documentation, pipeline setup, automation configured, and systems ready to execute. Not advice—implementation." }
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
                <div className="container mx-auto px-6 max-w-3xl">
                    <h2 className="text-4xl font-serif font-bold mb-6">Stop Losing Deals to Chaos</h2>
                    <p className="text-xl text-slate-300 mb-10">
                        If qualified leads are slipping away because you don't have systems, let's fix that.
                    </p>
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                        <Link
                            to="/contact"
                            className="px-8 py-5 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 text-white font-bold text-lg hover:shadow-lg hover:shadow-purple-500/25 transition-all w-full sm:w-auto"
                        >
                            Schedule Strategy Call
                        </Link>
                        <Link
                            to="/case-studies"
                            className="px-8 py-5 rounded-full bg-white text-slate-900 font-bold text-lg hover:bg-slate-100 transition-all w-full sm:w-auto"
                        >
                            See Pipeline Demo
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
};

// Icon imports for the features section
import { Filter, MessageSquare, Users } from 'lucide-react';

export default SalesProcesses;
