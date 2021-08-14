import Header from "../components/Header";
import Footer from "../components/Footer";
import Link from "next/link";
import { getAllPosts } from "../helpers/mdx";

const Posts = ({ isDark, setIsDark, posts }) => {
  return (
    <>
      <Header isDark={isDark} setIsDark={setIsDark} />
      <main className="font-pretty py-20 min-h-screen text-ink bg-paper dark:text-light dark:bg-night">
        {posts.map((post, index) => (
          <div
            key={index}
            className="max-w-screen-md p-4 mx-auto bg-paper-dark dark:bg-night-light my-8 rounded-md dark:border-pencil"
          >
            <p className="mx-4 my-8 text-4xl font-medium">{post.frontmatter.title}</p>
            <p className="mx-4 my-8">{post.frontmatter.subtitle}</p>
            <p className="mx-4 my-8 text-right">
              <Link href={`posts/${post.slug}`}>
                <a className="underline text-pencil hover:text-ink dark:text-moonlight dark:hover:text-light">
                  more
                </a>
              </Link>
            </p>
          </div>
        ))}
      </main>
      <Footer />
    </>
  );
};

export const getStaticProps = async () => {
  const posts = getAllPosts();
  return {
    props: { posts },
  };
};

export default Posts;
