import Link from "next/link";
import Head from "next/head";
import Header from "../components/Header";
import Footer from "../components/Footer";
import classNames from "classnames";

const Custom404 = ({ isDark, setIsDark }) => {
  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <title>Jimmy Lin</title>
        <meta name="title" content="I'm Jimmy Lin." />
        <meta name="description" content="Welcome to my personal website." />
        <meta property="og:title" content="I'm Jimmy Lin." />
        <meta property="og:description" content="Welcome to my personal website." />
        <meta property="og:image" content="https://jimmylin.org/avatar-1440x1440.jpg" />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
          rel="stylesheet"
        />
      </Head>
      <section className={classNames({ dark: isDark })}>
        <Header isDark={isDark} setIsDark={setIsDark} />
        <main className="font-pretty text-ink bg-paper dark:text-light dark:bg-night h-screen py-20">
          <div className="max-w-screen-md p-4 mx-auto">
            <p className="mx-4 my-8 text-4xl font-medium">404</p>
            <p className="mx-4 my-8">Page not found.</p>
            <p className="mx-4 my-8">
              Maybe you want to go back to the{" "}
              <Link href="/">
                <a className="underline text-pencil hover:text-ink dark:text-moonlight dark:hover:text-light">
                  homepage
                </a>
              </Link>{" "}
              ?
            </p>
          </div>
        </main>
        <Footer />
      </section>
    </>
  );
};

export default Custom404;
