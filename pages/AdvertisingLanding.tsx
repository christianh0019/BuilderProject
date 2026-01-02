import React from 'react';
import SurveyForm from '../components/SurveyForm';
import { CheckCircle2 } from 'lucide-react';

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
                                Scale Your Business <br className="hidden md:block" />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-700 to-pink-600">
                                    Without The Guesswork
                                </span>
                            </h1>
                            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                                We help premier Builders, Remodelers, and Design-Build Firms acquire high-value projects consistently.
                                Fill out the form below to see if you qualify for our partnership program.
                            </p>
                        </div>

                        {/* Form Container */}
                        <div className="max-w-2xl mx-auto">
                            <SurveyForm />
                        </div>

                        {/* Social Proof / Trust Indicators */}
                        <div className="mt-12 pt-12 border-t border-slate-200 text-center">
                            <p className="text-sm font-bold text-slate-400 uppercase tracking-wider mb-6">Trusted By Elite Builders</p>
                            <div className="flex flex-wrap justify-center gap-8 opacity-50 grayscale">
                                {/* Placeholders for logos - text for now */}
                                <span className="text-slate-600 font-serif font-bold text-xl">LuxeHomes</span>
                                <span className="text-slate-600 font-serif font-bold text-xl">ModernBuild</span>
                                <span className="text-slate-600 font-serif font-bold text-xl">PremierEstates</span>
                                <span className="text-slate-600 font-serif font-bold text-xl">UrbanDevelopers</span>
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
