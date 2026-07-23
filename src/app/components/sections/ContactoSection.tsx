import React, { useState } from 'react';
import { MapPin, Phone, Mail, Send, Facebook, MessageCircle, Instagram, Youtube, Video } from 'lucide-react';
import { buildWhatsAppUrl, contactInfo, whatsappMessages } from '../../data/contact';

export function ContactoSection() {
  const [formData, setFormData] = useState({
    nombre: '',
    correo: '',
    telefono: '',
    asunto: 'Informes',
    mensaje: '',
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Datos enviados:', formData);
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ nombre: '', correo: '', telefono: '', asunto: 'Informes', mensaje: '' });
    }, 4000);
  };
  

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const mapQuery = encodeURIComponent(
    `Universidad Tecnológica del Oriente de Michoacán, ${contactInfo.location}`
  );
  const mapUrl = `https://maps.google.com/maps?q=${mapQuery}&t=&z=15&ie=UTF8&iwloc=&output=embed`;

  return (
    <section id="contacto" className="py-24 bg-gray-50 dark:bg-gray-950 relative overflow-hidden transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="font-['Montserrat'] font-bold text-[#0F5132] dark:text-[#D4A574] mb-4 text-4xl lg:text-5xl">
            Contáctanos
          </h2>
          <p className="font-['Inter'] text-gray-600 dark:text-gray-400 max-w-2xl mx-auto text-lg">
            Estamos listos para resolver todas tus dudas. Escríbenos o visítanos en nuestro campus.
          </p>
        </div>

        {/* Primer Renglón: Mapa y Formulario */}
        <div className="grid lg:grid-cols-12 gap-8 items-stretch mb-8">
          {/* Mapa de Ubicación (Izquierda) */}
          <div className="lg:col-span-5 bg-white dark:bg-gray-900 rounded-3xl overflow-hidden shadow-sm border border-gray-200 dark:border-gray-800 min-h-[450px] relative">
            <iframe
              title="Mapa de Ubicación de la UTOM"
              src={mapUrl}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>

          {/* Formulario (Derecha) */}
          <div className="lg:col-span-7 bg-white dark:bg-gray-900 rounded-3xl p-8 lg:p-10 shadow-sm border border-gray-200 dark:border-gray-800 flex flex-col justify-center transition-colors duration-300">
            <h3 className="font-['Montserrat'] font-bold text-[#0F5132] dark:text-[#D4A574] text-2xl mb-6">
              Envíanos un correo
            </h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="nombre" className="block font-['Inter'] text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                    Nombre Completo
                  </label>
                  <input
                    type="text"
                    id="nombre"
                    name="nombre"
                    required
                    value={formData.nombre}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-gray-900 dark:text-white rounded-xl font-['Inter'] text-sm focus:outline-none focus:ring-2 focus:ring-[#D4A574] focus:border-transparent transition-all"
                    placeholder="Tu nombre"
                  />
                </div>
                <div>
                  <label htmlFor="correo" className="block font-['Inter'] text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                    Correo Electrónico
                  </label>
                  <input
                    type="email"
                    id="correo"
                    name="correo"
                    required
                    value={formData.correo}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-gray-900 dark:text-white rounded-xl font-['Inter'] text-sm focus:outline-none focus:ring-2 focus:ring-[#D4A574] focus:border-transparent transition-all"
                    placeholder="correo@ejemplo.com"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="telefono" className="block font-['Inter'] text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                    Teléfono de Contacto
                  </label>
                  <input
                    type="tel"
                    id="telefono"
                    name="telefono"
                    value={formData.telefono}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-gray-900 dark:text-white rounded-xl font-['Inter'] text-sm focus:outline-none focus:ring-2 focus:ring-[#D4A574] focus:border-transparent transition-all"
                    placeholder="(10 dígitos)"
                  />
                </div>
                <div>
                  <label htmlFor="asunto" className="block font-['Inter'] text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                    Asunto
                  </label>
                  <select
                    id="asunto"
                    name="asunto"
                    value={formData.asunto}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-gray-900 dark:text-white rounded-xl font-['Inter'] text-sm focus:outline-none focus:ring-2 focus:ring-[#D4A574] focus:border-transparent transition-all"
                  >
                    <option value="Informes">Información general / Carreras</option>
                    <option value="Admisiones">Proceso de Admisión</option>
                    <option value="Servicios">Servicios Escolares</option>
                    <option value="Soporte">Vinculación</option>
                  </select>
                </div>
              </div>

              <div>
                <label htmlFor="mensaje" className="block font-['Inter'] text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                  Mensaje
                </label>
                <textarea
                  id="mensaje"
                  name="mensaje"
                  rows={4}
                  required
                  value={formData.mensaje}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-gray-900 dark:text-white rounded-xl font-['Inter'] text-sm focus:outline-none focus:ring-2 focus:ring-[#D4A574] focus:border-transparent transition-all resize-none"
                  placeholder="Escribe tu consulta aquí..."
                ></textarea>
              </div>

              <div className="flex flex-col gap-3">
                <button
                  type="submit"
                  disabled={isSubmitted}
                  className={`w-full py-4 rounded-xl font-['Montserrat'] font-bold text-white shadow-md transition-all flex items-center justify-center gap-2 ${
                    isSubmitted 
                      ? 'bg-emerald-600' 
                      : 'bg-[#0F5132] hover:bg-[#0d4228] hover:shadow-lg active:scale-98'
                  }`}
                >
                  {isSubmitted ? (
                    <span>¡Correo enviado con éxito!</span>
                  ) : (
                    <>
                      <span>Enviar Correo</span>
                      <Send className="w-5 h-5" />
                    </>
                  )}
                </button>

                <a
                  href={buildWhatsAppUrl(whatsappMessages.general)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-4 rounded-xl font-['Montserrat'] font-bold text-[#0F5132] dark:text-[#D4A574] bg-[#D4A574]/15 hover:bg-[#D4A574]/25 border border-[#D4A574]/30 transition-all flex items-center justify-center gap-2 active:scale-98 text-center text-sm"
                >
                  <span>Prefiero usar WhatsApp</span>
                  <MessageCircle className="w-5 h-5 text-[#0F5132] dark:text-[#D4A574]" />
                </a>
              </div>
            </form>
          </div>
        </div>

        {/* Segundo Renglón: Cuadro de Información junto con Redes Sociales expandido a lo ancho (50/50) */}
        <div className="bg-white dark:bg-gray-900 rounded-3xl p-8 lg:p-10 shadow-sm border border-gray-200 dark:border-gray-800 grid md:grid-cols-12 gap-8 items-start w-full transition-colors duration-300">
          {/* Datos de contacto (Izquierda - 50%) */}
          <div className="md:col-span-6 space-y-6">
            <h3 className="font-['Montserrat'] font-bold text-[#0F5132] dark:text-[#D4A574] text-xl">
              Información General
            </h3>
            <div className="space-y-4">
              <div className="flex gap-4 items-start">
                <div className="w-10 h-10 rounded-xl bg-[#0F5132]/10 dark:bg-[#D4A574]/10 flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-5 h-5 text-[#0F5132] dark:text-[#D4A574]" />
                </div>
                <div>
                  <h4 className="font-['Montserrat'] font-semibold text-[#0F5132] dark:text-[#D4A574] text-xs uppercase tracking-wider mb-1">
                    Ubicación
                  </h4>
                  <p className="font-['Inter'] text-xs text-gray-600 dark:text-gray-400 leading-relaxed">
                  {contactInfo.location}
                  </p>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <div className="w-10 h-10 rounded-xl bg-[#0F5132]/10 dark:bg-[#D4A574]/10 flex items-center justify-center flex-shrink-0">
                  <Phone className="w-5 h-5 text-[#0F5132] dark:text-[#D4A574]" />
                </div>
                <div>
                  <h4 className="font-['Montserrat'] font-semibold text-[#0F5132] dark:text-[#D4A574] text-xs uppercase tracking-wider mb-1">
                    Teléfono
                  </h4>
                  <p className="font-['Inter'] text-xs text-gray-600 dark:text-gray-400">
                    {contactInfo.phone}
                  </p>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <div className="w-10 h-10 rounded-xl bg-[#0F5132]/10 dark:bg-[#D4A574]/10 flex items-center justify-center flex-shrink-0">
                  <Mail className="w-5 h-5 text-[#0F5132] dark:text-[#D4A574]" />
                </div>
                <div>
                  <h4 className="font-['Montserrat'] font-semibold text-[#0F5132] dark:text-[#D4A574] text-xs uppercase tracking-wider mb-1">
                    Correo
                  </h4>
                  <p className="font-['Inter'] text-xs text-gray-600 dark:text-gray-400">
                    {contactInfo.email}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Redes sociales (Derecha - 50%) */}
          <div className="md:col-span-6 border-t md:border-t-0 md:border-l border-gray-150 dark:border-gray-800 pt-6 md:pt-0 md:pl-8 space-y-6">
            <h3 className="font-['Montserrat'] font-bold text-[#0F5132] dark:text-[#D4A574] text-xl">
              Síguenos en nuestras redes sociales
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              <a
                href={contactInfo.facebookUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 p-2 bg-[#0F5132]/5 dark:bg-[#D4A574]/5 hover:bg-[#0F5132]/10 dark:hover:bg-[#D4A574]/10 rounded-xl transition-all duration-300 group"
              >
                <div className="w-8 h-8 rounded-lg bg-[#0F5132]/15 dark:bg-[#D4A574]/20 flex items-center justify-center text-[#0F5132] dark:text-[#D4A574] group-hover:bg-[#D4A574] group-hover:text-white transition-all">
                  <Facebook className="w-4 h-4" />
                </div>
                <span className="font-['Inter'] text-xs font-semibold text-gray-700 dark:text-gray-300 group-hover:text-[#0F5132] dark:group-hover:text-[#D4A574] transition-colors">
                  Facebook
                </span>
              </a>
              <a
                href={contactInfo.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 p-2 bg-[#0F5132]/5 dark:bg-[#D4A574]/5 hover:bg-[#0F5132]/10 dark:hover:bg-[#D4A574]/10 rounded-xl transition-all duration-300 group"
              >
                <div className="w-8 h-8 rounded-lg bg-[#0F5132]/15 dark:bg-[#D4A574]/20 flex items-center justify-center text-[#0F5132] dark:text-[#D4A574] group-hover:bg-[#D4A574] group-hover:text-white transition-all">
                  <Instagram className="w-4 h-4" />
                </div>
                <span className="font-['Inter'] text-xs font-semibold text-gray-700 dark:text-gray-300 group-hover:text-[#0F5132] dark:group-hover:text-[#D4A574] transition-colors">
                  Instagram
                </span>
              </a>
              <a
                href={contactInfo.youtubeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 p-2 bg-[#0F5132]/5 dark:bg-[#D4A574]/5 hover:bg-[#0F5132]/10 dark:hover:bg-[#D4A574]/10 rounded-xl transition-all duration-300 group"
              >
                <div className="w-8 h-8 rounded-lg bg-[#0F5132]/15 dark:bg-[#D4A574]/20 flex items-center justify-center text-[#0F5132] dark:text-[#D4A574] group-hover:bg-[#D4A574] group-hover:text-white transition-all">
                  <Youtube className="w-4 h-4" />
                </div>
                <span className="font-['Inter'] text-xs font-semibold text-gray-700 dark:text-gray-300 group-hover:text-[#0F5132] dark:group-hover:text-[#D4A574] transition-colors">
                  YouTube
                </span>
              </a>
              <a
                href={contactInfo.tiktokUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 p-2 bg-[#0F5132]/5 dark:bg-[#D4A574]/5 hover:bg-[#0F5132]/10 dark:hover:bg-[#D4A574]/10 rounded-xl transition-all duration-300 group"
              >
                <div className="w-8 h-8 rounded-lg bg-[#0F5132]/15 dark:bg-[#D4A574]/20 flex items-center justify-center text-[#0F5132] dark:text-[#D4A574] group-hover:bg-[#D4A574] group-hover:text-white transition-all">
                  <Video className="w-4 h-4" />
                </div>
                <span className="font-['Inter'] text-xs font-semibold text-gray-700 dark:text-gray-300 group-hover:text-[#0F5132] dark:group-hover:text-[#D4A574] transition-colors">
                  TikTok
                </span>
              </a>
              <a
                href={buildWhatsAppUrl(whatsappMessages.general)}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 p-2 bg-[#0F5132]/5 dark:bg-[#D4A574]/5 hover:bg-[#0F5132]/10 dark:hover:bg-[#D4A574]/10 rounded-xl transition-all duration-300 group"
              >
                <div className="w-8 h-8 rounded-lg bg-[#0F5132]/15 dark:bg-[#D4A574]/20 flex items-center justify-center text-[#0F5132] dark:text-[#D4A574] group-hover:bg-[#D4A574] group-hover:text-white transition-all">
                  <MessageCircle className="w-4 h-4" />
                </div>
                <span className="font-['Inter'] text-xs font-semibold text-gray-700 dark:text-gray-300 group-hover:text-[#0F5132] dark:group-hover:text-[#D4A574] transition-colors">
                  WhatsApp
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
