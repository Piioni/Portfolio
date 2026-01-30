# ---- Development image ----
FROM oven/bun:1.3.8 AS dev
WORKDIR /app
COPY package.json bun.lock* ./
RUN rm -rf node_modules && bun install
COPY . .
EXPOSE 5173
CMD ["bun", "run", "dev"]

# ---- Production build ----
FROM oven/bun:1.3.8 AS build
WORKDIR /app
COPY . .
RUN bun install --production=false && bun run build

# ---- Production image ----
FROM oven/bun:1.3.8 AS prod
WORKDIR /app
COPY --from=build /app/dist ./dist
COPY --from=build /app/package.json ./package.json
COPY --from=build /app/bun.lockb ./bun.lockb
RUN bun install --production
EXPOSE 4173
CMD ["bun", "run", "preview"]
