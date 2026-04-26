---
title: Clean Component Boundaries in Frontend Projects
slug: clean-component-boundaries
description: A practical split between primitives, compound components, and sections for long-term maintainability.
publishedAt: 2026-03-14
tags:
  - Clean Architecture
  - Components
  - Vue
---

When every component is allowed to do everything, your codebase becomes fragile.

I use a three-level model:

1. **Base**: tiny reusable primitives
2. **Compound**: product-specific compositions
3. **Sections**: page-level feature slices

This keeps dependencies explicit and prevents style duplication.
