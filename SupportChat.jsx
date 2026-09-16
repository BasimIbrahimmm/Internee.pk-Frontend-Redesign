import React, { useState } from 'react';
import { Headphones, X, Send, Sparkles } from 'lucide-react';

const SupportChat = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      sender: 'bot',
      text: '⭐ Assistant: Welcome to internee.pk support! I use rule-based answers to guide you on common queries. How can I help you today?'
    }
  ]);
  const [input, setInput] = useState('');

  const handleSend = (e) => {
    e.preventDefault();
    if (!input.trim()) return;

    const userText = input;
    setMessages((prev) => [...prev, { sender: 'user', text: userText }]);
    setInput('');

    setTimeout(() => {
      let reply = 'Thank you for reaching out! You can explore active internship tracks on our tracks page or apply directly via the LMS portal.';
      if (userText.toLowerCase().includes('internship') || userText.toLowerCase().includes('track')) {
        reply = 'We offer virtual internships in Frontend, Backend, Graphic Design, Chatbot Development, App Development, and more!';
      } else if (userText.toLowerCase().includes('certificate') || userText.toLowerCase().includes('job')) {
        reply = 'All completed internships award verified digital certificates and direct exposure to our hiring partner network.';
      }

      setMessages((prev) => [...prev, { sender: 'bot', text: reply }]);
    }, 600);
  };

  return (
    <div className="support-chat-wrapper">
      {isOpen && (
        <div className="chat-window">
          <div className="chat-header">
            <div className="chat-title">
              <Headphones size={18} />
              <div>
                <strong>Support Chat</strong>
                <span className="sub">Rule-Based Assistant</span>
              </div>
            </div>
            <button className="close-btn" onClick={() => setIsOpen(false)}><X size={18} /></button>
          </div>

          <div className="chat-body">
            {messages.map((msg, idx) => (
              <div key={idx} className={`chat-bubble ${msg.sender}`}>
                {msg.text}
              </div>
            ))}
          </div>

          <div className="chat-quick-tags">
            <button onClick={() => setInput('Tell me about internships')}>Internships</button>
            <button onClick={() => setInput('How to get certificates?')}>Certificates</button>
            <button onClick={() => setInput('Job Portal info')}>Job Portal</button>
          </div>

          <form className="chat-footer" onSubmit={handleSend}>
            <input
              type="text"
              placeholder="Ask about internships, certificates..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
            />
            <button type="submit"><Send size={16} /></button>
          </form>
        </div>
      )}

      <button className="chat-trigger-btn" onClick={() => setIsOpen(!isOpen)} aria-label="Support Chat">
        <Headphones size={24} />
      </button>
    </div>
  );
};

export default SupportChat;