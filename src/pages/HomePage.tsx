// src/pages/HomePage.tsx
import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import HeroImage from '../components/HeroImage';
import ProductCarousel from '../components/ProductCarousel';
import GaleriaReformas from '../components/GaleriaReformas';
import AboutUs from '../components/AboutUs';

const HomePage: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen bg-[#e0dcdc] scroll-smooth">
      <Navbar />
      <main className="flex-1 ">        
        <HeroImage />
        <ProductCarousel />
        <GaleriaReformas />
        <AboutUs />
      </main>
      <Footer />
    </div>
  );
};


export default HomePage;
