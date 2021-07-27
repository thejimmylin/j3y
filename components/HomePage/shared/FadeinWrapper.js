import { useState, useEffect, useRef } from "react";
import classNames from "classnames";

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
      className={classNames(
        "transition",
        "duration-1000",
        "ease-out",
        {
          "opacity-0": !isIntersecting,
          "translate-y-8": !isIntersecting,
        }
      )}
      ref={ref}
    >
      {children}
    </div>
  );
};

export default FadeinWrapper;
