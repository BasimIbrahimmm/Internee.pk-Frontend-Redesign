import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Global Layout Components
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import SupportChat from './components/SupportChat';

// Page Components
import Home from './pages/Home';
import StudentPortal from './pages/StudentPortal';
import WhyInternee from './pages/WhyInternee';
import Tracks from './pages/Tracks';
import Login from './pages/Login';
import Apply from './pages/Apply';

function App() {
  return (
    <Router>
      <div className="app-layout">
        {/* Persistent Navigation Header */}
        <Navbar />

        {/* Dynamic Page Routes */}
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/why-internee" element={<WhyInternee />} />
            <Route path="/tracks" element={<Tracks />} />
            <Route path="/student-portal" element={<StudentPortal />} />
            <Route path="/lms" element={<StudentPortal />} />
            <Route path="/login" element={<Login />} />
            <Route path="/apply" element={<Apply />} />
            
            {/* Catch-all fallback route back to Home */}
            <Route path="*" element={<Home />} />
          </Routes>
        </main>

        {/* Global Floating Rule-Based Support Chat */}
        <SupportChat />

        {/* Persistent Footer */}
        <Footer />
      </div>
    </Router>
  );
}

export default App;