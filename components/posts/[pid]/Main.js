import Link from "next/link";

const Main = ({ pid }) => {
  return (
    <main className="font-pretty py-20 min-h-screen text-ink bg-paper dark:text-light dark:bg-night">
      <div className="max-w-screen-md p-4 mx-auto border-b">
        <p className="mx-4 my-8 text-4xl font-medium">{pid}</p>
      </div>
    </main>
  );
};

export default Main;
