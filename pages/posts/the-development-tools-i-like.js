import Header from "../../components/Header";
import MainLayout from "../../components/MainLayout";
import PostLayout from "../../components/PostLayout";
import Footer from "../../components/Footer";

import Article from "../../components/mdx/posts/the-development-tools-i-like.mdx"

const Post = ({ useIsDark }) => {
  return (
    <>
      <Header useIsDark={useIsDark} />
      <MainLayout>
        <PostLayout>
          <Article />
        </PostLayout>
      </MainLayout>
      <Footer />
    </>
  );
};

export default Post;
