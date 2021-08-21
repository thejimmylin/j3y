import { useState, useEffect, useRef } from "react";
import HeroBanner from "../components/HeroBanner";
import Header from "../components/Header";
import MainLayout from "../components/MainLayout";
import PostLayout from "../components/PostLayout";
import Article from "../_data/posts/about-me.mdx";
import Footer from "../components/Footer";

const HomePage = ({ useIsDark }) => {
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
        useIsDark={useIsDark}
        windowScrollY={windowScrollY}
        scrollIntoHeader={scrollIntoHeader}
      />
      <Header useIsDark={useIsDark} refHeader={refHeader}/>
      <MainLayout>
        <PostLayout>
          <Article />
        </PostLayout>
      </MainLayout>
      <Footer />
    </>
  );
};

export default HomePage;
