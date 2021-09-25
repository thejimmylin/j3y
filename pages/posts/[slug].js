import Header from "../../components/Header";
import MainLayout from "../../components/MainLayout";
import PostLayout from "../../components/PostLayout";
import Footer from "../../components/Footer";
import { useMemo } from "react";
import { getMDXComponent } from "mdx-bundler/client";
import { getAllPosts, getSinglePost } from "../../markdown";

const Post = ({ useIsDark, code, frontmatter }) => {
  const Component = useMemo(() => getMDXComponent(code), [code]);
  return (
    <>
      <Header useIsDark={useIsDark} />
      <MainLayout>
        <PostLayout>
          <Component />
        </PostLayout>
      </MainLayout>
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
