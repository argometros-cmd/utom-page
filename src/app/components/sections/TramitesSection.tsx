import { FileText, Download, CheckCircle, FileCheck } from 'lucide-react';

const tramites = [
  {
    categoria: 'Documentos Académicos',
    items: [
      { nombre: 'Solicitud de Constancia de Estudios', formato: 'PDF' },
      { nombre: 'Historial Académico', formato: 'PDF' },
      { nombre: 'Carta de Recomendación', formato: 'DOCX' },
    ],
  },
  {
    categoria: 'Servicios Escolares',
    items: [
      { nombre: 'Formato de Baja Temporal', formato: 'PDF' },
      { nombre: 'Solicitud de Cambio de Carrera', formato: 'PDF' },
      { nombre: 'Equivalencia de Estudios', formato: 'PDF' },
    ],
  },
  {
    categoria: 'Trámites Administrativos',
    items: [
      { nombre: 'Solicitud de Servicio Social', formato: 'PDF' },
      { nombre: 'Registro de Prácticas Profesionales', formato: 'PDF' },
      { nombre: 'Formato de Titulación', formato: 'DOCX' },
    ],
  },
];

const pasos = [
  {
    numero: 1,
    titulo: 'Descarga el formato',
    descripcion: 'Selecciona y descarga el documento que necesitas.',
    icon: Download,
  },
  {
    numero: 2,
    titulo: 'Completa la información',
    descripcion: 'Llena todos los campos requeridos del formato.',
    icon: FileText,
  },
  {
    numero: 3,
    titulo: 'Reúne documentación',
    descripcion: 'Adjunta los documentos de soporte necesarios.',
    icon: FileCheck,
  },
  {
    numero: 4,
    titulo: 'Entrega en Servicios Escolares',
    descripcion: 'Presenta tu solicitud en la ventanilla correspondiente.',
    icon: CheckCircle,
  },
];

export function TramitesSection() {
  return (
    <section id="tramites" className="py-24 bg-white dark:bg-gray-950 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="font-['Montserrat'] font-bold text-[#0F5132] dark:text-[#D4A574] mb-4 text-4xl lg:text-5xl">
            Centro de Trámites y Formatos
          </h2>
          <p className="font-['Inter'] text-gray-600 dark:text-gray-400 max-w-2xl mx-auto text-lg">
            Descarga los formatos que necesitas y realiza tus trámites de manera rápida y eficiente.
          </p>
        </div>

        {/* Process Steps */}
        <div className="grid md:grid-cols-4 gap-6 mb-16">
          {pasos.map((paso) => {
            const Icon = paso.icon;
            return (
              <div key={paso.numero} className="relative">
                <div className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-2xl p-6 h-full shadow-sm hover:shadow-md transition-shadow">
                  <div className="w-14 h-14 bg-[#D4A574] rounded-xl flex items-center justify-center mb-4 shadow-sm">
                    <Icon className="w-7 h-7 text-white" />
                  </div>
                  <div className="absolute -top-3 -right-2 w-10 h-10 bg-[#0F5132] dark:bg-[#D4A574] rounded-full flex items-center justify-center shadow-md">
                    <span className="font-['Montserrat'] font-bold text-white dark:text-[#0F5132]">{paso.numero}</span>
                  </div>
                  <h3 className="font-['Montserrat'] font-semibold text-[#0F5132] dark:text-[#D4A574] mb-2">
                    {paso.titulo}
                  </h3>
                  <p className="font-['Inter'] text-sm text-gray-600 dark:text-gray-400">
                    {paso.descripcion}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Documents Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {tramites.map((categoria, index) => (
            <div key={index} className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow">
              <div className="bg-[#0F5132] dark:bg-gray-950 p-5">
                <h3 className="font-['Montserrat'] font-semibold text-white">
                  {categoria.categoria}
                </h3>
              </div>
              <div className="p-6">
                <ul className="space-y-4">
                  {categoria.items.map((item, i) => (
                    <li key={i} className="flex items-start justify-between gap-3 group">
                      <div className="flex items-start gap-3 flex-1">
                        <FileText className="w-5 h-5 text-[#D4A574] flex-shrink-0 mt-0.5" />
                        <span className="font-['Inter'] text-sm text-gray-700 dark:text-gray-300 group-hover:text-[#0F5132] dark:group-hover:text-[#D4A574] transition-colors">
                          {item.nombre}
                        </span>
                      </div>
                      <button className="flex items-center gap-1 text-[#D4A574] hover:text-[#c19563] transition-colors flex-shrink-0">
                        <Download className="w-4 h-4" />
                        <span className="font-['Inter'] text-xs font-medium">{item.formato}</span>
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-16 bg-gradient-to-r from-gray-50 to-white dark:from-gray-900 dark:to-gray-950 border border-gray-200 dark:border-gray-800 rounded-2xl p-8 lg:p-10 flex flex-col md:flex-row items-center justify-between gap-6 shadow-sm transition-colors duration-300">
          <div>
            <h3 className="font-['Montserrat'] font-semibold text-[#0F5132] dark:text-[#D4A574] mb-2 text-xl">
              ¿Necesitas ayuda con tus trámites?
            </h3>
            <p className="font-['Inter'] text-gray-600 dark:text-gray-400">
              Nuestro equipo de Servicios Escolares está disponible para asistirte.
            </p>
          </div>
          <button className="bg-[#D4A574] text-white font-['Montserrat'] font-semibold px-8 py-3 rounded-xl hover:bg-[#c19563] transition-all shadow-sm hover:shadow-md whitespace-nowrap">
            Contactar Soporte
          </button>
        </div>
      </div>
    </section>
  );
}
