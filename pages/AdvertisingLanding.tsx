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
                                Fill out the quick survey below to get access to our full 2026 marketing playbook and book a free complimentary strategy session.
                            </p>
                        </div>

                        {/* Form Container */}
                        <div className="max-w-2xl mx-auto mb-20">
                            <SurveyForm />
                        </div>

                        {/* Persuasion / Value Section */}
                        <div className="mb-24 animate-fadeIn">
                            <div className="text-center mb-16">
                                <h2 className="text-3xl md:text-4xl font-serif font-bold text-slate-900 mb-6">
                                    Stop Gambling With Your Business
                                </h2>
                                <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                                    Most builders rely on "Hope Marketing"—waiting for referrals and praying for good weather. <br className="hidden md:block" />
                                    To scale, you need a machine that produces results on demand.
                                </p>
                            </div>

                            <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                                {/* The Old Way */}
                                <div className="bg-red-50 p-8 rounded-3xl border border-red-100 relative overflow-hidden">
                                    <div className="absolute top-0 left-0 w-full h-1 bg-red-200"></div>
                                    <div className="flex items-center gap-3 mb-6">
                                        <div className="w-10 h-10 rounded-full bg-red-100 text-red-600 flex items-center justify-center font-bold">
                                            <span className="text-xl">X</span>
                                        </div>
                                        <h3 className="text-xl font-bold text-slate-900">The "Old Way"</h3>
                                    </div>
                                    <ul className="space-y-4">
                                        <li className="flex items-start gap-3">
                                            <span className="text-red-500 mt-1">✕</span>
                                            <span className="text-slate-700"><strong>Unpredictable Referrals:</strong> Feasts in the summer, famines in the winter. No control over your own growth.</span>
                                        </li>
                                        <li className="flex items-start gap-3">
                                            <span className="text-red-500 mt-1">✕</span>
                                            <span className="text-slate-700"><strong>Shared Lead Lists:</strong> Fighting 5 other builders for the same "tire-kicker" who just wants the cheapest price.</span>
                                        </li>
                                        <li className="flex items-start gap-3">
                                            <span className="text-red-500 mt-1">✕</span>
                                            <span className="text-slate-700"><strong>Time Wasting:</strong> Driving across town for "free estimates" with people who can't afford you.</span>
                                        </li>
                                    </ul>
                                </div>

                                {/* The BuilderProject Way */}
                                <div className="bg-white p-8 rounded-3xl border-2 border-purple-600 shadow-xl relative overflow-hidden transform md:-translate-y-4">
                                    <div className="absolute top-0 right-0 bg-purple-600 text-white text-xs font-bold px-3 py-1 rounded-bl-lg">
                                        PREFERRED
                                    </div>
                                    <div className="flex items-center gap-3 mb-6">
                                        <div className="w-10 h-10 rounded-full bg-purple-100 text-purple-600 flex items-center justify-center font-bold">
                                            <CheckCircle2 size={24} />
                                        </div>
                                        <h3 className="text-xl font-bold text-slate-900">The "New Model"</h3>
                                    </div>
                                    <ul className="space-y-4">
                                        <li className="flex items-start gap-3">
                                            <span className="text-green-500 mt-1">✓</span>
                                            <span className="text-slate-700"><strong>Exclusive Opportunities:</strong> Homeowners who see YOUR brand and want YOUR specific style. No competition.</span>
                                        </li>
                                        <li className="flex items-start gap-3">
                                            <span className="text-green-500 mt-1">✓</span>
                                            <span className="text-slate-700"><strong>Pre-Qualified System:</strong> We filter for budget, land, and timeline before they ever hit your calendar.</span>
                                        </li>
                                        <li className="flex items-start gap-3">
                                            <span className="text-green-500 mt-1">✓</span>
                                            <span className="text-slate-700"><strong>Predictable Pipeline:</strong> Know exactly how many projects you'll start next quarter. Guaranteed results.</span>
                                        </li>
                                    </ul>
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
