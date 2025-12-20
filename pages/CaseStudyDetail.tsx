import React from 'react';
import { useParams, Navigate, Link } from 'react-router-dom';
import { caseStudies } from '../data/caseStudies';
import { ArrowLeft, CheckCircle, TrendingUp, Calendar, ArrowRight } from 'lucide-react';

const CaseStudyDetail: React.FC = () => {
    const { slug } = useParams<{ slug: string }>();
    const study = caseStudies.find(s => s.slug === slug);

    if (!study) {
        return <Navigate to="/case-studies" replace />;
    }

    // Find next study for navigation
    const currentIndex = caseStudies.findIndex(s => s.id === study.id);
    const nextStudy = caseStudies[(currentIndex + 1) % caseStudies.length];

    return (
        <div className="pt-32 pb-20 bg-white">
            {/* Hero Section */}
            <div className="container mx-auto px-6 mb-16">
                <Link to="/case-studies" className="inline-flex items-center text-slate-500 hover:text-purple-600 mb-8 transition-colors group">
                    <ArrowLeft size={20} className="mr-2 group-hover:-translate-x-1 transition-transform" />
                    Back to Case Studies
                </Link>

                <div className="max-w-5xl mx-auto">
                    <span className="text-purple-600 font-bold tracking-wider text-sm uppercase mb-4 block">Case Study • {study.builderName}</span>
                    <h1 className="text-4xl md:text-6xl font-serif font-bold text-slate-900 mb-8 leading-tight">
                        {study.title}
                    </h1>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 py-8 border-y border-slate-100 mb-12">
                        <div className="col-span-2 md:col-span-1">
                            <span className="block text-slate-500 text-sm mb-1">Builder</span>
                            <span className="font-semibold text-slate-900">{study.builderName}</span>
                        </div>
                        {study.results.map((result, idx) => (
                            <div key={idx}>
                                <span className="block text-slate-500 text-sm mb-1">{result.label}</span>
                                <span className="font-bold text-purple-600 text-xl">{result.value}</span>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="relative h-[400px] md:h-[600px] w-full rounded-2xl overflow-hidden shadow-2xl mb-16">
                    <img
                        src={study.imageUrl}
                        alt={study.title}
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                </div>
            </div>

            <div className="container mx-auto px-6">
                <div className="grid lg:grid-cols-12 gap-12 max-w-6xl mx-auto">

                    {/* Main Content */}
                    <div className="lg:col-span-8">
                        <div className="prose prose-lg prose-slate max-w-none">
                            <h2 className="text-3xl font-serif font-bold text-slate-900 mb-6">Overview</h2>
                            <p className="text-slate-600 leading-relaxed mb-12 text-lg">
                                {study.content.overview}
                            </p>

                            <div className="bg-slate-50 p-8 rounded-2xl border-l-4 border-purple-500 mb-12">
                                <h3 className="text-xl font-bold text-slate-900 mb-4 flex items-center">
                                    <TrendingUp className="text-purple-600 mr-2" size={24} />
                                    The Challenge
                                </h3>
                                <p className="text-slate-700 italic">
                                    "{study.content.challenge}"
                                </p>
                            </div>

                            <h2 className="text-3xl font-serif font-bold text-slate-900 mb-6">The Strategy</h2>
                            <div className="space-y-8 mb-12">
                                {study.content.strategy.map((item, i) => (
                                    <div key={i} className="flex gap-4">
                                        <div className="flex-shrink-0 w-8 h-8 rounded-full bg-purple-100 text-purple-600 flex items-center justify-center font-bold">
                                            {i + 1}
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-slate-900 text-xl mb-2">{item.title}</h4>
                                            <p className="text-slate-600 leading-relaxed">{item.description}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            <h2 className="text-3xl font-serif font-bold text-slate-900 mb-6">The Outcome</h2>
                            <p className="text-slate-600 leading-relaxed mb-8 text-lg">
                                {study.content.outcome}
                            </p>

                            {study.testimonial && (
                                <div className="mt-12 p-8 bg-slate-900 rounded-2xl text-white relative overflow-hidden">
                                    <div className="relative z-10">
                                        <p className="text-2xl font-serif italic mb-6 leading-relaxed opacity-90">"{study.testimonial.quote}"</p>
                                        <div className="font-bold text-purple-400">— {study.testimonial.author}, {study.builderName}</div>
                                    </div>
                                    {/* Background Decor */}
                                    <div className="absolute top-0 right-0 w-64 h-64 bg-purple-600 rounded-full mix-blend-multiply filter blur-[80px] opacity-20"></div>
                                </div>
                            )}
                        </div>
                    </div>

                    {/* Sidebar */}
                    <div className="lg:col-span-4 space-y-8">
                        <div className="bg-slate-50 p-8 rounded-2xl border border-slate-100 sticky top-32">
                            <h3 className="font-bold text-slate-900 text-xl mb-6">Ready for similar results?</h3>
                            <p className="text-slate-600 mb-6">
                                We implement this exact system for custom home builders across the country.
                            </p>
                            <ul className="space-y-4 mb-8">
                                <li className="flex items-center text-slate-700">
                                    <CheckCircle size={20} className="text-green-500 mr-3" />
                                    Qualified Leads Only
                                </li>
                                <li className="flex items-center text-slate-700">
                                    <CheckCircle size={20} className="text-green-500 mr-3" />
                                    Done-For-You System
                                </li>
                                <li className="flex items-center text-slate-700">
                                    <CheckCircle size={20} className="text-green-500 mr-3" />
                                    Guaranteed Results
                                </li>
                            </ul>
                            <Link to="/contact" className="w-full bg-slate-900 text-white py-4 rounded-xl font-bold hover:bg-purple-600 transition-colors flex items-center justify-center">
                                Book a Strategy Call
                            </Link>
                        </div>
                    </div>
                </div>

                {/* Next Case Study Navigation */}
                <div className="mt-20 pt-12 border-t border-slate-200">
                    <div className="text-center mb-8 text-slate-500 uppercase tracking-widest text-sm font-semibold">Read Next</div>
                    <Link to={`/case-studies/${nextStudy.slug}`} className="group block max-w-4xl mx-auto text-center">
                        <h3 className="text-3xl md:text-5xl font-serif font-bold text-slate-900 group-hover:text-purple-600 transition-colors mb-4">
                            {nextStudy.title}
                        </h3>
                        <div className="inline-flex items-center text-slate-600 font-medium group-hover:translate-x-2 transition-transform">
                            Read Case Study <ArrowRight size={20} className="ml-2" />
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default CaseStudyDetail;
