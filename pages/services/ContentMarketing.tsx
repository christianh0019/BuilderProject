import React from 'react';
import { Link } from 'react-router-dom';
import { Video, Mic, PenTool, Share2, ArrowRight, Clock, Battery, BarChart3, TrendingUp } from 'lucide-react';

const ContentMarketing: React.FC = () => {
    return (
        <div className="pt-20 font-sans antialiased text-slate-900 bg-white">
            {/* Hero Section */}
            <section className="relative bg-[#0F172A] text-white pt-24 pb-32 overflow-hidden">
                <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-purple-900/20 rounded-full blur-[120px] pointer-events-none"></div>
                <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-blue-900/10 rounded-full blur-[100px] pointer-events-none"></div>

                <div className="container mx-auto px-6 relative z-10 text-center">
                    <span className="inline-block py-1 px-3 rounded-full bg-purple-900/50 border border-purple-500 text-purple-300 text-xs font-bold tracking-wider uppercase mb-6">
                        Automated Authority System
                    </span>
                    <h1 className="text-5xl md:text-7xl font-serif font-bold mb-8 leading-tight max-w-5xl mx-auto">
                        Your Referrals Are Great. <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">But They're Unpredictable.</span>
                    </h1>
                    <p className="text-xl text-slate-300 mb-12 max-w-3xl mx-auto leading-relaxed">
                        You can't scale a business on hope. We build a content system that duplicates the trust of a referral—automatically, every single month.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link to="/contact" className="bg-white text-slate-900 px-8 py-4 rounded-full font-bold hover:bg-purple-50 transition-colors">
                            Build Your System
                        </Link>
                        <a href="#problem" className="border border-slate-600 text-white px-8 py-4 rounded-full font-bold hover:bg-slate-800 transition-colors">
                            The Science of Trust
                        </a>
                    </div>
                </div>
            </section>

            {/* The Referral Trap (Problem) */}
            <section id="problem" className="py-24 bg-white">
                <div className="container mx-auto px-6 max-w-4xl text-center">
                    <h2 className="text-3xl md:text-4xl font-serif font-bold text-slate-900 mb-8">The "Feast or Famine" Cycle</h2>
                    <p className="text-lg text-slate-600 mb-16 leading-relaxed">
                        If 90% of your business comes from referrals, you have a great reputation—but a dangerous business model. You can't turn referrals "on" when the pipeline gets thin.
                        <br /><br />
                        So you try ads. You hire an agency. And what happens? You get tire kickers, price shoppers, and wasted time.
                        <br /><br />
                        <strong>Why do referrals work but ads fail? Simple: Trust.</strong>
                    </p>

                    <div className="grid md:grid-cols-2 gap-8 text-left">
                        <div className="bg-green-50 p-8 rounded-2xl border border-green-100">
                            <h3 className="text-xl font-bold text-green-800 mb-4 flex items-center gap-2">
                                <CheckCircleIcon className="w-5 h-5" /> The Referral Lead
                            </h3>
                            <p className="text-green-700">
                                Starts with 100% Trust.<br />
                                Doesn't compare you to 15 others.<br />
                                Ready to hire you specifically.
                            </p>
                        </div>
                        <div className="bg-red-50 p-8 rounded-2xl border border-red-100">
                            <h3 className="text-xl font-bold text-red-800 mb-4 flex items-center gap-2">
                                <XCircleIcon className="w-5 h-5" /> The Ad Lead
                            </h3>
                            <p className="text-red-700">
                                Starts with 0% Trust.<br />
                                Compares you on price alone.<br />
                                Needs "convincing" to even talk.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* The 7-11-4 Rule (The Science) */}
            <section className="py-24 bg-slate-900 text-white">
                <div className="container mx-auto px-6">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <div>
                            <span className="text-purple-400 font-bold tracking-wider text-sm uppercase mb-4 block">The Solution</span>
                            <h2 className="text-4xl font-serif font-bold mb-6">The Google "7-11-4" Rule</h2>
                            <p className="text-xl text-slate-300 mb-8 leading-relaxed">
                                Google found that before someone makes a major purchase decision (like a custom home), they need three things:
                            </p>
                            <ul className="space-y-6">
                                <li className="flex items-start gap-4">
                                    <div className="w-12 h-12 rounded-xl bg-purple-500/20 text-purple-400 flex items-center justify-center flex-shrink-0 font-bold text-xl border border-purple-500/30">7</div>
                                    <div>
                                        <h4 className="text-lg font-bold">Hours of Content</h4>
                                        <p className="text-slate-400 text-sm">They need to binge-watch you to feel like they know you.</p>
                                    </div>
                                </li>
                                <li className="flex items-start gap-4">
                                    <div className="w-12 h-12 rounded-xl bg-blue-500/20 text-blue-400 flex items-center justify-center flex-shrink-0 font-bold text-xl border border-blue-500/30">11</div>
                                    <div>
                                        <h4 className="text-lg font-bold">Touch Points</h4>
                                        <p className="text-slate-400 text-sm">Emails, videos, blogs, social posts—everywhere they look.</p>
                                    </div>
                                </li>
                                <li className="flex items-start gap-4">
                                    <div className="w-12 h-12 rounded-xl bg-pink-500/20 text-pink-400 flex items-center justify-center flex-shrink-0 font-bold text-xl border border-pink-500/30">4</div>
                                    <div>
                                        <h4 className="text-lg font-bold">Separate Interactions</h4>
                                        <p className="text-slate-400 text-sm">They need to see you in different places to verify your authority.</p>
                                    </div>
                                </li>
                            </ul>
                        </div>
                        <div className="relative">
                            <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 blur-[100px] opacity-20"></div>
                            <div className="bg-slate-800 p-8 rounded-2xl border border-slate-700 relative z-10 shadow-2xl">
                                <h3 className="text-2xl font-bold mb-6 text-center">The Result?</h3>
                                <div className="space-y-4">
                                    <div className="bg-slate-900/50 p-4 rounded-lg border-l-4 border-green-500">
                                        <p className="text-sm text-slate-300 italic">"I've watched all your videos. I feel like I already know you. When can we start?"</p>
                                    </div>
                                    <div className="bg-slate-900/50 p-4 rounded-lg border-l-4 border-green-500">
                                        <p className="text-sm text-slate-300 italic">"I'm not talking to anyone else. You're the expert."</p>
                                    </div>
                                    <div className="mt-8 text-center">
                                        <p className="text-lg font-bold text-white">
                                            They stop shopping price.<br />
                                            They start buying trust.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Done For You System */}
            <section className="py-24 bg-slate-50">
                <div className="container mx-auto px-6 text-center max-w-4xl">
                    <h2 className="text-3xl font-serif font-bold text-slate-900 mb-6">"But I Don't Have Time To Be A YouTuber"</h2>
                    <p className="text-lg text-slate-600 mb-16">
                        We know. You're building houses, not editing TikToks. That's why we built the **Automated Authority System**.
                    </p>

                    <div className="relative bg-white p-12 rounded-3xl shadow-xl border border-slate-100 overflow-hidden">
                        <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-purple-500 to-pink-500"></div>
                        <h3 className="text-2xl font-bold text-slate-900 mb-8">What You Do: <span className="text-purple-600">1 Hour Per Month</span></h3>

                        <div className="flex flex-col md:flex-row items-center justify-center gap-8 mb-12">
                            <div className="flex-1 text-center">
                                <div className="w-16 h-16 bg-purple-100 text-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <Mic size={24} />
                                </div>
                                <h4 className="font-bold mb-2">Sit & Talk</h4>
                                <p className="text-sm text-slate-500">Answer the questions you get asked every day for 60 minutes.</p>
                            </div>
                            <div className="hidden md:block text-slate-300">
                                <ArrowRight size={24} />
                            </div>
                            <div className="flex-1 text-center">
                                <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <CheckCircleIcon className="w-6 h-6" />
                                </div>
                                <h4 className="font-bold mb-2">That's It.</h4>
                                <p className="text-sm text-slate-500">You go back to building. We handle the rest.</p>
                            </div>
                        </div>

                        <div className="bg-slate-50 rounded-xl p-8 border border-slate-200 text-left">
                            <h4 className="font-bold text-center mb-6 text-slate-900">What We Deliver (Every Month):</h4>
                            <div className="grid sm:grid-cols-2 gap-6">
                                <div className="flex items-start gap-4">
                                    <Video className="text-red-500 w-6 h-6 flex-shrink-0" />
                                    <div>
                                        <strong className="block text-slate-900">4x YouTube Videos</strong>
                                        <span className="text-sm text-slate-500">Professionally edited, optimized for search.</span>
                                    </div>
                                </div>
                                <div className="flex items-start gap-4">
                                    <TrendingUp className="text-slate-900 w-6 h-6 flex-shrink-0" />
                                    <div>
                                        <strong className="block text-slate-900">28x Short Clips</strong>
                                        <span className="text-sm text-slate-500">For Instagram, TikTok, Facebook, LinkedIn.</span>
                                    </div>
                                </div>
                                <div className="flex items-start gap-4">
                                    <PenTool className="text-blue-500 w-6 h-6 flex-shrink-0" />
                                    <div>
                                        <strong className="block text-slate-900">4x SEO Blog Posts</strong>
                                        <span className="text-sm text-slate-500">Written from your video transcripts.</span>
                                    </div>
                                </div>
                                <div className="flex items-start gap-4">
                                    <Share2 className="text-purple-500 w-6 h-6 flex-shrink-0" />
                                    <div>
                                        <strong className="block text-slate-900">Email Newsletters</strong>
                                        <span className="text-sm text-slate-500">Sent to your list to nurture old leads.</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-24 bg-slate-900 text-white text-center">
                <div className="container mx-auto px-6 max-w-4xl">
                    <h2 className="text-4xl font-serif font-bold mb-6">Stop Hoping for Referrals. <br />Start Predicting Them.</h2>
                    <p className="text-xl text-slate-400 mb-10">
                        Let's map out your 30-day content plan. We'll show you exactly how this works for your specific market.
                    </p>
                    <Link to="/contact" className="inline-flex items-center bg-purple-600 hover:bg-purple-700 text-white px-8 py-4 rounded-full font-bold transition-all hover:scale-105 shadow-xl hover:shadow-2xl shadow-purple-900/20">
                        Book Your Free Strategy Session <ArrowRight className="ml-2" />
                    </Link>
                    <p className="mt-6 text-sm text-slate-500">Only 5 spots available per month due to production capacity.</p>
                </div>
            </section>
        </div>
    );
};

/* Simple Icon Wrappers to avoid import errors if lucide-react names differ slightly */
const CheckCircleIcon = ({ className }: { className?: string }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
)

const XCircleIcon = ({ className }: { className?: string }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><circle cx="12" cy="12" r="10"></circle><line x1="15" y1="9" x2="9" y2="15"></line><line x1="9" y1="9" x2="15" y2="15"></line></svg>
)

export default ContentMarketing;
