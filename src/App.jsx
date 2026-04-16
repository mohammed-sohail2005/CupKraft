import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import OrderModal from './components/OrderModal';
import HomePage from './pages/HomePage';
import CartPage from './pages/CartPage';
import useScrollReveal from './hooks/useScrollReveal';
import './index.css';

function App() {
  const addToRefs = useScrollReveal();
  const [isOrderOpen, setIsOrderOpen] = useState(false);

  const toggleOrder = () => setIsOrderOpen(!isOrderOpen);

  return (
    <div className="app">
      <Navbar onOrderClick={toggleOrder} />
      <main>
        <Routes>
          <Route path="/" element={<HomePage addToRefs={addToRefs} onOrderClick={toggleOrder} />} />
          <Route path="/cart" element={<CartPage onOrderClick={toggleOrder} />} />
        </Routes>
      </main>
      <Footer />
      <OrderModal isOpen={isOrderOpen} onClose={toggleOrder} />
    </div>
  );
}

export default App;
