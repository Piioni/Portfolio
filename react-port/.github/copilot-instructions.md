# Copilot Instructions for Portfolio-ts

## Project Overview

This is a modern, minimalist portfolio website built with **React 19 + TypeScript + Vite + Tailwind CSS v4**. It showcases projects, experience, skills, and interests with a responsive dark/light theme toggle.

### Key Technologies

- **React 19** with TSX components
- **TypeScript** for type safety
- **Vite** as the build tool and dev server
- **Tailwind CSS v4** with custom theme variables
- **React Router v7** for client-side navigation
- **React Icons** for SVG icons (SimpleIcons prefix `Si*` and FontAwesome `Fa*`)

## Architecture & Data Flow

### Layered Component Structure

The project uses a **4-layer component hierarchy**, each with distinct responsibilities:

```
data/*.ts (content source)
    ↓
sections/* (import & organize data)
    ↓
compound/* (combine UI primitives + data)
    ↓
ui/* (basic building blocks)
```

- **`ui/`** - Generic primitives: `Button`, `Container`, `Bubble`, `Avatar`, `Badge`, `Card`
- **`compound/`** - Portfolio-specific combos: `SkillCard`, `ProjectCard`, `ExperienceCard`, `InterestTag`
- **`sections/`** - Full page sections: `HeroSection`, `SkillsSection`, `ExperienceSection`, `ProjectsPreview`, `InterestsSection`
- **`layout/`** - Global structure: `Layout`, `Navbar`, `Footer`, `ThemeToggle`

### Data Flow

All portfolio content lives in `src/data/`:

- `skills.ts` - Organized by category (frontend, backend, database, devtools, os)
- `projects.ts` - Featured projects with metadata
- `experiences.ts` - Work history with dates and descriptions
- `interests.ts` - Hobbies/interests with emojis
- `socials.ts` - Social media links
- `navigation.ts` - Navbar menu items

**Key pattern**: Data files export readonly constants → sections import these → sections pass to compound components → compound renders via UI primitives.

### Routing Configuration

Routes configured in [src/App.tsx](src/App.tsx#L27-L51):

- `/` - Home page (eager loaded)
- `/projects` - Projects page (lazy loaded)
- `/blog` - Blog page (lazy loaded)

Base path changes based on environment: `/Portfolio` in production, `/` in development (set in `vite.config.ts`).

## Styling & Theme System

### Theme Architecture

Tailwind v4 custom theme in [src/index.css](src/index.css#L3):

```css
--color-accent-lavender-dark: oklch(0.72 0.12 290) --color-background-dark: #1e1e1e --color-surface-dark: #252525
    --color-bubble-dark: rgba(37, 37, 37, 0.92);
```

Light mode uses the same variables with `.dark` custom variant. **Never hardcode colors** - use CSS custom properties defined in `@theme`.

### Common Pattern: `cn()` Utility

Import from `@/lib/utils.ts`. Merges Tailwind classes with proper conflict resolution:

```tsx
className={cn('p-4 text-lg', isActive && 'bg-accent-lavender', disabled && 'opacity-50')}
```

### Bubble Component

The signature container of this portfolio. Three variants:

- `variant="default"` - Standard padding (skills, content)
- `variant="hero"` - Larger padding for intro sections
- `variant="card"` - Flex column layout for card-like content

Optional props: `hoverable` (adds scale + glow on hover), `as` (element tag: div/article/section).

## Development Workflow

### Local Setup

```bash
bun install       # Install dependencies (uses Bun runtime)
bun run dev       # Start Vite dev server (http://localhost:5173)
bun run build     # TypeScript + Vite production build
bun run lint      # ESLint check
```

### Adding Content

1. **New skill**: Add to `data/skills.ts` under the appropriate `SKILL_GROUPS` category. Use icon names from `react-icons` (format: `SiTypescript`, `FaJava`).
2. **New project**: Add to `data/projects.ts` with type `Project` from `types/project.ts`.
3. **New experience**: Add to `data/experiences.ts` using date format `"YYYY-MM"`.
4. **New nav link**: Add to `data/navigation.ts`.

### File Import Paths

Use the `@` alias (mapped to `src/` in `vite.config.ts`):

```tsx
import { SKILL_GROUPS } from '@/data';
import { SkillCard } from '@/components/compound';
import { cn } from '@/lib/utils';
```

## Key Patterns & Conventions

### Type Definitions

All types live in `src/types/`. Import them in data and components:

```tsx
import type { Skill, Project, Experience } from '@/types';
```

### React Hooks

- **`useTheme()`** from `@/hooks/useTheme.ts` - Returns `{ theme, resolvedTheme, setTheme, toggleTheme }`. Used by `ThemeToggle` button.
- Theme is persisted to localStorage with key `'theme'`.

### Icon Usage

Import from `react-icons`:

```tsx
import { SiReact, SiTypescript, FaJava } from 'react-icons/si'; // SimpleIcons
import { FaGithub } from 'react-icons/fa'; // FontAwesome
```

Icons are referenced by name string in data (e.g., `icon: 'SiReact'`) and resolved in [src/lib/iconConfig.ts](src/lib/iconConfig.ts).

### Date Handling

Use helper functions from `@/lib/utils.ts`:

- `formatDate(dateString)` - Converts `"2024-11"` to `"Nov 2024"`
- `formatDateRange(startDate, endDate?)` - Returns `"Nov 2024 - Present"` or `"Nov 2024 - Jan 2025"`

## Critical Files to Reference

- **Architecture overview**: [docs/ARCHITECTURE.md](docs/ARCHITECTURE.md) - Comprehensive beginner-friendly guide
- **Component layer structure**: [src/components](src/components) organized as ui/ → compound/ → sections/ → layout/
- **Global styles & theme**: [src/index.css](src/index.css) - All custom Tailwind theme variables
- **Router config**: [src/App.tsx](src/App.tsx) - Route definitions and lazy loading
- **Type definitions**: [src/types](src/types) - Central source of truth for all data shapes

## Things to Know

- The monospace font is defined via CSS variable `--font-mono` and applied globally via `font-mono` class.
- Responsive design uses Tailwind breakpoints (mobile-first approach).
- Dark mode is applied via `.dark` class on the root HTML element (handled by `useTheme` hook).
- The background grid pattern is a fixed element behind all content (`.background-pattern`).
- No CSS-in-JS or external UI libraries - pure Tailwind for styling.
