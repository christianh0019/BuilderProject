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
                            <span className="flex h-2 w-2 rounded-full bg-green-400 animate-pulse"></span>
                            <span className="text-sm font-medium text-purple-200 uppercase tracking-widest">CRM DEPLOYMENT</span>
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
                                <div className="bg-slate-950 rounded-lg overflow-hidden relative">
                                    <img
                                        src="https://storage.googleapis.com/msgsndr/HllUVzV8V6VFH4nUuq4W/media/69791340eb0d1a92a4c53499.png"
                                        alt="CRM Pipeline Dashboard"
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
                                    <div className="aspect-[4/3] bg-slate-50 rounded-xl overflow-hidden relative p-4 flex flex-col">
                                        <div className="flex items-center justify-between mb-4 border-b border-slate-200 pb-2">
                                            <div className="font-bold text-slate-700 text-xs">Recent Leads</div>
                                            <div className="text-slate-400 text-[10px]">Live Feed</div>
                                        </div>
                                        <div className="space-y-2">
                                            {[
                                                { name: "Sarah M.", source: "Google Ads", status: "New", color: "bg-blue-100 text-blue-700" },
                                                { name: "James R.", source: "Referral", status: "Qualified", color: "bg-green-100 text-green-700" },
                                                { name: "Michael B.", source: "Website", status: "Contacted", color: "bg-purple-100 text-purple-700" },
                                                { name: "Emily K.", source: "Facebook", status: "New", color: "bg-blue-100 text-blue-700" }
                                            ].map((lead, i) => (
                                                <div key={i} className="bg-white p-2 rounded border border-slate-100 flex items-center justify-between shadow-sm">
                                                    <div className="flex items-center gap-2">
                                                        <div className="w-6 h-6 rounded-full bg-slate-200 flex items-center justify-center text-[10px] font-bold text-slate-500">
                                                            {lead.name.charAt(0)}
                                                        </div>
                                                        <div className="text-xs font-medium text-slate-700">{lead.name}</div>
                                                    </div>
                                                    <div className={`text-[10px] px-1.5 py-0.5 rounded font-medium ${lead.color}`}>
                                                        {lead.status}
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                        <div className="absolute inset-x-0 bottom-0 h-8 bg-gradient-to-t from-slate-50 to-transparent"></div>
                                    </div>
                                </div>
                            </div>
                            <div className="order-1 md:order-2">
                                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center text-purple-600 font-bold mb-6">01</div>
                                <h3 className="text-3xl font-bold text-slate-900 mb-4">Lead Capture Dashboard</h3>
                                <p className="text-slate-600 text-lg leading-relaxed mb-6">
                                    All leads in one place. Tagged with source, qualification status, and stage in your pipeline. Never lose a sticky note again.
                                </p>
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
                            </div>
                            <div>
                                <div className="bg-slate-50 rounded-2xl p-2 border border-slate-200 shadow-lg rotate-1 hover:rotate-0 transition-transform duration-500">
                                    <div className="aspect-[4/3] bg-slate-900 rounded-xl overflow-hidden relative p-6 flex flex-col items-center justify-center">
                                        <div className="relative z-10 w-full max-w-[200px]">
                                            <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-slate-700"></div>

                                            <div className="relative flex items-center gap-4 mb-6">
                                                <div className="w-8 h-8 rounded-full bg-purple-500 flex items-center justify-center border-4 border-slate-900 z-10 shadow-lg shadow-purple-500/50">
                                                    <Mail size={14} className="text-white" />
                                                </div>
                                                <div className="bg-slate-800 p-2 rounded border border-slate-700 text-xs text-slate-300 shadow-sm w-full">
                                                    Day 0: Welcome
                                                </div>
                                            </div>

                                            <div className="relative flex items-center gap-4 mb-6">
                                                <div className="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center border-4 border-slate-900 z-10">
                                                    <div className="text-[10px] font-bold text-slate-500">3d</div>
                                                </div>
                                                <div className="text-[10px] text-slate-500 font-mono uppercase tracking-widest">Wait 3 Days</div>
                                            </div>

                                            <div className="relative flex items-center gap-4">
                                                <div className="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center border-4 border-slate-900 z-10 shadow-lg shadow-blue-500/50">
                                                    <Mail size={14} className="text-white" />
                                                </div>
                                                <div className="bg-slate-800 p-2 rounded border border-slate-700 text-xs text-slate-300 shadow-sm w-full">
                                                    Day 3: Case Study
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Feature 3 */}
                        <div className="grid md:grid-cols-2 gap-12 items-center">
                            <div className="order-2 md:order-1">
                                <div className="bg-slate-50 rounded-2xl p-2 border border-slate-200 shadow-lg -rotate-1 hover:rotate-0 transition-transform duration-500">
                                    <div className="aspect-[4/3] bg-slate-100 rounded-xl overflow-hidden relative p-3">
                                        <div className="flex gap-2 h-full">
                                            {/* Column 1 */}
                                            <div className="flex-1 bg-slate-200/50 rounded-lg p-2 flex flex-col gap-2">
                                                <div className="text-[10px] font-bold text-slate-500 uppercase">New Lead</div>
                                                <div className="bg-white p-2 rounded border border-slate-200 shadow-sm">
                                                    <div className="w-8 h-1 bg-blue-400 rounded-full mb-1"></div>
                                                    <div className="h-2 w-12 bg-slate-100 rounded mb-1"></div>
                                                    <div className="text-[10px] text-slate-400 font-mono">$1.2M</div>
                                                </div>
                                                <div className="bg-white p-2 rounded border border-slate-200 shadow-sm opacity-60">
                                                    <div className="w-8 h-1 bg-blue-400 rounded-full mb-1"></div>
                                                    <div className="h-2 w-10 bg-slate-100 rounded"></div>
                                                </div>
                                            </div>

                                            {/* Column 2 */}
                                            <div className="flex-1 bg-slate-200/50 rounded-lg p-2 flex flex-col gap-2">
                                                <div className="text-[10px] font-bold text-slate-500 uppercase">Discovery</div>
                                                <div className="bg-white p-2 rounded border-l-2 border-purple-500 shadow-sm">
                                                    <div className="text-[10px] font-bold text-slate-700 mb-1">Smith Residence</div>
                                                    <div className="flex justify-between items-center text-[9px] text-slate-400">
                                                        <span>Call Tomorrow</span>
                                                        <span className="text-purple-600 font-bold">$850k</span>
                                                    </div>
                                                </div>
                                            </div>

                                            {/* Column 3 */}
                                            <div className="flex-1 bg-slate-200/50 rounded-lg p-2 flex flex-col gap-2 opacity-50">
                                                <div className="text-[10px] font-bold text-slate-500 uppercase">Proposal</div>
                                                <div className="bg-white p-2 rounded border border-slate-200 shadow-sm">
                                                    <div className="h-2 w-12 bg-slate-100 rounded mb-1"></div>
                                                </div>
                                            </div>
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
            <section className="py-24 bg-purple-900 text-white relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
                <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-purple-900 via-slate-900 to-purple-900 opacity-90"></div>

                <div className="container mx-auto px-6 relative z-10">
                    <div className="text-center mb-20">
                        <h2 className="text-3xl md:text-5xl font-serif font-bold mb-6">Why Funnels + CRM Work Together</h2>
                        <p className="text-xl text-purple-200 mb-10 leading-relaxed max-w-3xl mx-auto">
                            Your funnels capture the data. Your CRM manages the relationship. It's a seamless handoff that happens automatically.
                        </p>
                    </div>

                    <div className="grid lg:grid-cols-3 gap-8 items-center max-w-6xl mx-auto">
                        {/* The Funnel Side */}
                        <div className="bg-white/5 backdrop-blur-md rounded-2xl p-8 border border-white/10 relative group hover:bg-white/10 transition-colors">
                            <div className="absolute -top-6 -left-6 w-12 h-12 bg-purple-500 rounded-lg flex items-center justify-center shadow-lg shadow-purple-500/50">
                                <Filter className="text-white" size={24} />
                            </div>
                            <h3 className="text-2xl font-bold mb-4">The Funnel</h3>
                            <p className="text-purple-200 mb-6 text-sm">Captures qualification data from every lead.</p>
                            <div className="space-y-3">
                                {["Budget Range", "Timeline", "Land Status", "Design Style", "Project Type"].map((item, i) => (
                                    <div key={i} className="flex items-center gap-3 bg-white/5 rounded-lg p-3 text-sm border border-white/5">
                                        <div className="w-2 h-2 rounded-full bg-purple-400"></div>
                                        {item}
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* The Connector */}
                        <div className="hidden lg:flex flex-col items-center justify-center relative">
                            <div className="absolute top-1/2 left-0 w-full h-1 bg-gradient-to-r from-purple-500/20 via-purple-400 to-purple-500/20"></div>
                            <div className="w-16 h-16 rounded-full bg-purple-600 flex items-center justify-center shadow-[0_0_30px_rgba(168,85,247,0.5)] z-10 animate-pulse">
                                <ArrowRight className="text-white" size={32} />
                            </div>
                            <div className="mt-8 text-center">
                                <span className="text-xs font-bold uppercase tracking-widest text-purple-300 bg-purple-900/50 px-3 py-1 rounded-full border border-purple-500/30">
                                    Instant Sync
                                </span>
                            </div>
                        </div>

                        {/* The CRM Side */}
                        <div className="bg-white/5 backdrop-blur-md rounded-2xl p-8 border border-white/10 relative group hover:bg-white/10 transition-colors">
                            <div className="absolute -top-6 -right-6 w-12 h-12 bg-blue-500 rounded-lg flex items-center justify-center shadow-lg shadow-blue-500/50">
                                <Database className="text-white" size={24} />
                            </div>
                            <h3 className="text-2xl font-bold mb-4">The CRM</h3>
                            <p className="text-blue-200 mb-6 text-sm">Organizes data & triggers next steps.</p>
                            <div className="space-y-3">
                                {["Auto-Tag Profile", "Trigger Nurture", "Assign Task", "Score Lead", "Notify Team"].map((item, i) => (
                                    <div key={i} className="flex items-center gap-3 bg-white/5 rounded-lg p-3 text-sm border border-white/5">
                                        <CheckCircle className="text-blue-400" size={14} />
                                        {item}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* FAQ */}
            <section className="py-24 bg-white">
                <div className="container mx-auto px-6 max-w-3xl">
                    <h2 className="text-3xl font-serif font-bold text-slate-900 mb-12 text-center">Common Questions</h2>
                    <div className="space-y-4">
                        {[
                            { q: "What is a CRM for custom home builders and why do I need one?", a: "A CRM (Customer Relationship Management) system is software that captures every lead in one central location and tracks them through your entire sales process from initial inquiry to signed contract. Custom home builders and remodelers need a CRM because the sales cycle is 6-12 months long and managing dozens or hundreds of conversations manually is impossible. Without a CRM, leads get scattered across email, text messages, Instagram DMs, and sticky notes, which means prospects fall through the cracks, follow-ups get forgotten, and deals die from disorganization. A properly configured CRM captures every lead automatically, tracks where they came from, manages automated follow-up sequences, shows you exactly where each deal is in your pipeline, and reminds you when to personally reach out. Builders using CRMs close 3-4 times more deals from the same lead volume because nothing gets lost and follow-up happens consistently." },
                            { q: "How much does CRM deployment cost for custom home builders?", a: "CRM deployment for custom home builders typically costs $3,000 to $5,000 as a one-time setup fee depending on complexity and the number of integrations needed with your existing systems. This includes platform selection or configuration of your existing CRM, complete setup of your sales pipeline stages customized to your process, integration with your website forms and funnels, automated email and SMS nurture sequences written specifically for your business, team training on how to use the system, and documentation for ongoing management. Ongoing CRM software subscription costs range from $200 to $500 per month depending on the platform and features you need. BuilderProject handles the complete technical setup so your CRM is ready to use on day one, and we can also provide ongoing management if you want us to handle updates and optimization rather than managing it yourself." },
                            { q: "How long does it take to set up a CRM for a construction business?", a: "BuilderProject deploys complete CRM systems for custom home builders in 2 weeks from kickoff to launch. Week 1 includes platform setup, pipeline configuration, and connecting all integrations with your website, funnels, email platform, and phone system. Week 2 focuses on loading automated nurture sequences, setting up workflows and automations, configuring reporting dashboards, and training your team on how to use the system. This timeline assumes you're starting fresh or migrating from basic tools like spreadsheets. If you have an existing CRM that needs optimization rather than full deployment, the timeline may be shorter. The 2-week timeline gets you operational quickly so you stop losing leads immediately rather than waiting months for a complex implementation." },
                            { q: "What CRM platforms work best for custom home builders?", a: "The best CRM platforms for custom home builders are HighLevel and HubSpot because they offer robust automation, pipeline management, and integration capabilities at reasonable costs. HighLevel is popular with builders because it includes built-in SMS capabilities, unlimited users, and pipeline customization at around $300 per month. HubSpot offers a free tier for basic needs and scales up with advanced features, typically costing $500+ per month for builder-specific functionality. Industry-specific options like Buildertrend and CoConstruct work well if you need construction project management integrated with CRM, though they're typically more expensive. BuilderProject works with all major platforms and will recommend the best fit based on your budget, team size, and whether you need construction management features or just lead management and sales pipeline functionality." },
                            { q: "Can a CRM integrate with my existing website and lead sources?", a: "Yes, modern CRMs integrate with virtually all lead sources custom home builders use including website contact forms, qualification funnels, lead magnet downloads, Google Ads lead forms, Facebook lead ads, Zillow and Houzz inquiries if you use those platforms, phone call tracking systems, and manual entry for referrals and walk-ins. BuilderProject configures all integrations during deployment so when a lead comes in from any source, they automatically flow into your CRM with complete information about where they came from, what they submitted, and their qualification status. This source tracking is critical because it tells you which marketing channels are generating your best leads and highest ROI, allowing you to invest more in what works and cut what doesn't. Without integration, you're manually copying information from multiple places, which wastes time and creates errors." },
                            { q: "What is automated lead nurture and how does it work for custom home builders?", a: "Automated lead nurture is a series of emails and text messages that automatically go out to prospects over weeks or months to keep you top of mind without manual effort. For custom home builders, nurture sequences are essential because prospects take 6-12 months from initial inquiry to signing a contract, and you cannot manually follow up with everyone for an entire year. BuilderProject creates nurture sequences specifically for builders that include educational content explaining your process, project showcases with before-and-afters and completed homes, client testimonials building trust through social proof, company updates about recent projects or awards, and periodic calls-to-action asking if they're ready to move forward. These sequences run automatically once set up, meaning a lead who downloads your budget calculator today will receive helpful emails over the next 6 months, and when they're finally ready to build, you're the only builder they're thinking about because you stayed in touch the entire time." },
                            { q: "How does pipeline management help close more custom home projects?", a: "Pipeline management gives you visual representation of where every lead is in your sales process from initial inquiry to signed contract, which allows you to see exactly what needs to happen next to move deals forward rather than relying on memory. A typical builder pipeline includes stages like New Lead, Contacted, Qualified, Discovery Call Scheduled, Discovery Call Completed, Proposal Sent, Negotiation, and Contract Signed. When you can see all your deals in these stages visually, you immediately know who needs follow-up today, where deals are getting stuck, and what your future revenue looks like based on pipeline value. BuilderProject configures custom pipeline stages matching your specific sales process, and builders using pipeline management close more deals because nothing sits stalled without action, follow-up happens at the right moments, and you can identify bottlenecks in your process and fix them before losing more deals." },
                            { q: "What is lead qualification and why does it matter for home builders?", a: "Lead qualification is the process of determining whether a prospect meets your criteria for budget, timeline, service area, and project type before you invest time in consultations. For custom home builders, qualification matters because not every lead is worth an hour of your time, and spending equal effort on someone with a $400K budget when you build $1.5M homes wastes resources you could spend on qualified prospects. Proper qualification asks critical questions upfront including what's your total project budget, when do you want to start construction, do you own land and where is it located, are you in our service area, and are you the decision-maker. BuilderProject builds qualification into your funnels and CRM workflows so prospects are automatically filtered before they reach your calendar. Qualification agents can also call every lead to screen them, meaning you only talk to people who are serious, qualified, and ready to move forward rather than spending hours on tire kickers." },
                            { q: "How does a CRM track where leads come from and why does that matter?", a: "A properly configured CRM tracks lead source by capturing information about where each prospect came from, whether that's a specific Facebook ad campaign, Google search, website page, lead magnet download, or referral partner. This tracking happens through UTM parameters in URLs, form field tagging, integration data from ad platforms, and manual source entry for phone calls and referrals. Lead source tracking matters because it tells you exactly which marketing channels are generating revenue and which are wasting money. For example, if you discover that Google Ads cost $300 per lead but close at 30%, while Facebook Ads cost $100 per lead but only close at 5%, Google is actually cheaper per signed contract despite higher cost per lead. Without source tracking, you're making marketing decisions based on guesses rather than data, which typically means spending money on channels that don't work while underinvesting in channels that do." },
                            { q: "Can I use a CRM if I'm not tech-savvy?", a: "Yes, you do not need to be tech-savvy to use a CRM after BuilderProject sets it up and trains you. We handle all the technical configuration including platform setup, integration connections, automation workflows, and system architecture, then provide video training showing you exactly how to use it for your daily activities. Most builders spend 10-15 minutes per day in their CRM doing simple tasks like reviewing new leads that came in, updating deal stages when prospects move forward, adding notes after phone calls, and checking who needs follow-up today. The system handles everything complex automatically including capturing leads, sending nurture emails, triggering text messages, and tracking all data. If you can use email and a smartphone, you can use a properly configured CRM. We also offer ongoing support and management if you want us to handle technical updates, optimization, and troubleshooting rather than doing it yourself." },
                            { q: "What happens to leads I already have in spreadsheets or old systems?", a: "BuilderProject can migrate your existing leads from spreadsheets, old CRMs, or scattered sources into your new system during deployment. We'll import all contact information, clean up duplicate entries, organize leads by stage or status, tag them with available data about source and qualification, and enroll them in appropriate nurture sequences based on where they are in your process. This is valuable because you probably have hundreds or thousands of people who inquired over the years but never moved forward, and some of them are likely ready now—you just haven't stayed in touch. By loading them into your new CRM with proper nurture sequences, you can reactivate old leads and generate new projects from prospects who already know you. Most builders see 10-20% of their old database reengage when properly nurtured through a CRM system." },
                            { q: "How does CRM automation save time for busy builders?", a: "CRM automation handles repetitive tasks that would otherwise consume hours every week, allowing you to focus on revenue-generating activities like consultations and closing deals. Automated tasks include instant confirmation emails or texts when someone submits a form, nurture email sequences that go out for 6-12 months without manual sending, appointment reminders reducing no-shows on discovery calls, follow-up reminders telling you when to personally reach out, lead routing that assigns leads to appropriate team members, and automatic tagging and organization based on qualification criteria. BuilderProject clients report saving 10-15 hours per week on manual follow-up tasks after implementing automation. The system handles staying in touch with 50-100+ leads simultaneously while you focus on the 5-10 conversations that need your personal attention. This allows you to manage a larger pipeline without hiring additional staff or working longer hours." },
                            { q: "What is pipeline value and how do I forecast revenue with a CRM?", a: "Pipeline value is the total potential revenue of all active deals in your sales pipeline, calculated by adding up the estimated project value of every prospect you're currently working with. For example, if you have 5 prospects in proposal stage worth $1M each, 10 prospects in discovery call stage worth $800K each, and 15 early-stage leads worth $500K each, your total pipeline value is $20.5M. When you combine pipeline value with your historical close rates, you can forecast future revenue accurately. If your close rate is 20%, you can estimate approximately $4M in future revenue from that $20.5M pipeline. BuilderProject CRMs display pipeline value in real-time dashboards and track it over time, allowing you to see if your pipeline is growing or shrinking and make proactive decisions about increasing lead generation when pipeline gets thin or managing capacity when pipeline gets too full." },
                            { q: "How does a CRM help manage the long sales cycle in custom home building?", a: "Custom home and remodeling sales cycles typically last 6-12 months from initial inquiry to signed contract, which makes manual management nearly impossible without a system. A CRM manages long sales cycles through automated nurture sequences that stay in touch with prospects for months, milestone-based reminders that prompt you to reach out when they said they'd have land secured or financing approved, deal aging alerts that flag prospects who've been stalled too long, retargeting audience syncing that keeps your ads in front of prospects while they decide, and complete conversation history so you remember context from months ago when they call back. BuilderProject configures nurture campaigns specifically for builders that provide value throughout the research and planning phases, keeping you top of mind without being pushy, so when the prospect is finally ready to move forward months later, you're the obvious choice because you've been there the entire time." },
                            { q: "What's the difference between a CRM and project management software like Buildertrend?", a: "A CRM manages your sales process and marketing pipeline from leads to signed contracts, while project management software like Buildertrend manages actual construction projects after contracts are signed. CRMs focus on lead capture, qualification, nurture sequences, sales pipeline tracking, and converting prospects into clients. Project management software focuses on scheduling, budgeting, change orders, client communication during construction, and project completion. Most successful builders use both—a CRM for the sales side and project management software for the construction side. Some platforms like Buildertrend offer CRM features, but they're typically not as robust for marketing automation and lead nurture as dedicated CRM platforms. BuilderProject can integrate your CRM with your project management software so when a deal closes, client information automatically transfers from your CRM to your project management system, eliminating duplicate data entry and ensuring smooth handoff from sales to production." }
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
