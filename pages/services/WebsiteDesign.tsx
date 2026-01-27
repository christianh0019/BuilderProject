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
            <section className="relative bg-[#0F172A] text-white pt-20 pb-32 overflow-hidden">
                {/* Abstract Background */}
                <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-purple-900/30 rounded-full blur-[120px] pointer-events-none"></div>
                <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-blue-900/20 rounded-full blur-[100px] pointer-events-none"></div>

                <div className="container mx-auto px-6 relative z-10">
                    <div className="max-w-5xl mx-auto text-center">
                        <h1 className="text-4xl md:text-6xl font-serif font-bold mb-8 leading-tight">
                            Custom Home Builder & Remodeler Website Design & Development <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">That Actually Generates Leads</span>
                        </h1>
                        <p className="text-xl text-slate-300 mb-10 max-w-3xl mx-auto leading-relaxed">
                            Stop losing $1M+ projects because prospects land on your site and think "this looks like it was built in 2010" instead of "this is exactly who I need to build my dream home."
                        </p>

                        <div className="grid md:grid-cols-3 gap-6 text-left max-w-4xl mx-auto mb-12">
                            <div className="flex gap-3">
                                <CheckCircle className="text-purple-400 shrink-0" />
                                <span className="text-slate-200 text-sm">Featured project pages that showcase your best builds and remodels with the story behind them</span>
                            </div>
                            <div className="flex gap-3">
                                <CheckCircle className="text-purple-400 shrink-0" />
                                <span className="text-slate-200 text-sm">Custom pages built around what makes you different (your process, design approach, past client experiences)</span>
                            </div>
                            <div className="flex gap-3">
                                <CheckCircle className="text-purple-400 shrink-0" />
                                <span className="text-slate-200 text-sm">Professional design that matches the quality of homes you build and projects you complete</span>
                            </div>
                        </div>

                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link to="/contact" className="bg-white text-slate-900 px-8 py-4 rounded-full font-bold hover:bg-purple-50 transition-colors shadow-[0_0_20px_rgba(255,255,255,0.3)] hover:shadow-[0_0_30px_rgba(255,255,255,0.5)]">
                                Work With Us
                            </Link>
                            <Link to="/case-studies" className="border border-slate-600 text-white px-8 py-4 rounded-full font-bold hover:bg-slate-800 transition-colors">
                                See Website Examples
                            </Link>
                        </div>
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

                            {/* Card 2: Process Page (Placeholder) */}
                            <div className="group cursor-pointer relative opacity-60 hover:opacity-100 transition-opacity">
                                <div className="aspect-video rounded-2xl overflow-hidden mb-5 bg-slate-50 relative shadow-sm border-2 border-dashed border-slate-200 flex flex-col items-center justify-center group-hover:border-purple-200 transition-colors">
                                    <div className="w-12 h-12 rounded-full bg-slate-100 flex items-center justify-center text-slate-400 mb-3 group-hover:text-purple-500 group-hover:bg-purple-50 transition-colors">
                                        <Layout size={24} />
                                    </div>
                                    <span className="text-xs font-bold uppercase tracking-widest text-slate-400">Awaiting Image</span>
                                </div>
                                <h4 className="font-bold text-slate-900 mb-1 group-hover:text-purple-600 transition-colors text-lg">Process Page That Builds Trust</h4>
                                <p className="text-sm text-slate-500">Step-by-step breakdown of what it's like to build or remodel with you</p>
                            </div>

                            {/* Card 3: About Page (Placeholder) */}
                            <div className="group cursor-pointer relative opacity-60 hover:opacity-100 transition-opacity">
                                <div className="aspect-video rounded-2xl overflow-hidden mb-5 bg-slate-50 relative shadow-sm border-2 border-dashed border-slate-200 flex flex-col items-center justify-center group-hover:border-purple-200 transition-colors">
                                    <div className="w-12 h-12 rounded-full bg-slate-100 flex items-center justify-center text-slate-400 mb-3 group-hover:text-purple-500 group-hover:bg-purple-50 transition-colors">
                                        <Users size={24} />
                                    </div>
                                    <span className="text-xs font-bold uppercase tracking-widest text-slate-400">Awaiting Image</span>
                                </div>
                                <h4 className="font-bold text-slate-900 mb-1 group-hover:text-purple-600 transition-colors text-lg">About Page That Connects</h4>
                                <p className="text-sm text-slate-500">Your story, your team, why you do this work</p>
                            </div>

                            {/* Card 4: Service Pages (Placeholder) */}
                            <div className="group cursor-pointer relative opacity-60 hover:opacity-100 transition-opacity">
                                <div className="aspect-video rounded-2xl overflow-hidden mb-5 bg-slate-50 relative shadow-sm border-2 border-dashed border-slate-200 flex flex-col items-center justify-center group-hover:border-purple-200 transition-colors">
                                    <div className="w-12 h-12 rounded-full bg-slate-100 flex items-center justify-center text-slate-400 mb-3 group-hover:text-purple-500 group-hover:bg-purple-50 transition-colors">
                                        <PenTool size={24} />
                                    </div>
                                    <span className="text-xs font-bold uppercase tracking-widest text-slate-400">Awaiting Image</span>
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
            <section className="py-24 bg-white">
                <div className="container mx-auto px-6 max-w-6xl">
                    <h2 className="text-3xl font-serif font-bold text-slate-900 mb-12 text-center">What's Included in Every Website</h2>
                    <div className="grid md:grid-cols-3 gap-8">
                        <div className="bg-slate-50 p-8 rounded-2xl border border-slate-100">
                            <h3 className="text-xl font-bold text-slate-900 mb-4 text-purple-600">Strategic Foundation</h3>
                            <ul className="space-y-3 text-sm text-slate-600">
                                <li>• 1 week of discovery and strategy work</li>
                                <li>• Multiple discovery calls</li>
                                <li>• We extract what makes you different</li>
                                <li>• Guidance on project selection</li>
                            </ul>
                        </div>
                        <div className="bg-slate-50 p-8 rounded-2xl border border-slate-100">
                            <h3 className="text-xl font-bold text-slate-900 mb-4 text-purple-600">Design & Development</h3>
                            <ul className="space-y-3 text-sm text-slate-600">
                                <li>• All website copy written in your voice</li>
                                <li>• Custom design (AI-powered coding)</li>
                                <li>• Mobile-responsive, lightning-fast</li>
                                <li>• Foundational SEO included</li>
                            </ul>
                        </div>
                        <div className="bg-slate-50 p-8 rounded-2xl border border-slate-100">
                            <h3 className="text-xl font-bold text-slate-900 mb-4 text-purple-600">Support & Management</h3>
                            <ul className="space-y-3 text-sm text-slate-600">
                                <li>• Dedicated Account Manager</li>
                                <li>• Video walkthrough of completed site</li>
                                <li>• 1 round of revisions included</li>
                                <li>• 30-day post-launch monitoring</li>
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
                            { q: "How can you build a custom website in 2-3 weeks?", a: "Two reasons. First, we use advanced AI-powered coding that builds 5-10x faster. Second, we've built this system for 100+ builders, so we know exactly what works." },
                            { q: "If you use AI, will my site look generic?", a: "The opposite. AI handles the code, allowing us to spend MORE time on custom design and storytelling. It's like a factory-built wall vs hand-framed; same result, just faster." },
                            { q: "Why does professional photography matter?", a: "Your website needs to showcase quality. Blurry phone photos say 'we cut corners'. Professional photos say 'we are high-end'." },
                            { q: "Can I just update my existing website?", a: "Sometimes. We'll audit it. If it's on old tech (slow WordPress), rebuilding is usually faster and better." },
                            { q: "Do you work with remodelers too?", a: "Yes. We work effectively with custom home builders AND whole-home remodelers doing $3M+ per year." }
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

            {/* Qualifier */}
            <section className="py-24 bg-slate-50">
                <div className="container mx-auto px-6 max-w-5xl">
                    <h2 className="text-3xl font-serif font-bold text-slate-900 mb-12 text-center">Who This Is For (And Who It's Not)</h2>
                    <div className="grid md:grid-cols-2 gap-8">
                        <div className="bg-white p-8 rounded-2xl border border-green-200 shadow-sm">
                            <h3 className="text-xl font-bold text-slate-900 mb-6 flex items-center gap-2">
                                <CheckCircle className="text-green-500" /> This is a good fit if:
                            </h3>
                            <ul className="space-y-3 text-slate-600">
                                <li>• You have completed projects you're proud of</li>
                                <li>• You're willing to invest 2-3 hours in discovery</li>
                                <li>• You want a custom site, not a template</li>
                                <li>• You're doing at least $3M/year</li>
                            </ul>
                        </div>
                        <div className="bg-slate-100 p-8 rounded-2xl border border-slate-200 opacity-75">
                            <h3 className="text-xl font-bold text-slate-500 mb-6 flex items-center gap-2">
                                <X className="text-red-400" /> This isn't a good fit if:
                            </h3>
                            <ul className="space-y-3 text-slate-500">
                                <li>• You're looking for the cheapest option</li>
                                <li>• You haven't defined your ideal client</li>
                                <li>• You refuse to invest in photography</li>
                                <li>• You want to micromanage every pixel</li>
                            </ul>
                        </div>
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
