# The node official docker image doesn't provide a `:stable` version keyword.
# We just use the `:latest` for convenience.
# https://hub.docker.com/_/node
FROM node:latest AS builder

# We want to put our codes in `~/repos/{repo_name}`, but Dockerfile accepts only absolute path.
# Container usually run as `root` user. and root user's `~` path is `/root`.
ARG WORKDIR=/root/repos/j3y
WORKDIR ${WORKDIR}

COPY ./package.json ${WORKDIR}/package.json
COPY ./package-lock.json ${WORKDIR}/package-lock.json

RUN npm ci
COPY ./ ${WORKDIR}/
RUN npm run build

# Use official Nginx base image to serve. The `alpine` version make the container smaller.
# https://hub.docker.com/_/nginx
FROM nginx:alpine

# We need to declare `WORKDIR` again if we need it because this is a next-stage.
ARG WORKDIR=/root/repos/j3y

# Take files which we have built from previous stage with `npm run build` to serve.
COPY --from=builder ${WORKDIR}/build /usr/share/nginx/html

# Nginx config.
COPY ./docker/volumes/web/etc/nginx/sites-enabled/ /etc/nginx/sites-enabled/