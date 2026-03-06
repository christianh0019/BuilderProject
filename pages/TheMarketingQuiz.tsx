import React, { useState } from 'react';
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

const TheMarketingQuiz: React.FC = () => {
    const [answers, setAnswers] = useState<Record<string, Answer>>({});

    const handleAnswer = (questionId: string, answer: Answer) => {
        setAnswers(prev => ({
            ...prev,
            [questionId]: answer
        }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log("Quiz Results:", answers);
        // Alert for now until connected to CRM
        alert("Thanks for taking the quiz! Your responses have been recorded.");
    };

    return (
        <div className="min-h-screen bg-slate-50 flex flex-col">
            <SimpleHeader showStatus={false} />

            <div className="flex-grow pt-24 pb-20 px-6">
                <div className="container mx-auto">
                    <div className="max-w-4xl mx-auto">
                        {/* Hero Section */}
                        <div className="text-center mb-16">
                            <h1 className="text-[28px] md:text-5xl font-serif font-bold text-slate-900 mb-6 leading-tight">
                                How Does Your Marketing Rank Among <br className="hidden md:block" />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-700 to-pink-600">Top Custom Home Builders?</span>
                            </h1>
                            <p className="block text-lg text-slate-600 max-w-2xl mx-auto">
                                Take this 21-question assessment to uncover exactly where your marketing is leaking revenue and get expert insights on what you should improve right now.
                            </p>
                        </div>

                        {/* Quiz Form */}
                        <div className="bg-white rounded-3xl shadow-xl border border-slate-100 p-8 md:p-12">
                            <form onSubmit={handleSubmit}>
                                {quizData.map((category, catIndex) => (
                                    <div key={catIndex} className="mb-12 last:mb-0">
                                        <h2 className="text-2xl font-serif font-bold text-slate-900 mb-6 pb-2 border-b border-slate-200">
                                            {category.title}
                                        </h2>
                                        <div className="space-y-6">
                                            {category.questions.map((q) => (
                                                <div key={q.id} className="flex flex-col md:flex-row md:items-center justify-between gap-4 p-4 rounded-xl hover:bg-slate-50 transition-colors border border-transparent hover:border-slate-100">
                                                    <p className="text-slate-700 font-medium md:max-w-xl">
                                                        {q.text}
                                                    </p>
                                                    <div className="flex items-center gap-3 shrink-0">
                                                        <button
                                                            type="button"
                                                            onClick={() => handleAnswer(q.id, 'yes')}
                                                            className={`px-6 py-2 rounded-full font-bold text-sm transition-all ${answers[q.id] === 'yes'
                                                                ? 'bg-purple-600 text-white shadow-md'
                                                                : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                                                                }`}
                                                        >
                                                            Yes
                                                        </button>
                                                        <button
                                                            type="button"
                                                            onClick={() => handleAnswer(q.id, 'no')}
                                                            className={`px-6 py-2 rounded-full font-bold text-sm transition-all ${answers[q.id] === 'no'
                                                                ? 'bg-slate-900 text-white shadow-md'
                                                                : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                                                                }`}
                                                        >
                                                            No
                                                        </button>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                ))}

                                <div className="mt-12 pt-8 border-t border-slate-200 text-center">
                                    <button
                                        type="submit"
                                        className="inline-flex items-center justify-center px-10 py-5 text-lg font-bold text-white transition-all duration-200 bg-purple-600 rounded-full hover:bg-purple-700 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2"
                                    >
                                        Get My Results
                                    </button>
                                    <p className="mt-4 text-sm text-slate-500">
                                        Your answers will help us pinpoint exactly where you need to focus.
                                    </p>
                                </div>
                            </form>
                        </div>
                    </div>
                </div >
            </div >
        </div >
    );
};

export default TheMarketingQuiz;
