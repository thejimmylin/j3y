// This config make it possible to use MDX as top level pages.
// https://github.com/vercel/next.js/tree/canary/packages/next-mdx
const withMDX = require("@next/mdx")({
  extension: /\.mdx?$/,
});
module.exports = withMDX({
  pageExtensions: ["js", "jsx", "md", "mdx"],
});
