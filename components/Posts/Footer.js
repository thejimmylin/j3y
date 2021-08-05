const Footer = () => {
  return (
    <footer
      className="font-pretty font-extralight text-ink bg-paper dark:text-light dark:bg-night"
    >
      <div className="flex flex-col flex-wrap items-end content-start max-w-screen-sm p-12 mx-auto">
        <p className="pb-4 text-5xl font-medium md:text-6xl">Jimmy Lin</p>
        <p className="pb-8">
          E-mail:{" "}
          <a
            href="mailto:contact@jimmylin.org"
            className="underline hover:text-graywhite-330 dark:hover:text-graywhite-396"
          >
            contact@jimmylin.org
          </a>
        </p>
        <p className="-mr-4">
          <a
            href="https://github.com/j3ygithub"
            target="_blank"
            rel="noreferrer"
            className="pr-4 text-4xl underline hover:text-graywhite-330 dark:hover:text-graywhite-396"
          >
            <i className="bi bi-github"></i>
          </a>
          <a
            href="https://www.linkedin.com/in/jimmy-lin-5779a61b5/"
            target="_blank"
            rel="noreferrer"
            className="pr-4 text-4xl underline hover:text-graywhite-330 dark:hover:text-graywhite-396"
          >
            <i className="bi bi-linkedin"></i>
          </a>
          <a
            href="https://www.facebook.com/j3y.fb"
            target="_blank"
            rel="noreferrer"
            className="pr-4 text-4xl underline hover:text-graywhite-330 dark:hover:text-graywhite-396"
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
