import { BrowserRouter, Navigate, Routes, Route, useLocation } from 'react-router';
import { useEffect } from 'react';
import InicioPage from './pages/inicio/Inicio';
import Login from './pages/autenticacion/Login';
import AdminPanel from './pages/administracion/AdminPanel';

// Subpages
import {
  ConocenosMision,
  ConocenosRectora,
  ConocenosDirectorio,
  ConocenosCampusMaravatio,
  ConocenosCampusZitacuaro
} from './pages/conocenos/Conocenos';
import {
  EstudiantesAspirantes,
  EstudiantesModelo,
  EstudiantesBecas
} from './pages/estudiantes/Estudiantes';
import DocentesPage from './pages/docentes/Docentes';
import {
  OfertaTecnologias,
  OfertaBiotecnologia,
  OfertaGastronomia,
  OfertaMercadotecnia
} from './pages/oferta-educativa/OfertaEducativa';
import TransparenciaPage from './pages/informacion-financiera/InformacionFinanciera';
import {
  ServiciosDocumentacionEscolarPage,
  ServiciosTitulacionPage,
} from './pages/servicios/Servicios';
import VinculacionPage from './pages/vinculacion/Vinculacion';
import ContactoPage from './pages/contactanos/Contactanos';

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

export default function App() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-950 text-gray-900 dark:text-gray-100 scroll-smooth transition-colors duration-300">
      <BrowserRouter>
        <ScrollToTopOnRouteChange />
        <ScrollToHashElement />
        <Routes>
          <Route path="/" element={<InicioPage />} />
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
          <Route path="/estudiantes/modelo-educativo" element={<EstudiantesModelo />} />
          <Route path="/estudiantes/becas" element={<EstudiantesBecas />} />
          
          {/* Docentes */}
          <Route path="/docentes" element={<DocentesPage />} />
          
          {/* Oferta Educativa */}
          <Route path="/oferta/ingenieria-tecnologias-informacion" element={<OfertaTecnologias />} />
          <Route path="/oferta/ingenieria-biotecnologia" element={<OfertaBiotecnologia />} />
          <Route path="/oferta/licenciatura-gastronomia" element={<OfertaGastronomia />} />
          <Route path="/oferta/licenciatura-mercadotecnia" element={<OfertaMercadotecnia />} />
          
          {/* Transparencia */}
          <Route path="/transparencia/:year" element={<TransparenciaPage />} />
          
          {/* Servicios */}
          <Route path="/servicios/titulacion" element={<ServiciosTitulacionPage />} />
          <Route path="/servicios/documentacion-escolar" element={<ServiciosDocumentacionEscolarPage />} />

          {/* Vinculación */}
          <Route path="/vinculacion" element={<VinculacionPage />} />

          {/* Compatibilidad con los enlaces anteriores */}
          <Route path="/servicios-vinculacion" element={<Navigate to="/vinculacion" replace />} />
          <Route path="/servicios-vinculacion/titulacion" element={<Navigate to="/servicios/titulacion" replace />} />
          <Route path="/servicios-vinculacion/documentacion-escolar" element={<Navigate to="/servicios/documentacion-escolar" replace />} />
          
          {/* Contacto */}
          <Route path="/contacto" element={<ContactoPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
