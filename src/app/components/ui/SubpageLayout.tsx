import React from 'react';
import { Header } from '../layout/Header';
import { Footer } from '../layout/Footer';
import { TomBotButton } from '../widgets/TomBotButton';
import { AccessibilityMenu } from '../widgets/AccessibilityMenu';
import { ScrollToTop } from '../layout/ScrollToTop';
import { Link } from 'react-router';
import { ChevronRight, Home } from 'lucide-react';

interface BreadcrumbItem {
  name: string;
  path: string;
}

interface SubpageLayoutProps {
  title: string;
  breadcrumbs: BreadcrumbItem[];
  children: React.ReactNode;
}

export function SubpageLayout({ title, breadcrumbs, children }: SubpageLayoutProps) {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-950 text-gray-900 dark:text-gray-100 flex flex-col transition-colors duration-300">
      <Header />
      
      {/* Banner Superior */}
      <div className="relative bg-gradient-to-br from-[#0F5132] via-[#1a7552] to-[#0F5132] dark:from-gray-900 dark:via-gray-950 dark:to-gray-900 text-white py-16 overflow-hidden transition-colors duration-300">
        {/* Decoraciones Geométricas */}
        <div
          className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#D4A574] opacity-5 dark:opacity-2"
          style={{ clipPath: 'polygon(100% 0, 100% 100%, 0 0)' }}
        />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <h1 className="font-['Montserrat'] font-bold text-3xl sm:text-4xl lg:text-5xl mb-4 tracking-tight">
            {title}
          </h1>
          
          {/* Breadcrumbs */}
          <nav className="flex flex-wrap items-center gap-2 text-sm text-gray-200 dark:text-gray-400">
            <Link to="/" className="hover:text-[#D4A574] transition-colors flex items-center gap-1.5 font-medium">
              <Home className="w-4 h-4" />
              <span>Inicio</span>
            </Link>
            
            {breadcrumbs.map((item, idx) => (
              <React.Fragment key={idx}>
                <ChevronRight className="w-4 h-4 text-gray-400 flex-shrink-0" />
                {idx === breadcrumbs.length - 1 ? (
                  <span className="text-[#D4A574] font-semibold">{item.name}</span>
                ) : (
                  <Link to={item.path} className="hover:text-[#D4A574] transition-colors font-medium">
                    {item.name}
                  </Link>
                )}
              </React.Fragment>
            ))}
          </nav>
        </div>
      </div>
      
      {/* Contenido Principal */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="animate-fade-in">
          {children}
        </div>
      </main>
      
      <Footer />
      <TomBotButton />
      <AccessibilityMenu />
      <ScrollToTop />
    </div>
  );
}
