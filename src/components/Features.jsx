import React from 'react';

const icons = {
  heat: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2v20"/><path d="m5 15 7-7 7 7"/></svg>
  ),
  handle: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 2a10 10 0 0 1 10 10"/><path d="m12 12 5 5"/></svg>
  ),
  hands: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m18 15 3-3-3-3"/><path d="m6 9-3 3 3 3"/><path d="M3 12h18"/></svg>
  ),
  eco: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.5 21 2c-2 4-2.5 5.5-3.6 11.2a7 7 0 1 1-6.4 6.8z"/><path d="M11 20a7 7 0 0 1-7-7c0-2 1-3.9 2.6-5.2"/></svg>
  )
};

const Features = ({ addToRefs }) => {
  const features = [
    {
      icon: icons.heat,
      title: "Heat-Protective Sleeve",
      description: "Double-layered kraft insulation keeps your coffee hot and your hands cool."
    },
    {
      icon: icons.handle,
      title: "Sturdy Integrated Handle",
      description: "Ergonomic arch design made from reinforced corrugated cardboard for a secure, balanced carry."
    },
    {
      icon: icons.hands,
      title: "Hands-Free Carry",
      description: "Loop it through your fingers or hook it to your bag. Stay mobile, stay caffeinated."
    },
    {
      icon: icons.eco,
      title: "Sustainable & Eco-Friendly",
      description: "Made from FSC-certified sustainable materials. Designed for a cleaner, greener tomorrow."
    }
  ];

  return (
    <section id="features" className="features fade-in" ref={addToRefs}>
      <div className="container">
        <h2 className="features_title">Designed for the Modern Commute</h2>
        <div className="features_grid">
          {features.map((feature, index) => (
            <div key={index} className="feature_card hover-lift">
              <div className="feature_icon">{feature.icon}</div>
              <h3 className="feature_card_title">{feature.title}</h3>
              <p className="feature_card_desc">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
      <style>{`
        .features {
          background-color: var(--color-white);
        }
        .features_title {
          text-align: center;
          font-size: 2.5rem;
          margin-bottom: 4rem;
          color: var(--color-brown);
        }
        .features_grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 2rem;
        }
        .feature_card {
          background-color: var(--color-cream);
          padding: 3rem;
          border-radius: 12px;
          border: 1px solid rgba(107, 58, 42, 0.05);
          text-align: left;
        }
        .feature_icon {
          color: var(--color-terracotta);
          margin-bottom: 1.5rem;
          display: inline-block;
          padding: 1rem;
          background-color: var(--color-white);
          border-radius: 8px;
        }
        .feature_card_title {
          font-size: 1.5rem;
          margin-bottom: 1rem;
          color: var(--color-brown);
        }
        .feature_card_desc {
          color: var(--color-text);
          opacity: 0.8;
          font-size: 1rem;
        }
        @media (max-width: 768px) {
          .features_grid {
            grid-template-columns: 1fr;
          }
          .features_title {
            font-size: 2rem;
          }
        }
      `}</style>
    </section>
  );
};

export default Features;
