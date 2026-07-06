# Análisis de Tecnologías - UTOMWEB

Este documento presenta un análisis detallado del stack tecnológico, dependencias y arquitectura del frontend para la landing page de la **Universidad Tecnológica del Oriente de Michoacán (UTOM)**.

---

## 🚀 Tecnologías Core y Configuración de Construcción

*   **React (v18.3.1)**: Biblioteca principal para la construcción de la interfaz de usuario basada en componentes.
*   **TypeScript**: Superconjunto de JavaScript que aporta tipado estático, mejorando la robustez y mantenibilidad del código.
*   **Vite (v6.3.5)**: Herramienta de construcción y servidor de desarrollo ultrarrápido que optimiza el empaquetado de producción y ofrece reemplazo de módulos en caliente (HMR).
*   **PNPM**: Gestor de paquetes eficiente utilizado para el control y la instalación rápida de dependencias.

---

## 🎨 Diseño, Estilado y Componentes UI

El proyecto destaca por usar un sistema híbrido que combina la flexibilidad de **Shadcn UI** con componentes de **Material UI (MUI)**:

### 1. Sistema de Estilos y Utilidades
*   **Tailwind CSS (v4.1.12)**: Framework CSS orientado a utilidades usado para estructurar el diseño visual de forma ágil y responsiva.
*   **@tailwindcss/vite**: Integración oficial de Tailwind v4 en el proceso de compilación de Vite.
*   **Clsx & Tailwind-merge**: Utilidades para condicionales de clases y fusión inteligente de clases de Tailwind evitando conflictos de especificidad (encapsulados en `src/app/components/ui/utils.ts`).

### 2. Componentes Base y Estructuras (Shadcn UI / Radix)
Se utiliza una amplia gama de primitivas de **Radix UI** (componentes sin estilo y accesibles) para construir componentes personalizados y consistentes:
*   `Accordion`, `Alert`, `AlertDialog`, `AspectRatio`, `Avatar`, `Badge`, `Breadcrumb`, `Button`, `Calendar`, `Card`, `Checkbox`, `Collapsible`, `ContextMenu`, `Dialog`, `Drawer` (`vaul`), `DropdownMenu`, `HoverCard`, `Label`, `Menubar`, `NavigationMenu`, `Popover`, `Progress`, `RadioGroup`, `ScrollArea`, `Select`, `Separator`, `Sheet`, `Sidebar`, `Slider`, `Switch`, `Tabs`, `Table`, `Tooltip`, entre otros.

### 3. Componentes Material UI (MUI)
*   **@mui/material (v7.3.5) & @mui/icons-material**: Utilizados adicionalmente para complementar el set de componentes o iconos interactivos.
*   **Emotion (@emotion/react & @emotion/styled)**: Motor de estilos en JS requerido por MUI.

---

## 🎬 Animaciones y Efectos Visuales

*   **Motion (v12.23.24)** (antes Framer Motion): Biblioteca principal para añadir transiciones, microinteracciones y animaciones fluidas que mejoran la experiencia de usuario.
*   **Canvas-confetti (v1.9.4)**: Utilizada para celebrar acciones del usuario con animaciones de confeti.
*   **Tw-animate-css**: Soporte para animaciones CSS predefinidas integradas con Tailwind.

---

## 📦 Bibliotecas Especializadas e Integraciones

*   **Recharts (v2.15.2)**: Librería basada en componentes React para la creación y visualización de gráficos estadísticos interactivos.
*   **React Hook Form (v7.55.0)**: Gestión eficiente del estado y validación de formularios.
*   **Sonner (v2.0.3)**: Librería moderna de notificaciones toast (alertas emergentes elegantes).
*   **Embla Carousel React & React Slick**: Motores para carruseles, sliders y galerías de imágenes (como la sección de noticias o testimonios).
*   **React DnD & React DnD HTML5 Backend**: Framework para implementar drag-and-drop (arrastrar y soltar) en caso de interfaces interactivas avanzadas.
*   **React Resizable Panels**: Soporte para paneles con tamaños ajustables por el usuario.
*   **React Responsive Masonry**: Layouts en cuadrícula fluida estilo Pinterest para noticias o galerías de fotos.
*   **Lucide React**: Biblioteca de iconos vectoriales consistentes y modernos.
*   **Date-fns & React Day Picker**: Herramientas para formatear fechas y seleccionar días en calendarios integrados.
