import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Hero from './components/Hero';
import AuthPage from './components/AuthPage';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import AboutUs from './components/aboutus';
import HowItWorks from './components/HowItWorks';
import ResourcesAndTips from './components/ResourcesAndTips';
import SuccessGuide from './components/SuccessGuide'; // Add this import

// Create a layout component that can access the location
function AppLayout() {
  const location = useLocation();
  const isAuthPage = location.pathname === '/auth';
  
  return (
    <>
      {!isAuthPage && <Navbar />}
      
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/auth" element={<AuthPage />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/how-it-works" element={<HowItWorks />} />
        <Route path="/students/resources" element={<ResourcesAndTips />} />
        <Route path="/students/success-guide" element={<SuccessGuide />} /> {/* Add this route */}
        {/* Add other routes as needed */}
      </Routes>
      
      {/* Only show footer if not on auth page */}
      {!isAuthPage && <Footer />}
    </>
  );
}

function App() {
  return (
    <Router>
      <AppLayout />
    </Router>
  );
}

export default App;