import React from 'react';
import { SubpageLayout } from '../../components/ui/SubpageLayout';
import { BookOpen, FolderOpen, Mail, GraduationCap, Award, BrainCircuit } from 'lucide-react';

export default function DocentesPage() {
  const breadcrumbs = [
    { name: 'Docentes', path: '/docentes' }
  ];

  const recursos = [
    { icon: FolderOpen, title: 'Portal Docente', desc: 'Acceso directo a captura de calificaciones, asistencias y planeación académica cuatrimestral.', action: 'Ingresar al Portal' },
    { icon: Mail, title: 'Correo Institucional', desc: 'Plataforma oficial de comunicación de la universidad para el claustro docente y administrativo.', action: 'Ir a Correo' },
    { icon: BookOpen, title: 'Biblioteca Virtual', desc: 'Bases de datos científicas, revistas digitales y libros de texto especializados para apoyo pedagógico.', action: 'Consultar Biblioteca' },
  ];

  const investigaciones = [
    { area: 'Tecnologías y Sustentabilidad', depto: 'Ing. en Tecnologías de la Información', lider: 'Dr. Alejandro Guzmán Ramos', enfoque: 'Sistemas distribuidos aplicados al agro de Michoacán.' },
    { area: 'Biotecnología Aplicada', depto: 'Ing. en Biotecnología', lider: 'Dra. María Elena Sánchez', enfoque: 'Desarrollo de biofertilizantes orgánicos para cultivos regionales.' }
  ];

  return (
    <SubpageLayout title="Docentes" breadcrumbs={breadcrumbs}>
      <div className="space-y-16">
        {/* Intro */}
        <div className="bg-[#0F5132]/5 dark:bg-[#D4A574]/5 border border-[#0F5132]/10 dark:border-[#D4A574]/10 rounded-3xl p-8 transition-colors duration-300">
          <h2 className="font-['Montserrat'] font-bold text-2xl text-[#0F5132] dark:text-[#D4A574] mb-4">Portal e Información para Docentes</h2>
          <p className="font-['Inter'] text-gray-600 dark:text-gray-300 leading-relaxed">
            La Universidad Tecnológica del Oriente de Michoacán reconoce la labor académica de su personal docente. En esta sección se agrupan los recursos digitales clave para el desarrollo de sus asignaturas, así como la información sobre capacitación docente, investigación y cuerpos académicos activos en la institución.
          </p>
        </div>

        {/* Recursos Grid */}
        <div className="space-y-6">
          <h3 className="font-['Montserrat'] font-bold text-2xl text-[#0F5132] dark:text-[#D4A574] text-center">Recursos Académicos</h3>
          <div className="grid md:grid-cols-3 gap-8">
            {recursos.map((r, i) => {
              const Icon = r.icon;
              return (
                <div key={i} className="bg-white dark:bg-gray-900 border border-gray-150 dark:border-gray-800 rounded-3xl p-8 shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow">
                  <div>
                    <div className="w-12 h-12 bg-[#D4A574]/10 rounded-xl flex items-center justify-center text-[#D4A574] mb-6">
                      <Icon className="w-6 h-6" />
                    </div>
                    <h4 className="font-['Montserrat'] font-bold text-xl text-[#0F5132] dark:text-[#D4A574] mb-3">{r.title}</h4>
                    <p className="font-['Inter'] text-sm text-gray-600 dark:text-gray-400 leading-relaxed mb-6">{r.desc}</p>
                  </div>
                  <button className="w-full bg-[#0F5132] dark:bg-[#D4A574] text-white dark:text-[#0F5132] font-semibold py-3 rounded-xl hover:bg-[#0d4228] dark:hover:bg-[#c19563] transition-colors text-sm shadow-sm">
                    {r.action}
                  </button>
                </div>
              );
            })}
          </div>
        </div>

        {/* Cuerpos Académicos */}
        <div className="space-y-6">
          <div className="text-center">
            <h3 className="font-['Montserrat'] font-bold text-2xl text-[#0F5132] dark:text-[#D4A574]">Cuerpos Académicos e Investigación</h3>
            <p className="font-['Inter'] text-sm text-gray-600 dark:text-gray-400 mt-2 max-w-xl mx-auto">
              Grupos colegiados de investigación dedicados al desarrollo tecnológico y la vinculación con problemáticas del sector productivo.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {investigaciones.map((inv, idx) => (
              <div key={idx} className="bg-gray-50 dark:bg-gray-900 p-8 rounded-3xl border border-gray-100 dark:border-gray-800 transition-colors duration-300">
                <div className="flex items-center gap-3 mb-4">
                  <BrainCircuit className="w-6 h-6 text-[#D4A574]" />
                  <h4 className="font-['Montserrat'] font-bold text-xl text-[#0F5132] dark:text-[#D4A574]">{inv.area}</h4>
                </div>
                <p className="font-['Inter'] text-xs font-semibold text-[#D4A574] mb-1">{inv.depto}</p>
                <p className="font-['Inter'] text-sm text-gray-800 dark:text-gray-200 font-medium mb-3">Líder: {inv.lider}</p>
                <p className="font-['Inter'] text-sm text-gray-600 dark:text-gray-400 leading-relaxed">{inv.enfocus}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Capacitación */}
        <div className="bg-gradient-to-br from-[#0F5132] to-[#1a7552] dark:from-gray-900 dark:to-gray-850 text-white rounded-3xl p-8 lg:p-12 shadow-md relative overflow-hidden transition-colors duration-300 flex flex-col lg:flex-row items-center gap-8">
          <div className="w-20 h-20 bg-white/10 backdrop-blur-sm rounded-2xl flex items-center justify-center flex-shrink-0 text-[#D4A574]">
            <Award className="w-10 h-10" />
          </div>
          <div>
            <h3 className="font-['Montserrat'] font-bold text-2xl mb-4 text-[#D4A574]">Capacitación y Formación Continua</h3>
            <p className="font-['Inter'] text-lg text-white/90 leading-relaxed max-w-3xl">
              Anualmente implementamos talleres de planeación didáctica, desarrollo humano, ciberseguridad educativa e idiomas, impulsando la acreditación docente y la mejora continua del proceso enseñanza-aprendizaje.
            </p>
          </div>
        </div>
      </div>
    </SubpageLayout>
  );
}
