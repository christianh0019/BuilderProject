import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, CheckCircle2, X } from 'lucide-react';
import SimpleHeader from '../components/SimpleHeader';

type Answer = 'yes' | 'no' | null;

interface Question {
    id: string;
    text: string;
    globalIndex: number;
}

const rawQuestions = [
    "Do you have a predictable way to generate high-quality leads every week?",
    "Do you have a marketing system that generates a measurable Return on Investment (ROI)?",
    "Do you know your exact Cost Per Qualified Lead?",
    "Do you have a process to automatically filter out unqualified leads before they reach you?",
    "Do you actively advertise to your ideal customers in your most profitable markets?",
    "Do you have a system to retarget prospects who show interest but don't reach out?",
    "Do you have any lead magnets? (free tools or resources that let you collect contact information)",
    "Is your website built specifically to convert visitors into leads?",
    "Does your website prominently feature your work portfolio, customer reviews, and clear calls-to-action?",
    "Do you have a Google Business Profile with active reviews?",
    "Does your business show up on the first page of local online search results?",
    "Can a customer easily book a call with you on your website?",
    "Do you use a central system (like a CRM) to track every lead from start to finish?",
    "Can you see your entire sales pipeline and the status of every prospect at a glance?",
    "Is your sales process systemized? (Or does it all depend on you?)",
    "Does every new lead get an instant follow-up (text or email)?",
    "Do you have an automated follow-up system for unresponsive leads?",
    "Are your long-term prospects automatically getting educational emails from you for 6 to 12 months?",
    "Do you use an automated system to remind you to check in on a prospect's land or financing status?",
    "Do you know for certain which of your marketing efforts brings in the best clients?",
    "Can you easily track your lead-to-appointment and appointment-to-sale conversion rates?"
];

const flattenedQuestions: Question[] = rawQuestions.map((text, index) => ({
    id: `q${index + 1}`,
    text,
    globalIndex: index,
}));

const TOTAL_QUESTIONS = flattenedQuestions.length;

const TheMarketingQuiz: React.FC = () => {
    const [quizStarted, setQuizStarted] = useState(false);
    const [answers, setAnswers] = useState<Record<string, 'yes' | 'no'>>({});
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isFinished, setIsFinished] = useState(false);

    // Keyboard navigation (Y, N, Enter to advance if answered)
    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (!quizStarted || isFinished) return;
            const currentQ = flattenedQuestions[currentIndex];

            if (e.key === 'y' || e.key === 'Y') {
                handleAnswer(currentQ.id, 'yes');
            } else if (e.key === 'n' || e.key === 'N') {
                handleAnswer(currentQ.id, 'no');
            } else if (e.key === 'Enter') {
                // Only advance on Enter if they've already answered this question
                if (answers[currentQ.id]) {
                    handleNext();
                }
            } else if (e.key === 'Escape') {
                setQuizStarted(false);
            }
        };
        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [currentIndex, isFinished, answers, quizStarted]);

    const handleAnswer = (questionId: string, answer: 'yes' | 'no') => {
        setAnswers(prev => ({ ...prev, [questionId]: answer }));

        // Auto-advance after a brief Typeform-like delay
        setTimeout(() => {
            handleNext();
        }, 400);
    };

    const handleNext = () => {
        if (currentIndex < TOTAL_QUESTIONS - 1) {
            setCurrentIndex(prev => prev + 1);
        } else {
            setIsFinished(true);
        }
    };

    const handleBack = () => {
        if (currentIndex > 0) {
            setCurrentIndex(prev => prev - 1);
        }
    };

    const handleSubmit = () => {
        console.log("Final Answers:", answers);
        // Temporary feedback
        alert("Thanks for taking the quiz! Your responses have been recorded.");
        setQuizStarted(false);
    };

    const currentQ = flattenedQuestions[currentIndex];
    const progressPercentage = (currentIndex / TOTAL_QUESTIONS) * 100;

    return (
        <div className="min-h-screen bg-slate-50 flex flex-col font-sans relative">
            <SimpleHeader showStatus={false} />

            <div className="flex-grow flex flex-col pt-24 pb-20 px-4 md:px-6">
                <div className="container mx-auto max-w-4xl flex-grow flex flex-col justify-center">

                    {/* Hero Section */}
                    <div className="text-center shrink-0 py-12 md:py-24">
                        <h1 className="text-3xl md:text-5xl lg:text-6xl font-serif font-bold text-slate-900 mb-6 leading-tight">
                            How Does Your Marketing Rank Among <br className="hidden md:block" />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-700 to-pink-600">Top Custom Home Builders?</span>
                        </h1>
                        <p className="block text-lg md:text-xl text-slate-600 max-w-2xl mx-auto px-4 mb-10">
                            Take this 21-question assessment to uncover exactly where your marketing is leaking revenue and get expert insights on what you should improve.
                        </p>
                        <button
                            onClick={() => setQuizStarted(true)}
                            className="inline-flex items-center justify-center px-10 py-5 text-xl font-bold text-white transition-all duration-200 bg-purple-600 rounded-full hover:bg-purple-700 hover:shadow-xl hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2 animate-bounce-slow"
                        >
                            Start The Quiz
                        </button>
                    </div>

                </div>
            </div>

            {/* Full Screen Quiz Modal */}
            <AnimatePresence>
                {quizStarted && (
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95 }}
                        transition={{ duration: 0.3, ease: 'easeOut' }}
                        className="fixed inset-0 z-50 bg-white flex flex-col"
                    >
                        {/* Header/Progress Bar for Modal */}
                        <div className="w-full bg-white flex-shrink-0 relative">
                            {/* Close Button */}
                            <div className="absolute top-4 right-4 md:top-6 md:right-8 z-10">
                                <button
                                    onClick={() => setQuizStarted(false)}
                                    className="p-3 bg-slate-100 hover:bg-slate-200 text-slate-500 hover:text-slate-800 rounded-full transition-colors"
                                    aria-label="Close quiz"
                                >
                                    <X className="w-6 h-6" />
                                </button>
                            </div>

                            {!isFinished && (
                                <div className="absolute top-0 left-0 w-full h-2 bg-slate-100">
                                    <motion.div
                                        className="h-full bg-purple-600"
                                        initial={{ width: 0 }}
                                        animate={{ width: `${progressPercentage}%` }}
                                        transition={{ duration: 0.3 }}
                                    />
                                </div>
                            )}
                        </div>

                        {/* Quiz Content Container */}
                        <div className="flex-grow flex flex-col justify-center px-6 md:px-12 lg:px-16 overflow-y-auto">
                            <AnimatePresence mode="wait">
                                {!isFinished ? (
                                    <motion.div
                                        key={currentIndex}
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: -20 }}
                                        transition={{ duration: 0.3, ease: 'easeOut' }}
                                        className="w-full max-w-4xl mx-auto"
                                    >
                                        <div className="mb-12">
                                            <h2 className="text-3xl md:text-5xl font-medium text-slate-900 leading-snug flex items-start">
                                                <span className="text-slate-300 mr-6 md:mr-8 font-serif select-none">{currentIndex + 1}</span>
                                                <span className="font-serif">{currentQ.text}</span>
                                            </h2>
                                        </div>

                                        <div className="flex flex-col sm:flex-row gap-4 mt-8 md:pl-[4.5rem]">
                                            <button
                                                onClick={() => handleAnswer(currentQ.id, 'yes')}
                                                className={`group flex items-center justify-between px-6 py-5 md:px-10 md:py-6 rounded-2xl border-[3px] transition-all duration-200 w-full sm:w-1/2 text-left hover:border-purple-600 hover:bg-purple-50 ${answers[currentQ.id] === 'yes'
                                                    ? 'border-purple-600 bg-purple-50 ring-4 ring-purple-600/20'
                                                    : 'border-slate-200 bg-white'
                                                    }`}
                                            >
                                                <span className="text-2xl font-bold text-slate-900">Yes</span>
                                                <span className="hidden md:flex items-center justify-center w-10 h-10 rounded-md bg-slate-100 text-slate-500 font-mono text-base group-hover:bg-purple-200 group-hover:text-purple-700">Y</span>
                                            </button>

                                            <button
                                                onClick={() => handleAnswer(currentQ.id, 'no')}
                                                className={`group flex items-center justify-between px-6 py-5 md:px-10 md:py-6 rounded-2xl border-[3px] transition-all duration-200 w-full sm:w-1/2 text-left hover:border-slate-900 hover:bg-slate-50 ${answers[currentQ.id] === 'no'
                                                    ? 'border-slate-900 bg-slate-900 text-white ring-4 ring-slate-900/20'
                                                    : 'border-slate-200 bg-white'
                                                    }`}
                                            >
                                                <span className={`text-2xl font-bold ${answers[currentQ.id] === 'no' ? 'text-white' : 'text-slate-900'}`}>No</span>
                                                <span className={`hidden md:flex items-center justify-center w-10 h-10 rounded-md font-mono text-base ${answers[currentQ.id] === 'no' ? 'bg-slate-700 text-white' : 'bg-slate-100 text-slate-500 group-hover:bg-slate-200 group-hover:text-slate-900'}`}>N</span>
                                            </button>
                                        </div>

                                        {/* Helper Text */}
                                        <div className="md:pl-[4.5rem] mt-6 text-slate-400 text-sm flex items-center gap-2">
                                            <span className="hidden md:inline">Press <strong>Y</strong> or <strong>N</strong> to answer.</span>
                                        </div>
                                    </motion.div>
                                ) : (
                                    <motion.div
                                        key="finished"
                                        initial={{ opacity: 0, scale: 0.95 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        className="w-full max-w-3xl mx-auto text-center py-12"
                                    >
                                        <div className="inline-flex items-center justify-center w-28 h-28 rounded-full bg-green-100 mb-8 shadow-inner">
                                            <CheckCircle2 className="w-14 h-14 text-green-600" />
                                        </div>
                                        <h2 className="text-5xl md:text-6xl font-serif font-bold text-slate-900 mb-6">You're All Set!</h2>
                                        <p className="text-2xl text-slate-600 mb-12 max-w-2xl mx-auto">We've collected all 21 of your responses. Ready to see how you stack up and what to fix first?</p>
                                        <button
                                            onClick={handleSubmit}
                                            className="px-12 py-6 text-2xl font-bold text-white transition-all bg-purple-600 rounded-full hover:bg-purple-700 hover:shadow-2xl hover:-translate-y-1 w-full md:w-auto"
                                        >
                                            Get My Marketing Analysis
                                        </button>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>

                        {/* Modal Footer Controls */}
                        {!isFinished && (
                            <div className="px-6 md:px-12 py-6 flex-shrink-0 flex items-center justify-between bg-white border-t border-slate-100">
                                <button
                                    onClick={handleBack}
                                    disabled={currentIndex === 0}
                                    className={`flex items-center gap-2 px-6 py-3 font-semibold text-lg rounded-full transition-colors ${currentIndex === 0
                                        ? 'text-slate-300 cursor-not-allowed'
                                        : 'text-slate-600 hover:bg-slate-100 hover:text-slate-900'
                                        }`}
                                >
                                    <ArrowLeft className="w-5 h-5" />
                                    <span>Previous</span>
                                </button>

                                <div className="text-lg font-medium text-slate-400">
                                    <span className="text-slate-900 text-xl font-bold">{currentIndex + 1}</span> / {TOTAL_QUESTIONS}
                                </div>
                            </div>
                        )}
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default TheMarketingQuiz;
