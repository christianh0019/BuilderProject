import { Link } from 'react-router-dom';
import { Phone } from 'lucide-react';

const Contact = () => {
    return (
        <section className="py-32 bg-[#2B4677] text-white text-center relative overflow-hidden">
            <div className="absolute inset-0 bg-[url('/images/eagle-rock-update.png')] bg-cover bg-center opacity-10"></div>
            <div className="container mx-auto px-6 relative z-10">
                <h2 className="text-5xl md:text-6xl font-serif font-bold mb-8">Ready to Start Your Legacy?</h2>
                <p className="text-xl text-slate-300 mb-12 max-w-2xl mx-auto">Schedule a free consultation to discuss your project, budget, and timeline with our expert team.</p>
                <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                    <button className="px-12 py-5 bg-[#2B70B6] text-white font-bold hover:bg-white hover:text-[#2B70B6] transition-colors uppercase tracking-widest shadow-xl rounded-full">
                        Book Consultation
                    </button>
                    <a href="tel:9707753796" className="flex items-center gap-3 px-12 py-5 border-2 border-white/20 text-white font-bold hover:bg-white/10 transition-colors uppercase tracking-widest backdrop-blur-sm">
                        <Phone size={20} />
                        (970) 775-3796
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Contact;
