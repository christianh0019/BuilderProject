import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { X, BookOpen, ArrowRight } from 'lucide-react';

const BookPopup: React.FC = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [isDismissed, setIsDismissed] = useState(false);

    useEffect(() => {
        // Check if previously dismissed in this session
        const dismissed = sessionStorage.getItem('bookPopupDismissed');
        if (dismissed) {
            setIsDismissed(true);
            return;
        }

        const timer = setTimeout(() => {
            setIsVisible(true);
        }, 10000); // 10 seconds

        return () => clearTimeout(timer);
    }, []);

    const handleDismiss = () => {
        setIsVisible(false);
        setIsDismissed(true);
        sessionStorage.setItem('bookPopupDismissed', 'true');
    };

    if (!isVisible || isDismissed) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center px-4">
            {/* Backdrop */}
            <div
                className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm transition-opacity duration-300"
                onClick={handleDismiss}
            />

            {/* Popup Content */}
            <div className="relative bg-white rounded-3xl shadow-2xl max-w-lg w-full overflow-hidden animate-fade-in-up">
                {/* Close Button */}
                <button
                    onClick={handleDismiss}
                    className="absolute top-4 right-4 p-2 bg-slate-100 hover:bg-slate-200 rounded-full text-slate-500 hover:text-slate-900 transition-colors z-10"
                >
                    <X size={20} />
                </button>

                <div className="flex flex-col md:flex-row">
                    {/* Image Side (Hidden on mobile to save space or keep usually) - making it full width top on mobile */}
                    <div className="bg-slate-900 p-8 md:w-2/5 flex flex-col justify-center items-center text-center relative overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/40 to-blue-900/40"></div>

                        {/* Book Icon/Mockup */}
                        <div className="relative z-10 bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-white/20 mb-4 shadow-xl transform rotate-3">
                            <BookOpen size={48} className="text-white" />
                        </div>
                        <p className="relative z-10 text-slate-300 text-xs font-bold uppercase tracking-widest">Free Guide</p>
                    </div>

                    {/* Content Side */}
                    <div className="p-8 md:w-3/5 flex flex-col justify-center">
                        <h3 className="text-2xl font-serif font-bold text-slate-900 mb-2 leading-tight">
                            The 7-Figure Builder Blueprint
                        </h3>
                        <p className="text-slate-500 mb-6 text-sm leading-relaxed">
                            Stop bidding on scraps. Learn the exact 3-step system we use to fill builder pipelines with premium custom home leads.
                        </p>

                        <Link
                            to="/book"
                            onClick={handleDismiss}
                            className="flex items-center justify-center gap-2 w-full py-4 rounded-xl bg-purple-600 hover:bg-purple-700 text-white font-bold transition-all shadow-lg hover:shadow-purple-500/30 hover:-translate-y-0.5"
                        >
                            Get It Free <ArrowRight size={18} />
                        </Link>
                        <div className="mt-4 text-center">
                            <button
                                onClick={handleDismiss}
                                className="text-xs text-slate-400 hover:text-slate-600 underline decoration-slate-300"
                            >
                                No thanks, I don't want more leads
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BookPopup;
