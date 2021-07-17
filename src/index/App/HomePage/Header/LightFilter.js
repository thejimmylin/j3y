const LightFilter = ({ isDark, windowScrollY }) => {
  return (
    <>
      <div
        className="absolute w-full h-screen"
        style={{
          backgroundColor: "rgb(220, 220, 220)",
          opacity: isDark ? "0%" : `${10 - (windowScrollY / window.innerHeight) * 10}%`,
        }}
      ></div>
      <div
        className="absolute w-full h-screen"
        style={{
          backgroundColor: "rgb(33, 33, 33)",
          opacity: `${(windowScrollY / window.innerHeight) * 100}%`,
        }}
      ></div>
    </>
  );
};

export default LightFilter;
