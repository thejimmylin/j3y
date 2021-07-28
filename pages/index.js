import { useState, useEffect, useRef } from "react";
import Head from "next/head";

import Header from "../components/HomePage/Header";
import Main from "../components/HomePage/Main";
import Footer from "../components/HomePage/Footer";

const HomePage = () => {
  const [isDark, setIsDark] = useState(true);
  const [windowScrollY, setWindowScrollY] = useState(0);
  const handleWindowScroll = () => {
    setWindowScrollY(window.scrollY);
  };
  useEffect(() => {
    window.addEventListener("scroll", handleWindowScroll);
    return () => {
      window.removeEventListener("scroll", handleWindowScroll);
    };
  }, []);
  const refMain = useRef(null);
  const scrollIntoMain = () => {
    refMain.current.scrollIntoView();
  };
  const refFooter = useRef(null);
  const scrollIntoFooter = () => {
    refFooter.current.scrollIntoView();
  };

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
      <section id="HomePage" className={isDark ? "dark" : ""}>
        <Header
          isDark={isDark}
          setIsDark={setIsDark}
          windowScrollY={windowScrollY}
          scrollIntoMain={scrollIntoMain}
          scrollIntoFooter={scrollIntoFooter}
        />
        <Main refMain={refMain} />
        <Footer refFooter={refFooter} />
      </section>
    </>
  );
};

export default HomePage;
