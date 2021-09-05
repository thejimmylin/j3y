FROM node:lts AS installer
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm ci

FROM node:lts-alpine AS runner
WORKDIR /app

COPY --from=installer /app/node_modules ./node_modules
COPY . .

EXPOSE 3000

CMD ["npm", "run", "dev"]
