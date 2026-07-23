import { BrowserRouter, Routes, Route, useLocation } from 'react-router';
import { useEffect } from 'react';
import { Header } from './components/layout/Header';
import { HeroSection } from './components/sections/HeroSection';
import { CarrerasSection } from './components/sections/CarrerasSection';
import { AspirantesSection } from './components/sections/AspirantesSection';
import { TramitesSection } from './components/sections/TramitesSection';
import { NoticiasSection } from './components/sections/NoticiasSection';
import { CallToAction } from './components/sections/CallToAction';
import { ContactoSection } from './components/sections/ContactoSection';
import { Footer } from './components/layout/Footer';
import { ScrollToTop } from './components/layout/ScrollToTop';
import { AccessibilityMenu } from './components/widgets/AccessibilityMenu';
import { TomBotButton } from './components/widgets/TomBotButton';
import Login from './pages/Login';
import AdminPanel from './pages/AdminPanel';

// Subpages
import {
  ConocenosMision,
  ConocenosRectora,
  ConocenosDirectorio,
  ConocenosCampusMaravatio,
  ConocenosCampusZitacuaro
} from './pages/subpages/Conocenos';
import {
  EstudiantesAspirantes,
  EstudiantesEgresados,
  EstudiantesModelo,
  EstudiantesSIGO
} from './pages/subpages/Estudiantes';
import DocentesPage from './pages/subpages/Docentes';
import {
  OfertaTecnologias,
  OfertaBiotecnologia,
  OfertaGastronomia,
  OfertaMercadotecnia
} from './pages/subpages/Oferta';
import TransparenciaPage from './pages/subpages/Transparencia';
import ServiciosVinculacionPage from './pages/subpages/ServiciosVinculacion';
import ContactoPage from './pages/subpages/Contacto';

function ScrollToHashElement() {
  const { hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const element = document.getElementById(hash.slice(1));
      if (element) {
        const timer = setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 150);
        return () => clearTimeout(timer);
      }
    }
  }, [hash]);

  return null;
}

function ScrollToTopOnRouteChange() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'auto' });
  }, [pathname]);

  return null;
}

function LandingPage() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <CarrerasSection />
        <AspirantesSection />
        <TramitesSection />
        <NoticiasSection />
        <CallToAction />
        <ContactoSection />
      </main>
      <Footer />
      <TomBotButton />
      <AccessibilityMenu />
      <ScrollToTop />
    </>
  );
}

export default function App() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-950 text-gray-900 dark:text-gray-100 scroll-smooth transition-colors duration-300">
      <BrowserRouter>
        <ScrollToTopOnRouteChange />
        <ScrollToHashElement />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/admin" element={<AdminPanel />} />
          
          {/* Conócenos */}
          <Route path="/conocenos/mision-vision-valores" element={<ConocenosMision />} />
          <Route path="/conocenos/rectora" element={<ConocenosRectora />} />
          <Route path="/conocenos/directorio" element={<ConocenosDirectorio />} />
          <Route path="/conocenos/campus-maravatio" element={<ConocenosCampusMaravatio />} />
          <Route path="/conocenos/campus-zitacuaro" element={<ConocenosCampusZitacuaro />} />
          
          {/* Estudiantes */}
          <Route path="/estudiantes/aspirantes" element={<EstudiantesAspirantes />} />
          <Route path="/estudiantes/egresados" element={<EstudiantesEgresados />} />
          <Route path="/estudiantes/modelo-educativo" element={<EstudiantesModelo />} />
          <Route path="/estudiantes/sigo" element={<EstudiantesSIGO />} />
          
          {/* Docentes */}
          <Route path="/docentes" element={<DocentesPage />} />
          
          {/* Oferta Educativa */}
          <Route path="/oferta/ingenieria-tecnologias-informacion" element={<OfertaTecnologias />} />
          <Route path="/oferta/ingenieria-biotecnologia" element={<OfertaBiotecnologia />} />
          <Route path="/oferta/licenciatura-gastronomia" element={<OfertaGastronomia />} />
          <Route path="/oferta/licenciatura-mercadotecnia" element={<OfertaMercadotecnia />} />
          
          {/* Transparencia */}
          <Route path="/transparencia/:year" element={<TransparenciaPage />} />
          
          {/* Servicios y Vinculación */}
          <Route path="/servicios-vinculacion" element={<ServiciosVinculacionPage />} />
          
          {/* Contacto */}
          <Route path="/contacto" element={<ContactoPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
