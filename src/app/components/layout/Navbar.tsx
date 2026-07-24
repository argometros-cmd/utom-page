import { useState, useEffect } from 'react';
import { Link } from 'react-router';
import { Accessibility, ChevronDown, GraduationCap, Building2 } from 'lucide-react';
import { navigationLabels, transparencyYears } from '../../data/navigation';
import { TomBotButton } from '../widgets/TomBotButton';
import { AccessibilityPanel } from '../widgets/AccessibilityMenu';

interface NavbarProps {
  isMenuOpen: boolean;
  setIsMenuOpen: (open: boolean) => void;
}

export function Navbar({ isMenuOpen, setIsMenuOpen }: NavbarProps) {
  const [activeSection, setActiveSection] = useState('inicio');
  const [isMobileAccessibilityOpen, setIsMobileAccessibilityOpen] = useState(false);
  const [mobileMenus, setMobileMenus] = useState({
    conocenos: false,
    estudiantes: false,
    oferta: false,
    transparencia: false,
  });

  useEffect(() => {
    const sections = ['inicio', 'aspirantes', 'oferta', 'tramites', 'contacto'];
    
    const callback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(callback, {
      rootMargin: '-20% 0px -55% 0px',
      threshold: 0.1,
    });

    sections.forEach((id) => {
      const element = document.getElementById(id);
      if (element) {
        observer.observe(element);
      }
    });

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isMenuOpen) {
      setIsMobileAccessibilityOpen(false);
    }
  }, [isMenuOpen]);

  const toggleMobileMenu = (menu: 'conocenos' | 'estudiantes' | 'oferta' | 'transparencia') => {
    setMobileMenus(prev => ({
      ...prev,
      [menu]: !prev[menu]
    }));
  };

  return (
    <>
      {/* Fila Inferior: Navbar (Desktop únicamente) */}
      <div className="hidden lg:block bg-[#0F5132] dark:bg-gray-900 text-white transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="relative flex items-center h-12">
            <div className="flex flex-1 items-center justify-center gap-6 xl:gap-8 h-full">
              {/* 1. INICIO */}
              <Link
                to="/"
                className="font-['Inter'] text-xs font-semibold h-12 flex items-center border-b-2 border-transparent hover:text-[#D4A574] hover:border-[#D4A574] transition-all duration-300"
              >
                {navigationLabels.inicio}
              </Link>

              {/* 2. CONÓCENOS */}
              <div className="relative group h-full flex items-center">
                <button className="flex items-center gap-1 font-['Inter'] text-xs font-semibold text-white hover:text-[#D4A574] transition-colors focus:outline-none cursor-pointer">
                  <span>{navigationLabels.conocenos}</span>
                  <ChevronDown className="w-3.5 h-3.5 transition-transform duration-300 group-hover:rotate-180" />
                </button>
                <div className="absolute top-12 left-0 w-64 bg-[#0F5132] dark:bg-gray-900 border border-white/10 dark:border-gray-800 rounded-xl shadow-xl py-3 z-50 opacity-0 -translate-y-2 pointer-events-none group-hover:opacity-100 group-hover:translate-y-0 group-hover:pointer-events-auto transition-all duration-300">
                  <Link to="/conocenos/mision-vision-valores" className="block px-4 py-2.5 text-xs font-medium hover:bg-[#D4A574] hover:text-[#0F5132] transition-colors text-white">
                    Misión, Visión y Valores
                  </Link>
                  <Link to="/conocenos/rectora" className="block px-4 py-2.5 text-xs font-medium hover:bg-[#D4A574] hover:text-[#0F5132] transition-colors text-white">
                    Mensaje de la Rectora
                  </Link>
                  <Link to="/conocenos/directorio" className="block px-4 py-2.5 text-xs font-medium hover:bg-[#D4A574] hover:text-[#0F5132] transition-colors text-white">
                    Directorio
                  </Link>
                  <Link to="/conocenos/campus-maravatio" className="block px-4 py-2.5 text-xs font-medium hover:bg-[#D4A574] hover:text-[#0F5132] transition-colors text-white">
                    Campus Maravatío
                  </Link>
                  <Link to="/conocenos/campus-zitacuaro" className="block px-4 py-2.5 text-xs font-medium hover:bg-[#D4A574] hover:text-[#0F5132] transition-colors text-white">
                    Campus Zitácuaro
                  </Link>
                </div>
              </div>

              {/* 3. ESTUDIANTES */}
              <div className="relative group h-full flex items-center">
                <button className="flex items-center gap-1 font-['Inter'] text-xs font-semibold text-white hover:text-[#D4A574] transition-colors focus:outline-none cursor-pointer">
                  <span>{navigationLabels.estudiantes}</span>
                  <ChevronDown className="w-3.5 h-3.5 transition-transform duration-300 group-hover:rotate-180" />
                </button>
                <div className="absolute top-12 left-0 w-64 bg-[#0F5132] dark:bg-gray-900 border border-white/10 dark:border-gray-800 rounded-xl shadow-xl py-3 z-50 opacity-0 -translate-y-2 pointer-events-none group-hover:opacity-100 group-hover:translate-y-0 group-hover:pointer-events-auto transition-all duration-300">
                  <Link to="/estudiantes/aspirantes" className="block px-4 py-2.5 text-xs font-medium hover:bg-[#D4A574] hover:text-[#0F5132] transition-colors text-white">
                    Aspirantes
                  </Link>
                  <Link to="/estudiantes/modelo-educativo" className="block px-4 py-2.5 text-xs font-medium hover:bg-[#D4A574] hover:text-[#0F5132] transition-colors text-white">
                    Modelo Educativo
                  </Link>
                </div>
              </div>

              {/* 4. DOCENTES */}
              <Link
                to="/docentes"
                className="font-['Inter'] text-xs font-semibold h-12 flex items-center border-b-2 border-transparent hover:text-[#D4A574] hover:border-[#D4A574] transition-all duration-300"
              >
                {navigationLabels.docentes}
              </Link>

              {/* 5. OFERTA EDUCATIVA */}
              <div className="relative group h-full flex items-center">
                <button className="flex items-center gap-1 font-['Inter'] text-xs font-semibold text-white hover:text-[#D4A574] transition-colors focus:outline-none cursor-pointer">
                  <span>{navigationLabels.oferta}</span>
                  <ChevronDown className="w-3.5 h-3.5 transition-transform duration-300 group-hover:rotate-180" />
                </button>
                <div className="absolute top-12 left-0 w-80 bg-[#0F5132] dark:bg-gray-900 border border-white/10 dark:border-gray-800 rounded-xl shadow-xl p-4 z-50 opacity-0 -translate-y-2 pointer-events-none group-hover:opacity-100 group-hover:translate-y-0 group-hover:pointer-events-auto transition-all duration-300">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <h4 className="text-[10px] font-bold text-[#D4A574] uppercase tracking-wider mb-2 flex items-center gap-1">
                        <Building2 className="w-3.5 h-3.5" />
                        Ingenierías
                      </h4>
                      <Link to="/oferta/ingenieria-tecnologias-informacion" className="block py-1.5 text-[11px] hover:text-[#D4A574] transition-colors text-white">
                        Tecnologías de la Información
                      </Link>
                      <Link to="/oferta/ingenieria-biotecnologia" className="block py-1.5 text-[11px] hover:text-[#D4A574] transition-colors text-white">
                        Biotecnología
                      </Link>
                    </div>
                    <div>
                      <h4 className="text-[10px] font-bold text-[#D4A574] uppercase tracking-wider mb-2 flex items-center gap-1">
                        <GraduationCap className="w-3.5 h-3.5" />
                        Licenciaturas
                      </h4>
                      <Link to="/oferta/licenciatura-gastronomia" className="block py-1.5 text-[11px] hover:text-[#D4A574] transition-colors text-white">
                        Gastronomía
                      </Link>
                      <Link to="/oferta/licenciatura-mercadotecnia" className="block py-1.5 text-[11px] hover:text-[#D4A574] transition-colors text-white">
                        Mercadotecnia
                      </Link>
                    </div>
                  </div>
                </div>
              </div>

              {/* 6. TRANSPARENCIA */}
              <div className="relative group h-full flex items-center">
                <button className="flex items-center gap-1 font-['Inter'] text-xs font-semibold text-white hover:text-[#D4A574] transition-colors focus:outline-none cursor-pointer">
                  <span>{navigationLabels.transparencia}</span>
                  <ChevronDown className="w-3.5 h-3.5 transition-transform duration-300 group-hover:rotate-180" />
                </button>
                <div className="absolute top-12 left-0 w-48 bg-[#0F5132] dark:bg-gray-900 border border-white/10 dark:border-gray-800 rounded-xl shadow-xl py-3 z-50 opacity-0 -translate-y-2 pointer-events-none group-hover:opacity-100 group-hover:translate-y-0 group-hover:pointer-events-auto transition-all duration-300">
                  {transparencyYears.map((y) => (
                    <Link key={y} to={`/transparencia/${y}`} className="block px-4 py-2.5 text-xs font-medium hover:bg-[#D4A574] hover:text-[#0F5132] transition-colors text-white">
                      Ejercicio Fiscal {y}
                    </Link>
                  ))}
                </div>
              </div>

              {/* 7. SERVICIOS Y VINCULACIÓN */}
              <Link
                to="/servicios-vinculacion"
                className="font-['Inter'] text-xs font-semibold h-12 flex items-center border-b-2 border-transparent hover:text-[#D4A574] hover:border-[#D4A574] transition-all duration-300"
              >
                {navigationLabels.servicios}
              </Link>

              {/* 8. CONTÁCTANOS */}
              <Link
                to="/contacto"
                className="font-['Inter'] text-xs font-semibold h-12 flex items-center border-b-2 border-transparent hover:text-[#D4A574] hover:border-[#D4A574] transition-all duration-300"
              >
                {navigationLabels.contacto}
              </Link>
            </div>

            <a
              href="http://prometheus.utmorelia.edu.mx:8080/sigo/"
              className="inline-flex items-center justify-center h-7 px-18 rounded-md bg-[#D4A574] text-white font-['Inter'] text-xs font-bold hover:bg-[#c89452] transition-colors shadow-sm ml-6 shrink-0"
            >
              SIGO
            </a>


          </nav>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isMenuOpen && (
        <nav className="lg:hidden bg-white dark:bg-gray-950 border-t border-gray-100 dark:border-gray-800 shadow-inner max-h-[calc(100vh-80px)] overflow-y-auto transition-colors duration-300">
          <div className="max-w-7xl mx-auto px-4 py-4 flex flex-col gap-3">
            {/* 1. INICIO */}
            <Link
              to="/"
              onClick={() => setIsMenuOpen(false)}
              className="font-['Inter'] text-sm py-2 text-gray-700 dark:text-gray-300 hover:text-[#0F5132] dark:hover:text-[#D4A574] border-b border-gray-50 dark:border-gray-800 font-semibold"
            >
              {navigationLabels.inicio}
            </Link>

            {/* 2. CONÓCENOS */}
            <div>
              <button
                onClick={() => toggleMobileMenu('conocenos')}
                className="w-full flex items-center justify-between font-['Inter'] text-sm py-2 text-gray-700 dark:text-gray-300 hover:text-[#0F5132] dark:hover:text-[#D4A574] border-b border-gray-50 dark:border-gray-800 font-semibold"
              >
                <span>{navigationLabels.conocenos}</span>
                <ChevronDown className={`w-4 h-4 transition-transform ${mobileMenus.conocenos ? 'rotate-180' : ''}`} />
              </button>
              {mobileMenus.conocenos && (
                <div className="pl-4 py-2 flex flex-col gap-2 bg-gray-50 dark:bg-gray-900/40 rounded-xl mt-1">
                  <Link to="/conocenos/mision-vision-valores" onClick={() => setIsMenuOpen(false)} className="text-xs py-1.5 text-gray-600 dark:text-gray-400 hover:text-[#0F5132] dark:hover:text-[#D4A574]">
                    Misión, Visión y Valores
                  </Link>
                  <Link to="/conocenos/rectora" onClick={() => setIsMenuOpen(false)} className="text-xs py-1.5 text-gray-600 dark:text-gray-400 hover:text-[#0F5132] dark:hover:text-[#D4A574]">
                    Mensaje de la Rectora
                  </Link>
                  <Link to="/conocenos/directorio" onClick={() => setIsMenuOpen(false)} className="text-xs py-1.5 text-gray-600 dark:text-gray-400 hover:text-[#0F5132] dark:hover:text-[#D4A574]">
                    Directorio
                  </Link>
                  <Link to="/conocenos/campus-maravatio" onClick={() => setIsMenuOpen(false)} className="text-xs py-1.5 text-gray-600 dark:text-gray-400 hover:text-[#0F5132] dark:hover:text-[#D4A574]">
                    Campus Maravatío
                  </Link>
                  <Link to="/conocenos/campus-zitacuaro" onClick={() => setIsMenuOpen(false)} className="text-xs py-1.5 text-gray-600 dark:text-gray-400 hover:text-[#0F5132] dark:hover:text-[#D4A574]">
                    Campus Zitácuaro
                  </Link>
                </div>
              )}
            </div>

            {/* 3. ESTUDIANTES */}
            <div>
              <button
                onClick={() => toggleMobileMenu('estudiantes')}
                className="w-full flex items-center justify-between font-['Inter'] text-sm py-2 text-gray-700 dark:text-gray-300 hover:text-[#0F5132] dark:hover:text-[#D4A574] border-b border-gray-50 dark:border-gray-800 font-semibold"
              >
                <span>{navigationLabels.estudiantes}</span>
                <ChevronDown className={`w-4 h-4 transition-transform ${mobileMenus.estudiantes ? 'rotate-180' : ''}`} />
              </button>
              {mobileMenus.estudiantes && (
                <div className="pl-4 py-2 flex flex-col gap-2 bg-gray-50 dark:bg-gray-900/40 rounded-xl mt-1">
                  <Link to="/estudiantes/aspirantes" onClick={() => setIsMenuOpen(false)} className="text-xs py-1.5 text-gray-600 dark:text-gray-400 hover:text-[#0F5132] dark:hover:text-[#D4A574]">
                    Aspirantes
                  </Link>
                  <Link to="/estudiantes/modelo-educativo" onClick={() => setIsMenuOpen(false)} className="text-xs py-1.5 text-gray-600 dark:text-gray-400 hover:text-[#0F5132] dark:hover:text-[#D4A574]">
                    Modelo Educativo
                  </Link>
                </div>
              )}
            </div>

            <a
              href="http://prometheus.utmorelia.edu.mx:8080/sigo/"
              onClick={() => setIsMenuOpen(false)}
              className="inline-flex items-center justify-center h-11 px-4 rounded-md bg-[#D4A574] text-[#FFFFFF] font-['Inter'] text-sm font-bold hover:bg-[#c89452] transition-colors shadow-sm"
            >
              SIGO
            </a>

            {/* 4. DOCENTES */}
            <Link
              to="/docentes"
              onClick={() => setIsMenuOpen(false)}
              className="font-['Inter'] text-sm py-2 text-gray-700 dark:text-gray-300 hover:text-[#0F5132] dark:hover:text-[#D4A574] border-b border-gray-50 dark:border-gray-800 font-semibold"
            >
              {navigationLabels.docentes}
            </Link>

            {/* 5. OFERTA EDUCATIVA */}
            <div>
              <button
                onClick={() => toggleMobileMenu('oferta')}
                className="w-full flex items-center justify-between font-['Inter'] text-sm py-2 text-gray-700 dark:text-gray-300 hover:text-[#0F5132] dark:hover:text-[#D4A574] border-b border-gray-50 dark:border-gray-800 font-semibold"
              >
                <span>{navigationLabels.oferta}</span>
                <ChevronDown className={`w-4 h-4 transition-transform ${mobileMenus.oferta ? 'rotate-180' : ''}`} />
              </button>
              {mobileMenus.oferta && (
                <div className="pl-4 py-2 flex flex-col gap-2 bg-gray-50 dark:bg-gray-900/40 rounded-xl mt-1">
                  <h4 className="text-[10px] font-bold text-[#D4A574] uppercase tracking-wider mt-1 mb-0.5">Ingenierías</h4>
                  <Link to="/oferta/ingenieria-tecnologias-informacion" onClick={() => setIsMenuOpen(false)} className="text-xs py-1 text-gray-600 dark:text-gray-400 hover:text-[#0F5132] dark:hover:text-[#D4A574] pl-2">
                    Tecnologías de la Información
                  </Link>
                  <Link to="/oferta/ingenieria-biotecnologia" onClick={() => setIsMenuOpen(false)} className="text-xs py-1 text-gray-600 dark:text-gray-400 hover:text-[#0F5132] dark:hover:text-[#D4A574] pl-2">
                    Biotecnología
                  </Link>
                  <h4 className="text-[10px] font-bold text-[#D4A574] uppercase tracking-wider mt-2 mb-0.5">Licenciaturas</h4>
                  <Link to="/oferta/licenciatura-gastronomia" onClick={() => setIsMenuOpen(false)} className="text-xs py-1 text-gray-600 dark:text-gray-400 hover:text-[#0F5132] dark:hover:text-[#D4A574] pl-2">
                    Gastronomía
                  </Link>
                  <Link to="/oferta/licenciatura-mercadotecnia" onClick={() => setIsMenuOpen(false)} className="text-xs py-1 text-gray-600 dark:text-gray-400 hover:text-[#0F5132] dark:hover:text-[#D4A574] pl-2">
                    Mercadotecnia
                  </Link>
                </div>
              )}
            </div>

            {/* 6. TRANSPARENCIA */}
            <div>
              <button
                onClick={() => toggleMobileMenu('transparencia')}
                className="w-full flex items-center justify-between font-['Inter'] text-sm py-2 text-gray-700 dark:text-gray-300 hover:text-[#0F5132] dark:hover:text-[#D4A574] border-b border-gray-50 dark:border-gray-800 font-semibold"
              >
                <span>{navigationLabels.transparencia}</span>
                <ChevronDown className={`w-4 h-4 transition-transform ${mobileMenus.transparencia ? 'rotate-180' : ''}`} />
              </button>
              {mobileMenus.transparencia && (
                <div className="pl-4 py-2 flex flex-col gap-2 bg-gray-50 dark:bg-gray-900/40 rounded-xl mt-1">
                  {transparencyYears.map((y) => (
                    <Link key={y} to={`/transparencia/${y}`} onClick={() => setIsMenuOpen(false)} className="text-xs py-1.5 text-gray-600 dark:text-gray-400 hover:text-[#0F5132] dark:hover:text-[#D4A574]">
                      Ejercicio Fiscal {y}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* 7. SERVICIOS Y VINCULACIÓN */}
            <Link
              to="/servicios-vinculacion"
              onClick={() => setIsMenuOpen(false)}
              className="font-['Inter'] text-sm py-2 text-gray-700 dark:text-gray-300 hover:text-[#0F5132] dark:hover:text-[#D4A574] border-b border-gray-50 dark:border-gray-800 font-semibold"
            >
              {navigationLabels.servicios}
            </Link>

            {/* 8. CONTÁCTANOS */}
            <Link
              to="/contacto"
              onClick={() => setIsMenuOpen(false)}
              className="font-['Inter'] text-sm py-2 text-gray-700 dark:text-gray-300 hover:text-[#0F5132] dark:hover:text-[#D4A574] border-b border-gray-50 dark:border-gray-800 font-semibold"
            >
              {navigationLabels.contacto}
            </Link>

            {/* Herramientas */}
            <div className="pt-3 mt-2 border-t border-gray-100 dark:border-gray-800 space-y-3">
              <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-gray-400 dark:text-gray-500">
                Herramientas
              </p>

              <TomBotButton
                variant="inline"
                onClick={() => console.log('TomBot clicked')}
              />

              <button
                type="button"
                onClick={() => setIsMobileAccessibilityOpen((prev) => !prev)}
                className="w-full flex items-center justify-between rounded-2xl border border-gray-100 dark:border-gray-800 bg-gray-50 dark:bg-gray-900/80 px-4 py-3 text-left transition-all hover:border-[#0F5132] dark:hover:border-[#D4A574] hover:bg-white dark:hover:bg-gray-900"
                aria-expanded={isMobileAccessibilityOpen}
                aria-controls="mobile-accessibility-panel"
              >
                <span className="flex items-center gap-3">
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-white dark:bg-gray-900 shadow-sm text-[#0F5132] dark:text-[#D4A574]">
                    <Accessibility className="w-5 h-5" />
                  </span>
                  <span>
                    <span className="block text-sm font-semibold text-gray-900 dark:text-white">
                      Accesibilidad
                    </span>
                    <span className="block text-xs text-gray-500 dark:text-gray-400">
                      Ajustes de lectura y contraste
                    </span>
                  </span>
                </span>
                <ChevronDown className={`w-4 h-4 text-gray-400 transition-transform ${isMobileAccessibilityOpen ? 'rotate-180' : ''}`} />
              </button>

              {isMobileAccessibilityOpen && (
                <div id="mobile-accessibility-panel" className="pt-1">
                  <AccessibilityPanel embedded className="shadow-none" />
                </div>
              )}
            </div>
          </div>
        </nav>
      )}
    </>
  );
}
