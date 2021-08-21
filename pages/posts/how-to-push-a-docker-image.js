import PostLayout from "../../components/PostLayout";
import Article from "../../_data/posts/how-to-push-a-docker-image.mdx"

const Post = ({ isDark, setIsDark }) => {
  return (
    <PostLayout isDark={isDark} setIsDark={setIsDark}>
      <Article />
    </PostLayout>
  );
};

export default Post;
