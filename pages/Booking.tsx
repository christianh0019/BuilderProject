import React, { useEffect } from 'react';
import { CheckCircle, Calendar } from 'lucide-react';

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
        <div className="min-h-screen pt-32 pb-20 bg-slate-50 relative overflow-hidden">
            {/* Background Gradients */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-purple-200/50 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 opacity-60"></div>
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-pink-200/50 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2 opacity-60"></div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="max-w-5xl mx-auto bg-white/80 backdrop-blur-xl rounded-3xl shadow-2xl overflow-hidden border border-white/50">
                    <div className="p-8 md:p-12 text-center bg-gradient-to-r from-slate-900 to-slate-800 text-white relative overflow-hidden">
                        <div className="absolute top-0 left-0 w-full h-full bg-[url('https://images.unsplash.com/photo-1557683316-973673baf926?auto=format&fit=crop&q=80')] opacity-10 bg-cover bg-center mix-blend-overlay"></div>

                        <div className="relative z-10">
                            <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-500/20 text-green-300 rounded-full text-sm font-semibold mb-6 border border-green-500/30">
                                <CheckCircle size={16} />
                                <span>Application Received</span>
                            </div>

                            <h1 className="text-3xl md:text-5xl font-serif font-bold mb-6 leading-tight">
                                Almost there! <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
                                    Schedule your strategy session.
                                </span>
                            </h1>

                            <p className="text-lg md:text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed">
                                Please select a time below to finalize your application and lock in your slot for a dedicated strategy audit.
                            </p>
                        </div>
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
