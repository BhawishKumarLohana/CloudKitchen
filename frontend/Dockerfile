# ---------- deps ----------
FROM node:22.17.1-alpine AS deps
WORKDIR /app
COPY package*.json ./
RUN npm ci

# ---------- build ----------
FROM node:22.17.1-alpine AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .
ENV NEXT_TELEMETRY_DISABLED=1
RUN npm run build

# ---------- runtime ----------
FROM node:22.17.1-alpine AS runner
WORKDIR /app
ENV NODE_ENV=production
ENV NEXT_TELEMETRY_DISABLED=1

# run as non-root
RUN addgroup -S nodejs && adduser -S nextjs -G nodejs

# install prod deps only
COPY package*.json ./
RUN npm ci --omit=dev

# copy build artifacts
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public

EXPOSE 3000
ENV PORT=3000
USER nextjs
CMD ["npx", "next", "start"]
