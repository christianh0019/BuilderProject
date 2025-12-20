import React from 'react';
import { Link } from 'react-router-dom';
import { Star, Layout, TrendingUp, PenTool, ArrowRight, Play } from 'lucide-react';

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
              <span className="text-sm font-medium text-slate-600">Rated 4.9/5 by 175+ Builders</span>
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
                  {[1,2,3,4,5].map(i => <Star key={i} size={20} className="text-yellow-400" fill="currentColor"/>)}
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

      {/* Services Preview */}
      <section className="py-32">
        <div className="container mx-auto px-6">
          <div className="flex flex-col gap-24">
            
            {/* Feature 1 */}
            <div className="grid md:grid-cols-2 gap-16 items-center">
              <div className="order-2 md:order-1">
                <div className="mb-6 p-4 bg-purple-50 rounded-2xl w-max">
                  <Layout size={32} className="text-purple-600" />
                </div>
                <h3 className="text-4xl font-serif font-bold text-slate-900 mb-6">Custom Website Design & Build</h3>
                <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                  We create visually stunning, user-focused websites that bring your brand to life. Your website isn't just a brochure; it's your 24/7 salesperson, optimized for speed, mobile, and converting visitors into homeowners.
                </p>
                <Link to="/services" className="font-bold text-slate-900 border-b-2 border-slate-900 pb-1 hover:text-purple-600 hover:border-purple-600 transition-colors">Explore Web Design</Link>
              </div>
              <div className="order-1 md:order-2 bg-slate-100 rounded-[3rem] p-8 h-[400px] relative overflow-hidden group">
                  <img 
                    src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1600&auto=format&fit=crop" 
                    alt="Web Design for Builders" 
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
                  />
              </div>
            </div>

            {/* Feature 2 */}
            <div className="grid md:grid-cols-2 gap-16 items-center">
              <div className="bg-slate-100 rounded-[3rem] p-8 h-[400px] relative overflow-hidden group">
                  <img 
                    src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1600&auto=format&fit=crop" 
                    alt="SEO Analytics" 
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
                  />
              </div>
              <div>
                <div className="mb-6 p-4 bg-pink-50 rounded-2xl w-max">
                  <TrendingUp size={32} className="text-pink-600" />
                </div>
                <h3 className="text-4xl font-serif font-bold text-slate-900 mb-6">SEO & Paid Advertising</h3>
                <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                  Dominate your local market. We ensure your business appears exactly when high-net-worth clients are searching for custom home builders. From Google Ads to organic SEO, we drive qualified traffic.
                </p>
                <Link to="/services" className="font-bold text-slate-900 border-b-2 border-slate-900 pb-1 hover:text-purple-600 hover:border-purple-600 transition-colors">View Growth Strategies</Link>
              </div>
            </div>

            {/* Feature 3 */}
            <div className="grid md:grid-cols-2 gap-16 items-center">
              <div className="order-2 md:order-1">
                <div className="mb-6 p-4 bg-purple-50 rounded-2xl w-max">
                  <PenTool size={32} className="text-purple-600" />
                </div>
                <h3 className="text-4xl font-serif font-bold text-slate-900 mb-6">Brand Storytelling & Content</h3>
                <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                  Your projects are masterpieces; your marketing should be too. We craft compelling narratives, manage your portfolio photography, and create content that builds trust before you even meet the client.
                </p>
                <Link to="/services" className="font-bold text-slate-900 border-b-2 border-slate-900 pb-1 hover:text-purple-600 hover:border-purple-600 transition-colors">See Content Services</Link>
              </div>
              <div className="order-1 md:order-2 bg-slate-100 rounded-[3rem] p-8 h-[400px] relative overflow-hidden group">
                   <img 
                    src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=1600&auto=format&fit=crop" 
                    alt="Interior Design Content" 
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
                   />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-slate-900 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-purple-900/20 to-transparent"></div>
        <div className="container mx-auto px-6 relative z-10 text-center">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mb-6">
            Ready to fill your pipeline with <br/> dream projects?
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