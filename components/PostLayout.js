import Header from "./Header";
import Footer from "./Footer";

const PostLayout = ({ children, isDark, setIsDark }) => {
  return (
    <>
      <Header isDark={isDark} setIsDark={setIsDark} />
      <main className="font-pretty text-ink bg-paper dark:text-light dark:bg-night transition-bg min-h-screen py-20">
        <div className="max-w-screen-md mx-auto">
          <article className="prose dark:prose-dark p-8">{children}</article>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default PostLayout;
