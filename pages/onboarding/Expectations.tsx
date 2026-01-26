import React from 'react';
import { CheckCircle, Play, Calendar, FileText, ArrowRight } from 'lucide-react';
import { useSearchParams } from 'react-router-dom';
import SimpleHeader from '../../components/SimpleHeader';

const Expectations: React.FC = () => {
    const [searchParams] = useSearchParams();
    const program = searchParams.get('program') || 'foundation';

    const nextStepsMap: Record<string, { title: string, desc: string }> = {
        'foundation': {
            title: 'Gather Your Brand Assets',
            desc: 'Have your logo files, current offer details, and list of past projects ready.'
        },
        'pipeline': {
            title: 'Connect Your Ad Accounts',
            desc: 'Make sure you have admin access to your Facebook and Google ad accounts.'
        },
        'partner': {
            title: 'Prepare for Deep-Dive Audit',
            desc: 'We will be reviewing your entire business structure, so please have your financials handy.'
        }
    };

    const nextStep = nextStepsMap[program] || nextStepsMap['foundation'];

    return (
        <div className="min-h-screen bg-slate-50 font-sans selection:bg-purple-200 selection:text-purple-900 flex flex-col">
            <SimpleHeader />

            <div className="flex-grow pt-24 pb-20 px-6">
                <div className="max-w-4xl mx-auto text-center">

                    {/* Progress Header */}
                    <div className="mb-8">
                        <div className="inline-flex items-center gap-2 text-slate-400 text-sm font-bold uppercase tracking-wider mb-4">
                            <span className="text-purple-600">Step 3 of 3</span>
                            <span>•</span>
                            <span>You're All Set</span>
                        </div>

                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-100 text-green-700 rounded-full text-sm font-bold mb-6 border border-green-200 animate-fadeIn">
                            <CheckCircle size={16} />
                            <span>Onboarding Complete</span>
                        </div>
                    </div>

                    <h1 className="text-4xl md:text-5xl font-serif font-bold text-slate-900 mb-6 leading-tight">
                        Here's what happens next.
                    </h1>

                    <p className="text-lg md:text-xl text-slate-500 mb-12 max-w-2xl mx-auto leading-relaxed">
                        We're already reviewing your intake form. While we prepare for our call, please watch this quick video on how to prepare for success.
                    </p>

                    {/* Expectation Video Placeholder */}
                    <div className="max-w-3xl mx-auto bg-white rounded-2xl shadow-xl overflow-hidden border border-slate-200 mb-16 relative group cursor-pointer aspect-video">
                        <div className="absolute inset-0 bg-slate-900/5 group-hover:bg-slate-900/0 transition-colors"></div>
                        <div className="absolute inset-0 flex items-center justify-center bg-slate-100">
                            <div className="text-center">
                                <div className="w-20 h-20 bg-purple-600 rounded-full flex items-center justify-center text-white mx-auto mb-4 shadow-lg shadow-purple-500/30 group-hover:scale-110 transition-transform duration-300">
                                    <Play fill="currentColor" className="ml-1" size={32} />
                                </div>
                                <p className="text-slate-500 font-medium">"What to Expect" Video Coming Soon</p>
                            </div>
                        </div>
                    </div>

                    {/* Next Steps Grid */}
                    <div className="grid md:grid-cols-2 gap-6 text-left max-w-3xl mx-auto mb-16">
                        <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm flex items-start gap-4">
                            <div className="bg-purple-100 p-3 rounded-xl text-purple-600 shrink-0">
                                <Calendar size={24} />
                            </div>
                            <div>
                                <h3 className="font-bold text-slate-900 mb-1">Check Your Calendar</h3>
                                <p className="text-slate-500 text-sm">We've sent a calendar invite for our onboarding call. Please accept it to confirm.</p>
                            </div>
                        </div>

                        <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm flex items-start gap-4">
                            <div className="bg-blue-100 p-3 rounded-xl text-blue-600 shrink-0">
                                <FileText size={24} />
                            </div>
                            <div>
                                <h3 className="font-bold text-slate-900 mb-1">{nextStep.title}</h3>
                                <p className="text-slate-500 text-sm">{nextStep.desc}</p>
                            </div>
                        </div>
                    </div>

                    {/* Final Action */}
                    <div className="max-w-xl mx-auto text-center border-t border-slate-200 pt-12">
                        <p className="text-slate-900 font-bold mb-6">Need anything before then?</p>
                        <button className="inline-flex items-center text-purple-600 font-bold hover:text-purple-800 transition-colors">
                            Contact Support <ArrowRight size={18} className="ml-2" />
                        </button>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Expectations;
