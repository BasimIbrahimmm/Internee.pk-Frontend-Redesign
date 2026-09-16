import React, { createContext, useContext, useState, useEffect } from 'react';

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  // Initialize stored applications database
  const [applications, setApplications] = useState(() => {
    const saved = localStorage.getItem('internee_applications');
    return saved ? JSON.parse(saved) : [];
  });

  // Current active logged-in user state
  const [currentUser, setCurrentUser] = useState(() => {
    const savedUser = localStorage.getItem('internee_user');
    return savedUser ? JSON.parse(savedUser) : {
      name: "John Doe",
      email: "john.doe@example.com",
      track: "Frontend Development Intern Track",
      university: "Sir Syed University of Engineering & Technology",
      progress: 85,
      tasks: [
        { id: 1, title: "Responsive Layout Setup", status: "completed" },
        { id: 2, title: "React State & Dynamic Context", status: "completed" },
        { id: 3, title: "Build a Responsive Landing Page in React", status: "active", daysLeft: 2 }
      ]
    };
  });

  useEffect(() => {
    localStorage.setItem('internee_applications', JSON.stringify(applications));
  }, [applications]);

  useEffect(() => {
    localStorage.setItem('internee_user', JSON.stringify(currentUser));
  }, [currentUser]);

  // Save candidate registration
  const submitApplication = (formData) => {
    const newEntry = {
      id: Date.now(),
      ...formData,
      submittedAt: new Date().toISOString()
    };
    setApplications(prev => [newEntry, ...prev]);

    // Auto-update logged in user track
    setCurrentUser(prev => ({
      ...prev,
      name: formData.fullName,
      email: formData.email,
      track: formData.track,
      university: formData.university
    }));
  };

  // Complete LMS Task
  const completeTask = (taskId) => {
    setCurrentUser(prev => ({
      ...prev,
      tasks: prev.tasks.map(t =>
        t.id === taskId ? { ...t, completed: true } : t
      )
    }));
  };

  return (
    <AppContext.Provider value={{ applications, currentUser, submitApplication, completeTask, setCurrentUser }}>
      {children}
    </AppContext.Provider>
  );
};

export const useApp = () => useContext(AppContext);