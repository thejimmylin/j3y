import Image from "next/image";
import Link from "next/link";
import sorry from "../public/sorry-1920x1440.jpg";

const PostsSearched = ({ posts, textSearched }) => {
  const relatedPosts = posts.filter((post) => {
    const title = post?.frontmatter?.title || "";
    if (title.toLowerCase().includes(textSearched.toLowerCase())) {
      return true;
    } else {
      return false;
    }
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
          <h2 className="text-2xl font-semibold mb-8">
            <Link href={`/posts/${post.slug}`}>
              <a>{post.frontmatter.title}</a>
            </Link>
          </h2>
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
    ))
    .reverse();
};

export default PostsSearched;
