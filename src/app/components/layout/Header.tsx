import { useState } from 'react';
import { useLocation } from 'react-router';
import { Menu, X } from 'lucide-react';
import { Navbar } from './Navbar';
import { navigationLabels } from '../../data/navigation';

const TOPBAR_LOGOS = [
  {
    src: 'https://gnzneytwugcebhaxtzem.supabase.co/storage/v1/object/public/media-publica/logos/topbar/SEP.png',
    alt: 'SEP',
  },
  {
    src: 'https://gnzneytwugcebhaxtzem.supabase.co/storage/v1/object/public/media-publica/logos/topbar/UTP.png',
    alt: 'UTP',
  },
  {
    src: 'https://gnzneytwugcebhaxtzem.supabase.co/storage/v1/object/public/media-publica/logos/topbar/GOB_MICHOACAN.png',
    alt: 'Gobierno de Michoacán',
  },
  {
    src: 'https://gnzneytwugcebhaxtzem.supabase.co/storage/v1/object/public/media-publica/logos/topbar/UTOM.png',
    alt: 'UTOM',
  },
] as const;

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { pathname } = useLocation();

  const sectionLabel = (() => {
    if (pathname === '/') return navigationLabels.inicio;
    if (pathname.startsWith('/conocenos')) return navigationLabels.conocenos;
    if (pathname.startsWith('/estudiantes')) return navigationLabels.estudiantes;
    if (pathname.startsWith('/docentes')) return navigationLabels.docentes;
    if (pathname.startsWith('/oferta')) return navigationLabels.oferta;
    if (pathname.startsWith('/transparencia')) return navigationLabels.transparencia;
    if (pathname.startsWith('/servicios-vinculacion')) return navigationLabels.servicios;
    if (pathname.startsWith('/contacto')) return navigationLabels.contacto;
    if (pathname.startsWith('/login') || pathname.startsWith('/admin')) return null;
    return null;
  })();

  return (
    <header className="sticky top-0 z-50 bg-white dark:bg-gray-950 shadow-sm transition-colors duration-300">
      {/* Fila Superior: Logos Centrados e Información */}
      <div className="border-b border-gray-100 dark:border-gray-800 bg-white dark:bg-gray-950 py-2 relative transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="min-h-[44px] sm:min-h-[56px]">
            <div className="grid grid-cols-4 items-center justify-items-center gap-2 sm:gap-4 lg:gap-8 w-full dark:brightness-0 dark:invert">
              {TOPBAR_LOGOS.map((logo) => (
                <img
                  key={logo.src}
                  src={logo.src}
                  alt={logo.alt}
                  className="h-8 sm:h-10 md:h-12 w-full max-w-[180px] object-contain transition-transform hover:scale-105 duration-300"
                  loading="lazy"
                />
              ))}
            </div>
          </div>

          {/* Mobile Actions */}
          <div className="lg:hidden flex items-center justify-end gap-3 pt-2">
            {sectionLabel && (
              <span className="flex-1 text-left border-l-2 border-[#D4A574] pl-3 text-[11px] font-semibold text-gray-600 dark:text-gray-300">
                {sectionLabel}
              </span>
            )}
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
