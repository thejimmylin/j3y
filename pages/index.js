import { useState, useEffect, useRef } from "react";
import Head from "next/head";

import Header from "./HomePage/Header";
import Main from "./HomePage/Main";
import Footer from "./HomePage/Footer";

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
    <section id="HomePage" className={isDark ? "dark" : ""}>
      <Head>
        <meta charset="utf-8" />
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Jimmy Lin</title>
        <meta name="title" content="I'm Jimmy Lin." />
        <meta name="description" content="Welcome to my personal website." />
        <meta property="og:title" content="I'm Jimmy Lin." />
        <meta property="og:description" content="Welcome to my personal website." />
        <meta property="og:image" content="https://jimmylin.org/avatar-1440x1440.jpg" />
      </Head>
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
  );
};

export default HomePage;
