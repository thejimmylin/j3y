import { useState, useEffect, useRef } from "react";
import HeroBanner from "../components/HeroBanner";
import Header from "../components/Header";
import Footer from "../components/Footer";
import AboutMe from "../_data/posts/about-me.mdx";

const HomePage = ({ isDark, setIsDark }) => {
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
  const refHeader = useRef(null);
  const scrollIntoHeader = () => {
    refHeader.current.scrollIntoView();
  };

  return (
    <>
      <HeroBanner
        isDark={isDark}
        windowScrollY={windowScrollY}
        scrollIntoHeader={scrollIntoHeader}
      />
      <Header isDark={isDark} setIsDark={setIsDark} refHeader={refHeader}/>
      <main
        className="font-pretty text-ink bg-paper dark:text-light dark:bg-night transition-bg min-h-screen py-20"
      >
        <div className="max-w-screen-md mx-auto">
          <article className="prose dark:prose-dark p-8">
            <AboutMe />
          </article>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default HomePage;
