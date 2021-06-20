# Use official Nginx base image to serve. The `alpine` version make the container smaller.
# https://hub.docker.com/_/nginx
FROM nginx:alpine

# Nginx config.
COPY nginx.conf /etc/nginx/sites-enabled/nginx.conf

# Run Nginx service.
CMD nginx -g "daemon off;"