import { Accessibility, Minus, Moon, Plus, RefreshCcw, Sun, Type, X } from 'lucide-react';
import { useState, useEffect, useRef } from 'react';
import { Button } from '../ui/button';
import { cn } from '../ui/utils';

interface AccessibilityPanelProps {
  onClose?: () => void;
  embedded?: boolean;
  className?: string;
}

export function AccessibilityPanel({
  onClose,
  embedded = false,
  className = '',
}: AccessibilityPanelProps) {
  const [fontSize, setFontSize] = useState(16);
  const [isHighContrast, setIsHighContrast] = useState(false);
  const [isGrayscale, setIsGrayscale] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Initialize theme from system preference or document class
  useEffect(() => {
    const isDark = document.documentElement.classList.contains('dark');
    setIsDarkMode(isDark);
  }, []);

  useEffect(() => {
    document.documentElement.style.setProperty('--font-size', `${fontSize}px`);
  }, [fontSize]);

  useEffect(() => {
    if (isHighContrast) {
      document.documentElement.classList.add('high-contrast');
    } else {
      document.documentElement.classList.remove('high-contrast');
    }
  }, [isHighContrast]);

  useEffect(() => {
    if (isGrayscale) {
      document.documentElement.classList.add('grayscale');
    } else {
      document.documentElement.classList.remove('grayscale');
    }
  }, [isGrayscale]);

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  const reset = () => {
    setFontSize(16);
    setIsHighContrast(false);
    setIsGrayscale(false);
    setIsDarkMode(false);
  };

  return (
    <div
      className={cn(
        'bg-white dark:bg-gray-900 rounded-2xl border border-gray-100 dark:border-gray-800 transition-colors duration-300',
        embedded
          ? 'w-full p-4 shadow-none'
          : 'absolute bottom-20 right-0 w-72 p-5 mb-2 shadow-2xl origin-bottom-right',
        className,
      )}
    >
      <div className="flex items-center justify-between border-b border-gray-100 dark:border-gray-800 pb-3 mb-5">
        <h3 className="font-bold text-gray-800 dark:text-white text-lg">Accesibilidad</h3>
        {onClose && (
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 p-1 hover:bg-gray-50 dark:hover:bg-gray-800 rounded-lg transition-colors"
            aria-label="Cerrar accesibilidad"
          >
            <X className="w-5 h-5" />
          </button>
        )}
      </div>

      <div className="space-y-6">
        {/* Font Size Control */}
        <div className="space-y-3">
          <p className="text-xs font-bold text-gray-400 dark:text-gray-500 uppercase tracking-widest">Tamaño de fuente</p>
          <div className="flex items-center justify-between bg-gray-50 dark:bg-gray-800 p-2 rounded-xl border border-gray-100 dark:border-gray-700">
            <Button
              size="icon"
              variant="outline"
              className="h-10 w-10 bg-white dark:bg-gray-900 shadow-sm hover:border-[#0F5132] hover:text-[#0F5132] dark:border-gray-700 dark:text-gray-300"
              onClick={(e) => {
                e.stopPropagation();
                setFontSize(prev => Math.max(12, prev - 2));
              }}
            >
              <Minus className="w-4 h-4" />
            </Button>
            <span className="text-xl font-black text-[#0F5132] dark:text-[#D4A574] min-w-[60px] text-center">{fontSize}px</span>
            <Button
              size="icon"
              variant="outline"
              className="h-10 w-10 bg-white dark:bg-gray-900 shadow-sm hover:border-[#0F5132] hover:text-[#0F5132] dark:border-gray-700 dark:text-gray-300"
              onClick={(e) => {
                e.stopPropagation();
                setFontSize(prev => Math.min(24, prev + 2));
              }}
            >
              <Plus className="w-4 h-4" />
            </Button>
          </div>
        </div>

        {/* Visualization Options */}
        <div className="space-y-3">
          <p className="text-xs font-bold text-gray-400 dark:text-gray-500 uppercase tracking-widest">Visualización</p>
          <div className="grid grid-cols-1 gap-3">
            <button
              className={cn(
                'flex items-center w-full px-4 py-3 rounded-xl border-2 transition-all',
                isDarkMode
                  ? 'bg-[#0F5132] border-[#0F5132] text-white shadow-md'
                  : 'bg-white dark:bg-gray-900 border-gray-100 dark:border-gray-800 text-gray-700 dark:text-gray-300 hover:border-gray-200 dark:hover:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800',
              )}
              onClick={(e) => {
                e.stopPropagation();
                setIsDarkMode(!isDarkMode);
              }}
            >
              <div className={cn('p-2 rounded-lg mr-3', isDarkMode ? 'bg-white/20' : 'bg-gray-100 dark:bg-gray-800')}>
                <Moon className={cn('w-5 h-5', isDarkMode ? 'text-white' : 'text-[#0F5132]')} />
              </div>
              <span className="font-semibold">{isDarkMode ? 'Modo Claro' : 'Modo Oscuro'}</span>
            </button>

            <button
              className={cn(
                'flex items-center w-full px-4 py-3 rounded-xl border-2 transition-all',
                isHighContrast
                  ? 'bg-[#0F5132] border-[#0F5132] text-white shadow-md'
                  : 'bg-white dark:bg-gray-900 border-gray-100 dark:border-gray-800 text-gray-700 dark:text-gray-300 hover:border-gray-200 dark:hover:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800',
              )}
              onClick={(e) => {
                e.stopPropagation();
                setIsHighContrast(!isHighContrast);
              }}
            >
              <div className={cn('p-2 rounded-lg mr-3', isHighContrast ? 'bg-white/20' : 'bg-gray-100 dark:bg-gray-800')}>
                <Sun className={cn('w-5 h-5', isHighContrast ? 'text-white' : 'text-[#0F5132]')} />
              </div>
              <span className="font-semibold">Alto contraste</span>
            </button>

            <button
              className={cn(
                'flex items-center w-full px-4 py-3 rounded-xl border-2 transition-all',
                isGrayscale
                  ? 'bg-[#0F5132] border-[#0F5132] text-white shadow-md'
                  : 'bg-white dark:bg-gray-900 border-gray-100 dark:border-gray-800 text-gray-700 dark:text-gray-300 hover:border-gray-200 dark:hover:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800',
              )}
              onClick={(e) => {
                e.stopPropagation();
                setIsGrayscale(!isGrayscale);
              }}
            >
              <div className={cn('p-2 rounded-lg mr-3', isGrayscale ? 'bg-white/20' : 'bg-gray-100 dark:bg-gray-800')}>
                <Type className={cn('w-5 h-5', isGrayscale ? 'text-white' : 'text-[#0F5132]')} />
              </div>
              <span className="font-semibold">Escala de grises</span>
            </button>
          </div>
        </div>

        {/* Reset Button */}
        <button
          className="w-full py-4 text-red-500 font-bold hover:bg-red-50 dark:hover:bg-red-900/20 rounded-xl transition-all flex items-center justify-center gap-2 mt-2 border-2 border-transparent hover:border-red-100 dark:hover:border-red-900/30"
          onClick={(e) => {
            e.stopPropagation();
            reset();
          }}
        >
          <RefreshCcw className="w-4 h-4" />
          Restablecer ajustes
        </button>
      </div>
    </div>
  );
}

export function AccessibilityMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  return (
    <div className="fixed bottom-24 right-8 z-[100] hidden lg:block" ref={menuRef}>
      {isOpen && <AccessibilityPanel onClose={() => setIsOpen(false)} />}

      {/* Main Floating Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`w-16 h-16 rounded-full shadow-2xl flex items-center justify-center border-0 transition-all duration-300 hover:scale-110 active:scale-95 ${
          isOpen ? 'bg-[#D4A574] text-white rotate-90' : 'bg-[#0F5132] text-white hover:bg-[#1a7552]'
        }`}
        aria-label="Menú de accesibilidad"
      >
        {isOpen ? <X className="w-8 h-8" /> : <Accessibility className="w-8 h-8" />}
      </button>
    </div>
  );
}
