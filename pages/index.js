import { useRef } from "react";
import HeroBanner from "../components/HeroBanner";
import Header from "../components/Header";
import MainLayout from "../components/MainLayout";
import PostLayout from "../components/PostLayout";
import Article from "../_data/posts/about-me.mdx";
import Footer from "../components/Footer";
import useWindowScrollY from "../hooks/useWindowScrollY";

const HomePage = ({ useIsDark }) => {
  const [windowScrollY] = useWindowScrollY();
  const headerRef = useRef(null);
  return (
    <>
      <HeroBanner
        useIsDark={useIsDark}
        windowScrollY={windowScrollY}
        headerRef={headerRef}
      />
      <Header useIsDark={useIsDark} headerRef={headerRef} />
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
