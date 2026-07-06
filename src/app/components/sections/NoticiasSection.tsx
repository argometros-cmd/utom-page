import { ImageWithFallback } from '../ui/ImageWithFallback';
import { Calendar, Trophy, Users, Bell } from 'lucide-react';

const noticias = [
  {
    tipo: 'Reconocimiento',
    titulo: 'UTOM destaca por su excelencia académica',
    descripcion: 'Nuestra universidad ha sido reconocida por su compromiso con la innovación y la formación de talento.',
    imagen: 'https://images.unsplash.com/photo-1723987135977-ae935608939e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600',
    fecha: 'Abril 2026',
    icon: Trophy,
  },
  {
    tipo: 'Evento',
    titulo: 'Proceso de Admisión 2026',
    descripcion: 'Conoce las fechas y requisitos para formar parte de la comunidad UTOM.',
    imagen: 'https://images.unsplash.com/photo-1769839272205-07cb052f5ca2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600',
    fecha: 'Mayo 2026',
    icon: Calendar,
  },
  {
    tipo: 'Comunidad',
    titulo: 'Vinculación con la Industria',
    descripcion: 'Nuestros estudiantes realizan prácticas profesionales en empresas líderes de Michoacán.',
    imagen: 'https://images.unsplash.com/photo-1758270705290-62b6294dd044?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600',
    fecha: 'Marzo 2026',
    icon: Users,
  },
  {
    tipo: 'Convocatoria',
    titulo: 'Becas y Apoyos Económicos',
    descripcion: 'Consulta las opciones de financiamiento disponibles para estudiantes.',
    imagen: 'https://images.unsplash.com/photo-1766297247924-6638d54e7c89?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600',
    fecha: 'Permanente',
    icon: Bell,
  },
];

export function NoticiasSection() {
  return (
    <section className="py-24 bg-gray-50 dark:bg-gray-950 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="font-['Montserrat'] font-bold text-[#0F5132] dark:text-[#D4A574] mb-4 text-4xl lg:text-5xl">
            Noticias y Anuncios
          </h2>
          <p className="font-['Inter'] text-gray-600 dark:text-gray-400 max-w-2xl mx-auto text-lg">
            Mantente informado sobre los eventos, logros y convocatorias de nuestra comunidad universitaria.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Primera tarjeta grande */}
          <div className="lg:col-span-2 lg:row-span-2 bg-gradient-to-br from-[#0F5132] to-[#1a7552] dark:from-gray-900 dark:to-gray-850 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group relative border border-transparent dark:border-gray-800">
            <div className="relative h-full min-h-[400px]">
              <ImageWithFallback
                src={noticias[0].imagen}
                alt={noticias[0].titulo}
                className="w-full h-64 object-cover opacity-20 group-hover:opacity-25 transition-opacity"
              />
              {/* Triangle decoration */}
              <div
                className="absolute top-0 right-0 w-40 h-40 bg-[#D4A574] opacity-15"
                style={{ clipPath: 'polygon(100% 0, 100% 100%, 0 0)' }}
              ></div>

              <div className="absolute inset-0 p-8 lg:p-10 flex flex-col justify-end">
                <div className="flex items-center gap-2 mb-4">
                  {(() => {
                    const Icon = noticias[0].icon;
                    return <Icon className="w-5 h-5 text-[#D4A574]" />;
                  })()}
                  <span className="font-['Inter'] text-sm text-[#D4A574] font-medium">
                    {noticias[0].tipo}
                  </span>
                </div>
                <h3 className="font-['Montserrat'] font-bold text-white mb-4 text-2xl lg:text-3xl">
                  {noticias[0].titulo}
                </h3>
                <p className="font-['Inter'] text-gray-200 mb-4 leading-relaxed">
                  {noticias[0].descripcion}
                </p>
                <div className="flex items-center gap-2 text-gray-300">
                  <Calendar className="w-4 h-4" />
                  <span className="font-['Inter'] text-sm">{noticias[0].fecha}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Tarjetas pequeñas */}
          {noticias.slice(1).map((noticia, index) => {
            const Icon = noticia.icon;
            return (
              <div
                key={index}
                className="bg-white dark:bg-gray-900 rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-200 dark:border-gray-800"
              >
                <div className="relative h-40">
                  <ImageWithFallback
                    src={noticia.imagen}
                    alt={noticia.titulo}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute bottom-3 left-3">
                    <span className="inline-block px-3 py-1.5 bg-white/95 dark:bg-gray-900/95 backdrop-blur-sm rounded-lg text-xs font-['Inter'] font-semibold text-[#0F5132] dark:text-[#D4A574]">
                      {noticia.tipo}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-start gap-3 mb-3">
                    <div className="w-10 h-10 rounded-xl bg-[#D4A574]/10 dark:bg-[#D4A574]/20 flex items-center justify-center flex-shrink-0">
                      <Icon className="w-5 h-5 text-[#D4A574]" />
                    </div>
                    <h3 className="font-['Montserrat'] font-semibold text-[#0F5132] dark:text-[#D4A574] leading-tight">
                      {noticia.titulo}
                    </h3>
                  </div>
                  <p className="font-['Inter'] text-sm text-gray-600 dark:text-gray-400 mb-3 leading-relaxed">
                    {noticia.descripcion}
                  </p>
                  <div className="flex items-center gap-2 text-gray-500">
                    <Calendar className="w-4 h-4" />
                    <span className="font-['Inter'] text-xs">{noticia.fecha}</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
