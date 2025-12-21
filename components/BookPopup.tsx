import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, ArrowRight, TrendingUp } from 'lucide-react';

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
            <div className="relative bg-white rounded-3xl shadow-2xl max-w-2xl w-full overflow-hidden animate-fade-in-up border border-slate-100">

                <div className="flex flex-col md:flex-row">
                    {/* Image Side */}
                    <div className="bg-slate-900 p-8 md:w-2/5 flex flex-col justify-center items-center text-center relative overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/60 to-blue-900/60"></div>
                        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>

                        {/* Revenue Icon */}
                        <div className="relative z-10 bg-white/10 backdrop-blur-md p-8 rounded-2xl border border-white/20 mb-6 shadow-2xl transform rotate-3 hover:rotate-0 transition-transform duration-500">
                            <TrendingUp size={64} className="text-white" />
                        </div>
                        <p className="relative z-10 text-white font-serif font-bold text-xl mb-1">Scale Revenue</p>
                        <p className="relative z-10 text-purple-200 text-xs font-bold uppercase tracking-widest">Predictably</p>
                    </div>

                    {/* Content Side */}
                    <div className="p-10 md:w-3/5 flex flex-col justify-center text-left">
                        <div className="mb-6">
                            <h3 className="text-2xl md:text-3xl font-serif font-bold text-slate-900 mb-3 leading-tight">
                                Tired of relying on referrals?
                            </h3>
                            <div className="h-1 w-20 bg-purple-600 rounded-full mb-4"></div>
                            <p className="text-slate-600 font-medium text-base md:text-lg leading-relaxed mb-2">
                                We know marketing hasn't worked for you in the past. That's because general agencies don't understand the construction sales cycle.
                            </p>
                            <p className="text-slate-600 text-sm">
                                Stop guessing. Download our <span className="text-purple-700 font-bold">"Revenue Framework"</span> to see exactly how we generate high-ticket leads.
                            </p>
                        </div>

                        <Link
                            to="/book"
                            onClick={handleDismiss}
                            className="flex items-center justify-center gap-3 w-full py-5 rounded-xl bg-slate-900 hover:bg-purple-700 text-white font-bold text-lg transition-all shadow-xl hover:shadow-purple-500/30 hover:-translate-y-1 group"
                        >
                            Send Me The Framework <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                        </Link>

                        <div className="mt-5 text-center">
                            <button
                                onClick={handleDismiss}
                                className="text-sm text-slate-400 hover:text-slate-600 font-medium hover:underline decoration-slate-300 transition-colors"
                            >
                                No thanks, I'll stick to word-of-mouth
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BookPopup;
