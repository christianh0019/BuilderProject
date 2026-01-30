import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

const Hero = () => {
    return (
        <section className="relative h-screen min-h-[700px] flex items-center justify-center bg-slate-900 text-white overflow-hidden">
            {/* Parallax Background */}
            <div className="absolute inset-0 bg-[url('/images/spotlights/spotlight-6.png')] bg-cover bg-center bg-fixed opacity-50 z-0 scale-105 animate-slow-zoom"></div>
            <div className="absolute inset-0 bg-gradient-to-b from-slate-900/30 to-slate-900/90 z-10"></div>

            <div className="container mx-auto px-6 relative z-20 text-center max-w-5xl">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <div className="font-script text-3xl md:text-5xl text-blue-100 mb-2 drop-shadow-md">Quality you can see, people you can trust</div>
                    <h1 style={{ textWrap: "balance" }} className="text-5xl md:text-6xl lg:text-7xl font-serif font-bold mb-8 leading-tight text-white drop-shadow-2xl">
                        Northern Colorado's Best Custom Home Builder
                    </h1>
                    <p className="text-xl md:text-2xl mb-12 text-slate-200 max-w-2xl mx-auto font-light leading-relaxed">
                        We craft bespoke homes and transformative remodels that capture your vision and elevate your lifestyle.
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4, duration: 0.8 }}
                    className="flex flex-col sm:flex-row gap-6 justify-center"
                >
                    <button className="group px-10 py-5 bg-[#2B70B6] hover:bg-white hover:text-[#2B70B6] transition-all duration-300 text-white font-bold tracking-widest uppercase shadow-xl hover:shadow-2xl rounded-full">
                        Start Your Project
                    </button>
                    <button className="group px-10 py-5 border border-white/30 backdrop-blur-sm hover:bg-white hover:text-[#2B70B6] transition-all duration-300 text-white font-bold tracking-widest uppercase flex items-center gap-3 rounded-full">
                        View Our Work <ArrowRight className="group-hover:translate-x-1 transition-transform" />
                    </button>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
