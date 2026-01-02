import React from 'react';
import SurveyForm from '../components/SurveyForm';

const Contact: React.FC = () => {
  return (
    <div className="min-h-screen pt-32 pb-20 bg-slate-50">
      <div className="container mx-auto px-6">
        <div className="max-w-2xl mx-auto">
          <SurveyForm />
        </div>
      </div>
    </div>
  );
};

export default Contact;