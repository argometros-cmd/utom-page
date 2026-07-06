import React, { useState } from 'react';
import { SubpageLayout } from '../../components/ui/SubpageLayout';
import { useParams, Navigate } from 'react-router';
import { FileText, Download, ChevronDown, FolderClosed, ShieldAlert } from 'lucide-react';

export default function TransparenciaPage() {
  const { year } = useParams<{ year: string }>();

  // Validar año
  const validYears = ['2022', '2023', '2024', '2025', '2026'];
  if (!year || !validYears.includes(year)) {
    return <Navigate to="/" replace />;
  }

  const breadcrumbs = [
    { name: 'Transparencia', path: '#' },
    { name: `Ejercicio Fiscal ${year}`, path: `/transparencia/${year}` }
  ];

  const seccionesDocs = [
    {
      categoria: 'Artículo 70 - Obligaciones Comunes',
      items: [
        { titulo: 'Fracción I - Estructura Orgánica', desc: 'Organigrama y atribuciones de las unidades administrativas.' },
        { titulo: 'Fracción II - Directorio de Servidores Públicos', desc: 'Nombres, cargos, correos y teléfonos del personal institucional.' },
        { titulo: 'Fracción XI - Contrataciones y Licitaciones', desc: 'Contratos y convocatorias de adquisiciones realizadas.' },
      ]
    },
    {
      categoria: 'Cuenta Pública e Informes Financieros',
      items: [
        { titulo: 'Informe Financiero Primer Trimestre', desc: 'Estado de posición financiera y analítico de ingresos/egresos.' },
        { titulo: 'Informe Financiero Segundo Trimestre', desc: 'Estado de actividades y variaciones en la hacienda pública.' },
        { titulo: 'Informe Financiero Tercer Trimestre', desc: 'Reporte del avance físico y financiero de programas.' },
        { titulo: 'Informe Financiero Cuarto Trimestre / Cuenta Pública', desc: 'Cierre anual contable, presupuestal y patrimonial institucional.' },
      ]
    },
    {
      categoria: 'Auditorías y Evaluaciones',
      items: [
        { titulo: 'Auditoría Superior del Estado', desc: 'Resultados e informes de revisiones a la gestión financiera.' },
        { titulo: 'Evaluación del Desempeño Institucional', desc: 'Reportes de metas académicas e indicadores de eficiencia.' },
      ]
    }
  ];

  const [activeCategory, setActiveCategory] = useState<number | null>(0);

  return (
    <SubpageLayout title={`Transparencia - Ejercicio ${year}`} breadcrumbs={breadcrumbs}>
      <div className="space-y-12">
        {/* Intro */}
        <div className="bg-[#0F5132]/5 dark:bg-[#D4A574]/5 border border-[#0F5132]/10 dark:border-[#D4A574]/10 rounded-3xl p-8 transition-colors duration-300 flex items-start gap-4">
          <FolderClosed className="w-8 h-8 text-[#D4A574] flex-shrink-0 mt-1" />
          <div>
            <h2 className="font-['Montserrat'] font-bold text-xl text-[#0F5132] dark:text-[#D4A574] mb-2">Rendición de Cuentas {year}</h2>
            <p className="font-['Inter'] text-sm text-gray-650 dark:text-gray-300 leading-relaxed">
              Consulte las fracciones correspondientes a la Ley General de Transparencia e Acceso a la Información Pública. Los archivos se encuentran disponibles en formato abierto para su consulta y descarga libre.
            </p>
          </div>
        </div>

        {/* Acordeón de Categorías */}
        <div className="space-y-4">
          {seccionesDocs.map((sec, idx) => {
            const isOpen = activeCategory === idx;
            return (
              <div key={idx} className="bg-white dark:bg-gray-900 border border-gray-150 dark:border-gray-800 rounded-3xl overflow-hidden shadow-sm">
                <button
                  onClick={() => setActiveCategory(isOpen ? null : idx)}
                  className="w-full flex items-center justify-between p-6 font-['Montserrat'] font-bold text-[#0F5132] dark:text-[#D4A574] text-lg hover:bg-gray-50 dark:hover:bg-gray-850 transition-colors"
                >
                  <span>{sec.categoria}</span>
                  <ChevronDown className={`w-5 h-5 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
                </button>
                
                {isOpen && (
                  <div className="p-6 pt-0 border-t border-gray-50 dark:border-gray-850 bg-gray-50/50 dark:bg-gray-900/50 space-y-4">
                    <ul className="divide-y divide-gray-100 dark:divide-gray-800">
                      {sec.items.map((doc, docIdx) => (
                        <li key={docIdx} className="py-4 flex flex-col sm:flex-row sm:items-center justify-between gap-4 first:pt-2">
                          <div className="flex gap-3 items-start">
                            <FileText className="w-5 h-5 text-[#D4A574] flex-shrink-0 mt-1" />
                            <div>
                              <h5 className="font-['Montserrat'] font-semibold text-sm text-gray-850 dark:text-gray-100">{doc.titulo}</h5>
                              <p className="font-['Inter'] text-xs text-gray-500 dark:text-gray-400 mt-1">{doc.desc}</p>
                            </div>
                          </div>
                          <button className="flex items-center gap-1.5 self-start sm:self-center px-4 py-2 bg-white dark:bg-gray-800 hover:bg-[#D4A574]/10 border border-gray-200 dark:border-gray-700 text-xs font-semibold text-[#D4A574] rounded-xl shadow-sm hover:border-[#D4A574] transition-all">
                            <Download className="w-3.5 h-3.5" />
                            <span>Descargar PDF</span>
                          </button>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Nota aclaratoria */}
        <div className="flex gap-3 bg-amber-50 dark:bg-amber-950/20 border border-amber-200 dark:border-amber-900/30 rounded-2xl p-5 text-amber-800 dark:text-amber-200 text-xs font-['Inter'] leading-relaxed">
          <ShieldAlert className="w-5 h-5 flex-shrink-0" />
          <p>
            <strong>Nota de Transparencia:</strong> Los documentos mostrados corresponden a la información oficial presentada ante el Instituto Michoacano de Acceso a la Información Pública (IMAIP). Si requiere información específica que no se encuentre publicada, puede realizar una solicitud a través de la Plataforma Nacional de Transparencia.
          </p>
        </div>
      </div>
    </SubpageLayout>
  );
}
