const Post1 = () => {
  return (
    <>
      {/* h1 */}
      <h1 className="m-4 text-4xl font-medium">How to config a Dockerfile?</h1>
      {/* p */}
      <p className="m-4">Here are some examples:</p>
      {/* ul */}
      <ol className="m-4 list-decimal">
        <li className="m-4">
          Ubuntu 20.04 with Nodejs v14 for running{" "}
          <code className="font-code bg-yellow-200 dark:bg-gray-800 rounded-sm px-0.5 -mx-0.5">
            npm run build
          </code>
          .
          <pre className="-mx-4 my-4 p-4 bg-yellow-200 dark:bg-gray-800 rounded-sm whitespace-pre break-words decoration-clone">
            <code className="font-code">
              # Use Ubuntu 20.04 as the base image we build on.
              <br />
              FROM ubuntu:20.04
              <br />
              <br/>
              # Use `/app` as the directory we work in. This is not a special path
              though,
              <br />
              # you just don't want everything created in the root ('/') directory.
              <br />
              WORKDIR /app
              <br />
              <br />
              # You want to update `apt` first to install the latest packages with it.
              <br />
              RUN apt update
              <br />
              <br />
              # Without doing the `curl` tasks before, you can only install Node.js
              v10.19.0 with `apt`.
              <br />
              # https://github.com/nodesource/distributions#installation-instructions
              <br />
              RUN \<br />
              apt install -y curl && \<br />
              curl -fsSL https://deb.nodesource.com/setup_14.x | bash - && \<br />
              apt install -y nodejs
              <br />
              <br />
              # Install all the packages, with package management files.
              <br />
              COPY package.json package-lock.json ./
              <br />
              RUN npm ci
              <br />
              <br />
              # Then, Copy all the other files.
              <br />
              COPY . ./
              <br />
              # Build
              <br />
              RUN npm run build
              <br />
            </code>
          </pre>
        </li>
      </ol>
    </>
  );
};

export default Post1;
