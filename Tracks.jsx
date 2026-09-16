import React from 'react';
import { Link } from 'react-router-dom';
import { Code, Layout, Smartphone, Database, Cpu, ShieldCheck } from 'lucide-react';

const Tracks = () => {
  const trackList = [
    {
      id: 'frontend',
      title: 'Frontend Web Development',
      icon: <Code size={28} className="text-emerald-600" />,
      desc: 'Master modern frontend development using HTML5, CSS3, JavaScript (ES6+), and React.js to build dynamic user interfaces.',
      duration: '1 - 2 Months'
    },
    {
      id: 'mern',
      title: 'MERN Stack Engineering',
      icon: <Layout size={28} className="text-emerald-600" />,
      desc: 'Build full-stack applications with MongoDB, Express.js, React, and Node.js with REST API integration.',
      duration: '2 - 3 Months'
    },
    {
      id: 'mobile',
      title: 'Mobile App Development',
      icon: <Smartphone size={28} className="text-emerald-600" />,
      desc: 'Develop cross-platform iOS and Android mobile applications using React Native or Flutter framework.',
      duration: '2 Months'
    },
    {
      id: 'uiux',
      title: 'UI/UX & Product Design',
      icon: <Database size={28} className="text-emerald-600" />,
      desc: 'Learn user research, wireframing, prototyping, and modern design systems using Figma and Adobe XD.',
      duration: '1 Month'
    },
    {
      id: 'python-ml',
      title: 'Python & Machine Learning',
      icon: <Cpu size={28} className="text-emerald-600" />,
      desc: 'Explore data analysis, predictive modeling, NLP models, and machine learning pipelines using Python & Flask.',
      duration: '2 Months'
    },
    {
      id: 'cyber',
      title: 'Cyber Security & Networking',
      icon: <ShieldCheck size={28} className="text-emerald-600" />,
      desc: 'Understand network fundamentals, security protocols, ethical hacking principles, and vulnerability scanning.',
      duration: '1 - 2 Months'
    }
  ];

  return (
    <div className="page-wrapper" style={{ padding: '3rem 1.5rem', maxWidth: '1200px', margin: '0 auto' }}>
      <header style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
        <h1 style={{ fontSize: '2.5rem', fontWeight: '800', color: '#0f172a', marginBottom: '0.75rem' }}>
          Available Internship Tracks
        </h1>
        <p style={{ color: '#64748b', fontSize: '1.1rem', maxWidth: '650px', margin: '0 auto' }}>
          Select your domain, gain hands-on task experience, and build a verified developer portfolio.
        </p>
      </header>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2rem' }}>
        {trackList.map((track) => (
          <div key={track.id} style={{ background: '#ffffff', border: '1px solid #e2e8f0', borderRadius: '14px', padding: '2rem', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', boxShadow: '0 4px 6px -1px rgba(0,0,0,0.03)' }}>
            <div>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.25rem' }}>
                <div style={{ padding: '0.75rem', background: '#f0fdf4', borderRadius: '10px', color: '#16a34a' }}>
                  {track.icon}
                </div>
                <span style={{ background: '#f1f5f9', color: '#475569', padding: '0.25rem 0.75rem', borderRadius: '20px', fontSize: '0.8rem', fontWeight: '600' }}>
                  {track.duration}
                </span>
              </div>
              <h3 style={{ fontSize: '1.3rem', fontWeight: '700', color: '#0f172a', marginBottom: '0.6rem' }}>{track.title}</h3>
              <p style={{ color: '#64748b', fontSize: '0.95rem', lineHeight: '1.6', marginBottom: '1.75rem' }}>{track.desc}</p>
            </div>
            <Link to="/apply" className="btn-secondary" style={{ textAlign: 'center', width: '100%', display: 'block' }}>
              Apply for this Track
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Tracks;