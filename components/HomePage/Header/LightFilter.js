import { useState, useEffect } from "react";

const LightFilter = ({ isDark, windowScrollY }) => {
  const [innerHeight, setInnerHeight] = useState(1080);
  useEffect(() => {
    setInnerHeight(window.innerHeight);
  });
  return (
    <>
      <div
        className="absolute w-full h-screen bg-night"
        style={{
          opacity: isDark ? `${45 - (windowScrollY / innerHeight) * 45}%` : `${35 - (windowScrollY / innerHeight) * 35}%`,
        }}
      ></div>
      <div
        className="absolute w-full h-screen bg-night"
        style={{
          opacity: `${(windowScrollY / innerHeight) * 100}%`,
        }}
      ></div>
    </>
  );
};

export default LightFilter;
