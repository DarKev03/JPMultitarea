// src/pages/HomePage.tsx
import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const HomePage: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen bg-gray-100 scroll-smooth">
      <Navbar />
      <main className="flex-1 space-y-32 px-8 py-16">
        {/* ... tus secciones aquí ... */}
      </main>
      <Footer />
    </div>
  );
};


export default HomePage;
