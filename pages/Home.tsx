import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { caseStudies } from '../data/caseStudies';
import { Star, ArrowRight, Play, BookOpen, BarChart3, Youtube, ChevronRight, ChevronDown, Layout, TrendingUp, PenTool, Filter, Database, Briefcase, Mic, X, Sparkles, Code, Globe, Zap, ShieldCheck, CheckCircle } from 'lucide-react';
import SEO from '../components/SEO';

const RevealOnScroll: React.FC<{ children: React.ReactNode, className?: string, delay?: number }> = ({ children, className = "", delay = 0 }) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setTimeout(() => {
          setIsVisible(true);
        }, delay);
        observer.disconnect();
      }
    }, { threshold: 0.1 });

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [delay]);

  return (
    <div
      ref={ref}
      className={`transition-all duration-1000 ease-out transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'} ${className}`}
    >
      {children}
    </div>
  );
};

const VideoModal: React.FC<{ videoId: string | null, onClose: () => void }> = ({ videoId, onClose }) => {
  if (!videoId) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8">
      <div
        className="absolute inset-0 bg-black/90 backdrop-blur-sm"
        onClick={onClose}
      ></div>
      <div className="relative w-full max-w-5xl aspect-video bg-black rounded-2xl overflow-hidden shadow-2xl animate-in fade-in zoom-in duration-300">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-white/50 hover:text-white bg-black/50 hover:bg-black/80 rounded-full p-2 transition-all z-10"
        >
          <X size={24} />
        </button>
        <iframe
          src={`https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0&modestbranding=1`}
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
          className="w-full h-full"
        ></iframe>
      </div>
    </div>
  );
};

const AccordionItem = ({ question, answer, isOpen, onClick }: { question: string, answer: string, isOpen: boolean, onClick: () => void }) => {
  return (
    <div className="border border-slate-200 rounded-2xl bg-white overflow-hidden mb-4 transition-all duration-300 hover:shadow-md">
      <button
        onClick={onClick}
        className="w-full flex items-center justify-between p-6 md:p-8 text-left focus:outline-none"
      >
        <h3 className="text-xl md:text-2xl font-serif font-bold text-slate-900 pr-8">{question}</h3>
        <div className={`flex-shrink-0 w-8 h-8 rounded-full border border-slate-300 flex items-center justify-center transition-transform duration-300 ${isOpen ? 'rotate-180 bg-slate-900 border-slate-900 text-white' : 'bg-white text-slate-500'}`}>
          <ChevronDown size={18} />
        </div>
      </button>
      <div
        className={`transition-all duration-300 ease-in-out overflow-hidden ${isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}
      >
        <div className="p-6 md:p-8 pt-0 text-lg text-slate-600 leading-relaxed border-t border-slate-100/50">
          {answer}
        </div>
      </div>
    </div>
  );
};

const Home: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null);

  const faqData = [
    {
      question: "Do you primarily work with Custom Home Builders?",
      answer: "Yes. We specialize exclusively in the high-ticket construction industry. Unlike generalist agencies that juggle dentists and e-commerce stores, our entire playbook—from ad copy to website architecture—is built specifically for the long sales cycle of custom homes and large-scale remodeling."
    },
    {
      question: "Will I get 'tire kicker' leads?",
      answer: "Our system is designed to repel them. We use a 'filtering' funnel that disqualifies leads based on budget and timeline before they ever book a call with you. We focus on quality over quantity, so you only spend time on homeowners who can actually afford your services."
    },
    {
      question: "Do I really own the website and assets?",
      answer: "100%. Many agencies lease you a site and hold it hostage if you leave. We believe that's wrong. You own your domain, your website files, your ad accounts, and your lead database from Day 1. We build it, but it's your intellectual property."
    },
    {
      question: "How long until I see a return on investment?",
      answer: "It depends on the service. Our Paid Advertising system typically generates qualified appointments within the first 7-14 days. Our SEO and Website overhaul creates a long-term asset that compounds over 3-6 months. Most clients see a positive ROI on their first closed project."
    },
    {
      question: "I've been burned by agencies before. How are you different?",
      answer: "We are partners, not vendors. We share our live results transparently, we don't lock you into long-term contracts (our results keep you staying), and we actually understand construction. You won't have to explain what a 'change order' is to us."
    }
  ];

  // Inject JSON-LD for SEO (FAQ + Sitelinks Schema)
  useEffect(() => {
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify({
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "WebSite",
          "name": "BuilderProject",
          "url": "https://site.builderproject.co/",
          "potentialAction": {
            "@type": "SearchAction",
            "target": "https://site.builderproject.co/?s={search_term_string}",
            "query-input": "required name=search_term_string"
          }
        },
        {
          "@type": "Organization",
          "name": "BuilderProject",
          "url": "https://site.builderproject.co",
          "logo": "https://site.builderproject.co/images/logo_icon.png",
          "sameAs": [
            "https://www.youtube.com/@builderprojectco",
            "https://www.facebook.com/builderproject",
            "https://www.instagram.com/builderproject"
          ]
        },
        {
          "@type": "FAQPage",
          "mainEntity": faqData.map(item => ({
            "@type": "Question",
            "name": item.question,
            "acceptedAnswer": {
              "@type": "Answer",
              "text": item.answer
            }
          }))
        }
      ]
    });
    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, []);

  return (
    <div className="bg-white font-sans text-slate-900 selection:bg-purple-200 selection:text-purple-900">
      <SEO
        title="BuilderProject | Marketing for Custom Home Builders & Remodelers"
        description="We help custom home builders and remodelers get more high quality leads and scale their revenue through digital marketing strategies. Our services include Website Design, SEO, Facebook Ads, Google Ads, and more!"
        keywords="marketing for custom home builders, digital marketing for remodelers, construction marketing agency, builder seo, contractor website design, facebook ads for builders"
        canonical="/"
      />

      <VideoModal videoId={selectedVideo} onClose={() => setSelectedVideo(null)} />

      {/* Hero Section */}
      <section className="pt-32 pb-20 lg:pt-48 lg:pb-32 relative overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-5xl mx-auto text-center">

            <RevealOnScroll>
              <div className="inline-flex items-center gap-2 bg-slate-50 border border-slate-200 px-6 py-3 rounded-full mb-12 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex text-yellow-500">
                  <Star size={18} fill="currentColor" />
                  <Star size={18} fill="currentColor" />
                  <Star size={18} fill="currentColor" />
                  <Star size={18} fill="currentColor" />
                  <Star size={18} fill="currentColor" />
                </div>
                <span className="text-base font-bold text-slate-700 tracking-wide">Rated 4.9/5 by 100+ Builders</span>
              </div>
            </RevealOnScroll>

            <RevealOnScroll delay={100}>
              <h1 className="text-5xl lg:text-7xl font-serif font-bold text-slate-900 leading-[1.1] mb-10 tracking-tight">
                Digital Marketing For <br className="hidden md:block" />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-700 via-fuchsia-600 to-pink-600">
                  Custom Home Builders & Remodelers
                </span>
              </h1>
            </RevealOnScroll>

            <RevealOnScroll delay={200}>
              <p className="text-xl lg:text-2xl text-slate-500 mb-14 max-w-3xl mx-auto leading-relaxed font-light">
                Stop relying on referrals and build your project pipeline with marketing that gets results every time.
              </p>
            </RevealOnScroll>

            <RevealOnScroll delay={300}>
              {/* 
              <div className="mb-14 relative max-w-6xl mx-auto overflow-hidden">
                <div className="absolute top-0 left-0 w-24 h-full bg-gradient-to-r from-white to-transparent z-10 pointer-events-none"></div>
                <div className="absolute top-0 right-0 w-24 h-full bg-gradient-to-l from-white to-transparent z-10 pointer-events-none"></div>

                <div className="flex gap-12 w-max hover:[animation-play-state:paused] group">
                  {[...Array(2)].map((_, groupIndex) => (
                    <div key={groupIndex} className="flex items-center gap-12 animate-marquee will-change-transform">
                      {[
                        "Return on Investment Guaranteed",
                        "30-Day No-Questions-Asked Money-Back Guarantee",
                        "You Own Every Asset 100%"
                      ].map((text, i) => (
                        <div key={i} className="flex items-center gap-3 whitespace-nowrap">
                          <div className="bg-green-100 text-green-700 rounded-full p-1.5 shadow-sm flex-shrink-0">
                            <ChevronDown size={20} className="stroke-[3]" />
                          </div>
                          <span className="text-lg md:text-xl font-medium text-slate-700">{text}</span>
                        </div>
                      ))}
                    </div>
                  ))}
                </div>
              </div>
              */}

              <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                <Link
                  to="/contact"
                  className="w-full sm:w-auto px-10 py-5 rounded-full bg-slate-900 text-white font-bold text-xl hover:bg-gradient-to-r hover:from-purple-700 hover:to-pink-600 transition-all duration-300 shadow-xl hover:shadow-purple-500/25 hover:-translate-y-1"
                >
                  Book a Strategy Call
                </Link>
                <Link
                  to="/case-studies"
                  className="w-full sm:w-auto px-10 py-5 rounded-full bg-white text-slate-900 border-2 border-slate-100 font-bold text-xl hover:border-purple-200 hover:bg-purple-50 transition-all duration-300 flex items-center justify-center gap-3 hover:-translate-y-1"
                >
                  <Play size={20} fill="currentColor" className="text-purple-600" />
                  See Our Work
                </Link>
              </div>
            </RevealOnScroll>
          </div>
        </div>

        {/* Hero Abstract Background */}
        <div className="absolute top-0 left-0 w-full h-full z-0 pointer-events-none opacity-40">
          <div className="absolute top-[-20%] right-[-10%] w-[800px] h-[800px] bg-purple-200 rounded-full mix-blend-multiply filter blur-[120px] opacity-30 animate-blob"></div>
          <div className="absolute top-[-20%] left-[-10%] w-[800px] h-[800px] bg-pink-200 rounded-full mix-blend-multiply filter blur-[120px] opacity-30 animate-blob animation-delay-2000"></div>
        </div>
      </section>

      {/* Hero Grid / Case Studies Preview */}
      <section className="pb-32 overflow-hidden">
        <div className="container mx-auto px-6">
          <RevealOnScroll delay={400}>
            {/* Mobile Fix: h-auto instead of fixed height */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 h-auto md:h-[600px]">
              {/* Item 1 - AI Custom Websites */}
              <div className="group relative rounded-[2rem] md:rounded-[2.5rem] overflow-hidden shadow-2xl h-[480px] md:h-full bg-slate-900 border border-slate-800">
                <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-purple-900/10 to-slate-900"></div>

                {/* Decorative Pattern */}
                <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'radial-gradient(#6366f1 1px, transparent 1px)', backgroundSize: '30px 30px' }}></div>

                {/* Coded Graphics Area */}
                <div className="absolute top-8 md:top-10 left-0 right-0 h-64 flex items-start justify-center p-8 group-hover:-translate-y-2 transition-transform duration-700 ease-out">
                  {/* Mock Browser/Editor Window */}
                  <div className="relative w-full max-w-[280px] md:max-w-xs bg-slate-800/80 backdrop-blur-xl rounded-xl border border-slate-700/50 shadow-2xl overflow-hidden transform rotate-[-2deg] scale-90 md:scale-100 group-hover:rotate-0 transition-all duration-500">
                    {/* Header */}
                    <div className="h-8 bg-slate-700/50 border-b border-slate-700/50 flex items-center px-4 gap-2">
                      <div className="w-2.5 h-2.5 rounded-full bg-red-400"></div>
                      <div className="w-2.5 h-2.5 rounded-full bg-yellow-400"></div>
                      <div className="w-2.5 h-2.5 rounded-full bg-green-400"></div>
                    </div>
                    {/* Body */}
                    <div className="p-5 space-y-4">
                      <div className="flex gap-4">
                        <div className="w-1/3 space-y-2">
                          <div className="h-2 w-full bg-slate-600/50 rounded animate-pulse"></div>
                          <div className="h-2 w-2/3 bg-slate-600/50 rounded animate-pulse delay-75"></div>
                        </div>
                        <div className="w-2/3 h-16 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-lg border border-white/5 flex items-center justify-center">
                          <Sparkles className="text-purple-400 opacity-60" size={20} />
                        </div>
                      </div>
                      <div className="h-1 w-full bg-slate-700 rounded"></div>
                      <div className="grid grid-cols-3 gap-2">
                        <div className="h-12 bg-slate-700/30 rounded border border-white/5"></div>
                        <div className="h-12 bg-slate-700/30 rounded border border-white/5"></div>
                        <div className="h-12 bg-slate-700/30 rounded border border-white/5 relative overflow-hidden">
                          <div className="absolute bottom-1 right-1">
                            <Code size={12} className="text-slate-500" />
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Floating Badge */}
                    <div className="absolute -bottom-4 -right-4 bg-gradient-to-r from-purple-600 to-pink-600 px-4 py-2 rounded-full text-white text-xs font-bold shadow-lg flex items-center gap-2 transform group-hover:scale-110 transition-transform">
                      <Zap size={12} fill="currentColor" /> AI Powered
                    </div>
                  </div>
                </div>

                <div className="absolute bottom-0 left-0 w-full p-8 md:p-10 z-10 flex flex-col justify-end h-full pointer-events-none">
                  {/* Gradient fade to ensure text readability if overlaps */}
                  <div className="absolute bottom-0 left-0 w-full h-2/3 bg-gradient-to-t from-slate-900 via-slate-900/80 to-transparent -z-10"></div>

                  <div className="mt-auto pointer-events-auto relative">
                    <h3 className="text-3xl md:text-3xl font-serif font-bold text-white mb-2 leading-tight">New AI Custom Websites</h3>
                    <p className="text-slate-300 font-medium mb-2">High-performance sites designed to convert.</p>
                    <p className="text-purple-300 text-sm font-bold mb-6">Websites that would've cost 30k can now be done for 1/10th of that.</p>
                    <Link to="/services/website-design" className="inline-flex items-center text-white bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white hover:text-slate-900 px-6 py-3 rounded-full font-bold text-sm transition-all">
                      Learn More <ArrowRight size={16} className="ml-2" />
                    </Link>
                  </div>
                </div>
              </div>

              {/* Item 2 - Central Focus - Construction/Builder */}
              <div
                className="md:col-span-1 group relative rounded-[2rem] md:rounded-[2.5rem] overflow-hidden bg-slate-900 flex items-center justify-center shadow-2xl h-[400px] md:h-full cursor-pointer"
                onClick={() => setSelectedVideo("CNngG1p-HQQ")}
              >
                <div className="absolute inset-0 opacity-60">
                  <img
                    src="/images/hero-video-thumb.gif"
                    alt="Builder Project Hero Video"
                    title="Builder Project Hero Video"
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                  />
                </div>
                <div className="absolute inset-0 bg-slate-900/40 group-hover:bg-slate-900/30 transition-all"></div>
                <div className="relative z-10 text-center p-8 md:p-10">
                  <div className="w-20 h-20 md:w-24 md:h-24 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center mx-auto mb-6 md:mb-8 hover:bg-white/20 transition-all hover:scale-110 shadow-lg border border-white/20">
                    <Play size={40} className="text-white ml-2" fill="currentColor" />
                  </div>
                  <p className="text-2xl md:text-3xl font-serif text-white italic leading-tight">"Your Custom Home / Remodeling Business Isn't Growing—Here's Why"</p>
                </div>
              </div>

              {/* Item 3 - Architectural Detail */}
              {/* Item 3 - Guarantee Card */}
              <div className="group relative rounded-[2rem] md:rounded-[2.5rem] overflow-hidden shadow-2xl h-[480px] md:h-full bg-slate-900 border border-slate-800">
                <div className="absolute inset-0 bg-gradient-to-tr from-slate-900 via-green-900/10 to-slate-900"></div>

                {/* Decorative Pattern */}
                <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'radial-gradient(#10b981 1px, transparent 1px)', backgroundSize: '30px 30px' }}></div>

                {/* Coded Graphics Area */}
                <div className="absolute top-8 md:top-10 left-0 right-0 h-64 flex items-start justify-center p-8 group-hover:-translate-y-2 transition-transform duration-700 ease-out">
                  {/* Shield Graphic Container */}
                  <div className="relative w-[280px] md:w-64 h-64 flex items-center justify-center">
                    {/* Outer Glow Ring */}
                    <div className="absolute w-56 h-56 bg-green-500/20 rounded-full blur-3xl animate-pulse"></div>

                    {/* Main Shield Shape (CSS) */}
                    <div className="relative w-40 h-48 bg-gradient-to-b from-slate-800 to-slate-900 border border-slate-700 shadow-2xl flex items-center justify-center transform group-hover:scale-105 transition-transform duration-500"
                      style={{ clipPath: 'polygon(50% 0, 100% 20%, 100% 80%, 50% 100%, 0 80%, 0 20%)' }}>

                      <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-green-500/10 to-transparent"></div>

                      {/* Inner Icon */}
                      <div className="bg-green-500/20 p-4 rounded-full border border-green-500/30 shadow-[0_0_20px_rgba(34,197,94,0.3)]">
                        <ShieldCheck size={48} className="text-green-400" />
                      </div>
                    </div>

                    {/* Floating "Approved" Badge */}
                    <div className="absolute top-10 -right-4 md:-right-8 bg-white text-slate-900 px-4 py-1.5 rounded-full text-xs font-bold shadow-xl border-2 border-green-100 flex items-center gap-1.5 animate-bounce" style={{ animationDuration: '3s' }}>
                      <CheckCircle size={14} className="text-green-600" fill="currentColor" />
                      Guaranteed
                    </div>
                  </div>
                </div>

                <div className="absolute bottom-0 left-0 w-full p-8 md:p-10 z-10 flex flex-col justify-end h-full pointer-events-none">
                  {/* Gradient fade */}
                  <div className="absolute bottom-0 left-0 w-full h-2/3 bg-gradient-to-t from-slate-900 via-slate-900/90 to-transparent -z-10"></div>

                  <div className="mt-auto pointer-events-auto">
                    <div className="flex gap-1 mb-3">
                      {[1, 2, 3, 4, 5].map(i => <Star key={i} size={16} className="text-green-400" fill="currentColor" />)}
                    </div>
                    <h3 className="text-3xl md:text-3xl font-serif font-bold text-white mb-2 leading-tight">Performance Guarantee</h3>
                    <p className="text-slate-300 font-medium mb-4">We stand behind our work.</p>

                    <ul className="space-y-2 mb-6 text-sm text-slate-400">
                      <li className="flex items-start gap-2">
                        <CheckCircle size={16} className="text-green-500 shrink-0 mt-0.5" />
                        <span><strong className="text-white">30-Day Money Back:</strong> If you're not satisfied, we refund you.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle size={16} className="text-green-500 shrink-0 mt-0.5" />
                        <span><strong className="text-white">You Own It All:</strong> No leasing. You own every asset 100%.</span>
                      </li>
                    </ul>

                    <Link to="/contact" className="inline-flex items-center text-white bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white hover:text-slate-900 px-6 py-3 rounded-full font-bold text-sm transition-all">
                      Get Started <ArrowRight size={16} className="ml-2" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </RevealOnScroll>
        </div>
      </section >

      {/* Stats Section */}
      < section className="py-20 md:py-32 bg-slate-50" >
        <div className="container mx-auto px-6">
          <RevealOnScroll>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-12 text-center md:text-left">
              {[
                { val: "97%", label: "Happy Clients Served" },
                { val: "150+", label: "Builders Scaled" },
                { val: "$50M+", label: "Revenue Generated" },
                { val: "300%", label: "Average ROI" }
              ].map((stat, i) => (
                <div key={i} className="relative pl-6 border-l-4 border-purple-200 hover:border-purple-600 transition-colors duration-500">
                  <h3 className="text-4xl md:text-6xl font-serif font-bold text-slate-900 mb-3">{stat.val}</h3>
                  <p className="text-slate-500 font-bold text-sm md:text-lg uppercase tracking-wide">{stat.label}</p>
                </div>
              ))}
            </div>
          </RevealOnScroll>
        </div>
      </section >

      {/* Navigation Grid (Replacing Services Preview) */}
      < section className="py-20 md:py-32 bg-white" >
        <div className="container mx-auto px-6">

          {/* Services Banner */}
          <div className="mb-16 md:mb-24">
            <RevealOnScroll>
              <div className="bg-slate-900 rounded-[2rem] md:rounded-[3rem] p-8 md:p-32 text-center relative overflow-hidden group shadow-2xl">
                <div className="absolute inset-0 bg-gradient-to-r from-purple-900/60 to-pink-900/60 group-hover:bg-opacity-80 transition-all"></div>
                <img
                  src="https://images.unsplash.com/photo-1510627489930-0c1b0dc58e85?q=80&w=2000&auto=format&fit=crop"
                  alt="Services Background"
                  title="Services Background"
                  className="absolute inset-0 w-full h-full object-cover -z-10 opacity-40 group-hover:scale-105 transition-transform duration-1000"
                />
                <div className="relative z-10 flex flex-col items-center">
                  <span className="inline-block py-2 px-6 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white text-xs md:text-sm font-bold tracking-widest uppercase mb-6 md:mb-8">Comprehensive Growth</span>
                  <h2 className="text-4xl md:text-8xl font-serif font-bold text-white mb-6 md:mb-10 leading-tight">Everything You Need <br /> To Dominate</h2>
                  <p className="text-lg md:text-2xl text-slate-200 max-w-3xl mx-auto mb-12 font-light">
                    From world-class website design to automated lead generation, we offer a comprehensive suite of services dedicated specifically to custom home builders.
                  </p>

                  {/* Service Grid */}
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 w-full max-w-5xl mb-10">
                    {[
                      { icon: Layout, label: "Website Design", link: "/services/website-design" },
                      { icon: TrendingUp, label: "Paid Advertising", link: "/services/paid-advertising" },
                      { icon: PenTool, label: "Content Marketing", link: "/services/content-marketing" },
                      { icon: Filter, label: "Funnel Development", link: "/services/funnel-development" },
                      { icon: Database, label: "CRM Deployment", link: "/services/crm-deployment" },
                      { icon: Briefcase, label: "Sales Processes", link: "/services/sales-processes" }
                    ].map((service, i) => (
                      <Link key={i} to={service.link} className="group flex flex-col items-center justify-center p-6 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 hover:-translate-y-1 transition-all backdrop-blur-sm">
                        <service.icon size={32} className="text-purple-300 mb-3 group-hover:text-white transition-colors" />
                        <span className="text-base md:text-lg font-bold text-white text-center">{service.label}</span>
                      </Link>
                    ))}
                  </div>

                  <Link to="/services" className="inline-flex items-center bg-white text-slate-900 px-8 py-4 md:px-12 md:py-6 rounded-full font-bold text-lg md:text-xl hover:bg-slate-200 transition-all hover:scale-105 hover:shadow-2xl">
                    View All Services <ChevronRight className="ml-2" />
                  </Link>
                </div>
              </div>
            </RevealOnScroll>
          </div>


          {/* Resources Grid */}
          <div className="grid md:grid-cols-2 gap-6 md:gap-10">
            {/* 1. Podcast (Replaces Case Studies) */}
            <RevealOnScroll delay={100}>
              <Link to="/podcast" className="group relative rounded-[2rem] md:rounded-[3rem] overflow-hidden aspect-[4/5] md:aspect-auto md:h-[500px] bg-indigo-900 border border-indigo-700 shadow-xl hover:shadow-2xl hover:shadow-indigo-900/20 hover:-translate-y-2 transition-all duration-500 w-full block flex flex-col justify-between p-8 md:p-12">
                <div className="absolute inset-0 bg-gradient-to-br from-black/20 to-transparent"></div>
                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>

                <div className="relative z-10">
                  <div className="w-14 h-14 md:w-16 md:h-16 bg-white rounded-2xl flex items-center justify-center shadow-md mb-6 md:mb-8 group-hover:scale-110 transition-transform">
                    <Mic size={32} className="text-indigo-900" />
                  </div>
                  <h3 className="text-3xl md:text-5xl font-serif font-bold text-white mb-4 group-hover:translate-x-2 transition-transform">Builder Podcast</h3>
                  <p className="text-indigo-100 text-lg md:text-xl font-medium max-w-sm">Conversations with the top 1% of the construction industry.</p>
                </div>

                <div className="relative z-10 flex items-center font-bold text-white text-lg md:text-xl group-hover:text-indigo-200 transition-colors">
                  Listen Now <ArrowRight size={24} className="ml-3 group-hover:translate-x-2 transition-transform" />
                </div>
              </Link>
            </RevealOnScroll>

            {/* 2. Pricing/Programs */}
            <RevealOnScroll delay={200}>
              <Link to="/programs" className="group relative rounded-[2rem] md:rounded-[3rem] overflow-hidden aspect-[4/5] md:aspect-auto md:h-[500px] bg-slate-50 border border-slate-200 shadow-xl hover:shadow-2xl hover:border-purple-200 hover:-translate-y-2 transition-all duration-500 flex flex-col justify-between p-8 md:p-12 w-full block">
                <div className="absolute top-0 right-0 w-80 h-80 bg-purple-100 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/3 group-hover:bg-purple-200 transition-colors"></div>
                <div className="relative z-10">
                  <div className="w-14 h-14 md:w-16 md:h-16 bg-white rounded-2xl flex items-center justify-center shadow-md mb-6 md:mb-8 group-hover:scale-110 transition-transform">
                    <Star className="text-purple-600" size={32} />
                  </div>
                  <h3 className="text-3xl md:text-5xl font-serif font-bold text-slate-900 mb-4 md:mb-6">Pricing & Programs</h3>
                  <p className="text-slate-600 text-lg md:text-xl max-w-sm">No hidden fees. Choose the growth tier that fits your business stage.</p>
                </div>
                <div className="relative z-10 flex items-center font-bold text-slate-900 text-lg md:text-xl group-hover:text-purple-600 transition-colors">
                  View Services <ArrowRight size={24} className="ml-3 group-hover:translate-x-2 transition-transform" />
                </div>
              </Link>
            </RevealOnScroll>

            {/* 3. YouTube (Links to Blog) */}
            <RevealOnScroll delay={300}>
              <Link to="/blog" className="group relative rounded-[2rem] md:rounded-[3rem] overflow-hidden aspect-[4/5] md:aspect-auto md:h-[500px] bg-[#FF0000] border border-red-600 shadow-xl hover:shadow-2xl hover:shadow-red-900/20 hover:-translate-y-2 transition-all duration-500 flex flex-col justify-between p-8 md:p-12 w-full block">
                <div className="absolute inset-0 bg-gradient-to-br from-black/20 to-transparent"></div>
                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
                <div className="relative z-10">
                  <div className="w-14 h-14 md:w-16 md:h-16 bg-white rounded-2xl flex items-center justify-center shadow-md mb-6 md:mb-8 group-hover:scale-110 transition-transform">
                    {/* Custom YouTube SVG */}
                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <rect width="24" height="24" fill="white" rx="0" className="hidden" />
                      <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z" fill="#FF0000" />
                      <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02" fill="white" />
                    </svg>
                  </div>
                  <h3 className="text-3xl md:text-5xl font-serif font-bold text-white mb-4">Watch The Strategy</h3>
                  <p className="text-white/90 text-lg md:text-xl font-medium">Deep dives on our YouTube channel.</p>
                </div>
                <div className="relative z-10 flex items-center font-bold text-white text-lg md:text-xl group-hover:text-slate-100 transition-colors">
                  Watch Now <ArrowRight size={24} className="ml-3 group-hover:translate-x-2 transition-transform" />
                </div>
              </Link>
            </RevealOnScroll>

            {/* 4. The Book */}
            <RevealOnScroll delay={400}>
              <Link to="/book" className="group relative rounded-[2rem] md:rounded-[3rem] overflow-hidden aspect-[4/5] md:aspect-auto md:h-[500px] bg-[#0F172A] border border-slate-800 shadow-xl hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 flex flex-col justify-between p-8 md:p-12 w-full block">
                {/* Abstract Book Shape */}
                <div className="absolute right-0 bottom-0 opacity-10 transform translate-x-1/4 translate-y-1/4 group-hover:scale-110 transition-transform duration-1000">
                  <BookOpen size={500} />
                </div>

                <div className="relative z-10">
                  <div className="w-14 h-14 md:w-16 md:h-16 bg-slate-800 rounded-2xl flex items-center justify-center shadow-sm mb-6 md:mb-8 border border-slate-700 group-hover:border-slate-500 transition-colors">
                    <BookOpen className="text-white" size={32} />
                  </div>
                  <h3 className="text-3xl md:text-5xl font-serif font-bold text-white mb-4 md:mb-6">Read The Guide</h3>
                  <p className="text-slate-400 text-lg md:text-xl max-w-sm">Our complete playbook for marketing a custom home business. Free download.</p>
                </div>
                <div className="relative z-10 flex items-center font-bold text-white text-lg md:text-xl group-hover:text-slate-300 transition-colors">
                  Get The Book <ArrowRight size={24} className="ml-3 group-hover:translate-x-2 transition-transform" />
                </div>
              </Link>
            </RevealOnScroll>
          </div>
        </div>
      </section >

      {/* New Case Studies Section (Below Resources) */}
      <section className="py-24 md:py-32 bg-slate-900 relative overflow-hidden">
        {/* Background Effects */}
        <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5 pointer-events-none"></div>
        <div className="absolute top-0 md:-top-[20%] right-0 md:-right-[10%] w-[600px] h-[600px] bg-purple-500/20 rounded-full blur-[100px] pointer-events-none animate-pulse"></div>
        <div className="absolute bottom-0 md:-bottom-[20%] left-0 md:-left-[10%] w-[600px] h-[600px] bg-blue-500/10 rounded-full blur-[100px] pointer-events-none"></div>

        <div className="container mx-auto px-6 relative z-10">
          {/* Removing the grey box wrapper completely */}
          <RevealOnScroll>
            <div className="text-center mb-16 md:mb-20">
              <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/10 px-4 py-1.5 rounded-full mb-6 text-purple-200 text-sm font-bold uppercase tracking-wider">
                <Star size={14} fill="currentColor" /> Case Studies
              </div>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-white mb-6">Real Results. <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">Real Builders.</span></h2>
              <p className="text-slate-300 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">See how we're helping custom builders across the country fill their pipelines.</p>
            </div>
          </RevealOnScroll>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {caseStudies.slice(0, 3).map((study) => {
              // Inject Timeline Data
              let timeline = "6 Months";
              if (study.id === 'open-prairie') timeline = "5 Months";
              if (study.id === 'schwanz') timeline = "5 Months";

              return (
                <div key={study.id} className="bg-white p-6 rounded-2xl border border-white/10 shadow-xl hover:shadow-2xl hover:shadow-purple-500/10 hover:-translate-y-2 transition-all duration-300 flex flex-col h-full relative group">
                  {/* Hover Glow Effect */}
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl opacity-0 group-hover:opacity-100 transition duration-500 blur opacity-25 -z-10"></div>

                  {study.videoUrl ? (
                    <div className="mb-6 rounded-xl overflow-hidden bg-slate-100 shadow-inner block relative group/video">
                      <div className="absolute inset-0 bg-black/10 group-hover/video:bg-transparent transition-colors pointer-events-none z-10"></div>
                      <video
                        src={study.videoUrl}
                        poster={study.imageUrl}
                        controls
                        playsInline
                        className="w-full h-auto"
                      />
                    </div>
                  ) : (
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-12 h-12 rounded-full overflow-hidden bg-slate-100 shrink-0">
                        <img src={study.imageUrl} alt={study.builderName} className="w-full h-full object-cover" />
                      </div>
                      <div>
                        <div className="font-bold text-slate-900 leading-tight">{study.builderName}</div>
                        <div className="text-sm text-slate-500">{study.location}</div>
                      </div>
                    </div>
                  )}

                  {study.videoUrl && (
                    <div className="mb-6">
                      <div className="font-bold text-slate-900 leading-tight text-xl mb-1">{study.builderName}</div>
                      <div className="text-sm text-slate-500">{study.location}</div>
                    </div>
                  )}

                  <div className="grid grid-cols-2 gap-x-4 gap-y-4 mb-6 bg-slate-50 p-4 rounded-xl border border-slate-100">
                    {study.results.slice(0, 2).map((res, i) => (
                      <div key={i}>
                        <div className="text-[10px] text-slate-500 uppercase tracking-wide font-bold mb-1">{res.label}</div>
                        <div className="font-bold text-slate-900 text-lg leading-none">{res.value}</div>
                      </div>
                    ))}
                    {/* Injected Timeline */}
                    <div className="col-span-2 border-t border-slate-200 pt-3 mt-1">
                      <div className="text-[10px] text-slate-500 uppercase tracking-wide font-bold mb-1">Timeline</div>
                      <div className="font-bold text-slate-900 text-lg leading-none">{timeline}</div>
                    </div>
                  </div>

                  {study.testimonial && study.id !== 'open-prairie' && (
                    <blockquote className="text-slate-600 text-sm italic border-l-2 border-purple-200 pl-4 mb-6 flex-grow">
                      "{study.testimonial.quote}"
                    </blockquote>
                  )}

                  {/* Spacer for cards without testimonial to push button down if needed, or just let flex-grow handle it */}
                  {(!study.testimonial || study.id === 'open-prairie') && <div className="flex-grow"></div>}

                  <Link to={`/case-studies`} className="block w-full text-center mt-auto py-3 rounded-xl border border-purple-200 text-purple-600 font-bold text-sm hover:bg-purple-600 hover:text-white transition-colors">
                    View Full Case Study
                  </Link>
                </div>
              )
            })}
          </div>

          <div className="text-center mt-12">
            <Link to="/case-studies" className="inline-flex items-center text-slate-900 bg-white border-2 border-slate-200 px-8 py-4 rounded-full font-bold text-lg hover:bg-purple-50 hover:border-purple-200 hover:text-purple-900 transition-all hover:-translate-y-1 shadow-lg">
              View All Case Studies <ArrowRight className="ml-2" />
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 md:py-32 bg-slate-50">
        <div className="container mx-auto px-6">
          <RevealOnScroll>
            <h2 className="text-4xl md:text-6xl font-serif font-bold text-slate-900 text-center mb-16">Common Questions</h2>
          </RevealOnScroll>

          <div className="max-w-4xl mx-auto">
            {faqData.map((item, index) => (
              <RevealOnScroll key={index} delay={index * 100}>
                <AccordionItem
                  question={item.question}
                  answer={item.answer}
                  isOpen={openIndex === index}
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                />
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-32 bg-slate-900 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-purple-900/20 to-transparent"></div>
        <div className="container mx-auto px-6 relative z-10 text-center">
          <RevealOnScroll>
            <h2 className="text-4xl md:text-7xl font-serif font-bold text-white mb-6 md:mb-8">
              Ready to fill your pipeline with <br /> dream projects?
            </h2>
            <p className="text-slate-400 text-xl md:text-2xl mb-10 md:mb-12 max-w-3xl mx-auto font-light">
              Schedule a free consultation. We'll audit your current online presence and show you exactly how to win more bids.
            </p>
            <Link to="/contact" className="inline-flex items-center gap-3 px-10 py-5 md:px-12 md:py-6 rounded-full bg-white text-slate-900 font-bold text-lg md:text-xl hover:bg-gradient-to-r hover:from-purple-600 hover:to-pink-600 hover:text-white transition-all duration-300 hover:scale-105 shadow-2xl">
              Let's Talk <ArrowRight size={24} />
            </Link>
          </RevealOnScroll>
        </div>
      </section >
    </div >
  );
};

export default Home;