import PostLayout from "../../components/PostLayout";
import Article from "../../_data/posts/ubuntu-db-odbc-issues.mdx"

const Post = ({ isDark, setIsDark }) => {
  return (
    <PostLayout isDark={isDark} setIsDark={setIsDark}>
      <Article />
    </PostLayout>
  );
};

export default Post;
