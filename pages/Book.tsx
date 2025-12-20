import React from 'react';
import { CheckCircle, Download, House, Warehouse, Landmark } from 'lucide-react';

const Book: React.FC = () => {
  return (
    <div className="pt-32 pb-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="text-purple-600 font-bold tracking-wider text-sm uppercase mb-4 block">Free Resource</span>
            <h1 className="text-5xl font-serif font-bold text-slate-900 mb-6">
              The Secrets of Home Builder Marketing
            </h1>
            <p className="text-xl text-slate-600 mb-8 leading-relaxed">
              Discover the exact strategies top custom home builders use to generate consistent, high-value leads without relying on referrals alone.
            </p>

            <div className="space-y-4 mb-10">
              {[
                "How to position your brand as the premium choice",
                "The 5 website mistakes costing you six-figure projects",
                "SEO secrets for dominating local search results",
                "Templates for high-converting client emails"
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3">
                  <CheckCircle className="text-green-500 mt-1 flex-shrink-0" size={20} />
                  <span className="text-slate-800 font-medium">{item}</span>
                </div>
              ))}
            </div>

            <form className="bg-slate-50 p-6 rounded-2xl border border-slate-100" onSubmit={(e) => e.preventDefault()}>
              <h3 className="font-bold text-slate-900 mb-4">Get your free copy</h3>
              <div className="flex flex-col sm:flex-row gap-4">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 rounded-lg border border-slate-300 focus:outline-none focus:border-purple-500"
                />
                <button className="bg-slate-900 text-white px-6 py-3 rounded-lg font-bold hover:bg-purple-700 transition-colors flex items-center justify-center gap-2">
                  <Download size={18} /> Download
                </button>
              </div>
              <p className="text-xs text-slate-400 mt-3">We respect your privacy. Unsubscribe at any time.</p>
            </form>
          </div>

          <div className="relative flex justify-center">
            {/* Book Representation */}
            <div className="relative w-[340px] shadow-2xl transform rotate-y-12 transition-transform hover:rotate-0 duration-500">
              <img
                src="/book-cover.jpg"
                alt="The Secrets of Home Builder Marketing"
                className="w-full h-auto rounded-r-xl rounded-l-sm"
              />
              {/* Spine Effect Overlay */}
              <div className="absolute left-0 top-0 bottom-0 w-2 bg-gradient-to-r from-black/20 to-transparent rounded-l-sm pointer-events-none"></div>
            </div>

            {/* Decor */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-gradient-to-tr from-purple-200 to-pink-200 rounded-full mix-blend-multiply filter blur-[60px] opacity-50 -z-10"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Book;