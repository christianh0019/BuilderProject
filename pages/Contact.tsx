import React from 'react';

const Contact: React.FC = () => {
  return (
    <div className="pt-32 pb-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-20">
          <div>
            <h1 className="text-5xl font-serif font-bold text-slate-900 mb-6">Let's build something great.</h1>
            <p className="text-xl text-slate-600 mb-12">
              Ready to take your construction business to the next level? Fill out the form, and our team will be in touch within 24 hours to schedule your strategy session.
            </p>

            <div className="space-y-8">
              <div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">Office</h3>
                <p className="text-slate-600">123 Builder Lane, Suite 400<br/>Austin, TX 78701</p>
              </div>
              <div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">Direct Contact</h3>
                <p className="text-slate-600">hello@builderproject.co<br/>(555) 123-4567</p>
              </div>
            </div>
          </div>

          <div className="bg-slate-50 p-8 md:p-12 rounded-3xl border border-slate-100 shadow-xl shadow-slate-200/50">
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-2">First Name</label>
                  <input type="text" className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 bg-white" placeholder="John" />
                </div>
                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-2">Last Name</label>
                  <input type="text" className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 bg-white" placeholder="Doe" />
                </div>
              </div>

              <div>
                <label className="block text-sm font-bold text-slate-700 mb-2">Company Name</label>
                <input type="text" className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 bg-white" placeholder="Doe Custom Homes" />
              </div>

              <div>
                <label className="block text-sm font-bold text-slate-700 mb-2">Email Address</label>
                <input type="email" className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 bg-white" placeholder="john@doeconstruction.com" />
              </div>

              <div>
                <label className="block text-sm font-bold text-slate-700 mb-2">Service Interest</label>
                <select className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 bg-white text-slate-600">
                  <option>Select a service...</option>
                  <option>Website Design</option>
                  <option>SEO & Ads</option>
                  <option>Content Marketing</option>
                  <option>Full Marketing Suite</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-bold text-slate-700 mb-2">Message</label>
                <textarea rows={4} className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 bg-white" placeholder="Tell us about your goals..."></textarea>
              </div>

              <button className="w-full bg-slate-900 text-white font-bold py-4 rounded-xl hover:bg-gradient-to-r hover:from-purple-700 hover:to-pink-600 transition-all duration-300">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;