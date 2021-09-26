import { useRef } from "react";
import useWindowScrollY from "../hooks/useWindowScrollY";
import HeroBanner from "../components/HeroBanner";
import Header from "../components/Header";
import MainLayout from "../components/MainLayout";
import PostLayout from "../components/PostLayout";
import Footer from "../components/Footer";
import useMDXComponent from "../hooks/useMDXComponents";

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
        <PostLayout></PostLayout>
      </MainLayout>
      <Footer />
    </>
  );
};

export default HomePage;
