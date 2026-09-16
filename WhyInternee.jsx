import React from 'react';
import { Link } from 'react-router-dom';
import { Target, Award, Users, BookOpen, Rocket, ArrowRight } from 'lucide-react';

const WhyInternee = () => {
  const benefits = [
    {
      icon: <Target className="w-8 h-8 text-emerald-600" size={32} />,
      title: "Task-Based Practical Learning",
      desc: "Skip repetitive theory. Work directly on real-world industry tasks and build tangible projects to showcase to potential employers."
    },
    {
      icon: <Award className="w-8 h-8 text-emerald-600" size={32} />,
      title: "Verified Internship Certification",
      desc: "Earn an authentic, QR-verifiable certificate upon completing project milestones to boost your resume and LinkedIn profile."
    },
    {
      icon: <Users className="w-8 h-8 text-emerald-600" size={32} />,
      title: "Mentorship & Community",
      desc: "Get guidance from active tech professionals and collaborate with a thriving nationwide student community."
    },
    {
      icon: <BookOpen className="w-8 h-8 text-emerald-600" size={32} />,
      title: "LMS Portal Access",
      desc: "Track your submission progress, access learning resources, and manage deadline workflows seamlessly in your dashboard."
    }
  ];

  return (
    <div className="page-wrapper" style={{ padding: '3rem 1.5rem', maxWidth: '1200px', margin: '0 auto' }}>
      <header style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
        <span style={{ color: '#16a34a', fontWeight: '700', fontSize: '0.9rem', letterSpacing: '1px', textTransform: 'uppercase' }}>
          Bridging Academia & Industry
        </span>
        <h1 style={{ fontSize: '2.5rem', fontWeight: '800', color: '#0f172a', margin: '0.5rem 0 1rem' }}>
          Why Choose Internee.pk?
        </h1>
        <p style={{ color: '#64748b', fontSize: '1.1rem', maxWidth: '700px', margin: '0 auto' }}>
          We provide students and fresh graduates with structured, virtual internship programs designed to build real skillsets required by top software houses and modern tech companies.
        </p>
      </header>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '2rem', marginBottom: '4rem' }}>
        {benefits.map((b, idx) => (
          <div key={idx} style={{ background: '#ffffff', border: '1px solid #e2e8f0', borderRadius: '12px', padding: '1.75rem', boxShadow: '0 4px 6px -1px rgba(0,0,0,0.04)' }}>
            <div style={{ marginBottom: '1rem', color: '#16a34a' }}>{b.icon}</div>
            <h3 style={{ fontSize: '1.25rem', fontWeight: '700', color: '#0f172a', marginBottom: '0.5rem' }}>{b.title}</h3>
            <p style={{ color: '#64748b', lineHeight: '1.6', fontSize: '0.95rem' }}>{b.desc}</p>
          </div>
        ))}
      </div>

      <div style={{ background: '#f0fdf4', border: '1px solid #bbf7d0', borderRadius: '16px', padding: '3rem', textAlign: 'center' }}>
        <Rocket size={40} style={{ color: '#16a34a', margin: '0 auto 1rem' }} />
        <h2 style={{ fontSize: '1.85rem', fontWeight: '800', color: '#0f172a', marginBottom: '0.75rem' }}>Ready to Kickstart Your Tech Career?</h2>
        <p style={{ color: '#475569', marginBottom: '1.5rem' }}>Join thousands of students building their portfolio through hands-on virtual tracks.</p>
        <Link to="/apply" className="btn-primary" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', padding: '0.75rem 1.75rem', fontSize: '1rem' }}>
          Apply for Internship <ArrowRight size={18} />
        </Link>
      </div>
    </div>
  );
};

export default WhyInternee;