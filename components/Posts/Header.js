const Header = ({
  isDark,
  setIsDark,
}) => {
  const toggleDarkMode = () => {
    setIsDark(!isDark);
  };

  return (
    <header className="font-pretty font-extralight text-ink bg-paper dark:text-light dark:bg-night">
      <div className="flex items-center">
        <p className="font-medium text-center whitespace-nowrap my-5 ml-8 text-2xl xs:text-3xl sm:text-4xl">
          <span className="animate-fadein-1000-200">J</span>
          <span className="animate-fadein-1000-250">i</span>
          <span className="animate-fadein-1000-300">m</span>
          <span className="animate-fadein-1000-350">m</span>
          <span className="animate-fadein-1000-400">y</span>
          <span className="animate-fadein-1000-450"> </span>
          <span className="animate-fadein-1000-500">L</span>
          <span className="animate-fadein-1000-550">i</span>
          <span className="animate-fadein-1000-600">n</span>
        </p>
        <div className="flex items-center self-center animate-fadein-1000-700 my-5 mr-8 ml-auto">
          <div className="relative inline-block w-10 mr-2 align-middle transition duration-200 ease-in select-none">
            <input
              type="checkbox"
              name="toggle"
              id="toggle"
              className="absolute block w-6 h-6 border-4 rounded-full appearance-none cursor-pointer focus:outline-none checked:right-0 bg-gray-500 checked:bg-white border-gray-300"
              onClick={toggleDarkMode}
            />
            <label
              htmlFor="toggle"
              className="block h-6 overflow-hidden rounded-full cursor-pointer bg-gray-300"
            ></label>
          </div>
          <label htmlFor="toggle" className="text-x">
            {isDark ? (
              <i className="bi bi-moon-fill"></i>
            ) : (
              <i className="bi bi-sun-fill"></i>
            )}
          </label>
        </div>
      </div>
    </header>
  );
};

export default Header;
