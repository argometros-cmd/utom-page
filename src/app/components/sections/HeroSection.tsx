import { useState, useEffect, useRef } from 'react';
import { ArrowRight, Award, Building2, ChevronLeft, ChevronRight, GraduationCap, Handshake } from 'lucide-react';

// Componente para animar el conteo de números
function CountUp({ end, duration = 2000, suffix = "" }: { end: number, duration?: number, suffix?: string }) {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    let start = 0;
    const increment = end / (duration / 16); // 60fps aprox
    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [isVisible, end, duration]);

  return <span ref={elementRef}>{count}{suffix}</span>;
}

// Importa dinámicamente cualquier imagen...
const welcomeImages = (import.meta as any).glob('../../../imports/hero/*.{png,jpg,jpeg,webp,gif}', { eager: true });
const images = Object.values(welcomeImages).map((mod: any) => mod.default);

const caracteristicas = [
  {
    icon: GraduationCap,
    titulo: 'Excelencia Académica',
    descripcion: 'Programas educativos certificados y actualizados según las necesidades del mercado laboral.',
  },
  {
    icon: Building2,
    titulo: 'Instalaciones Modernas',
    descripcion: 'Laboratorios equipados con tecnología de vanguardia para una formación práctica integral.',
  },
  {
    icon: Handshake,
    titulo: 'Vinculación Empresarial',
    descripcion: 'Convenios con más de 100 empresas para prácticas profesionales y bolsa de trabajo.',
  },
  {
    icon: Award,
    titulo: 'Reconocimiento Nacional',
    descripcion: 'Talento con responsabilidad social y compromiso con el desarrollo regional.',
  },
];

export function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const defaultImage = 'https://images.unsplash.com/photo-1723987135977-ae935608939e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600';
  const carouselImages = images.length > 0 ? images : [defaultImage];

  useEffect(() => {
    if (carouselImages.length <= 1) return;
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % carouselImages.length);
    }, 4500);
    return () => clearInterval(interval);
  }, [carouselImages.length]);

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentSlide((prev) => (prev - 1 + carouselImages.length) % carouselImages.length);
  };

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentSlide((prev) => (prev + 1) % carouselImages.length);
  };

  return (
    <>
      <section id="inicio" className="relative min-h-[700px] flex items-center overflow-hidden bg-white dark:bg-gray-950 transition-colors duration-300">
        {/* Geometric Diagonal Shapes - Verde Profundo */}
        <div className="absolute inset-0 z-0">
          {/* Large diagonal - top right */}
          <div
            className="absolute top-0 right-0 w-[700px] h-[700px] bg-[#0F5132] dark:bg-[#D4A574] opacity-8 dark:opacity-3"
            style={{ clipPath: 'polygon(100% 0, 100% 75%, 25% 0)' }}
          ></div>

          {/* Bottom left diagonal */}
          <div
            className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-[#0F5132] dark:bg-[#D4A574] opacity-5 dark:opacity-2"
            style={{ clipPath: 'polygon(0 100%, 75% 100%, 0 25%)' }}
          ></div>

          {/* Accent triangles - Dorado */}
          <div
            className="absolute top-32 right-48 w-40 h-40 bg-[#D4A574] opacity-15"
            style={{ clipPath: 'polygon(50% 0%, 100% 100%, 0% 100%)' }}
          ></div>
          <div
            className="absolute bottom-40 right-32 w-28 h-28 bg-[#D4A574] opacity-12"
            style={{ clipPath: 'polygon(50% 0%, 100% 100%, 0% 100%)' }}
          ></div>
        </div>

        {/* Content in 2 Columns */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-20 lg:py-28">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            {/* Left Column: Text & Buttons */}
            <div className="lg:col-span-7 space-y-6">
              <h1 className="font-['Montserrat'] font-bold text-[#0F5132] dark:text-[#D4A574] leading-[1.1] text-4xl sm:text-5xl lg:text-6xl">
                Educación que une,<br />transforma y<br />trasciende
              </h1>
              <p className="font-['Inter'] text-base sm:text-lg text-gray-700 dark:text-gray-300 max-w-xl leading-relaxed">
                Formamos profesionales de excelencia comprometidos con el desarrollo tecnológico,
                gastronómico, biotecnológico y empresarial de Michoacán y México.
              </p>
              <div className="flex flex-wrap gap-4 pt-4">
                <button className="group bg-[#0F5132] dark:bg-[#D4A574] text-white font-['Montserrat'] font-semibold px-8 py-3.5 rounded-xl hover:bg-[#0d4228] dark:hover:bg-[#c19563] transition-all shadow-md hover:shadow-lg flex items-center gap-2 text-sm">
                  <span>Conoce Nuestras Carreras</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
                <button className="bg-[#D4A574] dark:bg-[#0F5132] text-white font-['Montserrat'] font-semibold px-8 py-3.5 rounded-xl hover:bg-[#c19563] dark:hover:bg-[#0d4228] transition-all shadow-md hover:shadow-lg text-sm">
                  Proceso de Admisión
                </button>
              </div>
            </div>

            {/* Right Column: Framed Image Carousel */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="relative w-full max-w-[380px] aspect-[4/5] group/carousel">
                {/* Decorative offset card */}
                <div className="absolute inset-0 bg-[#D4A574] rounded-3xl translate-x-4 translate-y-4 opacity-20"></div>
                {/* Framed Image Container */}
                <div className="absolute inset-0 rounded-3xl overflow-hidden border-8 border-white shadow-2xl bg-white">
                  {carouselImages.map((imgSrc, index) => (
                    <div
                      key={index}
                      className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                        index === currentSlide ? 'opacity-100 z-10' : 'opacity-0 z-0'
                      }`}
                    >
                      <img
                        src={imgSrc}
                        alt={`Bienvenida UTOM ${index + 1}`}
                        className="w-full h-full object-cover transition-transform hover:scale-103 duration-700"
                      />
                    </div>
                  ))}

                  {/* Navigation Arrows (solo si hay más de 1 imagen) */}
                  {carouselImages.length > 1 && (
                    <>
                      <button
                        onClick={handlePrev}
                        className="absolute left-2 top-1/2 -translate-y-1/2 z-20 w-8 h-8 rounded-full bg-white/80 hover:bg-white text-[#0F5132] flex items-center justify-center shadow hover:scale-110 active:scale-95 transition-all opacity-0 group-hover/carousel:opacity-100"
                        aria-label="Previous slide"
                      >
                        <ChevronLeft className="w-5 h-5" />
                      </button>
                      <button
                        onClick={handleNext}
                        className="absolute right-2 top-1/2 -translate-y-1/2 z-20 w-8 h-8 rounded-full bg-white/80 hover:bg-white text-[#0F5132] flex items-center justify-center shadow hover:scale-110 active:scale-95 transition-all opacity-0 group-hover/carousel:opacity-100"
                        aria-label="Next slide"
                      >
                        <ChevronRight className="w-5 h-5" />
                      </button>

                      {/* Indicator Dots */}
                      <div className="absolute bottom-4 left-0 right-0 z-20 flex justify-center gap-1.5">
                        {carouselImages.map((_, index) => (
                          <button
                            key={index}
                            onClick={() => setCurrentSlide(index)}
                            className={`w-2 h-2 rounded-full transition-all ${
                              index === currentSlide ? 'bg-[#D4A574] w-4' : 'bg-white/60 hover:bg-white'
                            }`}
                            aria-label={`Go to slide ${index + 1}`}
                          ></button>
                        ))}
                      </div>
                    </>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Diagonal divider at bottom */}
        <div className="absolute bottom-0 left-0 w-full h-24 bg-white dark:bg-gray-950 transition-colors duration-300" style={{ clipPath: 'polygon(0 40%, 100% 0, 100% 100%, 0 100%)' }}></div>
      </section>

      {/* Características Integradas */}
      <section className="pb-24 pt-12 bg-white dark:bg-gray-950 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {caracteristicas.map((item, index) => {
              const Icon = item.icon;
              return (
                <div
                  key={index}
                  className="p-6 bg-gray-50 dark:bg-gray-900 rounded-2xl border border-transparent hover:border-[#D4A574] dark:hover:border-[#0F5132] transition-all duration-300 group"
                >
                  <div className="w-16 h-16 mb-6 bg-[#0F5132] dark:bg-[#D4A574] rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg">
                    <Icon className="w-8 h-8 text-[#D4A574] dark:text-[#0F5132]" />
                  </div>
                  <h3 className="font-['Montserrat'] font-bold text-[#0F5132] dark:text-[#D4A574] mb-3 text-lg leading-tight">
                    {item.titulo}
                  </h3>
                  <p className="font-['Inter'] text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                    {item.descripcion}
                  </p>
                </div>
              );
            })}
          </div>

          {/* Stats Summary */}
          <div className="mt-16 bg-[#0F5132] dark:bg-gray-900 rounded-3xl p-8 lg:p-12 shadow-xl relative overflow-hidden transition-colors duration-300">
            <div
              className="absolute top-0 right-0 w-64 h-64 bg-[#D4A574] opacity-10"
              style={{ clipPath: 'polygon(100% 0, 100% 100%, 0 0)' }}
            ></div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center text-white relative z-10">
              <div>
                <div className="font-['Montserrat'] font-bold text-3xl md:text-4xl text-[#D4A574] mb-1">
                  <CountUp end={10} suffix="+" />
                </div>
                <div className="text-[10px] uppercase tracking-widest opacity-80">Años de Exp.</div>
              </div>
              <div>
                <div className="font-['Montserrat'] font-bold text-3xl md:text-4xl text-[#D4A574] mb-1">
                  <CountUp end={300} suffix="+" />
                </div>
                <div className="text-[10px] uppercase tracking-widest opacity-80">Estudiantes</div>
              </div>
              <div>
                <div className="font-['Montserrat'] font-bold text-3xl md:text-4xl text-[#D4A574] mb-1">
                  <CountUp end={95} suffix="%" />
                </div>
                <div className="text-[10px] uppercase tracking-widest opacity-80">Empleabilidad</div>
              </div>
              <div>
                <div className="font-['Montserrat'] font-bold text-3xl md:text-4xl text-[#D4A574] mb-1">
                  <CountUp end={20} suffix="+" />
                </div>
                <div className="text-[10px] uppercase tracking-widest opacity-80">Convenios</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

