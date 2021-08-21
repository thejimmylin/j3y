import PostLayout from "../../components/PostLayout";
import Article from "../../_data/posts/use-fira-code-in-vscode.mdx"

const Post = ({ isDark, setIsDark }) => {
  return (
    <PostLayout isDark={isDark} setIsDark={setIsDark}>
      <Article />
    </PostLayout>
  );
};

export default Post;
