import avatar from "../public/avatar-1440x1440.jpg";

const metadatas = [
  {
    slug: "about-me",
    title: "About me",
    subtitle:
      "I'm Jimmy. I love programming. I like to create things and programming gives me the chance to do so.",
    thumbnail: avatar,
    isDraft: false,
  },
  {
    slug: "ubuntu-db-odbc-issues",
    title: "Ubuntu DB ODBC issues",
    subtitle:
      "ODBC could be annoying, these article list out some ODBC issues I got.",
    thumbnail: null,
    isDraft: false,
  },
  {
    slug: "tar-things",
    title: "Tar things",
    subtitle: "",
    thumbnail: null,
    isDraft: true,
  },
  {
    slug: "install-docker-engine-on-a-ubuntu-2004",
    title: "Install Docker engine on a Ubuntu 20.04",
    subtitle:
      "You need docker engine to build docker image, run image as a container and so on.",
    thumbnail: null,
    isDraft: false,
  },
  {
    slug: "how-to-create-a-docker-image",
    title: "How to create a Docker image?",
    subtitle: "",
    thumbnail: null,
    isDraft: false,
  },
  {
    slug: "how-to-push-a-docker-image",
    title: "How to push a Docker image?",
    subtitle: "",
    thumbnail: null,
    isDraft: false,
  },
  {
    slug: "docker-image-with-nodejs-and-python",
    title: "Docker image with Node.js and Python",
    subtitle: "Sometimes you want to customize your own base image",
    thumbnail: null,
    isDraft: false,
  },
  {
    slug: "javascript-5-ways-to-define-a-function",
    title: "JavaScript 5 ways to define a function",
    subtitle: "",
    thumbnail: null,
    isDraft: false,
  },
  {
    slug: "typescript-function-annotations",
    title: "TypeScript Function Annotations",
    subtitle: "",
    thumbnail: null,
    isDraft: true,
  },
  {
    slug: "use-fira-code-in-vscode",
    title: "Use Fira Code in VSCode",
    subtitle: "",
    thumbnail: null,
    isDraft: false,
  },
  {
    slug: "the-development-tools-i-like",
    title: "The development tools I like",
    subtitle: "",
    thumbnail: null,
    isDraft: true,
  },
];

const metadataIncludes = (metadata, text) => {
  if (text === "") {
    return true;
  }
  if (metadata.title.toLowerCase().includes(text.toLowerCase())) {
    return true;
  }
  if (metadata.subtitle.toLowerCase().includes(text.toLowerCase())) {
    return true;
  }
  return false;
};

const getRelatedMetadatas = (metadatas, textSearched) => {
  return metadatas.filter((metadata) =>
    metadataIncludes(metadata, textSearched)
  );
};

export { metadatas, metadataIncludes, getRelatedMetadatas };
