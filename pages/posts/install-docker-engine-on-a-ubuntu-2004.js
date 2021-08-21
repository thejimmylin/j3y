import PostLayout from "../../components/PostLayout";
import Article from "../../_data/posts/install-docker-engine-on-a-ubuntu-2004.mdx"

const Post = ({ isDark, setIsDark }) => {
  return (
    <PostLayout isDark={isDark} setIsDark={setIsDark}>
      <Article />
    </PostLayout>
  );
};

export default Post;
