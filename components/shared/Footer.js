import classNames from "classnames";

const Footer = ({ extraClassNames }) => {
  return (
    <footer
      className={classNames(
        "font-pretty text-ink bg-paper dark:text-light dark:bg-night",
        extraClassNames
      )}
    >
      <div className="max-w-screen-sm mx-auto flex flex-col flex-wrap items-end content-start p-4">
        <p className="text-5xl font-medium hover:text-black dark:hover:text-white mb-4 cursor-default">Jimmy Lin</p>
        <p className="mb-4">
          <a
            href="mailto:contact@jimmylin.org"
            className="underline hover:text-black dark:hover:text-white"
          >
            contact@jimmylin.org
          </a>
        </p>
        <p className="text-ink dark:text-light text-4xl mb-4 flex gap-2">
          <a
            href="https://github.com/j3ygithub"
            target="_blank"
            rel="noreferrer"
            className="transform hover:scale-110"
          >
            <i className="bi bi-github"></i>
          </a>
          <a
            href="https://www.linkedin.com/in/jimmy-lin-5779a61b5/"
            target="_blank"
            rel="noreferrer"
            className="transform hover:scale-110"
          >
            <i className="bi bi-linkedin"></i>
          </a>
          <a
            href="https://www.facebook.com/j3y.fb"
            target="_blank"
            rel="noreferrer"
            className="transform hover:scale-110"
          >
            <i className="bi bi-facebook"></i>
          </a>
        </p>
      </div>
      <div className="flex items-center justify-center h-16">
        <div className="max-w-screen-sm mx-auto text-sm text-center font-extralight">
          © 2021 All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
