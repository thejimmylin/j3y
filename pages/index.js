import { useState, useEffect, useRef } from "react";
import HeroHeader from "../components/HeroHeader";
import Resume from "../components/Resume";
import Footer from "../components/Footer";

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
        className="font-pretty font-extralight text-ink bg-paper dark:text-light dark:bg-night py-20"
      >
        <Resume />
      </main>
      <Footer refFooter={refFooter} />
    </>
  );
};

export default HomePage;
