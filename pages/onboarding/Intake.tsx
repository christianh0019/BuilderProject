
import React, { useState } from 'react';
import { ArrowLeft, Building2, Globe, Users, DollarSign, Target, Loader2, CheckCircle2 } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import SimpleHeader from '../../components/SimpleHeader';

const Intake: React.FC = () => {
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);

    // We can reuse the existing webhook or a new one. Using the functional one for now.
    const WEBHOOK_URL = 'https://services.leadconnectorhq.com/hooks/HllUVzV8V6VFH4nUuq4W/webhook-trigger/fad0a645-e084-4b96-8216-6e72e76b8f98';

    const [formData, setFormData] = useState({
        businessName: '',
        friendlyBusinessName: '',
        ein: '',
        businessType: '',
        website: '',
        address: '',
        city: '',
        state: '',
        zip: '',
        currentRevenue: '',
        goalRevenue: '',
        primaryContactName: '',
        primaryContactEmail: '',
        primaryContactPhone: '',
        marketingBudget: ''
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);

        // Map to snake_case for GHL
        const payload = {
            company_name: formData.businessName,
            friendly_business_name: formData.friendlyBusinessName,
            ein: formData.ein,
            business_type: formData.businessType,
            website: formData.website,
            address: formData.address, // Matches EIN Document address
            city: formData.city,
            state: formData.state,
            zip: formData.zip,
            revenue: formData.currentRevenue,
            goal_revenue: formData.goalRevenue,
            full_name: formData.primaryContactName,
            email: formData.primaryContactEmail,
            phone: formData.primaryContactPhone,
            marketing_spend: formData.marketingBudget,
            source: 'onboarding_intake'
        };

        try {
            await fetch(WEBHOOK_URL, {
                method: 'POST',
                mode: 'no-cors', // Ensure delivery even if opaque
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(payload)
            });

            // Always proceed on no-cors
            navigate('/onboarding/booking');
        } catch (error) {
            console.error('Error submitting intake:', error);
            alert('Something went wrong. Please try again.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="min-h-screen bg-slate-50 font-sans selection:bg-purple-200 selection:text-purple-900 pb-20">
            <SimpleHeader />

            <div className="max-w-3xl mx-auto px-6 pt-24">
                {/* Progress Header */}
                <div className="mb-10 text-center">
                    <div className="inline-flex items-center gap-2 text-slate-400 text-sm font-bold uppercase tracking-wider mb-4">
                        <span className="text-purple-600">Step 1 of 3</span>
                        <span>•</span>
                        <span>Intake Form</span>
                    </div>
                    <h1 className="text-3xl md:text-4xl font-serif font-bold text-slate-900">
                        Tell us about your business.
                    </h1>
                </div>

                <div className="bg-white rounded-3xl shadow-xl border border-slate-100 overflow-hidden">
                    <form onSubmit={handleSubmit} className="p-8 md:p-12 space-y-10">

                        {/* Section 1: Business Info */}
                        <div className="space-y-6">
                            <div className="flex items-center gap-3 text-slate-900 font-bold text-xl border-b border-slate-100 pb-4">
                                <Building2 className="text-purple-600" />
                                <h3>Business Details</h3>
                            </div>

                            <div className="grid md:grid-cols-2 gap-6">
                                <div className="col-span-2">
                                    <label className="block text-sm font-bold text-slate-700 mb-2">Legal Business Name (as on EIN)</label>
                                    <input required name="businessName" value={formData.businessName} onChange={handleChange} type="text" className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:border-purple-500 bg-slate-50 focus:bg-white transition-colors" placeholder="e.g. Acme Builders LLC" />
                                </div>
                                <div className="col-span-2">
                                    <label className="block text-sm font-bold text-slate-700 mb-2">Friendly Business Name (DBA)</label>
                                    <input name="friendlyBusinessName" value={formData.friendlyBusinessName} onChange={handleChange} type="text" className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:border-purple-500 bg-slate-50 focus:bg-white transition-colors" placeholder="e.g. Acme Homes" />
                                </div>
                                <div>
                                    <label className="block text-sm font-bold text-slate-700 mb-2">Registered Business Type</label>
                                    <select required name="businessType" value={formData.businessType} onChange={handleChange} className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:border-purple-500 bg-slate-50 focus:bg-white transition-colors">
                                        <option value="">Select type...</option>
                                        <option value="LLC">LLC</option>
                                        <option value="Corporation">Corporation</option>
                                        <option value="Sole Proprietorship">Sole Proprietorship</option>
                                        <option value="Partnership">Partnership</option>
                                        <option value="Non-Profit">Non-Profit</option>
                                    </select>
                                </div>
                                <div>
                                    <label className="block text-sm font-bold text-slate-700 mb-2">EIN / CCN / BN Number</label>
                                    <input required name="ein" value={formData.ein} onChange={handleChange} type="text" className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:border-purple-500 bg-slate-50 focus:bg-white transition-colors" placeholder="For A2P Verification" />
                                </div>

                                <div className="col-span-2">
                                    <label className="block text-sm font-bold text-slate-700 mb-2">Website URL</label>
                                    <div className="relative">
                                        <Globe className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                                        <input name="website" value={formData.website} onChange={handleChange} type="text" className="w-full pl-12 pr-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:border-purple-500 bg-slate-50 focus:bg-white transition-colors" placeholder="https://..." />
                                    </div>
                                </div>
                                <div className="col-span-2">
                                    <label className="block text-sm font-bold text-slate-700 mb-2">
                                        Mailing Address <span className="text-slate-400 font-normal ml-1">(Must match EIN Document)</span>
                                    </label>
                                    <input required name="address" value={formData.address} onChange={handleChange} type="text" className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:border-purple-500 bg-slate-50 focus:bg-white transition-colors" placeholder="Street Address" />
                                </div>
                                <div>
                                    <label className="block text-sm font-bold text-slate-700 mb-2">City</label>
                                    <input required name="city" value={formData.city} onChange={handleChange} type="text" className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:border-purple-500 bg-slate-50 focus:bg-white transition-colors" />
                                </div>
                                <div className="grid grid-cols-2 gap-4">
                                    <div>
                                        <label className="block text-sm font-bold text-slate-700 mb-2">State</label>
                                        <input required name="state" value={formData.state} onChange={handleChange} type="text" className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:border-purple-500 bg-slate-50 focus:bg-white transition-colors" />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-bold text-slate-700 mb-2">ZIP</label>
                                        <input required name="zip" value={formData.zip} onChange={handleChange} type="text" className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:border-purple-500 bg-slate-50 focus:bg-white transition-colors" />
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Section 2: Contact Info */}
                        <div className="space-y-6">
                            <div className="flex items-center gap-3 text-slate-900 font-bold text-xl border-b border-slate-100 pb-4">
                                <Users className="text-purple-600" />
                                <h3>Primary Contact</h3>
                            </div>

                            <div className="grid md:grid-cols-2 gap-6">
                                <div className="col-span-2">
                                    <label className="block text-sm font-bold text-slate-700 mb-2">Full Name</label>
                                    <input required name="primaryContactName" value={formData.primaryContactName} onChange={handleChange} type="text" className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:border-purple-500 bg-slate-50 focus:bg-white transition-colors" placeholder="John Doe" />
                                </div>
                                <div>
                                    <label className="block text-sm font-bold text-slate-700 mb-2">Email Address</label>
                                    <input required name="primaryContactEmail" value={formData.primaryContactEmail} onChange={handleChange} type="email" className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:border-purple-500 bg-slate-50 focus:bg-white transition-colors" placeholder="john@example.com" />
                                </div>
                                <div>
                                    <label className="block text-sm font-bold text-slate-700 mb-2">Phone Number</label>
                                    <input required name="primaryContactPhone" value={formData.primaryContactPhone} onChange={handleChange} type="tel" className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:border-purple-500 bg-slate-50 focus:bg-white transition-colors" placeholder="(555) 123-4567" />
                                </div>
                            </div>
                        </div>

                        {/* Section 3: Goals */}
                        <div className="space-y-6">
                            <div className="flex items-center gap-3 text-slate-900 font-bold text-xl border-b border-slate-100 pb-4">
                                <Target className="text-purple-600" />
                                <h3>Goals & Metrics</h3>
                            </div>

                            <div className="grid md:grid-cols-2 gap-6">
                                <div>
                                    <label className="block text-sm font-bold text-slate-700 mb-2">Current Annual Revenue</label>
                                    <div className="relative">
                                        <DollarSign className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={16} />
                                        <input required name="currentRevenue" value={formData.currentRevenue} onChange={handleChange} type="text" className="w-full pl-10 pr-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:border-purple-500 bg-slate-50 focus:bg-white transition-colors" placeholder="1,000,000" />
                                    </div>
                                </div>
                                <div>
                                    <label className="block text-sm font-bold text-slate-700 mb-2">Goal Annual Revenue (12 Months)</label>
                                    <div className="relative">
                                        <DollarSign className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={16} />
                                        <input required name="goalRevenue" value={formData.goalRevenue} onChange={handleChange} type="text" className="w-full pl-10 pr-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:border-purple-500 bg-slate-50 focus:bg-white transition-colors" placeholder="3,000,000" />
                                    </div>
                                </div>
                                <div className="col-span-2">
                                    <label className="block text-sm font-bold text-slate-700 mb-2">Monthly Marketing Budget Allocation</label>
                                    <select name="marketingBudget" value={formData.marketingBudget} onChange={handleChange} className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:border-purple-500 bg-slate-50 focus:bg-white transition-colors">
                                        <option value="">Select a range...</option>
                                        <option value="$1k - $3k">$1,000 - $3,000</option>
                                        <option value="$3k - $5k">$3,000 - $5,000</option>
                                        <option value="$5k - $10k">$5,000 - $10,000</option>
                                        <option value="$10k+">$10,000+</option>
                                    </select>
                                </div>
                            </div>
                        </div>

                        <div className="pt-6 border-t border-slate-100 flex items-center justify-between">
                            <button
                                type="button"
                                onClick={() => navigate('/onboarding/welcome')}
                                className="flex items-center gap-2 text-slate-500 hover:text-slate-900 font-bold transition-colors"
                            >
                                <ArrowLeft size={18} /> Back
                            </button>

                            <button
                                type="submit"
                                disabled={loading}
                                className="bg-slate-900 text-white font-bold px-8 py-4 rounded-xl hover:bg-gradient-to-r hover:from-purple-700 hover:to-pink-600 transition-all duration-300 shadow-lg shadow-purple-500/20 disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
                            >
                                {loading ? (
                                    <>
                                        <Loader2 className="animate-spin" size={20} />
                                        Submitting...
                                    </>
                                ) : (
                                    <>
                                        Next Step <CheckCircle2 size={18} />
                                    </>
                                )}
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Intake;
