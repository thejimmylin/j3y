import Header from "../components/Header";
import Footer from "../components/Footer";
import Link from "next/link";
import { metadatas } from "../_data/posts";

const Posts = ({ isDark, setIsDark, metadatas }) => {
  return (
    <>
      <Header isDark={isDark} setIsDark={setIsDark} />
      <main className="font-pretty py-20 min-h-screen text-ink bg-paper dark:text-light dark:bg-night">
        {metadatas.map((metadata) => (
          <div
            key={metadata.slug}
            className="max-w-screen-md p-4 mx-auto shadow-sm bg-paper-light dark:bg-night-light my-8 rounded-md dark:border-pencil"
          >
            <p className="mx-4 my-8 text-4xl font-medium">{metadata.title}</p>
            <p className="mx-4 my-8">{metadata.subtitle}</p>
            <p className="mx-4 my-8 text-right">
              <Link href={`posts/${metadata.slug}`}>
                <a className="underline text-pencil hover:text-ink dark:text-moonlight dark:hover:text-light">
                  more
                </a>
              </Link>
            </p>
          </div>
        ))}
      </main>
      <Footer />
    </>
  );
};

export const getStaticProps = async () => {
  return {
    props: { metadatas },
  };
};

export default Posts;
