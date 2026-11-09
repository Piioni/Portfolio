---
title: VeriTix
slug: veritix
description: Concert ticketing platform built by a team of two, with a Nuxt 4 frontend and a NestJS API.
technologies:
  - id: nuxt
    label: Nuxt
  - id: nestjs
    label: NestJS
  - id: typescript
    label: TypeScript
  - id: tailwindcss
    label: TailwindCSS
  - id: postgresql
    label: PostgreSQL
  - id: docker
    label: Docker
githubUrl: https://github.com/Piioni/VeriTix
featured: true
order: 1
---

Concert ticketing platform with public event discovery, checkout, ticket delivery, QR validation at the door and a backoffice. We built it as a team of two: I built the Nuxt 4 frontend and my teammate built the NestJS API.

What I built:

- The whole frontend: a public catalog of events, artists and venues with filters, ticket purchase, the buyer's account, and a backoffice with a sales dashboard and live access control
- A Nitro server layer that proxies the API, forwarding cookies and auth headers, normalizing backend errors and rewriting session cookie paths
- A Nitro cache for the public catalog, with per-endpoint policies and an in-memory store
- The frontend test suite, with Vitest and Nuxt tests, and the project documentation

The original repository belongs to my teammate: [ErickJoelQuispe/VeriTix](https://github.com/ErickJoelQuispe/VeriTix).
