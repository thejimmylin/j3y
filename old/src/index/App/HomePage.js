import { useState, useEffect, useRef } from "react";

import Header from "./HomePage/Header";
import Main from "./HomePage/Main";
import Footer from "./HomePage/Footer";

const HomePage = () => {
  const [isDark, setIsDark] = useState(true);
  const [windowScrollY, setWindowScrollY] = useState(window.scrollY);
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
