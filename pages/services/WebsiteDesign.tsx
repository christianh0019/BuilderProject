import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, X, ChevronDown, ChevronUp, Compass, PenTool, Rocket, Users, Layout } from 'lucide-react';
import BrowserFrame from '../../components/ui/BrowserFrame';

const WebsiteDesign: React.FC = () => {
    const [openFaq, setOpenFaq] = React.useState<number | null>(null);

    const toggleFaq = (index: number) => {
        setOpenFaq(openFaq === index ? null : index);
    };

    return (
        <div className="pt-20">
            {/* Hero Section */}
            {/* Hero Section */}
            <section className="relative bg-[#0F172A] text-white pt-32 pb-32 overflow-hidden">
                {/* Background Effects */}
                <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-purple-900/20 rounded-full blur-[120px] pointer-events-none mix-blend-screen animate-pulse"></div>
                <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-blue-900/10 rounded-full blur-[100px] pointer-events-none mix-blend-screen"></div>

                <div className="container mx-auto px-6 relative z-10">
                    <div className="max-w-5xl mx-auto text-center mb-20">
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-900/30 border border-purple-500/30 mb-8 backdrop-blur-sm">
                            <span className="flex h-2 w-2 rounded-full bg-purple-400 animate-pulse"></span>
                            <span className="text-sm font-medium text-purple-200 uppercase tracking-widest">For Custom Builders & Remodelers</span>
                        </div>

                        <h1 className="text-5xl md:text-7xl font-serif font-bold mb-8 leading-tight tracking-tight">
                            Website Design & Development <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400">That Actually Generates Leads</span>
                        </h1>

                        <p className="text-xl md:text-2xl text-slate-300 mb-10 max-w-3xl mx-auto leading-relaxed font-light">
                            Stop losing $1M+ projects because prospects judge your book by its cover. We build websites that position you as the premium choice in your market.
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
                                    <img src="/images/hero-desktop-new.png" alt="Desktop Website Preview" className="w-full h-full object-cover object-top" />
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
                                    <img src="/images/hero-mobile-1.png" alt="Mobile Website Preview" className="w-full h-full object-cover object-top" />
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
                            What Happens When Your Website Is Built to Convert
                        </h2>

                        <div className="grid md:grid-cols-2 gap-12 items-center mb-12">
                            <div className="bg-slate-50 p-8 rounded-2xl border border-slate-100">
                                <p className="text-lg text-slate-600 mb-6">
                                    When builders and remodelers come to us, their websites typically convert at less than 1%, meaning 99%+ of visitors leave without reaching out.
                                </p>
                                <div className="text-4xl font-bold text-slate-400 mb-2">0.38%</div>
                                <div className="text-sm uppercase tracking-wider text-slate-500 font-bold">Industry Average</div>
                            </div>
                            <div className="bg-purple-50 p-8 rounded-2xl border border-purple-100 relative overflow-hidden">
                                <div className="absolute top-0 right-0 p-4 opacity-10">
                                    <svg width="100" height="100" viewBox="0 0 24 24" fill="currentColor" className="text-purple-600"><path d="M16 6l2.29 2.29-4.88 4.88-4-4L2 16.59 3.41 18l6-6 4 4 6.3-6.29L22 12V6z" /></svg>
                                </div>
                                <p className="text-lg text-slate-900 font-medium mb-6">
                                    Our websites convert at an average of 3.2%. That's 3x higher.
                                </p>
                                <div className="text-4xl font-bold text-purple-600 mb-2">3.2%</div>
                                <div className="text-sm uppercase tracking-wider text-purple-700 font-bold">BuilderProject Average</div>
                            </div>
                        </div>

                        <p className="text-lg text-slate-600 leading-relaxed text-center">
                            Visitors also spend 3x as long on our sites, not because we're tricking them into staying, but because the content actually engages them. They're reading project stories, understanding your process, seeing what it's like to work with you, and self-qualifying before they reach out.
                        </p>
                        <p className="text-lg text-slate-600 leading-relaxed text-center mt-6 font-bold">
                            We've built this exact system for 100+ custom home builders and remodelers. And the result is the same: websites that don't just look good, but actually generate qualified leads.
                        </p>
                    </div>
                </div>
            </section>

            {/* Why Visual (Referral Analogy) */}
            <section className="py-24 bg-slate-50 border-y border-slate-200">
                <div className="container mx-auto px-6">
                    <div className="max-w-4xl mx-auto mb-16 text-center">
                        <span className="text-purple-600 font-bold tracking-wider text-sm uppercase mb-4 block">The "Trust Gap"</span>
                        <h2 className="text-3xl md:text-5xl font-serif font-bold text-slate-900 mb-6">
                            Why Your Website Isn't Converting <br />(And What Actually Works)
                        </h2>
                        <p className="text-lg text-slate-600 mb-8">
                            So what makes the difference between a website that converts at less than 1% and one that converts at 3.2%? It comes down to <strong>replicating what happens when a referral walks someone through your work.</strong>
                        </p>
                    </div>

                    <div className="max-w-6xl mx-auto">
                        <div className="grid md:grid-cols-2 gap-8 relative">
                            {/* VS Badge (Desktop) */}
                            <div className="hidden md:flex absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-white rounded-full items-center justify-center font-black text-slate-900 shadow-xl border-4 border-slate-50 z-10 text-xl">
                                VS
                            </div>

                            {/* Card 1: Offline Referral */}
                            <div className="bg-white p-10 rounded-[2.5rem] shadow-xl border border-slate-100 flex flex-col relative overflow-hidden group hover:-translate-y-2 transition-transform duration-500">
                                <div className="absolute top-0 left-0 w-full h-2 bg-slate-200 group-hover:bg-slate-300 transition-colors"></div>
                                <div className="w-16 h-16 bg-slate-100 rounded-2xl flex items-center justify-center text-slate-500 mb-8 group-hover:scale-110 transition-transform duration-500">
                                    <Users size={32} />
                                </div>
                                <h3 className="text-2xl font-serif font-bold text-slate-900 mb-2">1. The Referral Experience</h3>
                                <p className="text-slate-500 mb-8 text-sm uppercase tracking-wider font-bold">Offline / In-Person</p>

                                <ul className="space-y-6 flex-1">
                                    <li className="flex gap-4 items-start">
                                        <div className="w-6 h-6 rounded-full bg-slate-100 flex items-center justify-center text-slate-500 shrink-0 mt-0.5"><CheckCircle size={14} /></div>
                                        <p className="text-slate-600"><strong>Friend walks them through.</strong> They see the craftsmanship up close, notice the details, understand the quality.</p>
                                    </li>
                                    <li className="flex gap-4 items-start">
                                        <div className="w-6 h-6 rounded-full bg-slate-100 flex items-center justify-center text-slate-500 shrink-0 mt-0.5"><CheckCircle size={14} /></div>
                                        <p className="text-slate-600"><strong>Friend vouches for you.</strong> They trust the recommendation because someone they trust is standing right there.</p>
                                    </li>
                                    <li className="flex gap-4 items-start">
                                        <div className="w-6 h-6 rounded-full bg-slate-100 flex items-center justify-center text-slate-500 shrink-0 mt-0.5"><CheckCircle size={14} /></div>
                                        <p className="text-slate-600"><strong>Prospect asks questions:</strong> Cost? Timeline? Experience? Challenges?</p>
                                    </li>
                                </ul>
                            </div>

                            {/* Card 2: Digital Referral */}
                            <div className="bg-slate-900 p-10 rounded-[2.5rem] shadow-2xl shadow-purple-900/20 border border-slate-800 flex flex-col relative overflow-hidden group hover:-translate-y-2 transition-transform duration-500">
                                <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-purple-500 to-pink-500"></div>
                                {/* Shine Effect */}
                                <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-purple-500/10 rounded-full blur-[80px] pointer-events-none"></div>

                                <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center text-white mb-8 border border-white/10 group-hover:scale-110 transition-transform duration-500">
                                    <Layout size={32} />
                                </div>
                                <h3 className="text-2xl font-serif font-bold text-white mb-2">2. What Your Website Should Do</h3>
                                <p className="text-purple-300 mb-8 text-sm uppercase tracking-wider font-bold">Online / 24-7 Sales Asset</p>

                                <ul className="space-y-6 flex-1 relative z-10">
                                    <li className="flex gap-4 items-start">
                                        <div className="w-6 h-6 rounded-full bg-green-500 flex items-center justify-center text-white shrink-0 mt-0.5 shadow-lg shadow-green-500/30"><CheckCircle size={14} /></div>
                                        <p className="text-slate-300"><strong>Featured Project Pages walk them through.</strong> Photos, videos, and callouts replicate the physical tour.</p>
                                    </li>
                                    <li className="flex gap-4 items-start">
                                        <div className="w-6 h-6 rounded-full bg-green-500 flex items-center justify-center text-white shrink-0 mt-0.5 shadow-lg shadow-green-500/30"><CheckCircle size={14} /></div>
                                        <p className="text-slate-300"><strong>Storytelling builds trust.</strong> They see the problem, solution, and outcome. "That's exactly my situation."</p>
                                    </li>
                                    <li className="flex gap-4 items-start">
                                        <div className="w-6 h-6 rounded-full bg-green-500 flex items-center justify-center text-white shrink-0 mt-0.5 shadow-lg shadow-green-500/30"><CheckCircle size={14} /></div>
                                        <p className="text-slate-300"><strong>Answers are right there.</strong> Pricing, timelines, process. No guessing. They're educated before the call.</p>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Live Examples */}
            <section className="py-24 bg-white">
                <div className="container mx-auto px-6">
                    <div className="max-w-4xl mx-auto text-center mb-16">
                        <h2 className="text-3xl md:text-5xl font-serif font-bold text-slate-900 mb-6">
                            See What a Conversion-Focused Builder Website Actually Looks Like
                        </h2>
                        <p className="text-lg text-slate-600">
                            Most builder and remodeler websites aren't built with strategy. Ours are. Visitors spend 3+ minutes on our sites vs. less than 1 minute on typical builder sites. That's not by accident. It's by design.
                        </p>
                    </div>

                    <div className="max-w-6xl mx-auto mb-20">
                        <h3 className="text-2xl font-bold text-slate-900 mb-10 border-b border-slate-200 pb-4">Featured Project Pages That Tell the Full Story</h3>
                        <p className="text-slate-600 mb-12 max-w-3xl">Most builders have a portfolio page with a bunch of photos. We build featured project pages that walk prospects through the story of each project, just like a referral would in person.</p>

                        <div className="grid lg:grid-cols-3 gap-8 mb-16">
                            {/* Project 1 */}
                            <div className="group cursor-pointer relative">
                                <div className="aspect-video rounded-2xl overflow-hidden mb-6 relative shadow-lg group-hover:shadow-2xl group-hover:-translate-y-2 transition-all duration-500 ease-out">
                                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/20 to-transparent opacity-60 group-hover:opacity-40 transition-opacity z-10"></div>
                                    <img
                                        src="/images/horizon-retreat.png"
                                        alt="The Horizon Retreat - Luxe Builders"
                                        className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 ease-in-out"
                                    />
                                    {/* Overlay Content */}
                                    <div className="absolute bottom-4 left-4 right-4 z-20 flex justify-between items-end transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                                        <div>
                                            <span className="inline-block bg-white/95 backdrop-blur-md px-3 py-1 rounded-sm text-[10px] font-bold text-slate-900 uppercase tracking-widest mb-2 shadow-sm">Custom Build</span>
                                        </div>
                                        <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-slate-900 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-4 group-hover:translate-y-0 shadow-lg">
                                            <ArrowRight size={18} />
                                        </div>
                                    </div>
                                </div>
                                {/* Meta Info Below */}
                                <div className="pl-2">
                                    <h4 className="text-xl font-serif font-bold text-slate-900 group-hover:text-purple-600 transition-colors mb-2">
                                        The Horizon Retreat
                                    </h4>
                                    <div className="flex items-center gap-3 text-sm text-slate-500 border-l-2 border-slate-200 pl-3">
                                        <span>Austin, TX</span>
                                        <span className="w-1 h-1 rounded-full bg-slate-300"></span>
                                        <span>4,500 sq ft</span>
                                    </div>
                                </div>
                            </div>

                            {/* Project 2 */}
                            <div className="group cursor-pointer relative">
                                <div className="aspect-video rounded-2xl overflow-hidden mb-6 relative shadow-lg group-hover:shadow-2xl group-hover:-translate-y-2 transition-all duration-500 ease-out">
                                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/20 to-transparent opacity-60 group-hover:opacity-40 transition-opacity z-10"></div>
                                    <img
                                        src="/images/johnson-home.png"
                                        alt="The Johnson Family Home - Hearth & Home"
                                        className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 ease-in-out"
                                    />
                                    <div className="absolute bottom-4 left-4 right-4 z-20 flex justify-between items-end transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                                        <div>
                                            <span className="inline-block bg-white/95 backdrop-blur-md px-3 py-1 rounded-sm text-[10px] font-bold text-slate-900 uppercase tracking-widest mb-2 shadow-sm">Design-Build</span>
                                        </div>
                                        <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-slate-900 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-4 group-hover:translate-y-0 shadow-lg">
                                            <ArrowRight size={18} />
                                        </div>
                                    </div>
                                </div>
                                <div className="pl-2">
                                    <h4 className="text-xl font-serif font-bold text-slate-900 group-hover:text-purple-600 transition-colors mb-2">
                                        The Johnson Family Home
                                    </h4>
                                    <div className="flex items-center gap-3 text-sm text-slate-500 border-l-2 border-slate-200 pl-3">
                                        <span>Wauwatosa, WI</span>
                                        <span className="w-1 h-1 rounded-full bg-slate-300"></span>
                                        <span>3,800 sq ft</span>
                                    </div>
                                </div>
                            </div>

                            {/* Project 3 */}
                            <div className="group cursor-pointer relative">
                                <div className="aspect-video rounded-2xl overflow-hidden mb-6 relative shadow-lg group-hover:shadow-2xl group-hover:-translate-y-2 transition-all duration-500 ease-out">
                                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/20 to-transparent opacity-60 group-hover:opacity-40 transition-opacity z-10"></div>
                                    <img
                                        src="/images/coastal-retreat.png"
                                        alt="Coastal Modern Retreat"
                                        className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 ease-in-out"
                                    />
                                    <div className="absolute bottom-4 left-4 right-4 z-20 flex justify-between items-end transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                                        <div>
                                            <span className="inline-block bg-white/95 backdrop-blur-md px-3 py-1 rounded-sm text-[10px] font-bold text-slate-900 uppercase tracking-widest mb-2 shadow-sm">Luxury Remodel</span>
                                        </div>
                                        <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-slate-900 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-4 group-hover:translate-y-0 shadow-lg">
                                            <ArrowRight size={18} />
                                        </div>
                                    </div>
                                </div>
                                <div className="pl-2">
                                    <h4 className="text-xl font-serif font-bold text-slate-900 group-hover:text-purple-600 transition-colors mb-2">
                                        Coastal Modern Retreat
                                    </h4>
                                    <div className="flex items-center gap-3 text-sm text-slate-500 border-l-2 border-slate-200 pl-3">
                                        <span>Cape Cod, MA</span>
                                        <span className="w-1 h-1 rounded-full bg-slate-300"></span>
                                        <span>5,400 sq ft</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <h3 className="text-2xl font-bold text-slate-900 mb-8 border-b border-slate-200 pb-4">Custom Pages Built Around What Makes You Unique</h3>
                        <p className="text-slate-600 mb-10">Every builder is different. These pages are designed to showcase what makes YOUR business special.</p>

                        <div className="grid md:grid-cols-2 gap-8">
                            {/* Card 1: Homepage (Image Ready) */}
                            <div className="group cursor-pointer relative">
                                <div className="aspect-video rounded-2xl overflow-hidden mb-5 bg-slate-100 relative shadow-md group-hover:shadow-xl group-hover:-translate-y-1 transition-all duration-500 border border-slate-200">
                                    <div className="absolute inset-0 bg-slate-900/0 group-hover:bg-slate-900/10 transition-colors z-10"></div>
                                    <img
                                        src="/images/stonebrook-home.png"
                                        alt="Stonebrook Construction Homepage"
                                        className="w-full h-full object-cover object-top transform group-hover:scale-105 transition-transform duration-700"
                                    />
                                    <div className="absolute bottom-4 right-4 z-20 w-8 h-8 bg-white/90 backdrop-blur rounded-full flex items-center justify-center text-slate-900 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0 shadow-sm">
                                        <ArrowRight size={14} />
                                    </div>
                                </div>
                                <h4 className="font-bold text-slate-900 mb-1 group-hover:text-purple-600 transition-colors text-lg">Homepage That Makes the Perfect First Impression</h4>
                                <p className="text-sm text-slate-500">Clean, professional, immediately communicates what you do and who you serve</p>
                            </div>

                            {/* Card 2: Process Page (Image Ready) */}
                            <div className="group cursor-pointer relative">
                                <div className="aspect-video rounded-2xl overflow-hidden mb-5 bg-slate-100 relative shadow-md group-hover:shadow-xl group-hover:-translate-y-1 transition-all duration-500 border border-slate-200">
                                    <div className="absolute inset-0 bg-slate-900/0 group-hover:bg-slate-900/10 transition-colors z-10"></div>
                                    <img
                                        src="/images/prestige-process.png"
                                        alt="Prestige Build Process Page"
                                        className="w-full h-full object-cover object-top transform group-hover:scale-105 transition-transform duration-700"
                                    />
                                    <div className="absolute bottom-4 right-4 z-20 w-8 h-8 bg-white/90 backdrop-blur rounded-full flex items-center justify-center text-slate-900 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0 shadow-sm">
                                        <ArrowRight size={14} />
                                    </div>
                                </div>
                                <h4 className="font-bold text-slate-900 mb-1 group-hover:text-purple-600 transition-colors text-lg">Process Page That Builds Trust</h4>
                                <p className="text-sm text-slate-500">Step-by-step breakdown of what it's like to build or remodel with you</p>
                            </div>

                            {/* Card 3: About Page (Image Ready) */}
                            <div className="group cursor-pointer relative">
                                <div className="aspect-video rounded-2xl overflow-hidden mb-5 bg-slate-100 relative shadow-md group-hover:shadow-xl group-hover:-translate-y-1 transition-all duration-500 border border-slate-200">
                                    <div className="absolute inset-0 bg-slate-900/0 group-hover:bg-slate-900/10 transition-colors z-10"></div>
                                    <img
                                        src="/images/jacob-about.png"
                                        alt="Jacob Building Co About Page"
                                        className="w-full h-full object-cover object-top transform group-hover:scale-105 transition-transform duration-700"
                                    />
                                    <div className="absolute bottom-4 right-4 z-20 w-8 h-8 bg-white/90 backdrop-blur rounded-full flex items-center justify-center text-slate-900 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0 shadow-sm">
                                        <ArrowRight size={14} />
                                    </div>
                                </div>
                                <h4 className="font-bold text-slate-900 mb-1 group-hover:text-purple-600 transition-colors text-lg">About Page That Connects</h4>
                                <p className="text-sm text-slate-500">Your story, your team, why you do this work</p>
                            </div>

                            {/* Card 4: Service Pages (Image Ready) */}
                            <div className="group cursor-pointer relative">
                                <div className="aspect-video rounded-2xl overflow-hidden mb-5 bg-slate-100 relative shadow-md group-hover:shadow-xl group-hover:-translate-y-1 transition-all duration-500 border border-slate-200">
                                    <div className="absolute inset-0 bg-slate-900/0 group-hover:bg-slate-900/10 transition-colors z-10"></div>
                                    <img
                                        src="/images/really-good-service.png"
                                        alt="Really Good Construction Service Page"
                                        className="w-full h-full object-cover object-top transform group-hover:scale-105 transition-transform duration-700"
                                    />
                                    <div className="absolute bottom-4 right-4 z-20 w-8 h-8 bg-white/90 backdrop-blur rounded-full flex items-center justify-center text-slate-900 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0 shadow-sm">
                                        <ArrowRight size={14} />
                                    </div>
                                </div>
                                <h4 className="font-bold text-slate-900 mb-1 group-hover:text-purple-600 transition-colors text-lg">Service Pages That Educate</h4>
                                <p className="text-sm text-slate-500">Custom homes, remodels, design-build explained in detail</p>
                            </div>
                        </div>

                        <div className="mt-16 text-center">
                            <p className="text-xl text-slate-900 font-bold mb-6">Ready to see your work showcased like this?</p>
                            <Link to="/contact" className="inline-flex items-center bg-purple-600 text-white px-8 py-4 rounded-full font-bold hover:bg-purple-700 transition-colors">
                                Work With Us <ArrowRight className="ml-2" />
                            </Link>
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
                            Built With the Most Advanced Technology, Not Templates
                        </h2>
                        <p className="text-lg text-slate-300">
                            Here's what makes our websites different from every other agency out there.
                        </p>
                    </div>

                    <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
                        <div className="space-y-6 text-slate-300">
                            <p>
                                Most web agencies use WordPress templates or page builders. They pick a theme, swap your logo in, change some colors, and call it custom. It's not. It's a template that hundreds of other businesses are using.
                            </p>
                            <p className="text-white font-bold text-xl">
                                We use the newest AI-powered coding technology to build truly custom websites from scratch.
                            </p>
                            <p>
                                This is the same technology that would normally require a $50,000+ budget and a team of developers. We're able to deliver it for a fraction of that cost because AI handles the heavy lifting while we focus on strategy and design.
                            </p>

                            <ul className="space-y-4 pt-4">
                                {[
                                    "Truly custom design - Not limited by template constraints",
                                    "Lightning-fast loading speed - Hand-coded sites load 3-5x faster",
                                    "Mobile-optimized from scratch - Built mobile-first",
                                    "Scalable and flexible - Easy to add features as you grow",
                                    "Clean, modern code - SEO-friendly, secure, and future-proof"
                                ].map((item, i) => (
                                    <li key={i} className="flex gap-3 text-slate-200">
                                        <CheckCircle className="text-purple-500 shrink-0" size={20} />
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="bg-slate-800 rounded-2xl p-8 border border-slate-700 relative">
                            {/* Abstract Code Visualization */}
                            <div className="font-mono text-sm space-y-2 opacity-80">
                                <div className="text-blue-400">import <span className="text-white">React</span> from <span className="text-green-400">'react'</span>;</div>
                                <div className="text-purple-400">const <span className="text-yellow-400">CustomSite</span> = () ={'>'} {'{'}</div>
                                <div className="pl-4 text-slate-400">// AI-Optimized Architecture</div>
                                <div className="pl-4 text-blue-400">return (</div>
                                <div className="pl-8 text-white">{'<div className="performance-optimized">'}</div>
                                <div className="pl-12 text-white">{'<SEO structure="perfect" />'}</div>
                                <div className="pl-12 text-white">{'<LeadGen mode="active" />'}</div>
                                <div className="pl-8 text-white">{'</div>'}</div>
                                <div className="pl-4 text-blue-400">);</div>
                                <div className="text-purple-400">{'}'};</div>
                            </div>
                            <div className="absolute -bottom-6 -right-6 bg-gradient-to-r from-purple-600 to-blue-600 px-6 py-3 rounded-lg shadow-xl text-white font-bold">
                                $50K Quality for a Fraction of the Cost
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Comparison Table */}
            <section className="py-24 bg-slate-50">
                <div className="container mx-auto px-6 max-w-6xl">
                    <h2 className="text-3xl font-serif font-bold text-slate-900 mb-12 text-center">Why Work With a Builder-Focused Agency?</h2>

                    <div className="overflow-x-auto">
                        <table className="w-full text-left bg-white rounded-2xl overflow-hidden shadow-sm border border-slate-200">
                            <thead className="bg-slate-50 border-b border-slate-200">
                                <tr>
                                    <th className="p-6 text-slate-500 font-bold uppercase text-sm tracking-wider">Criteria</th>
                                    <th className="p-6 text-slate-500 font-bold uppercase text-sm tracking-wider">Generic Local Agency</th>
                                    <th className="p-6 text-purple-600 font-bold uppercase text-sm tracking-wider bg-purple-50">BuilderProject</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-slate-100">
                                <tr>
                                    <td className="p-6 font-bold text-slate-900">Point of Contact</td>
                                    <td className="p-6 text-slate-600">No dedicated contact or shuffled between team members</td>
                                    <td className="p-6 text-slate-900 font-medium bg-purple-50/30">Dedicated Account Manager throughout the entire process</td>
                                </tr>
                                <tr>
                                    <td className="p-6 font-bold text-slate-900">Will They Get Your Industry?</td>
                                    <td className="p-6 text-slate-600">Generic discovery. They work with dentists, lawyers, everyone</td>
                                    <td className="p-6 text-slate-900 font-medium bg-purple-50/30">We only work with residential builders and remodelers. 4 years exclusively</td>
                                </tr>
                                <tr>
                                    <td className="p-6 font-bold text-slate-900">How Involved Will I Be?</td>
                                    <td className="p-6 text-slate-600">You're doing most of the work: writing copy, gathering photos</td>
                                    <td className="p-6 text-slate-900 font-medium bg-purple-50/30">We guide you through everything. You provide raw materials, we handle the rest</td>
                                </tr>
                                <tr>
                                    <td className="p-6 font-bold text-slate-900">What Technology?</td>
                                    <td className="p-6 text-slate-600">WordPress templates or page builders</td>
                                    <td className="p-6 text-slate-900 font-medium bg-purple-50/30">Advanced AI-powered custom coding. $50K quality for a fraction of the cost</td>
                                </tr>
                                <tr>
                                    <td className="p-6 font-bold text-slate-900">Communication</td>
                                    <td className="p-6 text-slate-600">Sporadic updates. You're often wondering what's happening</td>
                                    <td className="p-6 text-slate-900 font-medium bg-purple-50/30">Scheduled calls throughout. You always know what's next</td>
                                </tr>
                                <tr>
                                    <td className="p-6 font-bold text-slate-900">After Launch?</td>
                                    <td className="p-6 text-slate-600">They hand off the site and disappear</td>
                                    <td className="p-6 text-slate-900 font-medium bg-purple-50/30">30-day post-launch monitoring and adjustments</td>
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
                            Included in Every Website
                        </h2>
                        <p className="text-xl text-slate-500 max-w-2xl mx-auto">
                            We don't nickel and dime. You get a complete, high-performance sales asset ready to generate leads.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
                        {/* Card 1 */}
                        <div className="group bg-white p-10 rounded-[2rem] border border-slate-100 shadow-xl hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 relative overflow-hidden">
                            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-purple-500 to-indigo-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 bg-origin-border"></div>

                            <div className="w-16 h-16 bg-purple-50 rounded-2xl flex items-center justify-center text-purple-600 mb-8 group-hover:scale-110 transition-transform duration-500">
                                <Compass size={32} />
                            </div>

                            <h3 className="text-2xl font-serif font-bold text-slate-900 mb-6">Strategic Foundation</h3>
                            <ul className="space-y-4">
                                {[
                                    "Deep-dive discovery & strategy session",
                                    "Competitor analysis & positioning",
                                    "Unique Value Proposition refinement",
                                    "Customer journey mapping"
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

                            <h3 className="text-2xl font-serif font-bold text-white mb-6">Premium Design & Dev</h3>
                            <ul className="space-y-4">
                                {[
                                    "Custom AI-coded architecture (No templates)",
                                    "Professional copywriting in your voice",
                                    "Mobile-first responsive design",
                                    "Ultra-fast loading speeds (90+ Google Score)"
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

                            <h3 className="text-2xl font-serif font-bold text-slate-900 mb-6">Launch & Support</h3>
                            <ul className="space-y-4">
                                {[
                                    "Dedicated Account Manager",
                                    "Personalized video walkthrough of your site",
                                    "Foundational SEO setup & indexing",
                                    "30-day post-launch hyper-care & updates"
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
                            How Our 2-3 Week Process Works
                        </h2>
                        <p className="text-lg text-slate-400 max-w-2xl mx-auto">
                            Most agencies takes 6-8 weeks. We take 2-3 weeks. Fast enough to launch quickly, strategic enough to convert.
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
                                    <h3 className="text-xl font-bold text-white mb-2">Week 1: Discovery & Build</h3>
                                    <p className="text-slate-400 mb-6 text-sm leading-relaxed">We learn your business, identify your unique differentiators, and map your customer journey. Our dev team builds simultaneously using AI.</p>
                                    <div className="p-4 bg-slate-900/50 rounded-lg text-xs font-mono text-purple-300 border border-slate-800 flex items-center gap-2">
                                        <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
                                        Calls: Kickoff, Brand Deep Dive
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
                                    <h3 className="text-xl font-bold text-white mb-2">Week 2: Refinement</h3>
                                    <p className="text-slate-400 mb-6 text-sm leading-relaxed">We write all copy in your voice, integrate photos, and build featured project pages. You get daily updates regarding progress.</p>
                                    <div className="p-4 bg-slate-900/50 rounded-lg text-xs font-mono text-blue-300 border border-slate-800 flex items-center gap-2">
                                        <div className="w-2 h-2 rounded-full bg-yellow-500"></div>
                                        Your Time: 30-60 mins feedback
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
                                    <h3 className="text-xl font-bold text-white mb-2">Week 3: Launch</h3>
                                    <p className="text-slate-400 mb-6 text-sm leading-relaxed">We send a video walkthrough. You review, we make final tweaks, and then we launch your new sales engine.</p>
                                    <div className="p-4 bg-slate-900/50 rounded-lg text-xs font-mono text-green-300 border border-slate-800 flex items-center gap-2">
                                        <div className="w-2 h-2 rounded-full bg-purple-500"></div>
                                        Outcome: Live Site
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
                            { q: "How much does a custom home builder website cost?", a: "Most agencies that do quality work charge $10,000 to $25,000 for custom home builder websites. However, BuilderProject uses revolutionary AI coding and design tools to build better websites faster and more affordably. A 20-page custom website that would normally cost $25,000 is only $5,000 with our AI-powered approach. Our base package starts at $5,000 and includes everything most builders need like homepage, service pages, about us, and portfolio. Standard custom websites with featured project pages range from $8,000 to $12,000. Premium websites with advanced functionality cost $15,000 to $20,000. We deliver $50,000-quality websites using cutting-edge technology that makes premium custom development accessible to more builders without sacrificing quality or customization." },
                            { q: "How long does it take to build a custom home builder website?", a: "BuilderProject builds custom home builder websites in 2-3 weeks from kickoff to launch, which is significantly faster than traditional agencies that take 6-8 weeks or more. Week 1 includes discovery calls, strategy development, and initial build using our AI-powered coding technology. Week 2 focuses on content integration, copywriting, and design refinement based on your specific business needs. Week 2-3 includes client review, revisions, and launch preparation. This accelerated timeline is possible because we use advanced AI coding tools that eliminate the traditional development bottlenecks, while still delivering fully custom websites that are optimized for lead conversion and built specifically for your business." },
                            { q: "What makes a good custom home builder website?", a: "A high-converting custom home builder website includes featured project pages that tell complete project stories rather than just photo galleries, clear process pages explaining what it's like to work with the builder, professional photography or AI-generated images showcasing craftsmanship, fast loading speeds under 3 seconds, mobile optimization for all devices, foundational SEO with proper metadata and sitemap submission, multiple conversion paths including contact forms and qualification funnels, and brand consistency that matches the quality of homes built. BuilderProject websites convert at 2.5% on average compared to typical builder sites converting at less than 1%, which means more website visitors actually become qualified leads for your business." },
                            { q: "Do custom home builder websites need professional photography?", a: "Professional photography significantly improves website conversion rates for custom home builders by communicating quality, attention to detail, and premium craftsmanship. However, BuilderProject offers an innovative alternative using AI technology to generate photorealistic images from just a couple of your phone pictures, architectural plans, or 3D renderings. This creates stunning visuals at a fraction of professional photography costs, which typically run $1,500-$3,000 per project. AI-generated images provide consistent, high-quality visuals for showcasing your work and can even create images of projects in different lighting conditions or seasons. We can also work with existing high-quality phone photos if lighting and composition are good, and most builders showcase 3-5 of their best projects using either professional photos, AI-enhanced imagery, or high-quality phone photography." },
                            { q: "What is the difference between a template website and a custom-coded website for builders?", a: "Template websites use pre-built WordPress themes or page builders that hundreds of businesses use, which limits customization options and typically results in slower loading speeds. Custom-coded websites are built from scratch specifically for your business using advanced AI-powered coding technology that creates truly unique designs not constrained by template limitations. Custom sites load 3-5 times faster than template sites because they don't carry the bloated code common in page builders, are mobile-optimized from scratch rather than adapted from desktop templates, offer unlimited scalability for adding new features as your business grows, and have cleaner SEO-friendly code that search engines prefer. BuilderProject uses AI coding technology to deliver custom-quality websites at competitive pricing while maintaining all the benefits of fully custom development." },
                            { q: "How do custom home builder websites generate leads?", a: "Custom home builder websites generate leads through multiple strategic conversion paths designed to capture prospects at different stages of their decision-making process. Qualification funnels pre-screen prospects on budget, timeline, service area, and land ownership before booking calls, ensuring you only speak with serious prospects. Lead magnet funnels offer valuable resources like budget calculators or planning guides in exchange for contact information from prospects who aren't ready to talk yet. Clear calls-to-action throughout every page guide visitors toward taking the next step, while click-to-call functionality on mobile devices makes it easy for prospects to reach you immediately. Contact forms are optimized for low friction with minimal required fields, and SEO optimization helps the site rank for high-intent searches like \"custom home builder near me.\" The combination of professional design with strategic conversion optimization turns website visitors into qualified leads consistently." },
                            { q: "What should be included on a custom home builder website?", a: "Every custom home builder website needs essential core pages including a homepage that immediately communicates what you do and who you serve, 3-4 detailed service pages explaining custom homes, remodels, and design-build services, an about page featuring your story, team, and values, and a contact page with multiple ways to reach you. For project showcase elements, you need 3-8 featured project pages with complete stories, photos, budgets, and timelines, a portfolio gallery for additional work, and client testimonials integrated throughout the site. Trust-building components include a detailed process page explaining your step-by-step approach, qualification funnels to pre-screen prospects, and thank you pages that continue engagement after initial contact. Lead generation features should include lead magnets like budget calculators or planning guides, clear calls-to-action on every page, and multiple contact methods including forms, phone, and text options. BuilderProject includes all essential pages plus custom pages built around what makes your specific business unique in your market." },
                            { q: "How important is website speed for custom home builder websites?", a: "Website speed is critically important for conversions because sites that load in under 3 seconds convert significantly better than slower sites, and 53% of mobile visitors abandon sites that take longer than 3 seconds to load. For custom home builders targeting affluent demographics with budgets exceeding $1 million, slow websites signal unprofessionalism and can cost you high-value prospects before they even see your work. Google also uses page speed as a ranking factor for SEO, meaning faster sites are more likely to appear in search results when prospects are looking for builders. BuilderProject uses AI-powered custom coding and optimized images in WebP format to achieve loading speeds under 3 seconds consistently, compared to template sites that often load in 5-8 seconds due to bloated code and inefficient page builders that drag down performance." },
                            { q: "Should custom home builder websites show pricing?", a: "Custom home builder websites should include pricing ranges rather than exact prices because showing budget ranges like \"$800K-$1.5M for custom homes\" or \"$250K+ for whole-home remodels\" helps pre-qualify prospects and attracts clients who can actually afford your services. This transparency builds trust with serious prospects and filters out those with unrealistic budgets before they waste your time on consultations that won't lead to projects. Featured project pages should include budget ranges for each showcased project to give prospects concrete examples of what different investment levels can achieve. Avoid showing exact per-square-foot pricing since custom builds have too many variables including lot conditions, finishes, and complexity, but providing ranges sets proper expectations and positions you appropriately in your market while demonstrating transparency about investment levels required." },
                            { q: "What is a featured project page and why do custom home builders need them?", a: "Featured project pages are detailed, story-driven pages that showcase individual custom home projects, replicating the experience of a referral walking someone through a completed home rather than just showing a photo gallery. These pages include the complete story of who the client was (while maintaining privacy), what challenge they were solving, the builder's approach and design decisions, featured details and craftsmanship callouts, before-and-after comparisons for remodels, full project galleries with 12-20 photos, authentic client testimonials, and comprehensive project stats including timeline, budget range, and square footage. Featured project pages keep visitors engaged 3 times longer than simple gallery pages and convert at significantly higher rates because prospects understand the full value and experience of working with the builder. They build trust by showing the complete process and results, not just the finished product." },
                            { q: "How do custom home builder websites rank on Google?", a: "Custom home builder websites rank on Google through comprehensive SEO that includes foundational on-page optimization like optimized page titles, meta descriptions, header tags, image alt text, fast loading speed, mobile optimization, and sitemap submission to Google Search Console. Off-page SEO involves creating helpful content that answers prospect questions, maintaining consistent business citations across online directories, earning backlinks from reputable local sites and industry publications, and optimizing Google Business Profile with regular posts and encouraging client reviews. BuilderProject websites include all foundational SEO elements built into the site architecture from launch. Rankings typically develop over 6-12 months with consistent effort, and builders should target local keywords like \"custom home builder [city name]\" and question-based keywords like \"how much does it cost to build a custom home in [city]\" to capture high-intent searches from qualified prospects." },
                            { q: "What's the ROI of a professional custom home builder website?", a: "Custom home builder websites typically pay for themselves with a single project because the average custom home generates significant revenue relative to the website investment. If a $10,000 website generates 100 visitors per month and converts at 2.5% (BuilderProject's average conversion rate), that produces 2-3 qualified leads monthly or 30+ leads annually. When even one of those leads becomes a $1 million custom home project, the return on investment is 100 times the initial website cost. The website also functions as your best salesperson working 24/7, generates leads for years without ongoing costs, builds brand credibility in your market, and supports all other marketing efforts since ads, social media, and referrals all direct prospects back to your website. Compared to paying monthly referral fees or lead generation services, a professional website is a one-time investment that compounds returns over time." },
                            { q: "How easy is it to request changes or updates to my custom home builder website?", a: "BuilderProject creates fully custom-coded websites rather than template-based sites, so we handle all updates and changes professionally to maintain site integrity and performance. Requesting updates is simple through email or phone, and we bill updates at $100 per hour with most small changes like updating text, swapping photos, or adding portfolio images taking 15-30 minutes to complete. Larger updates like new pages or functionality enhancements are quoted upfront so you know the investment before work begins. We also offer ongoing website management packages starting at $500 per month for clients who want regular updates handled automatically, which includes content updates, photo changes, and minor design adjustments without per-hour billing. This approach ensures your website stays current and performs optimally while giving you flexibility in how you manage ongoing changes." },
                            { q: "How do custom home builder websites compete with Houzz and other directories?", a: "Custom home builders need their own website in addition to directory profiles like Houzz rather than instead of them, because your website serves as your owned digital property where you control messaging, capture leads directly without paying referral fees, build your unique brand identity, rank for your company name on Google, and create trust through detailed storytelling. Directories provide valuable visibility and credibility but should funnel traffic to your website for conversion since that's where prospects can get the complete picture of your capabilities and process. The strategic approach involves using directories for discovery and initial credibility while your website does the heavy lifting of education, trust-building, and conversion. BuilderProject websites are specifically designed to convert directory traffic into qualified leads through compelling storytelling, clear process explanations, and strategic calls-to-action that move prospects from browsing to booking consultations." },
                            { q: "What website features convert the best for custom home builders?", a: "The highest-converting website features for custom home builders include qualification funnels that pre-screen prospects on budget, timeline, and project scope before booking calls to reduce wasted consultations, featured project pages with complete stories rather than simple galleries that keep visitors engaged 3 times longer, clear process pages that reduce prospect fear and build confidence in your approach, video content including project walkthroughs and process explanations that build trust, client testimonials with specific details about the experience rather than generic praise, multiple contact methods including forms, phone, text, and calendar booking to accommodate different communication preferences, lead magnets like budget calculators or planning guides that capture early-stage prospects, fast loading speed under 3 seconds that prevents visitors from abandoning the site, and comprehensive mobile optimization since many prospects browse on phones. BuilderProject integrates all these features using conversion psychology principles and builder-specific best practices developed through working exclusively with residential construction companies." }
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
                    <h2 className="text-4xl font-serif font-bold mb-6">Ready to Transform Your Website Into Your Best Sales Tool?</h2>
                    <p className="text-xl text-slate-400 mb-10">
                        If you're tired of your website not reflecting the quality of your work, let's talk.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link to="/contact" className="inline-flex items-center bg-purple-600 hover:bg-purple-700 text-white px-8 py-4 rounded-full font-bold transition-all hover:scale-105 shadow-[0_0_20px_rgba(147,51,234,0.3)]">
                            Schedule Strategy Call <ArrowRight className="ml-2" />
                        </Link>
                        <Link to="/case-studies" className="inline-flex items-center border border-slate-600 hover:bg-slate-800 text-white px-8 py-4 rounded-full font-bold transition-all">
                            See More Examples
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default WebsiteDesign;
