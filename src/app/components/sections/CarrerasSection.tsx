import { Link } from 'react-router';
import { ImageWithFallback } from '../ui/ImageWithFallback';
import { ChefHat, Code, Microscope, TrendingUp } from 'lucide-react';

const carreras = [
  {
    icon: ChefHat,
    nombre: 'Licenciatura en Gastronomía',
    nivel: 'Licenciatura',
    descripcion: 'Forma chefs profesionales con dominio de técnicas culinarias de alta cocina, gestión gastronómica y emprendimiento.',
    imagen: 'https://gnzneytwugcebhaxtzem.supabase.co/storage/v1/object/public/media-publica/carreras/gastronomia/666410927_975638551658920_1760193756701998190_n.jpg',
    path: '/oferta/licenciatura-gastronomia',
  },
  {
    icon: Code,
    nombre: 'Ing. en Tecnologías de la Información e Innovación Digital',
    nivel: 'TSU / Ingeniería',
    descripcion: 'Profesionales en desarrollo de software, infraestructura tecnológica, ciberseguridad e innovación digital.',
    imagen: 'https://gnzneytwugcebhaxtzem.supabase.co/storage/v1/object/public/media-publica/carreras/ti/572163649_849820160907427_6426852622862910825_n.jpg',
    path: '/oferta/ingenieria-tecnologias-informacion',
  },
  {
    icon: Microscope,
    nombre: 'Ing. en Biotecnología',
    nivel: 'TSU / Ingeniería',
    descripcion: 'Especialistas en investigación científica, desarrollo de procesos biotecnológicos y gestión de laboratorios.',
    imagen: 'https://gnzneytwugcebhaxtzem.supabase.co/storage/v1/object/public/media-publica/carreras/biotecnologia/674339444_983978064158302_7244058262800310456_n.jpg',
    path: '/oferta/ingenieria-biotecnologia',
  },
  {
    icon: TrendingUp,
    nombre: 'Lic. en Negocios y Mercadotecnia',
    nivel: 'TSU / Licenciatura',
    descripcion: 'Expertos en estrategias comerciales, marketing digital, branding y desarrollo empresarial sostenible.',
    imagen: 'https://gnzneytwugcebhaxtzem.supabase.co/storage/v1/object/public/media-publica/carreras/negocios/600117694_887464807142962_4214036980281132860_n.jpg',
    path: '/oferta/licenciatura-mercadotecnia',
  },
];

export function CarrerasSection() {
  return (
    <section id="oferta" className="py-24 bg-white dark:bg-gray-950 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="font-['Montserrat'] font-bold text-[#0F5132] dark:text-[#D4A574] mb-4 text-4xl lg:text-5xl">
            Oferta Educativa
          </h2>
          <p className="font-['Inter'] text-gray-600 dark:text-gray-400 max-w-2xl mx-auto text-lg">
            Programas educativos de vanguardia diseñados para formar profesionales
            competitivos en las áreas de mayor demanda.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {carreras.map((carrera, index) => {
            return (
              <Link
                key={index}
                to={carrera.path}
                className="group bg-white dark:bg-gray-900 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 dark:border-gray-800 block focus:outline-none focus-visible:ring-2 focus-visible:ring-[#D4A574] focus-visible:ring-offset-2 focus-visible:ring-offset-white dark:focus-visible:ring-offset-gray-950"
              >
                {/* Image */}
                <div className="relative h-64 overflow-hidden">
                  <ImageWithFallback
                    src={carrera.imagen}
                    alt={carrera.nombre}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>

                  {/* Nivel Badge */}
                  <div className="absolute bottom-6 left-6">
                    <span className="inline-block px-4 py-2 bg-white/95 dark:bg-gray-900/95 backdrop-blur-sm rounded-lg text-sm font-['Inter'] font-semibold text-[#0F5132] dark:text-[#D4A574]">
                      {carrera.nivel}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-8">
                  <h3 className="font-['Montserrat'] font-bold text-[#0F5132] dark:text-[#D4A574] mb-3 text-2xl">
                    {carrera.nombre}
                  </h3>
                  <p className="font-['Inter'] text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
                    {carrera.descripcion}
                  </p>
                  <span className="font-['Inter'] font-semibold text-sm text-[#D4A574] transition-colors flex items-center gap-2 group-hover:text-[#c19563]">
                    <span>Ver plan de estudios</span>
                    <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </span>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
