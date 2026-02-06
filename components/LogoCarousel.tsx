import React from 'react';

const LogoCarousel: React.FC = () => {
    // Array of 14 logo filenames
    const logos = Array.from({ length: 14 }, (_, i) => `/images/client-logos/${i + 1}.png`);

    return (
        <div className="w-full relative overflow-hidden py-10">
            {/* Gradient Overlays */}
            <div className="absolute top-0 left-0 w-24 h-full bg-gradient-to-r from-slate-50 to-transparent z-10 pointer-events-none" />
            <div className="absolute top-0 right-0 w-24 h-full bg-gradient-to-l from-slate-50 to-transparent z-10 pointer-events-none" />

            {/* Marquee Container */}
            <div className="flex gap-12 animate-scroll w-max">
                {/* First set of logos */}
                {logos.map((src, index) => (
                    <div key={`logo-1-${index}`} className="flex-shrink-0 w-32 h-20 flex items-center justify-center grayscale opacity-60 hover:opacity-100 transition-opacity">
                        <img
                            src={src}
                            alt={`Client Logo ${index + 1}`}
                            className="max-w-full max-h-full object-contain"
                        />
                    </div>
                ))}
                {/* Second set of logos for seamless loop */}
                {logos.map((src, index) => (
                    <div key={`logo-2-${index}`} className="flex-shrink-0 w-32 h-20 flex items-center justify-center grayscale opacity-60 hover:opacity-100 transition-opacity">
                        <img
                            src={src}
                            alt={`Client Logo ${index + 1}`}
                            className="max-w-full max-h-full object-contain"
                        />
                    </div>
                ))}
            </div>

            <style>
                {`
                    @keyframes scroll {
                        0% { transform: translateX(0); }
                        100% { transform: translateX(-50%); }
                    }
                    .animate-scroll {
                        animation: scroll 30s linear infinite;
                    }
                `}
            </style>
        </div>
    );
};

export default LogoCarousel;
