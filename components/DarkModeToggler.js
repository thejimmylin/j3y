import useBodyProps from "../hooks/useBodyProps";

const DarkModeToggler = ({ useIsDark }) => {
  const [isDark, setIsDark] = useIsDark;
  const onClick = () => {
    setIsDark((prevIsDark) => !prevIsDark);
  };
  useBodyProps(() => ({ className: isDark ? "bg-night" : "bg-paper" }));
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
          <span>
            <i className="bi bi-moon-fill"></i>
          </span>
        ) : (
          <span className="text-yellow-500">
            <i className="bi bi-sun-fill"></i>
          </span>
        )}
      </div>
    </div>
  );
};

export default DarkModeToggler;
