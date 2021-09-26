FROM node:lts-alpine AS deps
# Check https://github.com/nodejs/docker-node#nodealpine to understand why libc6-compat might be needed.
RUN apk add --no-cache libc6-compat
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm ci

FROM node:lts-alpine AS builder
WORKDIR /app
COPY . .
COPY --from=deps /app/node_modules ./node_modules
RUN npm run build

FROM node:lts-alpine AS runner
WORKDIR /app

ENV NODE_ENV production

COPY --from=builder /app .

EXPOSE 3000

CMD ["npm", "start"]
