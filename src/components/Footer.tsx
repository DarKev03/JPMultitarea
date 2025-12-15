import React from 'react';
import { FaFacebookF, FaInstagram } from 'react-icons/fa';
import { SiTiktok } from 'react-icons/si'; // ← Aquí importamos TikTok

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-100 py-16 px-8 border-t border-gray-300">
      <hr className="my-6 border-t-1 max-w-7xl mx-auto border-black" />
      <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between text-sm text-gray-700 gap-y-2">

        <span>© 2025</span>
        
        <div className="flex flex-wrap items-center gap-4">
          <span></span>
          <span className="hidden sm:inline">|</span>
          <span>Calle Colón, 1, Gandia</span>
          <span className="hidden sm:inline">|</span>
          <span>671 24 69 20</span>
          <span className="hidden sm:inline">|</span>
          <div className="flex items-center gap-3">
            <a href="https://www.facebook.com/share/16nBHtJkLV/?mibextid=wwXIfr" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
              <FaFacebookF className="text-gray-700 hover:text-blue-600" />
            </a>
            <a href="https://www.instagram.com/jpmultitareas?igsh=MTR6ajE5djgzeHp4aw==" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <FaInstagram className="text-gray-700 hover:text-pink-500" />
            </a>
            <a href="https://www.tiktok.com/@jpmultitareas" target="_blank" rel="noopener noreferrer" aria-label="TikTok">
              <SiTiktok className="text-gray-700 hover:text-black" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
