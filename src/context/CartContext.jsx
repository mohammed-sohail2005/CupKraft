import React, { createContext, useContext, useState, useEffect } from 'react';

const CartContext = createContext();

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState(() => {
    const savedCart = localStorage.getItem('cupkraft_cart');
    return savedCart ? JSON.parse(savedCart) : [];
  });

  const UNIT_PRICE = 15;

  useEffect(() => {
    localStorage.setItem('cupkraft_cart', JSON.stringify(cart));
  }, [cart]);

  const addToCart = (product, quantity) => {
    const qtyToAdd = parseInt(quantity) || 1;
    setCart((prevCart) => {
      const existingItem = prevCart.find((item) => item.id === product.id);
      if (existingItem) {
        return prevCart.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + qtyToAdd } : item
        );
      }
      return [...prevCart, { ...product, quantity: qtyToAdd, price: UNIT_PRICE }];
    });
  };

  const removeFromCart = (productId) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== productId));
  };

  const updateQuantity = (productId, quantity) => {
    if (quantity < 1) return;
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === productId ? { ...item, quantity } : item
      )
    );
  };

  const clearCart = () => {
    setCart([]);
  };

  const cartTotal = cart.reduce((total, item) => total + item.quantity, 0);
  const cartTotalPrice = cart.reduce((total, item) => total + (item.quantity * (item.price || UNIT_PRICE)), 0);

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, updateQuantity, clearCart, cartTotal, cartTotalPrice, UNIT_PRICE }}>
      {children}
    </CartContext.Provider>
  );
};
