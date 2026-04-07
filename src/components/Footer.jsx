import React from 'react';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container footer_content">
        <div className="footer_logo">
          <span className="logo_cup">Cup</span>
          <span className="logo_kraft">Kraft</span>
        </div>
        <p className="footer_tagline">Elevating every sip through innovative craft.</p>
        <div className="footer_socials">
          <a href="#" className="social_link">Instagram</a>
          <a href="#" className="social_link">Twitter</a>
          <a href="#" className="social_link">LinkedIn</a>
        </div>
        <p className="footer_copyright">
          © {new Date().getFullYear()} CupKraft. All rights reserved.
        </p>
      </div>
      <style>{`
        .footer {
          padding: 4rem 0;
          background-color: var(--color-white);
          border-top: 1px solid rgba(107, 58, 42, 0.05);
          text-align: center;
        }
        .footer_logo {
          font-family: var(--font-serif);
          font-size: 1.5rem;
          font-weight: 800;
          margin-bottom: 1.5rem;
        }
        .logo_cup { color: var(--color-brown); }
        .logo_kraft { color: var(--color-terracotta); }
        .footer_tagline {
          font-size: 1rem;
          color: var(--color-text);
          opacity: 0.6;
          margin-bottom: 2rem;
          max-width: 400px;
          margin-left: auto;
          margin-right: auto;
        }
        .footer_socials {
          display: flex;
          justify-content: center;
          gap: 2rem;
          margin-bottom: 2rem;
        }
        .social_link {
          font-size: 0.9rem;
          font-weight: 600;
          color: var(--color-brown);
          transition: var(--transition);
        }
        .social_link:hover {
          color: var(--color-terracotta);
        }
        .footer_copyright {
          font-size: 0.8rem;
          color: var(--color-text);
          opacity: 0.4;
          letter-spacing: 0.05em;
          text-transform: uppercase;
        }
      `}</style>
    </footer>
  );
};

export default Footer;
