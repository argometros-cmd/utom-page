import { MapPin, Phone, Mail, Facebook, Instagram, Youtube, MessageCircle } from 'lucide-react';
import logoUtom from '../../../imports/logo-utom.png';

export function Footer() {
  return (
    <footer id="footer" className="bg-[#0F5132] dark:bg-gray-950 text-white relative overflow-hidden transition-colors duration-300">
      {/* Geometric decoration */}
      <div
        className="absolute top-0 left-0 w-96 h-96 bg-[#D4A574] opacity-5 dark:opacity-2"
        style={{ clipPath: 'polygon(0 0, 100% 0, 0 100%)' }}
      ></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative z-10">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Columna 1: Logo UTOM y descripción */}
          <div>
            <div className="mb-4">
              <img
                src={logoUtom}
                alt="Universidad Tecnológica del Oriente de Michoacán"
                className="h-14 w-auto brightness-0 invert"
              />
            </div>
            <p className="font-['Inter'] text-sm text-gray-300 dark:text-gray-400 mb-6 leading-relaxed">
              Formando profesionales de excelencia comprometidos con el desarrollo de Michoacán y México.
            </p>
            <div className="flex gap-3">
              <a
                href="https://www.facebook.com/UTOMMaravatio"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 dark:bg-white/5 rounded-xl flex items-center justify-center hover:bg-[#D4A574] transition-colors"
                title="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="https://www.instagram.com/utom_michoacan/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 dark:bg-white/5 rounded-xl flex items-center justify-center hover:bg-[#D4A574] transition-colors"
                title="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://www.youtube.com/@UTOMMaravatioMichoacan"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 dark:bg-white/5 rounded-xl flex items-center justify-center hover:bg-[#D4A574] transition-colors"
                title="YouTube"
              >
                <Youtube className="w-5 h-5" />
              </a>
              <a
                href="https://wa.me/524474780049"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 dark:bg-white/5 rounded-xl flex items-center justify-center hover:bg-[#D4A574] transition-colors"
                title="WhatsApp"
              >
                <MessageCircle className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Columna 2: Enlaces rápidos */}
          <div>
            <h3 className="font-['Montserrat'] font-semibold mb-4 text-[#D4A574]">Enlaces Rápidos</h3>
            <ul className="space-y-3">
              <li>
                <a href="#conoce" className="font-['Inter'] text-sm text-gray-300 dark:text-gray-400 hover:text-[#D4A574] transition-colors">
                  Conoce la UTOM
                </a>
              </li>
              <li>
                <a href="#oferta" className="font-['Inter'] text-sm text-gray-300 dark:text-gray-400 hover:text-[#D4A574] transition-colors">
                  Oferta Educativa
                </a>
              </li>
              <li>
                <a href="#aspirantes" className="font-['Inter'] text-sm text-gray-300 dark:text-gray-400 hover:text-[#D4A574] transition-colors">
                  Aspirantes
                </a>
              </li>
              <li>
                <a href="#vinculacion" className="font-['Inter'] text-sm text-gray-300 dark:text-gray-400 hover:text-[#D4A574] transition-colors">
                  Vinculación
                </a>
              </li>
              <li>
                <a href="#servicios" className="font-['Inter'] text-sm text-gray-300 dark:text-gray-400 hover:text-[#D4A574] transition-colors">
                  Servicios Escolares
                </a>
              </li>
            </ul>
          </div>

          {/* Columna 3: Información */}
          <div>
            <h3 className="font-['Montserrat'] font-semibold mb-4 text-[#D4A574]">Información</h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="font-['Inter'] text-sm text-gray-300 dark:text-gray-400 hover:text-[#D4A574] transition-colors">
                  Transparencia
                </a>
              </li>
              <li>
                <a href="#" className="font-['Inter'] text-sm text-gray-300 dark:text-gray-400 hover:text-[#D4A574] transition-colors">
                  Información Financiera
                </a>
              </li>
              <li>
                <a href="#" className="font-['Inter'] text-sm text-gray-300 dark:text-gray-400 hover:text-[#D4A574] transition-colors">
                  Avisos de Privacidad
                </a>
              </li>
              <li>
                <a href="#" className="font-['Inter'] text-sm text-gray-300 dark:text-gray-400 hover:text-[#D4A574] transition-colors">
                  Calendario Escolar
                </a>
              </li>
              <li>
                <a href="#" className="font-['Inter'] text-sm text-gray-300 dark:text-gray-400 hover:text-[#D4A574] transition-colors">
                  Reglamentos
                </a>
              </li>
            </ul>
          </div>

          {/* Columna 4: Contacto - Maravatío */}
          <div>
            <h3 className="font-['Montserrat'] font-semibold mb-4 text-[#D4A574]">Contacto</h3>
            <ul className="space-y-4">
              <li className="flex gap-3">
                <MapPin className="w-5 h-5 text-[#D4A574] flex-shrink-0 mt-0.5" />
                <span className="font-['Inter'] text-sm text-gray-300 dark:text-gray-400">
                  Maravatío, Michoacán<br />
                  México
                </span>
              </li>
              <li className="flex gap-3">
                <Phone className="w-5 h-5 text-[#D4A574] flex-shrink-0" />
                <span className="font-['Inter'] text-sm text-gray-300 dark:text-gray-400">
                  (436) 123 4567
                </span>
              </li>
              <li className="flex gap-3">
                <Mail className="w-5 h-5 text-[#D4A574] flex-shrink-0" />
                <span className="font-['Inter'] text-sm text-gray-300 dark:text-gray-400">
                  contacto@utom.edu.mx
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright - Sin logos externos */}
        <div className="mt-12 pt-8 border-t border-white/10 dark:border-white/5">
          <div className="text-center">
            <p className="font-['Inter'] text-sm text-gray-400 dark:text-gray-500">
              © 2026 Universidad Tecnológica del Oriente de Michoacán. Todos los derechos reservados.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

