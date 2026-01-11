import React, { useState } from 'react';
import { Briefcase, Send, CheckCircle, Upload } from 'lucide-react';
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

    const positions = [
        {
            title: "Client Media Buyer",
            type: "Full-time / Contract",
            description: "Manage and optimize high-budget ad campaigns on Meta and Google for custom home builders. You live in Ads Manager and obsess over ROAS."
        },
        {
            title: "Client Success Manager",
            type: "Full-time",
            description: "The bridge between our agency and our builder clients. You ensure they feel supported, understand their reports, and see the value we deliver."
        },
        {
            title: "Video Editor",
            type: "Contract / Project-based",
            description: "Turn raw site-visit footage into high-converting organic content and ads. You understand pacing, hooks, and platform-native editing styles."
        }
    ];

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Here you would typically send the data to a backend or webhook
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
                        Join the Elite Team
                    </h1>
                    <p className="text-xl text-slate-600 max-w-2xl mx-auto">
                        We don't just build websites; we build market-dominating systems for the best custom home builders in the world. If you're obsessed with excellence, we want to talk.
                    </p>
                </div>

                <div className="grid lg:grid-cols-2 gap-12 items-start">
                    {/* Job Listings */}
                    <div className="space-y-6">
                        <h2 className="text-2xl font-bold font-serif mb-6 flex items-center gap-2">
                            <Briefcase className="text-purple-600" /> Open Positions
                        </h2>
                        {positions.map((job, index) => (
                            <div key={index} className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
                                <div className="flex justify-between items-start mb-2">
                                    <h3 className="font-bold text-lg text-slate-900">{job.title}</h3>
                                    <span className="text-xs font-semibold bg-slate-100 text-slate-600 px-2 py-1 rounded-full">
                                        {job.type}
                                    </span>
                                </div>
                                <p className="text-slate-600 text-sm leading-relaxed">
                                    {job.description}
                                </p>
                            </div>
                        ))}
                    </div>

                    {/* Application Form */}
                    <div className="bg-white p-8 rounded-3xl shadow-xl border border-slate-100 relative overflow-hidden">
                        {submitted ? (
                            <div className="text-center py-20">
                                <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                                    <CheckCircle size={32} />
                                </div>
                                <h3 className="text-2xl font-serif font-bold text-slate-900 mb-2">Application Received</h3>
                                <p className="text-slate-600">Thanks for applying. If your profile matches our needs, we'll be in touch shortly.</p>
                                <button
                                    onClick={() => setSubmitted(false)}
                                    className="mt-8 text-purple-600 font-bold hover:underline"
                                >
                                    Submit another application
                                </button>
                            </div>
                        ) : (
                            <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
                                <h2 className="text-2xl font-bold font-serif mb-6">Apply Now</h2>

                                <div>
                                    <label className="block text-sm font-bold text-slate-700 mb-2">Role Applying For</label>
                                    <select
                                        name="position"
                                        value={formData.position}
                                        onChange={handleChange}
                                        required
                                        className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-purple-500 focus:ring-1 focus:ring-purple-500 outline-none transition-all"
                                    >
                                        <option value="" disabled>Select a position...</option>
                                        {positions.map((job, i) => (
                                            <option key={i} value={job.title}>{job.title}</option>
                                        ))}
                                        <option value="General Application">General Application</option>
                                    </select>
                                </div>

                                <div className="grid md:grid-cols-2 gap-6">
                                    <div>
                                        <label className="block text-sm font-bold text-slate-700 mb-2">Full Name</label>
                                        <input
                                            type="text"
                                            name="name"
                                            value={formData.name}
                                            onChange={handleChange}
                                            required
                                            placeholder="Jane Doe"
                                            className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-purple-500 focus:ring-1 focus:ring-purple-500 outline-none transition-all"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-bold text-slate-700 mb-2">Email Address</label>
                                        <input
                                            type="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            required
                                            placeholder="jane@example.com"
                                            className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-purple-500 focus:ring-1 focus:ring-purple-500 outline-none transition-all"
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label className="block text-sm font-bold text-slate-700 mb-2">Portfolio / LinkedIn URL</label>
                                    <input
                                        type="url"
                                        name="portfolio"
                                        value={formData.portfolio}
                                        onChange={handleChange}
                                        placeholder="https://"
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
                                        placeholder="Tell us about your most impressive win or why you're perfect for this role..."
                                        className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-purple-500 focus:ring-1 focus:ring-purple-500 outline-none transition-all"
                                    ></textarea>
                                </div>

                                <button
                                    type="submit"
                                    className="w-full bg-slate-900 text-white font-bold py-4 rounded-xl hover:bg-purple-700 transition-all duration-300 shadow-lg hover:shadow-purple-500/20 flex items-center justify-center gap-2"
                                >
                                    Submit Application <Send size={18} />
                                </button>

                                <p className="text-xs text-slate-400 text-center mt-4">
                                    By submitting, you agree to show us your best work.
                                </p>
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
