import { useState, useEffect } from "react";

const LightFilter = ({ isDark, windowScrollY }) => {
  const [innerHeight, setInnerHeight] = useState(1080);
  useEffect(() => {
    setInnerHeight(window.innerHeight);
  });
  return (
    <>
      <div
        className="absolute w-full h-screen"
        style={{
          backgroundColor: "rgb(220, 220, 220)",
          opacity: isDark ? "0%" : `${10 - (windowScrollY / innerHeight) * 10}%`,
        }}
      ></div>
      <div
        className="absolute w-full h-screen"
        style={{
          backgroundColor: "rgb(33, 33, 33)",
          opacity: `${(windowScrollY / innerHeight) * 100}%`,
        }}
      ></div>
    </>
  );
};

export default LightFilter;
