import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useCart } from '../context/CartContext';

const Navbar = ({ onOrderClick }) => {
  const { cartTotal } = useCart();
  const location = useLocation();
  const isHome = location.pathname === '/';

  const NavLink = ({ href, children }) => (
    <li>
      <a href={isHome ? href : `/${href}`}>{children}</a>
    </li>
  );

  return (
    <nav className="navbar">
      <div className="container navbar_content">
        <Link to="/" className="navbar_logo">
          <img src="/logo.png" alt="CupKraft Logo" className="logo_img" />
        </Link>
        <ul className="navbar_links">
          <NavLink href="#explorer">Product</NavLink>
          <NavLink href="#features">Innovation</NavLink>
          <NavLink href="#story">Our Story</NavLink>
        </ul>
        <div className="navbar_cta">
          <Link to="/cart" className="cart_link">
            <span className="cart_icon">🛒</span>
            {cartTotal > 0 && <span className="cart_badge">{cartTotal}</span>}
          </Link>
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
          height: 48px;
          display: flex;
          align-items: center;
        }
        .logo_img {
          height: 100%;
          width: auto;
          object-fit: contain;
        }
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
        .navbar_cta {
          display: flex;
          align-items: center;
          gap: 1.5rem;
        }
        .cart_link {
          position: relative;
          font-size: 1.5rem;
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--color-brown);
          transition: var(--transition);
        }
        .cart_link:hover {
          transform: scale(1.1);
        }
        .cart_badge {
          position: absolute;
          top: -8px;
          right: -8px;
          background-color: var(--color-terracotta);
          color: white;
          font-size: 0.7rem;
          font-weight: 800;
          width: 18px;
          height: 18px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          border: 2px solid var(--color-bg);
        }
        @media (max-width: 768px) {
          .navbar_links { display: none; }
        }
      `}</style>
    </nav>
  );
};

export default Navbar;
