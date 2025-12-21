import React from 'react';
import { Link } from 'react-router-dom';
import { Monitor, TrendingUp, Video, Layers, ArrowRight, Play, CheckCircle2 } from 'lucide-react';

const Home: React.FC = () => {
  return (
    <div className="bg-white font-sans antialiased text-slate-900">

      {/* 1. HERO SECTION: Targeting "Custom Home Builder Marketing" */}
      <section className="pt-32 pb-24 lg:pt-48 lg:pb-32 relative overflow-hidden bg-[#0F172A] text-white">
        {/* Background Effects */}
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-purple-900/20 rounded-full blur-[120px] pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-blue-900/10 rounded-full blur-[100px] pointer-events-none"></div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-5xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-slate-800/50 border border-slate-700 px-4 py-2 rounded-full mb-8">
              <span className="flex h-2 w-2 rounded-full bg-green-500 animate-pulse"></span>
              <span className="text-sm font-medium text-slate-300 tracking-wide uppercase">For Custom Home Builders & Remodelers</span>
            </div>

            <h1 className="text-5xl lg:text-7xl font-serif font-bold leading-[1.1] mb-8">
              Turn Your Recent Projects Into <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
                A Predictable Revenue Engine.
              </span>
            </h1>

            <p className="text-xl text-slate-300 mb-12 max-w-3xl mx-auto leading-relaxed">
              We are the specialized marketing agency for construction companies. We turn your finished homes into digital assets that attract high-net-worth clients on autopilot.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <Link
                to="/contact"
                className="w-full sm:w-auto px-10 py-5 rounded-full bg-white text-slate-900 font-bold text-lg hover:bg-purple-50 transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-105"
              >
                Book Your Strategy Session
              </Link>
              <a
                href="#ecosystem"
                className="w-full sm:w-auto px-10 py-5 rounded-full border border-slate-600 text-white font-bold text-lg hover:bg-slate-800 transition-all duration-300"
              >
                How It Works
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 2. THE PROBLEM: "Feast or Famine" */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-purple-100 to-pink-100 rounded-[2rem] transform -rotate-2"></div>
              <img
                src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=1600&auto=format&fit=crop"
                alt="Construction Site Chaos"
                className="relative rounded-[2rem] shadow-2xl w-full object-cover h-[500px]"
              />
              <div className="absolute bottom-8 left-8 bg-white p-6 rounded-xl shadow-xl max-w-xs">
                <p className="font-bold text-slate-900 mb-2">The Reality:</p>
                <p className="text-slate-600 text-sm">"We're busy now, but I have no idea where our work is coming from in 6 months."</p>
              </div>
            </div>
            <div>
              <h2 className="text-4xl font-serif font-bold text-slate-900 mb-6">Stop Relying on "Word of Mouth" to Feed Your Family.</h2>
              <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                Referrals are great, but they are unpredictable. You can't scale a multi-million dollar custom home business on hope.
                <br /><br />
                The most successful builders don't just build homes; they build <strong>systems</strong>. Systems that generate leads, qualify prospects, and nurture relationships while they are out on the job site.
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="text-purple-600 shrink-0 mt-1" />
                  <p className="text-slate-700"><strong>Eliminate the "Slow Season":</strong> A consistent pipeline of leads all year round.</p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="text-purple-600 shrink-0 mt-1" />
                  <p className="text-slate-700"><strong>Attract Better Clients:</strong> Stop bidding against cheap competitors. Position yourself as the luxury authority.</p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="text-purple-600 shrink-0 mt-1" />
                  <p className="text-slate-700"><strong>Automate Follow-Up:</strong> Use AI to chase leads so you don't have to.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. THE ECOSYSTEM (Navigation to Service Pages) */}
      <section id="ecosystem" className="py-24 bg-slate-50">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="text-center mb-16">
            <span className="text-purple-600 font-bold tracking-wider text-sm uppercase mb-4 block">The BuilderProject Ecosystem</span>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-slate-900 mb-6">A Complete Growth Engine</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              We don't sell "services." We install a 4-part machine into your business that handles everything from the first click to the signed contract.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">

            {/* 1. Website Design */}
            <Link to="/services/website-design" className="group bg-white p-8 rounded-3xl shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-100 flex flex-col h-full">
              <div className="w-14 h-14 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Monitor size={28} />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors">1. The Foundation (Website)</h3>
              <p className="text-slate-600 mb-6 flex-grow">
                Your digital showroom. We build high-speed, SEO-architected websites that showcase your portfolio and convince visitors you are the premium choice.
              </p>
              <div className="flex items-center text-blue-600 font-bold">
                Explore Website Design <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>

            {/* 2. Paid Advertising */}
            <Link to="/services/paid-advertising" className="group bg-white p-8 rounded-3xl shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-100 flex flex-col h-full">
              <div className="w-14 h-14 bg-green-50 text-green-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <TrendingUp size={28} />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-3 group-hover:text-green-600 transition-colors">2. The Traffic (Paid Ads)</h3>
              <p className="text-slate-600 mb-6 flex-grow">
                Predictable lead generation. We use Google & Meta ads to target landowners and high-income families, filtering them through our proprietary "Velvet Rope" funnel.
              </p>
              <div className="flex items-center text-green-600 font-bold">
                View Ad Strategy <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>

            {/* 3. Content Marketing */}
            <Link to="/services/content-marketing" className="group bg-white p-8 rounded-3xl shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-100 flex flex-col h-full">
              <div className="w-14 h-14 bg-red-50 text-red-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Video size={28} />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-3 group-hover:text-red-600 transition-colors">3. The Trust (Content)</h3>
              <p className="text-slate-600 mb-6 flex-grow">
                Automated authority. We turn 1 hour of your time into a month of YouTube videos, blogs, and social clips that educate leads until they trust you implicitly.
              </p>
              <div className="flex items-center text-red-600 font-bold">
                See The Content System <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>

            {/* 4. Programs */}
            <Link to="/services" className="group bg-white p-8 rounded-3xl shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-100 flex flex-col h-full">
              <div className="w-14 h-14 bg-purple-50 text-purple-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Layers size={28} />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-3 group-hover:text-purple-600 transition-colors">4. The Blueprint (Programs)</h3>
              <p className="text-slate-600 mb-6 flex-grow">
                Choose your growth speed. Whether you need a simple website refresh or a full-scale dominant partner, we have a clear tier for every stage of business.
              </p>
              <div className="flex items-center text-purple-600 font-bold">
                Compare Programs <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>

          </div>
        </div>
      </section>

      {/* 4. SOCIAL PROOF / STATS */}
      <section className="py-24 bg-slate-900 text-white border-y border-slate-800">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-12 text-center divide-y md:divide-y-0 md:divide-x divide-slate-800">
            <div className="p-4">
              <div className="text-4xl font-bold text-purple-400 mb-2">150+</div>
              <div className="text-slate-400 text-sm uppercase tracking-wider">Builders Scaled</div>
            </div>
            <div className="p-4">
              <div className="text-4xl font-bold text-blue-400 mb-2">$50M+</div>
              <div className="text-slate-400 text-sm uppercase tracking-wider">Revenue Generated</div>
            </div>
            <div className="p-4">
              <div className="text-4xl font-bold text-green-400 mb-2">300%</div>
              <div className="text-slate-400 text-sm uppercase tracking-wider">Average ROI</div>
            </div>
            <div className="p-4">
              <div className="text-4xl font-bold text-pink-400 mb-2">#1</div>
              <div className="text-slate-400 text-sm uppercase tracking-wider">Agency for Builders</div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. CTA */}
      <section className="py-32 relative overflow-hidden">
        {/* Background Blur */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purple-100 rounded-full blur-[100px] -z-10"></div>

        <div className="container mx-auto px-6 max-w-4xl text-center">
          <h2 className="text-5xl font-serif font-bold text-slate-900 mb-8">
            Your Market is Waiting. <br />
            Will You Claim It?
          </h2>
          <p className="text-xl text-slate-600 mb-12 leading-relaxed">
            There are families in your area looking for a custom home builder right now.
            Stop letting your competitors take the projects that should be yours.
          </p>
          <Link to="/contact" className="inline-flex items-center bg-slate-900 text-white px-12 py-5 rounded-full font-bold text-lg hover:bg-purple-600 transition-all duration-300 shadow-xl hover:shadow-2xl hover:-translate-y-1">
            Book Your Free Strategy Session <ArrowRight className="ml-2" />
          </Link>
          <p className="mt-8 text-slate-500 text-sm">
            Strict exclusivity: We only partner with 1 builder per territory to avoid conflict of interest.
          </p>
        </div>
      </section>

    </div>
  );
};

export default Home;