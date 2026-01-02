import React from 'react';
import SurveyForm from '../components/SurveyForm';
import { CheckCircle2 } from 'lucide-react';
import { caseStudies } from '../data/caseStudies';

const AdvertisingLanding: React.FC = () => {
    return (
        <div className="min-h-screen bg-slate-50 flex flex-col">
            {/* Simple Header */}
            <div className="w-full bg-white border-b border-slate-100 py-4 px-6 fixed top-0 z-50">
                <div className="container mx-auto flex justify-between items-center text-sm font-bold text-slate-900">
                    <div className="flex items-center gap-2">
                        <img src="/images/logo_icon.png" alt="BuilderProject Logo" className="w-8 h-8 rounded-lg" />
                        <span className="text-xl font-serif tracking-tight">BuilderProject</span>
                    </div>
                    <span className="text-green-600 flex items-center gap-2">
                        <CheckCircle2 size={16} />
                        Accepting New Partners
                    </span>
                </div>
            </div>

            <div className="flex-grow pt-24 pb-20 px-6">
                <div className="container mx-auto">
                    <div className="max-w-4xl mx-auto">
                        {/* Hero Section */}
                        <div className="text-center mb-12">
                            <h1 className="text-4xl md:text-5xl font-serif font-bold text-slate-900 mb-6 leading-tight">
                                Land 1-10 New Projects In The Next Year <br className="hidden md:block" />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-700 to-pink-600">
                                    Guaranteed
                                </span>
                            </h1>
                            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                                We help Builders, Remodelers, and Design-Build Firms acquire high-value projects consistently.
                                Fill out the quick survey below to get access to our full 2026 marketing playbook and book a free complimentary strategy session.
                            </p>
                        </div>

                        {/* Form Container */}
                        <div className="max-w-2xl mx-auto mb-20">
                            <SurveyForm />
                        </div>

                        {/* Persuasion / Value Section */}
                        {/* Expanded Persuasion Section */}
                        <div className="mb-24 animate-fadeIn space-y-24">
                            {/* Problem Agitation */}
                            {/* Problem Agitation - Redesigned */}
                            <div className="max-w-4xl mx-auto">
                                <h2 className="text-3xl md:text-4xl font-serif font-bold text-slate-900 mb-12 text-center leading-tight">
                                    If You're Like 95% of Builders, <br className="hidden md:block" />
                                    Here's What's Probably Happening
                                </h2>

                                {/* The Shift */}
                                <div className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm mb-12">
                                    <div className="flex flex-col md:flex-row gap-8 items-start">
                                        <div className="flex-1">
                                            <h3 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-3">
                                                <span className="w-8 h-8 bg-green-100 text-green-600 rounded-full flex items-center justify-center text-sm">1</span>
                                                The "Good Old Days"
                                            </h3>
                                            <p className="text-slate-600">
                                                You built your business on referrals. Word-of-mouth kept your pipeline full, and your reputation did the selling for you. It was predictable and effective.
                                            </p>
                                        </div>
                                        <div className="hidden md:block w-px bg-slate-100 self-stretch"></div>
                                        <div className="flex-1">
                                            <h3 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-3">
                                                <span className="w-8 h-8 bg-orange-100 text-orange-600 rounded-full flex items-center justify-center text-sm">2</span>
                                                The Shift
                                            </h3>
                                            <p className="text-slate-600">
                                                Then 2020 changed everything. The world moved online. Homeowners stopped asking neighbors for referrals and started searching Instagram and Google.
                                            </p>
                                        </div>
                                    </div>
                                    <div className="mt-8 pt-8 border-t border-slate-100 text-center">
                                        <p className="text-lg font-medium text-slate-800">
                                            If you're not visible where they are looking, <span className="text-red-500 font-bold">you are invisible.</span>
                                        </p>
                                    </div>
                                </div>

                                {/* The 3 Common Failures */}
                                <div className="grid md:grid-cols-3 gap-6 mb-12">
                                    <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100">
                                        <div className="text-3xl mb-4">📉</div>
                                        <h4 className="font-bold text-slate-900 mb-2">The Agency Trap</h4>
                                        <p className="text-sm text-slate-600">You paid $5k/mo for "brand awareness" and got zero qualified leads, just fancy charts.</p>
                                    </div>
                                    <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100">
                                        <div className="text-3xl mb-4">🕸️</div>
                                        <h4 className="font-bold text-slate-900 mb-2">The Silent Website</h4>
                                        <p className="text-sm text-slate-600">You spent $10k on a site that looks pretty but only attracts spam and subcontractors.</p>
                                    </div>
                                    <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100">
                                        <div className="text-3xl mb-4">👻</div>
                                        <h4 className="font-bold text-slate-900 mb-2">The Price Shoppers</h4>
                                        <p className="text-sm text-slate-600">You get leads, but they can't afford you. You do 6 months of free consulting, then they ghost.</p>
                                    </div>
                                </div>

                                <div className="text-center">
                                    <p className="text-xl text-slate-900 font-serif italic">
                                        Meanwhile, your competitor down the street is booked out for 2 years.
                                        <br />
                                        <span className="font-bold not-italic mt-2 block text-purple-700">So, what do you do?</span>
                                    </p>
                                </div>
                            </div>

                            {/* The Truth */}
                            <div className="bg-slate-900 text-white p-8 md:p-12 rounded-3xl text-center shadow-2xl relative overflow-hidden">
                                <div className="relative z-10 max-w-3xl mx-auto">
                                    <h2 className="text-3xl md:text-4xl font-serif font-bold mb-8">
                                        Here's The Truth: <span className="text-purple-400">Your Work Isn't The Problem</span>
                                    </h2>
                                    <p className="text-lg text-slate-300 mb-8 leading-relaxed">
                                        You're a great builder. Your projects look incredible. Your clients love the final product.
                                        The problem is two things:
                                    </p>
                                    <div className="grid md:grid-cols-2 gap-8 text-left mb-8">
                                        <div className="bg-white/10 p-6 rounded-2xl backdrop-blur-sm border border-white/10">
                                            <span className="text-3xl font-bold text-purple-400 block mb-2">1.</span>
                                            <h3 className="text-xl font-bold mb-2">People can't find you</h3>
                                            <p className="text-slate-400 text-sm">When someone searches "custom home builder near me", you're not showing up. Your competitor is.</p>
                                        </div>
                                        <div className="bg-white/10 p-6 rounded-2xl backdrop-blur-sm border border-white/10">
                                            <span className="text-3xl font-bold text-purple-400 block mb-2">2.</span>
                                            <h3 className="text-xl font-bold mb-2">You're not connecting</h3>
                                            <p className="text-slate-400 text-sm">When they do find you, there's nothing that builds trust. Your site looks dated. Your Instagram is a ghost town.</p>
                                        </div>
                                    </div>
                                    <p className="text-slate-300">
                                        So they keep searching. And they find someone else.
                                    </p>
                                </div>
                                {/* Background decoration */}
                                <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
                                    <div className="absolute -top-24 -left-24 w-64 h-64 bg-purple-500 rounded-full blur-3xl"></div>
                                    <div className="absolute -bottom-24 -right-24 w-64 h-64 bg-pink-500 rounded-full blur-3xl"></div>
                                </div>
                            </div>

                            {/* The Solution / System */}
                            <div>
                                <div className="text-center mb-16">
                                    <span className="text-purple-600 font-bold tracking-wider text-sm uppercase mb-3 block">The Solution</span>
                                    <h2 className="text-3xl md:text-4xl font-serif font-bold text-slate-900 mb-6">
                                        Here's How We Fix It
                                    </h2>
                                    <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                                        We build you a complete system that puts you in front of qualified buyers and actually converts them into signed contracts.
                                    </p>
                                </div>

                                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                                    {[
                                        {
                                            title: "A Website That Works",
                                            desc: "Not just pretty. It ranks on Google, explains your process, and converts visitors into leads. No more subcontractor spam."
                                        },
                                        {
                                            title: "Fix Your Online Presence",
                                            desc: "We optimize your Google Profile, Instagram, and Facebook. You look like the established, premium builder you are."
                                        },
                                        {
                                            title: "Targeted Ads",
                                            desc: "We put your work in front of homeowners with the budget to build. Targeted campaigns, not generic 'we build houses' ads."
                                        },
                                        {
                                            title: "Educational Content",
                                            desc: "We produce content that answers questions and builds trust before they ever call you. No more 6 months of free consulting."
                                        },
                                        {
                                            title: "CRM & Follow-Up",
                                            desc: "We implement a system that captures every lead and nurtures them automatically. Nothing falls through the cracks."
                                        },
                                        {
                                            title: "Proven Pricing",
                                            desc: "Implement paid concept agreements and preconstruction packages. Get paid for your time and filter out tire kickers early."
                                        }
                                    ].map((feature, i) => (
                                        <div key={i} className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-all group">
                                            <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center text-purple-600 mb-4 group-hover:scale-110 transition-transform">
                                                <CheckCircle2 size={20} />
                                            </div>
                                            <h3 className="font-bold text-slate-900 text-lg mb-3">{feature.title}</h3>
                                            <p className="text-slate-600 text-sm leading-relaxed">{feature.desc}</p>
                                        </div>
                                    ))}
                                </div>

                                <div className="mt-16 text-center bg-purple-50 rounded-3xl p-8 md:p-12 border border-purple-100">
                                    <h3 className="text-2xl font-serif font-bold text-slate-900 mb-4">The Result?</h3>
                                    <p className="text-lg text-slate-700 max-w-3xl mx-auto mb-6">
                                        You go from hoping your phone rings to controlling a predictable pipeline of qualified prospects who are ready to build, understand your value, and can actually afford you.
                                    </p>
                                    <p className="font-bold text-purple-700 text-xl">
                                        That's how you scale from 5 million to 15 million.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Testimonials Section */}
                        <div className="border-t border-slate-200 pt-16">
                            <div className="text-center mb-12">
                                <span className="text-purple-600 font-bold tracking-wider text-sm uppercase mb-3 block">Proven Results</span>
                                <h2 className="text-3xl font-serif font-bold text-slate-900">What Our Partners Are Saying</h2>
                            </div>

                            <div className="grid md:grid-cols-2 gap-6 text-left">
                                {caseStudies
                                    .filter(study => study.id !== 'eagle-rock')
                                    .map((study) => (
                                        <div key={study.id} className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
                                            {study.videoUrl ? (
                                                <div className="mb-6 rounded-xl overflow-hidden bg-slate-100 shadow-inner block">
                                                    <video
                                                        src={study.videoUrl}
                                                        controls
                                                        playsInline
                                                        className="w-full h-auto"
                                                    />
                                                </div>
                                            ) : (
                                                <div className="flex items-center gap-4 mb-4">
                                                    <div className="w-12 h-12 rounded-full overflow-hidden bg-slate-100 shrink-0">
                                                        <img src={study.imageUrl} alt={study.builderName} className="w-full h-full object-cover" />
                                                    </div>
                                                    <div>
                                                        <div className="font-bold text-slate-900 leading-tight">{study.builderName}</div>
                                                        <div className="text-sm text-slate-500">{study.location}</div>
                                                    </div>
                                                </div>
                                            )}

                                            {study.videoUrl && (
                                                <div className="mb-3">
                                                    <div className="font-bold text-slate-900 leading-tight text-lg">{study.builderName}</div>
                                                    <div className="text-sm text-slate-500">{study.location}</div>
                                                </div>
                                            )}

                                            <h3 className="font-serif font-bold text-lg text-slate-900 mb-3">{study.title}</h3>

                                            <div className="grid grid-cols-2 gap-x-4 gap-y-2 mb-4 bg-slate-50 p-3 rounded-lg">
                                                {study.results.slice(0, 2).map((res, i) => (
                                                    <div key={i}>
                                                        <div className="text-[10px] text-slate-500 uppercase tracking-wide font-bold">{res.label}</div>
                                                        <div className="font-bold text-slate-800">{res.value}</div>
                                                    </div>
                                                ))}
                                            </div>

                                            {study.testimonial && (
                                                <blockquote className="text-slate-600 text-sm italic border-l-2 border-purple-200 pl-3">
                                                    "{study.testimonial.quote}"
                                                </blockquote>
                                            )}
                                        </div>
                                    ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Simple Footer */}
            <footer className="py-6 text-center text-slate-400 text-sm">
                &copy; {new Date().getFullYear()} BuilderProject Agency. All rights reserved.
            </footer>
        </div>
    );
};

export default AdvertisingLanding;
