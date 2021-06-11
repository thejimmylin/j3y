import { useState, useEffect, useRef } from "react";

const FadeInSection = (props) => {
  const [isIntersecting, setIsIntersecting] = useState(false);
  const domRef = useRef();
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => setIsIntersecting(entry.isIntersecting));
    });
    observer.observe(domRef.current);
  }, []);
  return (
    <div
      className={`transition-opacity duration-1000 ease-out ${
        isIntersecting ? "opacity-100" : "opacity-0"
      }`}
      ref={domRef}
    >
      {props.children}
    </div>
  );
};

export default FadeInSection;
