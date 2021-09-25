import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { bundleMDX } from "mdx-bundler";
import gfm from "remark-gfm";

export const POSTS_PATH = path.join(process.cwd(), "markdown/posts");

export const getSourceOfFile = (fileName) => {
  return fs.readFileSync(path.join(POSTS_PATH, fileName));
};

export const getAllPosts = () => {
  return fs
    .readdirSync(POSTS_PATH)
    .filter((path) => /\.md$/.test(path))
    .map((fileName) => {
      const source = getSourceOfFile(fileName);
      const slug = fileName.replace(/\.md$/, "");
      const { data } = matter(source);

      return {
        frontmatter: data,
        slug: slug,
      };
    });
};

export const getSinglePost = async (slug) => {
  const source = getSourceOfFile(slug + ".md");
  const { code, frontmatter } = await bundleMDX(source, {
    cwd: POSTS_PATH,
    xdmOptions: (options) => {
      options.remarkPlugins = [...(options.remarkPlugins ?? []), gfm];
      return options;
    },
  });

  return {
    frontmatter,
    code,
  };
};
