import { useState, useEffect, useRef } from "react";

/**A Wrapper that wrap its children with a `div` and makes them fade in. */
const FadeinWrapper = ({ children }) => {
  const [isIntersecting, setIsIntersecting] = useState(false);
  const ref = useRef();
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => setIsIntersecting(entry.isIntersecting));
    });
    observer.observe(ref.current);
  }, []);
  return (
    <div
      className={`transition-opacity duration-1000 ease-out ${
        isIntersecting ? "opacity-100" : "opacity-0"
      }`}
      ref={ref}
    >
      {children}
    </div>
  );
};

export default FadeinWrapper;
