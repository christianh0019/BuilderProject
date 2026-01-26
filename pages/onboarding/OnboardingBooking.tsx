import React from 'react';
import { useNavigate } from 'react-router-dom';
import SimpleHeader from '../../components/SimpleHeader';
import BookingWidget from '../../components/BookingWidget';

const OnboardingBooking: React.FC = () => {
    const navigate = useNavigate();

    // Reusing the same calendar ID or a placeholder. User said "onboarding call booking page".
    // I'll stick with the existing calendar ID for now, as it's the valid one we have. 
    // If they have a specific onboarding calendar, they can swap the ID.
    // Updated to the global onboarding calendar ID
    const CALENDAR_ID = "rvMuKekaDunKYTEab0LZ";

    return (
        <div className="min-h-screen bg-slate-50 font-sans selection:bg-purple-200 selection:text-purple-900 flex flex-col">
            <SimpleHeader />

            <div className="flex-grow flex flex-col items-center pt-24 pb-12 px-6">
                {/* Progress Header */}
                <div className="mb-10 text-center">
                    <div className="inline-flex items-center gap-2 text-slate-400 text-sm font-bold uppercase tracking-wider mb-4">
                        <span className="text-purple-600">Step 2 of 3</span>
                        <span>•</span>
                        <span>Schedule Kickoff</span>
                    </div>
                    <h1 className="text-3xl md:text-4xl font-serif font-bold text-slate-900 mb-4">
                        Let's make it official.
                    </h1>
                    <p className="text-slate-500 max-w-xl mx-auto">
                        Book your dedicated onboarding call below. We'll review your intake form, set up your accounts, and map out the first 90 days.
                    </p>
                </div>

                <div className="w-full max-w-4xl bg-white rounded-3xl shadow-xl overflow-hidden border border-slate-100 h-[800px]">
                    <BookingWidget calendarId={CALENDAR_ID} />
                </div>

                <div className="mt-8 text-center">
                    <button
                        onClick={() => navigate('/onboarding/expectations')}
                        className="text-slate-400 hover:text-slate-600 text-sm font-bold underline decoration-2 decoration-slate-200 hover:decoration-slate-400 transition-all"
                    >
                        Skip for now (I'll book later)
                    </button>
                    {/* Note: In a real flow, the GHL calendar redirect should handle this, 
                        but we provide a manual skip just in case or for testing. */}
                </div>
            </div>
        </div>
    );
};

export default OnboardingBooking;
