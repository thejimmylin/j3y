import fs from "fs";
import path from "path";
import matter from "gray-matter";

const BASE_DIR = path.join(process.cwd(), "posts");
const POST_EXTNAME = ".md";

const getPostInfos = () => {
  const fileNames = fs.readdirSync(BASE_DIR);
  const postFileNames = fileNames.filter(
    (fileName) => path.extname(fileName) === POST_EXTNAME
  );
  const postInfos = postFileNames.map((fileName) => {
    const slug = path.basename(fileName, path.extname(fileName));
    const fullPath = path.join(BASE_DIR, fileName);
    const file = fs.readFileSync(fullPath);
    const frontmatter = matter(file).data;
    return {
      slug,
      frontmatter,
    };
  });
  return postInfos;
};

const getPostContent = async (slug) => {
  const fullPath = path.join(BASE_DIR, slug + POST_EXTNAME);
  const file = fs.readFileSync(fullPath);
  const postContent = matter(file).content;
  return postContent;
};

export { getPostInfos, getPostContent };
