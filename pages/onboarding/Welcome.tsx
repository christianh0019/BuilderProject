import React from 'react';
import { ArrowRight, Play } from 'lucide-react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import SimpleHeader from '../../components/SimpleHeader';

const Welcome: React.FC = () => {
    const navigate = useNavigate();
    const [searchParams] = useSearchParams();
    const program = searchParams.get('program') || 'foundation'; // Default to foundation

    const programNames: Record<string, string> = {
        'foundation': 'Foundation',
        'pipeline': 'Pipeline',
        'partner': 'Partner Program'
    };

    const displayName = programNames[program] || 'BuilderProject Family';

    return (
        <div className="min-h-screen bg-slate-50 flex flex-col font-sans selection:bg-purple-200 selection:text-purple-900">
            <SimpleHeader />

            <div className="flex-grow flex flex-col justify-center items-center px-6 pt-24 pb-12">
                <div className="max-w-4xl w-full mx-auto text-center animate-fadeIn">

                    {/* Welcome Badge */}
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-purple-100 text-purple-700 rounded-full text-sm font-bold mb-8 border border-purple-200">
                        <span className="w-2 h-2 rounded-full bg-purple-600 animate-pulse"></span>
                        Official Onboarding
                    </div>

                    <h1 className="text-4xl md:text-6xl font-serif font-bold text-slate-900 mb-6 leading-tight">
                        Welcome to the <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-700 to-pink-600">
                            {displayName === 'BuilderProject Family' ? displayName : `BuilderProject ${displayName}.`}
                        </span>
                    </h1>

                    <p className="text-lg md:text-xl text-slate-500 mb-12 max-w-2xl mx-auto leading-relaxed">
                        We're thrilled to have you. Please watch this short video from our founder, Christian, on what to expect over the next few weeks.
                    </p>

                    {/* Video Placeholder */}
                    <div className="max-w-3xl mx-auto bg-white rounded-2xl shadow-xl overflow-hidden border border-slate-200 mb-12 relative group cursor-pointer aspect-video">
                        <div className="absolute inset-0 bg-slate-900/5 group-hover:bg-slate-900/0 transition-colors"></div>

                        {/* Remove this overlay when real video is added */}
                        <div className="absolute inset-0 flex items-center justify-center bg-slate-100">
                            <div className="text-center">
                                <div className="w-20 h-20 bg-purple-600 rounded-full flex items-center justify-center text-white mx-auto mb-4 shadow-lg shadow-purple-500/30 group-hover:scale-110 transition-transform duration-300">
                                    <Play fill="currentColor" className="ml-1" size={32} />
                                </div>
                                <p className="text-slate-500 font-medium">Welcome Video Coming Soon</p>
                            </div>
                        </div>
                    </div>

                    {/* CTA */}
                    <button
                        onClick={() => navigate(`/onboarding/intake?program=${program}`)}
                        className="group relative inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-white transition-all duration-200 bg-slate-900 rounded-xl hover:bg-gradient-to-r hover:from-purple-700 hover:to-pink-600 hover:shadow-lg hover:shadow-purple-500/25 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2"
                    >
                        Let's Get Started
                        <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
                    </button>

                    <p className="mt-6 text-sm text-slate-400">
                        Expected time: 5-10 minutes
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Welcome;
