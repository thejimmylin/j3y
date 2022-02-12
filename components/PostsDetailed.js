import Image from "next/image";
import Link from "next/link";
import iAmSorry from "../public/static/i-am-sorry-1920x1440.jpg";
import classNames from "classnames";

const PostsDetailed = ({ postOutlines, textSearched }) => {
  const relatedPosts = postOutlines.filter((post) => {
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
              <Image
                className="rounded-sm"
                src={iAmSorry}
                alt="i-am-sorry"
                priority={true}
              />
            </div>
          </article>
        </div>
      </>
    );
  }
  const getClassNames = (index) => {
    const basic = ["text-transparent", "bg-clip-text", "bg-gradient-to-br"];
    if (index % 2 === 0) {
      const extra = [
        "from-blue-600", "to-blue-400",
        "hover:from-blue-500", "hover:to-blue-300",
        "dark:from-yellow-400", "dark:to-yellow-200",
        "dark:hover:from-yellow-300", "dark:hover:to-yellow-100",
      ]
      return classNames(basic, extra);
    } else {
      const extra = [
        "from-blue-700", "to-blue-400",
        "hover:from-blue-600", "hover:to-blue-300",
        "dark:from-yellow-500", "dark:to-yellow-200",
        "dark:hover:from-yellow-400", "dark:hover:to-yellow-100",
      ]
      return classNames(basic, extra);
    }
  };
  return relatedPosts.map((post, index) => (
    <div
      key={index}
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
            <a className={getClassNames(index)}>{post.frontmatter.title}</a>
          </Link>
        </h2>
        <p className="mb-5 text-xs text-pencil dark:text-moonlight">
          {post.frontmatter.createdAt}
        </p>
        {post.frontmatter.subtitle && (
          <p className="mb-5 text-sm text-pencil dark:text-moonlight">
            {post.frontmatter.subtitle}
          </p>
        )}
        <p className="flex justify-end text-blue-400 hover:text-blue-300 dark:text-yellow-200 dark:hover:text-yellow-100">
          <Link href={`/posts/${post.slug}`}>
            <a>Read more</a>
          </Link>
        </p>
      </article>
    </div>
  ));
};

export default PostsDetailed;
