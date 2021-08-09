import Head from "next/head";
import Header from "../components/Header";
import Footer from "../components/Footer";
import classNames from "classnames";
import Link from "next/link";
import { getAllPosts } from "../helpers/mdx";

const Posts = ({ isDark, setIsDark, posts }) => {
  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <title>Jimmy Lin</title>
        <meta name="title" content="I'm Jimmy Lin." />
        <meta name="description" content="Welcome to my personal website." />
        <meta property="og:title" content="I'm Jimmy Lin." />
        <meta property="og:description" content="Welcome to my personal website." />
        <meta property="og:image" content="https://jimmylin.org/avatar-1440x1440.jpg" />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
          rel="stylesheet"
        />
      </Head>
      <section className={classNames({ dark: isDark })}>
        <Header isDark={isDark} setIsDark={setIsDark} />
        <main className="font-pretty py-20 min-h-screen text-ink bg-paper dark:text-light dark:bg-night">
          {posts.map((post, index) => (
            <div
              key={index}
              className="max-w-screen-md p-4 mx-auto bg-yellow-100 dark:bg-gray-900 my-8 rounded-md dark:border-pencil"
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
      </section>
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
