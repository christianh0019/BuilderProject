import React, { useState } from 'react';
import { Briefcase, Send, CheckCircle, ArrowRight, Star, Users, Zap, Layout, ChevronLeft, ChevronRight } from 'lucide-react';
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
    const [isAutoPlaying, setIsAutoPlaying] = useState(true);
    const [animationClass, setAnimationClass] = useState("opacity-100 translate-x-0");

    const positions = [
        {
            title: "Client Media Buyer",
            type: "Contractor / Full-Time",
            icon: <Zap className="text-yellow-500" size={24} />,
            overview: "You live in Ads Manager and obsess over ROAS. You'll manage high-budget campaigns for custom home builders, ensuring every dollar spent brings in a qualified lead.",
            responsibilities: [
                "Manage $50k+/mo in ad spend across Meta & Google Ads",
                "Conduct daily optimizations and A/B testing on creatives/audiences",
                "Build comprehensive weekly reports for clients",
                "Collaborate with the creative team to request high-converting assets"
            ],
            requirements: [
                "3+ years experience with Lead Gen (Real Estate/Construction preferred)",
                "Deep understanding of CAPI, pixel tracking, and attribution",
                "Ability to communicate complex data simply to clients"
            ]
        },
        {
            title: "Client Success Manager",
            type: "Contractor / Full-Time",
            icon: <Users className="text-blue-500" size={24} />,
            overview: "You're the strategic partner for our builder clients. You ensure they feel supported, understand the results we're getting them, and know exactly what to do next to close deals.",
            responsibilities: [
                "Lead client onboarding and strategy calls",
                "Proactively communicate wins and updates via Slack/Email",
                "Identify upsell opportunities and retention risks",
                "Coordinate with the fulfillment team to ensure seamless delivery"
            ],
            requirements: [
                "Excellent written and verbal communication skills",
                "Experience in an agency environment",
                "High emotional intelligence and conflict resolution skills"
            ]
        },
        {
            title: "Video Editor",
            type: "Contractor / Full-Time",
            icon: <Star className="text-purple-500" size={24} />,
            overview: "Turn raw site-visit footage into cinematic, high-converting content. You understand pacing, hooks, and how to make a dusty job site look like a masterpiece.",
            responsibilities: [
                "Edit 3-5 short-form videos per week for social organic/paid",
                "Create 1 long-form YouTube video per week",
                "Add dynamic captions, B-roll, and sound design",
                "Stay ahead of social media trends and formats"
            ],
            requirements: [
                "Proficiency in Premiere Pro or DaVinci Resolve",
                "Strong storytelling ability",
                "Portfolio demonstrating high-retention editing style"
            ]
        },
        {
            title: "Website Designer",
            type: "Contractor / Full-Time",
            icon: <Layout className="text-pink-500" size={24} />,
            overview: "Create stunning, high-performance websites that tell a builder's story. You have an eye for luxury aesthetics and know how to design for conversion.",
            responsibilities: [
                "Design high-fidelity mockups in Figma",
                "Create responsive landing pages optimized for mobile",
                "Develop comprehensive style guides for development",
                "Audit existing client sites for UX improvements"
            ],
            requirements: [
                "Strong portfolio of modern, luxury web design",
                "Understanding of CRO principles",
                "Basic knowledge of HTML/CSS is a plus"
            ]
        }
    ];

    React.useEffect(() => {
        let interval: NodeJS.Timeout;
        if (isAutoPlaying) {
            interval = setInterval(() => {
                handleNext();
            }, 5000);
        }
        return () => clearInterval(interval);
    }, [currentJobIndex, isAutoPlaying]);

    const changeJob = (newIndex: number) => {
        setAnimationClass("opacity-0 translate-x-4");
        setTimeout(() => {
            setCurrentJobIndex(newIndex);
            setAnimationClass("opacity-100 translate-x-0");
        }, 200);
    };

    const handleNext = () => {
        changeJob((currentJobIndex + 1) % positions.length);
    };

    const handlePrev = () => {
        changeJob((currentJobIndex - 1 + positions.length) % positions.length);
    };

    const handleManualNext = () => {
        setIsAutoPlaying(false);
        handleNext();
    };

    const handleManualPrev = () => {
        setIsAutoPlaying(false);
        handlePrev();
    };

    const handleDotClick = (index: number) => {
        setIsAutoPlaying(false);
        changeJob(index);
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log("Application submitted:", formData);
        setSubmitted(true);
    };

    const currentJob = positions[currentJobIndex];

    return (
        <div className="min-h-screen bg-slate-50 font-sans text-slate-900">
            <Helmet>
                <title>Careers - Join the BuilderProject Team</title>
                <meta name="description" content="Join our team of elite marketers and creatives helping custom home builders dominate their markets." />
            </Helmet>

            {/* Hero Section */}
            <section className="pt-40 pb-20 px-6 text-center max-w-4xl mx-auto">
                <span className="inline-block py-1 px-3 rounded-full bg-purple-100 text-purple-700 text-xs font-bold tracking-wider uppercase mb-6">
                    We're Hiring
                </span>
                <h1 className="text-5xl md:text-6xl font-serif font-bold text-slate-900 mb-8 leading-tight">
                    Build the Future of <br className="hidden md:block" /> Construction Marketing
                </h1>
                <p className="text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed">
                    We serve the top 1% of custom home builders. Our standard is excellence. If you're ready to do the best work of your career, you're in the right place.
                </p>
            </section>

            {/* Open Positions - Carousel */}
            <section className="px-6 pb-24 container mx-auto max-w-5xl">
                <div className="flex items-center justify-between mb-12">
                    <h2 className="text-3xl font-serif font-bold text-slate-900 flex items-center gap-3">
                        <Briefcase className="text-purple-600" /> Open Positions
                    </h2>
                    <div className="flex gap-2">
                        <button onClick={handleManualPrev} className="p-3 bg-white rounded-full shadow-sm border border-slate-200 hover:bg-slate-50 text-slate-600 transition-colors">
                            <ChevronLeft size={24} />
                        </button>
                        <button onClick={handleManualNext} className="p-3 bg-white rounded-full shadow-sm border border-slate-200 hover:bg-slate-50 text-slate-600 transition-colors">
                            <ChevronRight size={24} />
                        </button>
                    </div>
                </div>

                <div
                    className="bg-white rounded-3xl p-8 md:p-10 shadow-lg border border-slate-100 hover:shadow-xl transition-shadow duration-300 relative min-h-[600px] overflow-hidden"
                    onMouseEnter={() => setIsAutoPlaying(false)}
                    onMouseLeave={() => setIsAutoPlaying(true)}
                >
                    <div className={`transition-all duration-300 transform ${animationClass}`}>
                        <div className="flex flex-col md:flex-row md:items-start justify-between gap-6 mb-8">
                            <div className="flex gap-4">
                                <div className="p-3 bg-slate-50 rounded-2xl h-fit">
                                    {currentJob.icon}
                                </div>
                                <div>
                                    <h3 className="text-3xl font-bold text-slate-900 mb-2">{currentJob.title}</h3>
                                    <span className="inline-block bg-slate-100 text-slate-600 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide">
                                        {currentJob.type}
                                    </span>
                                </div>
                            </div>
                            <button
                                onClick={() => document.getElementById('application-form')?.scrollIntoView({ behavior: 'smooth' })}
                                className="hidden md:flex items-center gap-2 text-purple-600 font-bold hover:text-purple-800 transition-colors bg-purple-50 px-6 py-3 rounded-xl hover:bg-purple-100"
                            >
                                Apply Now <ArrowRight size={18} />
                            </button>
                        </div>

                        <p className="text-xl text-slate-700 mb-10 leading-relaxed border-b border-slate-100 pb-10 max-w-3xl">
                            {currentJob.overview}
                        </p>

                        <div className="grid md:grid-cols-2 gap-12">
                            <div>
                                <h4 className="font-bold text-slate-900 mb-6 flex items-center gap-2 text-sm uppercase tracking-wider text-slate-400">
                                    What You'll Do
                                </h4>
                                <ul className="space-y-4">
                                    {currentJob.responsibilities.map((item, i) => (
                                        <li key={i} className="flex items-start gap-3 text-slate-600">
                                            <span className="mt-1.5 w-1.5 h-1.5 bg-purple-500 rounded-full flex-shrink-0"></span>
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div>
                                <h4 className="font-bold text-slate-900 mb-6 flex items-center gap-2 text-sm uppercase tracking-wider text-slate-400">
                                    Who You Are
                                </h4>
                                <ul className="space-y-4">
                                    {currentJob.requirements.map((item, i) => (
                                        <li key={i} className="flex items-start gap-3 text-slate-600">
                                            <span className="mt-1.5 w-1.5 h-1.5 bg-purple-500 rounded-full flex-shrink-0"></span>
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>

                    <button
                        onClick={() => document.getElementById('application-form')?.scrollIntoView({ behavior: 'smooth' })}
                        className="md:hidden w-full mt-10 bg-slate-900 text-white font-bold py-4 rounded-xl hover:bg-slate-800 transition-colors shadow-lg"
                    >
                        Apply for this role
                    </button>

                    <div className="flex justify-center mt-12 gap-2 bottom-8 absolute left-0 right-0">
                        {positions.map((_, idx) => (
                            <button
                                key={idx}
                                onClick={() => handleDotClick(idx)}
                                className={`h-2 rounded-full transition-all duration-300 ${idx === currentJobIndex ? 'bg-purple-600 w-8' : 'bg-slate-200 w-2 hover:bg-slate-300'}`}
                            />
                        ))}
                    </div>
                </div>
            </section>

            {/* Application Form Section */}
            <section id="application-form" className="bg-white py-24 border-t border-slate-100">
                <div className="container mx-auto px-6 max-w-3xl">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-serif font-bold text-slate-900 mb-4">
                            Ready to Apply?
                        </h2>
                        <p className="text-slate-600 text-lg">
                            We value skill and character over resumes. Show us what you can do.
                        </p>
                    </div>

                    <div className="bg-slate-50 p-8 md:p-12 rounded-3xl shadow-inner border border-slate-100">
                        {submitted ? (
                            <div className="text-center py-20">
                                <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-sm">
                                    <CheckCircle size={40} />
                                </div>
                                <h3 className="text-3xl font-serif font-bold text-slate-900 mb-4">Application Sent!</h3>
                                <p className="text-slate-600 text-lg max-w-md mx-auto">
                                    We've received your details. Our team will review your application and get back to you within 48 hours if it's a match.
                                </p>
                                <button
                                    onClick={() => setSubmitted(false)}
                                    className="mt-10 text-purple-600 font-bold hover:text-purple-800 transition-colors"
                                >
                                    Submit another application
                                </button>
                            </div>
                        ) : (
                            <form onSubmit={handleSubmit} className="space-y-8">
                                <div>
                                    <label className="block text-sm font-bold text-slate-700 mb-2 uppercase tracking-wide">Role Applying For</label>
                                    <div className="relative">
                                        <select
                                            name="position"
                                            value={formData.position}
                                            onChange={handleChange}
                                            required
                                            className="w-full px-5 py-4 rounded-xl border border-slate-200 bg-white focus:border-purple-500 focus:ring-4 focus:ring-purple-500/10 outline-none transition-all appearance-none font-medium text-slate-900"
                                        >
                                            <option value="" disabled>Select your role...</option>
                                            {positions.map((job, i) => (
                                                <option key={i} value={job.title}>{job.title}</option>
                                            ))}
                                            <option value="General Application">General Application</option>
                                        </select>
                                        <div className="absolute right-5 top-1/2 -translate-y-1/2 pointer-events-none text-slate-400">
                                            <ArrowRight size={20} className="rotate-90" />
                                        </div>
                                    </div>
                                </div>

                                <div className="grid md:grid-cols-2 gap-8">
                                    <div>
                                        <label className="block text-sm font-bold text-slate-700 mb-2 uppercase tracking-wide">Full Name</label>
                                        <input
                                            type="text"
                                            name="name"
                                            value={formData.name}
                                            onChange={handleChange}
                                            required
                                            placeholder="Jane Doe"
                                            className="w-full px-5 py-4 rounded-xl border border-slate-200 bg-white focus:border-purple-500 focus:ring-4 focus:ring-purple-500/10 outline-none transition-all"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-bold text-slate-700 mb-2 uppercase tracking-wide">Email Address</label>
                                        <input
                                            type="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            required
                                            placeholder="jane@example.com"
                                            className="w-full px-5 py-4 rounded-xl border border-slate-200 bg-white focus:border-purple-500 focus:ring-4 focus:ring-purple-500/10 outline-none transition-all"
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label className="block text-sm font-bold text-slate-700 mb-2 uppercase tracking-wide">Portfolio / LinkedIn / Case Studies</label>
                                    <input
                                        type="url"
                                        name="portfolio"
                                        value={formData.portfolio}
                                        onChange={handleChange}
                                        placeholder="https://"
                                        className="w-full px-5 py-4 rounded-xl border border-slate-200 bg-white focus:border-purple-500 focus:ring-4 focus:ring-purple-500/10 outline-none transition-all"
                                    />
                                </div>

                                <div>
                                    <label className="block text-sm font-bold text-slate-700 mb-2 uppercase tracking-wide">Why You?</label>
                                    <textarea
                                        name="coverLetter"
                                        value={formData.coverLetter}
                                        onChange={handleChange}
                                        required
                                        rows={6}
                                        placeholder="Tell us about a big win, your work philosophy, or why you want to work with us. Keep it real."
                                        className="w-full px-5 py-4 rounded-xl border border-slate-200 bg-white focus:border-purple-500 focus:ring-4 focus:ring-purple-500/10 outline-none transition-all resize-y"
                                    ></textarea>
                                </div>

                                <button
                                    type="submit"
                                    className="w-full bg-slate-900 text-white font-bold text-lg py-5 rounded-xl hover:bg-slate-800 transition-all duration-300 shadow-xl hover:shadow-2xl hover:-translate-y-1 flex items-center justify-center gap-3"
                                >
                                    Submit Application <Send size={20} />
                                </button>
                            </form>
                        )}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Careers;
