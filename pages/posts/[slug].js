import Header from "../../components/Header";
import MainLayout from "../../components/MainLayout";
import PostLayout from "../../components/PostLayout";
import Footer from "../../components/Footer";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { getMarkdownComponents } from "../../components/markdown-components";
import {
  getSinglePostContent,
  getAllPostOutlines,
} from "../../markdowns/posts";

const Post = ({ useIsDark, postContent }) => {
  const [isDark, _setIsDark] = useIsDark;
  const components = getMarkdownComponents({ isDark });
  return (
    <>
      <Header useIsDark={useIsDark} />
      <MainLayout>
        <PostLayout>
          <ReactMarkdown remarkPlugins={[remarkGfm]} components={components}>
            {postContent}
          </ReactMarkdown>
        </PostLayout>
      </MainLayout>
      <Footer />
    </>
  );
};

export const getStaticProps = async ({ params }) => {
  const postContent = getSinglePostContent(params.slug);
  return {
    props: { postContent },
  };
};

export const getStaticPaths = async () => {
  const paths = getAllPostOutlines().map(({ slug }) => ({ params: { slug } }));
  return {
    paths,
    fallback: false,
  };
};

export default Post;
