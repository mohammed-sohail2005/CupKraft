import React, { useState } from 'react';
import Hero from '../components/Hero';
import ProductExplorer from '../components/ProductExplorer';
import Features from '../components/Features';
import ProductShowcase from '../components/ProductShowcase';
import About from '../components/About';
import Notify from '../components/Notify';

const HomePage = ({ addToRefs, onOrderClick }) => {
  return (
    <>
      <Hero addToRefs={addToRefs} onOrderClick={onOrderClick} />
      <ProductExplorer addToRefs={addToRefs} />
      <Features addToRefs={addToRefs} />
      <ProductShowcase addToRefs={addToRefs} />
      <About addToRefs={addToRefs} />
      <Notify addToRefs={addToRefs} />
    </>
  );
};

export default HomePage;
