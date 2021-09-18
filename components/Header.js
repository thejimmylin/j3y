import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import classNames from "classnames";
import DarkModeToggler from "./DarkModeToggler";

const Header = ({ useIsDark, headerRef }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const staticHeaderRef = useRef(null);

  useEffect(() => {
    const staticHeader = staticHeaderRef.current;
    const callback = (entries) => {
      entries.forEach((entry) => {
        setIsScrolled(!entry.isIntersecting);
      });
    };
    const observer = new IntersectionObserver(callback);
    observer.observe(staticHeader);
    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <>
      <header ref={staticHeaderRef}></header>
      <header
        className={classNames(
          "font-sans font-semibold text-ink dark:text-light dark:bg-night transition-bg sticky top-0 z-10",
          { "bg-paper dark:bg-night": !isScrolled },
          { "bg-paper-light dark:bg-night-light": isScrolled }
        )}
        ref={headerRef}
      >
        <div className="flex justify-between items-end gap-4 px-8 whitespace-nowrap">
          <p className="my-5 text-xl xs:text-2xl transform hover:scale-105 select-none">
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
          <p className="text-center my-5 text-md xs:text-lg text-blue-600 hover:text-blue-700 dark:text-yellow-400 dark:hover:text-yellow-300 hover:scale-105 transform">
            <Link href="/posts">
              <a className="animate-fadein-1000-1000">POSTS</a>
            </Link>
          </p>
          <div className="flex items-center animate-fadein-1000-700 my-5 ml-auto">
            <DarkModeToggler useIsDark={useIsDark} />
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
