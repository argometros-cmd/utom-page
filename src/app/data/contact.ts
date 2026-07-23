export const whatsappNumber = '524471508913';

export const buildWhatsAppUrl = (message: string) =>
  `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

export const whatsappMessages = {
  general: 'Hola, quiero información general sobre la UTOM.',
  admisiones: 'Hola, quiero información sobre el proceso de admisión.',
  tramites: 'Hola, necesito ayuda con mis trámites escolares.',
  tombot: 'Hola TomBot, necesito ayuda con información de la UTOM.',
} as const;

export const contactInfo = {
  location: 'Comunidad de Santa Rita S/N, Maravatío, Mich.',
  phone: '+52 (447) 150 8913',
  email: 'servicios_escolares@utom.edu.mx',
  whatsappNumber,
  whatsappUrl: `https://wa.me/${whatsappNumber}`,
  facebookUrl: 'https://www.facebook.com/UTOMMaravatio',
  instagramUrl: 'https://www.instagram.com/utom.maravatio/',
  youtubeUrl: 'https://www.youtube.com/channel/UC-THOVJvjCp6e14RGyABi_A',
  tiktokUrl: 'https://www.tiktok.com/@utom_maravatio',
} as const;
