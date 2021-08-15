import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Article from "../../_data/posts/how-to-push-a-docker-image.mdx"

const Post = ({ isDark, setIsDark }) => {
  return (
    <>
      <Header isDark={isDark} setIsDark={setIsDark} />
      <main className="font-pretty py-20 min-h-screen text-ink bg-paper dark:text-light dark:bg-night">
        <div className="max-w-screen-md p-4 mx-auto">
          <article className="prose dark:prose-dark p-4">
            <Article />
          </article>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Post;
