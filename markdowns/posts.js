import fs from "fs";
import path from "path";
import matter from "gray-matter";

const REPO_ROOT = process.cwd();
const POST_DIR = path.join(REPO_ROOT, "markdowns", "posts");
const MARKDOWN_EXTNAME = ".md";

const getAllPostOutlines = () => {
  const fileNames = fs.readdirSync(POST_DIR);
  const outlines = fileNames.map((fileName) => {
    const slug = path.parse(fileName).name;
    const file = fs.readFileSync(path.join(POST_DIR, fileName));
    const frontmatter = matter(file).data;
    return {
      slug,
      frontmatter,
    };
  });
  return outlines;
};

const getSinglePostContent = (slug) => {
  const filePath = path.join(POST_DIR, slug + MARKDOWN_EXTNAME);
  const file = fs.readFileSync(filePath);
  const content = matter(file).content;
  return content;
};

const sortPostOutlines = (postOutlines) => {
  const compareFn = (a, b) =>
    Date.parse(b.frontmatter.createdAt) - Date.parse(a.frontmatter.createdAt);
  postOutlines.sort(compareFn);
};

export { getAllPostOutlines, getSinglePostContent, sortPostOutlines };
