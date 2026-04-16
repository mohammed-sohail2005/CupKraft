import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import OrderModal from './components/OrderModal';
import AddToCartModal from './components/AddToCartModal';
import HomePage from './pages/HomePage';
import CartPage from './pages/CartPage';
import useScrollReveal from './hooks/useScrollReveal';
import { useCart } from './context/CartContext';
import './index.css';

function App() {
  const addToRefs = useScrollReveal();
  const { addToCart } = useCart();
  const [isOrderOpen, setIsOrderOpen] = useState(false);
  const [isCartModalOpen, setIsCartModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const toggleOrder = () => setIsOrderOpen(!isOrderOpen);
  
  const openCartModal = (product) => {
    setSelectedProduct(product);
    setIsCartModalOpen(true);
  };

  const closeCartModal = () => {
    setIsCartModalOpen(false);
    setSelectedProduct(null);
  };

  const handleAddToCart = (product, quantity) => {
    addToCart(product, quantity);
  };

  return (
    <div className="app">
      <Navbar onOrderClick={toggleOrder} />
      <main>
        <Routes>
          <Route path="/" element={
            <HomePage 
              addToRefs={addToRefs} 
              onOrderClick={toggleOrder} 
              onAddToCartClick={openCartModal} 
            />
          } />
          <Route path="/cart" element={<CartPage onOrderClick={toggleOrder} />} />
        </Routes>
      </main>
      <Footer />
      <OrderModal isOpen={isOrderOpen} onClose={toggleOrder} />
      <AddToCartModal 
        isOpen={isCartModalOpen} 
        onClose={closeCartModal} 
        product={selectedProduct}
        onConfirm={handleAddToCart}
      />
    </div>
  );
}

export default App;
