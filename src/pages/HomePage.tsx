// src/pages/HomePage.tsx
import React from 'react';
import Navbar from '../components/Navbar';

const HomePage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-100 scroll-smooth">
      <Navbar />
    </div>
  );
};

export default HomePage;
