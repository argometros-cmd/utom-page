# Universidad Tecnológica del Oriente de Michoacán

Este es el repositorio de la página de inicio (Landing Page) para la Universidad Tecnológica del Oriente de Michoacán (UTOM). El proyecto cuenta con un diseño premium, totalmente interactivo y adaptado para dispositivos móviles.

## 🚀 Tecnologías Principales

- **React 18** + **TypeScript**
- **Vite 6** (Servidor de desarrollo y construcción)
- **Tailwind CSS v4** (Estilos y maquetación interactiva)
- **Radix UI** (Componentes de interfaz accesibles y personalizables)
- **Motion** (Librería de animaciones fluidas)

## 🛠️ Desarrollo Local

1. Instala las dependencias del proyecto:

   ```bash
   pnpm install
   # o bien con npm:
   npm install
   ```

2. Inicia el servidor de desarrollo:

   ```bash
   npm run dev
   ```

3. Construye el sitio para producción:
   ```bash
   npm run build
   ```

## 🔌 Supabase

El frontend ya queda listo para conectar con Supabase usando variables de entorno.

1. Crea un archivo `.env.local` basado en `.env.example`.
2. Define estas variables:

   ```bash
   VITE_SUPABASE_URL=https://gnzneytwugcebhaxtzem.supabase.co
   VITE_SUPABASE_ANON_KEY=tu_anon_key
   ```

3. Usa estos helpers desde tu código:

   ```ts
   import { supabase } from './lib/supabase';
   import { supabaseRestFetch } from './lib/supabaseRest';
   ```

Nota: en el frontend solo debe usarse la `anon key`. No expongas la `service_role key` en Vite.

## 📁 Listar carpetas de Storage

Si tu bucket público tiene carpetas dentro de carpetas, usa el helper recursivo:

```ts
import { listStorageFolder } from './lib/storage';

const items = await listStorageFolder('nombre-del-bucket', 'carpeta-equis');
```

Eso devuelve un árbol con:

- carpetas como `{ type: 'folder', children: [...] }`
- archivos como `{ type: 'file', publicUrl: '...' }`

Si quieres listar desde la raíz del bucket, pasa `''` como carpeta:

```ts
const rootItems = await listStorageFolder('nombre-del-bucket', '');
```
