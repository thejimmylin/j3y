import PostLayout from "../../components/PostLayout";
import Article from "../../_data/posts/javascript-5-ways-to-define-a-function.mdx"

const Post = ({ isDark, setIsDark }) => {
  return (
    <PostLayout isDark={isDark} setIsDark={setIsDark}>
      <Article />
    </PostLayout>
  );
};

export default Post;
