import Head from "next/head";
import Header from "../components/shared/Header";
import Main from "../components/404/Main";
import Footer from "../components/shared/Footer";

const Custom404 = ({ isDark, setIsDark }) => {
  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <title>Jimmy Lin</title>
        <meta name="title" content="I'm Jimmy Lin." />
        <meta name="description" content="Welcome to my personal website." />
        <meta property="og:title" content="I'm Jimmy Lin." />
        <meta
          property="og:description"
          content="Welcome to my personal website."
        />
        <meta
          property="og:image"
          content="https://jimmylin.org/avatar-1440x1440.jpg"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
          rel="stylesheet"
        />
      </Head>
      <section id="HomePage" className={isDark ? "dark" : ""}>
        <Header 
          isDark={isDark}
          setIsDark={setIsDark}
        />
        <Main />
        <Footer />
      </section>
    </>
  );
};

export default Custom404
