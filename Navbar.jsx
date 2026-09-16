import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { GraduationCap } from 'lucide-react';

const Navbar = () => {
  return (
    <nav className="main-navbar">
      <div className="navbar-container">
        {/* Brand Logo with Spark Green Scholarship Cap */}
        <Link to="/" className="navbar-logo">
          <div className="logo-icon" style={{ color: '#16a34a' }}>
            <GraduationCap size={32} strokeWidth={2.2} />
          </div>
          <span className="logo-text">
            Internee<span className="logo-accent" style={{ color: '#16a34a' }}>.pk</span>
          </span>
        </Link>

        {/* Center Navigation */}
        <div className="nav-menu">
          <NavLink to="/" className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}>
            Home
          </NavLink>
          <NavLink to="/why-internee" className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}>
            Why Internee
          </NavLink>
          <NavLink to="/tracks" className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}>
            Internship Tracks
          </NavLink>
          <NavLink to="/student-portal" className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}>
            Student Portal
          </NavLink>
        </div>

        {/* Right Action Buttons */}
        <div className="nav-actions">
          <Link to="/login" className="btn-secondary">
            Portal Login
          </Link>
          <Link to="/apply" className="btn-primary" style={{ backgroundColor: '#16a34a' }}>
            Apply Now
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;