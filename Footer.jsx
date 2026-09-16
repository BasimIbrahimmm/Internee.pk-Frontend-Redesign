import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, GraduationCap } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="main-footer">
      {/* Newsletter Bar */}
      <div className="newsletter-section">
        <div className="newsletter-container">
          <div className="newsletter-text">
            <h3>Subscribe to Newsletter</h3>
            <p>Subscribe to our newsletter and get exclusive insights, industry trends, and cohort updates.</p>
          </div>
          <form className="newsletter-form" onSubmit={(e) => e.preventDefault()}>
            <input type="email" placeholder="Enter your email address" required />
            <button type="submit" className="btn-primary">Subscribe</button>
          </form>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="footer-content">
        <div className="footer-container">
          <div className="footer-brand">
            <Link to="/" className="brand-logo">
              <div className="logo-icon"><GraduationCap size={20} /></div>
              <span className="logo-text" style={{ color: '#ffffff' }}>
                Internee<span className="logo-accent" style={{ color: '#10b981' }}>.pk</span>
              </span>
            </Link>
            <p className="brand-desc">The ultimate platform bridging academia and industry through project-focused virtual internships.</p>
            <div className="contact-info">
              <p><Phone size={16} /> +92 (300) 000-0000</p>
              <p><Mail size={16} /> info@internee.pk</p>
            </div>
          </div>

          <div className="footer-links-group">
            <h4>Quick Links</h4>
            <Link to="/">Home</Link>
            <Link to="/tracks">Internship Tracks</Link>
            <Link to="/lms">Student Portal</Link>
            <Link to="/apply">Apply Now</Link>
          </div>

          <div className="footer-links-group">
            <h4>Programs</h4>
            <a href="#graduate">Graduate Program</a>
            <a href="#ambassador">Student Ambassador</a>
            <a href="#startup">Startup Journey</a>
            <a href="#partner">Partner with Us</a>
          </div>

          <div className="footer-links-group">
            <h4>Follow Us</h4>
            <div className="social-links">
              {/* Facebook */}
              <a href="https://facebook.com" target="_blank" rel="noreferrer" className="social-icon" aria-label="Facebook">
                <svg viewBox="-2.5 -3 29.5 29.5" fill="currentColor">
                  <path d="M14 13.5h2.5l1-4H14v-2c0-1.03 0-2 2-2h1.5V2.14c-.326-.043-1.557-.14-2.857-.14C11.928 2 10 3.657 10 6.7v2.8H7v4h3V22h4v-8.5z"/>
                </svg>
              </a>

              {/* Twitter / X */}
              <a href="https://twitter.com" target="_blank" rel="noreferrer" className="social-icon" aria-label="Twitter">
                <svg viewBox="-5 -5 34 34" fill="currentColor">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </a>

              {/* LinkedIn */}
              <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="social-icon" aria-label="LinkedIn">
                <svg viewBox="-1.70 -1.70 27.5 27.5" fill="currentColor">
                  <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/>
                </svg>
              </a>

              {/* Instagram (Fixed viewBox for perfect scaling & padding) */}
              <a href="https://instagram.com" target="_blank" rel="noreferrer" className="social-icon" aria-label="Instagram">
                <svg viewBox="-5 -5 34 34" fill="currentColor">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Internee.pk. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;