import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, CheckCircle2 } from 'lucide-react';
import SimpleHeader from '../components/SimpleHeader';

type Answer = 'yes' | 'no' | null;

interface Question {
    id: string;
    text: string;
}

interface Category {
    title: string;
    questions: Question[];
}

const quizData: Category[] = [
    {
        title: "Category 1: Lead Generation & Marketing",
        questions: [
            { id: "q1_1", text: "Do you have a predictable way to generate high-quality leads every week?" },
            { id: "q1_2", text: "Do you have a marketing system that generates a measurable Return on Investment (ROI)?" },
            { id: "q1_3", text: "Do you know your exact Cost Per Qualified Lead?" },
            { id: "q1_4", text: "Do you have a process to automatically filter out unqualified leads before they reach you?" },
            { id: "q1_5", text: "Do you actively advertise to your ideal customers in your most profitable markets?" },
            { id: "q1_6", text: "Do you have a system to retarget prospects who show interest but don't reach out?" }
        ]
    },
    {
        title: "Category 2: Website & Online Presence",
        questions: [
            { id: "q2_1", text: "Is your website built specifically to convert visitors into leads?" },
            { id: "q2_2", text: "Does your website prominently feature your work portfolio, customer reviews, and clear calls-to-action?" },
            { id: "q2_3", text: "Is your website fast and easy to use on a mobile phone?" },
            { id: "q2_4", text: "Does your business show up on the first page of local online search results?" },
            { id: "q2_5", text: "Can a customer easily book an estimate on your website?" }
        ]
    },
    {
        title: "Category 3: Sales Process & CRM",
        questions: [
            { id: "q3_1", text: "Do you use a central system (like a CRM) to track every lead from start to finish?" },
            { id: "q3_2", text: "Can you see your entire sales pipeline and the status of every prospect at a glance?" },
            { id: "q3_3", text: "Is your sales process systemized? (Or does it all depend on you?)" }
        ]
    },
    {
        title: "Category 4: Automation & Follow-Up",
        questions: [
            { id: "q4_1", text: "Does every new lead get an instant follow-up (text or email)?" },
            { id: "q4_2", text: "Do you have an automated follow-up system for unresponsive leads?" },
            { id: "q4_3", text: "Are your long-term prospects automatically getting educational emails from you for 6 to 12 months?" },
            { id: "q4_4", text: "Do you use an automated system to remind you to check in on a prospect's land or financing status?" }
        ]
    },
    {
        title: "Category 5: Data, Tracking & ROI",
        questions: [
            { id: "q5_1", text: "Do you know for certain which of your marketing efforts brings in the best clients?" },
            { id: "q5_2", text: "Can you easily track your lead-to-appointment and appointment-to-sale conversion rates?" }
        ]
    }
];

// Flatten the questions for the one-by-one interface
const flattenedQuestions = quizData.flatMap((category) =>
    category.questions.map((q) => ({
        ...q,
        categoryTitle: category.title,
    }))
).map((q, index) => ({ ...q, globalIndex: index }));

const TOTAL_QUESTIONS = flattenedQuestions.length;

const TheMarketingQuiz: React.FC = () => {
    const [answers, setAnswers] = useState<Record<string, 'yes' | 'no'>>({});
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isFinished, setIsFinished] = useState(false);

    // Keyboard navigation (Y, N, Enter to advance if answered)
    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (isFinished) return;
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
            }
        };
        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [currentIndex, isFinished, answers]);

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
    };

    const currentQ = flattenedQuestions[currentIndex];
    const progressPercentage = (currentIndex / TOTAL_QUESTIONS) * 100;

    return (
        <div className="min-h-screen bg-slate-50 flex flex-col font-sans">
            <SimpleHeader showStatus={false} />

            <div className="flex-grow flex flex-col pt-24 pb-20 px-4 md:px-6">
                <div className="container mx-auto max-w-4xl flex-grow flex flex-col">

                    {/* Hero Section */}
                    {!isFinished && (
                        <div className="text-center mb-8 shrink-0">
                            <h1 className="text-3xl md:text-5xl font-serif font-bold text-slate-900 mb-4 leading-tight">
                                How Does Your Marketing Rank Among <br className="hidden md:block" />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-700 to-pink-600">Top Custom Home Builders?</span>
                            </h1>
                            <p className="block text-base md:text-lg text-slate-600 max-w-2xl mx-auto px-4">
                                Take this 21-question assessment to uncover exactly where your marketing is leaking revenue and get expert insights on what you should improve.
                            </p>
                        </div>
                    )}

                    {/* Quiz Container */}
                    <div className="flex-grow flex flex-col justify-center bg-white rounded-3xl shadow-2xl border border-slate-100 overflow-hidden relative">

                        {/* Progress Bar */}
                        {!isFinished && (
                            <div className="absolute top-0 left-0 w-full h-1.5 bg-slate-100">
                                <motion.div
                                    className="h-full bg-purple-600"
                                    initial={{ width: 0 }}
                                    animate={{ width: `${progressPercentage}%` }}
                                    transition={{ duration: 0.3 }}
                                />
                            </div>
                        )}

                        <div className="p-6 md:p-12 lg:p-16 flex-grow flex flex-col justify-center relative min-h-[400px]">
                            <AnimatePresence mode="wait">
                                {!isFinished ? (
                                    <motion.div
                                        key={currentIndex}
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: -20 }}
                                        transition={{ duration: 0.3, ease: 'easeOut' }}
                                        className="w-full max-w-3xl mx-auto"
                                    >
                                        <div className="mb-10">
                                            <span className="text-xs md:text-sm font-bold text-purple-600 tracking-widest uppercase mb-4 block">
                                                {currentQ.categoryTitle}
                                            </span>
                                            <h2 className="text-2xl md:text-4xl font-medium text-slate-900 leading-snug flex items-start">
                                                <span className="text-slate-300 mr-4 md:mr-6 font-serif select-none">{currentIndex + 1}</span>
                                                <span>{currentQ.text}</span>
                                            </h2>
                                        </div>

                                        <div className="flex flex-col sm:flex-row gap-4 mt-8 md:pl-[3.5rem]">
                                            <button
                                                onClick={() => handleAnswer(currentQ.id, 'yes')}
                                                className={`group flex items-center justify-between px-6 py-4 md:px-8 md:py-5 rounded-2xl border-2 transition-all duration-200 w-full sm:w-1/2 text-left hover:border-purple-600 hover:bg-purple-50 ${answers[currentQ.id] === 'yes'
                                                    ? 'border-purple-600 bg-purple-50 ring-2 ring-purple-600 ring-offset-2'
                                                    : 'border-slate-200 bg-white'
                                                    }`}
                                            >
                                                <span className="text-xl font-bold text-slate-900">Yes</span>
                                                <span className="hidden md:flex items-center justify-center w-8 h-8 rounded-md bg-slate-100 text-slate-500 font-mono text-sm group-hover:bg-purple-200 group-hover:text-purple-700">Y</span>
                                            </button>

                                            <button
                                                onClick={() => handleAnswer(currentQ.id, 'no')}
                                                className={`group flex items-center justify-between px-6 py-4 md:px-8 md:py-5 rounded-2xl border-2 transition-all duration-200 w-full sm:w-1/2 text-left hover:border-slate-900 hover:bg-slate-50 ${answers[currentQ.id] === 'no'
                                                    ? 'border-slate-900 bg-slate-900 text-white ring-2 ring-slate-900 ring-offset-2'
                                                    : 'border-slate-200 bg-white'
                                                    }`}
                                            >
                                                <span className={`text-xl font-bold ${answers[currentQ.id] === 'no' ? 'text-white' : 'text-slate-900'}`}>No</span>
                                                <span className={`hidden md:flex items-center justify-center w-8 h-8 rounded-md font-mono text-sm ${answers[currentQ.id] === 'no' ? 'bg-slate-700 text-white' : 'bg-slate-100 text-slate-500 group-hover:bg-slate-200 group-hover:text-slate-900'}`}>N</span>
                                            </button>
                                        </div>
                                    </motion.div>
                                ) : (
                                    <motion.div
                                        key="finished"
                                        initial={{ opacity: 0, scale: 0.95 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        className="w-full max-w-2xl mx-auto text-center py-12"
                                    >
                                        <div className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-green-100 mb-8">
                                            <CheckCircle2 className="w-12 h-12 text-green-600" />
                                        </div>
                                        <h2 className="text-4xl md:text-5xl font-serif font-bold text-slate-900 mb-6">You're All Set!</h2>
                                        <p className="text-xl text-slate-600 mb-12 max-w-lg mx-auto">We've collected all 21 of your responses. Ready to see how you stack up and what to fix first?</p>
                                        <button
                                            onClick={handleSubmit}
                                            className="px-10 py-5 text-xl font-bold text-white transition-all bg-purple-600 rounded-full hover:bg-purple-700 hover:shadow-xl hover:-translate-y-1 w-full md:w-auto"
                                        >
                                            Get My Marketing Analysis
                                        </button>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>

                        {/* Footer Controls */}
                        {!isFinished && (
                            <div className="px-6 md:px-8 py-4 md:py-5 border-t border-slate-100 flex items-center justify-between bg-slate-50/50">
                                <button
                                    onClick={handleBack}
                                    disabled={currentIndex === 0}
                                    className={`flex items-center gap-2 px-4 py-2 font-medium rounded-lg transition-colors ${currentIndex === 0
                                        ? 'text-slate-300 cursor-not-allowed'
                                        : 'text-slate-600 hover:bg-slate-200 hover:text-slate-900'
                                        }`}
                                >
                                    <ArrowLeft className="w-4 h-4" />
                                    <span>Previous</span>
                                </button>

                                <div className="text-sm font-medium text-slate-500">
                                    <span className="text-slate-900 text-base">{currentIndex + 1}</span> / {TOTAL_QUESTIONS}
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TheMarketingQuiz;
