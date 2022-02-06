import { useEffect, useRef } from "react";

const ObservedDiv = ({ setIsIntersecting }) => {
  const divRef = useRef(null);

  useEffect(() => {
    const div = divRef.current;
    const callback = (entries) => {
      entries.forEach((entry) => {
        setIsIntersecting(entry.isIntersecting);
      });
    };
    const observer = new IntersectionObserver(callback);
    observer.observe(div);
    const cleanup = () => {
      observer.disconnect();
    };
    return cleanup;
  }, [setIsIntersecting]);

  return <div ref={divRef}></div>;
};

export default ObservedDiv;
