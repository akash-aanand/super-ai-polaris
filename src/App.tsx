import React from 'react';
import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { Layout } from './components/layout';
import { Home, About, Founder } from './pages/main';
import { ServicesMain, ServiceDetail, EnterpriseSolutionsPage } from './pages/services';
import { Blog, Research, IndustriesPage, PartnersPage } from './pages/resources';
import { Contact } from './pages/contact';

// ScrollToTop component to handle scroll position on route change
const ScrollToTop = () => {
  const { pathname } = useLocation();

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

const AnimatedRoutes = () => {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        
        {/* Company Pages */}
        <Route path="/about" element={<About />} />
        <Route path="/founder" element={<Founder />} />
        
        {/* Service Pages */}
        <Route path="/services" element={<ServicesMain />} />
        {/* Specific Enterprise Page must come before dynamic :id route */}
        <Route path="/services/corporate" element={<EnterpriseSolutionsPage />} />
        <Route path="/services/:id" element={<ServiceDetail />} />
        
        {/* Resource Pages */}
        <Route path="/blog" element={<Blog />} />
        <Route path="/research" element={<Research />} />
        <Route path="/industries" element={<IndustriesPage />} />
        <Route path="/partners" element={<PartnersPage />} />
        
        {/* Contact */}
        <Route path="/contact" element={<Contact />} />
        
        {/* Fallback */}
        <Route path="*" element={<Home />} />
      </Routes>
    </AnimatePresence>
  );
};

const App = () => {
  return (
    <Router>
      <ScrollToTop />
      <Layout>
        <AnimatedRoutes />
      </Layout>
    </Router>
  );
};

export default App;