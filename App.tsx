import React from 'react';
import { HashRouter as Router, Routes, Route, Outlet } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Services from './pages/Services';
import Programs from './pages/Programs';
import Book from './pages/Book';
import Booking from './pages/Booking';
import ThankYou from './pages/ThankYou';
import CaseStudies from './pages/CaseStudies';
import CaseStudyDetail from './pages/CaseStudyDetail';
import Contact from './pages/Contact';
import WebsiteDesign from './pages/services/WebsiteDesign';
import ContentMarketing from './pages/services/ContentMarketing';
import PaidAdvertising from './pages/services/PaidAdvertising';
import FunnelDevelopment from './pages/services/FunnelDevelopment';
import CRMDeployment from './pages/services/CRMDeployment';
import SalesProcesses from './pages/services/SalesProcesses';
import PartnerProgram from './pages/programs/Partner';
import FoundationProgram from './pages/programs/Foundation';
import ScrollToTop from './components/ScrollToTop';
import BookPopup from './components/BookPopup';
import { HelmetProvider } from 'react-helmet-async';
import Blog from './pages/Blog';
import BlogPost from './pages/BlogPost';
import About from './pages/About';
import Podcast from './pages/Podcast';
import PodcastEpisode from './pages/PodcastEpisode';
import Careers from './pages/Careers';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsOfService from './pages/TermsOfService';
import AdvertisingLanding from './pages/AdvertisingLanding';
import Quickstart from './pages/Quickstart';
import NotFound from './pages/NotFound';
import ChatWidget from './components/ChatWidget';
import SocialProofWidget from './components/SocialProofWidget';
// Onboarding
import Welcome from './pages/onboarding/Welcome';
import Intake from './pages/onboarding/Intake';
import OnboardingBooking from './pages/onboarding/OnboardingBooking';
import Expectations from './pages/onboarding/Expectations';

// Helper component to scroll to top on route change
const ScrollToTopHelper = () => {
  ScrollToTop();
  return null;
};

const MainLayout = () => {
  return (
    <div className="flex flex-col min-h-screen font-sans text-slate-900 selection:bg-purple-200 selection:text-purple-900">
      <Navbar />
      <main className="flex-grow">
        <Outlet />
      </main>
      <Footer />
      {/* <BookPopup /> */}
      {/* <SocialProofWidget /> */}
      <ChatWidget />
    </div>
  );
};

const App: React.FC = () => {
  return (
    <HelmetProvider>
      <Router>
        <ScrollToTopHelper />
        <Routes>
          {/* Main Website Routes (with Nav & Footer) */}
          <Route element={<MainLayout />}>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/programs" element={<Programs />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:slug" element={<BlogPost />} />
            <Route path="/about" element={<About />} />
            <Route path="/podcast" element={<Podcast />} />
            <Route path="/podcast/001" element={<PodcastEpisode />} />
            <Route path="/services/website-design" element={<WebsiteDesign />} />
            <Route path="/services/content-marketing" element={<ContentMarketing />} />
            <Route path="/services/paid-advertising" element={<PaidAdvertising />} />
            <Route path="/services/funnel-development" element={<FunnelDevelopment />} />
            <Route path="/services/crm-deployment" element={<CRMDeployment />} />
            <Route path="/services/sales-processes" element={<SalesProcesses />} />
            <Route path="/programs/partner" element={<PartnerProgram />} />
            <Route path="/programs/foundation" element={<FoundationProgram />} />
            <Route path="/book" element={<Book />} />
            <Route path="/case-studies" element={<CaseStudies />} />
            <Route path="/case-studies/:slug" element={<CaseStudyDetail />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/careers" element={<Careers />} />
            <Route path="/privacy" element={<PrivacyPolicy />} />
            <Route path="/terms" element={<TermsOfService />} />
            <Route path="*" element={<NotFound />} />
          </Route>

          {/* Dedicated Landing Pages (No Nav/Footer) */}
          <Route path="/partner-application" element={<AdvertisingLanding />} />

          {/* Onboarding Funnel */}
          <Route path="/onboarding/welcome" element={<Welcome />} />
          <Route path="/onboarding/intake" element={<Intake />} />
          <Route path="/onboarding/booking" element={<OnboardingBooking />} />
          <Route path="/onboarding/expectations" element={<Expectations />} />
          <Route path="/booking" element={<Booking />} />
          <Route path="/thank-you" element={<ThankYou />} />
          <Route path="/quickstart" element={<Quickstart />} />
        </Routes>
      </Router>
    </HelmetProvider>
  );
};

export default App;