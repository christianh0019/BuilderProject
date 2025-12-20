import React, { useEffect } from 'react';
import { CheckCircle, Calendar, PlayCircle, ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { caseStudies } from '../data/caseStudies';

const ThankYou: React.FC = () => {
    const navigate = useNavigate();

    return (
        <div className="min-h-screen pt-32 pb-20 bg-slate-50">
            <div className="container mx-auto px-6">

                {/* Hero Section */}
                <div className="max-w-4xl mx-auto text-center mb-16">
                    <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-8 text-green-600 animate-bounce">
                        <CheckCircle size={40} />
                    </div>
                    <h1 className="text-4xl md:text-6xl font-serif font-bold text-slate-900 mb-6">
                        You're All Set!
                    </h1>
                    <p className="text-xl md:text-2xl text-slate-600 mb-8 max-w-2xl mx-auto">
                        Your strategy session has been booked. Now, let's make sure you get the absolute most out of it.
                    </p>

                    <div className="inline-flex items-center gap-3 px-6 py-3 bg-white rounded-xl shadow-sm border border-slate-200 text-slate-600 font-medium">
                        <Calendar className="text-purple-600" size={20} />
                        <span>Check your email for the calendar invite</span>
                    </div>
                </div>

                {/* Video Section */}
                <div className="max-w-5xl mx-auto mb-24">
                    <div className="bg-white p-4 rounded-3xl shadow-2xl border border-slate-200">
                        <div className="aspect-video rounded-2xl overflow-hidden bg-slate-900 relative group">
                            <iframe
                                className="w-full h-full"
                                src="https://www.youtube.com/embed/jZ3cUnBZvs8?si=_U9hVObC9VmpaHsP"
                                title="How to get a proper audit and strategy"
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                allowFullScreen
                            ></iframe>
                        </div>
                        <div className="p-6 md:p-8 text-center">
                            <h2 className="text-2xl font-bold text-slate-900 mb-2">IMPORTANT: Watch Before Our Call</h2>
                            <p className="text-slate-600">
                                This short video explains exactly how to prepare so we can jump straight into strategy during our session.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Social Proof Section */}
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-serif font-bold text-slate-900 mb-4">See What's Possible</h2>
                        <p className="text-lg text-slate-600">Real results from builders just like you.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {caseStudies.slice(0, 3).map((study) => (
                            <div key={study.id} className="bg-white rounded-2xl overflow-hidden shadow-lg border border-slate-100 hover:shadow-xl transition-all duration-300 group">
                                <div className="aspect-[4/3] overflow-hidden">
                                    <img
                                        src={study.imageUrl}
                                        alt={study.title}
                                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                    />
                                </div>
                                <div className="p-6">
                                    <div className="text-sm font-bold text-purple-600 mb-2">
                                        {study.results[0]?.value} {study.results[0]?.label}
                                    </div>
                                    <h3 className="text-xl font-bold text-slate-900 mb-3">{study.builderName}</h3>
                                    <p className="text-slate-600 text-sm mb-4 line-clamp-2">{study.content.overview}</p>
                                    <button
                                        onClick={() => navigate(`/case-studies/${study.slug}`)}
                                        className="text-slate-900 font-bold text-sm flex items-center gap-1 hover:text-purple-600 transition-colors"
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
    );
};

export default ThankYou;
