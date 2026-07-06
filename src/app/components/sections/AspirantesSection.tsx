import { FileCheck, Calendar, UserCheck, BookOpen } from 'lucide-react';

const requisitos = [
  {
    icon: FileCheck,
    titulo: 'Documentación',
    items: [
      'Certificado de bachillerato',
      'Acta de nacimiento',
      'CURP',
      'Comprobante de domicilio',
      '6 fotografías tamaño infantil',
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
      'Registro: Mayo - Junio 2026',
      'Examen de admisión: Julio 2026',
      'Publicación de resultados: Julio 2026',
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

        {/* CTA Box */}
        <div className="mt-16 bg-gradient-to-r from-[#0F5132] to-[#1a7552] dark:from-gray-900 dark:to-gray-800 rounded-2xl p-10 shadow-lg border border-transparent dark:border-gray-800">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="text-white">
              <h3 className="font-['Montserrat'] font-bold mb-2 text-2xl">
                ¿Tienes dudas sobre el proceso de admisión?
              </h3>
              <p className="font-['Inter'] text-white/90">
                Nuestro equipo está listo para ayudarte en cada paso del camino.
              </p>
            </div>
            <button className="bg-[#D4A574] text-white font-['Montserrat'] font-semibold px-8 py-3 rounded-xl hover:bg-[#c19563] transition-colors shadow-md whitespace-nowrap">
              Contactar Admisiones
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
