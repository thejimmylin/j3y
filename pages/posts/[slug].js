import Header from "../../components/Header";
import MainLayout from "../../components/MainLayout";
import PostLayout from "../../components/PostLayout";
import Footer from "../../components/Footer";
import { getPostInfos, getPost } from "../../markdowns";
import useMDXComponents from "../../hooks/useMDXComponents"

const Post = ({ useIsDark, post }) => {
  const code = post.code;
  const isDark = useIsDark[0];
  const MDXComponent = useMDXComponents({ code, isDark });
  return (
    <>
      <Header useIsDark={useIsDark} />
      <MainLayout>
        <PostLayout>
          <MDXComponent />
        </PostLayout>
      </MainLayout>
      <Footer />
    </>
  );
};

export const getStaticProps = async ({ params }) => {
  const post = await getPost(params.slug);
  return {
    props: { post },
  };
};

export const getStaticPaths = async () => {
  const paths = getPostInfos().map(({ slug }) => ({ params: { slug } }));
  return {
    paths,
    fallback: false,
  };
};

export default Post;
