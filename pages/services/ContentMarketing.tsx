import React from 'react';
import { Link } from 'react-router-dom';
import { Video, Mic, Smartphone, FileText, Mail, ArrowRight, Play, CheckCircle2, TrendingUp, Users } from 'lucide-react';

const ContentMarketing: React.FC = () => {
    return (
        <article className="pt-20 font-sans antialiased text-slate-900 bg-white">
            {/* SEO Hidden H1 for Structure */}
            <h1 className="sr-only">Content Marketing & Video Production for Custom Home Builders</h1>

            {/* Hero Section */}
            <section className="relative bg-[#0F172A] text-white pt-24 pb-32 overflow-hidden">
                <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-purple-900/20 rounded-full blur-[120px] pointer-events-none"></div>
                <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-blue-900/10 rounded-full blur-[100px] pointer-events-none"></div>

                <div className="container mx-auto px-6 relative z-10 text-center max-w-6xl">
                    <span className="inline-block py-1 px-3 rounded-full bg-purple-900/50 border border-purple-500 text-purple-300 text-xs font-bold tracking-wider uppercase mb-6">
                        BuilderProject Authority System
                    </span>
                    <h2 className="text-5xl md:text-7xl font-serif font-bold mb-8 leading-tight max-w-5xl mx-auto">
                        Stop Hoping for Referrals. <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">Start Predicting Them.</span>
                    </h2>
                    <p className="text-xl text-slate-300 mb-12 max-w-3xl mx-auto leading-relaxed">
                        Referrals are great, but you can't scale on luck. We build a predictable content engine that duplicates your best sales pitch 24/7.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link to="/contact" className="bg-white text-slate-900 px-8 py-4 rounded-full font-bold hover:bg-purple-50 transition-colors">
                            Start Your Growth
                        </Link>
                        <a href="#multiplier" className="border border-slate-600 text-white px-8 py-4 rounded-full font-bold hover:bg-slate-800 transition-colors">
                            See How It Works
                        </a>
                    </div>
                </div>
            </section>

            {/* The Problem Grid */}
            <section className="py-24 bg-white">
                <div className="container mx-auto px-6 max-w-6xl">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-serif font-bold text-slate-900 mb-6">The "Trust Gap" in Construction Marketing</h2>
                        <p className="text-lg text-slate-600 max-w-3xl mx-auto">
                            Homeowners aren't buying a product; they are buying a partnership. Ads fail because they ask for marriage on the first date. Referrals work because the trust is already there.
                            <br /><br /><strong>Our system bridges that gap.</strong>
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        <div className="p-8 rounded-2xl bg-slate-50 border border-slate-100 relative group hover:-translate-y-1 transition-transform duration-300">
                            <div className="w-12 h-12 bg-red-100 text-red-600 rounded-xl flex items-center justify-center mb-6">
                                <Users size={24} />
                            </div>
                            <h3 className="text-xl font-bold text-slate-900 mb-3">Unpredictable Referrals</h3>
                            <p className="text-slate-600">Great leads, but you can't turn them "on" when the pipeline dries up.</p>
                        </div>
                        <div className="p-8 rounded-2xl bg-slate-50 border border-slate-100 relative group hover:-translate-y-1 transition-transform duration-300">
                            <div className="w-12 h-12 bg-red-100 text-red-600 rounded-xl flex items-center justify-center mb-6">
                                <TrendingUp size={24} />
                            </div>
                            <h3 className="text-xl font-bold text-slate-900 mb-3">Expensive Ads</h3>
                            <p className="text-slate-600">Cold leads who don't know you, mostly price shoppers and tire kickers.</p>
                        </div>
                        <div className="p-8 rounded-2xl bg-purple-50 border border-purple-100 relative group shadow-lg ring-1 ring-purple-200">
                            <div className="absolute top-0 right-0 bg-purple-600 text-white text-xs font-bold px-3 py-1 rounded-bl-lg rounded-tr-lg">THE FIX</div>
                            <div className="w-12 h-12 bg-purple-100 text-purple-600 rounded-xl flex items-center justify-center mb-6">
                                <CheckCircle2 size={24} />
                            </div>
                            <h3 className="text-xl font-bold text-slate-900 mb-3">The Content Bridge</h3>
                            <p className="text-slate-600">Educational video content that builds 7 hours of trust before they ever call you.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* The Content Multiplier Section (The Proof) */}
            <section id="multiplier" className="py-24 bg-slate-900 text-white overflow-hidden">
                <div className="container mx-auto px-6 max-w-6xl">
                    <div className="text-center mb-16">
                        <span className="text-purple-400 font-bold tracking-wider text-sm uppercase mb-4 block">The Content Multiplier</span>
                        <h2 className="text-4xl font-serif font-bold mb-6">Give Us 10 Minutes. Get a Month of Content.</h2>
                        <p className="text-xl text-slate-300 max-w-3xl mx-auto">
                            We know you're busy building homes. You don't have time to be a creator. That's why we built a system where **one video** fuels your entire marketing strategy.
                        </p>
                    </div>

                    {/* The Visual Workflow */}
                    <div className="relative">
                        {/* Connecting Line (Desktop) */}
                        <div className="hidden md:block absolute top-[100px] left-[20%] right-[20%] h-1 bg-gradient-to-r from-purple-500/50 via-purple-500 to-purple-500/50 z-0"></div>

                        <div className="grid md:grid-cols-3 gap-12 relative z-10">

                            {/* Step 1: Input */}
                            <div className="text-center">
                                <div className="bg-slate-800 p-2 rounded-2xl inline-block mb-8 border border-slate-700 shadow-2xl relative">
                                    <div className="absolute -top-4 -right-4 bg-purple-600 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold">1</div>
                                    <div className="w-64 h-40 bg-slate-900 rounded-xl flex items-center justify-center border border-slate-800 overflow-hidden relative group cursor-pointer">
                                        <div className="absolute inset-0 bg-black/40 flex items-center justify-center group-hover:bg-black/20 transition-all">
                                            <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                                                <Play fill="white" className="text-white ml-1" size={20} />
                                            </div>
                                        </div>
                                        <img src="https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" alt="Video Recording" className="w-full h-full object-cover" />
                                    </div>
                                </div>
                                <h3 className="text-xl font-bold mb-2">The Source</h3>
                                <p className="text-sm text-slate-400">One 10-minute site walk or Q&A video filmed on your phone.</p>
                            </div>

                            {/* Arrow Mobile */}
                            <div className="md:hidden flex justify-center text-purple-500"><ArrowRight className="rotate-90" size={32} /></div>

                            {/* Step 2: The Machine (Center) */}
                            <div className="flex flex-col items-center justify-center pt-8">
                                <div className="bg-purple-600 text-white p-6 rounded-full shadow-2xl shadow-purple-900/50 animate-pulse">
                                    <TrendingUp size={40} />
                                </div>
                                <div className="mt-6 text-center">
                                    <h3 className="text-xl font-bold mb-2 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">We Edit & Repurpose</h3>
                                    <p className="text-sm text-slate-400">Our team slices, edits, writes, and optimizes.</p>
                                </div>
                            </div>

                            {/* Arrow Mobile */}
                            <div className="md:hidden flex justify-center text-purple-500"><ArrowRight className="rotate-90" size={32} /></div>

                            {/* Step 3: Output */}
                            <div className="text-center">
                                <div className="bg-slate-800 p-6 rounded-2xl min-h-[200px] flex flex-col justify-center items-center gap-4 border border-slate-700 shadow-2xl relative mb-8">
                                    <div className="absolute -top-4 -right-4 bg-green-500 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold">3</div>
                                    <div className="flex items-center gap-3 w-full bg-slate-700/50 p-3 rounded-lg border border-slate-600">
                                        <Smartphone className="text-pink-400" size={20} />
                                        <span className="text-sm font-bold">7x Short Form Clips</span>
                                    </div>
                                    <div className="flex items-center gap-3 w-full bg-slate-700/50 p-3 rounded-lg border border-slate-600">
                                        <FileText className="text-blue-400" size={20} />
                                        <span className="text-sm font-bold">1x SEO Blog Post</span>
                                    </div>
                                    <div className="flex items-center gap-3 w-full bg-slate-700/50 p-3 rounded-lg border border-slate-600">
                                        <Mail className="text-yellow-400" size={20} />
                                        <span className="text-sm font-bold">1x Email Newsletter</span>
                                    </div>
                                </div>
                                <h3 className="text-xl font-bold mb-2">The Assets</h3>
                                <p className="text-sm text-slate-400">A complete month of marketing from 10 minutes of effort.</p>
                            </div>

                        </div>
                    </div>
                </div>
            </section>

            {/* Detailed Deliverables List */}
            <section className="py-24 bg-white">
                <div className="container mx-auto px-6 max-w-6xl">
                    <h2 className="text-3xl font-serif font-bold text-slate-900 mb-12 text-center">Your Monthly Content Stack</h2>
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {[
                            {
                                icon: Video,
                                color: "text-red-600",
                                bg: "bg-red-50",
                                title: "YouTube Videos",
                                desc: "Long-form authority content that builds deep trust and answers client questions."
                            },
                            {
                                icon: Smartphone,
                                color: "text-pink-600",
                                bg: "bg-pink-50",
                                title: "Social Clips",
                                desc: "Reels and TikToks that expand your reach and keep you top-of-mind."
                            },
                            {
                                icon: FileText,
                                color: "text-blue-600",
                                bg: "bg-blue-50",
                                title: "SEO Articles",
                                desc: "Detailed guides that rank on Google for terms like 'Custom Home Cost'."
                            },
                            {
                                icon: Mail,
                                color: "text-purple-600",
                                bg: "bg-purple-50",
                                title: "Email Nurture",
                                desc: "Weekly value blasts to your list so leads never forget your name."
                            }
                        ].map((item, i) => (
                            <div key={i} className="p-8 rounded-2xl border border-slate-100 hover:shadow-xl transition-all duration-300 bg-white">
                                <div className={`w-12 h-12 ${item.bg} ${item.color} rounded-xl flex items-center justify-center mb-6`}>
                                    <item.icon size={24} />
                                </div>
                                <h3 className="text-lg font-bold text-slate-900 mb-2">{item.title}</h3>
                                <p className="text-sm text-slate-500 leading-relaxed">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-24 bg-slate-900 text-white text-center">
                <div className="container mx-auto px-6 max-w-4xl">
                    <h2 className="text-4xl font-serif font-bold mb-6">Ready to become the #1 Authority?</h2>
                    <p className="text-xl text-slate-400 mb-10">
                        Stop wasting money on leads who don't know you. Start building a brand that clients trust before they even call.
                    </p>
                    <Link to="/contact" className="inline-flex items-center bg-purple-600 hover:bg-purple-700 text-white px-8 py-4 rounded-full font-bold transition-all hover:scale-105 shadow-xl hover:shadow-2xl shadow-purple-900/20">
                        Book a Strategy Session <ArrowRight className="ml-2" />
                    </Link>
                </div>
            </section>
        </article>
    );
};

export default ContentMarketing;
