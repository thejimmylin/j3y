const Footer = () => {
  return (
    <footer className="font-sans text-ink bg-paper dark:text-light dark:bg-night transition-bg">
      <div className="px-8 py-5">
        <div className="flex flex-col flex-wrap items-end content-end gap-2">
          <p className="text-4xl font-semibold cursor-default">Jimmy Lin</p>
          <p className="text-sm">contact@jimmylin.org</p>
          <p className="text-3xl flex gap-2">
            <a
              href="https://github.com/j3ygithub"
              target="_blank"
              rel="noreferrer"
              className="transform hover:scale-110"
            >
              <i className="fab fa-github"></i>
            </a>
            <a
              href="https://www.linkedin.com/in/jimmy-lin-5779a61b5/"
              target="_blank"
              rel="noreferrer"
              className="transform hover:scale-110"
            >
              <i className="fab fa-linkedin"></i>
            </a>
            <a
              href="https://www.facebook.com/j3y.fb"
              target="_blank"
              rel="noreferrer"
              className="transform hover:scale-110"
            >
              <i className="fab fa-facebook"></i>
            </a>
          </p>
          <p className="text-xs mt-5">© 2021 Jimmy Lin</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
