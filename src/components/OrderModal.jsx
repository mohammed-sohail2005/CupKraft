import React, { useState } from 'react';

const OrderModal = ({ isOpen, onClose }) => {
  const [isRedirecting, setIsRedirecting] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsRedirecting(true);
    
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData.entries());

    // Construct the mailto URL with pre-filled details
    const subject = encodeURIComponent(`New CupKraft Order - ${data.name}`);
    const body = encodeURIComponent(
      `CUPKRAFT ORDER DETAILS:\n\n` +
      `Product: Modular Cup Sleeve\n` +
      `Quantity: ${data.quantity}\n\n` +
      `CUSTOMER INFORMATION:\n` +
      `Name: ${data.name}\n` +
      `Phone: ${data.phone}\n` +
      `Gmail: ${data.email}\n\n` +
      `SHIPPING ADDRESS:\n` +
      `${data.address}\n\n` +
      `---------------------------\n` +
      `Generated via CupKraft Landing Page`
    );

    const mailtoUrl = `mailto:jameenh4@gmail.com?subject=${subject}&body=${body}`;

    // Trigger the email app
    window.location.href = mailtoUrl;

    // Show a helpful message before closing
    setTimeout(() => {
      setIsRedirecting(false);
      onClose();
    }, 3000);
  };

  return (
    <div className="modal_overlay" onClick={onClose}>
      <div className="order_modal" onClick={(e) => e.stopPropagation()}>
        <button className="close_btn" onClick={onClose}>&times;</button>
        
        {isRedirecting ? (
          <div className="redirect_message">
            <div className="loader"></div>
            <h2>Opening your email...</h2>
            <p>Please click 'Send' in the email app that just opened to finalize your order.</p>
          </div>
        ) : (
          <>
            <div className="modal_header">
              <h2>Confirm Your Details</h2>
              <p>We'll prepare a custom email for you to send to our team.</p>
            </div>

            <form onSubmit={handleSubmit} className="order_form">
              <div className="form_group">
                <label>Full Name</label>
                <input type="text" name="name" placeholder="John Doe" required />
              </div>

              <div className="form_row">
                <div className="form_group">
                  <label>Phone Number</label>
                  <input type="tel" name="phone" placeholder="+1 (555) 000-0000" required />
                </div>
                <div className="form_group">
                  <label>Gmail / Email</label>
                  <input type="email" name="email" placeholder="john@gmail.com" required />
                </div>
              </div>

              <div className="form_group">
                <label>Shipping Address</label>
                <textarea name="address" rows="3" placeholder="Full street address, city, state, and zip" required></textarea>
              </div>

              <div className="form_group">
                <label>Quantity (N Number of Cups)</label>
                <div className="quantity_input">
                  <input type="number" name="quantity" defaultValue="1" min="1" required />
                  <span className="unit">Modular Sleeve(s)</span>
                </div>
              </div>

              <button type="submit" className="btn btn-primary submit_btn" disabled={isRedirecting}>
                 {isRedirecting ? 'Preparing Email...' : 'Confirm & Open Email'}
              </button>
            </form>
            
            <p className="modal_note">
              Clicking confirm will open your default email app with your order details already filled in.
            </p>
          </>
        )}
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
          z-index: 2000;
          backdrop-filter: blur(8px);
          animation: fadeIn 0.3s ease-out;
        }
        .order_modal {
          background-color: var(--color-bg);
          width: 90%;
          max-width: 600px;
          padding: 3rem;
          border-radius: 24px;
          position: relative;
          box-shadow: 0 40px 100px rgba(0,0,0,0.1);
          border: 1px solid rgba(107, 58, 42, 0.1);
          animation: slideUp 0.4s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .redirect_message {
          text-align: center;
          padding: 2rem 0;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 1.5rem;
        }
        .loader {
          width: 48px;
          height: 48px;
          border: 5px solid var(--color-cream);
          border-bottom-color: var(--color-terracotta);
          border-radius: 50%;
          display: inline-block;
          box-sizing: border-box;
          animation: rotation 1s linear infinite;
        }
        @keyframes rotation {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
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
        .modal_header h2 {
          font-size: 2rem;
          color: var(--color-brown);
          margin-bottom: 0.5rem;
        }
        .modal_header p {
          color: var(--color-text);
          opacity: 0.6;
          font-size: 1rem;
        }
        .order_form {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }
        .form_row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 1rem;
        }
        .form_group {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
        }
        .form_group label {
          font-size: 0.85rem;
          font-weight: 600;
          color: var(--color-brown);
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }
        input, textarea {
          padding: 1rem;
          border: 1px solid rgba(107, 58, 42, 0.1);
          border-radius: 12px;
          background-color: var(--color-white);
          font-family: var(--font-sans);
          font-size: 1rem;
          transition: var(--transition);
        }
        input:focus, textarea:focus {
          outline: none;
          border-color: var(--color-terracotta);
          box-shadow: 0 0 0 4px rgba(201, 106, 58, 0.05);
        }
        .quantity_input {
          display: flex;
          align-items: center;
          gap: 1rem;
        }
        .quantity_input input {
          width: 80px;
          text-align: center;
        }
        .unit {
          color: var(--color-text);
          opacity: 0.6;
          font-weight: 500;
        }
        .submit_btn {
          width: 100%;
          padding: 1.2rem;
          font-size: 1.1rem;
          margin-top: 1rem;
          cursor: pointer;
        }
        .submit_btn:disabled {
          opacity: 0.7;
          cursor: not-allowed;
        }
        .modal_note {
          margin-top: 2rem;
          font-size: 0.8rem;
          color: var(--color-text);
          opacity: 0.4;
          text-align: center;
          line-height: 1.6;
        }
        @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
        @keyframes slideUp { 
          from { opacity: 0; transform: translateY(20px); } 
          to { opacity: 1; transform: translateY(0); } 
        }
        @media (max-width: 600px) {
          .order_modal { padding: 2rem; }
          .form_row { grid-template-columns: 1fr; }
        }
      `}</style>
    </div>
  );
};

export default OrderModal;
