import React from 'react';

const Navbar = ({ onOrderClick }) => {
  return (
    <nav className="navbar">
      <div className="container navbar_content">
        <div className="navbar_logo">
          <span className="logo_cup">Cup</span>
          <span className="logo_kraft">Kraft</span>
        </div>
        <ul className="navbar_links">
          <li><a href="#explorer">Product</a></li>
          <li><a href="#features">Innovation</a></li>
          <li><a href="#about">Our Story</a></li>
        </ul>
        <div className="navbar_cta">
          <button className="btn btn-primary" onClick={onOrderClick}>Order Now</button>
        </div>
      </div>
      <style>{`
        .navbar {
          position: sticky;
          top: 0;
          z-index: 1000;
          background-color: var(--color-bg);
          border-bottom: 1px solid rgba(107, 58, 42, 0.1);
          padding: 1rem 0;
          backdrop-filter: blur(10px);
        }
        .navbar_content {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
        .navbar_logo {
          font-family: var(--font-serif);
          font-size: 1.5rem;
          font-weight: 800;
        }
        .logo_cup { color: var(--color-brown); }
        .logo_kraft { color: var(--color-terracotta); }
        .navbar_links {
          display: flex;
          gap: 2rem;
        }
        .navbar_links a {
          font-weight: 500;
          font-size: 0.9rem;
          color: var(--color-text);
          transition: var(--transition);
        }
        .navbar_links a:hover {
          color: var(--color-terracotta);
        }
        @media (max-width: 768px) {
          .navbar_links { display: none; }
        }
      `}</style>
    </nav>
  );
};

export default Navbar;
