export const navigationLabels = {
  inicio: 'Inicio',
  conocenos: 'Conócenos',
  estudiantes: 'Estudiantes',
  docentes: 'Docentes',
  oferta: 'Oferta Educativa',
  transparencia: 'Transparencia',
  servicios: 'Servicios y Vinculación',
  contacto: 'Contáctanos',
} as const;

export const adminNavigationCategories = [
  { id: 'inicio', name: navigationLabels.inicio },
  { id: 'conocenos', name: navigationLabels.conocenos },
  { id: 'estudiantes', name: navigationLabels.estudiantes },
  { id: 'docentes', name: navigationLabels.docentes },
  { id: 'oferta', name: navigationLabels.oferta },
  { id: 'transparencia', name: navigationLabels.transparencia },
  { id: 'servicios', name: navigationLabels.servicios },
  { id: 'contacto', name: navigationLabels.contacto },
] as const;

export const transparencyYears = ['2022', '2023', '2024', '2025', '2026'] as const;
