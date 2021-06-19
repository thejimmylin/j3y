# Use Ubuntu 20.04 as the base image we build on.
FROM ubuntu:20.04

# Use `/app` as the directory we work in. This is not a special path though,
# you just don't want everything created in the root ('/') directory.
WORKDIR /app

# You want to update `apt` first to install the latest packages with it.
RUN apt update

# Without doing the `curl` tasks before, you can only install Node.js v10.19.0 with `apt`.
# https://github.com/nodesource/distributions#installation-instructions
RUN \
    apt install -y curl && \
    curl -fsSL https://deb.nodesource.com/setup_14.x | bash - && \
    apt install -y nodejs

# To install npm packages with `npm ci`, we need to copy the package management files. 
COPY ./package.json ./package-lock.json ./
RUN npm ci

# Copy other files
COPY . ./
RUN npm run build

# Install Nginx without interactive.
RUN \
    export DEBIAN_FRONTEND=noninteractive && \
    apt install -y nginx
