import Image from "next/image";
import Link from "next/link";
import sorry from "../public/sorry-1920x1440.jpg";

const PostsSearched = ({ postInfos, textSearched }) => {
  const relatedPosts = postInfos.filter((post) => {
    const title = post?.frontmatter?.title || "";
    return title.toLowerCase().includes(textSearched.toLowerCase());
  });
  if (!relatedPosts.length) {
    return (
      <>
        <div className="bg-paper-light dark:bg-night-light transition-bg my-8 rounded-md shadow-sm">
          <article className="p-8">
            <h2 className="text-2xl font-semibold mb-8">
              Sorry, there are no posts related.
            </h2>
            <div>
              <Image className="rounded-sm" src={sorry} priority={true} />
            </div>
          </article>
        </div>
      </>
    );
  }
  return relatedPosts
    .sort(
      (a, b) =>
        Date.parse(b.frontmatter.createdAt) -
        Date.parse(a.frontmatter.createdAt)
    )
    .map((post) => (
      <div
        key={post.slug}
        className="bg-paper-light dark:bg-night-light transition-bg my-8 rounded-md shadow-sm"
      >
        <article className="p-8">
          {post.frontmatter.isDraft && (
            <span className="text-pencil dark:text-moonlight text-xs">
              This is a draft that may be updated at any time.
            </span>
          )}
          <h2 className="text-2xl font-semibold mb-1">
            <Link href={`/posts/${post.slug}`}>
              <a>{post.frontmatter.title}</a>
            </Link>
          </h2>
          <p className="mb-5 text-xs text-pencil dark:text-moonlight">
            {post.frontmatter.createdBy} {post.frontmatter.createdAt}
          </p>
          {post.frontmatter.subtitle && (
            <p className="mb-5 text-sm text-pencil dark:text-moonlight">
              {post.frontmatter.subtitle}
            </p>
          )}
          <p className="flex justify-end text-blue-600 hover:text-blue-700 dark:text-yellow-400 dark:hover:text-yellow-300">
            <Link href={`/posts/${post.slug}`}>
              <a>Read more</a>
            </Link>
          </p>
        </article>
      </div>
    ));
};

export default PostsSearched;
