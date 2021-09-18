import { useState, useEffect } from "react";

const useWindowScrollY = () => {
  const [windowScrollY, setWindowScrollY] = useState(0);
  const onWindowScroll = () => {
    setWindowScrollY(window.scrollY);
  };
  useEffect(() => {
    window.addEventListener("scroll", onWindowScroll);
    return () => {
      window.removeEventListener("scroll", onWindowScroll);
    };
  }, []);
  return [windowScrollY, setWindowScrollY];
};

export default useWindowScrollY;
