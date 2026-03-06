import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, ArrowRight, BarChart3, TrendingUp, AlertTriangle, CheckCircle2 } from 'lucide-react';
import SimpleHeader from '../components/SimpleHeader';

const QuizResults: React.FC = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const [score, setScore] = useState<number | null>(null);
    const [tier, setTier] = useState<1 | 2 | 3 | null>(null);

    useEffect(() => {
        // Redirect if accessed directly without answers
        if (!location.state || !location.state.answers) {
            navigate('/the-marketing-quiz');
            return;
        }

        const answers = location.state.answers as Record<string, string>;

        let yesCount = 0;
        for (const key in answers) {
            if (answers[key] === 'yes') {
                yesCount++;
            }
        }

        setScore(yesCount);

        if (yesCount <= 7) {
            setTier(1);
        } else if (yesCount <= 14) {
            setTier(2);
        } else {
            setTier(3);
        }
    }, [location, navigate]);

    if (score === null || tier === null) return null;

    const totalQuestions = 21;
    const progressPercentage = (score / totalQuestions) * 100;

    const getTierContent = (currentTier: 1 | 2 | 3) => {
        switch (currentTier) {
            case 1:
                return {
                    title: "Needs Core Infrastructure",
                    color: "text-red-600",
                    bg: "bg-red-50",
                    icon: <AlertTriangle className="w-8 h-8 text-red-600" />,
                    analysis: [
                        "Based on your answers, your marketing is currently missing the core foundation needed to reliably bring in high-quality projects. Right now, you're likely relying heavily on referrals or word-of-mouth, which makes revenue unpredictable.",
                        "The primary focus right now shouldn't be on complex automation or scaling your team. It needs to be on building a predictable lead generation engine and a simple, centralized CRM to track those opportunities.",
                        "The good news? Once these basic systems are installed, builders in this phase typically see the most dramatic and rapid improvements in their project pipeline."
                    ]
                };
            case 2:
                return {
                    title: "Growth Bottlenecked",
                    color: "text-amber-600",
                    bg: "bg-amber-50",
                    icon: <BarChart3 className="w-8 h-8 text-amber-600" />,
                    analysis: [
                        "You have some pieces of the puzzle in place, but your growth is being bottle-necked by a lack of systemization. You might be getting leads, but you likely don't know exactly what your Cost Per Qualified Lead is, or your follow-up process is still largely manual.",
                        "As a custom home builder in this phase, you are likely the single point of failure for sales. To break through to the next revenue tier, you need to implement automated follow-up sequences for 6-12 months and start tracking your ROI aggressively.",
                        "Fixing these \"leaks\" in your sales pipeline is the fastest way to increase your revenue without necessarily spending more money on advertising."
                    ]
                };
            case 3:
                return {
                    title: "Scaling Ready",
                    color: "text-green-600",
                    bg: "bg-green-50",
                    icon: <TrendingUp className="w-8 h-8 text-green-600" />,
                    analysis: [
                        "Congratulations. Your marketing and sales systems are in the top tier of custom home builders. You understand your numbers, have predictable lead flow, and use automation to protect your time.",
                        "Your focus now is on aggressive scaling and market dominance. This is the optimal time to consider hiring a dedicated sales representative if you haven't already, or expanding your advertising into new, highly profitable target markets.",
                        "With this infrastructure, you have a massive competitive advantage over other builders in your area who are still relying on referrals."
                    ]
                };
        }
    };

    const content = getTierContent(tier);

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
                    </div>

                    {/* Score Card */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="bg-white rounded-3xl shadow-xl border border-slate-100 p-8 md:p-12 mb-8 relative overflow-hidden"
                    >
                        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 mb-10">
                            <div>
                                <h2 className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-2">Total Score</h2>
                                <div className="flex items-baseline gap-2">
                                    <span className="text-6xl md:text-7xl font-bold text-slate-900">{score}</span>
                                    <span className="text-2xl text-slate-400 font-medium">/ 21</span>
                                </div>
                            </div>

                            <div className={`flex items-center gap-4 px-6 py-4 rounded-2xl ${content.bg}`}>
                                {content.icon}
                                <div>
                                    <p className="text-sm font-bold text-slate-500 uppercase tracking-wider mb-1">Current State</p>
                                    <p className={`text-xl md:text-2xl font-bold ${content.color}`}>{content.title}</p>
                                </div>
                            </div>
                        </div>

                        {/* Visual Progress */}
                        <div className="w-full h-4 bg-slate-100 rounded-full overflow-hidden mb-4">
                            <motion.div
                                className={`h-full ${tier === 1 ? 'bg-red-500' : tier === 2 ? 'bg-amber-500' : 'bg-green-500'}`}
                                initial={{ width: 0 }}
                                animate={{ width: `${progressPercentage}%` }}
                                transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
                            />
                        </div>
                        <div className="flex justify-between text-xs font-bold text-slate-400 uppercase tracking-wider">
                            <span>0 Points</span>
                            <span>14 Points</span>
                            <span>21 Points</span>
                        </div>
                    </motion.div>

                    {/* Analysis Content */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="bg-white rounded-3xl shadow-xl border border-slate-100 p-8 md:p-12 mb-12"
                    >
                        <h3 className="text-2xl md:text-3xl font-serif font-bold text-slate-900 mb-8">What This Means For You</h3>

                        <div className="space-y-6 text-lg text-slate-600 leading-relaxed">
                            {content.analysis.map((paragraph, index) => (
                                <p key={index}>{paragraph}</p>
                            ))}
                        </div>
                    </motion.div>

                    {/* CTA Section */}
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
                                Book a free strategy call with our team. We'll review your specific results and map out the exact system you need to scale your custom home building business.
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

                </div>
            </div>
        </div>
    );
};

export default QuizResults;
