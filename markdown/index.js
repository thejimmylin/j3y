import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { bundleMDX } from "mdx-bundler";
import remarkGfm from "remark-gfm";

const BASE_DIR = path.join(process.cwd(), "markdown/posts");
const POST_EXTNAME = ".md";

const getFile = (fileName) => {
  const fullPath = path.join(BASE_DIR, fileName);
  const file = fs.readFileSync(fullPath);
  return file;
};

const isPostFile = (fileName) => {
  const extname = path.extname(fileName);
  return extname === POST_EXTNAME;
};

const getBasename = (fileName) => {
  return path.basename(fileName, path.extname(fileName));
};

const getFrontmatter = (fileName) => {
  return matter(getFile(fileName)).data;
};

const getPostInfos = () => {
  const fileNames = fs.readdirSync(BASE_DIR);
  const postFileNames = fileNames.filter((fileName) => isPostFile(fileName));
  const postInfos = postFileNames.map((fileName) => {
    return {
      slug: getBasename(fileName),
      frontmatter: getFrontmatter(fileName),
    };
  });
  return postInfos;
};

const getPost = async (slug) => {
  const mdxSource = getFile(slug + POST_EXTNAME);
  const { code, frontmatter } = await bundleMDX(mdxSource, {
    cwd: BASE_DIR,
    xdmOptions: (options) => {
      options.remarkPlugins = [...(options.remarkPlugins ?? []), remarkGfm];
      return options;
    },
  });
  return {
    code,
    frontmatter,
  };
};

export { getPostInfos, getPost };
