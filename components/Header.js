import { useState, useEffect, useRef } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import classNames from "classnames";
import DarkModeToggler from "./DarkModeToggler";

const Header = ({ useIsDark, headerRef }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const staticHeaderRef = useRef(null);
  const { asPath } = useRouter();

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
          "font-sans text-ink dark:text-light dark:bg-night transition-bg sticky top-0 z-10",
          { "bg-paper dark:bg-night": !isScrolled },
          { "bg-paper-light dark:bg-night-light": isScrolled }
        )}
        ref={headerRef}
      >
        <div className="flex justify-between items-baseline gap-4 px-8 whitespace-nowrap">
          <p className="my-5 font-semibold text-lg xs:text-2xl transform hover:text-black dark:hover:text-white select-none">
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
          <p
            className={classNames(
              "text-center font-semibold my-5 text-sm xs:text-lg hover:text-blue-700 dark:hover:text-yellow-300",
              {
                "text-blue-700 dark:text-yellow-300": asPath === "/",
              },
              {
                "text-blue-600 dark:text-yellow-400": !(asPath === "/"),
              }
            )}
          >
            <Link href="/">
              <a className="animate-fadein-1000-1000">Home</a>
            </Link>
          </p>
          <p
            className={classNames(
              "text-center font-semibold my-5 text-sm xs:text-lg hover:text-blue-700 dark:hover:text-yellow-300",
              {
                "text-blue-700 dark:text-yellow-300":
                  asPath.startsWith("/posts"),
              },
              {
                "text-blue-600 dark:text-yellow-400":
                  !asPath.startsWith("/posts"),
              }
            )}
          >
            <Link href="/posts">
              <a className="animate-fadein-1000-1000">Posts</a>
            </Link>
          </p>
          <div className="flex items-center my-5 ml-auto">
            <DarkModeToggler useIsDark={useIsDark} />
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
