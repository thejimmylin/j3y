import Link from "next/link";
import Header from "../components/Header";
import Footer from "../components/Footer";

const Custom404 = ({ isDark, setIsDark }) => {
  return (
    <>
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
    </>
  );
};

export default Custom404;
