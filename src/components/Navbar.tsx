import React from 'react';

const Navbar: React.FC = () => {
  return (
    <header className="bg-white sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-4 flex  justify-center items-center space-x-70">
        {/* Logo */}
        <img src={'src/assets/Logo.png'} alt="JP Logo" className="h-12 w-auto object-contain" />
        {/* Nav Buttons */}
        <nav className="flex space-x-6">
          <a href="#servicios" className="bg-white px-6 py-2 rounded-full shadow-md hover:shadow-lg transition duration-200">Servicios</a>
          <a href="#especialidades" className="bg-white px-6 py-2 rounded-full shadow-md hover:shadow-lg transition duration-200">Especialidades</a>
          <a href="#sobre-nosotros" className="bg-white px-6 py-2 rounded-full shadow-md hover:shadow-lg transition duration-200">Sobre nosotros</a>
          <a href="#contacto" className="bg-white px-6 py-2 rounded-full shadow-md hover:shadow-lg transition duration-200">Contacto</a>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
