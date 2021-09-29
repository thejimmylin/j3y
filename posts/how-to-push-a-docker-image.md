---
title: How to push a Docker image?
createdBy: Jimmy Lin
createdAt: 2021-08-02 17:10
---

# How to push a Docker image?

1. After you create a docker image, you may want to store it on the docker hub.
2. Before you push it, you need to name your image with the right image name & tag name.
3. To check you docker image name & tag name, you may want:

   ```bash
   docker image ls
   ```

   and you may see something like this:

   ```bash
   REPOSITORY   TAG       IMAGE ID       CREATED          SIZE
   <none>       <none>    a09c98bebda5   15 minutes ago   729MB
   ```

4. Give your docker image a image name/tag:

   ```bash
   docker image tag <image_id> <image_name>:<tag_name>
   ```

   For example:

   ```bash
   docker image tag a09c98bebda5 j3ydocker/frontend:latest
   # to check it again
   docker image ls

   REPOSITORY           TAG       IMAGE ID       CREATED          SIZE
   j3ydocker/frontend   latest    a09c98bebda5   39 minutes ago   729MB
   ```

5. The `<image_name>` is also used to point to the correspond repository when you do the push. If your docker account is `j3ydocker` you must name your image a name starting with `j3ydocker/.`
6. Now we can push it, just do:

   ```bash
   docker image push j3ydocker/frontend
   ```
