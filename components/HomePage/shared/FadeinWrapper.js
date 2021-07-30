import { useState, useEffect, useRef } from "react";
import classNames from "classnames";

/**
 * This component wraps its `children` with a `div`.
 */
const FadeinWrapper = ({ children }) => {
  const [isIntersecting, setIsIntersecting] = useState(false);
  const ref = useRef(null);
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => setIsIntersecting(entry.isIntersecting));
    });
    observer.observe(ref.current);
  }, []);
  return (
    <div
      className={classNames(
        "transition-opacity",
        "duration-1000",
        "ease-out",
        {
          "opacity-0": !isIntersecting,
        }
      )}
      ref={ref}
    >
      {children}
    </div>
  );
};

export default FadeinWrapper;
