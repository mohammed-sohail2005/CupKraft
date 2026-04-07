import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import ProductShowcase from './components/ProductShowcase';
import About from './components/About';
import Notify from './components/Notify';
import Footer from './components/Footer';
import ProductExplorer from './components/ProductExplorer';
import OrderModal from './components/OrderModal';
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
        <Hero addToRefs={addToRefs} onOrderClick={toggleOrder} />
        <ProductExplorer addToRefs={addToRefs} />
        <Features addToRefs={addToRefs} />
        <ProductShowcase addToRefs={addToRefs} />
        <About addToRefs={addToRefs} />
        <Notify addToRefs={addToRefs} />
      </main>
      <Footer />
      <OrderModal isOpen={isOrderOpen} onClose={toggleOrder} />
    </div>
  );
}

export default App;
