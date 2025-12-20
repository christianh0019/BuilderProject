import React from 'react';
import { Check, X } from 'lucide-react';
import { Link } from 'react-router-dom';
import { PricingPlan } from '../types';

const plans: PricingPlan[] = [
  {
    name: "Blueprint",
    price: "$2,500",
    description: "Perfect for remodelers looking to establish a professional digital foundation.",
    features: [
      "Custom Website Design (5 Pages)",
      "Basic SEO Setup",
      "Google Business Profile Optimization",
      "Monthly Maintenance",
      "Quarterly Analytics Report"
    ],
    recommended: false
  },
  {
    name: "Foundation",
    price: "$4,500",
    description: "Our most popular plan for custom home builders ready to scale leads.",
    features: [
      "Premium Website (10+ Pages)",
      "Advanced Local SEO",
      "Content Marketing (2 Blogs/mo)",
      "Portfolio Management",
      "Lead Capture System",
      "Monthly Strategy Calls"
    ],
    recommended: true
  },
  {
    name: "Skyscraper",
    price: "$8,000",
    description: "Full-service agency partnership for dominating your region.",
    features: [
      "Everything in Foundation",
      "Paid Ads Management (Google/FB)",
      "Video Content Production",
      "Weekly Blog & Email Marketing",
      "CRM Integration",
      "24/7 Priority Support"
    ],
    recommended: false
  }
];

const Services: React.FC = () => {
  return (
    <div className="pt-32 pb-20 bg-slate-50 min-h-screen">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h1 className="text-5xl font-serif font-bold text-slate-900 mb-6">Transparent Pricing for Builders</h1>
          <p className="text-xl text-slate-600">
            No hidden fees. No long-term contracts. Just results-driven marketing packages tailored to the construction industry.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div 
              key={index} 
              className={`relative bg-white rounded-3xl p-8 border ${plan.recommended ? 'border-purple-500 shadow-2xl shadow-purple-200 transform md:-translate-y-4' : 'border-slate-200 shadow-lg'}`}
            >
              {plan.recommended && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-gradient-to-r from-purple-700 to-pink-600 text-white px-4 py-1 rounded-full text-sm font-bold tracking-wide uppercase">
                  Best Value
                </div>
              )}
              
              <div className="mb-8">
                <h3 className="text-2xl font-bold text-slate-900 mb-2">{plan.name}</h3>
                <p className="text-slate-500 min-h-[48px]">{plan.description}</p>
              </div>

              <div className="mb-8">
                <span className="text-4xl font-serif font-bold text-slate-900">{plan.price}</span>
                <span className="text-slate-500"> / month</span>
              </div>

              <ul className="space-y-4 mb-10">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <div className="mt-1 p-0.5 rounded-full bg-green-100 text-green-600">
                      <Check size={14} strokeWidth={3} />
                    </div>
                    <span className="text-slate-700 font-medium">{feature}</span>
                  </li>
                ))}
              </ul>

              <Link 
                to="/contact" 
                className={`block text-center w-full py-4 rounded-xl font-bold transition-all duration-300 ${
                  plan.recommended 
                    ? 'bg-slate-900 text-white hover:bg-gradient-to-r hover:from-purple-700 hover:to-pink-600' 
                    : 'bg-slate-100 text-slate-900 hover:bg-slate-200'
                }`}
              >
                Choose {plan.name}
              </Link>
            </div>
          ))}
        </div>

        {/* Custom Solution */}
        <div className="mt-20 p-12 bg-slate-900 rounded-3xl text-center relative overflow-hidden">
          <div className="relative z-10">
             <h3 className="text-3xl font-serif font-bold text-white mb-4">Need a Custom Solution?</h3>
             <p className="text-slate-400 mb-8 max-w-2xl mx-auto">We understand that every building company is unique. If these plans don't fit your needs, let's build a custom strategy.</p>
             <Link to="/contact" className="inline-block bg-white text-slate-900 px-8 py-3 rounded-full font-bold hover:bg-purple-50 transition-colors">Contact Sales</Link>
          </div>
          <div className="absolute top-0 right-0 w-64 h-64 bg-purple-600 rounded-full filter blur-3xl opacity-20 translate-x-1/2 -translate-y-1/2"></div>
        </div>
      </div>
    </div>
  );
};

export default Services;