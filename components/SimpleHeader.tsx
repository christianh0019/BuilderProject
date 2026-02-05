import React from 'react';
import { CheckCircle2 } from 'lucide-react';

interface SimpleHeaderProps {
    showStatus?: boolean;
}

const SimpleHeader: React.FC<SimpleHeaderProps> = ({ showStatus = true }) => {
    return (
        <div className="w-full bg-white border-b border-slate-100 py-4 px-6 fixed top-0 z-50">
            <div className="container mx-auto flex justify-between items-center text-sm font-bold text-slate-900">
                <div className="flex items-center gap-2">
                    <img src="/images/logo_icon.png" alt="BuilderProject Logo" title="BuilderProject Logo" className="w-8 h-8 rounded-lg" />
                    <span className="text-xl font-serif tracking-tight">BuilderProject</span>
                </div>
                {showStatus && (
                    <span className="text-green-600 flex items-center gap-2">
                        <CheckCircle2 size={16} />
                        Accepting New Partners
                    </span>
                )}
            </div>
        </div>
    );
};

export default SimpleHeader;
