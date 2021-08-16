import Image from "next/image";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Link from "next/link";
import { metadatas } from "../_data/posts";

const Posts = ({ isDark, setIsDark, metadatas }) => {
  return (
    <>
      <Header isDark={isDark} setIsDark={setIsDark} />
      <main className="font-pretty text-ink bg-paper dark:text-light dark:bg-night min-h-screen py-20">
        <div className="max-w-screen-md mx-auto">
          {metadatas.map((metadata) => (
            <article
              key={metadata.slug}
              className="bg-paper-light dark:bg-night-light p-8 my-8 rounded-md shadow-sm"
            >
              <h1 className="text-4xl font-semibold mb-10">{metadata.title}</h1>
              {metadata.thumbnail && <div className="mb-5"><Image src={metadata.thumbnail} /></div>}
              <p className="mb-5">{metadata.subtitle}</p>
              <p className="flex justify-end">
                <Link href={`posts/${metadata.slug}`}>
                  <a className="underline text-pencil hover:text-ink dark:text-moonlight dark:hover:text-light">
                    more
                  </a>
                </Link>
              </p>
            </article>
          ))}
        </div>
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
