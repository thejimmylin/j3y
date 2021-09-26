import Header from "../../components/Header";
import MainLayout from "../../components/MainLayout";
import PostLayout from "../../components/PostLayout";
import Footer from "../../components/Footer";
import { useMemo } from "react";
import { getMDXComponent } from "mdx-bundler/client";
import { getAllPosts, getOnePost } from "../../markdown";

const Post = ({ useIsDark, post }) => {
  const code = post.code;
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
  const post = await getOnePost(params.slug);
  return {
    props: { post },
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
