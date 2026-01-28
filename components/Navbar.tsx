import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown, ExternalLink, Monitor, PenTool, Target, Filter, Database, Briefcase, Rocket, TrendingUp, Handshake } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [resourceOpen, setResourceOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
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
      className={`fixed w-full z-50 transition-all duration-300 ${isOpen || scrolled ? 'bg-white shadow-sm py-4' : 'bg-transparent py-6'
        }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center relative z-50">
        {/* Logo */}
        <Link to="/" className="text-2xl font-bold font-serif tracking-tight flex items-center gap-2">
          <img src="/images/logo_icon.png" alt="BuilderProject Logo" className="w-8 h-8 rounded-lg" />
          <span className="text-slate-900">BuilderProject</span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">


          {/* Services Mega Menu */}
          <div className="relative group">
            <Link
              to="/services"
              className="flex items-center text-slate-700 hover:text-purple-700 font-medium transition-colors gap-1 py-4"
            >
              Services <ChevronDown size={16} className="group-hover:rotate-180 transition-transform duration-200" />
            </Link>

            <div className="absolute top-full -left-20 w-[800px] pt-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform translate-y-2 group-hover:translate-y-0">
              <div className="bg-white rounded-2xl shadow-xl border border-slate-100 overflow-hidden grid grid-cols-12">

                {/* Left Column: Services (4 cols) -> Expanded to 5 cols for better spacing */}
                <div className="col-span-5 p-6 border-r border-slate-50 bg-slate-50/50">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">Services</span>
                    <Link to="/services" className="text-xs font-bold text-purple-600 hover:text-purple-700">View All</Link>
                  </div>

                  <div className="space-y-2">
                    {[
                      { name: "Website Design", desc: "Custom builds", link: "/services/website-design", icon: Monitor, color: "text-blue-600", bg: "bg-blue-50" },
                      { name: "Content Marketing", desc: "SEO & Nurture", link: "/services/content-marketing", icon: PenTool, color: "text-purple-600", bg: "bg-purple-50" },
                      { name: "Paid Advertising", desc: "Google & Meta Ads", link: "/services/paid-advertising", icon: Target, color: "text-red-600", bg: "bg-red-50" },
                      { name: "Funnel Development", desc: "Lead Capture", link: "/services/funnel-development", icon: Filter, color: "text-orange-600", bg: "bg-orange-50" },
                      { name: "CRM Deployment", desc: "System Setup", link: "/services/crm-deployment", icon: Database, color: "text-emerald-600", bg: "bg-emerald-50" },
                      { name: "Sales Processes", desc: "Closing Systems", link: "/services/sales-processes", icon: Briefcase, color: "text-slate-600", bg: "bg-slate-100" },
                    ].map((service, i) => (
                      <Link key={i} to={service.link} className="flex items-start gap-4 p-3 rounded-xl hover:bg-white hover:shadow-sm transition-all group/item border border-transparent hover:border-slate-100">
                        <div className={`w-10 h-10 rounded-lg ${service.bg} flex items-center justify-center ${service.color} shrink-0`}>
                          <service.icon size={20} />
                        </div>
                        <div>
                          <span className="block font-semibold text-slate-800 group-hover/item:text-purple-700 transition-colors text-sm">{service.name}</span>
                          <span className="text-xs text-slate-500">{service.desc}</span>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>

                {/* Right Column: Programs (8 cols) -> 7 cols */}
                <div className="col-span-7 p-8 flex flex-col h-full bg-slate-50/20">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">Growth Programs</span>
                    <Link to="/programs" className="text-xs font-bold text-purple-600 hover:text-purple-700">View All Programs</Link>
                  </div>

                  <div className="flex flex-col gap-3 flex-1">
                    {/* Program 1 */}
                    <Link to="/programs/foundation" className="flex-1 flex items-center gap-4 p-4 rounded-xl border border-slate-100 hover:border-purple-200 hover:bg-purple-50/30 transition-all group/card bg-white hover:shadow-md">
                      <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center text-blue-600 group-hover/card:bg-blue-100 transition-colors shrink-0 shadow-sm">
                        <Rocket size={24} />
                      </div>
                      <div>
                        <h4 className="font-bold text-slate-900 mb-0.5 group-hover/card:text-purple-700 text-lg">The Foundation</h4>
                        <p className="text-sm text-slate-500 leading-snug">Complete digital infrastructure setup for builders starting to scale.</p>
                      </div>
                    </Link>

                    {/* Program 2 */}
                    <Link to="/programs/pipeline" className="flex-1 flex items-center gap-4 p-4 rounded-xl border border-slate-100 hover:border-purple-200 hover:bg-purple-50/30 transition-all group/card bg-white hover:shadow-md">
                      <div className="w-12 h-12 rounded-xl bg-purple-50 flex items-center justify-center text-purple-600 group-hover/card:bg-purple-100 transition-colors shrink-0 shadow-sm">
                        <TrendingUp size={24} />
                      </div>
                      <div>
                        <h4 className="font-bold text-slate-900 mb-0.5 group-hover/card:text-purple-700 text-lg">The Pipeline</h4>
                        <p className="text-sm text-slate-500 leading-snug">Aggressive lead generation and sales system for established firms.</p>
                      </div>
                    </Link>

                    {/* Program 3 */}
                    <Link to="/programs/partner" className="flex-1 flex items-center gap-4 p-4 rounded-xl border border-slate-100 hover:border-purple-200 hover:bg-purple-50/30 transition-all group/card bg-white hover:shadow-md">
                      <div className="w-12 h-12 rounded-xl bg-slate-900 flex items-center justify-center text-white group-hover/card:bg-slate-800 transition-colors shrink-0 shadow-sm">
                        <Handshake size={24} />
                      </div>
                      <div>
                        <h4 className="font-bold text-slate-900 mb-0.5 group-hover/card:text-purple-700 text-lg">The Partner Program</h4>
                        <p className="text-sm text-slate-500 leading-snug">Full-service fractional CMO & growth team integration.</p>
                      </div>
                    </Link>
                  </div>
                </div>

              </div>
            </div>
          </div>

          <Link to="/case-studies" className="text-slate-700 hover:text-purple-700 font-medium transition-colors">Case Studies</Link>
          <Link to="/blog" className="text-slate-700 hover:text-purple-700 font-medium transition-colors">Insights</Link>

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
                <Link to="/about" className="block px-6 py-4 hover:bg-slate-50 border-b border-slate-50">
                  <span className="block font-semibold text-slate-800">About Us</span>
                  <span className="text-sm text-slate-500">Mission & Team</span>
                </Link>
                <Link to="/podcast" className="block px-6 py-4 hover:bg-slate-50 border-b border-slate-50">
                  <span className="block font-semibold text-slate-800">Podcast</span>
                  <span className="text-sm text-slate-500">The Builder Backstage</span>
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
                <Link to="/careers" className="block px-6 py-4 hover:bg-slate-50 border-t border-slate-50">
                  <span className="block font-semibold text-slate-800">Careers</span>
                  <span className="text-sm text-slate-500">Join our team</span>
                </Link>
              </div>
            </div>
          </div>

          <a href="https://app.buildsurge.co" target="_blank" rel="noreferrer" className="text-slate-700 hover:text-purple-700 font-medium transition-colors">
            Login
          </a>

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


          <div>
            <button
              onClick={() => setServicesOpen(!servicesOpen)}
              className="flex items-center justify-between w-full text-slate-900 font-semibold border-b border-slate-100 pb-4"
            >
              Services <ChevronDown size={20} className={`transition-transform ${servicesOpen ? 'rotate-180' : ''}`} />
            </button>
            {servicesOpen && (
              <div className="pl-4 mt-4 flex flex-col space-y-4">
                <Link to="/services/website-design" className="text-slate-600">Website Design</Link>
                <Link to="/services/content-marketing" className="text-slate-600">Content Marketing</Link>
                <Link to="/services/paid-advertising" className="text-slate-600">Paid Advertising</Link>
                <Link to="/services/funnel-development" className="text-slate-600">Funnel Development</Link>
                <Link to="/services/crm-deployment" className="text-slate-600">CRM Deployment</Link>
                <Link to="/services/sales-processes" className="text-slate-600">Sales Processes</Link>

                <div className="pt-2 border-t border-slate-100 mt-2">
                  <div className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-3">Growth Programs</div>
                  <div className="flex flex-col space-y-3 pl-2">
                    <Link to="/programs/foundation" className="text-slate-800 font-medium">1. The Foundation</Link>
                    <Link to="/programs/pipeline" className="text-slate-800 font-medium">2. The Pipeline</Link>
                    <Link to="/programs/partner" className="text-slate-800 font-medium">3. The Partner Program</Link>
                    <Link to="/programs" className="text-purple-600 font-bold text-sm mt-2">View All Programs &rarr;</Link>
                  </div>
                </div>
              </div>
            )}
          </div>

          <Link to="/case-studies" className="text-slate-900 font-semibold border-b border-slate-100 pb-4">Case Studies</Link>
          <Link to="/blog" className="text-slate-900 font-semibold border-b border-slate-100 pb-4">Insights</Link>

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
                <Link to="/about" className="text-slate-600">About Us</Link>
                <Link to="/podcast" className="text-slate-600">Podcast</Link>
                <a href="https://www.youtube.com/@BuilderProjectCo" target="_blank" rel="noopener noreferrer" className="text-slate-600 flex items-center gap-2">
                  YouTube Channel <ExternalLink size={14} />
                </a>
                <Link to="/careers" className="text-slate-600">Careers</Link>
              </div>
            )}
          </div>

          <a href="https://app.buildsurge.co" target="_blank" rel="noreferrer" className="text-slate-900 font-semibold border-b border-slate-100 pb-4 block">
            Login
          </a>

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