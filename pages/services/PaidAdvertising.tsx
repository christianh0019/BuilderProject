import React from 'react';
import { Link } from 'react-router-dom';
import { Target, Filter, Magnet, ArrowRight, MessageSquare, CheckCircle2, XCircle, Layout, Smartphone, Calendar } from 'lucide-react';

const PaidAdvertising: React.FC = () => {
    return (
        <article className="pt-20 font-sans antialiased text-slate-900 bg-white">
            {/* SEO Hidden H1 */}
            <h1 className="sr-only">Paid Advertising, PPC & Lead Generation for Custom Home Builders</h1>

            {/* Hero Section */}
            <section className="relative bg-[#0F172A] text-white pt-24 pb-32 overflow-hidden">
                <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-purple-900/20 rounded-full blur-[120px] pointer-events-none"></div>
                <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-blue-900/10 rounded-full blur-[100px] pointer-events-none"></div>

                <div className="container mx-auto px-6 relative z-10 text-center max-w-6xl">
                    <span className="inline-block py-1 px-3 rounded-full bg-purple-900/50 border border-purple-500 text-purple-300 text-xs font-bold tracking-wider uppercase mb-6">
                        Results You Can Deposit
                    </span>
                    <h2 className="text-5xl md:text-7xl font-serif font-bold mb-8 leading-tight max-w-5xl mx-auto">
                        Predictable Leads. <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">Guaranteed ROI.</span>
                    </h2>
                    <p className="text-xl text-slate-300 mb-12 max-w-3xl mx-auto leading-relaxed">
                        Stop boosting posts and hoping for the best. We build sophisticated <strong>Client Acquisition Funnels</strong> that filter, qualify, and book appointments automatically.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link to="/contact" className="bg-white text-slate-900 px-8 py-4 rounded-full font-bold hover:bg-purple-50 transition-colors">
                            Get Your Ad Audit
                        </Link>
                        <a href="#how-it-works" className="border border-slate-600 text-white px-8 py-4 rounded-full font-bold hover:bg-slate-800 transition-colors">
                            See The Funnel
                        </a>
                    </div>
                </div>
            </section>

            {/* The Old Way vs The New Way */}
            <section className="py-24 bg-white">
                <div className="container mx-auto px-6 max-w-6xl">
                    <h2 className="text-3xl font-serif font-bold text-slate-900 mb-16 text-center">Why Most Builder Ads Fail</h2>

                    <div className="grid md:grid-cols-2 gap-12">
                        {/* The Amateur Way */}
                        <div className="p-8 rounded-3xl bg-red-50 border border-red-100 relative opacity-75 hover:opacity-100 transition-opacity">
                            <div className="absolute -top-4 left-8 bg-red-600 text-white px-4 py-1 rounded-full text-xs font-bold uppercase tracking-wider">The Amateur Way</div>
                            <ul className="space-y-6 mt-4">
                                <li className="flex gap-4">
                                    <XCircle className="text-red-500 shrink-0" />
                                    <p className="text-red-900"><strong>Direct "Contact Us" Ads:</strong> Asking strangers to marry you on the first date. Results in 0 clicks.</p>
                                </li>
                                <li className="flex gap-4">
                                    <XCircle className="text-red-500 shrink-0" />
                                    <p className="text-red-900"><strong>No Filtering:</strong> You get calls from people with $200k budgets wanting a mansion. Wasted time.</p>
                                </li>
                                <li className="flex gap-4">
                                    <XCircle className="text-red-500 shrink-0" />
                                    <p className="text-red-900"><strong>Slow Follow-Up:</strong> You call them back 3 hours later. They've already moved on.</p>
                                </li>
                            </ul>
                        </div>

                        {/* The BuilderProject Way */}
                        <div className="p-8 rounded-3xl bg-green-50 border border-green-100 relative shadow-xl transform md:-translate-y-4">
                            <div className="absolute -top-4 left-8 bg-green-600 text-white px-4 py-1 rounded-full text-xs font-bold uppercase tracking-wider">The Pro System</div>
                            <ul className="space-y-6 mt-4">
                                <li className="flex gap-4">
                                    <CheckCircle2 className="text-green-600 shrink-0" />
                                    <p className="text-green-900"><strong>Lead Magnets:</strong> We give value first (e.g., Guide, Price Calculator) to earn their trust.</p>
                                </li>
                                <li className="flex gap-4">
                                    <CheckCircle2 className="text-green-600 shrink-0" />
                                    <p className="text-green-900"><strong>Strict Budget Filtering:</strong> We disqualify anyone who doesn't fit your budget criteria automatically.</p>
                                </li>
                                <li className="flex gap-4">
                                    <CheckCircle2 className="text-green-600 shrink-0" />
                                    <p className="text-green-900"><strong>Instant SMS Booking:</strong> Our AI texts them within 30 seconds to book a call on your calendar.</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* The Educational Deep Dive (Funnels, Magnets, Logic) */}
            <section id="how-it-works" className="py-24 bg-slate-900 text-white">
                <div className="container mx-auto px-6 max-w-6xl">
                    <div className="text-center mb-16">
                        <span className="text-blue-400 font-bold tracking-wider text-sm uppercase mb-4 block">The Engine Under The Hood</span>
                        <h2 className="text-4xl font-serif font-bold mb-6">How The "Perfect Funnel" Works</h2>
                        <p className="text-xl text-slate-300 max-w-3xl mx-auto">
                            We don't just "run ads." We build an ecosystem that turns strangers into booked appointments.
                        </p>
                    </div>

                    <div className="grid lg:grid-cols-3 gap-8">
                        {/* Step 1: The Magnet */}
                        <div className="bg-slate-800 p-8 rounded-2xl border border-slate-700 hover:border-blue-500 transition-colors group">
                            <div className="w-14 h-14 bg-slate-900 rounded-full flex items-center justify-center mb-6 border border-slate-700 group-hover:border-blue-500 transition-colors">
                                <Magnet className="text-blue-400" size={28} />
                            </div>
                            <h3 className="text-xl font-bold mb-4">1. The "Lead Magnet"</h3>
                            <p className="text-slate-400 mb-4 leading-relaxed">
                                Why would a wealthy landowner give you their number? Because we offer them something valuable in return.
                            </p>
                            <div className="bg-slate-900 p-4 rounded-lg text-sm text-slate-300 border border-slate-700">
                                <strong className="text-white block mb-2">Examples:</strong>
                                • "2024 Custom Home Cost Guide"<br />
                                • "Floor Plan Design Portfolio"<br />
                                • "Lot Evaluation Checklist"
                            </div>
                        </div>

                        {/* Step 2: The Filter */}
                        <div className="bg-slate-800 p-8 rounded-2xl border border-slate-700 hover:border-purple-500 transition-colors group">
                            <div className="w-14 h-14 bg-slate-900 rounded-full flex items-center justify-center mb-6 border border-slate-700 group-hover:border-purple-500 transition-colors">
                                <Filter className="text-purple-400" size={28} />
                            </div>
                            <h3 className="text-xl font-bold mb-4">2. The "Velvet Rope"</h3>
                            <p className="text-slate-400 mb-4 leading-relaxed">
                                Before they can talk to you, they must answer qualifying questions. We protect your time.
                            </p>
                            <div className="bg-slate-900 p-4 rounded-lg text-sm text-slate-300 border border-slate-700">
                                <strong className="text-white block mb-2">Required Questions:</strong>
                                • "Do you own land?"<br />
                                • "Is your budget over $1M?"<br />
                                • "When are you looking to build?"
                            </div>
                        </div>

                        {/* Step 3: The Conversion */}
                        <div className="bg-slate-800 p-8 rounded-2xl border border-slate-700 hover:border-green-500 transition-colors group">
                            <div className="w-14 h-14 bg-slate-900 rounded-full flex items-center justify-center mb-6 border border-slate-700 group-hover:border-green-500 transition-colors">
                                <Calendar className="text-green-400" size={28} />
                            </div>
                            <h3 className="text-xl font-bold mb-4">3. The Booking</h3>
                            <p className="text-slate-400 mb-4 leading-relaxed">
                                Qualified leads are immediately prompted to book a time on your calendar.
                            </p>
                            <div className="bg-slate-900 p-4 rounded-lg text-sm text-slate-300 border border-slate-700">
                                <strong className="text-white block mb-2">The Outcome:</strong>
                                You wake up to notifications: <br />
                                <span className="text-green-400">"New Appointment: Strategy Call with Mike (Land Owner, $1.5M Budget)"</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* The Visual Funnel Flow */}
            <section className="py-24 bg-white">
                <div className="container mx-auto px-6 max-w-6xl">
                    <h2 className="text-3xl font-serif font-bold text-slate-900 mb-12 text-center">Visualizing The Journey</h2>

                    <div className="relative flex flex-col md:flex-row items-center justify-between gap-8 md:gap-4 px-4 overflow-hidden">
                        <div className="absolute top-[50%] left-0 w-full h-1 bg-slate-100 -z-10 hidden md:block"></div>

                        {/* Step 1 */}
                        <div className="flex flex-col items-center text-center bg-white p-4">
                            <div className="w-20 h-20 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center mb-4 border border-blue-100 shadow-sm">
                                <Layout size={32} />
                            </div>
                            <h4 className="font-bold text-slate-900">Facebook Ad</h4>
                            <p className="text-xs text-slate-500">"Download Our Cost Guide"</p>
                        </div>

                        <ArrowRight className="text-slate-300 rotate-90 md:rotate-0" />

                        {/* Step 2 */}
                        <div className="flex flex-col items-center text-center bg-white p-4">
                            <div className="w-20 h-20 bg-purple-50 text-purple-600 rounded-2xl flex items-center justify-center mb-4 border border-purple-100 shadow-sm">
                                <Target size={32} />
                            </div>
                            <h4 className="font-bold text-slate-900">Landing Page</h4>
                            <p className="text-xs text-slate-500">Value Exchange</p>
                        </div>

                        <ArrowRight className="text-slate-300 rotate-90 md:rotate-0" />

                        {/* Step 3 */}
                        <div className="flex flex-col items-center text-center bg-white p-4">
                            <div className="w-20 h-20 bg-yellow-50 text-yellow-600 rounded-2xl flex items-center justify-center mb-4 border border-yellow-100 shadow-sm">
                                <Filter size={32} />
                            </div>
                            <h4 className="font-bold text-slate-900">Budget Quiz</h4>
                            <p className="text-xs text-slate-500">"What is your budget?"</p>
                        </div>

                        <ArrowRight className="text-slate-300 rotate-90 md:rotate-0" />

                        {/* Step 4 */}
                        <div className="flex flex-col items-center text-center bg-white p-4">
                            <div className="w-20 h-20 bg-green-50 text-green-600 rounded-2xl flex items-center justify-center mb-4 border border-green-100 shadow-sm">
                                <Smartphone size={32} />
                            </div>
                            <h4 className="font-bold text-slate-900">SMS Bot</h4>
                            <p className="text-xs text-slate-500">"Hey! When can you chat?"</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* CRM Automation */}
            <section className="py-24 bg-slate-50">
                <div className="container mx-auto px-6 max-w-6xl grid lg:grid-cols-2 gap-16 items-center">
                    <div>
                        <span className="text-blue-600 font-bold tracking-wider text-sm uppercase mb-4 block">Speed To Lead</span>
                        <h2 className="text-4xl font-serif font-bold text-slate-900 mb-6">We Chase The Leads. <br /> You Take The Meetings.</h2>
                        <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                            If you wait more than 5 minutes to call a lead, your chances of closing them drop by 80%. You're on a job site—you can't answer the phone instantly.
                            <br /><br />
                            Our <strong>CRM Automation</strong> handles it. As soon as a lead comes in, our system texts them, emails them, and nurtures them until they book a time on your calendar.
                        </p>
                        <ul className="space-y-4">
                            <li className="flex items-center gap-3">
                                <MessageSquare className="text-green-500" size={20} />
                                <span className="font-bold text-slate-700">Instant SMS Response (Under 60s)</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <MessageSquare className="text-green-500" size={20} />
                                <span className="font-bold text-slate-700">Long-term Email Nurture (6+ Months)</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <MessageSquare className="text-green-500" size={20} />
                                <span className="font-bold text-slate-700">Missed Call Text Back</span>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <div className="bg-white border border-slate-200 rounded-3xl shadow-2xl p-8 max-w-md mx-auto relative">
                            <div className="absolute top-0 left-0 w-full h-[60px] bg-slate-100 rounded-t-3xl border-b border-slate-200 flex items-center px-6 gap-4">
                                <div className="w-3 h-3 rounded-full bg-red-400"></div>
                                <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                                <div className="w-3 h-3 rounded-full bg-green-400"></div>
                            </div>
                            <div className="pt-12 space-y-6">
                                <div className="flex gap-4">
                                    <div className="w-10 h-10 rounded-full bg-slate-200 flex-shrink-0"></div>
                                    <div className="bg-slate-100 p-4 rounded-xl rounded-tl-none text-sm text-slate-600">
                                        Hi! I just downloaded the cost guide. Do you build in Hingham?
                                    </div>
                                </div>
                                <div className="flex gap-4 justify-end">
                                    <div className="bg-blue-600 p-4 rounded-xl rounded-tr-none text-sm text-white">
                                        Hey! Yes we do. We actually have 3 active projects there. Are you looking for a lot or do you already own land?
                                    </div>
                                    <div className="w-10 h-10 rounded-full bg-blue-100 flex-shrink-0 flex items-center justify-center font-bold text-blue-600">AI</div>
                                </div>
                                <div className="flex gap-4">
                                    <div className="w-10 h-10 rounded-full bg-slate-200 flex-shrink-0"></div>
                                    <div className="bg-slate-100 p-4 rounded-xl rounded-tl-none text-sm text-slate-600">
                                        We own a 2-acre lot on Main St. Looking to start this summer.
                                    </div>
                                </div>
                                <div className="flex gap-4 justify-end">
                                    <div className="bg-blue-600 p-4 rounded-xl rounded-tr-none text-sm text-white">
                                        That's great. Would you be open to a 15-min site feasibility call this Thursday?
                                    </div>
                                    <div className="w-10 h-10 rounded-full bg-blue-100 flex-shrink-0 flex items-center justify-center font-bold text-blue-600">AI</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-24 bg-white text-center">
                <div className="container mx-auto px-6 max-w-4xl">
                    <h2 className="text-4xl font-serif font-bold text-slate-900 mb-6">Stop Burning Budget. Start Booking Calls.</h2>
                    <p className="text-xl text-slate-600 mb-10">
                        Let us build your Client Acquisition Funnel. We'll audit your current ads for free.
                    </p>
                    <Link to="/contact" className="inline-flex items-center bg-slate-900 text-white px-8 py-4 rounded-full font-bold hover:bg-purple-600 transition-colors shadow-xl hover:shadow-2xl">
                        Schedule Your Free Audit <ArrowRight className="ml-2" />
                    </Link>
                </div>
            </section>
        </article>
    );
};

export default PaidAdvertising;
