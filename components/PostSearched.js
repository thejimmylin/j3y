import Image from "next/image";
import Link from "next/link";
import { getRelatedMetadatas } from "../_data/posts";
import sorry from "../public/sorry-1920x1440.jpg";

const PostsSearched = ({ metadatas, textSearched }) => {
  const relatedMetadatas = getRelatedMetadatas(metadatas, textSearched);
  if (!relatedMetadatas.length) {
    return (
      <article className="bg-paper-light dark:bg-night-light transition-bg p-8 my-8 rounded-md shadow-sm">
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
        className="bg-paper-light dark:bg-night-light transition-bg p-8 my-8 rounded-md shadow-sm"
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

export default PostsSearched;
