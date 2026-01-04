import React from 'react';
import { CheckCircle, Calendar, ArrowRight, PlayCircle, AlertTriangle } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { caseStudies } from '../data/caseStudies';
import SimpleHeader from '../components/SimpleHeader';

const ThankYou: React.FC = () => {
    const navigate = useNavigate();

    return (
        <div className="min-h-screen bg-slate-50 flex flex-col">
            <SimpleHeader />

            {/* Dark Hero Section containing Video for Mobile Visibility */}
            <div className="pt-20 pb-12 md:pt-28 md:pb-24 bg-slate-900 relative overflow-hidden">
                {/* Background Effects */}
                <div className="absolute top-0 left-0 w-full h-full bg-[url('https://images.unsplash.com/photo-1557683316-973673baf926?auto=format&fit=crop&q=80')] opacity-10 bg-cover bg-center mix-blend-overlay pointer-events-none"></div>
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-purple-500/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 opacity-50 pointer-events-none"></div>
                <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-pink-500/20 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2 opacity-50 pointer-events-none"></div>

                <div className="container mx-auto px-4 sm:px-6 relative z-10">
                    <div className="max-w-4xl mx-auto text-center">

                        {/* Status Badge */}
                        <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-green-500/10 border border-green-500/20 rounded-full text-green-400 text-sm font-semibold mb-6 backdrop-blur-sm">
                            <CheckCircle size={16} />
                            <span>Strategy Session Confirmed</span>
                        </div>

                        <h1 className="text-3xl md:text-5xl font-serif font-bold text-white mb-4 leading-tight">
                            You're All Set!
                        </h1>
                        <p className="text-slate-400 text-base md:text-xl mb-8 max-w-2xl mx-auto">
                            Check for a calendar invite. In the meantime, <span className="text-white font-semibold">watch this specific instruction video:</span>
                        </p>

                        {/* Critical Alert Bar */}
                        <div className="bg-amber-500 text-slate-900 px-4 py-3 rounded-t-2xl font-bold text-sm md:text-base flex items-center justify-center gap-2 mx-auto max-w-3xl">
                            <AlertTriangle size={20} className="stroke-[2.5]" />
                            IMPORTANT: Watch Before Our Call
                        </div>

                        {/* Video Container - Lifted into Hero */}
                        <div className="max-w-3xl mx-auto rounded-b-2xl rounded-tr-none overflow-hidden shadow-2xl shadow-black/50 border-4 border-amber-500 border-t-0 bg-slate-900 aspect-video relative group">
                            <iframe
                                className="w-full h-full"
                                src="https://www.youtube.com/embed/jZ3cUnBZvs8?si=_U9hVObC9VmpaHsP"
                                title="How to get a proper audit and strategy"
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                allowFullScreen
                            ></iframe>
                        </div>

                    </div>
                </div>
            </div>

            {/* Content Section */}
            <div className="bg-slate-50 flex-grow py-12 px-6">
                <div className="container mx-auto">

                    {/* Calendar Reminder */}
                    <div className="max-w-xl mx-auto mb-16">
                        <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200 flex items-center gap-4">
                            <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center text-purple-600 shrink-0">
                                <Calendar size={24} />
                            </div>
                            <div>
                                <h3 className="font-bold text-slate-900 text-lg">Check Your Email</h3>
                                <p className="text-slate-600 text-sm">We've sent a calendar invitation with a secure Zoom link.</p>
                            </div>
                        </div>
                    </div>

                    {/* Social Proof */}
                    <div className="max-w-6xl mx-auto">
                        <div className="text-center mb-10">
                            <h2 className="text-2xl md:text-3xl font-serif font-bold text-slate-900 mb-2">See What's Possible</h2>
                            <p className="text-slate-500">Real results from builders just like you.</p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            {caseStudies.slice(0, 3).map((study) => (
                                <div key={study.id} className="bg-white rounded-2xl overflow-hidden shadow-sm border border-slate-200 hover:shadow-xl transition-all duration-300 group">
                                    <div className="aspect-[4/3] overflow-hidden relative">
                                        <img
                                            src={study.imageUrl}
                                            alt={study.title}
                                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                        />
                                        <div className="absolute top-4 left-4 bg-slate-900/80 backdrop-blur-md text-white text-xs font-bold px-3 py-1 rounded-full">
                                            {study.results[0]?.value} {study.results[0]?.label}
                                        </div>
                                    </div>
                                    <div className="p-6">
                                        <h3 className="text-lg font-bold text-slate-900 mb-2 font-serif">{study.builderName}</h3>
                                        <p className="text-slate-600 text-sm mb-4 line-clamp-2">{study.content.overview}</p>
                                        <button
                                            onClick={() => navigate(`/case-studies/${study.slug}`)}
                                            className="text-purple-600 font-bold text-sm flex items-center gap-1 hover:gap-2 transition-all"
                                        >
                                            Read Case Study <ArrowRight size={16} />
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ThankYou;
