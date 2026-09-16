import React from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, CheckCircle, Clock, Award, Upload, AlertCircle, ArrowUpRight } from 'lucide-react';

const StudentPortal = () => {
  const activeCourse = {
    title: 'Frontend Web Development Internship',
    batch: 'Batch 14 - Fall 2026',
    progress: 65,
    nextTask: 'Task 3: Build a Responsive React LMS Dashboard',
    deadline: 'Sept 22, 2026'
  };

  const tasks = [
    { id: 1, name: 'Task 1: HTML5/CSS3 Landing Page', status: 'Approved', score: '100/100', date: 'Sept 05, 2026' },
    { id: 2, name: 'Task 2: JavaScript DOM Manipulation Project', status: 'Approved', score: '95/100', date: 'Sept 12, 2026' },
    { id: 3, name: 'Task 3: Responsive React Navigation & Routing', status: 'In Progress', score: 'Pending', date: 'Sept 22, 2026' },
  ];

  return (
    <div className="page-wrapper" style={{ padding: '2.5rem 1.5rem', maxWidth: '1200px', margin: '0 auto' }}>
      {/* Welcome Banner */}
      <div style={{ background: '#f0fdf4', border: '1px solid #bbf7d0', borderRadius: '16px', padding: '2rem', marginBottom: '2.5rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem' }}>
        <div>
          <span style={{ color: '#16a34a', fontWeight: '700', fontSize: '0.875rem', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
            Internee LMS Student Dashboard
          </span>
          <h1 style={{ fontSize: '2rem', fontWeight: '800', color: '#0f172a', margin: '0.25rem 0 0.5rem' }}>
            Welcome back, Student! 👋
          </h1>
          <p style={{ color: '#475569', margin: 0 }}>Track your tasks, submit assignments, and manage your internship milestones.</p>
        </div>
        <Link to="/apply" className="btn-primary" style={{ backgroundColor: '#16a34a', padding: '0.65rem 1.25rem', fontSize: '0.9rem' }}>
          Enroll New Track
        </Link>
      </div>

      {/* Stats Cards */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1.5rem', marginBottom: '2.5rem' }}>
        <div style={{ background: '#ffffff', border: '1px solid #e2e8f0', borderRadius: '12px', padding: '1.5rem', boxShadow: '0 2px 4px rgba(0,0,0,0.02)' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.75rem' }}>
            <span style={{ color: '#64748b', fontSize: '0.9rem', fontWeight: '600' }}>Enrolled Track</span>
            <BookOpen size={20} style={{ color: '#16a34a' }} />
          </div>
          <p style={{ fontSize: '1.5rem', fontWeight: '800', color: '#0f172a', margin: 0 }}>1 Active</p>
        </div>

        <div style={{ background: '#ffffff', border: '1px solid #e2e8f0', borderRadius: '12px', padding: '1.5rem', boxShadow: '0 2px 4px rgba(0,0,0,0.02)' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.75rem' }}>
            <span style={{ color: '#64748b', fontSize: '0.9rem', fontWeight: '600' }}>Tasks Completed</span>
            <CheckCircle size={20} style={{ color: '#16a34a' }} />
          </div>
          <p style={{ fontSize: '1.5rem', fontWeight: '800', color: '#0f172a', margin: 0 }}>2 / 4 Submitted</p>
        </div>

        <div style={{ background: '#ffffff', border: '1px solid #e2e8f0', borderRadius: '12px', padding: '1.5rem', boxShadow: '0 2px 4px rgba(0,0,0,0.02)' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.75rem' }}>
            <span style={{ color: '#64748b', fontSize: '0.9rem', fontWeight: '600' }}>Pending Deadline</span>
            <Clock size={20} style={{ color: '#eab308' }} />
          </div>
          <p style={{ fontSize: '1.5rem', fontWeight: '800', color: '#0f172a', margin: 0 }}>6 Days Left</p>
        </div>

        <div style={{ background: '#ffffff', border: '1px solid #e2e8f0', borderRadius: '12px', padding: '1.5rem', boxShadow: '0 2px 4px rgba(0,0,0,0.02)' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.75rem' }}>
            <span style={{ color: '#64748b', fontSize: '0.9rem', fontWeight: '600' }}>Certificate Status</span>
            <Award size={20} style={{ color: '#16a34a' }} />
          </div>
          <p style={{ fontSize: '1.1rem', fontWeight: '700', color: '#16a34a', margin: 0 }}>In Progress (65%)</p>
        </div>
      </div>

      {/* Main Content Grid */}
      <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '2rem' }}>
        {/* Active Task & Milestones */}
        <div>
          <div style={{ background: '#ffffff', border: '1px solid #e2e8f0', borderRadius: '14px', padding: '1.75rem', marginBottom: '2rem' }}>
            <h2 style={{ fontSize: '1.25rem', fontWeight: '700', color: '#0f172a', marginBottom: '1rem' }}>Active Track Overview</h2>
            <div style={{ padding: '1.25rem', background: '#f8fafc', borderRadius: '10px', border: '1px solid #f1f5f9' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.5rem' }}>
                <h3 style={{ fontSize: '1.1rem', fontWeight: '700', color: '#0f172a', margin: 0 }}>{activeCourse.title}</h3>
                <span style={{ background: '#dcfce7', color: '#15803d', padding: '0.2rem 0.6rem', borderRadius: '12px', fontSize: '0.75rem', fontWeight: '700' }}>{activeCourse.batch}</span>
              </div>
              <p style={{ color: '#64748b', fontSize: '0.9rem', marginBottom: '1rem' }}>Next Milestone: <strong>{activeCourse.nextTask}</strong></p>
              
              {/* Progress Bar */}
              <div style={{ background: '#e2e8f0', height: '10px', borderRadius: '5px', overflow: 'hidden', marginBottom: '0.5rem' }}>
                <div style={{ width: `${activeCourse.progress}%`, background: '#16a34a', height: '100%' }}></div>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.85rem', color: '#64748b' }}>
                <span>Completion: {activeCourse.progress}%</span>
                <span>Deadline: {activeCourse.deadline}</span>
              </div>
            </div>
          </div>

          {/* Submission History */}
          <div style={{ background: '#ffffff', border: '1px solid #e2e8f0', borderRadius: '14px', padding: '1.75rem' }}>
            <h2 style={{ fontSize: '1.25rem', fontWeight: '700', color: '#0f172a', marginBottom: '1.25rem' }}>Task Submissions</h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {tasks.map((task) => (
                <div key={task.id} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '1rem', border: '1px solid #f1f5f9', borderRadius: '10px', background: '#f8fafc' }}>
                  <div>
                    <h4 style={{ fontSize: '0.95rem', fontWeight: '600', color: '#0f172a', margin: '0 0 0.25rem' }}>{task.name}</h4>
                    <span style={{ fontSize: '0.8rem', color: '#64748b' }}>Submitted on {task.date}</span>
                  </div>
                  <div style={{ textAlign: 'right' }}>
                    <span style={{ display: 'inline-block', padding: '0.2rem 0.6rem', borderRadius: '12px', fontSize: '0.75rem', fontWeight: '700', backgroundColor: task.status === 'Approved' ? '#dcfce7' : '#fef3c7', color: task.status === 'Approved' ? '#15803d' : '#d97706', marginBottom: '0.25rem' }}>
                      {task.status}
                    </span>
                    <p style={{ margin: 0, fontSize: '0.85rem', fontWeight: '600', color: '#475569' }}>Score: {task.score}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Quick Actions & Help Sidebar */}
        <div>
          <div style={{ background: '#ffffff', border: '1px solid #e2e8f0', borderRadius: '14px', padding: '1.5rem', marginBottom: '1.5rem' }}>
            <h3 style={{ fontSize: '1.1rem', fontWeight: '700', color: '#0f172a', marginBottom: '1rem' }}>Quick Task Portal</h3>
            <p style={{ color: '#64748b', fontSize: '0.875rem', marginBottom: '1.25rem' }}>Ready to submit your React Task link or GitHub repository?</p>
            <button className="btn-primary" style={{ width: '100%', backgroundColor: '#16a34a', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem', padding: '0.75rem' }}>
              <Upload size={18} /> Submit Task Project
            </button>
          </div>

          <div style={{ background: '#ffffff', border: '1px solid #e2e8f0', borderRadius: '14px', padding: '1.5rem' }}>
            <h3 style={{ fontSize: '1.1rem', fontWeight: '700', color: '#0f172a', marginBottom: '0.75rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <AlertCircle size={18} style={{ color: '#16a34a' }} /> LMS Guidelines
            </h3>
            <ul style={{ paddingLeft: '1.2rem', margin: 0, color: '#64748b', fontSize: '0.875rem', lineHeight: '1.7' }}>
              <li>Ensure all GitHub repositories are public before submitting.</li>
              <li>Deploy web tasks on Vercel or Netlify for evaluation.</li>
              <li>Certificates are issued within 5 working days after final task approval.</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentPortal;