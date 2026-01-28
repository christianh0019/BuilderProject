import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, ChevronDown, ChevronUp, Layout, MousePointerClick, Search, Smartphone, Users, Zap, Clock, TrendingUp, AlertTriangle, ShieldCheck } from 'lucide-react';
import BrowserFrame from '../../components/ui/BrowserFrame';
import VersoShowcase from '../../components/website/VersoShowcase';
import Modal from '../../components/ui/Modal';

// Components reused from Quickstart
const versoLogo = '/verso-logo.png';
const interiorKitchen = '/images/modern_kitchen.png';
const exteriorFront = '/images/homestead-hero.png';
const interiorLiving = '/images/stonebrook-hero.png';
const exteriorRear = '/images/open-prairie-poster.jpg';
const exteriorSide = '/images/eagle-rock-update.png';

const FoundationProgram: React.FC = () => {
    const [openFaq, setOpenFaq] = useState<number | null>(null);
    const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);

    const toggleFaq = (index: number) => {
        setOpenFaq(openFaq === index ? null : index);
    };

    return (
        <div className="pt-20">
            {/* 1. Hero Section */}
            <section className="relative bg-[#0F172A] text-white pt-32 pb-32 overflow-hidden">
                {/* Background Effects */}
                <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-blue-900/20 rounded-full blur-[120px] pointer-events-none mix-blend-screen animate-pulse"></div>
                <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-purple-900/10 rounded-full blur-[100px] pointer-events-none mix-blend-screen"></div>

                <div className="container mx-auto px-6 relative z-10">
                    <div className="max-w-7xl mx-auto text-center mb-20">
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-900/30 border border-blue-500/30 mb-8 backdrop-blur-sm">
                            <span className="flex h-2 w-2 rounded-full bg-blue-400 animate-pulse"></span>
                            <span className="text-sm font-medium text-blue-200 uppercase tracking-widest">Digital Infrastructure</span>
                        </div>

                        <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif font-bold mb-8 leading-tight tracking-tight">
                            Build Your Marketing <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-blue-400">Foundation Right. Once.</span> <br />
                            Then Scale.
                        </h1>

                        <p className="text-xl md:text-2xl text-slate-300 mb-10 max-w-3xl mx-auto leading-relaxed font-light">
                            Before you spend another dollar on ads, your website, brand, and lead capture systems need to work. We set up everything you need in 3 weeks for one price.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-5 justify-center items-center">
                            <button onClick={() => setIsBookingModalOpen(true)} className="group relative inline-flex items-center justify-center px-8 py-4 text-base font-bold text-white transition-all duration-200 bg-blue-600 font-pj rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-600 hover:bg-blue-700 shadow-[0_0_20px_rgba(37,99,235,0.4)] hover:shadow-[0_0_30px_rgba(37,99,235,0.6)]">
                                Get Started
                                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            </button>
                        </div>
                    </div>

                    {/* Visual: Before/After */}
                    <div className="relative max-w-6xl mx-auto grid md:grid-cols-2 gap-8 items-center">
                        <div className="bg-slate-800 p-6 rounded-2xl border border-red-500/30 relative opacity-75 grayscale hover:grayscale-0 transition-all duration-500">
                            <div className="absolute top-4 right-4 bg-red-500 text-white text-xs font-bold px-3 py-1 rounded-full z-20">BEFORE</div>
                            <div className="bg-slate-900 rounded-lg p-4 mb-4 border border-slate-700">
                                <div className="h-4 w-3/4 bg-slate-700 rounded mb-2"></div>
                                <div className="h-3 w-1/2 bg-slate-800 rounded mb-6"></div>
                                <div className="h-32 bg-slate-800 rounded flex items-center justify-center text-slate-600 text-sm">
                                    [Generic Stock Photo]
                                </div>
                            </div>
                            <div className="flex gap-2 text-xs text-red-300">
                                <AlertTriangle size={14} /> Only "Contact Us" form
                            </div>
                            <div className="flex gap-2 text-xs text-red-300 mt-1">
                                <AlertTriangle size={14} /> Invisible on Google Maps
                            </div>
                        </div>

                        <div className="bg-slate-800 p-6 rounded-2xl border border-emerald-500/50 relative shadow-2xl transform md:-translate-y-4 ring-1 ring-emerald-500/20">
                            <div className="absolute top-4 right-4 bg-emerald-500 text-white text-xs font-bold px-3 py-1 rounded-full z-20">AFTER</div>
                            <div className="transform scale-95 origin-top">
                                <BrowserFrame url="yoursite.com">
                                    <VersoShowcase />
                                </BrowserFrame>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 2. Two Paths */}
            <section className="py-24 bg-white">
                <div className="container mx-auto px-6 max-w-6xl">
                    <div className="grid md:grid-cols-2 gap-12 relative">
                        {/* Divider */}
                        <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-slate-200 -ml-px"></div>
                        <div className="hidden md:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 bg-white border border-slate-200 rounded-full items-center justify-center text-slate-400 font-bold z-10">OR</div>

                        {/* Path 1 */}
                        <div className="md:pr-12 text-center md:text-right">
                            <div className="inline-block p-3 bg-blue-50 text-blue-600 rounded-2xl mb-6">
                                <TrendingUp size={32} />
                            </div>
                            <h3 className="text-2xl font-bold text-slate-900 mb-4">Starting a New Company</h3>
                            <p className="text-slate-600 leading-relaxed mb-6">
                                You're launching your building business and you want to do it right from the beginning. No amateur website. No winging it. You want to look established from day one so you attract the right clients and command premium pricing.
                            </p>
                        </div>

                        {/* Path 2 */}
                        <div className="md:pl-12 text-center md:text-left">
                            <div className="inline-block p-3 bg-purple-50 text-purple-600 rounded-2xl mb-6">
                                <Clock size={32} />
                            </div>
                            <h3 className="text-2xl font-bold text-slate-900 mb-4">Stuck on Referrals</h3>
                            <p className="text-slate-600 leading-relaxed mb-6">
                                You've been building for years. Your work is excellent. But 90% of your business comes from referrals. Your website generates zero leads. Your Google presence is weak. You know you're leaving money on the table.
                            </p>
                        </div>
                    </div>

                    <div className="mt-16 text-center max-w-3xl mx-auto bg-slate-50 p-8 rounded-2xl border border-slate-100">
                        <h4 className="font-bold text-lg text-slate-800 mb-2">Both paths lead here:</h4>
                        <p className="text-slate-600">
                            You need a complete digital foundation that makes you look professional, captures leads, and works 24/7 to grow your business.
                        </p>
                    </div>
                </div>
            </section>


            {/* 3. Leaky Bucket */}
            <section className="py-24 bg-slate-50">
                <div className="container mx-auto px-6 max-w-4xl text-center">
                    <h2 className="text-3xl md:text-5xl font-serif font-bold text-slate-900 mb-6">
                        Running Ads Without A Foundation Is Like <br />
                        <span className="text-red-600">Pouring Water Into a Leaky Bucket</span>
                    </h2>

                    <div className="grid md:grid-cols-2 gap-8 mt-12 mb-12">
                        <div className="bg-white p-8 rounded-2xl border border-red-200 shadow-sm">
                            <h3 className="font-bold text-slate-900 mb-4 text-lg">Scenario A: The Amateur Site</h3>
                            <p className="text-slate-500 mb-4 text-sm">Ad Spend: $5,000 → Traffic: 500 Visitors</p>
                            <div className="flex items-center justify-between bg-red-50 p-4 rounded-lg mb-2">
                                <span className="font-bold text-red-700">Conversion Rate</span>
                                <span className="font-bold text-red-700">0.5%</span>
                            </div>
                            <div className="font-bold text-2xl text-slate-900">2-3 Leads</div>
                        </div>

                        <div className="bg-white p-8 rounded-2xl border border-emerald-200 shadow-lg relative transform md:-translate-y-4">
                            <div className="absolute top-0 right-0 bg-emerald-500 text-white text-xs font-bold px-3 py-1 rounded-bl-lg rounded-tr-lg">WITH FOUNDATION</div>
                            <h3 className="font-bold text-slate-900 mb-4 text-lg">Scenario B: The Foundation</h3>
                            <p className="text-slate-500 mb-4 text-sm">Ad Spend: $5,000 → Traffic: 500 Visitors</p>
                            <div className="flex items-center justify-between bg-emerald-50 p-4 rounded-lg mb-2">
                                <span className="font-bold text-emerald-700">Conversion Rate</span>
                                <span className="font-bold text-emerald-700">2.5%</span>
                            </div>
                            <div className="font-bold text-2xl text-slate-900">12-15 Leads</div>
                        </div>
                    </div>

                    <p className="text-xl font-medium text-slate-800">
                        "You can't scale what's broken. Fix the foundation first. Then marketing actually works."
                    </p>
                </div>
            </section>

            {/* 4. What's Included */}
            <section className="py-24 bg-white">
                <div className="container mx-auto px-6 max-w-6xl">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-5xl font-serif font-bold text-slate-900 mb-6">What You Actually Get</h2>
                        <p className="text-xl text-slate-500">We don't just "build a website". We install a revenue system.</p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            {
                                title: "High-Converting Website",
                                problem: "Current site looks cheap & converts nobody.",
                                solution: "Custom site reflecting craftsmanship.",
                                result: "Visitors become leads (2.5% conversion).",
                                icon: Layout
                            },
                            {
                                title: "CRM & Lead Capture",
                                problem: "Leads scattered in texts/emails.",
                                solution: "Centralized pipeline & automation.",
                                result: "No lead ever falls through the cracks.",
                                icon: Users
                            },
                            {
                                title: "Google Domination",
                                problem: "Invisible when people search 'builder near me'.",
                                solution: "Optimized Google Business Profile.",
                                result: "Free traffic from high-intent searchers.",
                                icon: Search
                            },
                            {
                                title: "Professional Branding",
                                problem: "Inconsistent logo & social look.",
                                solution: "Complete brand kit & templates.",
                                result: "Look like an established $10M company.",
                                icon: Zap
                            },
                            {
                                title: "Funnel Infrastructure",
                                problem: "Only 'Contact Us' page exists.",
                                solution: "Lead magnets & qualification steps.",
                                result: "Capture 10x more leads from same traffic.",
                                icon: MousePointerClick
                            },
                            {
                                title: "SEO Foundation",
                                problem: "Google doesn't know you exist.",
                                solution: "Technical SEO & site structure.",
                                result: "Asset that builds free traffic for years.",
                                icon: TrendingUp
                            }
                        ].map((item, i) => (
                            <div key={i} className="bg-white p-8 rounded-2xl border border-slate-200 hover:shadow-lg transition-shadow">
                                <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center mb-6">
                                    <item.icon size={24} />
                                </div>
                                <h3 className="font-bold text-xl text-slate-900 mb-4">{item.title}</h3>
                                <div className="space-y-3 text-sm">
                                    <div className="text-red-500 flex gap-2"><AlertTriangle size={14} className="shrink-0 mt-0.5" /> <span className="text-slate-500"><strong className="text-slate-700">Problem:</strong> {item.problem}</span></div>
                                    <div className="text-emerald-600 flex gap-2"><CheckCircle size={14} className="shrink-0 mt-0.5" /> <span className="text-slate-500"><strong className="text-slate-700">Solution:</strong> {item.solution}</span></div>
                                    <div className="mt-4 pt-4 border-t border-slate-100 font-bold text-slate-800">
                                        "{item.result}"
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 5. Long Term Savings */}
            <section className="py-24 bg-slate-900 text-white">
                <div className="container mx-auto px-6 max-w-4xl text-center">
                    <h2 className="text-3xl md:text-5xl font-serif font-bold mb-8">This Pays For Itself. <br /> Then Makes You Money.</h2>

                    <div className="bg-slate-800 rounded-3xl p-8 md:p-12 mb-10 border border-slate-700">
                        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
                            <div className="text-left md:w-1/2">
                                <h3 className="text-xl font-bold mb-4 text-red-300">The "Scattered" Way</h3>
                                <ul className="space-y-2 text-slate-400 text-sm">
                                    <li className="flex justify-between border-b border-slate-700 pb-2"><span>Website (doesn't convert)</span> <span>$3,000</span></li>
                                    <li className="flex justify-between border-b border-slate-700 pb-2"><span>Social Mgmt (1 yr)</span> <span>$12,000</span></li>
                                    <li className="flex justify-between border-b border-slate-700 pb-2"><span>Reputation Tool (1 yr)</span> <span>$6,000</span></li>
                                    <li className="flex justify-between border-b border-slate-700 pb-2"><span>SEO Setup</span> <span>$2,000</span></li>
                                    <li className="flex justify-between pt-2 font-bold text-white text-lg"><span>Total Year 1:</span> <span>$23,000+</span></li>
                                </ul>
                            </div>
                            <div className="hidden md:block h-32 w-px bg-slate-600"></div>
                            <div className="text-left md:w-1/2">
                                <h3 className="text-xl font-bold mb-4 text-emerald-400">The Foundation</h3>
                                <div className="text-5xl font-bold text-white mb-2">$4,997</div>
                                <div className="text-slate-400 mb-4">One-time investment.</div>
                                <p className="text-sm text-slate-300">
                                    A complete system that actually works together. One additional project from better conversion pays for this 5-10x over.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 6. What Happens After */}
            <section className="py-24 bg-white">
                <div className="container mx-auto px-6 max-w-4xl text-center">
                    <h2 className="text-3xl font-serif font-bold text-slate-900 mb-6">First Foundation. Then Scale.</h2>
                    <p className="text-lg text-slate-600 mb-12">The Foundation gets you operational and generating leads. What comes next?</p>

                    <div className="grid md:grid-cols-2 gap-6 text-left">
                        <div className="p-6 border border-slate-200 rounded-xl hover:border-blue-300 transition-colors">
                            <div className="font-bold text-slate-900 mb-2">Want to scale aggressively?</div>
                            <div className="text-blue-600 font-bold mb-2">→ Add The Pipeline</div>
                            <p className="text-slate-500 text-sm">Active lead generation with ads and content management.</p>
                        </div>
                        <div className="p-6 border border-slate-200 rounded-xl hover:border-purple-300 transition-colors">
                            <div className="font-bold text-slate-900 mb-2">Want complete dominance?</div>
                            <div className="text-purple-600 font-bold mb-2">→ Upgrade to Partner Program</div>
                            <p className="text-slate-500 text-sm">Full-service marketing department and fractional CMO.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* 7. Timeline */}
            <section className="py-24 bg-slate-50">
                <div className="container mx-auto px-6 max-w-4xl">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-5xl font-serif font-bold text-slate-900 mb-6">3 Weeks to Launch</h2>
                        <p className="text-xl text-slate-500">From broken (or nonexistent) to professional in less than a month.</p>
                    </div>

                    <div className="space-y-6 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-slate-300 before:to-transparent">
                        {[
                            { week: "Week 1", title: "Discovery & Strategy", desc: "We map out your brand, gather your assets, and begin the custom build." },
                            { week: "Week 2", title: "Build & Integration", desc: "CRM setup, funnel development, copywriting, and branding finalization." },
                            { week: "Week 3", title: "Optimization & Launch", desc: "Google optimization, technical SEO, training call, and live launch." }
                        ].map((item, i) => (
                            <div key={i} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                                <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white bg-slate-50 group-[.is-active]:bg-blue-600 group-[.is-active]:text-white shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 text-slate-500 font-bold z-10">
                                    {i + 1}
                                </div>
                                <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-white p-6 rounded-xl border border-slate-100 shadow-sm">
                                    <div className="font-bold text-blue-600 text-sm mb-1 uppercase tracking-wider">{item.week}</div>
                                    <div className="font-bold text-slate-900 text-lg mb-2">{item.title}</div>
                                    <p className="text-slate-500 text-sm">{item.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 9. Investment & FAQ */}
            <section className="py-24 bg-white">
                <div className="container mx-auto px-6 max-w-3xl">
                    <div className="text-center mb-16">
                        <div className="text-5xl font-bold text-slate-900 mb-4">$4,997</div>
                        <div className="text-xl text-slate-500">One-Time Investment. Lifetime Stats.</div>
                    </div>

                    <h2 className="text-3xl font-serif font-bold text-slate-900 mb-12 text-center">Common Questions</h2>
                    <div className="space-y-4">
                        {[
                            { q: "What if I'm brand new and don't have projects?", a: "We can use AI to generate photorealistic images from your plans or renderings, or showcase the types of projects you want to attract. You don't need 50 completed projects to launch professionally." },
                            { q: "How is this different from a web designer?", a: "A web designer builds a website. We build a complete foundation—website, CRM, funnels, branding, Google presence, and SEO. It's the difference between one piece versus a complete system." },
                            { q: "Can I add marketing services later?", a: "Yes. Foundation is designed to be standalone or the base for Pipeline or Partner programs. Start here, and scale when you are ready." },
                            { q: "What if my business is too small?", a: "If you close just one additional $500K project because your website finally generates leads, that's a 100x ROI. You're not paying for a website. You're paying for a lead-generation system." }
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

            {/* 11. Final CTA */}
            <section className="py-24 bg-slate-900 text-white text-center">
                <div className="container mx-auto px-6 max-w-4xl">
                    <h2 className="text-4xl font-serif font-bold mb-6">Stop Losing Leads to Amateur Digital Presence</h2>
                    <p className="text-xl text-slate-400 mb-10">
                        Whether you're starting fresh or fixing what's broken, your foundation determines everything that comes after.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <button onClick={() => setIsBookingModalOpen(true)} className="inline-flex items-center bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-full font-bold transition-all hover:scale-105 shadow-[0_0_20px_rgba(37,99,235,0.3)]">
                            Get Started <ArrowRight className="ml-2" />
                        </button>
                    </div>
                </div>
            </section>

            {/* Booking Modal */}
            <Modal isOpen={isBookingModalOpen} onClose={() => setIsBookingModalOpen(false)}>
                <iframe
                    src="https://api.leadconnectorhq.com/widget/booking/IBPe3yYeYt197wsoyG1r"
                    style={{ width: '100%', height: '800px', border: 'none' }}
                    id="booking-widget"
                    title="Booking Calendar"
                ></iframe>
            </Modal>
        </div>
    );
};

export default FoundationProgram;
