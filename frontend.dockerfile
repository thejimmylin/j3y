# Use node as the base image we build on.
FROM node AS builder

# Use `/app` as the directory we work in. This is not a special path though,
# you just don't want everything created in the root ('/') directory.
WORKDIR /app

# Install all the packages, with package management files.
COPY package.json package-lock.json ./
RUN npm ci

# Then, Copy all the other files.
COPY . ./
# Build
RUN npm run build

# Now, we use Nginx as the base image we build on.
# We can copy all the files we got from `npm run build` during previous build.
FROM nginx
COPY --from=builder /app/build /usr/share/nginx/html
CMD ["nginx", "-g", "daemon off;"]