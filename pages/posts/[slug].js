import Header from "../../components/Header";
import MainLayout from "../../components/MainLayout";
import PostLayout from "../../components/PostLayout";
import Footer from "../../components/Footer";
import { getPostInfos, getPostContent } from "../../utils/posts";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { getPostComponents } from "../../components/post-components";

const Post = ({ useIsDark, postContent }) => {
  const [isDark, _setIsDark] = useIsDark;
  const postComponents = getPostComponents({ isDark });
  return (
    <>
      <Header useIsDark={useIsDark} />
      <MainLayout>
        <PostLayout>
          <ReactMarkdown
            children={postContent}
            remarkPlugins={[remarkGfm]}
            components={postComponents}
          />
        </PostLayout>
      </MainLayout>
      <Footer />
    </>
  );
};

export const getStaticProps = async ({ params }) => {
  const postContent = await getPostContent(params.slug);
  return {
    props: { postContent },
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
