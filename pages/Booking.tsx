import React, { useEffect } from 'react';
import { CheckCircle } from 'lucide-react';

const Booking: React.FC = () => {
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
        <div className="min-h-screen pt-32 pb-20 bg-slate-50">
            <div className="container mx-auto px-6">
                <div className="max-w-4xl mx-auto bg-white rounded-3xl shadow-xl overflow-hidden">
                    <div className="p-8 md:p-12 text-center bg-slate-900 text-white">
                        <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6 text-white shadow-lg shadow-green-500/50">
                            <CheckCircle size={32} />
                        </div>
                        <h1 className="text-3xl md:text-4xl font-serif font-bold mb-4">Application Received!</h1>
                        <p className="text-xl text-slate-300">
                            Step 2: Please schedule your strategy session below to finalize your application.
                        </p>
                    </div>

                    <div className="p-4 md:p-8 bg-white min-h-[800px]">
                        <iframe
                            src="https://api.leadconnectorhq.com/widget/booking/UTKipcTwyAOAwQ8etiGK"
                            style={{ width: '100%', border: 'none', overflow: 'hidden', minHeight: '800px' }}
                            scrolling="no"
                            id="1SwWuvjoJauKd9ZHYlpp_1766260844042"
                        ></iframe>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Booking;
