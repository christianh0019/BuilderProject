import React, { useEffect, useMemo } from 'react';
import { CheckCircle } from 'lucide-react';
import { useLocation } from 'react-router-dom';
import SimpleHeader from '../components/SimpleHeader';

const Booking: React.FC = () => {
    const location = useLocation();

    // Construct the booking URL with prefill parameters from the current URL query params
    const bookingUrl = useMemo(() => {
        const baseUrl = "https://api.leadconnectorhq.com/widget/booking/UTKipcTwyAOAwQ8etiGK";
        const searchParams = new URLSearchParams(location.search);

        // Ensure we only pass relevant params if they exist to keep the URL clean
        const widgetParams = new URLSearchParams();

        // Strategy: "Shotgun" approach. Pass standard and GHL-specific keys to ensure capture.
        // GHL often uses 'email' but sometimes 'contact_email'. Same for phone.

        // Handle Name
        const fullName = searchParams.get('full_name');
        const firstName = searchParams.get('first_name');
        const lastName = searchParams.get('last_name');

        if (fullName) {
            widgetParams.append('full_name', fullName);
            // Redundant backup just in case
            if (!firstName && !lastName) {
                // Try to split full name if we don't have parts
                const parts = fullName.split(' ');
                if (parts.length > 0) widgetParams.append('first_name', parts[0]);
                if (parts.length > 1) widgetParams.append('last_name', parts.slice(1).join(' '));
            }
        }
        if (firstName) widgetParams.append('first_name', firstName);
        if (lastName) widgetParams.append('last_name', lastName);

        // Handle Email
        const email = searchParams.get('email');
        if (email) {
            widgetParams.append('email', email);
            widgetParams.append('contact_email', email); // GHL variation
        }

        // Handle Phone
        const phone = searchParams.get('phone');
        if (phone) {
            widgetParams.append('phone', phone);
            widgetParams.append('contact_phone', phone); // GHL variation
        }

        const queryString = widgetParams.toString();
        return queryString ? `${baseUrl}?${queryString}` : baseUrl;
    }, [location.search]);

    useEffect(() => {
        const script = document.createElement('script');
        script.src = "https://link.msgsndr.com/js/form_embed.js";
        script.async = true;
        document.body.appendChild(script);

        return () => {
            document.body.removeChild(script);
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
                            <iframe
                                src={bookingUrl}
                                style={{ width: '100%', border: 'none', minHeight: '800px' }}
                                id="1SwWuvjoJauKd9ZHYlpp_1766260844042"
                            ></iframe>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Booking;
