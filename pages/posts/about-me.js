import PostLayout from "../../components/PostLayout";
import Article from "../../_data/posts/about-me.mdx";

const Post = ({ isDark, setIsDark }) => {
  return (
    <PostLayout isDark={isDark} setIsDark={setIsDark}>
      <Article />
    </PostLayout>
  );
};

export default Post;
