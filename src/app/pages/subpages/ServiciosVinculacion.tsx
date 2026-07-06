import React from 'react';
import { SubpageLayout } from '../../components/ui/SubpageLayout';
import { Briefcase, Handshake, Languages, GraduationCap, ChevronRight, FileCheck } from 'lucide-react';

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
    },
    {
      icon: Languages,
      title: 'Idiomas y Educación Continua',
      desc: 'Ofrecemos programas académicos complementarios en lenguas extranjeras (principalmente inglés) orientados a certificaciones internacionales y cursos de actualización profesional abiertos al público en general.',
      cursos: ['Cursos de Inglés conversacional y técnico.', 'Acreditación TOEFL ITP / Cambridge.', 'Diplomados en Programación y Automatización.', 'Cursos de cocina y sanidad de alimentos.']
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
                    <span>{s.pasos ? 'Proceso de Registro' : s.beneficios ? 'Beneficios Directos' : 'Programas Disponibles'}</span>
                  </h4>
                  <ul className="space-y-3 font-['Inter'] text-xs text-gray-750 dark:text-gray-300">
                    {(s.pasos || s.beneficios || s.cursos || []).map((item, i) => (
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
