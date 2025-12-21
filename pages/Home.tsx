import React from 'react';
import { Link } from 'react-router-dom';
import { Star, Layout, TrendingUp, PenTool, ArrowRight, Play, BookOpen, BarChart3, Youtube, ChevronRight } from 'lucide-react';

const Home: React.FC = () => {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="pt-32 pb-20 lg:pt-48 lg:pb-32 relative overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-slate-50 border border-slate-200 px-4 py-2 rounded-full mb-8 animate-fade-in-up">
              <div className="flex text-yellow-500">
                <Star size={16} fill="currentColor" />
                <Star size={16} fill="currentColor" />
                <Star size={16} fill="currentColor" />
                <Star size={16} fill="currentColor" />
                <Star size={16} fill="currentColor" />
              </div>
              <span className="text-sm font-medium text-slate-600">Rated 4.9/5 by 100+ Builders</span>
            </div>

            <h1 className="text-5xl lg:text-7xl font-serif font-bold text-slate-900 leading-[1.1] mb-8">
              We help custom builders <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-700 via-fuchsia-600 to-pink-600">
                land premium projects.
              </span>
            </h1>

            <p className="text-xl text-slate-600 mb-10 max-w-2xl mx-auto leading-relaxed">
              BuilderProject combines strategy, design, and digital innovation to help you stop chasing leads and start building your backlog.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                to="/contact"
                className="w-full sm:w-auto px-8 py-4 rounded-full bg-slate-900 text-white font-bold text-lg hover:bg-gradient-to-r hover:from-purple-700 hover:to-pink-600 transition-all duration-300 shadow-xl hover:shadow-purple-500/25"
              >
                Book a Strategy Call
              </Link>
              <Link
                to="/case-studies"
                className="w-full sm:w-auto px-8 py-4 rounded-full bg-white text-slate-900 border border-slate-200 font-bold text-lg hover:border-purple-200 hover:bg-purple-50 transition-all duration-300 flex items-center justify-center gap-2"
              >
                <Play size={18} fill="currentColor" className="text-purple-600" />
                See Our Work
              </Link>
            </div>
          </div>
        </div>

        {/* Hero Abstract Background */}
        <div className="absolute top-0 left-0 w-full h-full z-0 pointer-events-none opacity-30">
          <div className="absolute top-[-20%] right-[-10%] w-[800px] h-[800px] bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
          <div className="absolute top-[-20%] left-[-10%] w-[800px] h-[800px] bg-pink-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
        </div>
      </section>

      {/* Hero Grid / Case Studies Preview */}
      <section className="pb-24 overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 h-[600px] md:h-[500px]">
            {/* Item 1 - Luxury Interior */}
            <div className="group relative rounded-3xl overflow-hidden h-full">
              <img
                src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=1600&auto=format&fit=crop"
                alt="Modern luxury kitchen interior"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent p-8 flex flex-col justify-end">
                <div className="text-white text-5xl font-bold mb-2">150%</div>
                <p className="text-white/80 font-medium">Increase in qualified leads</p>
                <Link to="/case-studies" className="mt-4 inline-flex items-center text-white font-bold border-b border-white pb-1 w-max">See Project</Link>
              </div>
            </div>

            {/* Item 2 - Central Focus - Construction/Builder */}
            <div className="md:col-span-1 group relative rounded-3xl overflow-hidden h-full bg-slate-900 flex items-center justify-center">
              <div className="absolute inset-0 opacity-60">
                <img
                  src="https://images.unsplash.com/photo-1613490493576-7fde63acd811?q=80&w=1600&auto=format&fit=crop"
                  alt="Luxury Modern Home Exterior"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="absolute inset-0 bg-slate-900/40"></div>
              <div className="relative z-10 text-center p-8">
                <div className="w-20 h-20 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center mx-auto mb-6 cursor-pointer hover:bg-white/20 transition-all">
                  <Play size={32} className="text-white ml-1" fill="currentColor" />
                </div>
                <p className="text-2xl font-serif text-white italic">"Project Alpha transformed our digital presence completely."</p>
              </div>
            </div>

            {/* Item 3 - Architectural Detail */}
            <div className="group relative rounded-3xl overflow-hidden h-full">
              <img
                src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1600&auto=format&fit=crop"
                alt="Architectural detail"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent p-8 flex flex-col justify-end">
                <div className="flex gap-1 mb-4">
                  {[1, 2, 3, 4, 5].map(i => <Star key={i} size={20} className="text-yellow-400" fill="currentColor" />)}
                </div>
                <p className="text-white text-xl font-serif font-medium leading-tight mb-4">"Smart ideas, beautiful execution. BuilderProject delivers."</p>
                <Link to="/case-studies" className="bg-white/20 backdrop-blur-md text-white px-6 py-2 rounded-full font-bold text-sm w-max hover:bg-white hover:text-slate-900 transition-all">View Case Study</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12 text-center md:text-left">
            <div>
              <h3 className="text-5xl font-serif font-bold text-slate-900 mb-2">97%</h3>
              <p className="text-slate-500 font-medium">Happy Clients Served</p>
            </div>
            <div>
              <h3 className="text-5xl font-serif font-bold text-slate-900 mb-2">150+</h3>
              <p className="text-slate-500 font-medium">Builders Scaled</p>
            </div>
            <div>
              <h3 className="text-5xl font-serif font-bold text-slate-900 mb-2">$50M+</h3>
              <p className="text-slate-500 font-medium">Revenue Generated</p>
            </div>
            <div>
              <h3 className="text-5xl font-serif font-bold text-slate-900 mb-2">300%</h3>
              <p className="text-slate-500 font-medium">Avg. ROI</p>
            </div>
          </div>
        </div>
      </section>

      {/* Navigation Grid (Replacing Services Preview) */}
      <section className="py-32">
        <div className="container mx-auto px-6">

          {/* Services Banner */}
          <div className="mb-20">
            <div className="bg-slate-900 rounded-[3rem] p-12 md:p-24 text-center relative overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-900/50 to-pink-900/50 group-hover:opacity-75 transition-opacity"></div>
              <img
                src="https://images.unsplash.com/photo-1510627489930-0c1b0dc58e85?q=80&w=1600&auto=format&fit=crop"
                alt="Services Background"
                className="absolute inset-0 w-full h-full object-cover -z-10 opacity-30 group-hover:scale-105 transition-transform duration-700"
              />
              <div className="relative z-10">
                <h2 className="text-4xl md:text-6xl font-serif font-bold text-white mb-8">Everything You Need To Grow</h2>
                <p className="text-xl text-slate-300 max-w-2xl mx-auto mb-10">
                  From website design to automated lead generation, we offer a comprehensive suite of services dedicated to specifically to custom home builders.
                </p>
                <Link to="/services" className="inline-flex items-center bg-white text-slate-900 px-10 py-5 rounded-full font-bold text-lg hover:bg-slate-200 transition-all hover:scale-105">
                  View All Services <ChevronRight className="ml-2" />
                </Link>
              </div>
            </div>
          </div>

          {/* Resources Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {/* 1. Case Studies */}
            <Link to="/case-studies" className="group relative rounded-[2.5rem] overflow-hidden aspect-[4/3] md:aspect-auto md:h-[400px] border border-slate-200 shadow-sm hover:shadow-2xl transition-all duration-500">
              <img
                src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=800&auto=format&fit=crop"
                alt="Case Studies"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent p-8 md:p-12 flex flex-col justify-end">
                <div className="flex items-center gap-3 text-purple-400 mb-2 font-bold uppercase tracking-wider text-sm">
                  <BarChart3 size={18} /> Proven Results
                </div>
                <h3 className="text-3xl font-serif font-bold text-white mb-2 group-hover:translate-x-2 transition-transform">See Our Case Studies</h3>
                <p className="text-slate-300">Real numbers from real builders scaling to $10M+.</p>
              </div>
            </Link>

            {/* 2. Pricing/Programs */}
            <Link to="/programs" className="group relative rounded-[2.5rem] overflow-hidden aspect-[4/3] md:aspect-auto md:h-[400px] bg-slate-50 border border-slate-200 shadow-sm hover:shadow-2xl hover:border-purple-200 transition-all duration-500 flex flex-col justify-between p-8 md:p-12">
              <div className="absolute top-0 right-0 w-64 h-64 bg-purple-100 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2 group-hover:bg-purple-200 transition-colors"></div>
              <div className="relative z-10">
                <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center shadow-sm mb-6 group-hover:scale-110 transition-transform">
                  <Star className="text-purple-600" size={28} />
                </div>
                <h3 className="text-3xl font-serif font-bold text-slate-900 mb-4">Transparent Pricing</h3>
                <p className="text-slate-600">No hidden fees. Choose the growth tier that fits your business stage.</p>
              </div>
              <div className="relative z-10 flex items-center font-bold text-slate-900 group-hover:text-purple-600 transition-colors">
                View Programs <ArrowRight size={20} className="ml-2 group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>

            {/* 3. YouTube */}
            <a href="https://youtube.com/@builderproject" target="_blank" rel="noopener noreferrer" className="group relative rounded-[2.5rem] overflow-hidden aspect-[4/3] md:aspect-auto md:h-[400px] bg-[#FF0000] border border-red-600 shadow-sm hover:shadow-2xl hover:shadow-red-900/20 transition-all duration-500 flex items-center justify-center">
              <div className="absolute inset-0 bg-gradient-to-br from-black/20 to-transparent"></div>
              <div className="text-center relative z-10 text-white">
                <div className="w-20 h-20 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Youtube size={40} fill="currentColor" />
                </div>
                <h3 className="text-3xl font-serif font-bold mb-2">Watch The Strategy</h3>
                <p className="text-white/80">Detailed breakdowns on our YouTube channel.</p>
              </div>
            </a>

            {/* 4. The Book */}
            <Link to="/book" className="group relative rounded-[2.5rem] overflow-hidden aspect-[4/3] md:aspect-auto md:h-[400px] bg-[#0F172A] border border-slate-800 shadow-sm hover:shadow-2xl transition-all duration-500 flex flex-col justify-between p-8 md:p-12">
              {/* Abstract Book Shape */}
              <div className="absolute right-0 bottom-0 opacity-10 transform translate-x-1/4 translate-y-1/4 group-hover:scale-110 transition-transform duration-700">
                <BookOpen size={400} />
              </div>

              <div className="relative z-10">
                <div className="w-14 h-14 bg-slate-800 rounded-2xl flex items-center justify-center shadow-sm mb-6 border border-slate-700 group-hover:border-slate-500 transition-colors">
                  <BookOpen className="text-white" size={28} />
                </div>
                <h3 className="text-3xl font-serif font-bold text-white mb-4">Read The Guide</h3>
                <p className="text-slate-400">Our complete playbook for marketing a custom home business. Free download.</p>
              </div>
              <div className="relative z-10 flex items-center font-bold text-white group-hover:text-slate-300 transition-colors">
                Get The Book <ArrowRight size={20} className="ml-2 group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-slate-900 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-purple-900/20 to-transparent"></div>
        <div className="container mx-auto px-6 relative z-10 text-center">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mb-6">
            Ready to fill your pipeline with <br /> dream projects?
          </h2>
          <p className="text-slate-400 text-xl mb-10 max-w-2xl mx-auto">
            Schedule a free consultation. We'll audit your current online presence and show you exactly how to win more bids.
          </p>
          <Link to="/contact" className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-white text-slate-900 font-bold hover:bg-gradient-to-r hover:from-purple-600 hover:to-pink-600 hover:text-white transition-all duration-300">
            Let's Talk <ArrowRight size={20} />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;