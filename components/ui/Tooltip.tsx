import React, { useState } from 'react';

interface TooltipProps {
    content: string;
    children: React.ReactNode;
}

const Tooltip: React.FC<TooltipProps> = ({ content, children }) => {
    const [isVisible, setIsVisible] = useState(false);

    return (
        <div
            className="relative inline-block cursor-help group"
            onMouseEnter={() => setIsVisible(true)}
            onMouseLeave={() => setIsVisible(false)}
        >
            {children}
            {isVisible && (
                <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 w-64 p-3 bg-slate-800 text-white text-xs rounded-lg shadow-xl border border-slate-700 z-50 animate-fadeIn">
                    {content}
                    <div className="absolute top-full left-1/2 -translate-x-1/2 border-8 border-transparent border-t-slate-800"></div>
                </div>
            )}
        </div>
    );
};

export default Tooltip;
