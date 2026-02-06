import React, { useRef } from 'react';
import SurveyForm from '../components/SurveyForm';
import { ArrowRight, CheckCircle2, Volume2, VolumeX } from 'lucide-react';
import { caseStudies } from '../data/caseStudies';
import SimpleHeader from '../components/SimpleHeader';

const AdvertisingLanding: React.FC = () => {
    const surveyRef = useRef<HTMLDivElement>(null);
    const videoRef = useRef<HTMLVideoElement>(null);
    const [isMuted, setIsMuted] = React.useState(true);

    const handleVideoClick = () => {
        if (videoRef.current) {
            if (isMuted) {
                videoRef.current.currentTime = 0;
                videoRef.current.muted = false;
                videoRef.current.controls = true;
                setIsMuted(false);
            }
        }
    };

    const scrollToSurvey = () => {
        surveyRef.current?.scrollIntoView({ behavior: 'smooth' });
    };

    React.useEffect(() => {
        const script = document.createElement('script');
        script.src = "https://link.msgsndr.com/js/external-tracking.js";
        script.setAttribute('data-tracking-id', 'tk_583915685a934ea98e0d72d5a4ef7f83');
        document.body.appendChild(script);

        return () => {
            // Check if script is still in body before removing (safety check)
            if (document.body.contains(script)) {
                document.body.removeChild(script);
            }
        };
    }, []);

    const CTAButton = () => (
        <div className="text-center mt-12 mb-12">
            <style>
                {`
                    @keyframes heartbeat {
                        0%, 100% { transform: scale(1); }
                        50% { transform: scale(1.05); }
                    }
                    .animate-heartbeat {
                        animation: heartbeat 2s infinite;
                    }
                    .animate-heartbeat:hover {
                        animation: none;
                        transform: scale(1.05);
                    }
                `}
            </style>
            <button
                onClick={scrollToSurvey}
                className="group relative inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-white transition-all duration-200 bg-gradient-to-r from-purple-700 to-pink-600 rounded-full hover:shadow-xl hover:shadow-purple-500/30 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 animate-heartbeat shadow-lg shadow-purple-500/20"
            >
                See If You Qualify
                <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
            </button>
        </div>
    );

    return (
        <div className="min-h-screen bg-slate-50 flex flex-col">
            <SimpleHeader showStatus={false} />

            <div className="flex-grow pt-24 pb-20 px-6">
                <div className="container mx-auto">
                    <div className="max-w-4xl mx-auto">
                        {/* Hero Section */}
                        <div className="text-center mb-12">
                            {/* Reviews Pill */}
                            <div className="inline-flex items-center gap-2 bg-purple-50 border border-purple-100 px-4 py-2 rounded-full mb-8 animate-fadeIn">
                                <span className="text-sm font-bold text-purple-900">Custom Home Builders & Remodelers</span>
                            </div>

                            <h1 className="text-[25px] md:text-5xl font-serif font-bold text-slate-900 mb-6 leading-tight">
                                Stop Relying On Referrals And Build A Predictable Pipeline That Takes You From <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-700 to-pink-600">$3–5M To $15M+</span>
                            </h1>
                            <p className="hidden md:block text-lg text-slate-600 max-w-2xl mx-auto">
                                So that you can turn your owner-run operation into a real company that's built on systems, not randomness.
                            </p>

                            {/* Autoplay Video Section */}
                            <div className="mt-8 mb-8 relative mx-auto max-w-sm md:max-w-md group cursor-pointer" onClick={handleVideoClick}>
                                <div className="rounded-2xl overflow-hidden shadow-2xl border-4 border-white transform transition-transform duration-300 hover:scale-105">
                                    <video
                                        ref={videoRef}
                                        src="https://storage.googleapis.com/msgsndr/HllUVzV8V6VFH4nUuq4W/media/6985d441d017c33ad9dc0279.mp4"
                                        className="w-full h-auto object-cover"
                                        autoPlay
                                        loop
                                        muted
                                        playsInline
                                    />
                                    {isMuted && (
                                        <div className="absolute inset-0 bg-black/20 flex flex-col items-center justify-center transition-opacity duration-300 hover:bg-black/10">
                                            <div className="bg-white/20 backdrop-blur-md p-4 rounded-full mb-3 shadow-lg ring-1 ring-white/50 animate-pulse">
                                                <VolumeX className="w-8 h-8 text-white fill-white" />
                                            </div>
                                            <span className="bg-black/60 text-white text-[10px] font-bold tracking-widest uppercase px-3 py-1 rounded-full backdrop-blur-sm">
                                                Click to Unmute
                                            </span>
                                        </div>
                                    )}
                                </div>
                            </div>

                            {/* Mobile Only CTA */}
                            <div className="md:hidden">
                                <CTAButton />
                            </div>
                        </div>

                        {/* Form Container */}
                        <div ref={surveyRef} className="max-w-2xl mx-auto mb-20 scroll-mt-24">
                            <SurveyForm webhookUrl="https://services.leadconnectorhq.com/hooks/HllUVzV8V6VFH4nUuq4W/webhook-trigger/fad0a645-e084-4b96-8216-6e72e76b8f98" />
                        </div>

                        {/* Persuasion / Value Section - HIDDEN per user request 2026-01-21 */}
                        {/* Expanded Persuasion Section */}
                        <div className="mb-24 animate-fadeIn space-y-24 hidden">
                            {/* ... (Hidden content omitted for brevity, logic remains same) ... */}
                        </div>

                        {/* Testimonials Section */}
                        <div className="border-t border-slate-200 pt-16">
                            <div className="text-center mb-12">
                                <p className="text-xl md:text-2xl font-serif text-slate-900 italic mb-8 max-w-3xl mx-auto">
                                    "Here’s what happens when builders replace referral-only growth with real infrastructure."
                                </p>
                                <span className="text-purple-600 font-bold tracking-wider text-sm uppercase mb-3 block">Proven Results</span>
                                <h2 className="text-3xl font-serif font-bold text-slate-900">What Our Partners Are Saying</h2>
                            </div>

                            <div className="grid md:grid-cols-2 gap-6 text-left">
                                {caseStudies
                                    .map((study) => (
                                        <div key={study.id} className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow flex flex-col">
                                            {study.videoUrl ? (
                                                <div className="mb-6 rounded-xl overflow-hidden bg-slate-100 shadow-inner block">
                                                    <video
                                                        src={study.videoUrl}
                                                        poster={study.imageUrl}
                                                        controls
                                                        playsInline
                                                        className="w-full h-auto"
                                                    />
                                                </div>
                                            ) : (
                                                <div className="flex items-center gap-4 mb-4">
                                                    <div className="w-12 h-12 rounded-full overflow-hidden bg-slate-100 shrink-0">
                                                        <img src={study.imageUrl} alt={study.builderName} className="w-full h-full object-cover" />
                                                    </div>
                                                    <div>
                                                        <div className="font-bold text-slate-900 leading-tight">{study.builderName}</div>
                                                        <div className="text-sm text-slate-500">{study.location}</div>
                                                    </div>
                                                </div>
                                            )}

                                            {study.videoUrl && (
                                                <div className="mb-3">
                                                    <div className="font-bold text-slate-900 leading-tight text-lg">{study.builderName}</div>
                                                    <div className="text-sm text-slate-500">{study.location}</div>
                                                </div>
                                            )}

                                            <div className="flex-grow">
                                                <p className="text-slate-600 leading-relaxed text-sm">
                                                    {study.landingPageDescription || study.content.overview}
                                                </p>
                                            </div>
                                        </div>
                                    ))}
                            </div>
                        </div>
                        <CTAButton />


                    </div>
                </div>
            </div>

            {/* Legal Footer */}
            <footer className="py-12 bg-slate-50 border-t border-slate-200">
                <div className="container mx-auto px-6">
                    <div className="max-w-4xl mx-auto text-xs text-slate-400 space-y-4 text-center leading-relaxed">
                        <p>Copyright © {new Date().getFullYear()} BuildSurge Collectives LLC All rights reserved.</p>
                        <p>
                            <strong>Website Content, Services & Products Disclaimer:</strong> All information provided throughout our website, services or products is not and cannot ever be intended either as financial, investment, tax, legal advice or otherwise. All information is general information about our investment training services. Any information on our website, services or products does not and cannot ever take into account the particular financial situation, objectives or investment needs of either you or anyone reading this information. There is a very degree of risk involved in investment. Past results are not indicative of future returns. BuilderProject and all individuals affiliated with this site assume no responsibilities for your investment results. The indicators, strategies, columns, articles and all other features are for educational purposes only and should not be construed as investment advice. Any individual or business who chooses to act upon the content provided on this website or on information contained in any of our products or services, should always take independent specialist advice before making any decision to invest.
                        </p>
                        <p>
                            <strong>Earnings Disclaimer:</strong> The earnings and success stories mentioned on this site are the results of hard work, dedication, and strategic planning. They represent exceptional, not typical results. These outcomes are not guaranteed for every individual or business that applies our strategies. Your results may vary significantly and are dependent on many factors, including but not limited to your background, experience, work ethic, client base, and market forces beyond anyone's control. We do not purport this as a "get rich quick" scheme. Achieving success in any business requires significant effort, skill development, and consistent application of best practices. It is important to approach this program with a commitment to learn and grow, understanding that there is no guarantee of specific financial results. By choosing to engage with our content and programs, you acknowledge and agree that any business endeavour involves risk and requires considerable effort and action. We make no promises regarding your ability to earn money or achieve similar results. Your reliance on any information on this site is strictly at your own risk.
                        </p>
                        <p>
                            <strong>Testimonials Disclaimer:</strong> Any testimonials provided on our website, our services or products are of real-life individuals and businesses and their own personal and individual experiences. These must not be taken as "typical" results and will not be specific to your particular circumstances or actions you choose to take following receipt of the services and products.
                        </p>
                        <p className="pt-4 font-bold">
                            BuildSurge Collectives LLC DBA BuilderProject, 50 Brattleboro Dr Greensburg Pa 15601
                        </p>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default AdvertisingLanding;
