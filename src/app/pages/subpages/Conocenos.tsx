import React, { useState } from 'react';
import { SubpageLayout } from '../../components/ui/SubpageLayout';
import { Shield, Eye, Heart, CheckCircle2, User, Mail, PhoneCall, Search, MapPin, Building, Globe, GraduationCap } from 'lucide-react';

// ----------------------------------------------------
// 1. Misión, Visión y Valores Page
// ----------------------------------------------------
export function ConocenosMision() {
  const breadcrumbs = [
    { name: 'Conócenos', path: '#' },
    { name: 'Misión, Visión y Valores', path: '/conocenos/mision-vision-valores' }
  ];

  const valores = [
    { name: 'Respeto', desc: 'Reconocimiento del valor inherente y los derechos de las personas y de la sociedad.' },
    { name: 'Honestidad', desc: 'Actuar con rectitud, transparencia y apego a la verdad en toda actividad institucional.' },
    { name: 'Responsabilidad', desc: 'Compromiso de cumplir con los deberes y responder por las acciones realizadas.' },
    { name: 'Equidad', desc: 'Ofrecer las mismas oportunidades de desarrollo sin distinción de género, cultura o condición social.' },
  ];

  return (
    <SubpageLayout title="Misión, Visión y Valores" breadcrumbs={breadcrumbs}>
      <div className="space-y-16">
        {/* Misión y Visión Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white dark:bg-gray-900 p-8 rounded-3xl shadow-sm border border-gray-100 dark:border-gray-800 transition-colors duration-300">
            <div className="w-14 h-14 bg-[#0F5132]/10 dark:bg-[#D4A574]/10 rounded-2xl flex items-center justify-center mb-6">
              <Shield className="w-7 h-7 text-[#0F5132] dark:text-[#D4A574]" />
            </div>
            <h2 className="font-['Montserrat'] font-bold text-2xl text-[#0F5132] dark:text-[#D4A574] mb-4">Misión</h2>
            <p className="font-['Inter'] text-gray-600 dark:text-gray-300 leading-relaxed">
              Formar profesionistas competitivos a nivel nacional e internacional, a través de programas educativos de calidad con un enfoque humanista, tecnológico y sustentable, impulsando el desarrollo socioeconómico de la región y del país mediante la vinculación con los sectores productivos y sociales.
            </p>
          </div>

          <div className="bg-white dark:bg-gray-900 p-8 rounded-3xl shadow-sm border border-gray-100 dark:border-gray-800 transition-colors duration-300">
            <div className="w-14 h-14 bg-[#0F5132]/10 dark:bg-[#D4A574]/10 rounded-2xl flex items-center justify-center mb-6">
              <Eye className="w-7 h-7 text-[#0F5132] dark:text-[#D4A574]" />
            </div>
            <h2 className="font-['Montserrat'] font-bold text-2xl text-[#0F5132] dark:text-[#D4A574] mb-4">Visión</h2>
            <p className="font-['Inter'] text-gray-600 dark:text-gray-300 leading-relaxed">
              Ser una institución de educación superior líder, reconocida por la excelencia y pertinencia de sus programas educativos, la innovación tecnológica de sus egresados, la calidad de su personal académico y su impacto positivo y sustentable en el desarrollo del oriente de Michoacán.
            </p>
          </div>
        </div>

        {/* Valores */}
        <div>
          <div className="text-center mb-10">
            <div className="inline-block p-3 bg-[#D4A574]/10 rounded-2xl mb-4 text-[#D4A574]">
              <Heart className="w-6 h-6" />
            </div>
            <h2 className="font-['Montserrat'] font-bold text-3xl text-[#0F5132] dark:text-[#D4A574]">Nuestros Valores</h2>
            <p className="font-['Inter'] text-gray-600 dark:text-gray-400 mt-2 max-w-xl mx-auto">
              Principios éticos que guían el comportamiento de nuestra comunidad y fundamentan la formación integral.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {valores.map((v, i) => (
              <div key={i} className="bg-gray-50 dark:bg-gray-900 p-6 rounded-2xl border border-transparent hover:border-[#D4A574] dark:hover:border-[#0F5132] transition-all duration-300">
                <h3 className="font-['Montserrat'] font-bold text-lg text-[#0F5132] dark:text-[#D4A574] mb-2">{v.name}</h3>
                <p className="font-['Inter'] text-sm text-gray-600 dark:text-gray-400 leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Política de Calidad */}
        <div className="bg-[#0F5132] dark:bg-gray-900 rounded-3xl p-8 lg:p-12 text-white shadow-xl relative overflow-hidden transition-colors duration-300">
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#D4A574] opacity-10" style={{ clipPath: 'polygon(100% 0, 100% 100%, 0 0)' }} />
          <div className="relative z-10 flex flex-col md:flex-row items-center gap-8">
            <div className="w-20 h-20 bg-white/10 backdrop-blur-sm rounded-2xl flex items-center justify-center flex-shrink-0">
              <CheckCircle2 className="w-10 h-10 text-[#D4A574]" />
            </div>
            <div>
              <h2 className="font-['Montserrat'] font-bold text-2xl lg:text-3xl mb-4 text-[#D4A574]">Política de Calidad</h2>
              <p className="font-['Inter'] text-white/90 leading-relaxed text-lg">
                En la UTOM nos comprometemos a impartir servicios de educación superior que satisfagan plenamente las necesidades de nuestros estudiantes y del sector productivo, cumpliendo con los requisitos legales y reglamentarios aplicables, mediante la mejora continua de la eficacia de nuestro Sistema de Gestión de Calidad.
              </p>
            </div>
          </div>
        </div>
      </div>
    </SubpageLayout>
  );
}

// ----------------------------------------------------
// 2. Rectora Page
// ----------------------------------------------------
export function ConocenosRectora() {
  const breadcrumbs = [
    { name: 'Conócenos', path: '#' },
    { name: 'Mensaje de la Rectora', path: '/conocenos/rectora' }
  ];

  return (
    <SubpageLayout title="Mensaje de la Rectora" breadcrumbs={breadcrumbs}>
      <div className="grid lg:grid-cols-12 gap-12 items-start">
        {/* Tarjeta de Perfil */}
        <div className="lg:col-span-4 bg-white dark:bg-gray-900 rounded-3xl p-6 shadow-sm border border-gray-100 dark:border-gray-800 text-center transition-colors duration-300">
          <div className="w-40 h-40 bg-gray-100 dark:bg-gray-800 rounded-full mx-auto flex items-center justify-center mb-6 overflow-hidden border-4 border-[#D4A574]/20">
            <User className="w-24 h-24 text-gray-400 dark:text-gray-600" />
          </div>
          <h2 className="font-['Montserrat'] font-bold text-xl text-[#0F5132] dark:text-[#D4A574] mb-1">Mtra. Herlinda Úrsula</h2>
          <p className="font-['Inter'] text-sm font-semibold text-[#D4A574] mb-4">Rectora de la UTOM</p>
          <div className="border-t border-gray-100 dark:border-gray-850 pt-4 mt-4 text-left space-y-3">
            <div className="flex items-center gap-3 text-xs text-gray-500 dark:text-gray-400">
              <Building className="w-4 h-4 text-[#D4A574]" />
              <span>Rectoría Institucional</span>
            </div>
            <div className="flex items-center gap-3 text-xs text-gray-500 dark:text-gray-400">
              <Mail className="w-4 h-4 text-[#D4A574]" />
              <span>rectoria@utom.edu.mx</span>
            </div>
          </div>
        </div>

        {/* Mensaje */}
        <div className="lg:col-span-8 space-y-6">
          <h3 className="font-['Montserrat'] font-bold text-2xl lg:text-3xl text-[#0F5132] dark:text-[#D4A574] leading-tight">
            Bienvenidas y bienvenidos a la Universidad Tecnológica del Oriente de Michoacán
          </h3>
          <div className="font-['Inter'] text-gray-600 dark:text-gray-300 space-y-4 leading-relaxed">
            <p>
              Es un honor saludarles y darles la más cordial bienvenida a este espacio virtual de nuestra querida casa de estudios. En la UTOM, nuestro propósito fundamental es dotar al oriente de Michoacán y al estado de un motor educativo y tecnológico que prepare a las nuevas generaciones para los retos del siglo XXI.
            </p>
            <p>
              Bajo nuestro modelo educativo de Universidades Tecnológicas, priorizamos el aprendizaje práctico sin dejar de lado la excelencia teórica, logrando un balance que permite a los egresados insertarse rápidamente y de manera exitosa en el mercado productivo, o bien, iniciar sus propios emprendimientos de base tecnológica.
            </p>
            <p>
              Les invito a conocer nuestra oferta de Ingenierías y Licenciaturas, a explorar nuestras instalaciones de vanguardia y a sumarse a un proyecto de crecimiento educativo de alta calidad. En la UTOM estamos construyendo el futuro, paso a paso, con esfuerzo y dedicación.
            </p>
            <blockquote className="border-l-4 border-[#D4A574] pl-4 py-2 my-6 bg-gray-50 dark:bg-gray-900 rounded-r-xl italic font-medium text-gray-800 dark:text-gray-200">
              "La educación es el instrumento más poderoso para transformar realidades y construir una sociedad justa y equitativa. Bienvenidos a su segundo hogar."
            </blockquote>
          </div>
        </div>
      </div>
    </SubpageLayout>
  );
}

// ----------------------------------------------------
// 3. Directorio Page
// ----------------------------------------------------
export function ConocenosDirectorio() {
  const breadcrumbs = [
    { name: 'Conócenos', path: '#' },
    { name: 'Directorio', path: '/conocenos/directorio' }
  ];

  const contactos = [
    { depto: 'Rectoría', titular: 'Mtra. Herlinda Úrsula', cargo: 'Rectora', correo: 'rectoria@utom.edu.mx', ext: '101' },
    { depto: 'Secretaría Académica', titular: 'Dr. Alejandro Guzmán Ramos', cargo: 'Secretario Académico', correo: 'sec.academica@utom.edu.mx', ext: '102' },
    { depto: 'Servicios Escolares', titular: 'Lic. Claudia Corona López', cargo: 'Jefa de Control Escolar', correo: 'servicios.escolares@utom.edu.mx', ext: '105' },
    { depto: 'Vinculación y Extensión', titular: 'Mtro. Luis Fernando Díaz', cargo: 'Director de Vinculación', correo: 'vinculacion@utom.edu.mx', ext: '108' },
    { depto: 'Administración y Finanzas', titular: 'C.P. Mónica Arriaga Villegas', cargo: 'Directora de Administración', correo: 'administracion@utom.edu.mx', ext: '103' },
    { depto: 'Soporte Técnico y TI', titular: 'Ing. Javier Esquivel Torres', cargo: 'Jefe de Tecnologías de Información', correo: 'soporte@utom.edu.mx', ext: '112' },
    { depto: 'Planeación y Evaluación', titular: 'Lic. Ricardo Medina Flores', cargo: 'Jefe de Planeación', correo: 'planeacion@utom.edu.mx', ext: '104' }
  ];

  const [searchTerm, setSearchTerm] = useState('');

  const filteredContactos = contactos.filter(c =>
    c.depto.toLowerCase().includes(searchTerm.toLowerCase()) ||
    c.titular.toLowerCase().includes(searchTerm.toLowerCase()) ||
    c.cargo.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <SubpageLayout title="Directorio Institucional" breadcrumbs={breadcrumbs}>
      <div className="space-y-8">
        <div className="max-w-md mx-auto">
          {/* Barra de búsqueda interactiva */}
          <div className="relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Buscar por departamento o funcionario..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-12 pr-4 py-3 bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-2xl font-['Inter'] text-sm focus:outline-none focus:ring-2 focus:ring-[#D4A574] focus:border-transparent transition-all dark:text-white"
            />
          </div>
        </div>

        {/* Grid de Directorio */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredContactos.map((contact, idx) => (
            <div
              key={idx}
              className="bg-white dark:bg-gray-900 rounded-2xl p-6 shadow-sm border border-gray-100 dark:border-gray-850 hover:border-[#D4A574] dark:hover:border-[#0F5132] hover:shadow-md transition-all duration-300"
            >
              <h3 className="font-['Montserrat'] font-bold text-lg text-[#0F5132] dark:text-[#D4A574] mb-1">{contact.depto}</h3>
              <p className="font-['Inter'] text-sm font-semibold text-gray-800 dark:text-gray-200">{contact.titular}</p>
              <p className="font-['Inter'] text-xs text-[#D4A574] mb-4">{contact.cargo}</p>
              
              <div className="space-y-2 pt-3 border-t border-gray-50 dark:border-gray-850 text-xs text-gray-500 dark:text-gray-400">
                <a href={`mailto:${contact.correo}`} className="flex items-center gap-2 hover:text-[#0F5132] dark:hover:text-[#D4A574] transition-colors">
                  <Mail className="w-4 h-4 text-[#D4A574]" />
                  <span>{contact.correo}</span>
                </a>
                <div className="flex items-center gap-2">
                  <PhoneCall className="w-4 h-4 text-[#D4A574]" />
                  <span>Tel: (447) 478 0049 Ext. {contact.ext}</span>
                </div>
              </div>
            </div>
          ))}
          {filteredContactos.length === 0 && (
            <div className="col-span-full text-center py-12 text-gray-500 dark:text-gray-400">
              No se encontraron dependencias o funcionarios para tu búsqueda.
            </div>
          )}
        </div>
      </div>
    </SubpageLayout>
  );
}

// ----------------------------------------------------
// 4. Campus Maravatío Page
// ----------------------------------------------------
export function ConocenosCampusMaravatio() {
  const breadcrumbs = [
    { name: 'Conócenos', path: '#' },
    { name: 'Campus Maravatío', path: '/conocenos/campus-maravatio' }
  ];

  return (
    <SubpageLayout title="Campus Maravatío (Sede Central)" breadcrumbs={breadcrumbs}>
      <div className="space-y-12">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="font-['Montserrat'] font-bold text-2xl lg:text-3xl text-[#0F5132] dark:text-[#D4A574]">
              Nuestras Instalaciones en Santa Rita
            </h2>
            <p className="font-['Inter'] text-gray-600 dark:text-gray-300 leading-relaxed">
              El Campus Central de la UTOM está ubicado en la comunidad de Santa Rita, en el histórico municipio de Maravatío de Ocampo. Diseñado para favorecer el aprendizaje interactivo y el contacto con la naturaleza, nuestro campus cuenta con infraestructura académica, laboratorios y áreas deportivas que cumplen con los más altos estándares nacionales.
            </p>
            <div className="grid grid-cols-2 gap-4">
              <div className="flex gap-3 items-start p-3 bg-gray-50 dark:bg-gray-900 rounded-xl">
                <Building className="w-5 h-5 text-[#D4A574]" />
                <div>
                  <h4 className="font-bold text-xs">Laboratorios Especializados</h4>
                  <p className="text-[10px] text-gray-500">Biotecnología, Gastronomía, Cómputo</p>
                </div>
              </div>
              <div className="flex gap-3 items-start p-3 bg-gray-50 dark:bg-gray-900 rounded-xl">
                <Globe className="w-5 h-5 text-[#D4A574]" />
                <div>
                  <h4 className="font-bold text-xs">Conexión Inalámbrica</h4>
                  <p className="text-[10px] text-gray-500">Acceso a internet en todo el plantel</p>
                </div>
              </div>
              <div className="flex gap-3 items-start p-3 bg-gray-50 dark:bg-gray-900 rounded-xl">
                <GraduationCap className="w-5 h-5 text-[#D4A574]" />
                <div>
                  <h4 className="font-bold text-xs">Biblioteca Física y Virtual</h4>
                  <p className="text-[10px] text-gray-500">Más de 5,000 títulos especializados</p>
                </div>
              </div>
              <div className="flex gap-3 items-start p-3 bg-gray-50 dark:bg-gray-900 rounded-xl">
                <MapPin className="w-5 h-5 text-[#D4A574]" />
                <div>
                  <h4 className="font-bold text-xs">Áreas Verdes y Deportivas</h4>
                  <p className="text-[10px] text-gray-500">Fútbol, Voleibol, Recreación</p>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-white dark:bg-gray-900 rounded-3xl overflow-hidden shadow-md border border-gray-150 dark:border-gray-800 h-[380px]">
            <iframe
              title="Ubicación Campus Maravatío"
              src="https://maps.google.com/maps?q=Universidad%20Tecnol%C3%B3gica%20del%20Oriente%20de%20Michoac%C3%A1n,%20Santa%20Rita&t=&z=15&ie=UTF8&iwloc=&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </div>
    </SubpageLayout>
  );
}

// ----------------------------------------------------
// 5. Campus Zitácuaro Page
// ----------------------------------------------------
export function ConocenosCampusZitacuaro() {
  const breadcrumbs = [
    { name: 'Conócenos', path: '#' },
    { name: 'Campus Zitácuaro', path: '/conocenos/campus-zitacuaro' }
  ];

  return (
    <SubpageLayout title="Campus Zitácuaro (Extensión)" breadcrumbs={breadcrumbs}>
      <div className="space-y-12">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="bg-white dark:bg-gray-900 rounded-3xl overflow-hidden shadow-md border border-gray-150 dark:border-gray-800 h-[380px] order-last lg:order-first">
            <iframe
              title="Ubicación Campus Zitácuaro"
              src="https://maps.google.com/maps?q=Zit%C3%A1cuaro,%20Michoac%C3%A1n&t=&z=14&ie=UTF8&iwloc=&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
            ></iframe>
          </div>
          <div className="space-y-6">
            <h2 className="font-['Montserrat'] font-bold text-2xl lg:text-3xl text-[#0F5132] dark:text-[#D4A574]">
              Extensión Académica Zitácuaro
            </h2>
            <p className="font-['Inter'] text-gray-600 dark:text-gray-300 leading-relaxed">
              Con el objetivo de ampliar las oportunidades educativas y acercar la educación tecnológica de calidad a más jóvenes de la región, la UTOM cuenta con la extensión Zitácuaro. En este campus se imparten programas de alta demanda con la misma excelencia y validez oficial, beneficiando directamente a los egresados de bachillerato del sur del oriente del estado.
            </p>
            <ul className="space-y-3 font-['Inter'] text-sm text-gray-700 dark:text-gray-300">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-[#D4A574]" />
                <span>Mismo modelo educativo práctico 70% / 30% teórico.</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-[#D4A574]" />
                <span>Acceso directo a vinculación y estadías profesionales.</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-[#D4A574]" />
                <span>Instalaciones adecuadas para la formación tecnológica.</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </SubpageLayout>
  );
}
