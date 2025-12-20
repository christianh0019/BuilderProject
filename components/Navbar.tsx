import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown, ExternalLink } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [resourceOpen, setResourceOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white/90 backdrop-blur-md shadow-sm py-4' : 'bg-transparent py-6'
        }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="text-2xl font-bold font-serif tracking-tight flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-purple-700 to-pink-600 flex items-center justify-center text-white font-sans text-lg">B</div>
          <span className="text-slate-900">BuilderProject</span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
          <Link to="/" className="text-slate-700 hover:text-purple-700 font-medium transition-colors">Home</Link>

          {/* Services Dropdown */}
          <div className="relative group">
            <Link
              to="/services"
              className="flex items-center text-slate-700 hover:text-purple-700 font-medium transition-colors gap-1 py-4"
            >
              Services <ChevronDown size={16} className="group-hover:rotate-180 transition-transform duration-200" />
            </Link>
            <div className="absolute top-full -left-4 w-64 pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform translate-y-2 group-hover:translate-y-0">
              <div className="bg-white rounded-xl shadow-xl border border-slate-100 overflow-hidden py-2">
                <Link to="/services/website-design" className="block px-6 py-3 hover:bg-slate-50 transition-colors">
                  <span className="block font-semibold text-slate-800">Website Design</span>
                  <span className="text-xs text-slate-500">Premium custom builds</span>
                </Link>
                <Link to="/services/content-marketing" className="block px-6 py-3 hover:bg-slate-50 transition-colors">
                  <span className="block font-semibold text-slate-800">Content Marketing</span>
                  <span className="text-xs text-slate-500">SEO & Email Nurture</span>
                </Link>
                <Link to="/services/paid-advertising" className="block px-6 py-3 hover:bg-slate-50 transition-colors">
                  <span className="block font-semibold text-slate-800">Paid Advertising</span>
                  <span className="text-xs text-slate-500">Google & Meta Ads</span>
                </Link>
                <div className="border-t border-slate-50 mt-2 pt-2">
                  <Link to="/services" className="block px-6 py-2 text-sm text-purple-600 font-bold hover:text-purple-800">
                    View All Services &rarr;
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <Link to="/case-studies" className="text-slate-700 hover:text-purple-700 font-medium transition-colors">Case Studies</Link>

          {/* Dropdown */}
          <div className="relative group">
            <button
              className="flex items-center text-slate-700 hover:text-purple-700 font-medium transition-colors gap-1"
            >
              Resources <ChevronDown size={16} />
            </button>
            <div className="absolute top-full left-0 w-56 pt-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform translate-y-2 group-hover:translate-y-0">
              <div className="bg-white rounded-xl shadow-xl border border-slate-100 overflow-hidden">
                <Link to="/book" className="block px-6 py-4 hover:bg-slate-50 border-b border-slate-50">
                  <span className="block font-semibold text-slate-800">Our Book</span>
                  <span className="text-sm text-slate-500">The Builder's Marketing Playbook</span>
                </Link>
                <a
                  href="https://www.youtube.com/@BuilderProjectCo"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block px-6 py-4 hover:bg-slate-50 group/item"
                >
                  <span className="flex items-center gap-2 font-semibold text-slate-800">
                    YouTube Channel <ExternalLink size={14} className="text-slate-400 group-hover/item:text-red-500" />
                  </span>
                  <span className="text-sm text-slate-500">Video tutorials & tips</span>
                </a>
              </div>
            </div>
          </div>

          <Link
            to="/contact"
            className="px-6 py-2.5 rounded-full bg-slate-900 text-white font-medium hover:bg-gradient-to-r hover:from-purple-700 hover:to-pink-600 transition-all duration-300 shadow-lg hover:shadow-purple-500/25"
          >
            Get in Touch
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-slate-900"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden fixed inset-0 bg-white z-40 transform transition-transform duration-300 ease-in-out pt-24 px-6 ${isOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
      >
        <div className="flex flex-col space-y-6 text-lg">
          <Link to="/" className="text-slate-900 font-semibold border-b border-slate-100 pb-4">Home</Link>
          <Link to="/services" className="text-slate-900 font-semibold border-b border-slate-100 pb-4">Services</Link>
          <Link to="/case-studies" className="text-slate-900 font-semibold border-b border-slate-100 pb-4">Case Studies</Link>

          <div>
            <button
              onClick={() => setResourceOpen(!resourceOpen)}
              className="flex items-center justify-between w-full text-slate-900 font-semibold border-b border-slate-100 pb-4"
            >
              Resources <ChevronDown size={20} className={`transition-transform ${resourceOpen ? 'rotate-180' : ''}`} />
            </button>
            {resourceOpen && (
              <div className="pl-4 mt-4 flex flex-col space-y-4">
                <Link to="/book" className="text-slate-600">Our Book</Link>
                <a href="https://www.youtube.com/@BuilderProjectCo" target="_blank" rel="noopener noreferrer" className="text-slate-600 flex items-center gap-2">
                  YouTube Channel <ExternalLink size={14} />
                </a>
              </div>
            )}
          </div>

          <Link
            to="/contact"
            className="text-center w-full py-4 rounded-xl bg-slate-900 text-white font-bold mt-4"
          >
            Get in Touch
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;