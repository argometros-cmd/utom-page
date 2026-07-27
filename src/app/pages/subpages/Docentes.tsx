import React, { useEffect, useState } from 'react';
import { SubpageLayout } from '../../components/ui/SubpageLayout';
import { Mail, ChevronLeft, ChevronRight } from 'lucide-react';
import { contactInfo } from '../../data/contact';

export default function DocentesPage() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const breadcrumbs = [
    { name: 'Docentes', path: '/docentes' }
  ];

  const carouselImages = [
    'https://gnzneytwugcebhaxtzem.supabase.co/storage/v1/object/public/media-publica/stock-general/656420397_967155492507226_1412740936610324300_n.jpg',
    'https://gnzneytwugcebhaxtzem.supabase.co/storage/v1/object/public/media-publica/stock-general/650239836_953964350493007_8186742531811547547_n.jpg',
    'https://gnzneytwugcebhaxtzem.supabase.co/storage/v1/object/public/media-publica/stock-general/655852567_965465772676198_3494362866240556044_n.jpg',
  ];

  useEffect(() => {
    const timer = window.setInterval(() => {
      setCurrentSlide((current) => (current + 1) % carouselImages.length);
    }, 4500);

    return () => window.clearInterval(timer);
  }, [carouselImages.length]);

  return (
    <SubpageLayout title="Docentes" breadcrumbs={breadcrumbs}>
      <div className="space-y-16">
        {/* Intro + Carrusel */}
        <div className="grid lg:grid-cols-2 gap-8 items-stretch">
          <div className="bg-gradient-to-br from-[#0F5132] to-[#1a7552] dark:from-gray-900 dark:to-gray-850 text-white rounded-3xl p-8 lg:p-10 shadow-md relative overflow-hidden transition-colors duration-300 min-h-[420px] flex items-center">
            <div className="absolute top-0 right-0 w-48 h-48 bg-[#D4A574] opacity-10" style={{ clipPath: 'polygon(100% 0, 100% 100%, 0 0)' }}></div>
            <div className="relative z-10 max-w-4xl">
              <p className="font-['Montserrat'] font-semibold text-sm uppercase tracking-[0.2em] text-[#D4A574] mb-4">
                Personal Docente
              </p>
              <p className="font-['Inter'] text-white/90 leading-relaxed text-base lg:text-lg">
                El personal académico de la Universidad Tecnológica del Oriente de Michoacán se compone por personal universitario docente e investigador, que comparten su conocimiento y experiencia a nuestros estudiantes. Para poder brindar a nuestros estudiantes una preparación profesional para el mercado actual, el cual es cada vez más exigente y competitivo. Para ellos, la Universidad Tecnológica del Oriente de Michoacán pone a su disposición recursos y herramientas que ayudan a los docentes a complementar la vocación académica que imparten.
              </p>
            </div>
          </div>

          <div className="relative rounded-3xl overflow-hidden shadow-md border border-gray-150 dark:border-gray-800 min-h-[420px] bg-white dark:bg-gray-900">
            {carouselImages.map((imageSrc, index) => (
              <div
                key={imageSrc}
                className={`absolute inset-0 transition-opacity duration-1000 ${
                  index === currentSlide ? 'opacity-100' : 'opacity-0'
                }`}
              >
                <img
                  src={imageSrc}
                  alt={`Docentes UTOM ${index + 1}`}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}

            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent"></div>

            <div className="absolute inset-x-0 bottom-0 p-6 lg:p-8 flex items-end justify-between gap-4 z-10">
              <div>
                <p className="font-['Montserrat'] font-semibold text-[#D4A574] text-sm uppercase tracking-[0.2em] mb-2">
                  Galería Docente
                </p>
                <h3 className="font-['Montserrat'] font-bold text-white text-xl lg:text-2xl">
                  Comunidad académica en acción
                </h3>
              </div>

              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => setCurrentSlide((prev) => (prev - 1 + carouselImages.length) % carouselImages.length)}
                  className="w-10 h-10 rounded-full bg-white/85 hover:bg-white text-[#0F5132] flex items-center justify-center shadow transition-colors"
                  aria-label="Imagen anterior"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                  type="button"
                  onClick={() => setCurrentSlide((prev) => (prev + 1) % carouselImages.length)}
                  className="w-10 h-10 rounded-full bg-white/85 hover:bg-white text-[#0F5132] flex items-center justify-center shadow transition-colors"
                  aria-label="Imagen siguiente"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </div>

            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
              {carouselImages.map((_, index) => (
                <button
                  key={index}
                  type="button"
                  onClick={() => setCurrentSlide(index)}
                  className={`h-2 rounded-full transition-all ${
                    index === currentSlide ? 'w-6 bg-[#D4A574]' : 'w-2 bg-white/60 hover:bg-white'
                  }`}
                  aria-label={`Ir a la imagen ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Convocatoria Externa */}
        <div className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-3xl shadow-sm overflow-hidden">
          <div className="grid lg:grid-cols-[1fr_auto] items-center gap-6 p-6 lg:p-8">
            <div className="space-y-3">
              <p className="font-['Montserrat'] font-semibold text-sm uppercase tracking-[0.2em] text-[#D4A574]">
                Convocatoria Externa
              </p>
              <h3 className="font-['Montserrat'] font-bold text-2xl text-[#0F5132] dark:text-[#D4A574]">
                ¿Eres profesionista y quieres formar parte de la UTOM?
              </h3>
              <p className="font-['Inter'] text-sm lg:text-base text-gray-600 dark:text-gray-300 leading-relaxed max-w-3xl">
                Si tienes experiencia docente, técnica o profesional en tu área, puedes sumarte al crecimiento académico de nuestra comunidad. Escríbenos para compartir tu perfil y explorar oportunidades de colaboración con la Universidad Tecnológica del Oriente de Michoacán.
              </p>
            </div>

            <a
              href={`mailto:${contactInfo.email}?subject=${encodeURIComponent('Quiero ser parte del cuerpo docente UTOM')}`}
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-[#0F5132] dark:bg-[#D4A574] text-white dark:text-[#0F5132] font-['Montserrat'] font-semibold shadow-sm hover:bg-[#0d4228] dark:hover:bg-[#c19563] transition-colors"
            >
              <Mail className="w-4 h-4" />
              <span>Conocer convocatoria</span>
            </a>
          </div>
        </div>

      </div>
    </SubpageLayout>
  );
}
