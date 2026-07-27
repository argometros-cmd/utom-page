import React, { useState } from 'react';
import { SubpageLayout } from '../../components/ui/SubpageLayout';
import { AspirantesSection } from '../../components/sections/AspirantesSection';
import { 
  Lightbulb, 
  Clock, 
  Compass, 
  GraduationCap, 
  Award, 
  Heart, 
  Handshake, 
  CheckCircle2, 
  Mail, 
  PhoneCall, 
  FileText, 
  ChevronDown, 
  ChevronUp 
} from 'lucide-react';

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
    <SubpageLayout title="Modelo Educativo" breadcrumbs={breadcrumbs}>
      <div className="space-y-12">
        {/* Banner Explicativo */}
        <div className="bg-gradient-to-br from-[#0F5132] to-[#1a7552] dark:from-gray-900 dark:to-gray-850 text-white rounded-3xl p-8 lg:p-12 shadow-md relative overflow-hidden">
          <h2 className="font-['Montserrat'] font-bold text-3xl mb-4 text-[#D4A574]">60% Práctico y 40% Teórico</h2>
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
              Tras graduarte como TSU, continúas tus estudios por un año y cuatro meses adicionales (cuatro cuatrimestres) para obtener el título de Ingeniería o Licenciatura.
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
// 3. Becas y Apoyos Económicos Page
// ----------------------------------------------------
export function EstudiantesBecas() {
  const breadcrumbs = [
    { name: 'Estudiantes', path: '#' },
    { name: 'Becas', path: '/estudiantes/becas' }
  ];

  // FAQ state
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const becasData = [
    {
      title: 'Beca Jóvenes Escribiendo el Futuro',
      tag: 'Federal',
      tagColor: 'bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-300',
      description: 'Programa del Gobierno Federal dirigido a estudiantes de licenciatura o técnico superior universitario inscritos en escuelas públicas con alto nivel de marginación.',
      benefit: 'Apoyo económico mensual de $2,800 MXN durante el ciclo escolar vigente (sujeto a las reglas de operación de la Coordinación Nacional de Becas para el Bienestar Benito Juárez).',
      requirements: [
        'Estar inscrito en modalidad presencial de la UTOM.',
        'No contar con otra beca similar otorgada por el Gobierno Federal.',
        'Hacer el registro correspondiente en la plataforma SUBES durante los periodos oficiales.',
        'Tener un expediente de inscripción completo.'
      ],
      icon: GraduationCap,
    },
    {
      title: 'Beca de Aprovechamiento / Excelencia Académica',
      tag: 'Interna UTOM',
      tagColor: 'bg-[#D4A574]/10 text-[#0F5132] dark:text-[#D4A574]',
      description: 'Estímulo institucional para premiar el esfuerzo de aquellos estudiantes que logren un desempeño académico sobresaliente durante el cuatrimestre inmediato anterior.',
      benefit: 'Exención del pago del 100% o porcentaje proporcional en la inscripción o reinscripción del siguiente periodo escolar.',
      requirements: [
        'Estar debidamente inscrito y cursar de manera regular el cuatrimestre.',
        'Haber obtenido un promedio mínimo de 9.0 en el periodo inmediato anterior sin reprobar ninguna asignatura.',
        'Mantener una conducta ejemplar y cumplir con los reglamentos de la institución.',
        'No registrar adeudos de material o cuotas.'
      ],
      icon: Award,
    },
    {
      title: 'Beca de Apoyo Alimentario',
      tag: 'Interna UTOM',
      tagColor: 'bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300',
      description: 'Apoyo social universitario enfocado en estudiantes que presenten vulnerabilidad socioeconómica y requieran de un respaldo nutricional para continuar con sus estudios.',
      benefit: 'Acceso gratuito o con descuento sustancial a desayunos o comidas calientes balanceadas diariamente en la cafetería institucional de la UTOM.',
      requirements: [
        'Ser alumno regular inscrito en cualquiera de los programas académicos.',
        'Llenar solicitud de beca alimentaria ante el área de Trabajo Social/Servicios Escolares.',
        'Acreditar el estudio socioeconómico y presentar comprobantes de ingresos familiares.',
        'Participar activamente en actividades de corresponsabilidad social universitaria si es requerido.'
      ],
      icon: Heart,
    },
    {
      title: 'Beca de Estadía y Vinculación',
      tag: 'Empresarial / Vinculación',
      tagColor: 'bg-amber-100 text-amber-800 dark:bg-amber-900/30 dark:text-amber-300',
      description: 'Estímulos o apoyos otorgados en convenio con el sector productivo privado y público a los estudiantes que realizan su estadía profesional de TSU, Ingeniería o Licenciatura.',
      benefit: 'Soporte de transporte, ayuda económica o beca completa mensual asignada de forma directa por la empresa receptora durante el cuatrimestre del proyecto de estadía.',
      requirements: [
        'Estar cursando el 6to cuatrimestre (para TSU) o el 10mo cuatrimestre (para Ingeniería/Licenciatura).',
        'Haber sido asignado formalmente a una organización bajo convenio con el Departamento de Vinculación.',
        'Cumplir con el horario, metas y plan de trabajo del proyecto establecido por el asesor industrial y académico.'
      ],
      icon: Handshake,
    }
  ];

  const faqData = [
    {
      question: '¿Puedo acumular la beca federal "Jóvenes Escribiendo el Futuro" con una beca interna de la UTOM?',
      answer: 'Sí. Las becas de Aprovechamiento Académico (exención de pago) y Apoyo Alimentario son programas institucionales de la UTOM diseñados para motivar tu desempeño o dar soporte social, por lo cual no son consideradas incompatibles con la beca federal de manutención, a menos que las reglas específicas de la convocatoria federal del año fiscal indiquen lo contrario.'
    },
    {
      question: '¿Cuál es el periodo para solicitar las becas de aprovechamiento académico?',
      answer: 'La convocatoria para las Becas de Aprovechamiento se publica al finalizar cada cuatrimestre e iniciar el proceso de reinscripción. Debes presentar tu boleta/kárdex oficial del cuatrimestre terminado y llenar el formato correspondiente en el Departamento de Servicios Escolares en las primeras dos semanas de clases.'
    },
    {
      question: '¿Qué documentos básicos debo tener listos para aplicar a cualquier apoyo?',
      answer: 'Generalmente se requiere: 1) Solicitud oficial de beca debidamente requisitada, 2) Kárdex o boleta de calificaciones oficial del último periodo, 3) Clave Única de Registro de Población (CURP) actualizada, 4) Comprobante de domicilio reciente (no mayor a 3 meses), 5) Comprobante oficial de ingresos del sustento familiar.'
    },
    {
      question: '¿En dónde se publican las convocatorias oficiales?',
      answer: 'Todas las convocatorias de carácter interno y nacional se publican a través de los tableros de avisos físicos de la universidad, el portal web oficial en la sección de Noticias, y por medio de nuestras redes sociales oficiales de la UTOM.'
    }
  ];

  return (
    <SubpageLayout title="Becas y Apoyos Económicos" breadcrumbs={breadcrumbs}>
      <div className="space-y-16">
        
        {/* Banner Explicativo de Introducción */}
        <div className="bg-gradient-to-br from-[#0F5132] to-[#1a7552] dark:from-gray-900 dark:to-gray-850 text-white rounded-3xl p-8 lg:p-12 shadow-md relative overflow-hidden">
          <div className="relative z-10 max-w-4xl">
            <span className="bg-[#D4A574] text-[#0F5132] px-4 py-1.5 rounded-full font-['Inter'] text-xs font-bold uppercase tracking-wider mb-4 inline-block">
              Bienestar Estudiantil
            </span>
            <h2 className="font-['Montserrat'] font-bold text-3xl lg:text-4xl mb-4 text-[#D4A574]">
              Impulsamos tu Éxito Académico
            </h2>
            <p className="font-['Inter'] text-base lg:text-lg text-white/90 leading-relaxed">
              En la Universidad Tecnológica del Oriente de Michoacán, entendemos que tu dedicación es el motor del futuro. Contamos con una amplia gama de opciones de financiamiento, becas gubernamentales e institucionales para asegurar que ningún obstáculo económico se interponga en tu desarrollo educativo y profesional.
            </p>
          </div>
          {/* Decorative geometric details */}
          <div className="absolute -bottom-10 -right-10 w-48 h-48 bg-[#D4A574]/10 rounded-full blur-2xl pointer-events-none"></div>
        </div>

        {/* Sección de Becas Disponibles */}
        <div className="space-y-8">
          <div className="text-center md:text-left">
            <h3 className="font-['Montserrat'] font-bold text-2xl lg:text-3xl text-[#0F5132] dark:text-[#D4A574] mb-2">
              Conoce Nuestras Becas
            </h3>
            <p className="font-['Inter'] text-sm text-gray-600 dark:text-gray-400 max-w-2xl">
              Explora las diferentes alternativas vigentes para alumnos regulares, desde programas federales hasta estímulos de excelencia internos.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {becasData.map((beca, index) => {
              const IconComponent = beca.icon;
              return (
                <div 
                  key={index} 
                  className="bg-white dark:bg-gray-900 rounded-3xl border border-gray-150 dark:border-gray-800/80 p-8 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between"
                >
                  <div>
                    {/* Header Tarjeta */}
                    <div className="flex items-start justify-between mb-6">
                      <div className="p-4 bg-[#D4A574]/10 dark:bg-[#D4A574]/5 rounded-2xl text-[#0F5132] dark:text-[#D4A574]">
                        <IconComponent className="w-8 h-8" />
                      </div>
                      <span className={`text-xs font-bold font-['Inter'] px-3.5 py-1.5 rounded-full ${beca.tagColor}`}>
                        {beca.tag}
                      </span>
                    </div>

                    {/* Contenido Tarjeta */}
                    <h4 className="font-['Montserrat'] font-bold text-xl text-[#0F5132] dark:text-[#D4A574] mb-3">
                      {beca.title}
                    </h4>
                    <p className="font-['Inter'] text-sm text-gray-600 dark:text-gray-400 leading-relaxed mb-6">
                      {beca.description}
                    </p>

                    {/* Beneficio destacado */}
                    <div className="bg-[#0F5132]/5 dark:bg-gray-950/50 border-l-4 border-[#0F5132] dark:border-[#D4A574] p-4 rounded-r-2xl mb-6">
                      <span className="font-['Montserrat'] text-xs font-bold text-[#0F5132] dark:text-[#D4A574] uppercase block mb-1">
                        Beneficio:
                      </span>
                      <p className="font-['Inter'] text-xs text-gray-700 dark:text-gray-300 leading-relaxed">
                        {beca.benefit}
                      </p>
                    </div>

                    {/* Requisitos */}
                    <div>
                      <span className="font-['Montserrat'] text-xs font-bold text-gray-700 dark:text-gray-300 uppercase block mb-3">
                        Requisitos Clave:
                      </span>
                      <ul className="space-y-2">
                        {beca.requirements.map((req, rIdx) => (
                          <li key={rIdx} className="flex items-start gap-2 text-xs font-['Inter'] text-gray-600 dark:text-gray-400 leading-relaxed">
                            <CheckCircle2 className="w-4 h-4 text-[#0F5132] dark:text-[#D4A574] mt-0.5 flex-shrink-0" />
                            <span>{req}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Proceso General de Solicitud */}
        <div className="bg-gray-50 dark:bg-gray-900/40 rounded-3xl p-8 lg:p-12 border border-gray-150 dark:border-gray-800">
          <div className="text-center mb-10">
            <h3 className="font-['Montserrat'] font-bold text-2xl text-[#0F5132] dark:text-[#D4A574] mb-2">
              Proceso de Solicitud General
            </h3>
            <p className="font-['Inter'] text-sm text-gray-600 dark:text-gray-400 max-w-xl mx-auto">
              Sigue estos sencillos pasos para formalizar tu solicitud de apoyo ante la universidad.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 relative">
            {[
              { step: '01', title: 'Verificar Convocatoria', text: 'Consulta las bases, calendarios y requisitos específicos vigentes publicados en los tableros e internet.' },
              { step: '02', title: 'Recopilar Documentos', text: 'Reúne tu papelería oficial (boleta de calificaciones, comprobante de domicilio, ingresos, etc.).' },
              { step: '03', title: 'Registro y Entrega', text: 'Realiza tu registro digital o entrega tu expediente físico completo en el área de Servicios Escolares.' },
              { step: '04', title: 'Resultados y Cobro', text: 'Mantente atento al dictamen final oficial para proceder al cobro o aplicación del estímulo.' }
            ].map((p, idx) => (
              <div key={idx} className="bg-white dark:bg-gray-950 p-6 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-900/60 transition-colors duration-300 flex flex-col justify-between">
                <div>
                  <span className="font-['Montserrat'] font-extrabold text-3xl text-[#D4A574]/40 dark:text-[#D4A574]/20 block mb-3">
                    {p.step}
                  </span>
                  <h4 className="font-['Montserrat'] font-bold text-sm text-[#0F5132] dark:text-[#D4A574] mb-2">
                    {p.title}
                  </h4>
                  <p className="font-['Inter'] text-xs text-gray-500 dark:text-gray-400 leading-relaxed">
                    {p.text}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Sección FAQ Accordion */}
        <div className="space-y-8">
          <div className="text-center">
            <h3 className="font-['Montserrat'] font-bold text-2xl text-[#0F5132] dark:text-[#D4A574] mb-2">
              Preguntas Frecuentes
            </h3>
            <p className="font-['Inter'] text-sm text-gray-600 dark:text-gray-400 max-w-lg mx-auto">
              Resolvemos tus dudas principales acerca del otorgamiento y renovación de becas.
            </p>
          </div>

          <div className="max-w-3xl mx-auto space-y-4">
            {faqData.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div 
                  key={idx} 
                  className="bg-white dark:bg-gray-900 border border-gray-150 dark:border-gray-800/80 rounded-2xl overflow-hidden transition-colors duration-300"
                >
                  <button
                    onClick={() => toggleFaq(idx)}
                    className="w-full text-left p-6 flex items-center justify-between gap-4 focus:outline-none cursor-pointer"
                  >
                    <span className="font-['Montserrat'] font-bold text-sm text-[#0F5132] dark:text-[#D4A574]">
                      {faq.question}
                    </span>
                    {isOpen ? (
                      <ChevronUp className="w-5 h-5 text-[#D4A574] flex-shrink-0" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-gray-400 flex-shrink-0" />
                    )}
                  </button>
                  
                  {isOpen && (
                    <div className="px-6 pb-6 border-t border-gray-100 dark:border-gray-800 pt-4 bg-gray-50/50 dark:bg-gray-950/20">
                      <p className="font-['Inter'] text-xs text-gray-600 dark:text-gray-400 leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Tarjeta de Contacto / Atención */}
        <div className="bg-[#0F5132] text-white rounded-3xl p-8 lg:p-12 shadow-md relative overflow-hidden transition-all duration-300">
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#D4A574] opacity-10 rounded-full blur-3xl pointer-events-none"></div>
          <div className="relative z-10 grid md:grid-cols-12 gap-8 items-center">
            <div className="md:col-span-8 space-y-4">
              <h3 className="font-['Montserrat'] font-bold text-2xl text-[#D4A574]">
                ¿Tienes más dudas sobre las Becas?
              </h3>
              <p className="font-['Inter'] text-sm text-white/95 leading-relaxed max-w-xl">
                Nuestro Departamento de Servicios Escolares está a tu disposición para orientarte y recibir tus expedientes. Escríbenos o visítanos directamente en las oficinas del campus.
              </p>
              
              <div className="flex flex-wrap gap-x-6 gap-y-3 pt-2">
                <div className="flex items-center gap-2 text-xs font-['Inter']">
                  <Mail className="w-4 h-4 text-[#D4A574]" />
                  <span>becas@utom.edu.mx</span>
                </div>
                <div className="flex items-center gap-2 text-xs font-['Inter']">
                  <PhoneCall className="w-4 h-4 text-[#D4A574]" />
                  <span>447 125 0284 ext. Escolares</span>
                </div>
                <div className="flex items-center gap-2 text-xs font-['Inter']">
                  <FileText className="w-4 h-4 text-[#D4A574]" />
                  <span>Edificio A, Planta Baja</span>
                </div>
              </div>
            </div>

            <div className="md:col-span-4 flex justify-start md:justify-end">
              <a 
                href="mailto:becas@utom.edu.mx" 
                className="bg-[#D4A574] hover:bg-[#c39463] text-[#0F5132] font-['Montserrat'] font-bold text-xs px-6 py-4 rounded-2xl shadow transition-colors duration-300 w-full md:w-auto text-center cursor-pointer"
              >
                Enviar un Correo
              </a>
            </div>
          </div>
        </div>

      </div>
    </SubpageLayout>
  );
}
