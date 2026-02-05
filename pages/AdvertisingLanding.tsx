import React, { useRef } from 'react';
import SurveyForm from '../components/SurveyForm';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { caseStudies } from '../data/caseStudies';
import SimpleHeader from '../components/SimpleHeader';

const AdvertisingLanding: React.FC = () => {
    const surveyRef = useRef<HTMLDivElement>(null);

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
                Book Your Free Strategy Session
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

                            <h1 className="text-4xl md:text-5xl font-serif font-bold text-slate-900 mb-6 leading-tight">
                                Stop Relying On Referrals And Build A Predictable Pipeline That Takes You From <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-700 to-pink-600">$3–5M To $15M+</span>
                            </h1>
                            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                                So that you can turn your owner-run operation into a real company that's built on systems, not randomness.
                            </p>
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

                        {/* FAQ Section */}
                        <div className="py-24 border-t border-slate-200">
                            <div className="text-center mb-16">
                                <span className="text-purple-600 font-bold tracking-wider text-sm uppercase mb-3 block">Common Questions</span>
                                <h2 className="text-3xl md:text-4xl font-serif font-bold text-slate-900">
                                    Everything You Need To Know
                                </h2>
                            </div>

                            <div className="max-w-3xl mx-auto space-y-4">
                                {[
                                    {
                                        q: "How long until I see results?",
                                        a: `Look, I'm going to be straight with you because I don't want to waste your time or mine. It takes 6 months or longer to land your first signed contract through this system. That's just the reality of custom home builds. The sales cycle is long. People don't decide to build a $1.5 million house overnight.

But here's what most agencies won't tell you - we build in ways to monetize your sales process early so you're not just sitting around waiting. We help you implement paid concept design agreements and preconstruction packages. That means instead of doing 6 months of free consulting and sending ballpark numbers hoping they sign, you're getting paid $5,000, $10,000, sometimes $25,000 just to develop their plans and get them through preconstruction. That revenue starts flowing within the first few months.

But the real money? That shows up 6 to 12 months down the line when everything compounds. Your website is ranking on Google. Your social media has consistent content going out. You have retargeting ads following up with every lead who visited your site. Your CRM is nurturing dozens of prospects through automated follow-up. All of that builds momentum. So by month 9, month 10, you're not just landing one project - you're managing a pipeline worth $50 million, $100 million. That's when builders go from doing $5 million a year to $15 million a year.

If you want instant results or you're not willing to invest the time to build something real, this isn't for you. But if you're serious about creating a predictable system that controls your revenue instead of hoping referrals come in, this is how you do it.`
                                    },
                                    {
                                        q: "I've tried marketing before and it didn't work. Why would this be different?",
                                        a: `Because running a few Facebook ads or building a pretty website isn't marketing. That's just checking boxes. Real marketing is a complete system that works together.

Think about what probably happened before. You hired someone to run ads - they sent traffic to your website, but your website didn't convert anyone. Or maybe you paid for a new website, but nobody can find it on Google and you have no way to drive traffic to it. Or you got leads, but nobody followed up with them consistently, so they disappeared.

That's like trying to build a house with just a foundation and no walls. Or walls with no roof. It doesn't work because you're missing critical pieces.

Here's what actually works: You need a website that converts visitors into leads AND ranks on Google so people can find you. You need paid ads that target the right people and speak to them in a way that makes them want to learn more. You need content going out on social media that educates prospects before they ever call you. You need a CRM that captures every lead and automatically follows up so nothing falls through the cracks over the 6 to 12 month sales cycle. You need pricing structures that monetize your process early so you're not doing free work.

All of that has to work together as one system. That's what we build. Not just ads. Not just a website. The entire system from the first click to the signed contract. That's why it works when the other stuff didn't.`
                                    },
                                    {
                                        q: "I already have a website. Do I need a new one?",
                                        a: `Here's the honest answer - you probably already know deep down whether your website is working or not.

Pull up your contact form submissions from the last 6 months. How many did you get? And I'm not talking about subcontractors begging for work or spam. I'm talking about actual qualified homeowners who want to build.

If your website is getting 10, 20, 30 real leads coming through every month, then no, you don't need a new one. We'll just optimize what you have - make sure it's ranking on Google, fine-tune the messaging, improve the user experience.

But if you're being honest with yourself and you know your website isn't bringing in leads, then yeah, you need a new one. A website that works is something you know when you have it. Your phone rings. Your inbox fills up with real prospects. That's a website that converts.

Most builders we work with have a website that looks decent but does absolutely nothing. It just sits there. Nobody finds it on Google. And when someone does land on it, there's nothing that builds trust or moves them forward. It's basically an online business card.

We build websites that actually generate revenue. They show up first when people search for builders in your area. They explain your process clearly. They showcase your work in a way that builds trust. And they have clear paths for qualified prospects to reach out.

After we audit your current setup, we'll tell you straight up what needs to happen. If it can be fixed, we'll fix it. If it needs to be rebuilt, we'll rebuild it. Either way, you'll know the truth.`
                                    },
                                    {
                                        q: "What makes you different from other marketing agencies?",
                                        a: `Two things: We only work with residential builders, and we've spent 4 years perfecting a system specifically for your industry.

Most marketing agencies work with everyone. They'll take on a dentist, a lawyer, an e-commerce store, and a builder all at the same time. They use the same generic templates, the same cookie-cutter strategies, and wonder why it doesn't work for construction.

We're different because we know your prospects inside and out. We know they're not making a buying decision in 2 days like someone buying a pair of shoes online. We know they're going to take 6 to 12 months researching builders, figuring out their budget, securing financing, finding land. We know they need to be educated on the building process before they ever book a call with you. We know the questions they ask, the objections they have, what makes them choose one builder over another.

We've spent almost 4 years and close to a million dollars testing what actually works for custom builders specifically. What ad messaging converts. What website layouts generate the most leads. What follow-up sequences keep prospects warm through a long sales cycle. What pricing structures help you monetize early. What content educates prospects and positions you as the expert.

We've generated over 100 million in revenue for our clients because we've perfected the system based on real results from real builders. Every strategy we implement has been tested dozens of times. We know what works because we've already done it for over 100 builders.

That's the difference. We're not figuring this out as we go. We already know exactly what works for your industry, and we're just implementing that proven system for your business.`
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
