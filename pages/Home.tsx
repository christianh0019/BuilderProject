import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { Star, ArrowRight, Play, BookOpen, BarChart3, Youtube, ChevronRight, ChevronDown } from 'lucide-react';

const RevealOnScroll = ({ children, className = "", delay = 0 }: { children: React.ReactNode, className?: string, delay?: number }) => {
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

  // Inject JSON-LD for SEO
  useEffect(() => {
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": faqData.map(item => ({
        "@type": "Question",
        "name": item.question,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": item.answer
        }
      }))
    });
    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, []);

  return (
    <div className="bg-white font-sans text-slate-900 selection:bg-purple-200 selection:text-purple-900">

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
              {/* Reverted font size to 5xl/7xl */}
              <h1 className="text-5xl lg:text-7xl font-serif font-bold text-slate-900 leading-[1.1] mb-10 tracking-tight">
                We help custom home builders <br className="hidden md:block" /> and remodelers <br className="hidden md:block" />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-700 via-fuchsia-600 to-pink-600">
                  land premium projects.
                </span>
              </h1>
            </RevealOnScroll>

            <RevealOnScroll delay={200}>
              <p className="text-xl lg:text-2xl text-slate-500 mb-14 max-w-3xl mx-auto leading-relaxed font-light">
                BuilderProject combines elite strategy, design, and digital innovation to help you stop chasing leads and start building your backlog.
              </p>
            </RevealOnScroll>

            <RevealOnScroll delay={300}>
              <div className="mb-12 flex flex-col lg:flex-row items-center justify-center gap-4 lg:gap-8 text-base md:text-lg font-medium text-slate-700">
                <div className="flex items-center gap-3">
                  <div className="bg-green-100 text-green-700 rounded-full p-1.5 shadow-sm">
                    <ChevronDown size={20} className="stroke-[3]" />
                  </div>
                  <span>Guaranteed Results</span>
                </div>
                <div className="hidden lg:block w-px h-6 bg-slate-300"></div>
                <div className="flex items-center gap-3">
                  <div className="bg-green-100 text-green-700 rounded-full p-1.5 shadow-sm">
                    <ChevronDown size={20} className="stroke-[3]" />
                  </div>
                  <span>30-Day Money Back</span>
                </div>
                <div className="hidden lg:block w-px h-6 bg-slate-300"></div>
                <div className="flex items-center gap-3">
                  <div className="bg-green-100 text-green-700 rounded-full p-1.5 shadow-sm">
                    <ChevronDown size={20} className="stroke-[3]" />
                  </div>
                  <span>You Own Every Asset</span>
                </div>
              </div>

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
              {/* Item 1 - Luxury Interior */}
              <div className="group relative rounded-[2rem] md:rounded-[2.5rem] overflow-hidden shadow-2xl h-[400px] md:h-full">
                <img
                  src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=1600&auto=format&fit=crop"
                  alt="Modern luxury kitchen interior"
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent p-8 md:p-10 flex flex-col justify-end">
                  <div className="text-white text-5xl md:text-6xl font-serif font-bold mb-2">150%</div>
                  <p className="text-white/80 font-medium text-lg">Increase in qualified leads</p>
                  <Link to="/case-studies" className="mt-6 inline-flex items-center text-white font-bold border-b-2 border-white pb-1 w-max text-lg hover:text-purple-300 hover:border-purple-300 transition-colors">See Project</Link>
                </div>
              </div>

              {/* Item 2 - Central Focus - Construction/Builder */}
              <div className="md:col-span-1 group relative rounded-[2rem] md:rounded-[2.5rem] overflow-hidden bg-slate-900 flex items-center justify-center shadow-2xl h-[400px] md:h-full">
                <div className="absolute inset-0 opacity-60">
                  <img
                    src="https://images.unsplash.com/photo-1613490493576-7fde63acd811?q=80&w=1600&auto=format&fit=crop"
                    alt="Luxury Modern Home Exterior"
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                  />
                </div>
                <div className="absolute inset-0 bg-slate-900/40"></div>
                <div className="relative z-10 text-center p-8 md:p-10">
                  <div className="w-20 h-20 md:w-24 md:h-24 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center mx-auto mb-6 md:mb-8 cursor-pointer hover:bg-white/20 transition-all hover:scale-110">
                    <Play size={40} className="text-white ml-2" fill="currentColor" />
                  </div>
                  <p className="text-2xl md:text-3xl font-serif text-white italic leading-tight">"Project Alpha transformed our digital presence completely."</p>
                </div>
              </div>

              {/* Item 3 - Architectural Detail */}
              <div className="group relative rounded-[2rem] md:rounded-[2.5rem] overflow-hidden shadow-2xl h-[400px] md:h-full">
                <img
                  src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1600&auto=format&fit=crop"
                  alt="Architectural detail"
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent p-8 md:p-10 flex flex-col justify-end">
                  <div className="flex gap-2 mb-4">
                    {[1, 2, 3, 4, 5].map(i => <Star key={i} size={24} className="text-yellow-400" fill="currentColor" />)}
                  </div>
                  <p className="text-white text-xl md:text-2xl font-serif font-medium leading-tight mb-6">"Smart ideas, beautiful execution. A true partner."</p>
                  <Link to="/case-studies" className="bg-white/20 backdrop-blur-md text-white px-8 py-3 rounded-full font-bold text-base w-max hover:bg-white hover:text-slate-900 transition-all">View Case Study</Link>
                </div>
              </div>
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 md:py-32 bg-slate-50">
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
      </section>

      {/* Navigation Grid (Replacing Services Preview) */}
      <section className="py-20 md:py-32 bg-white">
        <div className="container mx-auto px-6">

          {/* Services Banner */}
          <div className="mb-16 md:mb-24">
            <RevealOnScroll>
              <div className="bg-slate-900 rounded-[2rem] md:rounded-[3rem] p-8 md:p-32 text-center relative overflow-hidden group shadow-2xl">
                <div className="absolute inset-0 bg-gradient-to-r from-purple-900/60 to-pink-900/60 group-hover:bg-opacity-80 transition-all"></div>
                <img
                  src="https://images.unsplash.com/photo-1510627489930-0c1b0dc58e85?q=80&w=2000&auto=format&fit=crop"
                  alt="Services Background"
                  className="absolute inset-0 w-full h-full object-cover -z-10 opacity-40 group-hover:scale-105 transition-transform duration-1000"
                />
                <div className="relative z-10 flex flex-col items-center">
                  <span className="inline-block py-2 px-6 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white text-xs md:text-sm font-bold tracking-widest uppercase mb-6 md:mb-8">Comprehensive Growth</span>
                  <h2 className="text-4xl md:text-8xl font-serif font-bold text-white mb-6 md:mb-10 leading-tight">Everything You Need <br /> To Dominate</h2>
                  <p className="text-lg md:text-2xl text-slate-200 max-w-3xl mx-auto mb-10 md:mb-14 font-light">
                    From world-class website design to automated lead generation, we offer a comprehensive suite of services dedicated specifically to custom home builders.
                  </p>
                  <Link to="/services" className="inline-flex items-center bg-white text-slate-900 px-8 py-4 md:px-12 md:py-6 rounded-full font-bold text-lg md:text-xl hover:bg-slate-200 transition-all hover:scale-105 hover:shadow-2xl">
                    View All Services <ChevronRight className="ml-2" />
                  </Link>
                </div>
              </div>
            </RevealOnScroll>
          </div>

          {/* Resources Grid */}
          <div className="grid md:grid-cols-2 gap-6 md:gap-10">
            {/* 1. Case Studies */}
            <RevealOnScroll delay={100}>
              <Link to="/case-studies" className="group relative rounded-[2rem] md:rounded-[3rem] overflow-hidden aspect-[4/5] md:aspect-auto md:h-[500px] border border-slate-200 shadow-xl hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 w-full block flex flex-col justify-between p-8 md:p-12">
                <img
                  src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1200&auto=format&fit=crop"
                  alt="Case Studies"
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent"></div>

                <div className="relative z-10">
                  <div className="flex items-center gap-3 text-purple-400 mb-4 font-bold uppercase tracking-wider text-xs md:text-sm">
                    <BarChart3 size={20} /> Proven Results
                  </div>
                  <h3 className="text-3xl md:text-5xl font-serif font-bold text-white mb-4 group-hover:translate-x-2 transition-transform">See Real Results</h3>
                  <p className="text-slate-300 text-base md:text-lg">Detailed breakdowns of how we scaled builders to $10M+.</p>
                </div>

                <div className="relative z-10 flex items-center font-bold text-white text-lg md:text-xl group-hover:text-purple-300 transition-colors">
                  View Case Studies <ArrowRight size={24} className="ml-3 group-hover:translate-x-2 transition-transform" />
                </div>
              </Link>
            </RevealOnScroll>

            {/* 2. Pricing/Programs */}
            <RevealOnScroll delay={200}>
              <Link to="/services" className="group relative rounded-[2rem] md:rounded-[3rem] overflow-hidden aspect-[4/5] md:aspect-auto md:h-[500px] bg-slate-50 border border-slate-200 shadow-xl hover:shadow-2xl hover:border-purple-200 hover:-translate-y-2 transition-all duration-500 flex flex-col justify-between p-8 md:p-12 w-full block">
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

            {/* 3. YouTube */}
            <RevealOnScroll delay={300}>
              <a href="https://www.youtube.com/@builderprojectco" target="_blank" rel="noopener noreferrer" className="group relative rounded-[2rem] md:rounded-[3rem] overflow-hidden aspect-[4/5] md:aspect-auto md:h-[500px] bg-[#FF0000] border border-red-600 shadow-xl hover:shadow-2xl hover:shadow-red-900/20 hover:-translate-y-2 transition-all duration-500 flex flex-col justify-between p-8 md:p-12 w-full block">
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
              </a>
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
      </section>
    </div>
  );
};

export default Home;