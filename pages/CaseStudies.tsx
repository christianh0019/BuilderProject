import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { CaseStudy } from '../types';

const cases: CaseStudy[] = [
  {
    id: "1",
    client: "Hamilton Custom Homes",
    title: "From 5 Leads to 50: Scaling a Luxury Builder",
    image: "https://images.unsplash.com/photo-1613545325278-f24b0cae1224?q=80&w=1600&auto=format&fit=crop",
    stat: "900%",
    statLabel: "Lead Growth",
    category: "Paid Ads & SEO"
  },
  {
    id: "2",
    client: "Urban Renovations Co.",
    title: "Rebranding a Legacy Remodeler for the Modern Market",
    image: "https://images.unsplash.com/photo-1556912173-3db9963f63db?q=80&w=1600&auto=format&fit=crop",
    stat: "3x",
    statLabel: "Avg Project Value",
    category: "Web Design & Branding"
  },
  {
    id: "3",
    client: "Nairobi Estates",
    title: "Selling Out a Development in record time",
    image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=1600&auto=format&fit=crop",
    stat: "4 Mo",
    statLabel: "Sell-out Time",
    category: "Full Marketing Suite"
  },
  {
    id: "4",
    client: "Bristol Builders",
    title: "Dominating Local Search in a Competitive Market",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1600&auto=format&fit=crop",
    stat: "#1",
    statLabel: "Google Ranking",
    category: "Local SEO"
  }
];

const CaseStudies: React.FC = () => {
  return (
    <div className="pt-32 pb-20 bg-slate-50 min-h-screen">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mb-16">
          <h1 className="text-5xl font-serif font-bold text-slate-900 mb-6">Proven Results</h1>
          <p className="text-xl text-slate-600">
            See how we've helped builders and remodelers across the country transform their digital presence and grow their bottom line.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {cases.map((study) => (
            <div key={study.id} className="group bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300">
              <div className="relative h-80 overflow-hidden">
                <img 
                  src={study.image} 
                  alt={study.client} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute bottom-6 left-6 bg-white/90 backdrop-blur px-4 py-2 rounded-full text-sm font-bold text-slate-900">
                  {study.category}
                </div>
              </div>
              
              <div className="p-10">
                <div className="flex justify-between items-start mb-6">
                  <div>
                    <h3 className="text-slate-500 font-medium mb-2">{study.client}</h3>
                    <h2 className="text-2xl font-bold font-serif text-slate-900 leading-tight pr-4">{study.title}</h2>
                  </div>
                  <div className="text-right flex-shrink-0">
                    <div className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-700 to-pink-600">
                      {study.stat}
                    </div>
                    <div className="text-xs font-bold text-slate-400 uppercase tracking-wide">{study.statLabel}</div>
                  </div>
                </div>
                
                <Link to="/contact" className="inline-flex items-center text-slate-900 font-bold hover:text-purple-600 transition-colors group/link">
                  View Full Study <ArrowRight size={18} className="ml-2 transition-transform group-hover/link:translate-x-1" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CaseStudies;