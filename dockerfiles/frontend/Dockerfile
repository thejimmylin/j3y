# The node official docker image doesn't provide a `:stable` version keyword.
# We just use the `:latest` for convenience.
# https://hub.docker.com/_/node
FROM node:latest AS builder

# We want to put our codes in `~/repos/{repo_name}`, but Dockerfile accepts only absolute path.
# Container usually run as `root` user. and root user's `~` path is `/root`.
WORKDIR /root/repos/j3y

COPY package.json .
COPY package-lock.json .

RUN npm ci
COPY . .
RUN npm run build

# Use official Nginx base image to serve. The `alpine` version make the container smaller.
# https://hub.docker.com/_/nginx
FROM nginx:alpine

# Take files which we have built from previous stage with `npm run build` to serve.
COPY --from=builder /root/repos/j3y/build /usr/share/nginx/html
