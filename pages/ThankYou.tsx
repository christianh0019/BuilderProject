import React from 'react';
import { CheckCircle, Calendar, ArrowRight, PlayCircle } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { caseStudies } from '../data/caseStudies';
import SimpleHeader from '../components/SimpleHeader';

const ThankYou: React.FC = () => {
    const navigate = useNavigate();

    return (
        <div className="min-h-screen pt-32 pb-20 bg-slate-50 relative overflow-hidden">
            <SimpleHeader />
            {/* Background Gradients */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-purple-200/50 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 opacity-60 pointer-events-none"></div>
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-pink-200/50 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2 opacity-60 pointer-events-none"></div>

            <div className="container mx-auto px-6 relative z-10">

                {/* Hero Section */}
                <div className="max-w-4xl mx-auto text-center mb-16">
                    <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-8 text-green-600 animate-bounce shadow-lg shadow-green-200">
                        <CheckCircle size={40} />
                    </div>
                    <h1 className="text-4xl md:text-6xl font-serif font-bold text-slate-900 mb-6">
                        You're All Set!
                    </h1>
                    <p className="text-xl md:text-2xl text-slate-600 mb-8 max-w-2xl mx-auto leading-relaxed">
                        Your strategy session has been booked. Now, let's make sure you get the absolute most out of it.
                    </p>

                    <div className="inline-flex items-center gap-3 px-8 py-4 bg-white rounded-2xl shadow-lg shadow-slate-200/50 border border-slate-100 text-slate-700 font-medium text-lg">
                        <Calendar className="text-purple-600" size={24} />
                        <span>Check your email for the calendar invite</span>
                    </div>
                </div>

                {/* Video Section */}
                <div className="max-w-5xl mx-auto mb-24">
                    <div className="bg-white p-6 md:p-8 rounded-[2rem] shadow-2xl border border-slate-100">

                        {/* Important Alert - Moved Above Video */}
                        <div className="bg-amber-50 border-l-4 border-amber-500 p-6 mb-8 rounded-r-xl">
                            <div className="flex items-start gap-4">
                                <div className="p-2 bg-amber-100 rounded-lg text-amber-600 shrink-0">
                                    <PlayCircle size={24} />
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-slate-900 mb-2">IMPORTANT: Watch Before Our Call</h3>
                                    <p className="text-slate-700 leading-relaxed">
                                        This short video explains exactly how to prepare so we can jump straight into strategy during our session.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="aspect-video rounded-2xl overflow-hidden bg-slate-900 relative group shadow-inner">
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

                {/* Social Proof Section */}
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-serif font-bold text-slate-900 mb-4">See What's Possible</h2>
                        <p className="text-lg text-slate-600">Real results from builders just like you.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {caseStudies.slice(0, 3).map((study) => (
                            <div key={study.id} className="bg-white rounded-2xl overflow-hidden shadow-lg border border-slate-100 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 group">
                                <div className="aspect-[4/3] overflow-hidden">
                                    <img
                                        src={study.imageUrl}
                                        alt={study.title}
                                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                    />
                                </div>
                                <div className="p-6">
                                    <div className="text-sm font-bold text-purple-600 mb-2 uppercase tracking-wide">
                                        {study.results[0]?.value} {study.results[0]?.label}
                                    </div>
                                    <h3 className="text-xl font-bold text-slate-900 mb-3 font-serif">{study.builderName}</h3>
                                    <p className="text-slate-600 text-sm mb-6 line-clamp-2 leading-relaxed">{study.content.overview}</p>
                                    <button
                                        onClick={() => navigate(`/case-studies/${study.slug}`)}
                                        className="text-slate-900 font-bold text-sm flex items-center gap-2 hover:text-purple-600 transition-colors group/btn"
                                    >
                                        Read Case Study <ArrowRight size={16} className="transition-transform group-hover/btn:translate-x-1" />
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

            </div>
        </div>
    );
};

export default ThankYou;
