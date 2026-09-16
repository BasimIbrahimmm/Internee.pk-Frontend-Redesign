import React from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, CheckCircle2, Star, Users, Briefcase, 
  Code, Palette, Terminal, Smartphone, Layout, Award, Rocket 
} from 'lucide-react';
import SupportChat from '../components/SupportChat';

const Home = () => {
  const tracks = [
    { title: 'Frontend Internship', icon: <Layout size={24} />, desc: 'Master HTML5, React.js, Tailwind, and responsive design UI components.' },
    { title: 'Backend Development', icon: <Terminal size={24} />, desc: 'Build scalable RESTful APIs with Node.js, Python Flask, and modern DBMS.' },
    { title: 'Graphic Design', icon: <Palette size={24} />, desc: 'Design UI/UX prototypes, branding materials, and social media assets in Figma.' },
    { title: 'Chatbot Development', icon: <Code size={24} />, desc: 'Create AI-driven chatbots and rule-based conversational workflows.' },
    { title: 'App Development', icon: <Smartphone size={24} />, desc: 'Develop cross-platform mobile apps using Flutter and React Native framework.' },
    { title: 'Cyber Security / AI', icon: <Rocket size={24} />, desc: 'Explore foundational AI tools, prompt engineering, and security practices.' }
  ];

  const reviews = [
    { name: 'Ali Raza', location: 'Islamabad, Pakistan', rating: 5, text: 'The project tasks during my frontend internship gave me real confidence. The LMS scorecard system kept me accountable!' },
    { name: 'Muhammad Rafiq', location: 'Larkana, Pakistan', rating: 5, text: 'Great structure for virtual internships! Building actual portfolio projects helped me stand out in job interviews.' },
    { name: 'Kashan Soomro', location: 'Karachi, Pakistan', rating: 5, text: 'Hands-on task-based platform. I completed my Web Development track and got verified digital credentials.' },
    { name: 'Ayesha Khan', location: 'Lahore, Pakistan', rating: 5, text: 'Clear deadlines, weekly assignment unlocks, and genuine mentorship exposure. Highly recommended!' }
  ];

  return (
    <div className="home-page-wrapper">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-container">
          <div className="hero-text">
            <div className="hero-pill">
              <Star size={16} fill="currentColor" /> #1 Remote Internship Portal in Pakistan
            </div>
            <h1>Bridge the Gap Between Academia & Industry</h1>
            <p className="hero-subtitle">
              Gain real-world experience through task-based virtual internships. Build actual client projects, work with industry mentors, and earn verified digital credentials.
            </p>
            <div className="hero-cta-group">
              <Link to="/tracks" className="btn-primary btn-lg">Browse All Tracks <ArrowRight size={18} /></Link>
              <Link to="/lms" className="btn-outline btn-lg">Open LMS Portal</Link>
            </div>
            <div className="trust-stats">
              <div><span className="stat-number">15,000+</span><span className="stat-label">Interns Trained</span></div>
              <div className="stat-divider"></div>
              <div><span className="stat-number">94%</span><span className="stat-label">Completion Rate</span></div>
            </div>
          </div>

          <div className="hero-visual">
            <div className="glass-card">
              <div className="card-header-bar">
                <span className="dot red"></span>
                <span className="dot yellow"></span>
                <span className="dot green"></span>
                <span className="card-title-tab">internship-dashboard.jsx</span>
              </div>
              <div className="card-body">
                <div className="user-profile-preview">
                  <div className="avatar">BA</div>
                  <div className="user-meta">
                    <h4>Basim Ahmed Ibrahim</h4>
                    <p>Frontend Development Intern</p>
                  </div>
                  <span className="status-tag">Active</span>
                </div>
                <div className="task-progress-box">
                  <div className="task-info"><span>Task #3 Completion</span><strong>85%</strong></div>
                  <div className="progress-bar"><div className="progress-fill" style={{ width: '85%' }}></div></div>
                </div>
                <div className="checklist">
                  <div className="check-item done"><CheckCircle2 size={16} /> Responsive Navbar & Layout</div>
                  <div className="check-item done"><CheckCircle2 size={16} /> Student LMS Dashboard State</div>
                  <div className="check-item pending"><CheckCircle2 size={16} /> Deploy Repository to Vercel</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Collaborators & Partners Section */}
      <section className="partners-section">
        <p className="partners-label">Collaborated with Trusted Worldwide Partners</p>
        <div className="partners-grid">
          <span className="partner-logo">Google Cloud</span>
          <span className="partner-logo">Microsoft for Startups</span> 
          <span className="partner-logo">National Expansion Plan of NICs</span>
          <span className="partner-logo">PITB</span>
          <span className="partner-logo">ITG</span>
        </div>
      </section>

      {/* Internship Tracks Section */}
      <section className="section-padding bg-subtle">
        <div className="container-main">
          <div className="section-header center">
            <span className="form-badge">INTERNSHIP TRACKS</span>
            <h2>Explore Our Virtual Internship Fields</h2>
            <p className="subtitle">Select your field, complete industry-standard tasks, and build your professional portfolio.</p>
          </div>

          <div className="tracks-grid">
            {tracks.map((track, idx) => (
              <div key={idx} className="track-card">
                <div className="track-icon">{track.icon}</div>
                <h3>{track.title}</h3>
                <p>{track.desc}</p>
                <Link to="/apply" className="btn-secondary btn-block">Apply Now</Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Task Management / Portfolio Platform Section */}
      <section className="section-padding bg-dark text-light">
        <div className="container-main lms-container">
          <div className="lms-content">
            <span className="section-tag green">TASK MANAGEMENT PLATFORM</span>
            <h2>Ready to Build Your Professional Portfolio with Internee.pk?</h2>
            <p>Join our virtual internships and get access to industry-standard tasks that will help you build a remarkable portfolio only at internee.pk.</p>
            <div style={{ marginTop: '2rem' }}>
              <Link to="/apply" className="btn-primary btn-lg">Start Your Journey Now <ArrowRight size={18} /></Link>
            </div>
          </div>

          <div className="portal-mockup">
            <div className="portal-header">
              <span>Task Management System</span>
              <span className="badge">Active System</span>
            </div>
            <div className="portal-body">
              <div className="portal-task-card">
                <h4>Task Unlocks & Scorecards</h4>
                <p>Automated submission tracking connected with GitHub and Figma links for direct mentor verification.</p>
                <div className="task-top">
                  <span className="tag">Portfolio Builder</span>
                  <span className="time">Verified Credentials</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Instructor Portal Section */}
      <section className="section-padding instructor-section">
        <div className="container-main">
          <div className="instructor-card">
            <div className="instructor-text">
              <span className="form-badge">INSTRUCTOR PORTAL</span>
              <h2>Are You an Instructor or Content Creator?</h2>
              <p>Create in your native language, reach more learners, and earn from your expertise with internee.pk.</p>
            </div>
            <a href="#teach" className="btn-primary btn-lg">Start Teaching Today</a>
          </div>
        </div>
      </section>

      {/* Testimonials / Reviews Section */}
      <section className="section-padding bg-subtle">
        <div className="container-main">
          <div className="reviews-header-block">
            <div className="reviews-title-side">
              <span className="form-badge">TESTIMONIALS</span>
              <h2>Trusted by Thousands.</h2>
              <p className="subtitle">Join thousands of achievers. Connect, learn, succeed.</p>
              <a href="#community" className="btn-primary" style={{ marginTop: '1rem' }}>Join Our Community</a>
            </div>

            <div className="reviews-cards-side">
              {reviews.map((rev, idx) => (
                <div key={idx} className="review-card">
                  <div className="stars">
                    {[...Array(rev.rating)].map((_, i) => (
                      <Star key={i} size={16} fill="#f59e0b" color="#f59e0b" />
                    ))}
                  </div>
                  <p className="review-text">"{rev.text}"</p>
                  <div className="reviewer-info">
                    <strong>{rev.name}</strong>
                    <span>{rev.location}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Floating Chatbot */}
      <SupportChat />
    </div>
  );
};

export default Home;