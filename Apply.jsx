import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FileText, User, Mail, GraduationCap, Layers, Globe, Send, CheckCircle2 } from 'lucide-react';
import { useApp } from '../context/AppContext';

const Apply = () => {
  const { submitApplication } = useApp();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    university: '',
    track: '',
    github: ''
  });

  const [errors, setErrors] = useState({});
  const [isSuccess, setIsSuccess] = useState(false);

  const validate = () => {
    let errs = {};
    if (!formData.fullName.trim()) errs.fullName = "Full name is required";
    if (!formData.email.includes("@")) errs.email = "Valid email address required";
    if (!formData.university.trim()) errs.university = "University name is required";
    if (!formData.track) errs.track = "Please select an internship track";
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      submitApplication(formData);
      setIsSuccess(true);
      setTimeout(() => {
        navigate('/lms');
      }, 2000);
    }
  };

  return (
    <section className="section-padding">
      <div className="form-container">
        <div className="form-card">
          <div className="form-header">
            <div className="form-badge"><FileText size={16} /> Quick Registration</div>
            <h2>Apply for Internship Batch</h2>
            <p>Fill in your details to secure your spot in the upcoming cohort.</p>
          </div>

          {isSuccess ? (
            <div style={{ textAlign: 'center', padding: '2rem' }}>
              <CheckCircle2 size={64} color="#059669" style={{ margin: '0 auto 1rem' }} />
              <h3>Application Submitted Successfully!</h3>
              <p style={{ color: '#64748b' }}>Redirecting to your student LMS portal...</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} noValidate>
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="fullName">Full Name *</label>
                  <div className="input-icon-wrapper">
                    <User className="field-icon" size={20} />
                    <input
                      type="text"
                      id="fullName"
                      placeholder="Enter your full name"
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    />
                  </div>
                  {errors.fullName && <span className="error-text">{errors.fullName}</span>}
                </div>

                <div className="form-group">
                  <label htmlFor="email">Email Address *</label>
                  <div className="input-icon-wrapper">
                    <Mail className="field-icon" size={20} />
                    <input
                      type="email"
                      id="email"
                      placeholder="name@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    />
                  </div>
                  {errors.email && <span className="error-text">{errors.email}</span>}
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="university">University / Institute *</label>
                  <div className="input-icon-wrapper">
                    <GraduationCap className="field-icon" size={20} />
                    <input
                      type="text"
                      id="university"
                      placeholder="Enter your institute name"
                      value={formData.university}
                      onChange={(e) => setFormData({ ...formData, university: e.target.value })}
                    />
                  </div>
                  {errors.university && <span className="error-text">{errors.university}</span>}
                </div>

                <div className="form-group">
                  <label htmlFor="track">Preferred Internship Track *</label>
                  <div className="input-icon-wrapper">
                    <Layers className="field-icon" size={20} />
                    <select
                      id="track"
                      value={formData.track}
                      onChange={(e) => setFormData({ ...formData, track: e.target.value })}
                    >
                      <option value="">Select a track...</option>
                      <option value="Frontend Development Intern Track">Frontend Web (React.js)</option>
                      <option value="MERN Stack Engineering">MERN Stack Development</option>
                      <option value="Mobile App Development">Mobile App (React Native/Flutter)</option>
                      <option value="UI/UX & Product Design">UI/UX & Graphic Design</option>
                      <option value="Python & Machine Learning">Python & Machine Learning</option>
                    </select>
                  </div>
                  {errors.track && <span className="error-text">{errors.track}</span>}
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="github">GitHub or Portfolio URL (Optional)</label>
                <div className="input-icon-wrapper">
                  <Globe className="field-icon" size={20} />
                  <input
                    type="url"
                    id="github"
                    placeholder="https://github.com/yourusername"
                    value={formData.github}
                    onChange={(e) => setFormData({ ...formData, github: e.target.value })}
                  />
                </div>
              </div>

              <button type="submit" className="btn-primary btn-block btn-lg">
                <span>Submit Application</span>
                <Send size={18} />
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};

export default Apply;