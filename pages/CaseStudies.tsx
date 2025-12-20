import React from 'react';
import { ArrowRight, TrendingUp } from 'lucide-react';
import { Link } from 'react-router-dom';
import { caseStudies } from '../data/caseStudies';

const CaseStudies: React.FC = () => {
  return (
    <div className="pt-32 pb-20 bg-slate-50">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center mb-20">
          <span className="text-purple-600 font-bold tracking-wider text-sm uppercase mb-4 block">Success Stories</span>
          <h1 className="text-5xl md:text-6xl font-serif font-bold text-slate-900 mb-6">
            Real Results for <br />Real Builders
          </h1>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            See how we help custom home builders add millions in pipeline value without relying on referrals.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {caseStudies.map((study) => (
            <Link
              key={study.id}
              to={`/case-studies/${study.slug}`}
              className="group bg-white rounded-2xl overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 border border-slate-100 flex flex-col h-full"
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={study.imageUrl}
                  alt={study.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-4 left-4 text-white">
                  <div className="font-bold text-sm bg-purple-600/90 backdrop-blur-sm px-3 py-1 rounded-full inline-block mb-2">
                    {study.builderName}
                  </div>
                  <div className="flex items-center text-sm opacity-90">
                    {study.location}
                  </div>
                </div>
              </div>

              <div className="p-8 flex-1 flex flex-col">
                <h3 className="text-2xl font-serif font-bold text-slate-900 mb-4 group-hover:text-purple-600 transition-colors leading-tight">
                  {study.title}
                </h3>

                <div className="grid grid-cols-2 gap-4 mb-6 mt-auto bg-slate-50 p-4 rounded-xl">
                  {study.results.slice(0, 2).map((res, i) => (
                    <div key={i}>
                      <div className="text-xs text-slate-500 uppercase tracking-wide font-semibold mb-1">{res.label}</div>
                      <div className="font-bold text-slate-900 text-lg">{res.value}</div>
                    </div>
                  ))}
                </div>

                <div className="flex items-center text-purple-600 font-bold group-hover:translate-x-2 transition-transform">
                  Read Full Story <ArrowRight size={20} className="ml-2" />
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-20 text-center">
          <div className="bg-slate-900 text-white rounded-2xl p-12 max-w-4xl mx-auto relative overflow-hidden">
            <div className="relative z-10">
              <h2 className="text-3xl font-serif font-bold mb-6">Ready to be our next success story?</h2>
              <p className="text-slate-300 text-lg mb-8 max-w-2xl mx-auto">
                We only work with one builder per market to ensure exclusivity. Check if your territory is still available.
              </p>
              <Link to="/contact" className="inline-block bg-white text-slate-900 px-8 py-4 rounded-xl font-bold hover:bg-purple-50 transition-colors">
                Check Availability
              </Link>
            </div>
            {/* Background Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-purple-600 rounded-full mix-blend-overlay filter blur-[100px] opacity-30"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CaseStudies;