import React from 'react';
import { FaFacebookF, FaInstagram } from 'react-icons/fa';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-100 py-6 px-4 border-t border-gray-300">
      <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between text-sm text-gray-700 gap-y-2">
        <span>© 2025</span>
        
        <div className="flex flex-wrap items-center gap-4">
          <span>jpmultitareas@gmail.com</span>
          <span className="hidden sm:inline">|</span>
          <span>Calle Colón, 1, Gandia</span>
          <span className="hidden sm:inline">|</span>
          <span>671 24 69 20</span>
          <span className="hidden sm:inline">|</span>
          <div className="flex items-center gap-3">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
              <FaFacebookF className="text-gray-700 hover:text-blue-600" />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <FaInstagram className="text-gray-700 hover:text-pink-500" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
