import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import SimpleHeader from '../components/SimpleHeader';
import ReactMarkdown from 'react-markdown';

const QuizResults: React.FC = () => {
    const location = useLocation();
    const navigate = useNavigate();

    const [score, setScore] = useState<number | null>(null);
    const [analysis, setAnalysis] = useState<string | null>(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    const leadInfo = location.state?.leadInfo;

    useEffect(() => {
        // Redirect if accessed directly without answers
        if (!location.state || !location.state.answers || !leadInfo) {
            navigate('/the-marketing-quiz');
            return;
        }

        const answers = location.state.answers as Record<string, string>;

        // Calculate Score locally for the display
        let yesCount = 0;
        for (const key in answers) {
            if (answers[key] === 'yes') {
                yesCount++;
            }
        }
        setScore(yesCount);

        // Fetch AI Analysis
        const fetchAnalysis = async () => {
            try {
                const response = await fetch('/api/analyze', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ answers, leadInfo })
                });

                if (!response.ok) {
                    throw new Error('Failed to fetch analysis');
                }

                const data = await response.json();
                setAnalysis(data.analysis);
            } catch (err) {
                console.error(err);
                setError("We encountered an issue generating your personalized analysis. Please ensure you are connected to the internet and try again.");
            } finally {
                setIsLoading(false);
            }
        };

        fetchAnalysis();
    }, [location, navigate, leadInfo]);

    if (!location.state || !location.state.answers || !leadInfo) return null;

    const totalQuestions = 21;
    const progressPercentage = score !== null ? (score / totalQuestions) * 100 : 0;

    return (
        <div className="min-h-screen bg-slate-50 flex flex-col font-sans">
            <SimpleHeader showStatus={false} />

            <div className="flex-grow flex flex-col pt-32 pb-20 px-4 md:px-6">
                <div className="container mx-auto max-w-4xl">

                    {/* Header */}
                    <div className="text-center mb-16">
                        <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-100 text-slate-600 font-medium text-sm mb-6">
                            <CheckCircle2 className="w-4 h-4 text-green-500" />
                            Analysis Complete
                        </span>
                        <h1 className="text-4xl md:text-6xl font-serif font-bold text-slate-900 mb-6 leading-tight">
                            Your Marketing <br className="hidden md:block" />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-700 to-pink-600">Performance Results</span>
                        </h1>
                        <p className="text-xl text-slate-600 max-w-2xl mx-auto">
                            Hi {leadInfo?.name}, here is your personalized breakdown based on your ${leadInfo?.businessName ? `business (${leadInfo.businessName})` : 'business'}.
                        </p>
                    </div>

                    {/* Score Card */}
                    {score !== null && (
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="bg-white rounded-3xl shadow-xl border border-slate-100 p-8 md:p-12 mb-8 relative overflow-hidden flex flex-col items-center text-center"
                        >
                            <h2 className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-4">Systems Active</h2>
                            <div className="flex items-baseline gap-2 mb-8">
                                <span className="text-6xl md:text-8xl font-bold text-slate-900">{score}</span>
                                <span className="text-2xl text-slate-400 font-medium">/ 21</span>
                            </div>

                            {/* Visual Progress */}
                            <div className="w-full max-w-2xl h-4 bg-slate-100 rounded-full overflow-hidden mb-4">
                                <motion.div
                                    className="h-full bg-gradient-to-r from-purple-500 to-pink-500"
                                    initial={{ width: 0 }}
                                    animate={{ width: `${progressPercentage}%` }}
                                    transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
                                />
                            </div>
                        </motion.div>
                    )}

                    {/* Analysis Content */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="bg-white rounded-3xl shadow-xl border border-slate-100 p-8 md:p-12 mb-12"
                    >
                        <h3 className="text-2xl md:text-3xl font-serif font-bold text-slate-900 mb-8 border-b border-slate-100 pb-6">What This Means For You</h3>

                        {isLoading ? (
                            <div className="py-12 flex flex-col items-center justify-center space-y-4">
                                <div className="w-12 h-12 border-4 border-slate-200 border-t-purple-600 rounded-full animate-spin"></div>
                                <p className="text-lg text-slate-500 font-medium animate-pulse">Our AI is analyzing your answers & generating your protocol...</p>
                            </div>
                        ) : error ? (
                            <div className="py-12 text-center text-red-500">
                                <p>{error}</p>
                            </div>
                        ) : (
                            <div className="prose prose-lg prose-slate max-w-none prose-p:leading-relaxed prose-headings:font-serif">
                                <ReactMarkdown>
                                    {analysis || ""}
                                </ReactMarkdown>
                            </div>
                        )}
                    </motion.div>

                    {/* CTA Section */}
                    {(!isLoading && !error) && (
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            className="bg-slate-900 rounded-3xl shadow-2xl p-10 md:p-16 text-center text-white relative overflow-hidden"
                        >
                            {/* Decorative background circle */}
                            <div className="absolute top-0 right-0 -mr-20 -mt-20 w-64 h-64 rounded-full bg-purple-500 blur-3xl opacity-20 pointer-events-none"></div>
                            <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-64 h-64 rounded-full bg-pink-500 blur-3xl opacity-20 pointer-events-none"></div>

                            <div className="relative z-10">
                                <h3 className="text-3xl md:text-5xl font-serif font-bold mb-6">Ready to fix the leaks in your marketing?</h3>
                                <p className="text-xl text-slate-300 max-w-2xl mx-auto mb-10">
                                    Book a free strategy call with our team. We'll map out the exact system you need to scale {leadInfo.businessName || 'your business'}.
                                </p>
                                <Link
                                    to="/partner-pre-meeting"
                                    className="inline-flex items-center justify-center gap-3 px-10 py-5 text-xl font-bold text-slate-900 bg-white rounded-full hover:bg-purple-50 transition-all duration-200 hover:shadow-[0_0_40px_rgba(255,255,255,0.3)] hover:-translate-y-1"
                                >
                                    <span>Book Your Strategy Call</span>
                                    <ArrowRight className="w-5 h-5" />
                                </Link>
                            </div>
                        </motion.div>
                    )}

                </div>
            </div>
        </div>
    );
};

export default QuizResults;
