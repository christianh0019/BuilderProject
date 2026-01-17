import React, { useState, useEffect } from 'react';
import { TrendingUp, CheckCircle2 } from 'lucide-react';

const SocialProofWidget: React.FC = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [stats, setStats] = useState({ value: '', type: 'New Lead Generated' });

    const generateRandomValue = () => {
        // Generate random value between 0.7 and 3.0 (millions)
        const val = (Math.random() * (3.0 - 0.7) + 0.7).toFixed(1);
        return `$${val}M`;
    };

    useEffect(() => {
        let timeoutId: NodeJS.Timeout;

        const showPopup = () => {
            // Update stats
            setStats({
                value: generateRandomValue(),
                type: 'New Lead Generated'
            });
            setIsVisible(true);

            // Hide after 4 seconds
            setTimeout(() => {
                setIsVisible(false);
                scheduleNextPopup();
            }, 4000);
        };

        const scheduleNextPopup = () => {
            // Random interval between 5 and 15 seconds
            const randomDelay = Math.floor(Math.random() * (15000 - 5000 + 1) + 5000);
            timeoutId = setTimeout(showPopup, randomDelay);
        };

        // Initial delay
        scheduleNextPopup();

        return () => clearTimeout(timeoutId);
    }, []);

    if (!isVisible) return null;

    return (
        <div className="fixed bottom-6 left-6 z-50 animate-in slide-in-from-bottom-5 fade-in duration-500">
            <div className="bg-white/90 backdrop-blur-md border border-slate-200 shadow-lg rounded-full py-3 px-5 flex items-center gap-3 max-w-xs transition-all hover:scale-105 cursor-default">
                <div className="bg-green-100 p-2 rounded-full text-green-600 shrink-0">
                    <TrendingUp size={16} />
                </div>
                <div>
                    <div className="text-[10px] font-bold text-slate-400 uppercase tracking-wide">BuilderProject System</div>
                    <div className="text-sm font-semibold text-slate-800 flex items-center gap-1">
                        <span>New Lead:</span>
                        <span className="text-green-600 font-bold">{stats.value}</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SocialProofWidget;
