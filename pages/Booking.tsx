import React, { useEffect } from 'react';
import BookingWidget from '../components/BookingWidget';
import { CheckCircle } from 'lucide-react';
import { useLocation } from 'react-router-dom';
import SimpleHeader from '../components/SimpleHeader';

const Booking: React.FC = () => {
    const location = useLocation();



    useEffect(() => {
        // Track 'Lead' event when user lands on Booking page
        // (Use type check to avoid TS errors if types aren't defined)
        if (typeof window !== 'undefined' && (window as any).fbq) {
            (window as any).fbq('track', 'Lead');
        }

        const script = document.createElement('script');
        script.src = "https://link.msgsndr.com/js/form_embed.js";
        script.async = true;
        document.body.appendChild(script);

        const trackingScript = document.createElement('script');
        trackingScript.src = "https://link.msgsndr.com/js/external-tracking.js";
        trackingScript.setAttribute('data-tracking-id', 'tk_583915685a934ea98e0d72d5a4ef7f83');
        document.body.appendChild(trackingScript);

        return () => {
            if (document.body.contains(script)) {
                document.body.removeChild(script);
            }
            if (document.body.contains(trackingScript)) {
                document.body.removeChild(trackingScript);
            }
        };
    }, []);

    return (
        <div className="min-h-screen pt-24 pb-20 bg-slate-50 relative overflow-hidden">
            <SimpleHeader />

            <div className="container mx-auto px-6 relative z-10">
                <div className="max-w-5xl mx-auto">
                    {/* Header Section */}
                    <div className="text-center mb-10">
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-100 text-green-700 rounded-full text-sm font-bold mb-6 border border-green-200 animate-fadeIn">
                            <CheckCircle size={16} />
                            <span>Application Received</span>
                        </div>

                        <h1 className="text-3xl md:text-5xl font-serif font-bold text-slate-900 mb-6 leading-tight">
                            Almost there! <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-700 to-pink-600">
                                Schedule your strategy session.
                            </span>
                        </h1>

                        <p className="text-lg md:text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed">
                            Please select a time below to finalize your application and lock in your slot for a dedicated strategy audit.
                        </p>
                    </div>

                    {/* Booking Widget Container */}
                    <div className="bg-white rounded-3xl shadow-xl overflow-hidden border border-slate-200">
                        <div className="p-4 md:p-8 min-h-[800px]">
                            <BookingWidget calendarId="UTKipcTwyAOAwQ8etiGK" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Booking;
