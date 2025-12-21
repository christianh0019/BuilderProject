import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
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
import ScrollToTop from './components/ScrollToTop';
import BookPopup from './components/BookPopup';
import { HelmetProvider } from 'react-helmet-async';
import Blog from './pages/Blog';
import BlogPost from './pages/BlogPost';

// Helper component to scroll to top on route change
const ScrollToTopHelper = () => {
  ScrollToTop();
  return null;
};

const App: React.FC = () => {
  return (
    <HelmetProvider>
      <Router>
        <ScrollToTopHelper />
        <BookPopup />
        <div className="flex flex-col min-h-screen font-sans text-slate-900 selection:bg-purple-200 selection:text-purple-900">
          <Navbar />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/services" element={<Services />} />
              <Route path="/programs" element={<Programs />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/blog/:slug" element={<BlogPost />} />
              <Route path="/services/website-design" element={<WebsiteDesign />} />
              <Route path="/services/content-marketing" element={<ContentMarketing />} />
              <Route path="/services/paid-advertising" element={<PaidAdvertising />} />
              <Route path="/book" element={<Book />} />
              <Route path="/booking" element={<Booking />} />
              <Route path="/thank-you" element={<ThankYou />} />
              <Route path="/case-studies" element={<CaseStudies />} />
              <Route path="/case-studies/:slug" element={<CaseStudyDetail />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </HelmetProvider>
  );
};

export default App;