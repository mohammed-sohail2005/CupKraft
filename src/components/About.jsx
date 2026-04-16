import React, { useState } from 'react';

const About = ({ addToRefs }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      title: "The CupKraft Mission",
      content: "At CupKraft, we believe that the small rituals of our day — like that first sip of coffee — should be effortless and ethical. We started with a simple question: 'How can we make carrying coffee as easy as drinking it?' Our biodegradable sleeve was born from a desire to merge artisanal craft with eco-conscious innovation.",
      stats: [
        { value: "Premium", label: "Quality Materials" },
        { value: "Universal", label: "Fits All Cups" },
        { value: "Eco-Friendly", label: "Sustainable Materials" }
      ]
    },
    {
      title: "Sustainable Future",
      content: "Environmental responsibility isn't just a buzzword for us; it's our foundation. Every CupKraft sleeve is 100% biodegradable and made from recycled cardboard. We are committed to reducing the billions of plastic cup holders that end up in landfills every year, one coffee at a time.",
      stats: [
        { value: "Zero", label: "Plastic Waste" },
        { value: "100%", label: "Biodegradable" },
        { value: "Recycled", label: "Cardboard Base" }
      ]
    },
    {
      title: "Artisanal Innovation",
      content: "Innovation meets tradition. Our unique rotating handle wasn't designed overnight. It was prototyped dozens of times to find the perfect balance point. The result is a modular accessory that feels natural in your hand and folds flat when you're done. It's engineering with a clean soul.",
      stats: [
        { value: "360°", label: "Rotating Handle" },
        { value: "Modular", label: "Detachable Design" },
        { value: "Sleek", label: "Travel Friendly" }
      ]
    }
  ];

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slides.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);

  return (
    <section id="story" className="about fade-in" ref={addToRefs}>
      <div className="container about_container">
        <div className="slider_controls slider_prev" onClick={prevSlide}>‹</div>
        
        <div className="about_slider">
          {slides.map((slide, index) => (
            <div 
              key={index} 
              className={`about_slide ${index === currentSlide ? 'active' : ''}`}
              style={{ transform: `translateX(${(index - currentSlide) * 100}%)` }}
            >
              <div className="about_content">
                <h2 className="about_title">{slide.title}</h2>
                <p className="about_paragraph">{slide.content}</p>
                <div className="about_stats">
                  {slide.stats.map((stat, i) => (
                    <React.Fragment key={i}>
                      <div className="stat_item">
                        <span className="stat_value">{stat.value}</span>
                        <span className="stat_label">{stat.label}</span>
                      </div>
                      {i < slide.stats.length - 1 && <div className="stat_divider"></div>}
                    </React.Fragment>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="slider_controls slider_next" onClick={nextSlide}>›</div>
        
        <div className="slider_dots">
          {slides.map((_, i) => (
            <div 
              key={i} 
              className={`dot ${i === currentSlide ? 'active' : ''}`}
              onClick={() => setCurrentSlide(i)}
            ></div>
          ))}
        </div>
      </div>
      <style>{`
        .about {
          background-color: var(--color-cream);
          padding: 8rem 0;
          overflow: hidden;
          position: relative;
        }
        .about_container {
          position: relative;
          max-width: 1000px;
          margin: 0 auto;
        }
        .about_slider {
          position: relative;
          height: 450px;
          overflow: hidden;
        }
        .about_slide {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          opacity: 0;
          transition: all 0.8s cubic-bezier(0.16, 1, 0.3, 1);
          display: flex;
          align-items: center;
          justify-content: center;
          text-align: center;
        }
        .about_slide.active {
          opacity: 1;
        }
        .about_content {
          max-width: 800px;
        }
        .about_title {
          font-size: 2.8rem;
          color: var(--color-brown);
          margin-bottom: 2rem;
        }
        .about_paragraph {
          font-size: 1.25rem;
          color: var(--color-text);
          opacity: 0.85;
          margin-bottom: 4rem;
          line-height: 1.8;
          min-height: 140px;
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
          font-size: 0.85rem;
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
        .slider_controls {
          position: absolute;
          top: 50%;
          transform: translateY(-100%);
          font-size: 4rem;
          color: var(--color-brown);
          opacity: 0.3;
          cursor: pointer;
          transition: var(--transition);
          z-index: 10;
          user-select: none;
        }
        .slider_controls:hover {
          opacity: 1;
          color: var(--color-terracotta);
        }
        .slider_prev { left: -60px; }
        .slider_next { right: -60px; }
        
        .slider_dots {
          display: flex;
          justify-content: center;
          gap: 1rem;
          margin-top: 3rem;
        }
        .dot {
          width: 10px;
          height: 10px;
          border-radius: 50%;
          background-color: var(--color-brown);
          opacity: 0.2;
          cursor: pointer;
          transition: var(--transition);
        }
        .dot.active {
          opacity: 1;
          background-color: var(--color-terracotta);
          transform: scale(1.3);
        }

        @media (max-width: 1100px) {
          .slider_prev { left: 10px; }
          .slider_next { right: 10px; }
        }
        @media (max-width: 768px) {
          .about_slider { height: 600px; }
          .about_title { font-size: 2rem; }
          .about_paragraph { font-size: 1.1rem; }
          .about_stats {
            flex-direction: column;
            gap: 2rem;
          }
          .stat_divider { display: none; }
          .slider_controls { display: none; }
        }
      `}</style>
    </section>
  );
};

export default About;
