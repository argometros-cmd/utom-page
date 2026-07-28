# Guía breve de migración a WordPress

Contexto actual:

- Frontend: Vercel
- Backend / datos / storage: Supabase

Objetivo:

- Evaluar una migración pragmática a WordPress sin romper SEO, contenido ni operación diaria.

## 1. Decisión arquitectónica primero

Antes de mover nada, define cuál de estas tres rutas quieres seguir:

### Opción A. WordPress monolítico

WordPress maneja:

- frontend
- panel de administración
- contenido
- formularios
- usuarios básicos
- medios

Conviene si:

- quieres que el sitio sea fácil de operar por personal no técnico
- el sitio es principalmente institucional, informativo o editorial
- quieres reducir complejidad operativa

Implicación:

- Vercel deja de ser la pieza principal
- Supabase puede desaparecer o quedar solo para funciones muy específicas

### Opción B. WordPress + Supabase

WordPress maneja:

- páginas
- contenido
- medios
- SEO

Supabase conserva:

- auth compleja
- base de datos operativa
- workflows propios
- storage si ya lo tienes bien integrado

Conviene si:

- ya tienes lógica de negocio en Supabase
- no quieres reescribir flujos internos
- el sitio público sí puede vivir en WordPress

Implicación:

- WordPress pasa a ser CMS y capa de publicación
- Supabase sigue como backend de negocio

### Opción C. WordPress headless

WordPress maneja:

- contenido
- medios
- panel editorial

Vercel sigue manejando:

- frontend
- performance edge
- despliegue moderno

Conviene si:

- quieres conservar la experiencia dev actual
- ya tienes frontend React sólido
- no quieres perder flexibilidad

Implicación:

- WordPress no reemplaza Vercel
- reemplaza el origen del contenido
- Supabase puede quedarse para datos y auth

## 2. Recomendación pragmática para tu caso

Si tu sitio actual es principalmente institucional, la ruta más segura suele ser:

1. migrar primero a WordPress como CMS
2. mantener Supabase temporalmente para lo que ya funciona
3. decidir después si el frontend queda en WordPress o se mantiene headless

Eso evita reescribir todo de una vez.

## 3. Proceso recomendado

### Fase 1. Inventario

Haz una lista exacta de:

- páginas públicas
- rutas actuales
- formularios
- galerías
- PDFs descargables
- contenido dinámico
- integraciones con Supabase
- SEO actual: titles, descriptions, slugs, sitemap, redirects

Resultado esperado:

- saber qué es solo contenido y qué es lógica real de aplicación

### Fase 2. Separar contenido de lógica

Clasifica cada módulo:

- contenido puro → WordPress
- archivos y medios → WordPress Media Library o storage externo
- autenticación / datos operativos → evaluar si siguen en Supabase
- paneles o flujos especiales → probablemente no migrarlos a WordPress de inicio

### Fase 3. Modelado en WordPress

Define en WordPress:

- páginas estáticas
- entradas si habrá noticias/blog
- custom post types si necesitas carreras, convocatorias, documentos, galerías, etc.
- taxonomías si necesitas clasificar contenido

Ejemplos útiles:

- `carreras`
- `documentos`
- `galerias`
- `noticias`

### Fase 4. Migración de contenido

Migra primero:

- textos
- imágenes
- PDFs
- metadata SEO

No migres aún:

- lógica personalizada
- integraciones delicadas
- autenticación avanzada

### Fase 5. Rehacer frontend

Aquí defines si vas por:

- theme WordPress clásico o block theme
- WordPress + page builder
- WordPress headless consumido desde Vercel

Recomendación:

- si el equipo editará mucho contenido sin soporte técnico constante, WordPress tradicional suele ser más barato de operar
- si quieres mantener control total del frontend, headless es mejor

### Fase 6. Redirecciones y SEO

Antes de publicar:

- conserva slugs importantes
- configura redirects 301 de URLs viejas a nuevas
- genera sitemap
- valida indexación
- revisa titles, descriptions, Open Graph y schema

### Fase 7. Corte gradual

Haz el cambio por etapas:

1. staging
2. validación funcional
3. validación SEO
4. publicación controlada
5. monitoreo 48–72 horas

## 4. Qué sí migrar a WordPress y qué no

### Sí conviene migrar

- páginas institucionales
- noticias
- convocatorias
- galerías
- documentos descargables
- formularios de contacto
- estructura SEO del sitio

### No conviene migrar de inmediato

- auth compleja
- dashboards internos
- workflows propios
- automatizaciones ya estables en Supabase
- lógica de datos que WordPress no mejora

## 5. Riesgos principales

- perder URLs y afectar SEO
- duplicar contenido durante transición
- rehacer lógica de Supabase innecesariamente
- instalar demasiados plugins
- mezclar WordPress como CMS con WordPress como app backend general

## 6. Estrategia recomendada para Supabase

Tienes tres alternativas:

### Alternativa 1. Retiro total de Supabase

Úsala solo si:

- el sitio es mayormente contenido
- no dependes de auth, RLS, storage o funciones complejas

### Alternativa 2. Convivencia WordPress + Supabase

La más razonable si ya tienes integración funcionando.

WordPress:

- contenido
- SEO
- medios
- panel editorial

Supabase:

- datos operativos
- auth
- storage existente
- procesos internos

### Alternativa 3. WordPress solo como CMS headless

Úsala si:

- quieres seguir desplegando en Vercel
- el frontend actual ya resuelve bien rendimiento y UX

## 7. Plugins útiles

Nota: evita instalar plugins por costumbre. Instala solo uno por necesidad y evita duplicar funciones.

### SEO

- Rank Math SEO
  - útil para metadatos, sitemap, schema y redirecciones básicas
  - WordPress.org: https://wordpress.org/plugins/seo-by-rank-math/

Alternativa:

- Yoast SEO
  - si prefieres una opción más conservadora y ampliamente conocida

### Backups y migración

- UpdraftPlus
  - útil para backups programados y migración/restauración
  - WordPress.org: https://wordpress.org/plugins/updraftplus/

### Seguridad

- Wordfence Security
  - firewall, escaneo y protección de login
  - WordPress.org: https://wordpress.org/plugins/wordfence/

Alternativa más ligera:

- Really Simple Security
  - útil si quieres endurecimiento básico, SSL y login protection con menos complejidad
  - WordPress.org: https://wordpress.org/plugins/really-simple-ssl/

### Formularios

- WPForms Lite
  - útil para contacto, solicitudes y formularios simples
  - WordPress.org: https://wordpress.org/plugins/wpforms-lite/

Si luego necesitas lógica más compleja, evalúa versión pro o alternativas más robustas.

### Caché / performance

- WP Super Cache
  - útil en instalaciones WordPress tradicionales
  - WordPress.org: https://wordpress.org/plugins/wp-super-cache/

Importante:

- si usas hosting administrado con caché propia, primero revisa si realmente lo necesitas
- en headless no aplica igual

### Campos personalizados / modelado de contenido

- Advanced Custom Fields (ACF)
  - útil para modelar carreras, documentos, galerías, bloques administrativos, etc.

### Redirecciones

- Redirection
  - útil para 301, 404 y control de cambios de URL

### Medios

- Enable Media Replace
  - útil para reemplazar PDFs e imágenes sin romper URLs

### Optimización de imágenes

- ShortPixel o Imagify
  - útil si el sitio tendrá mucha imagen y necesitas compresión automática

## 8. Stack mínimo recomendado

Si quieres una base simple y mantenible:

- Rank Math SEO
- UpdraftPlus
- Wordfence o Really Simple Security
- WPForms Lite
- ACF
- Redirection
- Enable Media Replace

## 9. Orden sugerido de implementación

1. levantar WordPress en staging
2. instalar theme base
3. instalar plugins mínimos
4. modelar tipos de contenido
5. migrar páginas y documentos
6. mapear URLs actuales
7. configurar SEO y redirects
8. probar performance
9. publicar

## 10. Criterio de decisión final

Si el sitio será principalmente:

- institucional
- editable por administrativos
- orientado a contenido

WordPress tiene sentido.

Si el sitio depende mucho de:

- interfaces muy personalizadas
- estados complejos
- auth avanzada
- flujos de datos en tiempo real

entonces no conviene “migrar todo” a WordPress. Conviene usar WordPress solo como CMS o no mover esa parte.

## 11. Recomendación final

Para reducir riesgo:

- no reemplaces Vercel + Supabase en un solo movimiento
- migra primero contenido y SEO
- conserva Supabase mientras validas qué lógica realmente necesita WordPress
- solo después decide si el frontend también cambia

## Fuentes consultadas para plugins

- Rank Math SEO: https://wordpress.org/plugins/seo-by-rank-math/
- Wordfence Security: https://wordpress.org/plugins/wordfence/
- UpdraftPlus: https://wordpress.org/plugins/updraftplus/
- WPForms Lite: https://wordpress.org/plugins/wpforms-lite/
- Really Simple Security: https://wordpress.org/plugins/really-simple-ssl/
- WP Super Cache: https://wordpress.org/plugins/wp-super-cache/
