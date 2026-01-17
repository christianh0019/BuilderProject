import React, { useState, useEffect } from 'react';
import { TrendingUp, CheckCircle2 } from 'lucide-react';

const SocialProofWidget: React.FC = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [stats, setStats] = useState({ value: '', location: '', type: 'New Lead Generated' });

    const locations = [
        "Austin, TX", "Nashville, TN", "Denver, CO", "Phoenix, AZ",
        "Raleigh, NC", "Boise, ID", "Dallas, TX", "Orlando, FL",
        "Salt Lake City, UT", "Charleston, SC", "Hingham, MA", "Seattle, WA"
    ];

    const generateRandomStats = () => {
        // Generate random value between 0.7 and 3.0 (millions)
        const val = (Math.random() * (3.0 - 0.7) + 0.7).toFixed(1);

        // Pick random location
        const loc = locations[Math.floor(Math.random() * locations.length)];

        return {
            value: `$${val}M`,
            location: loc
        };
    };

    useEffect(() => {
        let timeoutId: NodeJS.Timeout;

        const showPopup = () => {
            const newStats = generateRandomStats();
            setStats({
                value: newStats.value,
                location: newStats.location,
                type: 'New Lead Generated'
            });
            setIsVisible(true);

            // Hide after 5 seconds (slightly longer to read details)
            setTimeout(() => {
                setIsVisible(false);
                scheduleNextPopup();
            }, 5000);
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
        <div className="fixed bottom-6 left-6 z-50 animate-in slide-in-from-bottom-5 fade-in duration-500 font-sans">
            <div className="bg-white/95 backdrop-blur-md border border-slate-200 shadow-2xl rounded-2xl p-4 flex gap-4 max-w-sm transition-all hover:scale-105 cursor-default relative overflow-hidden">

                {/* Decoration Bar */}
                <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-green-400 to-green-600"></div>

                <div className="bg-green-50 w-12 h-12 rounded-full flex items-center justify-center text-green-600 shrink-0 self-center">
                    <TrendingUp size={24} />
                </div>

                <div className="flex-1 min-w-0">
                    <div className="flex justify-between items-start">
                        <div className="text-[10px] font-bold text-slate-400 uppercase tracking-wide mb-0.5">BuilderProject System</div>
                        <div className="text-[10px] bg-slate-100 text-slate-500 px-1.5 py-0.5 rounded flex items-center gap-1">
                            <CheckCircle2 size={10} className="text-blue-500" /> Verified
                        </div>
                    </div>

                    <div className="font-bold text-slate-900 leading-tight truncate">
                        New Lead in {stats.location}
                    </div>

                    <div className="text-sm text-slate-500 mt-1 flex items-center gap-2">
                        <span>Project Value:</span>
                        <span className="text-green-600 font-bold bg-green-50 px-1.5 rounded">{stats.value}</span>
                    </div>

                    <div className="mt-2 text-[10px] text-slate-400 flex items-center gap-1 border-t border-slate-100 pt-1.5">
                        <CheckCircle2 size={10} /> Verified by GoHighLevel CRM
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SocialProofWidget;
