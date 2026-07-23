import React from 'react';
import { SubpageLayout } from '../../components/ui/SubpageLayout';
import { ArrowRight, BookOpen, Compass, Briefcase, Award } from 'lucide-react';

interface CareerPageProps {
  title: string;
  level: string;
  imageUrl: string;
  desc: string;
  ingreso: string[];
  egreso: string[];
  campo: string[];
  materias: string[][];
  breadcrumbs: { name: string; path: string }[];
}

function CareerTemplate({ title, level, imageUrl, desc, ingreso, egreso, campo, materias, breadcrumbs }: CareerPageProps) {
  return (
    <SubpageLayout title={title} breadcrumbs={breadcrumbs}>
      <div className="space-y-16">
        {/* Intro */}
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-8 space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-[#D4A574]/15 text-[#D4A574] rounded-full text-xs font-bold uppercase tracking-wider">
              {level}
            </div>
            <h2 className="font-['Montserrat'] font-bold text-3xl lg:text-4xl text-[#0F5132] dark:text-[#D4A574] leading-tight">
              {title}
            </h2>
            <p className="font-['Inter'] text-gray-600 dark:text-gray-300 leading-relaxed text-lg">
              {desc}
            </p>
          </div>
          <div className="lg:col-span-4">
            <div className="relative overflow-hidden rounded-[2rem] border border-gray-100 dark:border-gray-800 shadow-2xl bg-gray-100 dark:bg-gray-900">
              <img
                src={imageUrl}
                alt={title}
                className="h-80 w-full object-cover"
                loading="eager"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-black/5 to-transparent" />
            </div>
          </div>
        </div>

        {/* Perfil de Ingreso y Egreso */}
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white dark:bg-gray-900 border border-gray-150 dark:border-gray-800 rounded-3xl p-8 shadow-sm transition-colors duration-300">
            <div className="flex items-center gap-3 mb-6">
              <BookOpen className="w-6 h-6 text-[#D4A574]" />
              <h3 className="font-['Montserrat'] font-bold text-xl text-[#0F5132] dark:text-[#D4A574]">Perfil de Ingreso</h3>
            </div>
            <ul className="space-y-3">
              {ingreso.map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 bg-[#D4A574] rounded-full mt-2 flex-shrink-0" />
                  <span className="font-['Inter'] text-sm text-gray-600 dark:text-gray-300">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-white dark:bg-gray-900 border border-gray-150 dark:border-gray-800 rounded-3xl p-8 shadow-sm transition-colors duration-300">
            <div className="flex items-center gap-3 mb-6">
              <Award className="w-6 h-6 text-[#D4A574]" />
              <h3 className="font-['Montserrat'] font-bold text-xl text-[#0F5132] dark:text-[#D4A574]">Perfil de Egreso</h3>
            </div>
            <ul className="space-y-3">
              {egreso.map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 bg-[#D4A574] rounded-full mt-2 flex-shrink-0" />
                  <span className="font-['Inter'] text-sm text-gray-600 dark:text-gray-300">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Campo Laboral */}
        <div className="bg-gray-50 dark:bg-gray-900 rounded-3xl p-8 lg:p-10 border border-gray-150 dark:border-gray-800 transition-colors duration-300">
          <div className="flex items-center gap-3 mb-6">
            <Briefcase className="w-6 h-6 text-[#D4A574]" />
            <h3 className="font-['Montserrat'] font-bold text-xl text-[#0F5132] dark:text-[#D4A574]">Campo Laboral</h3>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {campo.map((c, i) => (
              <div key={i} className="flex items-center gap-3 bg-white dark:bg-gray-950 p-4 rounded-2xl border border-gray-100 dark:border-gray-850 shadow-sm">
                <Compass className="w-5 h-5 text-[#D4A574] flex-shrink-0" />
                <span className="font-['Inter'] text-sm text-gray-700 dark:text-gray-300 font-medium">{c}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Mapa Curricular */}
        <div className="space-y-6">
          <h3 className="font-['Montserrat'] font-bold text-2xl text-[#0F5132] dark:text-[#D4A574] text-center">Estructura del Plan de Estudios</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {materias.map((semestre, idx) => (
              <div key={idx} className="bg-white dark:bg-gray-900 border border-gray-150 dark:border-gray-800 rounded-2xl p-6 shadow-sm">
                <h4 className="font-['Montserrat'] font-semibold text-[#0F5132] dark:text-[#D4A574] border-b border-gray-50 dark:border-gray-850 pb-2 mb-4">
                  Cuatrimestre {idx + 1}
                </h4>
                <ul className="space-y-2">
                  {semestre.map((mat, i) => (
                    <li key={i} className="font-['Inter'] text-xs text-gray-650 dark:text-gray-400 flex items-center gap-2">
                      <ArrowRight className="w-3.5 h-3.5 text-[#D4A574] flex-shrink-0" />
                      <span>{mat}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </SubpageLayout>
  );
}

// ----------------------------------------------------
// 1. Tecnologías de la Información
// ----------------------------------------------------
export function OfertaTecnologias() {
  const breadcrumbs = [
    { name: 'Oferta Educativa', path: '#' },
    { name: 'Ingenierías', path: '#' },
    { name: 'Ing. en Tecnologías de la Información', path: '/oferta/ingenieria-tecnologias-informacion' }
  ];

  return (
    <CareerTemplate
      title="Ingeniería en Tecnologías de la Información e Innovación Digital"
      level="TSU / Ingeniería"
      imageUrl="https://gnzneytwugcebhaxtzem.supabase.co/storage/v1/object/public/media-publica/carreras/ti/572163649_849820160907427_6426852622862910825_n.jpg"
      desc="Forma líderes en el desarrollo de software, administración de bases de datos, ciberseguridad, infraestructura de servidores y redes, e innovación de procesos digitales. Capacitado para proponer soluciones disruptivas en la nube y optimizar la transformación tecnológica de organizaciones públicas y privadas."
      ingreso={[
        'Bachillerato concluido en áreas físico-matemáticas, tecnologías o afín.',
        'Interés por la programación, algoritmos y resolución de problemas lógicos.',
        'Habilidades para el autoaprendizaje y adaptación a tecnologías emergentes.',
        'Actitud proactiva para el trabajo colaborativo.'
      ]}
      egreso={[
        'Diseñar y desarrollar aplicaciones web, móviles y empresariales robustas.',
        'Administrar y asegurar la infraestructura de redes y servicios en la nube.',
        'Implementar estrategias de ciberseguridad y auditoría informática.',
        'Integrar soluciones inteligentes y análisis de datos para toma de decisiones.'
      ]}
      campo={[
        'Empresas de desarrollo de software',
        'Consultoría tecnológica e informática',
        'Administración de TI en sector público',
        'Emprendimiento de servicios de software',
        'Centros de datos y ciberseguridad',
        'Freelancing de soluciones digitales'
      ]}
      materias={[
        ['Introducción a la Programación', 'Matemáticas Discretas', 'Redes de Computadoras I', 'Arquitectura de Computadoras', 'Inglés I'],
        ['Estructura de Datos', 'Bases de Datos Relacionales', 'Programación Web I', 'Sistemas Operativos', 'Inglés II'],
        ['Programación Orientada a Objetos', 'Bases de Datos Distribuidas', 'Programación Web II', 'Redes de Computadoras II', 'Inglés III']
      ]}
      breadcrumbs={breadcrumbs}
    />
  );
}

// ----------------------------------------------------
// 2. Biotecnología
// ----------------------------------------------------
export function OfertaBiotecnologia() {
  const breadcrumbs = [
    { name: 'Oferta Educativa', path: '#' },
    { name: 'Ingenierías', path: '#' },
    { name: 'Ing. en Biotecnología', path: '/oferta/ingenieria-biotecnologia' }
  ];

  return (
    <CareerTemplate
      title="Ingeniería en Biotecnología"
      level="TSU / Ingeniería"
      imageUrl="https://gnzneytwugcebhaxtzem.supabase.co/storage/v1/object/public/media-publica/carreras/biotecnologia/674339444_983978064158302_7244058262800310456_n.jpg"
      desc="Profesionales dedicados a la aplicación tecnológica de sistemas biológicos y organismos vivos para la creación o modificación de productos en sectores agrícola, ambiental, alimentario e industrial. Desarrolla competencias en cultivo de tejidos, biología molecular, fermentación y control de calidad biológico."
      ingreso={[
        'Interés por la biología, la química, la física y el trabajo de laboratorio.',
        'Curiosidad científica y capacidad de observación minuciosa.',
        'Interés por la conservación ambiental y la sustentabilidad.',
        'Pensamiento analítico y reflexivo.'
      ]}
      egreso={[
        'Desarrollar y optimizar procesos biotecnológicos de fermentación industrial.',
        'Implementar técnicas de biología molecular y mejoramiento genético controlado.',
        'Llevar a cabo análisis clínicos, bromatológicos y microbiológicos.',
        'Diseñar planes de manejo biológico sustentable para el agro.'
      ]}
      campo={[
        'Laboratorios de análisis bromatológicos',
        'Industrias farmacéutica y de vacunas',
        'Centros de investigación agropecuaria',
        'Plantas procesadoras de alimentos',
        'Empresas de biorremediación ambiental',
        'Consultoría biotecnológica certificada'
      ]}
      materias={[
        ['Química General', 'Biología Celular', 'Matemáticas Aplicadas', 'Seguridad en Laboratorios', 'Inglés I'],
        ['Fisiología Vegetal', 'Química Orgánica', 'Microbiología General', 'Estadística Básica', 'Inglés II'],
        ['Bioquímica Aplicada', 'Termodinámica de Procesos', 'Cultivo de Tejidos', 'Biotecnología Ambiental', 'Inglés III']
      ]}
      breadcrumbs={breadcrumbs}
    />
  );
}

// ----------------------------------------------------
// 3. Gastronomía
// ----------------------------------------------------
export function OfertaGastronomia() {
  const breadcrumbs = [
    { name: 'Oferta Educativa', path: '#' },
    { name: 'Licenciaturas', path: '#' },
    { name: 'Lic. en Gastronomía', path: '/oferta/licenciatura-gastronomia' }
  ];

  return (
    <CareerTemplate
      title="Licenciatura en Gastronomía"
      level="TSU / Licenciatura"
      imageUrl="https://gnzneytwugcebhaxtzem.supabase.co/storage/v1/object/public/media-publica/carreras/gastronomia/666410927_975638551658920_1760193756701998190_n.jpg"
      desc="Crea expertos culinarios capaces de diseñar menús de alta cocina nacional e internacional, gestionar establecimientos de alimentos y bebidas bajo normas estrictas de higiene y calidad, y promover el patrimonio culinario con técnicas modernas de innovación gastronómica."
      ingreso={[
        'Interés por el arte culinario, los alimentos y las culturas del mundo.',
        'Habilidades para el trabajo dinámico y de ritmo ágil.',
        'Habilidad de comunicación y trato amable con el cliente.',
        'Creatividad, disciplina y espíritu de servicio.'
      ]}
      egreso={[
        'Dominar técnicas de cocina fría, caliente, repostería y panadería avanzada.',
        'Gestionar costos, finanzas y presupuestos de restaurantes e insumos.',
        'Diseñar menús balanceados con valor nutricional y alta estética visual.',
        'Supervisar protocolos de higiene alimentaria y sanidad internacional.'
      ]}
      campo={[
        'Restaurantes y cadenas hoteleras',
        'Servicios de banquete y catering',
        'Cruceros y resorts turísticos',
        'Consultoría y diseño de menús',
        'Emprendimiento de marcas de comida',
        'Gestión de comedores institucionales'
      ]}
      materias={[
        ['Técnicas Culinarias I', 'Bases de Repostería', 'Sanidad e Higiene Alimentaria', 'Administración Básica', 'Inglés I'],
        ['Técnicas Culinarias II', 'Cocina Mexicana Clásica', 'Panadería Básica', 'Costos y Presupuestos', 'Inglés II'],
        ['Cocina Internacional I', 'Bebidas y Coctelería', 'Conservación de Alimentos', 'Nutrición y Dietética', 'Inglés III']
      ]}
      breadcrumbs={breadcrumbs}
    />
  );
}

// ----------------------------------------------------
// 4. Mercadotecnia
// ----------------------------------------------------
export function OfertaMercadotecnia() {
  const breadcrumbs = [
    { name: 'Oferta Educativa', path: '#' },
    { name: 'Licenciaturas', path: '#' },
    { name: 'Lic. en Mercadotecnia', path: '/oferta/licenciatura-mercadotecnia' }
  ];

  return (
    <CareerTemplate
      title="Licenciatura en Negocios y Mercadotecnia"
      level="TSU / Licenciatura"
      imageUrl="https://gnzneytwugcebhaxtzem.supabase.co/storage/v1/object/public/media-publica/carreras/negocios/600117694_887464807142962_4214036980281132860_n.jpg"
      desc="Prepara estrategas de negocios con dominio del marketing digital, investigación de mercados, branding, comercio electrónico y desarrollo de planes de negocio sustentables. Capaz de posicionar marcas de manera sólida en entornos omnicanal e impulsar ventas corporativas."
      ingreso={[
        'Interés en las ventas, el marketing digital y las dinámicas sociales.',
        'Habilidades de persuasión, comunicación efectiva y oratoria.',
        'Atracción por el análisis numérico, estadísticas y tendencias.',
        'Pensamiento creativo y facilidad para negociar.'
      ]}
      egreso={[
        'Elaborar campañas de publicidad y marketing digital completas.',
        'Diseñar e interpretar estudios cualitativos de investigación de mercados.',
        'Estructurar planes comerciales y de exportación de mercancías.',
        'Gestionar e impulsar el valor de marca (Branding) y experiencia de usuario.'
      ]}
      campo={[
        'Agencias de marketing digital y publicidad',
        'Departamentos de ventas de corporativos',
        'Consultorías de branding y negocios',
        'Dirección de e-commerce y tiendas online',
        'Empresas transnacionales de retail',
        'Emprendimiento comercial y retail'
      ]}
      materias={[
        ['Introducción a la Mercadotecnia', 'Matemáticas Financieras', 'Comportamiento del Consumidor', 'Branding', 'Inglés I'],
        ['Investigación de Mercados I', 'Marketing Digital I', 'Estrategias de Precios', 'Legislación de Negocios', 'Inglés II'],
        ['Investigación de Mercados II', 'Marketing Digital II', 'Canales de Distribución', 'Publicidad y Promoción', 'Inglés III']
      ]}
      breadcrumbs={breadcrumbs}
    />
  );
}
