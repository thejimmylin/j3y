import Link from "next/link";

const Post1 = () => {
  return (
    <>
      {/* h1 */}
      <div className="m-4 text-4xl font-medium">How to create a docker image?</div>
      {/* ul */}
      <ol className="m-4 list-decimal">
        <li className="m-4">
          <code className="font-code bg-yellow-200 dark:bg-gray-800 rounded-sm px-0.5 -mx-0.5">
            cd
          </code>{" "}
          to a directory you like.
        </li>
        <li className="m-4">
          Create a file{" "}
          <code className="font-code bg-yellow-200 dark:bg-gray-800 rounded-sm px-0.5 -mx-0.5">
            Dockerfile
          </code>{" "}
          or what you like. Say, it is a image about web, you can name it{" "}
          <code className="font-code bg-yellow-200 dark:bg-gray-800 rounded-sm px-0.5 -mx-0.5">
            web.dockerfile
          </code>
          .
        </li>
        <li className="m-4">
          A{" "}
          <code className="font-code bg-yellow-200 dark:bg-gray-800 rounded-sm px-0.5 -mx-0.5">
            Dockerfile
          </code>{" "}
          is a blueprint about a docker image. Now we need to config it, describing what
          we want the image to be. To learn more about how to config a{" "}
          <code className="font-code bg-yellow-200 dark:bg-gray-800 rounded-sm px-0.5 -mx-0.5">
            Dockerfile
          </code>{" "}
          , you may want to see:{" "}
          <Link href="/posts/2">
            <a className="underline text-pencil hover:text-ink dark:text-moonlight dark:hover:text-light">
              how to config a Dockerfile?
            </a>
          </Link>
        </li>
        <li className="m-4">
          Build the image with the finished Dockerfile by these commands:
          <pre className="-mx-4 my-4 p-4 bg-yellow-200 dark:bg-gray-800 rounded-sm">
            <code className="font-code">docker build .</code>
          </pre>
          If you use the custom file name, like web.dockerfile:{" "}
          <pre className="-mx-4 my-4 p-4 bg-yellow-200 dark:bg-gray-800 rounded-sm">
            <code className="font-code">docker build -f web.dockerfile .</code>
          </pre>
        </li>
        <li className="m-4">
          If everything is fine, your image would be created. You may want to use these
          commands to check it:{" "}
          <pre className="-mx-4 my-4 p-4 bg-yellow-200 dark:bg-gray-800 rounded-sm">
            <code className="font-code">docker image ls</code>
          </pre>
        </li>
      </ol>
    </>
  );
};

export default Post1;
