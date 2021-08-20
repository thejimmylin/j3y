import { useState } from "react";
import Image from "next/image";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Link from "next/link";
import { metadatas, getRelatedMetadatas } from "../_data/posts";
import sorry from "../public/sorry-1920x1440.jpg";

const PostsSearched = ({ metadatas, textSearched }) => {
  const relatedMetadatas = getRelatedMetadatas(metadatas, textSearched);
  if (!relatedMetadatas.length) {
    return (
      <article className="bg-paper-light dark:bg-night-light p-8 my-8 rounded-md shadow-sm">
        <h1 className="text-4xl font-semibold mb-10">
          Sorry, there are no posts related.
        </h1>
        <div className="mb-5">
          <Image className="rounded-sm" src={sorry} />
        </div>
      </article>
    );
  }
  return relatedMetadatas.map((metadata) => (
    <article
      key={metadata.slug}
      className="bg-paper-light dark:bg-night-light p-8 my-8 rounded-md shadow-sm"
    >
      <h1
        className="text-4xl font-semibold mb-10"
      >
        {metadata.isDraft ? `Draft - ${metadata.title}` : metadata.title}
      </h1>
      {metadata.thumbnail && (
        <div className="mb-5">
          <Image src={metadata.thumbnail} />
        </div>
      )}
      <p className="mb-5">{metadata.subtitle}</p>
      {metadata.slug && (
        <p className="flex justify-end">
          <Link href={`/posts/${metadata.slug}`}>
            <a className="text-indigo-400 hover:text-indigo-500 dark:text-yellow-400 dark:hover:text-yellow-300">
              Read more
            </a>
          </Link>
        </p>
      )}
    </article>
  )).reverse();
};

const Posts = ({ isDark, setIsDark, metadatas }) => {
  const [textSearched, setTextSearched] = useState("");
  const search = (event) => {
    const target = event.target;
    setTextSearched(target.value);
  };
  return (
    <>
      <Header isDark={isDark} setIsDark={setIsDark} />
      <main className="font-pretty text-ink bg-paper dark:text-light dark:bg-night min-h-screen py-20">
        <div className="max-w-screen-md mx-auto">
          <div className="relative my-8">
            <span className="text-lg absolute transform left-4 top-1/2 -translate-y-1/2 text-pencil">
              <i className="bi bi-search"></i>
            </span>
            <input
              className="w-72 px-12 py-4 text-xl text-ink placeholder-pencil bg-paper-light dark:text-light dark:placeholder-moonlight dark:bg-night-light outline-none"
              onChange={search}
              placeholder="Search.."
            />
          </div>
          <PostsSearched metadatas={metadatas} textSearched={textSearched} />
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
