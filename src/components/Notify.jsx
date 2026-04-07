import React, { useState } from 'react';

const Notify = ({ addToRefs }) => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Thank you! We'll notify ${email} when we launch.`);
    setEmail('');
  };

  return (
    <section id="contact" className="notify fade-in" ref={addToRefs}>
      <div className="container notify_content">
        <h2 className="notify_title">Be the first to know.</h2>
        <p className="notify_sub">
          Join our waitlist for early access to the CupKraft modular sleeve and exclusive café culture perks.
        </p>
        <form className="notify_form" onSubmit={handleSubmit}>
          <input 
            type="email" 
            placeholder="Enter your email" 
            className="notify_input" 
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <button type="submit" className="btn btn-primary notify_btn">Notify Me</button>
        </form>
      </div>
      <style>{`
        .notify {
          background-color: var(--color-bg);
          position: relative;
          overflow: hidden;
          padding: 8rem 0;
          text-align: center;
        }
        /* Subtle Grid Pattern */
        .notify::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background-image: 
            radial-gradient(var(--color-terracotta) 1px, transparent 1px);
          background-size: 40px 40px;
          opacity: 0.05;
          pointer-events: none;
        }
        .notify_content {
          max-width: 600px;
          position: relative;
          z-index: 1;
        }
        .notify_title {
          font-size: 2.5rem;
          color: var(--color-brown);
          margin-bottom: 1rem;
        }
        .notify_sub {
          font-size: 1.1rem;
          color: var(--color-text);
          opacity: 0.7;
          margin-bottom: 3rem;
        }
        .notify_form {
          display: flex;
          gap: 0.5rem;
          background-color: var(--color-white);
          padding: 0.5rem;
          border-radius: 8px;
          box-shadow: 0 20px 40px rgba(107, 58, 42, 0.08);
          border: 1px solid rgba(107, 58, 42, 0.1);
        }
        .notify_input {
          flex: 1;
          padding: 1rem 1.5rem;
          border: none;
          outline: none;
          font-family: var(--font-sans);
          font-size: 1rem;
          background: transparent;
        }
        .notify_btn {
          white-space: nowrap;
        }
        @media (max-width: 600px) {
          .notify_form {
            flex-direction: column;
            background: transparent;
            box-shadow: none;
            padding: 0;
          }
          .notify_input {
            background-color: var(--color-white);
            border-radius: 8px;
            margin-bottom: 1rem;
            border: 1px solid rgba(107, 58, 42, 0.1);
          }
           .notify_btn {
            border-radius: 8px;
          }
        }
      `}</style>
    </section>
  );
};

export default Notify;
