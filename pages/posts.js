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
  return relatedMetadatas
    .map((metadata) => (
      <article
        key={metadata.slug}
        className="bg-paper-light dark:bg-night-light p-8 my-8 rounded-md shadow-sm"
      >
        {metadata.isDraft && (
          <p className="text-pencil dark:text-moonlight">
            Note: This is a draft, its content may be updated at any time.
          </p>
        )}
        <h1 className="text-4xl font-semibold mb-10">
          <Link href={`/posts/${metadata.slug}`}>
            <a>{metadata.title}</a>
          </Link>
        </h1>
        {metadata.thumbnail && (
          <div className="mb-5">
            <Image src={metadata.thumbnail} />
          </div>
        )}
        {metadata.subtitle && <p className="mb-5">{metadata.subtitle}</p>}
        {metadata.slug && (
          <p className="flex justify-end text-indigo-400 hover:text-indigo-500 dark:text-yellow-400 dark:hover:text-yellow-300">
            <Link href={`/posts/${metadata.slug}`}>
              <a>Read more</a>
            </Link>
          </p>
        )}
      </article>
    ))
    .reverse();
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
          <div className="m-8">
            <div className="flex items-center w-72 bg-paper-light dark:bg-night-light shadow-sm">
              <span className="text-lg text-pencil dark:text-moonlight pl-4">
                <i className="bi bi-search"></i>
              </span>
              <input
                className="text-xl text-ink dark:text-light bg-paper-light dark:bg-night-light placeholder-pencil dark:placeholder-moonlight w-72 p-4 outline-none"
                onChange={search}
                placeholder="Search..."
              />
            </div>
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
