import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, ChevronDown, ChevronUp, Target, Filter, Magnet, Calendar, MessageSquare, TrendingUp, DollarSign, Layout, Smartphone, Search, Monitor, BarChart3, Users } from 'lucide-react';
import SEO from '../../components/SEO';

const PaidAdvertising: React.FC = () => {
    const [openFaq, setOpenFaq] = useState<number | null>(null);

    const toggleFaq = (index: number) => {
        setOpenFaq(openFaq === index ? null : index);
    };

    return (
        <article className="pt-20 font-sans antialiased text-slate-900 bg-white">
            <SEO
                title="Google & Facebook Ads for Custom Builders | BuilderProject"
                description="Stop waiting for referrals. Run targeted ads that put your work in front of qualified homeowners ready to build—and fill your pipeline every single week."
                canonical="/services/paid-advertising"
                keywords="ppc for custom home builders, google ads for remodelers, facebook ads for builders, paid search for construction, lead generation for builders"
            />

            {/* Hero Section */}
            <section className="relative bg-[#0F172A] text-white pt-32 pb-32 overflow-hidden">
                {/* Background Effects */}
                <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-purple-900/20 rounded-full blur-[120px] pointer-events-none mix-blend-screen animate-pulse"></div>
                <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-blue-900/10 rounded-full blur-[100px] pointer-events-none mix-blend-screen"></div>

                <div className="container mx-auto px-6 relative z-10">
                    <div className="max-w-5xl mx-auto text-center mb-20">
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-900/30 border border-purple-500/30 mb-8 backdrop-blur-sm">
                            <span className="flex h-2 w-2 rounded-full bg-green-400 animate-pulse"></span>
                            <span className="text-sm font-medium text-purple-200 uppercase tracking-widest">PAID ADVERTISING</span>
                        </div>

                        <h1 className="text-[36px] md:text-7xl font-serif font-bold mb-8 leading-tight tracking-tight">
                            Google & Facebook Ads <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400">For Custom Home Builders & Remodelers</span>
                        </h1>

                        <p className="text-xl md:text-2xl text-slate-300 mb-10 max-w-3xl mx-auto leading-relaxed font-light">
                            Stop waiting for referrals. Run targeted ads that put your work in front of qualified homeowners ready to build—and fill your pipeline every single week.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-5 justify-center items-center">
                            <Link to="/contact" className="group relative inline-flex items-center justify-center px-8 py-4 text-base font-bold text-white transition-all duration-200 bg-purple-600 font-pj rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-600 hover:bg-purple-700 shadow-[0_0_20px_rgba(168,85,247,0.4)] hover:shadow-[0_0_30px_rgba(168,85,247,0.6)]">
                                Start Your Project
                                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            </Link>
                            <Link to="/case-studies" className="inline-flex items-center justify-center px-8 py-4 text-base font-bold text-slate-300 transition-all duration-200 bg-transparent border border-slate-700 rounded-full hover:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-slate-700 hover:text-white hover:border-slate-500">
                                View Ad Examples
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* The Gap (Stats Section) */}
            <section className="py-24 bg-white">
                <div className="container mx-auto px-6">
                    <div className="max-w-4xl mx-auto">
                        <h2 className="text-3xl md:text-4xl font-serif font-bold text-slate-900 mb-8 text-center">
                            Your Competitors Are Booked Out. <br />You're Waiting For Referrals. Here's Why.
                        </h2>

                        <div className="bg-slate-50 p-8 md:p-12 rounded-2xl border border-slate-200 mb-12">
                            <p className="text-xl text-slate-900 font-bold mb-6">They're running ads. You're not.</p>
                            <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                                While you're hoping your phone rings, they're running Facebook ads showing their work to homeowners with $1M+ budgets. They're showing up first on Google when someone searches "custom home builder near me." They're everywhere their prospects are looking.
                            </p>
                            <p className="text-lg text-slate-600 leading-relaxed">
                                Meanwhile, qualified homeowners are spending 7 hours a day on their phones. They're scrolling Instagram looking at dream homes. They're Googling builders in their area. If you're not there, you're invisible.
                            </p>
                        </div>

                        <div className="grid md:grid-cols-2 gap-8 text-center">
                            <div className="p-6 bg-purple-50 rounded-2xl border border-purple-100">
                                <div className="text-4xl font-bold text-purple-600 mb-2">$2M+</div>
                                <div className="text-sm uppercase tracking-wider text-slate-500 font-bold">Ad Spend Managed</div>
                            </div>
                            <div className="p-6 bg-purple-50 rounded-2xl border border-purple-100">
                                <div className="text-4xl font-bold text-purple-600 mb-2">$100M+</div>
                                <div className="text-sm uppercase tracking-wider text-slate-500 font-bold">Client Revenue Generated</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* The Solution (3-Tier System Strategy) */}
            <section className="py-24 bg-slate-900 text-white relative overflow-hidden">
                {/* Background Accents */}
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-purple-900/20 rounded-full blur-[100px] pointer-events-none"></div>
                <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-900/10 rounded-full blur-[100px] pointer-events-none"></div>

                <div className="container mx-auto px-6 max-w-6xl relative z-10">
                    <div className="text-center mb-16">
                        <span className="text-purple-400 font-bold tracking-wider text-sm uppercase mb-4 block">The Strategy</span>
                        <h2 className="text-3xl md:text-5xl font-serif font-bold text-white mb-6">
                            Facebook & Instagram Ads - The 3-Tier System
                        </h2>
                        <p className="text-lg text-slate-400 max-w-3xl mx-auto">
                            We don't just "run some ads and hope for the best." We build complete advertising systems with multiple campaigns working together.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {/* Tier 1 */}
                        <div className="bg-slate-800/50 p-8 rounded-2xl border border-slate-700 hover:border-blue-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/10 group">
                            <div className="w-14 h-14 bg-slate-800 rounded-xl flex items-center justify-center text-blue-400 mb-6 border border-slate-700 group-hover:scale-110 transition-transform shadow-lg">
                                <Magnet size={28} />
                            </div>
                            <h3 className="text-xl font-bold text-white mb-2">1. Top of Funnel</h3>
                            <p className="text-xs text-blue-300 font-bold uppercase tracking-wider mb-4">Lead Magnets</p>
                            <p className="text-slate-400 text-sm leading-relaxed mb-6">
                                Targets researchers who aren't ready to talk yet. Ads promote your budget calculator, planning guide, or design quiz. They download it, we capture their email, they enter your nurture sequence.
                            </p>
                            <div className="p-3 bg-slate-900/50 rounded-lg text-xs font-mono text-slate-300 border border-slate-800">
                                Goal: Build your database
                            </div>
                        </div>

                        {/* Tier 2 */}
                        <div className="bg-slate-800/50 p-8 rounded-2xl border border-slate-700 hover:border-purple-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/10 group">
                            <div className="w-14 h-14 bg-slate-800 rounded-xl flex items-center justify-center text-purple-400 mb-6 border border-slate-700 group-hover:scale-110 transition-transform shadow-lg">
                                <Layout size={28} />
                            </div>
                            <h3 className="text-xl font-bold text-white mb-2">2. Middle of Funnel</h3>
                            <p className="text-xs text-purple-300 font-bold uppercase tracking-wider mb-4">Brand Building</p>
                            <p className="text-slate-400 text-sm leading-relaxed mb-6">
                                Engagement campaigns with real project photos, testimonials, and educational content. We get them following you, watching your videos, and recognizing your brand as the local authority.
                            </p>
                            <div className="p-3 bg-slate-900/50 rounded-lg text-xs font-mono text-slate-300 border border-slate-800">
                                Goal: Awareness & Trust
                            </div>
                        </div>

                        {/* Tier 3 */}
                        <div className="bg-slate-800/50 p-8 rounded-2xl border border-slate-700 hover:border-green-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-green-500/10 group">
                            <div className="w-14 h-14 bg-slate-800 rounded-xl flex items-center justify-center text-green-400 mb-6 border border-slate-700 group-hover:scale-110 transition-transform shadow-lg">
                                <Calendar size={28} />
                            </div>
                            <h3 className="text-xl font-bold text-white mb-2">3. Bottom of Funnel</h3>
                            <p className="text-xs text-green-300 font-bold uppercase tracking-wider mb-4">Conversion</p>
                            <p className="text-slate-400 text-sm leading-relaxed mb-6">
                                Direct response ads pushing qualified prospects to book discovery calls. "Ready to build? Take our 2-minute survey." Only shown to engaged audiences.
                            </p>
                            <div className="p-3 bg-slate-900/50 rounded-lg text-xs font-mono text-slate-300 border border-slate-800">
                                Goal: Booked Appointments
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Google & Retargeting Grid */}
            <section className="py-24 bg-white mb-12">
                <div className="container mx-auto px-6 max-w-6xl">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-5xl font-serif font-bold text-slate-900 mb-6">
                            Capturing Active Demand
                        </h2>
                        <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                            We don't just rely on Facebook. We capture the people who are actively Googling for a builder right now.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8">
                        <div className="bg-slate-50 p-10 rounded-[2.5rem] border border-slate-200 hover:border-purple-200 transition-colors">
                            <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center text-blue-600 mb-8 shadow-sm">
                                <Search size={32} />
                            </div>
                            <h3 className="text-2xl font-serif font-bold text-slate-900 mb-4">Google Search Ads</h3>
                            <p className="text-slate-600 mb-6 leading-relaxed">
                                Show up at the very top when someone Googles "custom home builder [your city]" or "luxury remodeling contractor near me." These are the highest intent leads—they're actively looking RIGHT NOW. They are more expensive per click but close at much higher rates.
                            </p>
                            <div className="flex gap-2">
                                <span className="px-3 py-1 bg-blue-100 text-blue-700 text-xs font-bold rounded-full">High Intent</span>
                                <span className="px-3 py-1 bg-slate-200 text-slate-700 text-xs font-bold rounded-full">Immediate Action</span>
                            </div>
                        </div>

                        <div className="bg-slate-50 p-10 rounded-[2.5rem] border border-slate-200 hover:border-purple-200 transition-colors">
                            <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center text-purple-600 mb-8 shadow-sm">
                                <Monitor size={32} />
                            </div>
                            <h3 className="text-2xl font-serif font-bold text-slate-900 mb-4">Retargeting "The Follow-Up"</h3>
                            <p className="text-slate-600 mb-6 leading-relaxed">
                                Someone visits your website but doesn't convert. With retargeting, they start seeing your ads on Facebook, Instagram, and across the web for the next 30-90 days. We retarget everyone who visits your site or watches your videos.
                            </p>
                            <div className="flex gap-2">
                                <span className="px-3 py-1 bg-purple-100 text-purple-700 text-xs font-bold rounded-full">Brand Recall</span>
                                <span className="px-3 py-1 bg-slate-200 text-slate-700 text-xs font-bold rounded-full">Omnipresence</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Comparison Table */}
            <section className="py-24 bg-slate-50">
                <div className="container mx-auto px-6 max-w-6xl">
                    <h2 className="text-3xl font-serif font-bold text-slate-900 mb-12 text-center">What Makes Our Ads Different</h2>

                    <div className="overflow-x-auto">
                        <table className="w-full text-left bg-white rounded-2xl overflow-hidden shadow-sm border border-slate-200">
                            <thead className="bg-slate-50 border-b border-slate-200">
                                <tr>
                                    <th className="p-6 text-slate-500 font-bold uppercase text-sm tracking-wider">Feature</th>
                                    <th className="p-6 text-slate-500 font-bold uppercase text-sm tracking-wider">Most Agencies</th>
                                    <th className="p-6 text-purple-600 font-bold uppercase text-sm tracking-wider bg-purple-50">BuilderProject</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-slate-100">
                                <tr>
                                    <td className="p-6 font-bold text-slate-900">Creative</td>
                                    <td className="p-6 text-slate-600">Stock photos of houses that aren't yours</td>
                                    <td className="p-6 text-slate-900 font-medium bg-purple-50/30">Your actual project photos & videos</td>
                                </tr>
                                <tr>
                                    <td className="p-6 font-bold text-slate-900">Copywriting</td>
                                    <td className="p-6 text-slate-600">Generic "We build dreams" fluff</td>
                                    <td className="p-6 text-slate-900 font-medium bg-purple-50/30">Specific messaging targeting modern farmhouse vs estate buyers</td>
                                </tr>
                                <tr>
                                    <td className="p-6 font-bold text-slate-900">Destination</td>
                                    <td className="p-6 text-slate-600">Sends traffic to your homepage (low conversion)</td>
                                    <td className="p-6 text-slate-900 font-medium bg-purple-50/30">Dedicated landing pages & funnels built to convert</td>
                                </tr>
                                <tr>
                                    <td className="p-6 font-bold text-slate-900">Targeting</td>
                                    <td className="p-6 text-slate-600">Broad area targeting only</td>
                                    <td className="p-6 text-slate-900 font-medium bg-purple-50/30">Income levels, homeownership status, & behavioral data</td>
                                </tr>
                                <tr>
                                    <td className="p-6 font-bold text-slate-900">Optimization</td>
                                    <td className="p-6 text-slate-600">Set it and forget it</td>
                                    <td className="p-6 text-slate-900 font-medium bg-purple-50/30">Daily optimization & weekly testing of new angles</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </section>

            {/* Economics Section */}
            <section className="py-24 bg-white">
                <div className="container mx-auto px-6 max-w-4xl text-center">
                    <span className="text-green-600 font-bold tracking-wider text-sm uppercase mb-4 block">The ROI Math</span>
                    <h2 className="text-3xl md:text-5xl font-serif font-bold text-slate-900 mb-12">
                        The Economics That Make This Obvious
                    </h2>

                    <div className="bg-slate-900 text-white rounded-[2.5rem] p-10 md:p-16 shadow-2xl relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-green-500/10 rounded-full blur-[100px] pointer-events-none"></div>

                        <div className="space-y-8 relative z-10">
                            <div className="border-b border-slate-700 pb-8">
                                <p className="text-slate-400 text-lg mb-2">Investment (12 Months)</p>
                                <p className="text-3xl md:text-4xl font-bold">$60,000</p>
                                <p className="text-sm text-slate-500 mt-2">($5k/mo total spend + management)</p>
                            </div>

                            <div className="border-b border-slate-700 pb-8">
                                <p className="text-slate-400 text-lg mb-2">Revenue Generated (2 Closed Projects)</p>
                                <p className="text-3xl md:text-4xl font-bold text-green-400">$2,400,000</p>
                                <p className="text-sm text-slate-500 mt-2">(Conservative estimate: $1.2M avg build)</p>
                            </div>

                            <div>
                                <p className="text-slate-400 text-lg mb-2">Net Profit (20% Boilerplate Margin)</p>
                                <div className="text-5xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-emerald-500">
                                    $480,000
                                </div>
                                <div className="inline-block bg-green-900/50 text-green-300 px-6 py-2 rounded-full font-bold mt-6 border border-green-500/30">
                                    8x Return on Investment
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Timeline Section */}
            <section className="py-24 bg-slate-50">
                <div className="container mx-auto px-6 max-w-5xl">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-serif font-bold text-slate-900 mb-6">2 Weeks to Launch</h2>
                        <p className="text-lg text-slate-600">We move fast. Here is the roadmap to your first lead.</p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200">
                            <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center text-purple-600 font-bold text-xl mb-6">1</div>
                            <h3 className="text-xl font-bold text-slate-900 mb-2">Week 1: Build</h3>
                            <p className="text-slate-600 text-sm">Account setup, audience research, campaign building, and creative development. We send you previews for approval.</p>
                        </div>
                        <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200">
                            <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center text-purple-600 font-bold text-xl mb-6">2</div>
                            <h3 className="text-xl font-bold text-slate-900 mb-2">Week 2: Launch</h3>
                            <p className="text-slate-600 text-sm">Final approvals and go-live. Ads start running and initial data starts coming in.</p>
                        </div>
                        <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200">
                            <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center text-purple-600 font-bold text-xl mb-6">3</div>
                            <h3 className="text-xl font-bold text-slate-900 mb-2">Ongoing: Optimize</h3>
                            <p className="text-slate-600 text-sm">Daily optimization, weekly reporting, and monthly strategy reviews. We scale what works.</p>
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
                            { q: "How much should I spend on ads?", a: "$3K-$5K/month is the sweet spot for most builders. You can start at $2K but expect fewer leads. Scale up as you see ROI. We'll recommend based on your market and goals." },
                            { q: "How many leads will I get?", a: "Typically 10-30 qualified leads per month at $3K-$5K ad spend. Varies by market competitiveness and your pricing. Some markets are $50/lead, others are $200/lead." },
                            { q: "What if the leads are bad quality?", a: "Our qualification system filters before they reach you. If quality drops, we adjust targeting immediately. You should only see prospects who meet your budget and criteria." },
                            { q: "Do I have to manage the ads?", a: "No. We handle everything. Building campaigns, writing copy, designing creative, targeting, optimization, reporting. You just review weekly reports and take the calls." },
                            { q: "How is this different from hiring an ads agency?", a: "Most agencies just drive traffic. We drive qualified prospects to your calendar. We understand the long sales cycles in construction and set proper expectations. Plus we integrate with your CRM and funnels, not just send clicks to your website." },
                            { q: "Can I do this if I'm already booked out?", a: "You can, but consider lead flow carefully. We can dial campaigns up or down based on capacity. Some builders run ads year-round to maintain pipeline, others pulse based on availability." },
                            { q: "What if I tried ads before and they didn't work?", a: "Common issue: wrong targeting, bad creative, or nowhere proper to send traffic. We fix all three. Plus we've spent $2M testing what works specifically for builders. You're not starting from zero." }
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
                    <h2 className="text-4xl font-serif font-bold mb-6">Stop Hoping Your Phone Rings</h2>
                    <p className="text-xl text-slate-400 mb-10">
                        Paid ads give you a predictable lead source you control. Turn it up when you need more pipeline. Dial it down when you're at capacity.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link to="/contact" className="inline-flex items-center bg-purple-600 hover:bg-purple-700 text-white px-8 py-4 rounded-full font-bold transition-all hover:scale-105 shadow-[0_0_20px_rgba(147,51,234,0.3)]">
                            Start Generating Leads <ArrowRight className="ml-2" />
                        </Link>
                        <Link to="/contact" className="inline-flex items-center border border-slate-600 hover:bg-slate-800 text-white px-8 py-4 rounded-full font-bold transition-all">
                            Talk To Our Team
                        </Link>
                    </div>
                </div>
            </section>
        </article>
    );
};

export default PaidAdvertising;
