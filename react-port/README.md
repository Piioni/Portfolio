# Portafolio personal

Este repositorio contiene un sitio web de portafolio personal construido con React, TypeScript y Vite.
Está pensado para mostrar proyectos, experiencia laboral, habilidades e intereses, y sirve como plantilla
ligera para desarrollar y desplegar una web personal moderna.

Características principales:

- Diseño responsivo y componentes reutilizables.
- Secciones para proyectos, experiencia, habilidades e intereses.
- Tema claro/oscuro con guardado de preferencia.

Tecnologías:

- React (TSX)
- TypeScript
- Vite (dev server rápido y bundling)
- CSS moderno (estilos en `src/index.css`)

# Estructura destacada del proyecto:

- `src/` - código fuente de la app
    - `components/` - componentes UI y secciones
    - `data/` - contenido estático (proyectos, skills, etc.)
    - `pages/` - páginas principales
    - `hooks/` - hooks personalizados (ej. `useTheme`)
- `public/` - assets estáticos
- `vite.config.ts`, `tsconfig.json`, `package.json` - configuración del proyecto

# Instalación y ejecución (local):

1. Instalar dependencias

    bun install

2. Iniciar servidor de desarrollo

    bun run dev

3. Generar build de producción

    bun run build

4. Previsualizar build localmente

    bun run preview
