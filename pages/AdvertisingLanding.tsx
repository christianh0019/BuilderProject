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
                                We help premier Builders, Remodelers, and Design-Build Firms acquire high-value projects consistently.
                                Fill out the form below to see if you qualify for our partnership program.
                            </p>
                        </div>

                        {/* Form Container */}
                        <div className="max-w-2xl mx-auto mb-20">
                            <SurveyForm />
                        </div>

                        {/* Testimonials Section */}
                        <div className="border-t border-slate-200 pt-16">
                            <div className="text-center mb-12">
                                <span className="text-purple-600 font-bold tracking-wider text-sm uppercase mb-3 block">Proven Results</span>
                                <h2 className="text-3xl font-serif font-bold text-slate-900">What Our Partners Are Saying</h2>
                            </div>

                            <div className="grid md:grid-cols-2 gap-6 text-left">
                                {caseStudies.map((study) => (
                                    <div key={study.id} className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
                                        <div className="flex items-center gap-4 mb-4">
                                            <div className="w-12 h-12 rounded-full overflow-hidden bg-slate-100 shrink-0">
                                                <img src={study.imageUrl} alt={study.builderName} className="w-full h-full object-cover" />
                                            </div>
                                            <div>
                                                <div className="font-bold text-slate-900 leading-tight">{study.builderName}</div>
                                                <div className="text-sm text-slate-500">{study.location}</div>
                                            </div>
                                        </div>

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
