import React, { useState } from 'react';
import Hero from '../components/Hero';
import ProductExplorer from '../components/ProductExplorer';
import Features from '../components/Features';
import ProductShowcase from '../components/ProductShowcase';
import About from '../components/About';
import Notify from '../components/Notify';

const HomePage = ({ addToRefs, onOrderClick, onAddToCartClick }) => {
  return (
    <>
      <Hero addToRefs={addToRefs} onOrderClick={onOrderClick} onAddToCartClick={onAddToCartClick} />
      <ProductExplorer addToRefs={addToRefs} />
      <Features addToRefs={addToRefs} />
      <ProductShowcase addToRefs={addToRefs} onAddToCartClick={onAddToCartClick} />
      <About addToRefs={addToRefs} />
      <Notify addToRefs={addToRefs} />
    </>
  );
};

export default HomePage;
