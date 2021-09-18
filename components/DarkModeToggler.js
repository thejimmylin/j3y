const DarkModeToggler = ({ useIsDark }) => {
  const [isDark, setIsDark] = useIsDark;
  const onChange = () => {
    setIsDark((prevIsDark) => !prevIsDark);
  };
  return (
    <>
      <div className="relative inline-block w-10 mr-2 align-middle transition duration-200 ease-in select-none">
        <input
          type="checkbox"
          name="toggle"
          id="toggle"
          className="absolute block w-6 h-6 border-4 rounded-full appearance-none cursor-pointer focus:outline-none checked:right-0 bg-gray-500 checked:bg-white border-gray-300"
          onChange={onChange}
          checked={!isDark}
        />
        <label
          htmlFor="toggle"
          className="block h-6 overflow-hidden rounded-full cursor-pointer bg-gray-300"
        ></label>
      </div>
      <label htmlFor="toggle" className="mt-1">
        {isDark ? (
          <i className="fas fa-moon text-xl"></i>
        ) : (
          <i className="fas fa-sun text-xl"></i>
        )}
      </label>
    </>
  );
};

export default DarkModeToggler;
