import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Play, X, Lock } from 'lucide-react';

const BookPopup: React.FC = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [isDismissed, setIsDismissed] = useState(false);
    const navigate = useNavigate();

    // Form State
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        businessName: ''
    });

    useEffect(() => {
        const dismissed = sessionStorage.getItem('bookPopupDismissed');
        if (dismissed) {
            setIsDismissed(true);
            return;
        }

        const timer = setTimeout(() => {
            setIsVisible(true);
        }, 12000);

        return () => clearTimeout(timer);
    }, []);

    const handleDismiss = () => {
        setIsVisible(false);
        setIsDismissed(true);
        sessionStorage.setItem('bookPopupDismissed', 'true');
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // In a real implementation, you would submit this data to a backend here.
        handleDismiss();
        navigate('/free-training');
    };

    if (!isVisible || isDismissed) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center px-4">
            <div className="absolute inset-0 bg-slate-900/80 backdrop-blur-sm transition-opacity duration-300" onClick={handleDismiss} />

            <div className="relative bg-white rounded-2xl shadow-2xl max-w-4xl w-full overflow-hidden animate-fade-in-up flex flex-col md:flex-row">
                <button onClick={handleDismiss} className="absolute top-4 right-4 text-white/50 hover:text-white z-50 md:text-slate-400 md:hover:text-slate-600">
                    <X size={24} />
                </button>

                {/* Left Side - Visual/Value */}
                <div className="bg-slate-900 p-8 md:w-5/12 text-white relative flex flex-col justify-center overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-purple-900/50 to-blue-900/50"></div>
                    {/* Abstract background */}
                    <div className="relative z-10">
                        <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest mb-6">
                            <Lock size={12} /> Internal Training
                        </div>
                        <h3 className="text-3xl font-serif font-bold mb-4 leading-tight">
                            Steal Our Entire <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">Marketing System</span>
                        </h3>
                        <p className="text-slate-300 mb-8 text-sm leading-relaxed">
                            Get immediate access to the internal breakdown where we reveal the exact funnel, ads, and sales process we use to scale custom home builders.
                        </p>

                        <div className="flex items-center gap-4 text-sm font-bold">
                            <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center border border-white/20">
                                <Lock size={20} className="ml-1" fill="currentColor" />
                            </div>
                            <div>
                                <div>Full System Breakdown</div>
                                <div className="text-purple-300 font-normal text-xs">100% Free Access</div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Right Side - Form */}
                <div className="p-8 md:w-7/12 bg-white">
                    <div className="text-center mb-6">
                        <h4 className="text-xl font-bold text-slate-900">Unlock Immediate Access</h4>
                        <p className="text-sm text-slate-500">Enter your details to get the system now.</p>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-4">
                        <div className="grid grid-cols-2 gap-4">
                            <input
                                type="text"
                                name="name"
                                placeholder="Full Name"
                                required
                                value={formData.name}
                                onChange={handleChange}
                                className="w-full px-4 py-3 rounded-lg bg-slate-50 border border-slate-200 focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all placeholder:text-slate-400"
                            />
                            <input
                                type="tel"
                                name="phone"
                                placeholder="Phone Number"
                                required
                                value={formData.phone}
                                onChange={handleChange}
                                className="w-full px-4 py-3 rounded-lg bg-slate-50 border border-slate-200 focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all placeholder:text-slate-400"
                            />
                        </div>
                        <div>
                            <input
                                type="email"
                                name="email"
                                placeholder="Email Address"
                                required
                                value={formData.email}
                                onChange={handleChange}
                                className="w-full px-4 py-3 rounded-lg bg-slate-50 border border-slate-200 focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all placeholder:text-slate-400"
                            />
                        </div>
                        <div>
                            <input
                                type="text"
                                name="businessName"
                                placeholder="Business Name"
                                required
                                value={formData.businessName}
                                onChange={handleChange}
                                className="w-full px-4 py-3 rounded-lg bg-slate-50 border border-slate-200 focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all placeholder:text-slate-400"
                            />
                        </div>

                        <button
                            type="submit"
                            className="w-full py-4 rounded-xl bg-slate-900 hover:bg-purple-600 text-white font-bold text-lg shadow-lg hover:shadow-purple-500/25 transition-all duration-300 transform hover:-translate-y-1"
                        >
                            Get Free Access
                        </button>
                    </form>

                    <div className="mt-4 text-center">
                        <button onClick={handleDismiss} className="text-xs text-slate-400 hover:text-slate-600 font-medium">
                            No thanks, I'll stick to guessing
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BookPopup;
