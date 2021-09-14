# docker

This directory is about the Docker things. Here are some files/directoris you may be confused with:

## ./services

This directory is about Docker services. Basically, all the files are placed according to their location in the `docker-compose` tree. For example:

`services/<service_name>/Dockerfile` is the `Dockerfile` of `<service_name>`, and in the `docker-compose` tree it may be referenced like:

```
version: "3.9"

services:
    <service_name>:
    build:
        context: ../
        dockerfile: ./docker/services/<service_name>/Dockerfile
...
```

## ./systemd

This directory is about `systemd`, which we want to run our docker compose commands with to easily make them act like services in a Linux server. 

The files in `systemd` (except this `READEME.md` file) should be copied to `/etc/systemd` in the Linux server. That is to say, `systemd/system/<service_name>.service` should be copied to `/etc/systemd/system/<service_name>.service`, and now we can turn it into a service with commands `systemctl enable <service_name>.service`, which make it run automatically when the server starts up.

## ./*.yml

There's a good chance they're just some docker compose files with a different name.

## ./.env

It provides the environment variables those docker compose files needed.
