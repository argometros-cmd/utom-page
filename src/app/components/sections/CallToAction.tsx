import { ArrowRight, Download } from 'lucide-react';

export function CallToAction() {
  return (
    <section className="py-24 bg-gradient-to-br from-[#0F5132] via-[#1a7552] to-[#0F5132] dark:from-gray-900 dark:via-gray-950 dark:to-gray-900 relative overflow-hidden transition-colors duration-300">
      {/* Geometric decorations */}
      <div
        className="absolute top-0 right-0 w-[700px] h-[700px] bg-[#D4A574] opacity-8"
        style={{ clipPath: 'polygon(100% 0, 100% 100%, 0 0)' }}
      ></div>
      <div
        className="absolute bottom-0 left-0 w-96 h-96 bg-[#D4A574] opacity-5"
        style={{ clipPath: 'polygon(0 100%, 100% 100%, 0 0)' }}
      ></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="font-['Montserrat'] font-bold text-white mb-6 text-4xl lg:text-5xl">
            Comienza tu futuro profesional hoy
          </h2>
          <p className="font-['Inter'] text-lg text-white/90 max-w-2xl mx-auto mb-10 leading-relaxed">
            Únete a la comunidad UTOM y transforma tu vida a través de una educación de calidad,
            práctica y orientada al mercado laboral.
          </p>

          <div className="flex flex-wrap gap-6 justify-center items-center">
            <button className="group bg-[#D4A574] text-white font-['Montserrat'] font-semibold px-10 py-4 rounded-xl hover:bg-[#c19563] transition-all shadow-lg hover:shadow-xl flex items-center gap-3">
              <span>Solicita Información</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="group bg-white/10 backdrop-blur-sm border-2 border-white/30 text-white font-['Montserrat'] font-semibold px-10 py-4 rounded-xl hover:bg-white/20 transition-all shadow-lg hover:shadow-xl flex items-center gap-3">
              <Download className="w-5 h-5" />
              <span>Descarga Convocatoria</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
