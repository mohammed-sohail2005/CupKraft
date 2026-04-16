import React, { useState } from 'react';

const AddToCartModal = ({ isOpen, onClose, product, onConfirm }) => {
  const [quantity, setQuantity] = useState(1);
  const PRICE_PER_UNIT = 15;

  if (!isOpen || !product) return null;

  const handleConfirm = () => {
    onConfirm(product, quantity);
    setQuantity(1);
    onClose();
  };

  return (
    <div className="modal_overlay" onClick={onClose}>
      <div className="qty_modal" onClick={(e) => e.stopPropagation()}>
        <button className="close_btn" onClick={onClose}>&times;</button>
        
        <div className="modal_header">
          <h3>Add to Cart</h3>
          <p>{product.title}</p>
        </div>

        <div className="qty_selection">
          <label>Select Quantity</label>
          <div className="qty_controls">
            <button 
              className="qty_btn" 
              onClick={() => setQuantity(Math.max(1, quantity - 1))}
              disabled={quantity <= 1}
            >-</button>
            <span className="qty_display">{quantity}</span>
            <button 
              className="qty_btn" 
              onClick={() => setQuantity(quantity + 1)}
            >+</button>
          </div>
        </div>

        <div className="price_summary">
          <div className="summary_row">
            <span>Price per Cup</span>
            <span>₹{PRICE_PER_UNIT}</span>
          </div>
          <div className="summary_row total">
            <span>Subtotal</span>
            <span>₹{quantity * PRICE_PER_UNIT}</span>
          </div>
        </div>

        <button className="btn btn-primary add_btn" onClick={handleConfirm}>
          Confirm Add to Cart
        </button>
      </div>

      <style>{`
        .modal_overlay {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background-color: rgba(0, 0, 0, 0.4);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 3000;
          backdrop-filter: blur(8px);
          animation: fadeIn 0.3s ease-out;
        }
        .qty_modal {
          background-color: var(--color-bg);
          width: 90%;
          max-width: 400px;
          padding: 2.5rem;
          border-radius: 24px;
          position: relative;
          box-shadow: 0 40px 100px rgba(0,0,0,0.1);
          border: 1px solid rgba(107, 58, 42, 0.1);
          animation: slideUp 0.4s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .close_btn {
          position: absolute;
          top: 1.5rem;
          right: 1.5rem;
          font-size: 2rem;
          color: var(--color-brown);
          opacity: 0.5;
        }
        .modal_header {
          text-align: center;
          margin-bottom: 2rem;
        }
        .modal_header h3 {
          font-size: 1.8rem;
          color: var(--color-brown);
          margin-bottom: 0.3rem;
        }
        .modal_header p {
          color: var(--color-text);
          opacity: 0.6;
          font-size: 0.9rem;
        }
        .qty_selection {
          margin-bottom: 2rem;
          text-align: center;
        }
        .qty_selection label {
          display: block;
          font-size: 0.8rem;
          text-transform: uppercase;
          font-weight: 700;
          color: var(--color-brown);
          margin-bottom: 1rem;
          letter-spacing: 0.05em;
        }
        .qty_controls {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 2rem;
          background: var(--color-white);
          width: fit-content;
          margin: 0 auto;
          padding: 0.5rem 1.5rem;
          border-radius: 99px;
          border: 1px solid rgba(107, 58, 42, 0.1);
        }
        .qty_btn {
          font-size: 1.5rem;
          font-weight: 800;
          color: var(--color-brown);
          width: 32px;
          height: 32px;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .qty_btn:disabled {
          opacity: 0.2;
          cursor: not-allowed;
        }
        .qty_display {
          font-size: 1.5rem;
          font-weight: 800;
          color: var(--color-brown);
          min-width: 40px;
        }
        .price_summary {
          background: rgba(107, 58, 42, 0.03);
          padding: 1.5rem;
          border-radius: 16px;
          margin-bottom: 2rem;
          display: flex;
          flex-direction: column;
          gap: 0.8rem;
        }
        .summary_row {
          display: flex;
          justify-content: space-between;
          font-size: 0.9rem;
          color: var(--color-text);
          opacity: 0.7;
        }
        .summary_row.total {
          opacity: 1;
          font-weight: 800;
          color: var(--color-brown);
          font-size: 1.1rem;
          border-top: 1px solid rgba(107, 58, 42, 0.1);
          padding-top: 0.8rem;
        }
        .add_btn {
          width: 100%;
          padding: 1.2rem;
        }
        @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
        @keyframes slideUp { 
          from { opacity: 0; transform: translateY(20px); } 
          to { opacity: 1; transform: translateY(0); } 
        }
      `}</style>
    </div>
  );
};

export default AddToCartModal;
