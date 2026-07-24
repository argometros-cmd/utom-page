import React from 'react';
import { SubpageLayout } from '../../components/ui/SubpageLayout';
import { AspirantesSection } from '../../components/sections/AspirantesSection';
import { Lightbulb, Clock, Compass } from 'lucide-react';

// ----------------------------------------------------
// 1. Aspirantes Page
// ----------------------------------------------------
export function EstudiantesAspirantes() {
  const breadcrumbs = [
    { name: 'Estudiantes', path: '#' },
    { name: 'Aspirantes', path: '/estudiantes/aspirantes' }
  ];

  return (
    <SubpageLayout title="Admisiones y Registro" breadcrumbs={breadcrumbs}>
      <div className="space-y-12">
        <div className="bg-[#0F5132]/5 dark:bg-[#D4A574]/5 border border-[#0F5132]/10 dark:border-[#D4A574]/10 rounded-3xl p-8 transition-colors duration-300">
          <h2 className="font-['Montserrat'] font-bold text-2xl text-[#0F5132] dark:text-[#D4A574] mb-4">¡Forma parte de la UTOM!</h2>
          <p className="font-['Inter'] text-gray-600 dark:text-gray-300 leading-relaxed">
            Te invitamos a registrarte en línea y comenzar tu camino académico. Nuestro proceso está diseñado para identificar tu potencial y brindarte las herramientas de aprendizaje práctico que el sector laboral demanda. Explora a continuación los requisitos detallados y las fechas límite.
          </p>
        </div>
        
        {/* Renders existing styled AspirantesSection inside the layout page */}
        <div className="-mx-4 sm:-mx-6 lg:-mx-8">
          <AspirantesSection />
        </div>
      </div>
    </SubpageLayout>
  );
}

// ----------------------------------------------------
// 2. Modelo Educativo Page
// ----------------------------------------------------
export function EstudiantesModelo() {
  const breadcrumbs = [
    { name: 'Estudiantes', path: '#' },
    { name: 'Modelo Educativo', path: '/estudiantes/modelo-educativo' }
  ];

  return (
    <SubpageLayout title="Modelo Educativo UT" breadcrumbs={breadcrumbs}>
      <div className="space-y-12">
        {/* Banner Explicativo */}
        <div className="bg-gradient-to-br from-[#0F5132] to-[#1a7552] dark:from-gray-900 dark:to-gray-850 text-white rounded-3xl p-8 lg:p-12 shadow-md relative overflow-hidden">
          <h2 className="font-['Montserrat'] font-bold text-3xl mb-4 text-[#D4A574]">70% Práctico y 30% Teórico</h2>
          <p className="font-['Inter'] text-lg text-white/90 leading-relaxed max-w-3xl">
            Nuestra estructura de enseñanza fomenta que el estudiante adquiera habilidades aplicadas en laboratorios, talleres y simulaciones reales, reduciendo las clases teóricas expositivas y potenciando el "saber hacer".
          </p>
        </div>

        {/* Pilares del modelo */}
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white dark:bg-gray-900 p-8 rounded-3xl border border-gray-150 dark:border-gray-800 shadow-sm transition-colors duration-300">
            <div className="w-12 h-12 bg-[#D4A574]/10 rounded-xl flex items-center justify-center text-[#D4A574] mb-6">
              <Lightbulb className="w-6 h-6" />
            </div>
            <h3 className="font-['Montserrat'] font-bold text-xl text-[#0F5132] dark:text-[#D4A574] mb-3">Técnico Superior Universitario</h3>
            <p className="font-['Inter'] text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
              En los primeros dos años (seis cuatrimestres), obtienes el título de TSU, capacitándote para insertarte inmediatamente en la industria técnica especializada.
            </p>
          </div>

          <div className="bg-white dark:bg-gray-900 p-8 rounded-3xl border border-gray-150 dark:border-gray-800 shadow-sm transition-colors duration-300">
            <div className="w-12 h-12 bg-[#D4A574]/10 rounded-xl flex items-center justify-center text-[#D4A574] mb-6">
              <Clock className="w-6 h-6" />
            </div>
            <h3 className="font-['Montserrat'] font-bold text-xl text-[#0F5132] dark:text-[#D4A574] mb-3">Ingenierías y Licenciaturas</h3>
            <p className="font-['Inter'] text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
              Tras graduarte como TSU, continúas tus estudios por un año y ocho meses adicionales (cinco cuatrimestres) para obtener el título de Ingeniería o Licenciatura.
            </p>
          </div>

          <div className="bg-white dark:bg-gray-900 p-8 rounded-3xl border border-gray-150 dark:border-gray-800 shadow-sm transition-colors duration-300">
            <div className="w-12 h-12 bg-[#D4A574]/10 rounded-xl flex items-center justify-center text-[#D4A574] mb-6">
              <Compass className="w-6 h-6" />
            </div>
            <h3 className="font-['Montserrat'] font-bold text-xl text-[#0F5132] dark:text-[#D4A574] mb-3">Estadías Profesionales</h3>
            <p className="font-['Inter'] text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
              El último cuatrimestre de cada nivel se realiza de manera completa en una empresa o institución del sector productivo, desarrollando un proyecto real tutoreado.
            </p>
          </div>
        </div>
      </div>
    </SubpageLayout>
  );
}
