import { useEffect, useRef } from "react";

const ScrollDetector = ({ setIsScrolled }) => {
  const divRef = useRef(null);

  useEffect(() => {
    const div = divRef.current;
    const callback = (entries) => {
      entries.forEach((entry) => {
        const isScrolled = !entry.isIntersecting;
        setIsScrolled(isScrolled);
      });
    };
    const observer = new IntersectionObserver(callback);
    observer.observe(div);
    return () => {
      observer.disconnect();
    };
  }, []);

  return <div ref={divRef}></div>;
};

export default ScrollDetector;
