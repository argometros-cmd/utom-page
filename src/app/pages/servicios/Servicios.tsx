import { useState } from 'react';
import { ArrowRight, ChevronRight } from 'lucide-react';
import { SubpageLayout } from '../../components/ui/SubpageLayout';

export function ServiciosTitulacionPage() {
  const breadcrumbs = [
    { name: 'Titulación', path: '/servicios/titulacion' }
  ];

  const rutasTitulacion = [
    {
      titulo: 'Técnico Superior Universitario',
      subtitulo: 'Cierre del nivel TSU',
      costo: '$3,500.00',
      convocatoriaUrl: 'mailto:servicios_escolares@utom.edu.mx?subject=Solicitud%20de%20convocatoria%20de%20titulacion%20TSU',
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
      costo: '$3,500.00',
      convocatoriaUrl: 'mailto:servicios_escolares@utom.edu.mx?subject=Solicitud%20de%20convocatoria%20de%20titulacion%20Ingenieria%20Licenciatura',
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
    'Entrega de documentación y formato de solicitud de titulación en un horario de 09:00 a.m. a 01:00 p.m.',
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
              <ul className="space-y-3 mb-6">
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
              <div
                className={`rounded-2xl border px-5 py-4 ${
                  index === 0
                    ? 'border-white/15 bg-white/10'
                    : 'border-[#D4A574]/20 bg-[#D4A574]/10 dark:border-[#D4A574]/20 dark:bg-[#D4A574]/10'
                }`}
              >
                <span
                  className={`block text-[11px] font-bold uppercase tracking-[0.24em] mb-1 ${
                    index === 0 ? 'text-[#D4A574]' : 'text-[#0F5132] dark:text-[#D4A574]'
                  }`}
                >
                  Costo del tramite
                </span>
                <span
                  className={`font-['Montserrat'] text-3xl font-bold ${
                    index === 0 ? 'text-white' : 'text-[#0F5132] dark:text-[#D4A574]'
                  }`}
                >
                  {ruta.costo}
                </span>
              </div>
              <a
                href={ruta.convocatoriaUrl}
                className={`mt-4 inline-flex self-center items-center gap-2 rounded-2xl px-6 py-3 font-['Montserrat'] text-sm font-bold transition-colors ${
                  index === 0
                    ? 'bg-[#D4A574] text-[#0F5132] hover:bg-[#c89452]'
                    : 'bg-[#0F5132] text-white hover:bg-[#0d4228] dark:bg-[#D4A574] dark:text-[#0F5132] dark:hover:bg-[#c89452]'
                }`}
              >
                <span>Descargar convocatoria</span>
                <ArrowRight className="h-4 w-4" />
              </a> 
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

export function ServiciosDocumentacionEscolarPage() {
  const [openBajaSection, setOpenBajaSection] = useState<'temporal' | 'definitiva' | null>('temporal');
  const [openReincorporacionSection, setOpenReincorporacionSection] = useState<'temporal' | 'definitiva' | null>('temporal');
  const breadcrumbs = [
    { name: 'Documentación Escolar', path: '/servicios/documentacion-escolar' }
  ];

  const documentPrices: Record<string, string> = {
    'Constancia de Estudios': '$50.00',
    Kardex: '$80.00',
    Credencial: '$50.00',
    'Credencial reposición': '$80.00',
  };

  const documentos = Object.entries(documentPrices).map(([titulo, precio]) => ({
    titulo,
    precio,
  }));

  const tramitesInformativos = [
    {
      titulo: 'Bajas',
      detalles: [
        {
          id: 'temporal',
          subtitulo: 'Descripción',
          texto:
            'La baja temporal aplica en la totalidad de las asignaturas en que esté inscrito el alumno, dentro de los 20 días hábiles a partir del inicio oficial de los cursos. El estudiante debe considerar que este tipo de baja afecta el tiempo para concluir su plan de estudios dentro de los semestres permitidos de acuerdo con los lineamientos académicos-administrativos de la Universidad Tecnológica del Oriente de Michoacán.',
        },
        {
          id: 'temporal',
          subtitulo: 'Procedimiento para tramitar baja temporal',
          items: [
            'Solicitar formato de baja en el Departamento de Servicios Escolares. Deberá imprimir el formato de solicitud de baja temporal, llenarlo con letra de molde y tinta azul, y realizar el registro de su solicitud mediante el formulario que le sea entregado.',
            'Se realizará una entrevista para conocer la causa de tu baja y deberás recabar las firmas de tu tutor y tu director de carrera.',
            'Dirígete a las áreas indicadas en el formato para recabar las firmas faltantes.',
            'Pasar al Departamento de Servicios Escolares cuando solo te falte la firma del área, recabar la firma y entregar el formato para que sea tramitada tu baja temporal.',
          ],
        },
        {
          id: 'definitiva',
          subtitulo: 'Baja Definitiva',
          texto:
            'En la baja definitiva el interesado pierde su calidad de estudiante de la Universidad. Esta solicitud se puede realizar durante el periodo lectivo vigente a partir del inicio oficial de los cursos. El estudiante debe considerar que este tipo de baja no le permite su reincorporación a la Universidad.',
        },
        {
          id: 'definitiva',
          subtitulo: 'Procedimiento para tramitar baja definitiva',
          items: [
            'Solicitar formato de baja en el Departamento de Servicios Escolares.',
            'Se realizará una entrevista para conocer la causa de tu baja y deberás recabar las firmas de tu tutor y tu director de carrera.',
            'Dirígete a las áreas indicadas en el formato para recabar las firmas faltantes.',
            'Pasar al Departamento de Servicios Escolares cuando solo te falte la firma del área, recabar la firma, entregar el formato y recibir tu documentación original.',
          ],
        },
      ],
    },
    {
      titulo: 'Reincorporación',
      detalles: [
        {
          id: 'temporal',
          subtitulo: 'Requisitos',
          items: [
            'Memorándum expedido por la Carrera solicitando la reincorporación.',
            'Copia de baja temporal.',
            'Pago de cuatrimestre (referencia bancaria).',
          ],
        },
        {
          id: 'temporal',
          subtitulo: 'Procedimiento',
          texto:
            'Acudir al Departamento de Servicios Escolares con los requisitos antes mencionados, para realizar el alta y reactivar tu expediente como alumno activo.',
        },
        {
          id: 'definitiva',
          subtitulo: 'Reincorporación por Baja Definitiva',
          texto:
            'En la baja definitiva el interesado pierde su calidad de estudiante de la Universidad. Esta solicitud se puede realizar durante el periodo lectivo vigente a partir del inicio oficial de los cursos. El estudiante debe considerar que este tipo de baja no le permite su reincorporación a la Universidad.',
        },
      ],
    },
  ];

  const proceso = [
    'Solicitar información del trámite en Servicios Escolares.',
    'Entregar la documentación requerida según el tipo de constancia o certificado.',
    'Realizar el pago correspondiente si aplica.',
    'Dar seguimiento a los tiempos de elaboración y entrega del documento.'
  ];

  return (
    <SubpageLayout title="Documentación Escolar" breadcrumbs={breadcrumbs}>
      <div className="space-y-12">
        <div className="bg-gradient-to-br from-[#0F5132] to-[#1a7552] dark:from-gray-900 dark:to-gray-850 rounded-3xl p-8 lg:p-12 text-white shadow-md">
          <h2 className="font-['Montserrat'] font-bold text-3xl text-[#D4A574] mb-4">
            Trámites documentales para alumnos
          </h2>
          <p className="font-['Inter'] text-white/90 leading-relaxed max-w-3xl">
            La UTOM pone a disposición distintos servicios de documentación escolar para respaldar procesos académicos, administrativos y de egreso. Aquí encontrarás una guía general sobre los documentos más solicitados y su proceso básico de gestión.
          </p>
        </div>
        <section className="bg-white dark:bg-gray-900 border border-gray-150 dark:border-gray-800 rounded-3xl p-8 shadow-sm">
          <h3 className="font-['Montserrat'] font-bold text-xl text-[#0F5132] dark:text-[#D4A574] mb-5">
            Proceso general de solicitud
          </h3>
          <ol className="space-y-4">
            {proceso.map((item, index) => (
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

        <section className="bg-white dark:bg-gray-900 border border-gray-150 dark:border-gray-800 rounded-3xl shadow-sm overflow-hidden">
          <div className="border-b border-gray-100 dark:border-gray-800 px-8 py-6">
            <h3 className="font-['Montserrat'] font-bold text-2xl text-[#0F5132] dark:text-[#D4A574]">
              Tabla de costos
            </h3>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full min-w-[540px]">
              <thead className="bg-[#0F5132]/5 dark:bg-[#D4A574]/5">
                <tr>
                  <th className="px-8 py-4 text-left font-['Montserrat'] text-sm font-bold uppercase tracking-[0.2em] text-[#0F5132] dark:text-[#D4A574]">
                    Documento
                  </th>
                  <th className="px-8 py-4 text-right font-['Montserrat'] text-sm font-bold uppercase tracking-[0.2em] text-[#0F5132] dark:text-[#D4A574]">
                    Costo
                  </th>
                </tr>
              </thead>
              <tbody>
                {documentos.map((bloque, index) => (
                  <tr
                    key={bloque.titulo}
                    className={index % 2 === 0 ? 'bg-white dark:bg-gray-900' : 'bg-gray-50/60 dark:bg-gray-950/30'}
                  >
                    <td className="px-8 py-5 font-['Montserrat'] text-base font-semibold text-[#0F5132] dark:text-[#D4A574] border-t border-gray-100 dark:border-gray-800">
                      {bloque.titulo}
                    </td>
                    <td className="px-8 py-5 text-right font-['Montserrat'] text-xl font-bold text-[#0F5132] dark:text-[#D4A574] border-t border-gray-100 dark:border-gray-800">
                      {bloque.precio}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <div className="grid xl:grid-cols-2 gap-8">
          {tramitesInformativos.map((tramite) => (
            <section
              key={tramite.titulo}
              className="bg-white dark:bg-gray-900 border border-gray-150 dark:border-gray-800 rounded-3xl p-8 shadow-sm"
            >
              <h3 className="font-['Montserrat'] font-bold text-2xl text-[#0F5132] dark:text-[#D4A574] mb-4">
                {tramite.titulo}
              </h3>
              {tramite.titulo === 'Bajas' ? (
                <div className="space-y-4">
                  <div className="rounded-2xl border border-gray-100 dark:border-gray-800 overflow-hidden">
                    <button
                      type="button"
                      onClick={() =>
                        setOpenBajaSection((current) => (current === 'temporal' ? null : 'temporal'))
                      }
                      className="w-full flex items-center justify-between px-5 py-4 text-left bg-gray-50 dark:bg-gray-950/40 hover:bg-gray-100 dark:hover:bg-gray-950/60 transition-colors"
                    >
                      <span className="font-['Montserrat'] font-bold text-sm uppercase tracking-[0.18em] text-[#0F5132] dark:text-[#D4A574]">
                        Baja Temporal
                      </span>
                      <ChevronRight
                        className={`h-4 w-4 text-[#D4A574] transition-transform ${
                          openBajaSection === 'temporal' ? 'rotate-90' : ''
                        }`}
                      />
                    </button>
                    {openBajaSection === 'temporal' && (
                      <div className="px-5 py-5 space-y-5">
                        {tramite.detalles
                          .filter((detalle) => detalle.id === 'temporal')
                          .map((detalle, index) => (
                            <div key={index} className="space-y-2">
                              <h4 className="font-['Montserrat'] font-bold text-sm uppercase tracking-[0.18em] text-[#0F5132] dark:text-[#D4A574]">
                                {detalle.subtitulo}
                              </h4>
                              {'items' in detalle && detalle.items ? (
                                <ul className="space-y-2">
                                  {detalle.items.map((item, itemIndex) => (
                                    <li
                                      key={itemIndex}
                                      className="flex items-start gap-3 font-['Inter'] text-sm text-gray-600 dark:text-gray-400 leading-relaxed"
                                    >
                                      <span className="mt-1.5 h-2.5 w-2.5 rounded-full bg-[#D4A574] shrink-0" />
                                      <span>{item}</span>
                                    </li>
                                  ))}
                                </ul>
                              ) : (
                                <p className="font-['Inter'] text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                                  {detalle.texto}
                                </p>
                              )}
                            </div>
                          ))}
                      </div>
                    )}
                  </div>

                  <div className="rounded-2xl border border-gray-100 dark:border-gray-800 overflow-hidden">
                    <button
                      type="button"
                      onClick={() =>
                        setOpenBajaSection((current) => (current === 'definitiva' ? null : 'definitiva'))
                      }
                      className="w-full flex items-center justify-between px-5 py-4 text-left bg-gray-50 dark:bg-gray-950/40 hover:bg-gray-100 dark:hover:bg-gray-950/60 transition-colors"
                    >
                      <span className="font-['Montserrat'] font-bold text-sm uppercase tracking-[0.18em] text-[#0F5132] dark:text-[#D4A574]">
                        Baja Definitiva
                      </span>
                      <ChevronRight
                        className={`h-4 w-4 text-[#D4A574] transition-transform ${
                          openBajaSection === 'definitiva' ? 'rotate-90' : ''
                        }`}
                      />
                    </button>
                    {openBajaSection === 'definitiva' && (
                      <div className="px-5 py-5 space-y-5">
                        {tramite.detalles
                          .filter((detalle) => detalle.id === 'definitiva')
                          .map((detalle, index) => (
                            <div key={index} className="space-y-2">
                              <h4 className="font-['Montserrat'] font-bold text-sm uppercase tracking-[0.18em] text-[#0F5132] dark:text-[#D4A574]">
                                {detalle.subtitulo}
                              </h4>
                              {'items' in detalle && detalle.items ? (
                                <ul className="space-y-2">
                                  {detalle.items.map((item, itemIndex) => (
                                    <li
                                      key={itemIndex}
                                      className="flex items-start gap-3 font-['Inter'] text-sm text-gray-600 dark:text-gray-400 leading-relaxed"
                                    >
                                      <span className="mt-1.5 h-2.5 w-2.5 rounded-full bg-[#D4A574] shrink-0" />
                                      <span>{item}</span>
                                    </li>
                                  ))}
                                </ul>
                              ) : (
                                <p className="font-['Inter'] text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                                  {detalle.texto}
                                </p>
                              )}
                            </div>
                          ))}
                      </div>
                    )}
                  </div>
                </div>
              ) : tramite.titulo === 'Reincorporación' ? (
                <div className="space-y-4">
                  <div className="rounded-2xl border border-gray-100 dark:border-gray-800 overflow-hidden">
                    <button
                      type="button"
                      onClick={() =>
                        setOpenReincorporacionSection((current) => (current === 'temporal' ? null : 'temporal'))
                      }
                      className="w-full flex items-center justify-between px-5 py-4 text-left bg-gray-50 dark:bg-gray-950/40 hover:bg-gray-100 dark:hover:bg-gray-950/60 transition-colors"
                    >
                      <span className="font-['Montserrat'] font-bold text-sm uppercase tracking-[0.18em] text-[#0F5132] dark:text-[#D4A574]">
                        Reincorporación por Baja Temporal
                      </span>
                      <ChevronRight
                        className={`h-4 w-4 text-[#D4A574] transition-transform ${
                          openReincorporacionSection === 'temporal' ? 'rotate-90' : ''
                        }`}
                      />
                    </button>
                    {openReincorporacionSection === 'temporal' && (
                      <div className="px-5 py-5 space-y-5">
                        {tramite.detalles
                          .filter((detalle) => detalle.id === 'temporal')
                          .map((detalle, index) => (
                            <div key={index} className="space-y-2">
                              <h4 className="font-['Montserrat'] font-bold text-sm uppercase tracking-[0.18em] text-[#0F5132] dark:text-[#D4A574]">
                                {detalle.subtitulo}
                              </h4>
                              {'items' in detalle && detalle.items ? (
                                <ul className="space-y-2">
                                  {detalle.items.map((item, itemIndex) => (
                                    <li
                                      key={itemIndex}
                                      className="flex items-start gap-3 font-['Inter'] text-sm text-gray-600 dark:text-gray-400 leading-relaxed"
                                    >
                                      <span className="mt-1.5 h-2.5 w-2.5 rounded-full bg-[#D4A574] shrink-0" />
                                      <span>{item}</span>
                                    </li>
                                  ))}
                                </ul>
                              ) : (
                                <p className="font-['Inter'] text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                                  {detalle.texto}
                                </p>
                              )}
                            </div>
                          ))}
                      </div>
                    )}
                  </div>

                  <div className="rounded-2xl border border-gray-100 dark:border-gray-800 overflow-hidden">
                    <button
                      type="button"
                      onClick={() =>
                        setOpenReincorporacionSection((current) => (current === 'definitiva' ? null : 'definitiva'))
                      }
                      className="w-full flex items-center justify-between px-5 py-4 text-left bg-gray-50 dark:bg-gray-950/40 hover:bg-gray-100 dark:hover:bg-gray-950/60 transition-colors"
                    >
                      <span className="font-['Montserrat'] font-bold text-sm uppercase tracking-[0.18em] text-[#0F5132] dark:text-[#D4A574]">
                        Reincorporación por Baja Definitiva
                      </span>
                      <ChevronRight
                        className={`h-4 w-4 text-[#D4A574] transition-transform ${
                          openReincorporacionSection === 'definitiva' ? 'rotate-90' : ''
                        }`}
                      />
                    </button>
                    {openReincorporacionSection === 'definitiva' && (
                      <div className="px-5 py-5 space-y-5">
                        {tramite.detalles
                          .filter((detalle) => detalle.id === 'definitiva')
                          .map((detalle, index) => (
                            <div key={index} className="space-y-2">
                              <h4 className="font-['Montserrat'] font-bold text-sm uppercase tracking-[0.18em] text-[#0F5132] dark:text-[#D4A574]">
                                {detalle.subtitulo}
                              </h4>
                              {'items' in detalle && detalle.items ? (
                                <ul className="space-y-2">
                                  {detalle.items.map((item, itemIndex) => (
                                    <li
                                      key={itemIndex}
                                      className="flex items-start gap-3 font-['Inter'] text-sm text-gray-600 dark:text-gray-400 leading-relaxed"
                                    >
                                      <span className="mt-1.5 h-2.5 w-2.5 rounded-full bg-[#D4A574] shrink-0" />
                                      <span>{item}</span>
                                    </li>
                                  ))}
                                </ul>
                              ) : (
                                <p className="font-['Inter'] text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                                  {detalle.texto}
                                </p>
                              )}
                            </div>
                          ))}
                      </div>
                    )}
                  </div>
                </div>
              ) : tramite.detalles.length > 0 && (
                <div className="space-y-5">
                  {tramite.detalles.map((detalle, index) => (
                    <div key={index} className="space-y-2">
                      <h4 className="font-['Montserrat'] font-bold text-sm uppercase tracking-[0.18em] text-[#0F5132] dark:text-[#D4A574]">
                        {detalle.subtitulo}
                      </h4>
                      {'items' in detalle && detalle.items ? (
                        <ul className="space-y-2">
                          {detalle.items.map((item, itemIndex) => (
                            <li
                              key={itemIndex}
                              className="flex items-start gap-3 font-['Inter'] text-sm text-gray-600 dark:text-gray-400 leading-relaxed"
                            >
                              <span className="mt-1.5 h-2.5 w-2.5 rounded-full bg-[#D4A574] shrink-0" />
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      ) : (
                        <p className="font-['Inter'] text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                          {detalle.texto}
                        </p>
                      )}
                    </div>
                  ))}
                </div>
              )}
            </section>
          ))}
        </div>

        <section className="bg-[#0F5132]/5 dark:bg-[#D4A574]/5 border border-[#0F5132]/10 dark:border-[#D4A574]/10 rounded-3xl p-8">
          <h3 className="font-['Montserrat'] font-bold text-xl text-[#0F5132] dark:text-[#D4A574] mb-3">
            Nota importante
          </h3>
          <p className="font-['Inter'] text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
            Los requisitos, formatos y tiempos de entrega pueden variar según el documento solicitado. Antes de iniciar cualquier trámite, consulta directamente con Servicios Escolares para confirmar costos, disponibilidad y documentación vigente.
          </p>
        </section>
      </div>
    </SubpageLayout>
  );
}
