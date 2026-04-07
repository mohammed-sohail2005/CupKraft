import React from 'react';

const ProductShowcase = ({ addToRefs }) => {
  return (
    <section id="product" className="showcase fade-in" ref={addToRefs}>
      <div className="container showcase_content">
        <div className="showcase_image">
          <img src="/showcase.png" alt="CupKraft Showcase" />
          <div className="showcase_badge">Made for everyday café life.</div>
        </div>
        <div className="showcase_info">
          <h2 className="showcase_title">Precision Crafted for your Morning Brew</h2>
          <p className="showcase_desc">
            The CupKraft modular sleeve is the only coffee accessory that puts convenience first. 
            By combining premium insulation with a detachable rotating handle, we've redefined how you carry your coffee.
          </p>
          <ul className="showcase_list">
            <li>
              <span className="checkmark">✓</span>
              <span>Lightweight and modular design.</span>
            </li>
            <li>
              <span className="checkmark">✓</span>
              <span>Fits any standard takeaway cup size.</span>
            </li>
            <li>
              <span className="checkmark">✓</span>
              <span>Engineered rotation for balanced carrying.</span>
            </li>
            <li>
              <span className="checkmark">✓</span>
              <span>Machine-washable textile sleeve.</span>
            </li>
          </ul>
        </div>
      </div>
      <style>{`
        .showcase {
          background-color: var(--color-bg);
          padding: 8rem 0;
        }
        .showcase_content {
          display: grid;
          grid-template-columns: 1fr 1fr;
          align-items: center;
          gap: 6rem;
        }
        .showcase_image {
          position: relative;
        }
        .showcase_image img {
          width: 100%;
          border-radius: 20px;
          box-shadow: 0 40px 100px -20px rgba(107, 58, 42, 0.15);
        }
        .showcase_badge {
          position: absolute;
          bottom: -1rem;
          right: -1rem;
          background-color: var(--color-terracotta);
          color: var(--color-white);
          padding: 1rem 2rem;
          border-radius: 8px;
          font-family: var(--font-serif);
          font-weight: 700;
          box-shadow: 0 20px 40px rgba(201, 106, 58, 0.3);
        }
        .showcase_title {
          font-size: 2.5rem;
          color: var(--color-brown);
          margin-bottom: 2rem;
        }
        .showcase_desc {
          font-size: 1.1rem;
          color: var(--color-text);
          opacity: 0.8;
          margin-bottom: 2.5rem;
        }
        .showcase_list {
          display: flex;
          flex-direction: column;
          gap: 1.2rem;
        }
        .showcase_list li {
          display: flex;
          align-items: center;
          gap: 1rem;
          font-weight: 600;
          color: var(--color-brown);
        }
        .checkmark {
          color: var(--color-terracotta);
          font-size: 1.2rem;
          font-weight: 800;
        }
        @media (max-width: 1024px) {
          .showcase_content { gap: 3rem; }
        }
        @media (max-width: 768px) {
          .showcase_content {
            grid-template-columns: 1fr;
            text-align: center;
          }
          .showcase_list li {
            justify-content: center;
          }
          .showcase_badge {
            bottom: -0.5rem;
            right: 50%;
            transform: translateX(50%);
          }
        }
      `}</style>
    </section>
  );
};

export default ProductShowcase;
