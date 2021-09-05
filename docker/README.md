# Docker

This directory is about all the Docker things of this project.

## The structure

`/Docker`: The root.
`/Docker/*.yml`: The Docker compose files.
`/Docker/<service_name>/Dockerfile`: The `Dockerfile` of `<service_name>`.
`/Docker/<service_name>/volumes`: The `volumes` of `<service_name>`.

## Container naming rules

I always name the container as `<image_name>`-`<role_name>` or `<image_name>`-`<role_name>`-`<env_suffix>`.

For example, if I use a `node` image to build a container acting as `web`. I will call it `node-web`, and if there are `dev` and `prod` versions. They would be `node-web-dev` and `node-web-prod` respectively.

I alse use `container_name` to prefix the container with the project name. So Docker and I would not be confused with `project1-node-web` and `project2-node-web`.

For example, the code snippet of docker-compose file about a node web server:

```
services:
  ...
  node-web:
    ...
    container_name: j3y-node-web
```

## Volume naming rules

I always name the Volume as `<image_name>`-`<folder_name>`.

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
