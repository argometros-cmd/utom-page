import React, { useState } from 'react';
import { SubpageLayout } from '../../components/ui/SubpageLayout';
import { Briefcase, Handshake, ChevronRight, FileCheck } from 'lucide-react';
import { ImageWithFallback } from '../../components/ui/ImageWithFallback';
// @ts-ignore: raw markdown import type declaration may be missing in the project config
import promotoresRaw from '../../../data/PROMOTORES.md?raw';

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
    <section className="relative overflow-hidden rounded-3xl border border-gray-150 dark:border-gray-800 bg-white dark:bg-gray-900 shadow-sm">
      <div className="absolute inset-0 bg-gradient-to-r from-[#0F5132]/5 via-transparent to-[#D4A574]/5 pointer-events-none" />
      <div className="relative p-6 sm:p-8">
        <div className="flex flex-col gap-2 mb-6">
          <h3 className="font-['Montserrat'] font-bold text-xl sm:text-2xl text-[#0F5132] dark:text-[#D4A574]">
            Galería de vinculación
          </h3>
          <p className="max-w-2xl font-['Inter'] text-sm text-gray-600 dark:text-gray-400">
            Empresas e instituciones con las que nuestros alumnos han mantenido procesos de vinculación, estadías y colaboración profesional a lo largo de su formación académica.
          </p>
        </div>

        {images.length > 0 ? (
          <div className="relative">
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
                    className="group relative h-[100px] w-[100px] shrink-0 overflow-hidden rounded-2xl border border-gray-200 dark:border-gray-700 bg-white shadow-sm"
                  >
                    <div className="relative h-[100px] w-[100px] bg-[radial-gradient(circle_at_center,_rgba(15,81,50,0.05),_transparent_70%)]">
                      <ImageWithFallback
                        src={image.src}
                        alt={image.title}
                        className="absolute inset-0 h-full w-full object-contain p-2 transition-transform duration-700 group-hover:scale-[1.03]"
                      />
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </div>
        ) : (
          <div className="flex h-64 items-center justify-center rounded-2xl border border-dashed border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-950/50">
            <span className="font-['Inter'] text-sm text-gray-500 dark:text-gray-400">
              No se encontraron URLs validas en `src/data/PROMOTORES.md`.
            </span>
          </div>
        )}
      </div>
    </section>
  );
}

export default function ServiciosVinculacionPage() {
  const breadcrumbs = [
    { name: 'Servicios y Vinculación', path: '/servicios-vinculacion' }
  ];

  const servicios = [
    {
      icon: Briefcase,
      title: 'Servicio Social y Estadías',
      desc: 'El modelo UTOM culmina cada ciclo académico (TSU e Ingeniería/Licenciatura) con una Estadía Profesional en la que el alumno desarrolla un proyecto industrial real de tiempo completo por un cuatrimestre.',
      pasos: ['Contar con el 100% de materias acreditadas.', 'Elegir proyecto de banco institucional o convenio externo.', 'Asignación de asesor académico y asesor industrial.', 'Desarrollar la memoria de estadías y reporte técnico.']
    },
    {
      icon: Handshake,
      title: 'Convenios con el Sector Productivo',
      desc: 'Mantenemos convenios de vinculación activos con empresas de los sectores tecnológico, biotecnológico, restaurantero y comercial de la región oriente de Michoacán, permitiendo estadías exitosas e inserción laboral.',
      beneficios: ['Liberación ágil de proyectos.', 'Visitas industriales programadas.', 'Talleres de capacitación conjuntos.', 'Bolsa de trabajo exclusiva.']
    }
  ];

  return (
    <SubpageLayout title="Servicios y Vinculación" breadcrumbs={breadcrumbs}>
      <div className="space-y-16">
        {/* Intro */}
        <div className="bg-[#0F5132]/5 dark:bg-[#D4A574]/5 border border-[#0F5132]/10 dark:border-[#D4A574]/10 rounded-3xl p-8 transition-colors duration-300">
          <h2 className="font-['Montserrat'] font-bold text-2xl text-[#0F5132] dark:text-[#D4A574] mb-4">Vinculación con el Entorno</h2>
          <p className="font-['Inter'] text-gray-600 dark:text-gray-300 leading-relaxed">
            La vinculación es un eje estratégico en la UTOM, conectando a nuestros estudiantes y egresados con el sector empresarial y la comunidad. Esto asegura que la formación académica esté alineada con las demandas reales del mercado global e impulsa el desarrollo regional sustentable.
          </p>
        </div>

        <PromotoresCarousel />

        {/* Detalle de Servicios */}
        <div className="space-y-12">
          {servicios.map((s, idx) => {
            const Icon = s.icon;
            return (
              <div key={idx} className="bg-white dark:bg-gray-900 border border-gray-150 dark:border-gray-800 rounded-3xl p-8 shadow-sm grid lg:grid-cols-12 gap-8 items-start transition-colors duration-300">
                <div className="lg:col-span-7 space-y-4">
                  <div className="w-12 h-12 bg-[#0F5132]/10 dark:bg-[#D4A574]/10 rounded-xl flex items-center justify-center text-[#0F5132] dark:text-[#D4A574]">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="font-['Montserrat'] font-bold text-xl text-[#0F5132] dark:text-[#D4A574]">{s.title}</h3>
                  <p className="font-['Inter'] text-sm text-gray-600 dark:text-gray-400 leading-relaxed">{s.desc}</p>
                </div>
                
                <div className="lg:col-span-5 bg-gray-50 dark:bg-gray-955 p-6 rounded-2xl border border-gray-100 dark:border-gray-850">
                  <h4 className="font-['Montserrat'] font-bold text-xs text-[#D4A574] uppercase tracking-wider mb-4 flex items-center gap-1.5">
                    <FileCheck className="w-4 h-4" />
                    <span>{s.pasos ? 'Proceso de Registro' : 'Beneficios Directos'}</span>
                  </h4>
                  <ul className="space-y-3 font-['Inter'] text-xs text-gray-750 dark:text-gray-300">
                    {(s.pasos || s.beneficios || []).map((item, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <ChevronRight className="w-4 h-4 text-[#D4A574] flex-shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </SubpageLayout>
  );
}

export function ServiciosTitulacionPage() {
  const breadcrumbs = [
    { name: 'Servicios y Vinculación', path: '/servicios-vinculacion' },
    { name: 'Titulación', path: '/servicios-vinculacion/titulacion' }
  ];

  const rutasTitulacion = [
    {
      titulo: 'Técnico Superior Universitario',
      subtitulo: 'Cierre del nivel TSU',
      descripcion:
        'Dirigido a estudiantes que concluyen satisfactoriamente el nivel de Técnico Superior Universitario y requieren formalizar su egreso con la documentación institucional correspondiente.',
      puntos: [
        'Acreditar la totalidad de asignaturas del nivel TSU.',
        'Contar con estadía y servicio social liberados.',
        'Presentar expediente completo en Servicios Escolares.',
        'Atender fechas de revisión, firma y validación administrativa.'
      ]
    },
    {
      titulo: 'Ingeniería / Licenciatura',
      subtitulo: 'Conclusión del nivel superior',
      descripcion:
        'Enfocado en egresados que finalizaron la continuidad académica de Ingeniería o Licenciatura y deben completar el proceso institucional para obtener su documentación final.',
      puntos: [
        'Haber concluido todas las asignaturas del nivel de continuidad.',
        'Integrar documentación personal y académica vigente.',
        'Cubrir pagos y formatos del trámite de titulación.',
        'Dar seguimiento al proceso hasta su emisión oficial.'
      ]
    }
  ];

  const procesoGeneral = [
    'Revisión del expediente académico y validación de cumplimiento.',
    'Entrega de documentación y formato de solicitud de titulación.',
    'Asignación de fechas para firma, revisión o acto protocolario según corresponda.',
    'Emisión del trámite institucional ante las instancias educativas aplicables.'
  ];

  return (
    <SubpageLayout title="Titulación" breadcrumbs={breadcrumbs}>
      <div className="space-y-12">
        <div className="bg-gradient-to-br from-[#0F5132] to-[#1a7552] dark:from-gray-900 dark:to-gray-850 rounded-3xl p-8 lg:p-12 text-white shadow-md">
          <h2 className="font-['Montserrat'] font-bold text-3xl text-[#D4A574] mb-4">
            Cierre formal de tu trayectoria académica
          </h2>
          <p className="font-['Inter'] text-white/90 leading-relaxed max-w-3xl">
            La titulación representa la conclusión oficial de tu formación profesional en la UTOM. En esta sección encontrarás una guía general sobre los requisitos, el proceso administrativo y la preparación documental necesaria para concluir tu trámite de manera ordenada.
          </p>
        </div>

        <div className="grid xl:grid-cols-2 gap-8">
          {rutasTitulacion.map((ruta, index) => (
            <section
              key={ruta.titulo}
              className={`rounded-3xl p-8 shadow-sm border transition-colors duration-300 ${
                index === 0
                  ? 'bg-gradient-to-br from-[#0F5132] to-[#1a7552] border-transparent text-white'
                  : 'bg-white dark:bg-gray-900 border-gray-150 dark:border-gray-800'
              }`}
            >
              <span
                className={`inline-flex rounded-full px-3 py-1 text-[11px] font-bold uppercase tracking-[0.24em] mb-4 ${
                  index === 0
                    ? 'bg-white/15 text-[#D4A574]'
                    : 'bg-[#D4A574]/10 text-[#0F5132] dark:text-[#D4A574]'
                }`}
              >
                {ruta.subtitulo}
              </span>
              <h3
                className={`font-['Montserrat'] font-bold text-2xl mb-4 ${
                  index === 0 ? 'text-white' : 'text-[#0F5132] dark:text-[#D4A574]'
                }`}
              >
                {ruta.titulo}
              </h3>
              <p
                className={`font-['Inter'] text-sm leading-relaxed mb-6 ${
                  index === 0 ? 'text-white/90' : 'text-gray-600 dark:text-gray-400'
                }`}
              >
                {ruta.descripcion}
              </p>
              <ul className="space-y-3">
                {ruta.puntos.map((item, itemIndex) => (
                  <li
                    key={itemIndex}
                    className={`flex items-start gap-3 font-['Inter'] text-sm leading-relaxed ${
                      index === 0 ? 'text-white/90' : 'text-gray-600 dark:text-gray-400'
                    }`}
                  >
                    <span
                      className={`mt-1.5 h-2.5 w-2.5 rounded-full shrink-0 ${
                        index === 0 ? 'bg-[#D4A574]' : 'bg-[#D4A574]'
                      }`}
                    />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </section>
          ))}
        </div>

        <section className="bg-white dark:bg-gray-900 border border-gray-150 dark:border-gray-800 rounded-3xl p-8 shadow-sm">
          <h3 className="font-['Montserrat'] font-bold text-xl text-[#0F5132] dark:text-[#D4A574] mb-5">
            Proceso general de titulación
          </h3>
          <ol className="space-y-4">
            {procesoGeneral.map((item, index) => (
              <li key={index} className="flex items-start gap-4">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#0F5132]/10 dark:bg-[#D4A574]/10 font-['Montserrat'] text-sm font-bold text-[#0F5132] dark:text-[#D4A574]">
                  {index + 1}
                </span>
                <p className="font-['Inter'] text-sm text-gray-600 dark:text-gray-400 leading-relaxed pt-1">
                  {item}
                </p>
              </li>
            ))}
          </ol>
        </section>

        <section className="bg-[#0F5132]/5 dark:bg-[#D4A574]/5 border border-[#0F5132]/10 dark:border-[#D4A574]/10 rounded-3xl p-8">
          <h3 className="font-['Montserrat'] font-bold text-xl text-[#0F5132] dark:text-[#D4A574] mb-3">
            Recomendación institucional
          </h3>
          <p className="font-['Inter'] text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
            Antes de iniciar el trámite, verifica directamente con Servicios Escolares los formatos actualizados, costos vigentes y fechas disponibles. Esto evita retrasos por documentación incompleta o cambios administrativos en el proceso.
          </p>
        </section>
      </div>
    </SubpageLayout>
  );
}
