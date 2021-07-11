const LightFilter = ({ scrollY, isDark }) => {
  return (
    <>
      <div
        className="absolute w-full h-screen"
        style={{
          backgroundColor: "rgb(33, 33, 33)",
          opacity: `${(scrollY / window.innerHeight) * 100}%`,
        }}
      ></div>
      <div
        className="absolute w-full h-screen"
        style={{
          backgroundColor: "rgb(220, 220, 220)",
          opacity: isDark ? "0%" : `${10 - (scrollY / window.innerHeight) * 10}%`,
        }}
      ></div>
    </>
  );
};

export default LightFilter;
