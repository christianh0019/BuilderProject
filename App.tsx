import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Services from './pages/Services';
import Book from './pages/Book';
import CaseStudies from './pages/CaseStudies';
import CaseStudyDetail from './pages/CaseStudyDetail';
import Contact from './pages/Contact';
import ScrollToTop from './components/ScrollToTop';

// Helper component to scroll to top on route change
const ScrollToTopHelper = () => {
  ScrollToTop();
  return null;
};

const App: React.FC = () => {
  return (
    <Router>
      <ScrollToTopHelper />
      <div className="flex flex-col min-h-screen font-sans text-slate-900 selection:bg-purple-200 selection:text-purple-900">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/book" element={<Book />} />
            <Route path="/case-studies" element={<CaseStudies />} />
            <Route path="/case-studies/:slug" element={<CaseStudyDetail />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;