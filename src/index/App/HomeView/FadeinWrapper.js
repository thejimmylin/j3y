import { useState, useEffect, useRef } from "react";

/**
 * This component wraps its `children` with a `div`.
 */
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
