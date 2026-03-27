import React, { useState } from 'react';
import { Send } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState({ type: '', message: '', visible: false });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus({ ...status, visible: false });

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (response.ok) {
        setStatus({ type: 'success', message: result.message || 'Message sent successfully!', visible: true });
        setFormData({ name: '', email: '', message: '' });
      } else {
        setStatus({ type: 'error', message: result.error || 'Something went wrong. Please try again.', visible: true });
      }
    } catch (error) {
      setStatus({ type: 'error', message: 'Network error. Please check your connection.', visible: true });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" data-testid="contact-section">
      <h2>Contact Me</h2>
      <div className="card">
        <p className="about-text" style={{ marginBottom: '1.5rem' }}>
          Interested in working together or have a question? Send me a message!
        </p>
        <form id="contact-form" className="contact-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              required
              placeholder="Your Name"
              data-testid="contact-name"
              value={formData.name}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              required
              placeholder="your.email@example.com"
              data-testid="contact-email"
              value={formData.email}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              rows="4"
              required
              placeholder="How can I help you?"
              data-testid="contact-message"
              value={formData.message}
              onChange={handleChange}
            ></textarea>
          </div>
          <button
            type="submit"
            id="submit-btn"
            className="submit-btn"
            data-testid="contact-submit"
            disabled={loading}
          >
            {loading ? 'Sending...' : (
              <>
                <Send size={18} /> Send Message
              </>
            )}
          </button>
          {status.visible && (
            <div
              id="form-message"
              className={`form-message ${status.type}`}
              data-testid="contact-status-message"
            >
              {status.message}
            </div>
          )}
        </form>
      </div>
    </section>
  );
};

export default Contact;
