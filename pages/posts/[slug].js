import Head from "next/head";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import classNames from "classnames";
import React from "react";
import { getMDXComponent } from "mdx-bundler/client";
import { getAllPosts, getSinglePost } from "../../helpers/mdx";

const Post = ({ isDark, setIsDark, code, frontmatter }) => {
  const Component = React.useMemo(() => getMDXComponent(code), [code]);
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
        <link
          href="https://fonts.googleapis.com/css2?family=Fira+Code&display=swap"
          rel="stylesheet"
        />
      </Head>
      <section className={classNames({ dark: isDark })}>
        <Header isDark={isDark} setIsDark={setIsDark} />
        <main className="font-pretty py-20 min-h-screen text-ink bg-paper dark:text-light dark:bg-night">
          <div className="max-w-screen-md p-4 mx-auto">
            <article className="prose dark:prose-dark p-4">
              <h1>{frontmatter.title}</h1>
              <Component />
            </article>
          </div>
        </main>
        <Footer />
      </section>
    </>
  );
};

export const getStaticProps = async ({ params }) => {
  const post = await getSinglePost(params.slug);
  return {
    props: { ...post },
  };
};

export const getStaticPaths = async () => {
  const paths = getAllPosts().map(({ slug }) => ({ params: { slug } }));
  return {
    paths,
    fallback: false,
  };
};

export default Post;
