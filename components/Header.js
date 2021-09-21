import { useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import classNames from "classnames";
import Brand from "./Brand";
import DarkModeToggler from "./DarkModeToggler";
import ObservedDiv from "./ObservedDiv";

const Header = ({ useIsDark, headerRef }) => {
  const [isIntersecting, setIsIntersecting] = useState(false);
  const { asPath } = useRouter();
  const headerClassName = classNames(
    "font-sans text-ink dark:text-light dark:bg-night transition-bg sticky top-0 z-10",
    {
      "bg-paper dark:bg-night": isIntersecting,
    },
    {
      "bg-paper-light dark:bg-night-light": !isIntersecting,
    }
  );
  const homeClassName = classNames(
    "animate-fadein-1000-1000 font-semibold text-sm xs:text-lg hover:text-blue-700 dark:hover:text-yellow-300",
    {
      "text-blue-700 dark:text-yellow-300": asPath === "/",
    },
    {
      "text-blue-600 dark:text-yellow-400": !(asPath === "/"),
    }
  );
  const postsClassName = classNames(
    "animate-fadein-1000-1000 font-semibold text-sm xs:text-lg hover:text-blue-700 dark:hover:text-yellow-300",
    {
      "text-blue-700 dark:text-yellow-300": asPath.startsWith("/posts"),
    },
    {
      "text-blue-600 dark:text-yellow-400": !asPath.startsWith("/posts"),
    }
  );

  return (
    <>
      <ObservedDiv setIsIntersecting={setIsIntersecting} />
      <header className={headerClassName} ref={headerRef}>
        <ul className="flex justify-between items-baseline gap-4 px-8 whitespace-nowrap">
          <li className="font-semibold text-lg xs:text-2xl hover:text-black dark:hover:text-white select-none">
            <Brand />
          </li>
          <li className={homeClassName}>
            <Link href="/">
              <a>Home</a>
            </Link>
          </li>
          <li className={postsClassName}>
            <Link href="/posts">
              <a>Posts</a>
            </Link>
          </li>
          <li className="flex items-center my-5 ml-auto">
            <DarkModeToggler useIsDark={useIsDark} />
          </li>
        </ul>
      </header>
    </>
  );
};

export default Header;
