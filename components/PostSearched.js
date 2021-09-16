import Image from "next/image";
import Link from "next/link";
import { getRelatedMetadatas } from "../components/mdx/posts";
import sorry from "../public/sorry-1920x1440.jpg";

const PostsSearched = ({ metadatas, textSearched }) => {
  const relatedMetadatas = getRelatedMetadatas(metadatas, textSearched);
  if (!relatedMetadatas.length) {
    return (
      <>
        <div className="bg-paper-light dark:bg-night-light transition-bg my-8 rounded-md shadow-sm">
          <article className="p-8">
            <h2 className="text-2xl font-semibold mb-8">
              Sorry, there are no posts related.
            </h2>
            <div>
              <Image className="rounded-sm" src={sorry} />
            </div>
          </article>
        </div>
      </>
    );
  }
  return relatedMetadatas
    .map((metadata) => (
      <div
        key={metadata.slug}
        className="bg-paper-light dark:bg-night-light transition-bg my-8 rounded-md shadow-sm"
      >
        <article className="p-8">
          {metadata.isDraft && (
            <span className="text-pencil dark:text-moonlight">
              Note: This is a draft, its content may be updated at any time.
            </span>
          )}
          <h2 className="text-2xl font-semibold mb-8">
            <Link href={`/posts/${metadata.slug}`}>
              <a>{metadata.title}</a>
            </Link>
          </h2>
          {metadata.thumbnail && (
            <div className="mb-5">
              <Image src={metadata.thumbnail} />
            </div>
          )}
          {metadata.subtitle && <p className="mb-5">{metadata.subtitle}</p>}
          <p className="flex justify-end text-blue-600 hover:text-blue-700 dark:text-yellow-400 dark:hover:text-yellow-300">
            <Link href={`/posts/${metadata.slug}`}>
              <a>Read more</a>
            </Link>
          </p>
        </article>
      </div>
    ))
    .reverse();
};

export default PostsSearched;
