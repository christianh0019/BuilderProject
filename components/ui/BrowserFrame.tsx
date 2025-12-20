import React from 'react';

interface BrowserFrameProps {
    url: string;
    children: React.ReactNode;
}

const BrowserFrame: React.FC<BrowserFrameProps> = ({ url, children }) => {
    return (
        <div className="w-full rounded-xl overflow-hidden shadow-2xl border border-slate-200 bg-white">
            {/* Browser Toolbar */}
            <div className="bg-slate-100 border-b border-slate-200 px-4 py-3 flex items-center space-x-4">
                {/* Traffic Lights */}
                <div className="flex space-x-2">
                    <div className="w-3 h-3 rounded-full bg-red-500 border border-red-600"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500 border border-yellow-600"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500 border border-green-600"></div>
                </div>

                {/* Address Bar */}
                <div className="flex-1 bg-white rounded-md border border-slate-300 px-3 py-1 flex items-center justify-center text-xs text-slate-500 font-mono shadow-sm">
                    <span className="mr-2 opacity-50">🔒</span> {url}
                </div>

                {/* Placeholder for visual balance */}
                <div className="w-10"></div>
            </div>

            {/* Content Area - Scrollable Container */}
            <div className="relative h-[600px] w-full overflow-y-auto overflow-x-hidden scrollbar-thin scrollbar-thumb-slate-300 scrollbar-track-transparent">
                {children}
            </div>
        </div>
    );
};

export default BrowserFrame;
