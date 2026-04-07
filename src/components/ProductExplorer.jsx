import React, { useState } from 'react';

const ProductExplorer = ({ addToRefs }) => {
  const [activeView, setActiveView] = useState('front');
  const [activeMarker, setActiveMarker] = useState(null);

  const views = {
    front: {
      image: '/front.png',
      label: 'Front View',
      markers: [
        { id: 1, top: '48%', left: '50%', title: 'Insulated Sleeve', desc: 'Double-layered kraft material for superior heat protection.' },
        { id: 2, top: '58%', left: '32%', title: 'Rotating Handle', desc: 'Ergonomic 360° rotation for balanced carrying.' }
      ]
    },
    side: {
      image: '/side.png',
      label: 'Side View',
      markers: [
        { id: 3, top: '50%', left: '72%', title: 'Pivot Hinge', desc: 'Precision-engineered modular attachment point.' }
      ]
    },
    top: {
      image: '/front.png', // Temporary until quota resets
      label: 'Top View (Coming Soon)',
      markers: []
    },
    bottom: {
      image: '/front.png', // Temporary until quota resets
      label: 'Bottom View (Coming Soon)',
      markers: []
    },
    detached: {
      image: '/front.png', // Temporary until quota resets
      label: 'Detached View (Coming Soon)',
      markers: []
    }
  };

  return (
    <section id="explorer" className="explorer fade-in" ref={addToRefs}>
      <div className="container overflow-visible">
        <div className="explorer_header">
          <h2 className="explorer_title">Explore the CupKraft Innovation</h2>
          <p className="explorer_subtitle">Switch views and interact with markers to see how it works.</p>
        </div>

        <div className="explorer_main">
          {/* View Selection */}
          <div className="view_controls">
            {Object.keys(views).map((view) => (
              <button
                key={view}
                className={`view_btn ${activeView === view ? 'active' : ''}`}
                onClick={() => {
                  setActiveView(view);
                  setActiveMarker(null);
                }}
              >
                {views[view].label}
              </button>
            ))}
          </div>

          {/* Interactive Viewer */}
          <div className="viewer_container">
            <div className="image_wrapper">
              <img 
                src={views[activeView].image} 
                alt={views[activeView].label} 
                className="explorer_image"
                key={activeView}
              />
              
              {/* Markers */}
              {views[activeView].markers.map((marker) => (
                <div 
                  key={marker.id}
                  className="marker"
                  style={{ top: marker.top, left: marker.left }}
                  onMouseEnter={() => setActiveMarker(marker)}
                  onMouseLeave={() => setActiveMarker(null)}
                  onClick={() => setActiveMarker(marker)}
                >
                  <div className="pulse"></div>
                  {activeMarker?.id === marker.id && (
                    <div className="tooltip">
                      <h4>{marker.title}</h4>
                      <p>{marker.desc}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
            
            {/* Detail Panel */}
            <div className={`detail_panel ${activeMarker ? 'visible' : ''}`}>
               {activeMarker ? (
                 <>
                   <h3>{activeMarker.title}</h3>
                   <p>{activeMarker.desc}</p>
                 </>
               ) : (
                 <p className="hint">Click or hover over a pulse to see details</p>
               )}
            </div>
          </div>
        </div>
      </div>
      <style>{`
        .explorer {
          background-color: var(--color-white);
          padding: 6rem 0;
          overflow: visible;
        }
        .explorer_header {
          text-align: center;
          margin-bottom: 3rem;
        }
        .explorer_title {
          font-size: 2.5rem;
          color: var(--color-brown);
          margin-bottom: 1rem;
        }
        .explorer_subtitle {
          font-size: 1.1rem;
          color: var(--color-text);
          opacity: 0.6;
        }
        .explorer_main {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 2rem;
        }
        .view_controls {
          display: flex;
          gap: 0.8rem;
          flex-wrap: wrap;
          justify-content: center;
          margin-bottom: 1rem;
        }
        .view_btn {
          padding: 0.6rem 1.2rem;
          border: 1px solid rgba(107, 58, 42, 0.1);
          border-radius: 99px;
          font-size: 0.85rem;
          font-weight: 600;
          color: var(--color-brown);
          background: transparent;
          transition: var(--transition);
        }
        .view_btn.active {
          background-color: var(--color-terracotta);
          color: var(--color-white);
          border-color: var(--color-terracotta);
        }
        .viewer_container {
          position: relative;
          width: 100%;
          max-width: 1100px;
          display: grid;
          grid-template-columns: 1fr 280px;
          gap: 2rem;
          align-items: center;
          overflow: visible;
        }
        .image_wrapper {
          position: relative;
          background-color: var(--color-bg);
          border-radius: 20px;
          padding: 1rem;
          width: 100%;
          aspect-ratio: 4/3;
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;
          border: 1px solid rgba(107, 58, 42, 0.05);
        }
        .explorer_image {
          width: 100%;
          height: 100%;
          object-fit: contain;
          animation: fadeInScale 0.5s ease-out;
        }
        .marker {
          position: absolute;
          width: 20px;
          height: 20px;
          cursor: pointer;
          z-index: 10;
          transform: translate(-50%, -50%);
        }
        .pulse {
          width: 100%;
          height: 100%;
          background-color: var(--color-terracotta);
          border-radius: 50%;
          opacity: 0.9;
          animation: pulseAnim 2.5s infinite;
        }
        .tooltip {
          position: absolute;
          bottom: 130%;
          left: 50%;
          transform: translateX(-50%);
          background: var(--color-brown);
          color: var(--color-white);
          padding: 0.8rem 1rem;
          border-radius: 6px;
          width: 180px;
          font-size: 0.75rem;
          box-shadow: 0 10px 25px rgba(0,0,0,0.2);
          pointer-events: none;
          z-index: 20;
          animation: floatIn 0.3s ease-out;
        }
        .tooltip h4 { margin-bottom: 0.3rem; color: var(--color-cream); font-family: var(--font-sans); }
        .detail_panel {
          background-color: var(--color-cream);
          padding: 2rem;
          border-radius: 12px;
          height: 100%;
          min-height: 200px;
          display: flex;
          flex-direction: column;
          justify-content: center;
          border: 1px solid rgba(107, 58, 42, 0.05);
          transition: var(--transition);
        }
        .detail_panel h3 { color: var(--color-brown); margin-bottom: 0.8rem; font-size: 1.3rem; }
        .detail_panel p { color: var(--color-text); line-height: 1.5; font-size: 0.95rem; opacity: 0.8; }
        .detail_panel .hint { opacity: 0.4; font-style: italic; font-size: 0.85rem; text-align: center; }
        
        @keyframes fadeInScale { 
          from { opacity: 0; transform: scale(0.95); } 
          to { opacity: 1; transform: scale(1); }
        }
        @keyframes pulseAnim {
          0% { transform: scale(0.7); box-shadow: 0 0 0 0 rgba(201, 106, 58, 0.6); }
          70% { transform: scale(1.1); box-shadow: 0 0 0 12px rgba(201, 106, 58, 0); }
          100% { transform: scale(0.7); box-shadow: 0 0 0 0 rgba(201, 106, 58, 0); }
        }
        @keyframes floatIn {
          from { opacity: 0; transform: translate(-50%, 8px); }
          to { opacity: 1; transform: translate(-50%, 0); }
        }

        @media (max-width: 1024px) {
          .viewer_container { grid-template-columns: 1fr; gap: 1.5rem; }
          .detail_panel { width: 100%; text-align: center; min-height: auto; padding: 1.5rem; }
        }
        @media (max-width: 768px) {
          .explorer_title { font-size: 1.8rem; }
          .image_wrapper { aspect-ratio: 3/2; }
        }
      `}</style>
    </section>
  );
};

export default ProductExplorer;
