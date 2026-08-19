import { useState } from 'react';
import { Briefcase, ChevronRight, FileCheck, Handshake } from 'lucide-react';
import { ImageWithFallback } from '../../components/ui/ImageWithFallback';
import { SubpageLayout } from '../../components/ui/SubpageLayout';
// @ts-ignore: raw markdown import type declaration may be missing in the project config
import promotoresRaw from './data/PROMOTORES.md?raw';

type PromotorItem = {
  title: string;
  src: string;
};

function parsePromotoresMarkdown(markdown: string): PromotorItem[] {
  return markdown
    .split('\n')
    .map((line) => line.trim())
    .filter((line) => line.startsWith('- '))
    .map((line) => line.slice(2).trim())
    .map((line) => {
      const [maybeTitle, maybeUrl] = line.split('|').map((part) => part.trim());
      const src = maybeUrl ?? maybeTitle;
      const title = maybeUrl
        ? maybeTitle
        : maybeTitle
            .split('/')
            .pop()
            ?.replace(/\.[^.]+$/, '')
            .replace(/[-_]+/g, ' ') ?? 'Promotor';

      return { title, src };
    })
    .filter((item) => /^https?:\/\//i.test(item.src));
}

function PromotoresCarousel() {
  const images = parsePromotoresMarkdown(promotoresRaw);
  const loopImages = images.length > 0 ? [...images, ...images] : [];
  const [isPaused, setIsPaused] = useState(false);

  return (
    <section className="relative overflow-hidden rounded-3xl border border-gray-150 bg-white shadow-sm dark:border-gray-800 dark:bg-gray-900">
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-[#0F5132]/5 via-transparent to-[#D4A574]/5" />
      <div className="relative p-6 sm:p-8">
        <div className="mb-6 flex flex-col gap-2">
          <h3 className="font-['Montserrat'] text-xl font-bold text-[#0F5132] dark:text-[#D4A574] sm:text-2xl">
            Galería de vinculación
          </h3>
          <p className="max-w-2xl font-['Inter'] text-sm text-gray-600 dark:text-gray-400">
            Empresas e instituciones con las que nuestros alumnos han mantenido procesos de vinculación, estadías y colaboración profesional a lo largo de su formación académica.
          </p>
        </div>

        {images.length > 0 ? (
          <div className="overflow-hidden">
            <div
              className="flex w-max gap-2 sm:gap-3"
              style={{
                animation: 'marquee 60s linear infinite',
                animationPlayState: isPaused ? 'paused' : 'running',
              }}
              onMouseEnter={() => setIsPaused(true)}
              onMouseLeave={() => setIsPaused(false)}
            >
              {loopImages.map((image, index) => (
                <article
                  key={`${image.src}-${index}`}
                  className="group relative h-[100px] w-[100px] shrink-0 overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm dark:border-gray-700"
                >
                  <ImageWithFallback
                    src={image.src}
                    alt={image.title}
                    className="absolute inset-0 h-full w-full object-contain p-2 transition-transform duration-700 group-hover:scale-[1.03]"
                  />
                </article>
              ))}
            </div>
          </div>
        ) : (
          <div className="flex h-64 items-center justify-center rounded-2xl border border-dashed border-gray-200 bg-gray-50 dark:border-gray-800 dark:bg-gray-950/50">
            <span className="font-['Inter'] text-sm text-gray-500 dark:text-gray-400">
              No se encontraron promotores para mostrar.
            </span>
          </div>
        )}
      </div>
    </section>
  );
}

const vinculacionServices = [
  {
    icon: Briefcase,
    title: 'Servicio Social y Estadías',
    description: 'El modelo UTOM culmina cada ciclo académico con una Estadía Profesional en la que el alumno desarrolla un proyecto industrial real de tiempo completo por un cuatrimestre.',
    detailTitle: 'Proceso de registro',
    details: [
      'Contar con el 100% de materias acreditadas.',
      'Elegir un proyecto del banco institucional o de un convenio externo.',
      'Recibir la asignación de asesor académico y asesor industrial.',
      'Desarrollar la memoria de estadías y el reporte técnico.',
    ],
  },
  {
    icon: Handshake,
    title: 'Convenios con el Sector Productivo',
    description: 'Mantenemos convenios activos con empresas de los sectores tecnológico, biotecnológico, restaurantero y comercial de la región oriente de Michoacán.',
    detailTitle: 'Beneficios directos',
    details: [
      'Liberación ágil de proyectos.',
      'Visitas industriales programadas.',
      'Talleres de capacitación conjuntos.',
      'Bolsa de trabajo exclusiva.',
    ],
  },
];

export default function VinculacionPage() {
  return (
    <SubpageLayout
      title="Vinculación"
      breadcrumbs={[{ name: 'Vinculación', path: '/vinculacion' }]}
    >
      <div className="space-y-16">
        <div className="rounded-3xl border border-[#0F5132]/10 bg-[#0F5132]/5 p-8 transition-colors dark:border-[#D4A574]/10 dark:bg-[#D4A574]/5">
          <h2 className="mb-4 font-['Montserrat'] text-2xl font-bold text-[#0F5132] dark:text-[#D4A574]">
            Vinculación con el Entorno
          </h2>
          <p className="font-['Inter'] leading-relaxed text-gray-600 dark:text-gray-300">
            La vinculación es un eje estratégico en la UTOM: conecta a nuestros estudiantes y egresados con el sector empresarial y la comunidad, alinea la formación académica con las demandas del mercado e impulsa el desarrollo regional sustentable.
          </p>
        </div>

        <PromotoresCarousel />

        <div className="space-y-12">
          {vinculacionServices.map((service) => {
            const Icon = service.icon;

            return (
              <article
                key={service.title}
                className="grid items-start gap-8 rounded-3xl border border-gray-150 bg-white p-8 shadow-sm transition-colors dark:border-gray-800 dark:bg-gray-900 lg:grid-cols-12"
              >
                <div className="space-y-4 lg:col-span-7">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#0F5132]/10 text-[#0F5132] dark:bg-[#D4A574]/10 dark:text-[#D4A574]">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="font-['Montserrat'] text-xl font-bold text-[#0F5132] dark:text-[#D4A574]">
                    {service.title}
                  </h3>
                  <p className="font-['Inter'] text-sm leading-relaxed text-gray-600 dark:text-gray-400">
                    {service.description}
                  </p>
                </div>

                <div className="rounded-2xl border border-gray-100 bg-gray-50 p-6 dark:border-gray-800 dark:bg-gray-950 lg:col-span-5">
                  <h4 className="mb-4 flex items-center gap-1.5 font-['Montserrat'] text-xs font-bold uppercase tracking-wider text-[#D4A574]">
                    <FileCheck className="h-4 w-4" />
                    {service.detailTitle}
                  </h4>
                  <ul className="space-y-3 font-['Inter'] text-xs text-gray-700 dark:text-gray-300">
                    {service.details.map((detail) => (
                      <li key={detail} className="flex items-start gap-2">
                        <ChevronRight className="mt-0.5 h-4 w-4 shrink-0 text-[#D4A574]" />
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </SubpageLayout>
  );
}
