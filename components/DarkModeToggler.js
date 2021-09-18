const DarkModeToggler = ({ useIsDark }) => {
  const [isDark, setIsDark] = useIsDark;
  const onClick = () => {
    setIsDark((prevIsDark) => !prevIsDark);
  };
  return (
    <div className="cursor-pointer select-none hover:scale-105" onClick={onClick}>
      {isDark ? (
        <span className="material-icons">dark_mode</span>
      ) : (
        <span className="material-icons">light_mode</span>
      )}
    </div>
  );
};

export default DarkModeToggler;
