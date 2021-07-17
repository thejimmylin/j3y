import { useState, useEffect, useRef } from "react";

import Header from "./HomePage/Header";
import Main from "./HomePage/Main";
import Footer from "./HomePage/Footer";

const HomePage = () => {
  const [isDark, setIsDark] = useState(true);
  const [scrollY, setScrollY] = useState(window.scrollY);
  const handleScroll = () => {
    setScrollY(window.scrollY);
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  const refAboutMe = useRef(null);
  const scrollToAboutMe = () => {
    refAboutMe.current.scrollIntoView();
  };
  const refFooter = useRef(null);
  const scrollToFooter = () => {
    refFooter.current.scrollIntoView();
  };

  return (
    <section id="HomePage" className={isDark ? "dark" : ""}>
      <Header isDark={isDark} scrollY={scrollY} setIsDark={setIsDark} scrollToAboutMe={scrollToAboutMe} scrollToFooter={scrollToFooter} />
      <Main refAboutMe={refAboutMe} />
      <Footer refFooter={refFooter} />
    </section>
  );
};

export default HomePage;
