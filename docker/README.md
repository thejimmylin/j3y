# services

This directory is about docker services.

## The structure

The structure of this directory:

1. `README.md`: This file.
2. `docker-compose.*.yml`: The `docker-compose` files.
3. `<service_name>/Dockerfile`: The `Dockerfile` of `<service_name>`.
4. `<service_name>/volumes`: The `volumes` of `<service_name>`.

## service naming rules

They are always:

1. `<image_name>`-`<role_name>`
2. `<image_name>`-`<role_name>`-`<environment>`

`environment` are some short string standing for a environment the container works in, like `prod` or `div`.

For example, if I use a `node` image to build a container acting as `web` and working in development environment. I will call it `node-web-dev`.

A service's `container_name` is always the service name prefixed with `<project_name>`. Say, in a project named `j3y`, there could be a code snippet in a `docker-compose.*.yml` like this:

```
services:
  ...
  node-web:
    ...
    container_name: j3y-node-web
```

## Volume naming rules

They are always `<container_name>`-`<folder_name>`, and its `name` would be prefixed with `<project_name>`.

For example, a code snippet of `docker-compose.*.yml` file about PostgreSQL could be like:

```
services:
  ...
  postgres-db:
    ...
    container_name: j3y-postgres-db
    ...
    volumes:
      - postgres-data:/var/lib/postgresql/data

volumes:
  postgres-data:
    name: j3y-postgres-data
```
