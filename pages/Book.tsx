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
            <div className="relative w-[340px] h-[520px] bg-[#F5F5F0] rounded-r-2xl rounded-l-sm shadow-2xl transform rotate-y-12 transition-transform hover:rotate-0 duration-500">
               {/* Spine Effect */}
               <div className="absolute left-0 top-0 bottom-0 w-3 bg-gradient-to-r from-slate-300 to-[#F5F5F0] rounded-l-sm"></div>
               
               {/* Cover Content */}
               <div className="h-full w-full pl-6 pr-6 pt-12 pb-8 flex flex-col items-center text-center relative overflow-hidden">
                  
                  {/* Author */}
                  <div className="text-slate-800 font-sans font-medium tracking-widest text-sm mb-12">
                    CHRISTIAN HOSTETLER
                  </div>

                  {/* Title Section */}
                  <div className="flex flex-col items-center w-full mb-8">
                     <h3 className="text-slate-900 font-sans font-bold text-2xl tracking-tighter mb-1">
                       THE SECRETS OF
                     </h3>
                     <h2 className="text-5xl font-sans font-black tracking-tighter leading-none mb-1 text-transparent bg-clip-text bg-gradient-to-b from-[#d946ef] to-[#a21caf] drop-shadow-sm" style={{textShadow: '0px 2px 4px rgba(0,0,0,0.1)'}}>
                       HOME BUILDER
                     </h2>
                     <h2 className="text-5xl font-sans font-black tracking-tighter leading-none text-slate-900">
                       MARKETING
                     </h2>
                     <div className="mt-4 absolute top-[220px] right-[40px] transform rotate-12 text-slate-900">
                        <svg width="40" height="40" viewBox="0 0 24 24" fill="currentColor" className="text-slate-900">
                           <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" opacity="0.2"/>
                           <path d="M12 2a10 10 0 0 1 10 10 9.9 9.9 0 0 1-5 8.6L12 2z" opacity="0"/>
                           <path d="M4.5 12.5l5-5 4 3 6-5" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                     </div>
                  </div>

                  {/* Subtitle */}
                  <p className="text-slate-700 font-sans font-semibold text-sm leading-tight max-w-[240px] uppercase tracking-wide mb-auto">
                    How to become the go-to builder in your market and win more profitable jobs
                  </p>

                  {/* Footer House Silhouette */}
                  <div className="w-full h-16 bg-slate-950 flex items-end justify-between px-2 pb-0 absolute bottom-4 left-0 right-0 mx-auto w-[90%] border-b-4 border-slate-900">
                      <div className="flex items-end gap-1 text-white mx-auto">
                         <House size={32} strokeWidth={1.5} fill="currentColor" className="mb-1"/>
                         <Warehouse size={40} strokeWidth={1.5} fill="currentColor" className="mb-1"/>
                         <Landmark size={36} strokeWidth={1.5} fill="currentColor" className="mb-1"/>
                      </div>
                  </div>
                  {/* Black bar at bottom edge */}
                  <div className="absolute bottom-0 left-0 w-full h-4 bg-black"></div>
               </div>
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