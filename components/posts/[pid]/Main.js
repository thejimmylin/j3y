import Post1 from "./Post1.mdx";
import Post2 from "./Post2.mdx";
import Post3 from "./Post3.mdx";

const Main = ({ pid }) => {
  const posts = new Map();
  posts.set("1", Post1);
  posts.set("2", Post2);
  posts.set("3", Post3);
  const Post = posts.get(pid);
  return (
    <main className="font-pretty py-20 min-h-screen text-ink bg-paper dark:text-light dark:bg-night">
      <div className="max-w-screen-md p-4 mx-auto">
        <article className="prose dark:prose-dark p-4">
          <Post />
        </article>
      </div>
    </main>
  );
};

export default Main;
