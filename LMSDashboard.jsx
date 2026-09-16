import React, { useState } from 'react';
import { Clock, CheckCircle2, AlertCircle } from 'lucide-react';
import { useApp } from '../context/AppContext';

const LMSDashboard = () => {
  const { currentUser, completeTask } = useApp();
  const [githubUrl, setGithubUrl] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleTaskSubmit = (e) => {
    e.preventDefault();
    if (githubUrl.trim()) {
      if (completeTask) {
        completeTask(3);
      }
      setSubmitted(true);
    }
  };

  const completedCount = currentUser?.tasks
    ? currentUser.tasks.filter((t) => t.status === 'completed' || t.completed).length
    : 0;

  return (
    <section className="section-padding bg-dark text-light" style={{ minHeight: '80vh' }}>
      <div className="lms-container">
        <div className="lms-content">
          <span className="section-tag green">INTERNEE LMS PORTAL</span>
          <h2>Welcome Back, {currentUser?.name || 'Student'}!</h2>
          <p><strong>Enrolled Track:</strong> {currentUser?.track || 'Frontend Development Track'}</p>
          <p><strong>Institute:</strong> {currentUser?.university || 'N/A'}</p>

          <ul className="lms-list">
            <li><CheckCircle2 size={18} /> Weekly automated assignment unlocks</li>
            <li><CheckCircle2 size={18} /> Direct GitHub & Figma link submissions</li>
            <li><CheckCircle2 size={18} /> Automated deadline tracking & scorecards</li>
          </ul>
        </div>

        <div className="lms-preview-box">
          <div className="portal-mockup">
            <div className="portal-header">
              <span>Internee LMS - Dashboard Overview</span>
              <span className="badge">Active Cohort</span>
            </div>
            <div className="portal-body">
              <div className="portal-stat-row">
                <div className="p-stat"><span>Assigned Tasks</span><strong>03</strong></div>
                <div className="p-stat"><span>Completed</span><strong>{completedCount}</strong></div>
                <div className="p-stat"><span>Scorecard</span><strong>98%</strong></div>
              </div>

              <div className="portal-task-card">
                <div className="task-top">
                  <span className="tag">{currentUser?.track || 'Frontend Development'}</span>
                  <span className="time"><Clock size={14} /> 2 Days Left</span>
                </div>
                <h4>Task #3: Build a Responsive Landing Page in React</h4>
                <p>Implement dark mode, clean dynamic components, and React state management.</p>

                {submitted ? (
                  <div style={{ color: '#10b981', display: 'flex', alignItems: 'center', gap: '0.5rem', fontWeight: 'bold' }}>
                    <CheckCircle2 size={18} /> Solution Submitted to Evaluators
                  </div>
                ) : (
                  <form onSubmit={handleTaskSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                    <input
                      type="url"
                      placeholder="Paste GitHub Repository URL"
                      required
                      value={githubUrl}
                      onChange={(e) => setGithubUrl(e.target.value)}
                      style={{ padding: '0.6rem', borderRadius: '6px', border: '1px solid #334155', background: '#1e293b', color: 'white' }}
                    />
                    <button type="submit" className="btn-portal-submit">Submit Solution</button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LMSDashboard;