import Header from "../../components/Header";
import Footer from "../../components/Footer";
import React from "react";
import { getMDXComponent } from "mdx-bundler/client";
import { getAllPosts, getSinglePost } from "../../helpers/mdx";

const Post = ({ isDark, setIsDark, code, frontmatter }) => {
  const Component = React.useMemo(() => getMDXComponent(code), [code]);
  return (
    <>
      <Header isDark={isDark} setIsDark={setIsDark} />
      <main className="font-pretty py-20 min-h-screen text-ink bg-paper dark:text-light dark:bg-night">
        <div className="max-w-screen-md p-4 mx-auto">
          <article className="prose dark:prose-dark p-4">
            <h1>{frontmatter.title}</h1>
            <Component />
          </article>
        </div>
      </main>
      <Footer />
    </>
  );
};

export const getStaticProps = async ({ params }) => {
  const post = await getSinglePost(params.slug);
  return {
    props: { ...post },
  };
};

export const getStaticPaths = async () => {
  const paths = getAllPosts().map(({ slug }) => ({ params: { slug } }));
  return {
    paths,
    fallback: false,
  };
};

export default Post;
