import React from 'react';
import { SubpageLayout } from '../../components/ui/SubpageLayout';
import { AspirantesSection } from '../../components/sections/AspirantesSection';
import { Briefcase, FileCheck2, GraduationCap, CheckCircle, Lightbulb, Clock, Compass } from 'lucide-react';

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
// 2. Egresados Page
// ----------------------------------------------------
export function EstudiantesEgresados() {
  const breadcrumbs = [
    { name: 'Estudiantes', path: '#' },
    { name: 'Egresados', path: '/estudiantes/egresados' }
  ];

  const vacantes = [
    { puesto: 'Desarrollador Web Junior', empresa: 'SoftDev Michoacán', ub: 'Maravatío', sal: 'Competitivo' },
    { puesto: 'Técnico en Control de Calidad', empresa: 'BioLab Innovación', ub: 'Zitácuaro', sal: 'A convenir' },
    { puesto: 'Supervisor de Alimentos y Bebidas', empresa: 'Hotel Plaza Imperial', ub: 'Morelia', sal: 'Atractivo' },
  ];

  return (
    <SubpageLayout title="Egresados y Bolsa de Trabajo" breadcrumbs={breadcrumbs}>
      <div className="space-y-12">
        {/* Intro */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="font-['Montserrat'] font-bold text-2xl lg:text-3xl text-[#0F5132] dark:text-[#D4A574]">
              Seguimiento a Egresados
            </h2>
            <p className="font-['Inter'] text-gray-600 dark:text-gray-300 leading-relaxed">
              En la UTOM nos enorgullece el éxito de nuestros graduados. Mantenemos una estrecha relación con nuestra comunidad de egresados para apoyarlos en su crecimiento profesional y recopilar información que nos ayude a seguir mejorando nuestros planes de estudio.
            </p>
            <div className="flex gap-4">
              <div className="flex items-center gap-3">
                <GraduationCap className="w-8 h-8 text-[#D4A574]" />
                <span className="font-semibold text-sm">Trámites de Titulación</span>
              </div>
              <div className="flex items-center gap-3">
                <Briefcase className="w-8 h-8 text-[#D4A574]" />
                <span className="font-semibold text-sm">Bolsa de Empleo Activa</span>
              </div>
            </div>
          </div>
          <div className="bg-gray-50 dark:bg-gray-900 rounded-3xl p-8 border border-gray-150 dark:border-gray-800 space-y-6">
            <h3 className="font-['Montserrat'] font-bold text-xl text-[#0F5132] dark:text-[#D4A574]">Trámites de Titulación</h3>
            <ul className="space-y-3 font-['Inter'] text-sm text-gray-600 dark:text-gray-400">
              <li className="flex items-start gap-2">
                <CheckCircle className="w-5 h-5 text-[#0F5132] dark:text-[#D4A574] flex-shrink-0 mt-0.5" />
                <span>Liberación de Estadía Profesional.</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-5 h-5 text-[#0F5132] dark:text-[#D4A574] flex-shrink-0 mt-0.5" />
                <span>Presentación y aprobación de Memoria de Estadía.</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-5 h-5 text-[#0F5132] dark:text-[#D4A574] flex-shrink-0 mt-0.5" />
                <span>Pago de derechos de expedición de título y cédula.</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bolsa de Trabajo */}
        <div className="space-y-6">
          <h2 className="font-['Montserrat'] font-bold text-2xl text-[#0F5132] dark:text-[#D4A574] text-center">Bolsa de Trabajo Reciente</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {vacantes.map((v, idx) => (
              <div key={idx} className="bg-white dark:bg-gray-900 border border-gray-150 dark:border-gray-800 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
                <h3 className="font-['Montserrat'] font-bold text-[#0F5132] dark:text-[#D4A574] mb-2">{v.puesto}</h3>
                <p className="font-['Inter'] text-sm text-gray-800 dark:text-gray-200 font-medium mb-1">{v.empresa}</p>
                <div className="flex justify-between text-xs text-gray-500 dark:text-gray-400 mt-4 pt-4 border-t border-gray-50 dark:border-gray-850">
                  <span>📍 {v.ub}</span>
                  <span>💰 {v.sal}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </SubpageLayout>
  );
}

// ----------------------------------------------------
// 3. Modelo Educativo Page
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

// ----------------------------------------------------
// 4. SIGO Page
// ----------------------------------------------------
export function EstudiantesSIGO() {
  const breadcrumbs = [
    { name: 'Estudiantes', path: '#' },
    { name: 'SIGO', path: '/estudiantes/sigo' }
  ];

  return (
    <SubpageLayout title="SIGO - Sistema Integral de Gestión" breadcrumbs={breadcrumbs}>
      <div className="space-y-12">
        {/* Intro */}
        <div className="bg-[#0F5132]/5 dark:bg-[#D4A574]/5 border border-[#0F5132]/10 dark:border-[#D4A574]/10 rounded-3xl p-8 transition-colors duration-300">
          <h2 className="font-['Montserrat'] font-bold text-2xl text-[#0F5132] dark:text-[#D4A574] mb-4">Sistema Integral de Gestión Operativa</h2>
          <p className="font-['Inter'] text-gray-600 dark:text-gray-300 leading-relaxed">
            El SIGO es la plataforma oficial para la gestión académica y administrativa de la UTOM. Aquí podrás consultar tus calificaciones, realizar trámites escolares y mantener tu información actualizada de manera eficiente.
          </p>
        </div>

        {/* Access Cards */}
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white dark:bg-gray-900 p-8 rounded-3xl border border-gray-150 dark:border-gray-800 shadow-sm hover:shadow-md transition-all duration-300 group">
            <div className="w-12 h-12 bg-[#0F5132]/10 dark:bg-[#D4A574]/10 rounded-xl flex items-center justify-center text-[#0F5132] dark:text-[#D4A574] mb-6 group-hover:scale-110 transition-transform">
              <FileCheck2 className="w-6 h-6" />
            </div>
            <h3 className="font-['Montserrat'] font-bold text-xl text-[#0F5132] dark:text-[#D4A574] mb-3">Portal del Estudiante</h3>
            <p className="font-['Inter'] text-sm text-gray-600 dark:text-gray-400 leading-relaxed mb-6">
              Accede a tu historial académico, carga de materias, evaluación docente y consulta de adeudos.
            </p>
            <a 
              href="#" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm font-bold text-[#0F5132] dark:text-[#D4A574] hover:underline"
            >
              Ir al Portal <Compass className="w-4 h-4" />
            </a>
          </div>

          <div className="bg-white dark:bg-gray-900 p-8 rounded-3xl border border-gray-150 dark:border-gray-800 shadow-sm hover:shadow-md transition-all duration-300 group">
            <div className="w-12 h-12 bg-[#0F5132]/10 dark:bg-[#D4A574]/10 rounded-xl flex items-center justify-center text-[#0F5132] dark:text-[#D4A574] mb-6 group-hover:scale-110 transition-transform">
              <GraduationCap className="w-6 h-6" />
            </div>
            <h3 className="font-['Montserrat'] font-bold text-xl text-[#0F5132] dark:text-[#D4A574] mb-3">Servicios Escolares</h3>
            <p className="font-['Inter'] text-sm text-gray-600 dark:text-gray-400 leading-relaxed mb-6">
              Información sobre reinscripciones, constancias de estudio, credencialización y procesos de titulación.
            </p>
            <button className="inline-flex items-center gap-2 text-sm font-bold text-[#0F5132] dark:text-[#D4A574] hover:underline cursor-pointer">
              Ver Guía de Trámites <Clock className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Info Section */}
        <div className="bg-gray-50 dark:bg-gray-900 rounded-3xl p-8 border border-gray-150 dark:border-gray-800">
          <div className="flex flex-col md:flex-row gap-8 items-center">
            <div className="flex-1 space-y-4">
              <h3 className="font-['Montserrat'] font-bold text-xl text-[#0F5132] dark:text-[#D4A574]">¿Necesitas ayuda con el SIGO?</h3>
              <p className="font-['Inter'] text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                Si presentas problemas para acceder a tu cuenta o tienes dudas sobre el funcionamiento de la plataforma, nuestro equipo de soporte técnico y el departamento de servicios escolares están para apoyarte.
              </p>
              <div className="pt-2">
                <p className="text-sm font-semibold text-[#0F5132] dark:text-[#D4A574]">📧 soporte.sigo@utom.edu.mx</p>
              </div>
            </div>
            <div className="w-full md:w-1/3 bg-[#0F5132] dark:bg-[#D4A574] text-white p-6 rounded-2xl text-center">
              <p className="text-xs uppercase tracking-widest font-bold mb-2 opacity-80">Horario de Atención</p>
              <p className="text-lg font-bold">Lunes a Viernes</p>
              <p className="text-sm">9:00 AM - 5:00 PM</p>
            </div>
          </div>
        </div>
      </div>
    </SubpageLayout>
  );
}
