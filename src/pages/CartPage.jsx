import React from 'react';
import { useCart } from '../context/CartContext';
import { Link } from 'react-router-dom';

const CartPage = ({ onOrderClick }) => {
  const { cart, removeFromCart, updateQuantity, cartTotal } = useCart();

  return (
    <div className="cart_page container">
      <div className="cart_header">
        <h1>Your Cart</h1>
        <Link to="/" className="continue_shopping">← Continue Shopping</Link>
      </div>

      {cart.length === 0 ? (
        <div className="empty_cart">
          <p>Your cart is empty.</p>
          <Link to="/" className="btn btn-primary">Browse Products</Link>
        </div>
      ) : (
        <div className="cart_content">
          <div className="cart_items">
            {cart.map((item) => (
              <div key={item.id} className="cart_item">
                <div className="item_info">
                  <h3>{item.title}</h3>
                  <p>{item.desc}</p>
                </div>
                <div className="item_actions">
                  <div className="quantity_controls">
                    <button onClick={() => updateQuantity(item.id, item.quantity - 1)}>-</button>
                    <span>{item.quantity}</span>
                    <button onClick={() => updateQuantity(item.id, item.quantity + 1)}>+</button>
                  </div>
                  <button className="remove_btn" onClick={() => removeFromCart(item.id)}>Remove</button>
                </div>
              </div>
            ))}
          </div>
          
          <div className="cart_summary">
            <h2>Order Summary</h2>
            <div className="summary_row">
              <span>Total Items</span>
              <span>{cartTotal}</span>
            </div>
            <button className="btn btn-primary checkout_btn" onClick={onOrderClick}>Proceed to Order</button>
          </div>
        </div>
      )}

      <style>{`
        .cart_page {
          padding-top: 4rem;
          padding-bottom: 8rem;
          min-height: 70vh;
        }
        .cart_header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 3rem;
        }
        .cart_header h1 {
          font-size: 3rem;
          color: var(--color-brown);
        }
        .continue_shopping {
          color: var(--color-terracotta);
          font-weight: 600;
        }
        .empty_cart {
          text-align: center;
          padding: 4rem 0;
        }
        .empty_cart p {
          font-size: 1.25rem;
          margin-bottom: 2rem;
          opacity: 0.6;
        }
        .cart_content {
          display: grid;
          grid-template-columns: 1fr 350px;
          gap: 4rem;
        }
        .cart_items {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }
        .cart_item {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 2rem;
          background-color: var(--color-white);
          border-radius: 16px;
          border: 1px solid rgba(107, 58, 42, 0.05);
          box-shadow: 0 4px 12px rgba(107, 58, 42, 0.03);
        }
        .item_info h3 {
          margin-bottom: 0.5rem;
          color: var(--color-brown);
        }
        .item_info p {
          font-size: 0.9rem;
          opacity: 0.6;
        }
        .item_actions {
          display: flex;
          align-items: center;
          gap: 2rem;
        }
        .quantity_controls {
          display: flex;
          align-items: center;
          gap: 1rem;
          background: var(--color-bg);
          padding: 0.5rem 1rem;
          border-radius: 99px;
        }
        .quantity_controls button {
          font-size: 1.2rem;
          font-weight: 800;
          color: var(--color-brown);
        }
        .quantity_controls span {
          font-weight: 700;
          min-width: 20px;
          text-align: center;
        }
        .remove_btn {
          color: #e74c3c;
          font-weight: 600;
          font-size: 0.9rem;
        }
        .cart_summary {
          background-color: var(--color-cream);
          padding: 2rem;
          border-radius: 20px;
          height: fit-content;
          position: sticky;
          top: 100px;
        }
        .cart_summary h2 {
          margin-bottom: 2rem;
          color: var(--color-brown);
        }
        .summary_row {
          display: flex;
          justify-content: space-between;
          padding-bottom: 1.5rem;
          border-bottom: 1px solid rgba(107, 58, 42, 0.1);
          margin-bottom: 2rem;
          font-weight: 600;
        }
        .checkout_btn {
          width: 100%;
        }
        @media (max-width: 900px) {
          .cart_content {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </div>
  );
};

export default CartPage;
