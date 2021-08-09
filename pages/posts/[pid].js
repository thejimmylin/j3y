import { useRouter } from "next/router";
import Head from "next/head";
import Custom404 from "../404.js";
import Header from "../../components/shared/Header";
import Main from "../../components/posts/[pid]/Main";
import Footer from "../../components/shared/Footer";
import classNames from "classnames";

const postNumber = 3;

const Post = ({ isDark, setIsDark }) => {
  const router = useRouter();
  const { pid } = router.query;
  const pids = [...Array(postNumber).keys()].map((i) => (i + 1).toString());
  if (!pids.includes(pid)) {
    return <Custom404 isDark={isDark} setIsDark={setIsDark} />;
  }
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
        <Main pid={pid} />
        <Footer />
      </section>
    </>
  );
};

export default Post;
