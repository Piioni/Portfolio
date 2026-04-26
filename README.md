# Portfolio (Nuxt 4)

Portafolio personal migrado desde React a **Nuxt 4** con arquitectura por capas de UI y contenido en **@nuxt/content**.

## Stack

- Nuxt 4
- Vue 3 + TypeScript
- Tailwind CSS v4
- @nuxt/content
- @nuxtjs/color-mode
- Vitest

## Arquitectura

```txt
app/
  components/
    base/        # primitives reutilizables
    compound/    # composiciones del dominio portfolio
    sections/    # secciones de páginas
  composables/   # lógica compartida (tema y contenido)
  layouts/
  pages/
  types/
  utils/

content/
  projects/      # markdown de proyectos
  posts/         # markdown de artículos
```

## Scripts

```bash
bun install
bun run dev
bun run lint
bun run typecheck
bun run test
```

> Nota: No se ejecuta build en el flujo diario de cambios.

## Convenciones

- Componentes `base`: sin lógica de dominio.
- Componentes `compound`: combinan primitives para entidades del portfolio.
- `pages/`: composición final + SEO con `useSeoMeta`.
- `content.config.ts`: schemas estrictos (slug kebab-case, URLs válidas, fecha `YYYY-MM-DD`).
