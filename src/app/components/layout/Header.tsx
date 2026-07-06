import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import logo1 from '../../../imports/logo_1.png';
import logo2 from '../../../imports/logo_2.png';
import logo3 from '../../../imports/logo_3.png';
import logo4 from '../../../imports/logo-utom.png';
import { Navbar } from './Navbar';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white dark:bg-gray-950 shadow-sm transition-colors duration-300">
      {/* Fila Superior: Logos Centrados e Información */}
      <div className="border-b border-gray-100 dark:border-gray-800 bg-white dark:bg-gray-950 py-3 relative transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-center relative min-h-[44px] sm:min-h-[56px]">
          {/* Logos Institucionales Oficiales Distribuidos Horizontalmente */}
          <div className="flex items-center justify-between w-full pr-12 lg:pr-0 gap-2 dark:brightness-0 dark:invert">
            <img
              src={logo1}
              alt="Gobierno Federal / SEP"
              className="h-7 sm:h-11 md:h-14 w-auto object-contain transition-transform hover:scale-102 duration-300"
            />
            <img
              src={logo2}
              alt="Gobierno de Michoacán"
              className="h-7 sm:h-11 md:h-14 w-auto object-contain transition-transform hover:scale-102 duration-300"
            />
            <img
              src={logo3}
              alt="Universidades Tecnológicas y Politécnicas"
              className="h-7 sm:h-11 md:h-14 w-auto object-contain transition-transform hover:scale-102 duration-300"
            />
            <img
              src={logo4}
              alt="UTOM"
              className="h-7 sm:h-11 md:h-14 w-auto object-contain transition-transform hover:scale-102 duration-300"
            />
          </div>

          {/* Mobile Actions (Absolute to keep logos centered) */}
          <div className="lg:hidden absolute right-4 top-1/2 -translate-y-1/2 flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-1.5 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-colors"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                <X className="w-6 h-6 text-[#0F5132] dark:text-[#D4A574]" />
              ) : (
                <Menu className="w-6 h-6 text-[#0F5132] dark:text-[#D4A574]" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Fila Inferior: Navbar */}
      <Navbar isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
    </header>
  );
}
