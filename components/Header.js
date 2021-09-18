import Link from "next/link";
import classNames from "classnames";
import DarkModeToggler from "./DarkModeToggler";

const Header = ({ useIsDark, extraClassNames, headerRef }) => {
  return (
    <header
      className={classNames(
        "font-sans font-semibold text-ink bg-paper dark:text-light dark:bg-night transition-bg sticky top-0 z-10",
        extraClassNames
      )}
      ref={headerRef}
    >
      <div className="flex justify-between items-end gap-4 px-8 whitespace-nowrap">
        <p className="my-5 text-2xl transform hover:scale-105">
          <Link href="/">
            <a>
              <span className="animate-fadein-1000-200">J</span>
              <span className="animate-fadein-1000-250">i</span>
              <span className="animate-fadein-1000-300">m</span>
              <span className="animate-fadein-1000-350">m</span>
              <span className="animate-fadein-1000-400">y</span>
              <span className="animate-fadein-1000-450"> </span>
              <span className="animate-fadein-1000-500">L</span>
              <span className="animate-fadein-1000-550">i</span>
              <span className="animate-fadein-1000-600">n</span>
            </a>
          </Link>
        </p>
        <p className="text-center my-5 text-xl text-blue-600 hover:text-blue-700 dark:text-yellow-400 dark:hover:text-yellow-300 transform hover:scale-105">
          <Link href="/posts">
            <a className="animate-fadein-1000-1000">Posts</a>
          </Link>
        </p>
        <div className="flex items-center animate-fadein-1000-700 my-5 ml-auto">
          <DarkModeToggler useIsDark={useIsDark} />
        </div>
      </div>
    </header>
  );
};

export default Header;
