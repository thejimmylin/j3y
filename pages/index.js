import { useState, useEffect, useRef } from "react";
import HeroHeader from "../components/HeroHeader";
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
      <HeroHeader
        isDark={isDark}
        setIsDark={setIsDark}
        windowScrollY={windowScrollY}
        scrollIntoMain={scrollIntoMain}
        scrollIntoFooter={scrollIntoFooter}
      />
      <main
        ref={refMain}
        className="font-pretty text-ink bg-paper dark:text-light dark:bg-night min-h-screen py-20"
      >
        <div className="max-w-screen-md p-4 mx-auto">
          <article className="prose dark:prose-dark p-4">
            <AboutMe />
          </article>
        </div>
      </main>
      <Footer refFooter={refFooter} />
    </>
  );
};

export default HomePage;
