# services

This directory is about docker services.

## The structure

`<service_name>/Dockerfile`: The `Dockerfile` of `<container_name>`.
`<container_name>/volumes`: The `volumes` of `<service_name>`.

## service naming rules

The names of container are always:

1. `<image_name>`-`<role_or_service_name>`
2. `<image_name>`-`<role_or_service_name>`-`<env_name>`

`env_name` are some short string standing for an environment the container working in, like "prod" or "dev".

For example, if I use a `node` image to build a container acting as `web`. I will call it `node-web`, and if there are `dev` and `prod` versions. They would be `node-web-dev` and `node-web-prod` respectively.

For example, the code snippet of docker-compose file about a node web server:

```
services:
  ...
  node-web:
    ...
    container_name: j3y-node-web
```

## container naming rules

Container name is always the service name prefixed with `<project_name>`.

1. `<project_name>`-`<image_name>`-`<role_or_service_name>`
2. `<project_name>`-`<image_name>`-`<role_or_service_name>`-`<env_name>`.

## Volume naming rules

I always name the Volume as `<container_name>`-`<folder_name>`.

For example, the snippet of docker-compose file about PostgreSQL:

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
