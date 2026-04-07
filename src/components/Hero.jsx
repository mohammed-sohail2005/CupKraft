import React from 'react';

const Hero = ({ addToRefs, onOrderClick }) => {
  return (
    <section className="hero fade-in" ref={addToRefs}>
      <div className="container hero_content">
        <h1 className="hero_headline">Carry Your Coffee. Not The Hassle.</h1>
        <p className="hero_subheadline">
          The original modular cup sleeve with a detachable handle. Designed for the smarter, safer, hands-free carry.
        </p>
        <div className="hero_ctas">
          <button className="btn btn-primary" onClick={onOrderClick}>Order Now</button>
          <a href="#explorer" className="btn btn-outline">Explore Catalog</a>
        </div>
        <div className="hero_image_wrapper">
          <div className="floating_cup">
            <img 
              src="/hero.png" 
              alt="CupKraft Modular Sleeve" 
              className="hero_main_image"
            />
          </div>
        </div>
      </div>
      <style>{`
        .hero {
          text-align: center;
          padding: 6rem 0;
          overflow: hidden;
        }
        .hero_headline {
          font-size: 3.5rem;
          color: var(--color-brown);
          margin-bottom: 1.5rem;
          max-width: 800px;
          margin-left: auto;
          margin-right: auto;
        }
        .hero_subheadline {
          font-size: 1.25rem;
          color: var(--color-text);
          margin-bottom: 2.5rem;
          max-width: 600px;
          margin-left: auto;
          margin-right: auto;
          opacity: 0.8;
        }
        .hero_ctas {
          display: flex;
          gap: 1rem;
          justify-content: center;
          margin-bottom: 4rem;
        }
        .hero_image_wrapper {
          position: relative;
          max-width: 700px;
          margin: 0 auto;
        }
        .floating_cup {
          animation: float 4s ease-in-out infinite;
        }
        .hero_main_image {
          width: 100%;
          max-width: 600px;
          border-radius: 24px;
          box-shadow: 0 40px 80px -15px rgba(107, 58, 42, 0.15);
        }
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-30px); }
        }
        @media (max-width: 768px) {
          .hero_headline { font-size: 2.5rem; }
          .hero_subheadline { font-size: 1.1rem; }
        }
      `}</style>
    </section>
  );
};

export default Hero;
