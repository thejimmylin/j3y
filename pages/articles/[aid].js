import { useRouter } from "next/router";
import Image from "next/image";
import Link from "next/image";
import { MDXProvider } from "@mdx-js/react";

const Paragraph = (props) => {
  <p className="my-8">{children}</p>;
};

const components = {
  img: Image,
  p: Paragraph,
  a: Link,
};

const Post = (props) => {
  const router = useRouter();
  const { pid } = router.query;
  const pids = ["1", "2", "3"];
  if (!pids.includes(pid)) {
    return <Custom404 isDark={isDark} setIsDark={setIsDark} />;
  }

  return (
    <MDXProvider components={components}>
      <main {...props} />
    </MDXProvider>
  );
};

export default Post;
