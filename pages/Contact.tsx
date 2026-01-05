import React from 'react';
import SurveyForm from '../components/SurveyForm';

const Contact: React.FC = () => {
  return (
    <div className="min-h-screen pt-32 pb-20 bg-slate-50">
      <div className="container mx-auto px-6">
        <div className="max-w-2xl mx-auto">
          <SurveyForm webhookUrl="https://services.leadconnectorhq.com/hooks/HllUVzV8V6VFH4nUuq4W/webhook-trigger/fad0a645-e084-4b96-8216-6e72e76b8f98" />
        </div>
      </div>
    </div>
  );
};

export default Contact;