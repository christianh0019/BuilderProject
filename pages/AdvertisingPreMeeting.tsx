import React, { useRef } from 'react';
import { CheckCircle2, Volume2, VolumeX } from 'lucide-react';
import { caseStudies } from '../data/caseStudies';
import SimpleHeader from '../components/SimpleHeader';
import LogoCarousel from '../components/LogoCarousel';

const AdvertisingPreMeeting: React.FC = () => {
    const videoRef = useRef<HTMLVideoElement>(null);
    const resultsRef = useRef<HTMLDivElement>(null);
    const faqRef = useRef<HTMLDivElement>(null);
    const [isMuted, setIsMuted] = React.useState(true);

    const scrollToResults = () => {
        resultsRef.current?.scrollIntoView({ behavior: 'smooth' });
    };

    const scrollToFAQ = () => {
        faqRef.current?.scrollIntoView({ behavior: 'smooth' });
    };

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
                                <span className="text-sm font-bold text-purple-900">You're Booked!</span>
                            </div>

                            <h1 className="text-[28px] md:text-5xl font-serif font-bold text-slate-900 mb-6 leading-tight">
                                Please Watch This Short Video To See How You Could Land <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-700 to-pink-600">3-5 More Projects This Year.</span>
                            </h1>
                            <p className="block text-lg text-slate-600 max-w-2xl mx-auto">
                                We've also put some of our clients results and the answers to our most asked questions.
                            </p>

                            {/* Autoplay Video Section */}
                            <div className="mt-8 mb-8 relative mx-auto max-w-sm md:max-w-md group cursor-pointer" onClick={handleVideoClick}>
                                <div className="rounded-2xl overflow-hidden shadow-2xl border-4 border-white transform transition-transform duration-300 hover:scale-105">
                                    <video
                                        ref={videoRef}
                                        src="https://storage.googleapis.com/msgsndr/HllUVzV8V6VFH4nUuq4W/media/6995e10363fc7c5c2726adaa.mp4"
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

                            {/* Navigation Buttons */}
                            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8 mb-8">
                                <button
                                    onClick={scrollToResults}
                                    className="w-full sm:w-auto px-8 py-4 text-lg font-bold text-white transition-all duration-200 bg-slate-900 rounded-full hover:bg-slate-800 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-slate-900 focus:ring-offset-2"
                                >
                                    See Results
                                </button>
                                <button
                                    onClick={scrollToFAQ}
                                    className="w-full sm:w-auto px-8 py-4 text-lg font-bold text-purple-700 transition-all duration-200 bg-purple-50 rounded-full hover:bg-purple-100 hover:shadow-lg border border-purple-200 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2"
                                >
                                    Get Answers
                                </button>
                            </div>

                            {/* Logo Carousel */}
                            <div className="mt-4 mb-8">
                                <LogoCarousel />
                            </div>
                        </div>

                        {/* Persuasion / Value Section - HIDDEN per user request 2026-01-21 */}
                        {/* Expanded Persuasion Section */}
                        <div className="mb-24 animate-fadeIn space-y-24 hidden">
                            {/* ... (Hidden content omitted for brevity, logic remains same) ... */}
                        </div>

                        {/* Testimonials Section */}
                        <div ref={resultsRef} className="border-t border-slate-200 pt-16 scroll-mt-24">
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


                        {/* FAQ Section */}
                        <div ref={faqRef} className="py-24 border-t border-slate-200 scroll-mt-24">
                            <div className="text-center mb-16">
                                <span className="text-purple-600 font-bold tracking-wider text-sm uppercase mb-3 block">Common Questions</span>
                                <h2 className="text-3xl md:text-4xl font-serif font-bold text-slate-900">
                                    Everything You Need To Know
                                </h2>
                            </div>

                            <div className="max-w-3xl mx-auto space-y-4">
                                {[
                                    {
                                        q: "Who is this program actually for?",
                                        a: `This is specifically designed for established custom home builders who are already doing roughly $2M–$7M per year and want to scale to the next level.

Most of the builders we work with already have a strong reputation and get referrals, but they want a more predictable pipeline of projects so they can grow without constantly worrying about where the next job will come from.

If you're just getting started or primarily doing small remodels, this likely won't be the right fit.`
                                    },
                                    {
                                        q: "What makes this different from other marketing companies?",
                                        a: `Most marketing companies focus on generating leads.

We focus on installing a complete client acquisition system inside your business.

That includes:

• Generating qualified leads
• Filtering out tire-kickers before they reach you
• Tracking every opportunity in a structured pipeline
• Implementing follow-ups over the 6–12 month sales cycle
• Helping you build sales processes and operations as you scale

Instead of just giving you contacts and saying “good luck,” we build the entire system that consistently produces projects.`
                                    },
                                    {
                                        q: "What kind of results should I realistically expect?",
                                        a: `Every market is different, but most builders we work with install the system to generate 5–10 additional custom home projects per year once everything is fully running.

Some builders see results faster, but the real goal is predictability, not random spikes.

When your pipeline becomes consistent, it becomes much easier to hire, grow your team, and scale the company.`
                                    },
                                    {
                                        q: "Will I start getting leads immediately?",
                                        a: `There is usually a ramp-up period while the system is installed and optimized.

Custom home sales cycles are typically 6–12 months, so while leads can start coming in relatively quickly, the focus is on building a long-term pipeline of serious projects rather than quick, low-quality leads.

The builders who benefit the most are the ones thinking about next year’s projects today.`
                                    },
                                    {
                                        q: "How do you make sure the leads are actually qualified?",
                                        a: `Every lead goes through a qualification process before they ever reach you.

We capture key details like:

• Budget
• Timeline
• Location
• Land status

Only leads who meet your criteria are allowed to book a conversation with you. That way you're spending time with serious homeowners, not people who want a $1.5M home for $300k.`
                                    },
                                    {
                                        q: "Will I need to manage all of this myself?",
                                        a: `No.

Our team installs and manages the system with you.

We also meet weekly to review lead quality, pipeline health, and performance so we can continuously improve the system as your business grows.

The goal is not to give you more work. The goal is to remove the burden of marketing and pipeline management so you can focus on building.`
                                    },
                                    {
                                        q: "What happens during the call?",
                                        a: `The call is a strategy session, not a sales pitch.

We'll look at:

• Your current pipeline
• How you're currently getting projects
• Your target project types
• Your growth goals

Then we'll map out exactly what the system would look like inside your business.

If it makes sense to move forward, we can discuss the next steps. If it doesn't, we'll point you toward some free resources that can still help you.`
                                    },
                                    {
                                        q: "Do you work with builders in any market?",
                                        a: `Yes.

We've worked with builders across many different markets. The specific strategy will change based on your location, price point, and target client, but the system itself works in almost every market.`
                                    },
                                    {
                                        q: "What happens if we determine it's not a good fit?",
                                        a: `No problem at all.

If we don't think we can get strong results for you, we'll let you know and direct you to some of our free training resources that show you how to build parts of this system yourself.

We only work with builders where we believe we can create meaningful growth.`
                                    }
                                ].map((item, i) => (
                                    <div key={i} className="bg-white border border-slate-200 rounded-2xl overflow-hidden hover:border-purple-200 transition-colors">
                                        <details className="group">
                                            <summary className="flex justify-between items-center p-6 cursor-pointer list-none">
                                                <h3 className="text-lg font-bold text-slate-900 pr-8">{item.q}</h3>
                                                <span className="text-purple-600 transition-transform group-open:rotate-180">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6" /></svg>
                                                </span>
                                            </summary>
                                            <div className="px-6 pb-6 text-slate-600 leading-relaxed whitespace-pre-line">
                                                {item.a}
                                            </div>
                                        </details>
                                    </div>
                                ))}
                            </div>
                        </div>

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

export default AdvertisingPreMeeting;
