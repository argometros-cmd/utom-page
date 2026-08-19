import React from 'react';
import { SubpageLayout } from '../../components/ui/SubpageLayout';
import { BookOpen, Compass, Briefcase, Award, Download } from 'lucide-react';
import { ImageWithFallback } from '../../components/ui/ImageWithFallback';
import studyPlanLinksRaw from './data/map_curriculares.md?raw';
import tiGalleryRaw from './data/galleries/TI.md?raw';
import biotecnologiaGalleryRaw from './data/galleries/BIOTECNOLOGIA.md?raw';
import gastronomiaGalleryRaw from './data/galleries/GASTRONOMIA.md?raw';
import negociosGalleryRaw from './data/galleries/NEGOCIOS.md?raw';

interface StudyPlanCard {
  id: string;
  title: string;
  pdfs?: StudyPlanPdf[];
}

interface StudyPlanPdf {
  label: string;
  url: string;
}

interface CareerPageProps {
  title: string;
  level: string;
  imageUrl: string;
  desc: string;
  ingreso: string[];
  egreso: string[];
  campo: string[];
  studyPlanCards: StudyPlanCard[];
  galleryImages: string[];
  breadcrumbs: { name: string; path: string }[];
}

function parseGalleryMarkdown(content: string) {
  return content
    .split('\n')
    .map((line) => line.trim())
    .filter((line) => line.startsWith('-'))
    .map((line) => line.replace(/^-+\s*/, '').trim())
    .filter(Boolean);
}

function formatPdfLabel(url: string) {
  const fileName = url.split('/').pop() ?? url;
  const decoded = decodeURIComponent(fileName).replace(/\.pdf$/i, '');
  return decoded.replace(/[_-]+/g, ' ').trim();
}

function parseStudyPlanLinks(content: string) {
  const cardsByCareer: Record<string, StudyPlanCard[]> = {
    ti: [
      { id: 'ti-cuatrimestre-1', title: 'Desarrollo de software multiplataforma', pdfs: [] },
      { id: 'ti-cuatrimestre-2', title: 'Entornos virtuales y negocios digitales', pdfs: [] },
      { id: 'ti-cuatrimestre-3', title: 'Infraestructura de redes digitales', pdfs: [] }
    ],
    biotecnologia: [{ id: 'biotec-plan-estudios', title: 'Plan de estudios', pdfs: [] }],
    gastronomia: [{ id: 'gastro-plan-estudios', title: 'Plan de estudios', pdfs: [] }],
    negocios: [{ id: 'negocios-plan-estudios', title: 'Plan de estudios', pdfs: [] }]
  };

  const tiTitleMap: Record<string, string> = {
    'desarrollo de software multiplataforma': 'ti-cuatrimestre-1',
    'entornos virtuales y negocios digitales': 'ti-cuatrimestre-2',
    'infraestructura de redes digitales': 'ti-cuatrimestre-3'
  };

  let currentCareer: keyof typeof cardsByCareer | null = null;
  let currentTiCardId: string | null = null;

  for (const rawLine of content.split('\n')) {
    const line = rawLine.trim();
    if (!line) continue;

    if (line.startsWith('- ')) {
      const careerName = line.slice(2).trim().toLowerCase();

      if (careerName === 'ti') {
        currentCareer = 'ti';
        currentTiCardId = null;
        continue;
      }

      if (careerName === 'gastronomia') {
        currentCareer = 'gastronomia';
        currentTiCardId = null;
        continue;
      }

      if (careerName === 'biotecnologia') {
        currentCareer = 'biotecnologia';
        currentTiCardId = null;
        continue;
      }

      if (careerName === 'mercadotecnia') {
        currentCareer = 'negocios';
        currentTiCardId = null;
      }
      continue;
    }

    if (line.startsWith('-- ')) {
      const value = line.slice(3).trim();

      if (currentCareer === 'ti' && !value.startsWith('http')) {
        currentTiCardId = tiTitleMap[value.toLowerCase()] ?? null;
        continue;
      }

      if (value.startsWith('http') && currentCareer && currentCareer !== 'ti') {
        cardsByCareer[currentCareer][0].pdfs ??= [];
        cardsByCareer[currentCareer][0].pdfs?.push({
          label: formatPdfLabel(value),
          url: value
        });
      }
      continue;
    }

    if (line.startsWith('--- ')) {
      const value = line.slice(4).trim();
      if (currentCareer === 'ti' && currentTiCardId && value.startsWith('http')) {
        const targetCard = cardsByCareer.ti.find((card) => card.id === currentTiCardId);
        targetCard?.pdfs?.push({
          label: formatPdfLabel(value),
          url: value
        });
      }
    }
  }

  return cardsByCareer;
}

const careerGalleries = {
  ti: parseGalleryMarkdown(tiGalleryRaw),
  biotecnologia: parseGalleryMarkdown(biotecnologiaGalleryRaw),
  gastronomia: parseGalleryMarkdown(gastronomiaGalleryRaw),
  negocios: parseGalleryMarkdown(negociosGalleryRaw),
};

const careerStudyPlanCards = parseStudyPlanLinks(studyPlanLinksRaw);

function StudyPlanSection({ cards }: { cards: StudyPlanCard[] }) {
  const cardWidthClass =
    cards.length === 1
      ? 'w-full max-w-md'
      : cards.length === 2
        ? 'w-full md:w-[calc(50%-0.75rem)] max-w-md'
        : 'w-full md:w-[calc(50%-0.75rem)] xl:w-[calc(33.333%-1rem)]';

  return (
    <div className="space-y-6">
      <h3 className="font-['Montserrat'] font-bold text-2xl text-[#0F5132] dark:text-[#D4A574] text-center">
        Estructura del Plan de Estudios
      </h3>
      <div className="flex flex-wrap justify-center gap-6">
        {cards.map((card) => (
          <div key={card.id} className={`${cardWidthClass} bg-white dark:bg-gray-900 border border-gray-150 dark:border-gray-800 rounded-2xl p-6 shadow-sm`}>
            <h4 className="font-['Montserrat'] font-semibold text-[#0F5132] dark:text-[#D4A574] border-b border-gray-50 dark:border-gray-850 pb-2 mb-4">
              {card.title}
            </h4>
            {card.pdfs?.length ? (
              <div className="pt-1">
                <p className="font-['Montserrat'] text-sm font-semibold text-[#0F5132] dark:text-[#D4A574] mb-3">
                  Archivos PDF
                </p>
                <div className="space-y-2">
                  {card.pdfs.map((pdf) => (
                    <a
                      key={`${card.id}-${pdf.url}`}
                      href={pdf.url}
                      download
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center justify-between gap-3 text-xs font-['Inter'] text-[#D4A574] hover:underline"
                    >
                      <span>{pdf.label}</span>
                      <Download className="w-3.5 h-3.5 flex-shrink-0 text-[#D4A574]" />
                    </a>
                  ))}
                </div>
              </div>
            ) : null}
          </div>
        ))}
      </div>
    </div>
  );
}

function CareerTemplate({ title, level, imageUrl, desc, ingreso, egreso, campo, studyPlanCards, galleryImages, breadcrumbs }: CareerPageProps) {
  return (
    <SubpageLayout title={title} breadcrumbs={breadcrumbs}>
      <div className="space-y-16">
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

        <StudyPlanSection cards={studyPlanCards} />

        <div className="space-y-6">
          <div className="text-center">
            <h3 className="font-['Montserrat'] font-bold text-2xl text-[#0F5132] dark:text-[#D4A574]">
              Galería de la carrera
            </h3>
            <p className="mt-2 font-['Inter'] text-sm text-gray-600 dark:text-gray-400">
              Espacios, actividades y momentos que forman parte de la experiencia académica en UTOM.
            </p>
          </div>
          <div className="columns-1 gap-4 space-y-4 md:columns-2 xl:columns-3">
            {galleryImages.map((image, index) => (
              <div
                key={`${title}-gallery-${index}`}
                className="break-inside-avoid overflow-hidden rounded-[1.75rem] border border-gray-100 bg-gray-100 shadow-sm dark:border-gray-800 dark:bg-gray-900"
              >
                <ImageWithFallback
                  src={image}
                  alt={`${title} galería ${index + 1}`}
                  className="h-auto w-full object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </SubpageLayout>
  );
}

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
      studyPlanCards={careerStudyPlanCards.ti}
      galleryImages={careerGalleries.ti}
      breadcrumbs={breadcrumbs}
    />
  );
}

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
      studyPlanCards={careerStudyPlanCards.biotecnologia}
      galleryImages={careerGalleries.biotecnologia}
      breadcrumbs={breadcrumbs}
    />
  );
}

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
      studyPlanCards={careerStudyPlanCards.gastronomia}
      galleryImages={careerGalleries.gastronomia}
      breadcrumbs={breadcrumbs}
    />
  );
}

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
      studyPlanCards={careerStudyPlanCards.negocios}
      galleryImages={careerGalleries.negocios}
      breadcrumbs={breadcrumbs}
    />
  );
}
