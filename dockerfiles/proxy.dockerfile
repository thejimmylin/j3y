# Use official Nginx base image to serve. The `alpine` version make the container smaller.
# https://hub.docker.com/_/nginx
FROM nginx:alpine

# Run Nginx service.
CMD nginx -g "daemon off;"