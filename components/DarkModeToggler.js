const DarkModeToggler = ({ useIsDark }) => {
  const [isDark, setIsDark] = useIsDark;
  const onClick = () => {
    setIsDark((prevIsDark) => !prevIsDark);
  };
  return (
    <div className="cursor-pointer select-none hover:scale-105" onClick={onClick}>
      {isDark ? (
        <span className="material-icons transform -rotate-45 transition-transform hover:rotate-0 duration-500">nightlight_round</span>
      ) : (
        <span className="material-icons transform -rotate-45 transition-transform hover:rotate-0 duration-500">wb_sunny</span>
      )}
    </div>
  );
};

export default DarkModeToggler;
