// src/pages/HomePage.tsx
import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const HomePage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-100 scroll-smooth">
      <Navbar />
      <main className="space-y-32 px-8 py-16">
        {/* ... secciones ... */}
        {/* Mantengo este spacer para que se diferencie el footer del header, eliminar cuando hagomos el body*/}
      </main>
      <Footer />
    </div>
  );
};

export default HomePage;
