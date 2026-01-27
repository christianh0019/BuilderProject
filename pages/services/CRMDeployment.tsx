import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, X, ChevronDown, ChevronUp, Database, Users, TrendingUp, BarChart2, Mail, MessageSquare, Briefcase, Calendar, PenTool, Filter } from 'lucide-react';



const CRMDeployment: React.FC = () => {
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
                <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-purple-900/10 rounded-full blur-[100px] pointer-events-none mix-blend-screen"></div>

                <div className="container mx-auto px-6 relative z-10">
                    <div className="max-w-7xl mx-auto text-center mb-20">
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-900/30 border border-purple-500/30 mb-8 backdrop-blur-sm">
                            <span className="flex h-2 w-2 rounded-full bg-purple-400 animate-pulse"></span>
                            <span className="text-sm font-medium text-purple-200 uppercase tracking-widest">Pipeline Management</span>
                        </div>

                        <h1 className="text-5xl md:text-7xl font-serif font-bold mb-8 leading-tight tracking-tight">
                            CRM Deployment & Pipeline Management
                            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 mt-2">For Custom Home Builders & Remodelers</span>
                        </h1>

                        <p className="text-xl md:text-2xl text-slate-300 mb-10 max-w-3xl mx-auto leading-relaxed font-light">
                            Stop losing deals because leads fell through the cracks. Capture every lead, nurture them automatically, and close 3-4x more deals from the same traffic.
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
                                <div className="bg-slate-950 rounded-lg overflow-hidden aspect-[16/9] relative flex items-center justify-center">
                                    {/* Placeholder for CRM Dashboard Image */}
                                    <div className="text-center p-12">
                                        <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-purple-900/30 text-purple-400 mb-6 animate-pulse">
                                            <BarChart2 size={40} />
                                        </div>
                                        <h3 className="text-2xl font-bold text-slate-300 mb-2">Interactive CRM Dashboard</h3>
                                        <p className="text-slate-500">Visual pipeline tracking every deal stage</p>
                                    </div>
                                    <div className="absolute inset-0 bg-gradient-to-tr from-purple-500/5 to-transparent pointer-events-none"></div>
                                </div>
                            </div>
                        </div>
                        {/* Abstract background glow */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-full bg-purple-500/10 blur-[120px] -z-10 rounded-full pointer-events-none"></div>
                    </div>
                </div>
            </section>

            {/* The Problem: Leads Everywhere */}
            <section className="py-24 bg-white">
                <div className="container mx-auto px-6">
                    <div className="max-w-4xl mx-auto text-center mb-20">
                        <h2 className="text-3xl md:text-5xl font-serif font-bold text-slate-900 mb-6">
                            You're Generating Leads. <br />Where Are They Going?
                        </h2>
                        <p className="text-xl text-slate-600 leading-relaxed max-w-3xl mx-auto">
                            Email inbox. Text messages. Instagram DMs. Sticky notes. Phone calls you forgot to log.
                            <br /><br />
                            Leads are scattered everywhere. And you have no idea who needs follow-up, who's qualified, or who fell through the cracks.
                        </p>
                    </div>

                    <div className="max-w-5xl mx-auto bg-slate-50 rounded-3xl p-8 md:p-12 border border-slate-200 relative overflow-hidden">
                        <div className="absolute top-0 right-0 p-12 opacity-5">
                            <X size={200} className="text-slate-900" />
                        </div>

                        <div className="relative z-10 grid md:grid-cols-2 gap-12 items-center">
                            <div>
                                <h3 className="text-2xl font-bold text-slate-900 mb-4">The Reality Check</h3>
                                <p className="text-slate-600 mb-6 leading-relaxed">
                                    If you're generating 50-100 leads per month, that's 600-1200 conversations per year. No human can remember all of that.
                                </p>
                                <p className="text-slate-600 leading-relaxed mb-8">
                                    So what happens? You forget to follow up. Leads go cold. They sign with another builder who did stay organized. And you're left wondering why your close rate is so low.
                                </p>
                                <div className="inline-block bg-white px-6 py-3 rounded-xl border border-slate-200 shadow-sm font-bold text-slate-800">
                                    It's not your leads. It's your system.
                                </div>
                            </div>
                            <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100">
                                <h4 className="font-bold text-slate-400 uppercase tracking-wider text-xs mb-6">The Cost of Chaos</h4>
                                <div className="space-y-6">
                                    <div>
                                        <div className="flex justify-between mb-2">
                                            <span className="font-bold text-slate-700">Without a CRM</span>
                                            <span className="text-red-500 font-bold">0-1 Closed</span>
                                        </div>
                                        <div className="w-full bg-slate-100 rounded-full h-2">
                                            <div className="bg-red-400 h-2 rounded-full w-[10%]"></div>
                                        </div>
                                        <p className="text-xs text-slate-500 mt-2">10 qualified leads per month. Most get lost.</p>
                                    </div>
                                    <div>
                                        <div className="flex justify-between mb-2">
                                            <span className="font-bold text-slate-900">With Proper System</span>
                                            <span className="text-green-600 font-bold">3-4 Closed</span>
                                        </div>
                                        <div className="w-full bg-slate-100 rounded-full h-2">
                                            <div className="bg-green-500 h-2 rounded-full w-[40%]"></div>
                                        </div>
                                        <p className="text-xs text-slate-500 mt-2">Same 10 leads. Nothing falls through cracks.</p>
                                    </div>
                                </div>
                                <div className="mt-8 pt-6 border-t border-slate-100 text-center">
                                    <p className="font-bold text-slate-800">
                                        3x more revenue from same traffic.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* What You Actually Need */}
            <section className="py-24 bg-slate-900 text-white relative overflow-hidden">
                {/* Background Accents */}
                <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-purple-500 to-transparent opacity-20"></div>

                <div className="container mx-auto px-6 relative z-10">
                    <div className="text-center mb-20">
                        <h2 className="text-3xl md:text-5xl font-serif font-bold mb-6">What You Actually Need</h2>
                        <p className="text-xl text-slate-400">Most builders think they need "a CRM." What you actually need is a complete lead management system.</p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {[
                            {
                                icon: <Database className="text-purple-400" size={32} />,
                                title: "Lead Capture",
                                desc: "Every website form, call, text, and DM flows into one central system automatically."
                            },
                            {
                                icon: <Mail className="text-purple-400" size={32} />,
                                title: "Automated Nurture",
                                desc: "Email sequences keep you in front of prospects for 6-12 months without you lifting a finger."
                            },
                            {
                                icon: <TrendingUp className="text-green-400" size={32} />,
                                title: "Pipeline Management",
                                desc: "Visual dashboard showing exactly where every deal is. Who needs follow-up, who's ready to sign."
                            },
                            {
                                icon: <BarChart2 className="text-orange-400" size={32} />,
                                title: "Analytics That Matter",
                                desc: "Know your cost per lead, ROI by channel, and close rates based on hard data."
                            }
                        ].map((feature, i) => (
                            <div key={i} className="bg-slate-800 p-8 rounded-2xl border border-slate-700 hover:border-purple-500/30 transition-colors group">
                                <div className="w-16 h-16 bg-slate-900 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                                    {feature.icon}
                                </div>
                                <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                                <p className="text-slate-400 leading-relaxed text-sm">{feature.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* See It In Action */}
            <section className="py-24 bg-white">
                <div className="container mx-auto px-6 max-w-6xl">
                    <h2 className="text-3xl md:text-5xl font-serif font-bold text-slate-900 mb-16 text-center">See It In Action</h2>

                    <div className="space-y-24">
                        {/* Feature 1 */}
                        <div className="grid md:grid-cols-2 gap-12 items-center">
                            <div className="order-2 md:order-1">
                                <div className="bg-slate-50 rounded-2xl p-2 border border-slate-200 shadow-lg -rotate-1 hover:rotate-0 transition-transform duration-500">
                                    <div className="aspect-[4/3] bg-white rounded-xl overflow-hidden relative">
                                        <div className="absolute inset-0 flex items-center justify-center text-slate-300">
                                            <Users size={64} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="order-1 md:order-2">
                                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center text-purple-600 font-bold mb-6">01</div>
                                <h3 className="text-3xl font-bold text-slate-900 mb-4">Lead Capture Dashboard</h3>
                                <p className="text-slate-600 text-lg leading-relaxed mb-6">
                                    All leads in one place. Tagged with source, qualification status, and stage in your pipeline. Never lose a sticky note again.
                                </p>
                                <Link to="#" className="text-purple-600 font-bold hover:text-purple-800 flex items-center gap-2">
                                    View Example <ArrowRight size={16} />
                                </Link>
                            </div>
                        </div>

                        {/* Feature 2 */}
                        <div className="grid md:grid-cols-2 gap-12 items-center">
                            <div>
                                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center text-purple-600 font-bold mb-6">02</div>
                                <h3 className="text-3xl font-bold text-slate-900 mb-4">Automated Nurture Sequence</h3>
                                <p className="text-slate-600 text-lg leading-relaxed mb-6">
                                    6-month email campaign that goes out automatically. Educational content, project showcases, moving them toward booking.
                                </p>
                                <Link to="#" className="text-purple-600 font-bold hover:text-purple-800 flex items-center gap-2">
                                    View Example <ArrowRight size={16} />
                                </Link>
                            </div>
                            <div>
                                <div className="bg-slate-50 rounded-2xl p-2 border border-slate-200 shadow-lg rotate-1 hover:rotate-0 transition-transform duration-500">
                                    <div className="aspect-[4/3] bg-white rounded-xl overflow-hidden relative">
                                        <div className="absolute inset-0 flex items-center justify-center text-slate-300">
                                            <Mail size={64} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Feature 3 */}
                        <div className="grid md:grid-cols-2 gap-12 items-center">
                            <div className="order-2 md:order-1">
                                <div className="bg-slate-50 rounded-2xl p-2 border border-slate-200 shadow-lg -rotate-1 hover:rotate-0 transition-transform duration-500">
                                    <div className="aspect-[4/3] bg-white rounded-xl overflow-hidden relative">
                                        <div className="absolute inset-0 flex items-center justify-center text-slate-300">
                                            <TrendingUp size={64} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="order-1 md:order-2">
                                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center text-green-600 font-bold mb-6">03</div>
                                <h3 className="text-3xl font-bold text-slate-900 mb-4">Pipeline Visual</h3>
                                <p className="text-slate-600 text-lg leading-relaxed mb-6">
                                    See every deal at a glance. What stage they're in, what they're worth, what needs to happen next. No more guessing game on Monday morning.
                                </p>
                                <Link to="#" className="text-green-600 font-bold hover:text-green-800 flex items-center gap-2">
                                    View Example <ArrowRight size={16} />
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Why Most Builders Can't Close */}
            <section className="py-24 bg-slate-50">
                <div className="container mx-auto px-6 max-w-5xl">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-5xl font-serif font-bold text-slate-900 mb-6">Why Most Builders Can't Close Leads</h2>
                        <p className="text-xl text-slate-600">The difference is a system. Not hustle. Not memory.</p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8">
                        <div className="bg-white p-8 rounded-2xl shadow-sm border border-red-100">
                            <div className="text-red-500 font-bold uppercase tracking-wider text-sm mb-6 flex items-center gap-2">
                                <X size={16} /> What Kills Deals
                            </div>
                            <ul className="space-y-4">
                                {[
                                    "Slow response time (they called 3 others)",
                                    "Forgetting to follow up",
                                    "Inconsistent communication",
                                    "No tracking (who was that again?)",
                                    "Treating every lead the same"
                                ].map((item, i) => (
                                    <li key={i} className="flex gap-3 text-slate-600">
                                        <div className="w-1.5 h-1.5 bg-red-400 rounded-full mt-2 shrink-0"></div>
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="bg-white p-8 rounded-2xl shadow-lg border border-green-100 relative overflow-hidden">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-green-500/5 rounded-full blur-3xl pointer-events-none"></div>
                            <div className="text-green-600 font-bold uppercase tracking-wider text-sm mb-6 flex items-center gap-2">
                                <CheckCircle size={16} /> What Closes Deals
                            </div>
                            <ul className="space-y-4">
                                {[
                                    "Instant response (automated text)",
                                    "Consistent nurture (months of value)",
                                    "Personal touches at key moments",
                                    "Complete tracking of every conversation",
                                    "Smart segmentation (focus on qualified)"
                                ].map((item, i) => (
                                    <li key={i} className="flex gap-3 text-slate-800 font-medium">
                                        <CheckCircle size={16} className="text-green-500 mt-0.5 shrink-0" />
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* Builder Specifics */}
            <section className="py-24 bg-slate-900 text-white">
                <div className="container mx-auto px-6 max-w-6xl">
                    <div className="grid md:grid-cols-2 gap-16 items-center">
                        <div>
                            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">Built For Builders, Not Generic Business</h2>
                            <p className="text-slate-400 text-lg leading-relaxed mb-8">
                                Most CRMs are built for sales teams selling software. You're selling custom homes with 6-12 month sales cycles. We configure yours specifically for this industry.
                            </p>

                            <div className="space-y-8">
                                <div>
                                    <h4 className="text-xl font-bold text-white mb-2 flex items-center gap-2">
                                        <Briefcase size={20} className="text-purple-400" /> Custom Pipeline Stages
                                    </h4>
                                    <p className="text-slate-400 text-sm">
                                        New Lead → Contacted → Qualified → Discovery Call → Proposal Sent → Contract Signed → Project Started
                                    </p>
                                </div>
                                <div>
                                    <h4 className="text-xl font-bold text-white mb-2 flex items-center gap-2">
                                        <MessageSquare size={20} className="text-pink-400" /> Builder-Specific Automations
                                    </h4>
                                    <p className="text-slate-400 text-sm">
                                        Nurture sequences for long cycles. Milestone reminders (land acquisition, financing checks).
                                    </p>
                                </div>
                                <div>
                                    <h4 className="text-xl font-bold text-white mb-2 flex items-center gap-2">
                                        <Filter size={20} className="text-purple-400" /> Qualification Workflows
                                    </h4>
                                    <p className="text-slate-400 text-sm">
                                        Automatic tagging based on budget/timeline. Hot leads flagged. Cold leads filtered.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="bg-slate-800/50 rounded-2xl p-8 border border-slate-700">
                            <h3 className="text-2xl font-bold mb-8 text-center text-purple-100">Included In Deployment</h3>
                            <ul className="space-y-4">
                                {[
                                    "CRM Setup & Configuration",
                                    "Lead Capture Integration",
                                    "Website Form Connections",
                                    "Call Tracking Setup",
                                    "6-Month Nurture Sequence Copy",
                                    "New Lead Auto-Responders",
                                    "Deal Stage Automations",
                                    "Reporting Dashboards",
                                    "Team Training Video"
                                ].map((item, i) => (
                                    <li key={i} className="flex items-center gap-3 text-slate-300 border-b border-slate-700/50 pb-3 last:border-0 last:pb-0">
                                        <CheckCircle size={16} className="text-green-400" />
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* Timeline */}
            <section className="py-24 bg-white">
                <div className="container mx-auto px-6 max-w-4xl text-center">
                    <span className="text-purple-600 font-bold tracking-wider text-sm uppercase mb-4 block">Speed to Value</span>
                    <h2 className="text-3xl md:text-5xl font-serif font-bold text-slate-900 mb-12">2 Weeks to Launch</h2>

                    <div className="grid md:grid-cols-2 gap-8 text-left">
                        <div className="p-8 border border-slate-200 rounded-2xl bg-slate-50 relative hover:shadow-lg transition-shadow">
                            <div className="absolute -top-4 -left-4 w-10 h-10 bg-slate-900 text-white rounded-lg flex items-center justify-center font-bold">1</div>
                            <h3 className="text-xl font-bold text-slate-900 mb-4">Week 1: Setup & Integration</h3>
                            <p className="text-slate-600">Platform setup, pipeline configuration, connecting website forms and phone lines.</p>
                            <div className="mt-4 text-xs font-bold text-slate-400 uppercase">Deliverable: Staging Environment</div>
                        </div>
                        <div className="p-8 border-2 border-purple-100 rounded-2xl bg-purple-50/50 relative hover:shadow-lg transition-shadow">
                            <div className="absolute -top-4 -left-4 w-10 h-10 bg-purple-600 text-white rounded-lg flex items-center justify-center font-bold">2</div>
                            <h3 className="text-xl font-bold text-slate-900 mb-4">Week 2: Automation & Training</h3>
                            <p className="text-slate-600">Loading nurture sequences, activating workflows, and training your team.</p>
                            <div className="mt-4 text-xs font-bold text-purple-600 uppercase">Deliverable: Live CRM System</div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Funnel + CRM Synergy */}
            <section className="py-24 bg-purple-900 text-white text-center relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
                <div className="container mx-auto px-6 max-w-3xl relative z-10">
                    <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">Why Funnels + CRM Work Together</h2>
                    <p className="text-xl text-purple-200 mb-10 leading-relaxed">
                        Your funnels capture the data. Your CRM manages the relationship.
                    </p>
                    <div className="bg-white/10 p-8 rounded-2xl backdrop-blur-sm border border-white/10 text-left">
                        <p className="mb-6 text-slate-200 text-lg">
                            When someone fills out your qualification funnel, all their answers flow directly into your CRM. <strong className="text-white">Budget, timeline, land status, project scope—everything tagged automatically.</strong>
                        </p>
                        <p className="text-slate-200 text-lg">
                            Your first call is informed, not blind. And your follow-up is systematic, not random. That's how you go from chaos to control.
                        </p>
                    </div>
                </div>
            </section>

            {/* FAQ */}
            <section className="py-24 bg-white">
                <div className="container mx-auto px-6 max-w-3xl">
                    <h2 className="text-3xl font-serif font-bold text-slate-900 mb-12 text-center">Common Questions</h2>
                    <div className="space-y-4">
                        {[
                            { q: "What CRM platform do you use?", a: "We typically use HighLevel or HubSpot for builders, but can work with Buildertrend, CoConstruct, Salesforce. We recommend the best fit for you." },
                            { q: "Can this integrate with my existing systems?", a: "Yes. We connect to your website, funnels, email platform, phone system, and any other tools you use." },
                            { q: "Do I need to be tech-savvy?", a: "No. We set everything up. Most builders just spend 15 minutes a day reviewing the pipeline." },
                            { q: "What if my team isn't good at following up?", a: "The system handles 80% of follow-up automatically. Your team just handles the human moments." },
                            { q: "Can you manage it for us?", a: "Yes. We offer ongoing management where we handle updates and optimize automation." }
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
                    <h2 className="text-4xl font-serif font-bold mb-6">Stop Losing Deals to Disorganization</h2>
                    <p className="text-xl text-slate-400 mb-10">
                        If leads are scattered across email, texts, and sticky notes, you're leaving money on the table. Let's build a system that works.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link to="/contact" className="inline-flex items-center bg-purple-600 hover:bg-purple-700 text-white px-8 py-4 rounded-full font-bold transition-all hover:scale-105 shadow-[0_0_20px_rgba(168,85,247,0.3)]">
                            Schedule Strategy Call <ArrowRight className="ml-2" />
                        </Link>
                        <Link to="/case-studies" className="inline-flex items-center border border-slate-600 hover:bg-slate-800 text-white px-8 py-4 rounded-full font-bold transition-all">
                            See System Demo
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default CRMDeployment;
