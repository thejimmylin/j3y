import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { bundleMDX } from "mdx-bundler";
import gfm from "remark-gfm";

const POSTS_PATH = path.join(process.cwd(), "markdown/posts");
const POST_EXTNAME = ".md";

const getFile = (fileName) => {
  return fs.readFileSync(path.join(POSTS_PATH, fileName));
};

const getAllPosts = () => {
  return fs
    .readdirSync(POSTS_PATH)
    .filter((fileName) => path.extname(fileName) === POST_EXTNAME)
    .map((fileName) => {
      const slug = path.basename(fileName, path.extname(fileName));
      const frontmatter = matter(getFile(fileName)).data;

      return {
        slug,
        frontmatter,
      };
    });
};

const getOnePost = async (slug) => {
  const source = getFile(slug + POST_EXTNAME);
  const { code, frontmatter } = await bundleMDX(source, {
    cwd: POSTS_PATH,
    xdmOptions: (options) => {
      options.remarkPlugins = [...(options.remarkPlugins ?? []), gfm];
      return options;
    },
  });

  return {
    code,
    frontmatter,
  };
};

export { getAllPosts, getOnePost };
