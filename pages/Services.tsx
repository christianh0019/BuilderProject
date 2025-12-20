import React from 'react';
import { Link } from 'react-router-dom';
import { Check, Video, Smartphone, PenTool, Globe, Zap, ArrowRight, Layout, TrendingUp, Users } from 'lucide-react';

const Services: React.FC = () => {
  return (
    <div className="pt-20 font-sans text-slate-900">
      {/* Hero */}
      <section className="bg-slate-900 text-white py-24 px-6 text-center">
        <div className="max-w-3xl mx-auto">
          <span className="inline-block py-1 px-3 rounded-full bg-purple-900/50 border border-purple-500 text-purple-300 text-xs font-bold tracking-wider uppercase mb-6">
            Simple Pricing
          </span>
          <h1 className="text-4xl md:text-6xl font-serif font-bold mb-6">
            Choose Your Growth Engine
          </h1>
          <p className="text-xl text-slate-400 leading-relaxed">
            No hidden fees. No confusing retainers. Just clear packages designed to scale your construction business.
          </p>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-24 bg-slate-50 px-6">
        <div className="container mx-auto max-w-7xl">
          <div className="grid lg:grid-cols-3 gap-8 items-start">

            {/* Tier 1: Just The Build */}
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-slate-100 flex flex-col">
              <div className="p-8 bg-slate-100/50">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-white rounded-lg shadow-sm">
                    <Layout className="text-slate-700" size={24} />
                  </div>
                  <h3 className="font-bold text-xl text-slate-900">Just The Build</h3>
                </div>
                <p className="text-slate-500 text-sm mb-6 h-10">
                  For builders who just need to look professional. A premium asset you own forever.
                </p>
                <div className="flex items-baseline gap-1">
                  <span className="text-4xl font-bold text-slate-900">$5,000</span>
                  <span className="text-slate-500 font-medium">/ one-time</span>
                </div>
              </div>
              <div className="p-8 flex-1">
                <ul className="space-y-4 mb-8">
                  <li className="flex gap-3 text-slate-700 text-sm">
                    <Check className="text-green-500 flex-shrink-0" size={18} />
                    <span>Up to 20 Pages Custom Premium Website</span>
                  </li>
                  <li className="flex gap-3 text-slate-700 text-sm">
                    <Check className="text-green-500 flex-shrink-0" size={18} />
                    <span>Mobile Optimized Design</span>
                  </li>
                  <li className="flex gap-3 text-slate-700 text-sm">
                    <Check className="text-green-500 flex-shrink-0" size={18} />
                    <span>Enterprise Hosting Setup</span>
                  </li>
                  <li className="flex gap-3 text-slate-700 text-sm">
                    <Check className="text-green-500 flex-shrink-0" size={18} />
                    <span>Advanced On-Page SEO</span>
                  </li>
                </ul>
                <Link to="/contact" className="block w-full py-3 rounded-lg border-2 border-slate-900 text-slate-900 text-center font-bold hover:bg-slate-50 transition-colors">
                  Get Started
                </Link>
              </div>
            </div>

            {/* Tier 2: The Pipeline */}
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-purple-100 flex flex-col relative">
              <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-purple-700 to-pink-600"></div>
              <div className="p-8 bg-purple-50/30">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-purple-100 rounded-lg shadow-sm text-purple-600">
                    <TrendingUp size={24} />
                  </div>
                  <h3 className="font-bold text-xl text-slate-900">The Pipeline</h3>
                </div>
                <p className="text-slate-500 text-sm mb-6 h-10">
                  For builders who need leads now. We run the ads, you get the appointments.
                </p>
                <div className="flex items-baseline gap-1">
                  <span className="text-4xl font-bold text-slate-900">$2,000</span>
                  <span className="text-slate-500 font-medium">/ month</span>
                </div>
                <p className="text-xs text-slate-400 mt-2">+ ad spend budget</p>
              </div>
              <div className="p-8 flex-1">
                <ul className="space-y-4 mb-8">
                  <li className="flex gap-3 text-slate-700 text-sm">
                    <Check className="text-purple-500 flex-shrink-0" size={18} />
                    <span>Google & Meta Ads Management</span>
                  </li>
                  <li className="flex gap-3 text-slate-700 text-sm">
                    <Check className="text-purple-500 flex-shrink-0" size={18} />
                    <span>"Tire-Kicker" Filtering System</span>
                  </li>
                  <li className="flex gap-3 text-slate-700 text-sm">
                    <Check className="text-purple-500 flex-shrink-0" size={18} />
                    <span>Weekly Performance Reports</span>
                  </li>
                  <li className="flex gap-3 text-slate-700 text-sm">
                    <Check className="text-purple-500 flex-shrink-0" size={18} />
                    <span>CRM Integration</span>
                  </li>
                  <li className="flex gap-3 text-slate-700 text-sm">
                    <Check className="text-purple-500 flex-shrink-0" size={18} />
                    <span>Dedicated Project Manager</span>
                  </li>
                </ul>
                <Link to="/contact" className="block w-full py-3 rounded-lg bg-slate-900 text-white text-center font-bold hover:bg-gradient-to-r hover:from-purple-700 hover:to-pink-600 transition-all duration-300">
                  Start Generating Leads
                </Link>
              </div>
            </div>

            {/* Tier 3: The Partner Program */}
            <div className="bg-slate-900 rounded-2xl shadow-2xl overflow-hidden border border-purple-500/50 flex flex-col relative transform lg:-translate-y-4">
              <div className="absolute top-0 right-0 bg-gradient-to-l from-purple-600 to-pink-600 text-white text-xs font-bold px-4 py-1 rounded-bl-xl">
                MOST POPULAR
              </div>
              <div className="p-8 bg-slate-800/50">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-gradient-to-br from-purple-600 to-pink-600 rounded-lg shadow-lg text-white">
                    <Users size={24} />
                  </div>
                  <h3 className="font-bold text-xl text-white">The Partner Program</h3>
                </div>
                <p className="text-slate-400 text-sm mb-6 h-10">
                  Dominate your market. We become your entire marketing & media departments for a fraction of the cost.
                </p>
                <div className="flex items-baseline gap-1">
                  <span className="text-4xl font-bold text-white">$3,000</span>
                  <span className="text-purple-300 font-medium">/ month</span>
                </div>
              </div>
              <div className="p-8 flex-1">
                <div className="bg-purple-900/20 border border-purple-500/30 rounded-xl p-4 mb-6">
                  <div className="flex items-center gap-2 mb-2 text-purple-300 font-bold text-sm uppercase tracking-wider">
                    <Globe size={16} /> Website Included
                  </div>
                  <p className="text-xs text-slate-300">
                    The <span className="text-white font-bold">$5,000 Website Build</span> is included for $0 upfront when you join this program.
                  </p>
                </div>

                <div className="space-y-6 mb-8">
                  <div>
                    <h4 className="text-white font-bold text-sm mb-3 flex items-center gap-2">
                      <Zap size={16} className="text-yellow-400" /> Everything in Pipeline +
                    </h4>
                  </div>

                  <div>
                    <h4 className="text-white font-bold text-sm mb-3 border-b border-slate-700 pb-2">Done-For-You Content Engine</h4>
                    <ul className="space-y-3">
                      <li className="flex gap-3 text-slate-300 text-sm">
                        <Video className="text-purple-400 flex-shrink-0" size={18} />
                        <span><strong>4 Long-Form Videos</strong> (Project Tours/Edu)</span>
                      </li>
                      <li className="flex gap-3 text-slate-300 text-sm">
                        <Smartphone className="text-purple-400 flex-shrink-0" size={18} />
                        <span><strong>28 Short-Form Videos</strong> (Daily Reels/TikToks)</span>
                      </li>
                      <li className="flex gap-3 text-slate-300 text-sm">
                        <Users className="text-purple-400 flex-shrink-0" size={18} />
                        <span>Social Media Management (We Post For You)</span>
                      </li>
                      <li className="flex gap-3 text-slate-300 text-sm">
                        <PenTool className="text-purple-400 flex-shrink-0" size={18} />
                        <span>4 SEO Blogs & Newsletter Blasts</span>
                      </li>
                    </ul>
                  </div>
                </div>

                <Link to="/contact" className="block w-full py-4 rounded-lg bg-white text-slate-900 text-center font-bold hover:bg-slate-100 transition-colors shadow-lg shadow-purple-900/20">
                  Apply for Partnership
                </Link>
              </div>
            </div>

          </div>

          {/* FAQ / Trust */}
          <div className="mt-20 text-center max-w-2xl mx-auto">
            <p className="text-slate-500 italic">
              "Most agencies charge $5k/mo just for the management fee. We include the website, the video production, and the ad management for $3k. It's the best deal in the industry, period."
            </p>
          </div>

        </div>
      </section>
    </div>
  );
};

export default Services;