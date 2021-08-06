import Link from "next/link";

const Main = () => {
  return (
    <main className="font-pretty py-20 min-h-screen text-ink bg-paper dark:text-light dark:bg-night">
      <div className="max-w-screen-md p-4 mx-auto">
        <p className="mx-4 my-8 text-4xl font-medium">404</p>
        <p className="mx-4 my-8">Page not found.</p>
        <p className="mx-4 my-8">
          Maybe you want to{" "}
          <Link href="/">
            <a className="underline text-pencil hover:text-ink dark:text-moonlight dark:hover:text-light">
              go back to hompage
            </a>
          </Link>{" "}
          ?
        </p>
      </div>
    </main>
  );
};

export default Main;
