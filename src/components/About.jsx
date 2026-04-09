import React from 'react';

const About = ({ addToRefs }) => {
  return (
    <section id="story" className="about fade-in" ref={addToRefs}>
      <div className="container about_content">
        <h2 className="about_title">The CupKraft Mission</h2>
        <p className="about_paragraph">
          At CupKraft, we believe that the small rituals of our day — like that first sip of coffee 
          — should be effortless and ethical. We started with a simple question: "How can we make carrying 
          coffee as easy as drinking it?" Our biodegradable sleeve was born from a desire to merge 
          artisanal craft with eco-conscious innovation. Every product we make is designed for 
          convenience, sustainability, and making your daily commute a little bit greener.
        </p>
        <div className="about_stats">
          <div className="stat_item">
            <span className="stat_value">Premium</span>
            <span className="stat_label">Quality Materials</span>
          </div>
          <div className="stat_divider"></div>
          <div className="stat_item">
            <span className="stat_value">Universal</span>
            <span className="stat_label">Fits All Cups</span>
          </div>
          <div className="stat_divider"></div>
          <div className="stat_item">
            <span className="stat_value">Eco-Friendly</span>
            <span className="stat_label">Sustainable Materials</span>
          </div>
        </div>
      </div>
      <style>{`
        .about {
          background-color: var(--color-cream);
          text-align: center;
          padding: 8rem 0;
        }
        .about_content {
          max-width: 800px;
        }
        .about_title {
          font-size: 2.5rem;
          color: var(--color-brown);
          margin-bottom: 2rem;
        }
        .about_paragraph {
          font-size: 1.25rem;
          color: var(--color-text);
          opacity: 0.85;
          margin-bottom: 4rem;
          line-height: 1.8;
        }
        .about_stats {
          display: flex;
          justify-content: center;
          align-items: center;
          gap: 3rem;
          padding-top: 2rem;
          border-top: 1px solid rgba(107, 58, 42, 0.1);
        }
        .stat_item {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
        }
        .stat_value {
          font-size: 1.75rem;
          font-family: var(--font-serif);
          font-weight: 800;
          color: var(--color-terracotta);
        }
        .stat_label {
          font-size: 0.9rem;
          font-weight: 600;
          color: var(--color-brown);
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }
        .stat_divider {
          width: 1px;
          height: 40px;
          background-color: rgba(107, 58, 42, 0.2);
        }
        @media (max-width: 768px) {
          .about_stats {
            flex-direction: column;
            gap: 2rem;
          }
          .stat_divider { display: none; }
        }
      `}</style>
    </section>
  );
};

export default About;
