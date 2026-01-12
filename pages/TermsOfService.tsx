import React from 'react';
import SimpleHeader from '../components/SimpleHeader';
import { Helmet } from 'react-helmet-async';

const TermsOfService: React.FC = () => {
    return (
        <div className="bg-white min-h-screen text-slate-800">
            <Helmet>
                <title>Terms of Service - BuilderProject</title>
                <meta name="description" content="Terms of Service for BuilderProject." />
            </Helmet>

            <div className="container mx-auto px-6 py-40 max-w-4xl">
                <h1 className="text-4xl font-serif font-bold text-slate-900 mb-8">Terms of Service</h1>
                <p className="mb-4">Last Updated: {new Date().toLocaleDateString()}</p>

                <div className="space-y-6 text-slate-600 leading-relaxed">
                    <section>
                        <h2 className="text-2xl font-bold text-slate-800 mb-3">1. Agreement to Terms</h2>
                        <p>
                            These Terms of Service constitute a legally binding agreement made between you, whether personally or on behalf of an entity (“you”) and BuilderProject ("we," "us" or "our"), concerning your access to and use of our website and services.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-slate-800 mb-3">2. Intellectual Property Rights</h2>
                        <p>
                            Unless otherwise indicated, the Site and services are our proprietary property and all source code, databases, functionality, software, website designs, audio, video, text, photographs, and graphics on the Site (collectively, the “Content”) and the trademarks, service marks, and logos contained therein (the “Marks”) are owned or controlled by us or licensed to us, and are protected by copyright and trademark laws.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-slate-800 mb-3">3. User Representations</h2>
                        <p>
                            By using the Site, you represent and warrant that: (1) all registration information you submit will be true, accurate, current, and complete; (2) you will maintain the accuracy of such information and promptly update such registration information as necessary; (3) you have the legal capacity and you agree to comply with these Terms of Service.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-slate-800 mb-3">4. Prohibited Activities</h2>
                        <p>
                            You may not access or use the Site for any purpose other than that for which we make the Site available. The Site may not be used in connection with any commercial endeavors except those that are specifically endorsed or approved by us.
                        </p>
                    </section>
                    <section>
                        <h2 className="text-2xl font-bold text-slate-800 mb-3">5. Termination</h2>
                        <p>
                            We may terminate or suspend your account and bar access to the Service immediately, without prior notice or liability, under our sole discretion, for any reason whatsoever and without limitation, including but not limited to a breach of the Terms.
                        </p>
                    </section>
                </div>
            </div>
        </div>
    );
};

export default TermsOfService;
