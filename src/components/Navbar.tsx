import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-4xl mx-auto px-4 py-4 flex flex-col md:flex-row justify-between items-center">
        {/* Logo and Menu Toggle */}
        <div className="w-full flex justify-between items-center">
          <a href="#hero-image">
            <img
              src="/assets/Logo.png"
              alt="JP Logo"
              className="h-12 w-auto object-contain min-w-[3rem] cursor-pointer"
            />
          </a>
          <button onClick={() => setIsOpen(!isOpen)} className="md:hidden">
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Nav Buttons */}
        <nav className={`${isOpen ? 'flex' : 'hidden'} md:flex flex-col md:flex-row items-center justify-center md:space-x-2 gap-4 mt-4 md:mt-0`}>
          <a href="#servicios" className="whitespace-nowrap bg-white px-6 py-2 rounded-full hover:shadow-lg transition duration-200">Servicios</a>
          <a href="#galeria" className="whitespace-nowrap bg-white px-6 py-2 rounded-full hover:shadow-lg transition duration-200">Especialidades</a>
          <a href="#about-us" className="whitespace-nowrap bg-white px-6 py-2 rounded-full hover:shadow-lg transition duration-200">Sobre nosotros</a>
          <a href="#footer" className="whitespace-nowrap bg-white px-6 py-2 rounded-full hover:shadow-lg transition duration-200">Contacto</a>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
