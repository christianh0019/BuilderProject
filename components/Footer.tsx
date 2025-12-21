import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Facebook, Linkedin, Twitter } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-white pt-20 pb-10 border-t border-slate-800">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16 border-b border-slate-800 pb-12">
          <div>
            <div className="text-3xl font-serif font-bold mb-6 flex items-center gap-2">
              <img src="/images/logo_icon.png" alt="BuilderProject Logo" className="w-8 h-8 rounded-lg" />
              BuilderProject
            </div>
            <p className="text-slate-400 max-w-md text-lg leading-relaxed">
              We help custom home builders and remodelers dominate their local market through premium design, strategic SEO, and high-converting paid ads.
            </p>
          </div>
          <div className="lg:pl-12">
            <h3 className="text-xl font-bold mb-6 font-serif">Subscribe to our newsletter</h3>
            <form className="flex flex-col sm:flex-row gap-4" onSubmit={(e) => e.preventDefault()}>
              <input
                type="email"
                placeholder="Enter your email address"
                className="flex-1 bg-slate-800 border border-slate-700 rounded-lg px-6 py-4 text-white focus:outline-none focus:border-purple-500 transition-colors"
              />
              <button className="bg-white text-slate-900 px-8 py-4 rounded-lg font-bold hover:bg-gradient-to-r hover:from-purple-600 hover:to-pink-600 hover:text-white transition-all duration-300">
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-16">
          <div>
            <h4 className="text-lg font-bold mb-6 font-serif text-slate-200">Company</h4>
            <ul className="space-y-4">
              <li><Link to="/" className="text-slate-400 hover:text-white transition-colors">Home</Link></li>
              <li><Link to="/services" className="text-slate-400 hover:text-white transition-colors">Services</Link></li>
              <li><Link to="/programs" className="text-slate-400 hover:text-white transition-colors">Programs</Link></li>
              <li><Link to="/case-studies" className="text-slate-400 hover:text-white transition-colors">Case Studies</Link></li>
              <li><Link to="/contact" className="text-slate-400 hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-bold mb-6 font-serif text-slate-200">Resources</h4>
            <ul className="space-y-4">
              <li><Link to="/book" className="text-slate-400 hover:text-white transition-colors">Free Book</Link></li>
              <li><a href="https://www.youtube.com/@BuilderProjectCo" target="_blank" rel="noreferrer" className="text-slate-400 hover:text-white transition-colors">YouTube Channel</a></li>
              <li><Link to="/contact" className="text-slate-400 hover:text-white transition-colors">Consultation</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-bold mb-6 font-serif text-slate-200">Services</h4>
            <ul className="space-y-4">
              <li><Link to="/services/website-design" className="text-slate-400 hover:text-white transition-colors">Website Design</Link></li>
              <li><Link to="/services/content-marketing" className="text-slate-400 hover:text-white transition-colors">SEO & Local Search</Link></li>
              <li><Link to="/services/content-marketing" className="text-slate-400 hover:text-white transition-colors">Content Marketing</Link></li>
              <li><Link to="/services/paid-advertising" className="text-slate-400 hover:text-white transition-colors">Paid Advertising</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-bold mb-6 font-serif text-slate-200">Legal</h4>
            <ul className="space-y-4">
              <li><span className="text-slate-400 cursor-pointer hover:text-white">Privacy Policy</span></li>
              <li><span className="text-slate-400 cursor-pointer hover:text-white">Terms of Service</span></li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-slate-800">
          <p className="text-slate-500 text-sm mb-4 md:mb-0">
            © {new Date().getFullYear()} BuilderProject. All Rights Reserved.
          </p>
          <div className="flex space-x-6">
            <a href="#" className="text-slate-400 hover:text-purple-400 transition-colors"><Facebook size={20} /></a>
            <a href="#" className="text-slate-400 hover:text-purple-400 transition-colors"><Instagram size={20} /></a>
            <a href="#" className="text-slate-400 hover:text-purple-400 transition-colors"><Twitter size={20} /></a>
            <a href="#" className="text-slate-400 hover:text-purple-400 transition-colors"><Linkedin size={20} /></a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;