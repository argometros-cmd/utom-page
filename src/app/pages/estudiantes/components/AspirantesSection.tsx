import { FileCheck, Calendar, UserCheck, BookOpen, Download, ArrowRight } from 'lucide-react';
import { buildWhatsAppUrl, whatsappMessages } from '../../../data/contact';

const requisitos = [
  {
    icon: FileCheck,
    titulo: 'Documentación',
    items: [
      'Constancia / Certificado de bachillerato',
      'Acta de nacimiento',
      'Comprobante de ficha pagada',
      '1 Fotografía tamaño infantil',
    ],
  },
  {
    icon: UserCheck,
    titulo: 'Perfil del Aspirante',
    items: [
      'Recién egresados de bachillerato',
      'Interés en desarrollar tu máximo potencial',
      'Compromiso con el estudio',
      'Habilidades de trabajo en equipo',
      'Actitud de servicio',
    ],
  },
  {
    icon: Calendar,
    titulo: 'Fechas Importantes',
    items: [
      'Registro: 12 de Enero - 20 de Agosto',
      'Examen de admisión: 21 de Agosto',
      'Publicación de resultados: 25 de Agosto',
      'Inscripción: Agosto 2026',
      'Inicio de clases: Septiembre 2026',
    ],
  },
  {
    icon: BookOpen,
    titulo: 'Proceso de Admisión',
    items: [
      '1. Visítanos o contactanos mediante WhatsApp',
      '2. Pago de ficha',
      '3. Examen de admisión',
      '4. Revisión de resultados',
      '5. Inscripción formal',
    ],
  },
];

export function AspirantesSection() {
  return (
    <section id="aspirantes" className="py-24 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-950 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="font-['Montserrat'] font-bold text-[#0F5132] dark:text-[#D4A574] mb-4 text-4xl lg:text-5xl">
            Información para Aspirantes
          </h2>
          <p className="font-['Inter'] text-gray-600 dark:text-gray-400 max-w-2xl mx-auto text-lg">
            Conoce los requisitos, fechas y el proceso completo para formar parte de la familia UTOM.
          </p>
        </div>

        {/* Info Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {requisitos.map((seccion, index) => {
            const Icon = seccion.icon;
            return (
              <div
                key={index}
                className="bg-white dark:bg-gray-900 rounded-2xl p-8 shadow-sm hover:shadow-lg transition-shadow duration-300 border border-gray-200 dark:border-gray-800"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-14 h-14 rounded-xl bg-[#D4A574] flex items-center justify-center shadow-sm">
                    <Icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="font-['Montserrat'] font-bold text-[#0F5132] dark:text-[#D4A574] text-xl">
                    {seccion.titulo}
                  </h3>
                </div>
                <ul className="space-y-3">
                  {seccion.items.map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 bg-[#D4A574] rounded-full mt-2 flex-shrink-0"></div>
                      <span className="font-['Inter'] text-gray-700 dark:text-gray-300">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>

        {/* CTA Cards */}
        <div className="mt-16 grid gap-8 md:grid-cols-2">
          <div className="bg-gradient-to-r from-[#0F5132] to-[#1a7552] dark:from-gray-900 dark:to-gray-800 rounded-2xl p-10 shadow-lg border border-transparent dark:border-gray-800">
            <div className="text-white">
              <h3 className="font-['Montserrat'] font-bold mb-2 text-2xl">
                ¿Tienes dudas sobre el proceso de admisión?
              </h3>
              <p className="font-['Inter'] text-white/90 mb-6">
                Nuestro equipo está listo para ayudarte en cada paso del camino.
              </p>
              <a
                href={buildWhatsAppUrl(whatsappMessages.admisiones)}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#D4A574] text-white font-['Montserrat'] font-semibold px-8 py-3 rounded-xl hover:bg-[#c19563] transition-colors shadow-md whitespace-nowrap inline-flex items-center justify-center"
              >
                Contactar Admisiones
              </a>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-900 rounded-2xl p-10 shadow-lg border border-gray-200 dark:border-gray-800">
            <div className="flex items-start gap-4 mb-6">
              <div className="w-14 h-14 rounded-xl bg-[#D4A574] flex items-center justify-center shadow-sm shrink-0">
                <Download className="w-7 h-7 text-white" />
              </div>
              <div>
                <h3 className="font-['Montserrat'] font-bold text-[#0F5132] dark:text-[#D4A574] text-2xl mb-2">
                  Descarga la convocatoria
                </h3>
                <p className="font-['Inter'] text-gray-600 dark:text-gray-400">
                  Revisa los detalles del proceso de nuevo ingreso en un solo documento.
                </p>
              </div>
            </div>
            <a
              href="https://gnzneytwugcebhaxtzem.supabase.co/storage/v1/object/public/media-publica/docs/CONVOCATORIA-NUEVO-INGRESO.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#0F5132] dark:bg-[#D4A574] text-white font-['Montserrat'] font-semibold px-8 py-3 rounded-xl hover:bg-[#0d4228] dark:hover:bg-[#c19563] transition-colors shadow-md"
            >
              <span>Descargar convocatoria</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
