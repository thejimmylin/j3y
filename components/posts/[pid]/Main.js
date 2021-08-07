import Post1 from "./Post1"
import Post2 from "./Post2"

const Main = ({ pid }) => {
  const posts = new Map();
  posts.set("1", Post1)
  posts.set("2", Post2)
  const Post = posts.get(pid)
  return (
    <main className="font-pretty py-20 min-h-screen text-ink bg-paper dark:text-light dark:bg-night">
      <div className="max-w-screen-md p-4 mx-auto">
        <Post />
      </div>
    </main>
  );
};

export default Main;
