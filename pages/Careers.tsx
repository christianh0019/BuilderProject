import React, { useState } from 'react';
import { Briefcase, Send, CheckCircle, ChevronLeft, ChevronRight } from 'lucide-react';
import SimpleHeader from '../components/SimpleHeader';
import { Helmet } from 'react-helmet-async';

const Careers: React.FC = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        position: '',
        portfolio: '',
        coverLetter: ''
    });
    const [submitted, setSubmitted] = useState(false);
    const [currentJobIndex, setCurrentJobIndex] = useState(0);

    const positions = [
        {
            title: "Client Media Buyer",
            type: "Contractor / Full-Time",
            description: "You live in Ads Manager and obsess over ROAS. You'll manage high-budget campaigns for custom home builders, ensuring every dollar spent brings in a qualified lead. We need someone who treats client budgets like their own."
        },
        {
            title: "Client Success Manager",
            type: "Contractor / Full-Time",
            description: "You're the friendly face and the strategic brain for our builder clients. Your job is to make sure they feel supported, understand the incredible results we're getting them, and know exactly what to do next."
        },
        {
            title: "Video Editor",
            type: "Contractor / Full-Time",
            description: "Turn raw site-visit footage into cinematic, high-converting content. You understand pacing, hooks, and how to make a dusty job site look like a masterpiece. Speed and creativity are your best friends."
        },
        {
            title: "Website Designer",
            type: "Contractor / Full-Time",
            description: "Create stunning, high-performance websites that tell a builder's story. You have an eye for luxury aesthetics and know how to design for conversion. No templates—just pure, custom excellence."
        }
    ];

    const nextJob = () => {
        setCurrentJobIndex((prev) => (prev + 1) % positions.length);
    };

    const prevJob = () => {
        setCurrentJobIndex((prev) => (prev - 1 + positions.length) % positions.length);
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log("Application submitted:", formData);
        setSubmitted(true);
    };

    return (
        <div className="min-h-screen bg-slate-50 font-sans text-slate-900">
            <Helmet>
                <title>Careers - Join the BuilderProject Team</title>
                <meta name="description" content="Join our team of elite marketers and creatives helping custom home builders dominate their markets." />
            </Helmet>

            <SimpleHeader />

            <div className="container mx-auto px-6 py-20 max-w-5xl">
                <div className="text-center mb-16">
                    <span className="inline-block py-1 px-3 rounded-full bg-purple-100 text-purple-700 text-xs font-bold tracking-wider uppercase mb-4">
                        We're Hiring
                    </span>
                    <h1 className="text-4xl md:text-5xl font-serif font-bold text-slate-900 mb-6">
                        Join the A-Team
                    </h1>
                    <p className="text-xl text-slate-600 max-w-2xl mx-auto">
                        We're not just building websites; we're building the future of construction marketing. If you love great design, smart strategy, and working with good people, you belong here.
                    </p>
                </div>

                <div className="grid lg:grid-cols-2 gap-12 items-start">
                    {/* Job Carousel */}
                    <div className="bg-white p-8 rounded-2xl shadow-lg border border-slate-100 relative min-h-[400px] flex flex-col justify-between">
                        <div className="absolute top-4 right-4 text-purple-200">
                            <Briefcase size={48} opacity={0.2} />
                        </div>

                        <div>
                            <div className="flex justify-between items-start mb-4">
                                <h2 className="text-2xl font-bold font-serif text-slate-900">{positions[currentJobIndex].title}</h2>
                            </div>
                            <span className="inline-block bg-slate-100 text-slate-600 text-xs font-bold px-3 py-1 rounded-full mb-6">
                                {positions[currentJobIndex].type}
                            </span>
                            <p className="text-slate-600 text-lg leading-relaxed mb-8">
                                {positions[currentJobIndex].description}
                            </p>
                        </div>

                        <div className="flex items-center justify-between mt-auto pt-6 border-t border-slate-50">
                            <div className="flex gap-2">
                                {positions.map((_, idx) => (
                                    <div
                                        key={idx}
                                        className={`w-2 h-2 rounded-full transition-all ${idx === currentJobIndex ? 'bg-purple-600 w-4' : 'bg-slate-200'}`}
                                    />
                                ))}
                            </div>
                            <div className="flex gap-2">
                                <button onClick={prevJob} className="p-2 rounded-full hover:bg-slate-100 text-slate-600 transition-colors">
                                    <ChevronLeft size={24} />
                                </button>
                                <button onClick={nextJob} className="p-2 rounded-full hover:bg-slate-100 text-slate-600 transition-colors">
                                    <ChevronRight size={24} />
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Application Form */}
                    <div className="bg-white p-8 rounded-3xl shadow-xl border border-slate-100 relative overflow-hidden">
                        {submitted ? (
                            <div className="text-center py-20">
                                <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                                    <CheckCircle size={32} />
                                </div>
                                <h3 className="text-2xl font-serif font-bold text-slate-900 mb-2">You're In!</h3>
                                <p className="text-slate-600">We've got your info. If it looks like a match, we'll reach out soon.</p>
                                <button
                                    onClick={() => setSubmitted(false)}
                                    className="mt-8 text-purple-600 font-bold hover:underline"
                                >
                                    Submit another one?
                                </button>
                            </div>
                        ) : (
                            <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
                                <h2 className="text-2xl font-bold font-serif mb-6">Let's Do This</h2>

                                <div>
                                    <label className="block text-sm font-bold text-slate-700 mb-2">Role Applying For</label>
                                    <select
                                        name="position"
                                        value={formData.position}
                                        onChange={handleChange}
                                        required
                                        className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-purple-500 focus:ring-1 focus:ring-purple-500 outline-none transition-all"
                                    >
                                        <option value="" disabled>Select your role...</option>
                                        {positions.map((job, i) => (
                                            <option key={i} value={job.title}>{job.title}</option>
                                        ))}
                                        <option value="General Application">Something else?</option>
                                    </select>
                                </div>

                                <div className="grid md:grid-cols-2 gap-6">
                                    <div>
                                        <label className="block text-sm font-bold text-slate-700 mb-2">Name</label>
                                        <input
                                            type="text"
                                            name="name"
                                            value={formData.name}
                                            onChange={handleChange}
                                            required
                                            placeholder="Your name"
                                            className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-purple-500 focus:ring-1 focus:ring-purple-500 outline-none transition-all"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-bold text-slate-700 mb-2">Email</label>
                                        <input
                                            type="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            required
                                            placeholder="you@example.com"
                                            className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-purple-500 focus:ring-1 focus:ring-purple-500 outline-none transition-all"
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label className="block text-sm font-bold text-slate-700 mb-2">Portfolio / LinkedIn</label>
                                    <input
                                        type="url"
                                        name="portfolio"
                                        value={formData.portfolio}
                                        onChange={handleChange}
                                        placeholder="https://..."
                                        className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-purple-500 focus:ring-1 focus:ring-purple-500 outline-none transition-all"
                                    />
                                </div>

                                <div>
                                    <label className="block text-sm font-bold text-slate-700 mb-2">Why you?</label>
                                    <textarea
                                        name="coverLetter"
                                        value={formData.coverLetter}
                                        onChange={handleChange}
                                        required
                                        rows={4}
                                        placeholder="Show us what you've got. No formal cover letters needed—just be real."
                                        className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-purple-500 focus:ring-1 focus:ring-purple-500 outline-none transition-all"
                                    ></textarea>
                                </div>

                                <button
                                    type="submit"
                                    className="w-full bg-slate-900 text-white font-bold py-4 rounded-xl hover:bg-purple-700 transition-all duration-300 shadow-lg hover:shadow-purple-500/20 flex items-center justify-center gap-2"
                                >
                                    Send It <Send size={18} />
                                </button>
                            </form>
                        )}

                        {/* Decorative Background Blob */}
                        <div className="absolute -top-20 -right-20 w-64 h-64 bg-purple-100 rounded-full blur-3xl opacity-50 pointer-events-none"></div>
                        <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-blue-100 rounded-full blur-3xl opacity-50 pointer-events-none"></div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Careers;
