import { ImageWithFallback } from '../ui/ImageWithFallback';
import { ChefHat, Code, Microscope, TrendingUp } from 'lucide-react';

const carreras = [
  {
    icon: ChefHat,
    nombre: 'Licenciatura en Gastronomía',
    nivel: 'Licenciatura',
    descripcion: 'Forma chefs profesionales con dominio de técnicas culinarias de alta cocina, gestión gastronómica y emprendimiento.',
    imagen: 'https://images.unsplash.com/photo-1556910103-1c02745aae4d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600',
  },
  {
    icon: Code,
    nombre: 'Ing. en Tecnologías de la Información e Innovación Digital',
    nivel: 'TSU / Ingeniería',
    descripcion: 'Profesionales en desarrollo de software, infraestructura tecnológica, ciberseguridad e innovación digital.',
    imagen: 'https://images.unsplash.com/photo-1723987251277-18fc0a1effd0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600',
  },
  {
    icon: Microscope,
    nombre: 'Ing. en Biotecnología',
    nivel: 'TSU / Ingeniería',
    descripcion: 'Especialistas en investigación científica, desarrollo de procesos biotecnológicos y gestión de laboratorios.',
    imagen: 'https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600',
  },
  {
    icon: TrendingUp,
    nombre: 'Lic. en Negocios y Mercadotecnia',
    nivel: 'TSU / Licenciatura',
    descripcion: 'Expertos en estrategias comerciales, marketing digital, branding y desarrollo empresarial sostenible.',
    imagen: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600',
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
            const Icon = carrera.icon;
            return (
              <div
                key={index}
                className="group bg-white dark:bg-gray-900 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 dark:border-gray-800"
              >
                {/* Image */}
                <div className="relative h-64 overflow-hidden">
                  <ImageWithFallback
                    src={carrera.imagen}
                    alt={carrera.nombre}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>

                  {/* Icon Badge */}
                  <div className="absolute top-6 left-6 w-14 h-14 bg-[#D4A574] rounded-xl flex items-center justify-center shadow-lg">
                    <Icon className="w-7 h-7 text-white" />
                  </div>

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
                  <button className="font-['Inter'] font-semibold text-sm text-[#D4A574] hover:text-[#c19563] transition-colors flex items-center gap-2 group">
                    <span>Ver plan de estudios</span>
                    <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
