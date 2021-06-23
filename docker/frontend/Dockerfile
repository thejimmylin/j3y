# The node official docker image doesn't provide a `:stable` version keyword.
# We just use the `:latest` for convenience.
# https://hub.docker.com/_/node
FROM node:latest AS builder

# We want to put our codes in `/workdir`. This path is not anything special.
# We just don't want anything put in `/`.
WORKDIR /workdir

COPY package.json .
COPY package-lock.json .

RUN npm ci
# Docker like to `cache` during building. So we respectively copy packages file and others source code.
COPY . .
RUN npm run build

# Use official Nginx base image to serve. The `alpine` version make the container smaller.
# https://hub.docker.com/_/nginx
FROM nginx:alpine

# Take files which we have built from previous stage with `npm run build` to serve.
COPY --from=builder /workdir/build /usr/share/nginx/html
