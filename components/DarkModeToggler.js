const DarkModeToggler = ({ useIsDark }) => {
  const [isDark, setIsDark] = useIsDark;
  const onClick = () => {
    setIsDark((prevIsDark) => !prevIsDark);
  };
  return (
    <div
      className="cursor-pointer select-none hover:scale-105"
      onClick={onClick}
      style={{ WebkitTapHighlightColor: "transparent" }}
    >
      <div
        key={isDark}
        className="text-xl animate-risein-300-100 transition-transform transform"
      >
        {isDark ? (
          <i className="bi bi-moon-fill"></i>
        ) : (
          <i className="bi bi-sun-fill"></i>
        )}
      </div>
    </div>
  );
};

export default DarkModeToggler;
