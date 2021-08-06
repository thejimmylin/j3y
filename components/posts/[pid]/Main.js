import Link from "next/link"

const Main = () => {
  return (
    <main
      className="font-pretty py-20 min-h-screen text-ink bg-paper dark:text-light dark:bg-night"
    >
      <div className="max-w-screen-md p-4 mx-auto border-b">
          <p className="mx-4 my-8 text-4xl font-medium">How to create a docker image?</p>
          <p className="mx-4 my-8">
            1. cd to a directory you like.
          </p>
          <p className="mx-4 my-8 text-right">
            <Link href="/posts/1"><a className="underline text-pencil hover:text-ink dark:text-moonlight dark:hover:text-light">read more</a></Link>
          </p>
      </div>
    </main>
  );
};

export default Main;
