import Blog from './pages/Blog';
import BlogPost from './pages/BlogPost';

// ... existing imports

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
// ... rest of routes
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