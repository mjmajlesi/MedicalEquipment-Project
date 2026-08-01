FROM node:22-alpine AS dependencies

WORKDIR /app

COPY package.json package-lock.json ./

RUN npm ci


FROM node:22-alpine AS builder

WORKDIR /app

COPY --from=dependencies /app/node_modules ./node_modules
COPY . .

ARG BACKEND_INTERNAL_URL=http://127.0.0.1:8000
ENV BACKEND_INTERNAL_URL=${BACKEND_INTERNAL_URL}

ARG NEXT_PUBLIC_API_BASE_URL=/backend-api
ENV NEXT_PUBLIC_API_BASE_URL=${NEXT_PUBLIC_API_BASE_URL}

RUN npm run build


FROM node:22-alpine AS runner

ENV NODE_ENV=production

COPY --from=builder /app/package.json ./package.json
COPY --from=builder /app/package-lock.json ./package-lock.json
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public
COPY --from=builder /app/next.config.ts ./next.config.ts

EXPOSE 3000

CMD ["npm", "run", "start"]