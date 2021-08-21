import { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { metadatas } from "../_data/posts";
import PostsSearched from "../components/PostSearched";

const Posts = ({ isDark, setIsDark, metadatas }) => {
  const [textSearched, setTextSearched] = useState("");
  const search = (event) => {
    const target = event.target;
    setTextSearched(target.value);
  };
  return (
    <>
      <Header isDark={isDark} setIsDark={setIsDark} />
      <main className="font-pretty text-ink bg-paper dark:text-light dark:bg-night transition-bg min-h-screen py-20">
        <div className="max-w-screen-md mx-auto">
          <div className="flex items-center max-w-xs bg-paper dark:bg-night-light transition-bg p-4 shadow-sm rounded-md">
            <span className="text-pencil dark:text-moonlight mx-4">
              <i className="bi bi-search"></i>
            </span>
            <input
              className="text-xl text-ink dark:text-light bg-paper-light dark:bg-night-light transition-bg placeholder-pencil dark:placeholder-moonlight w-full outline-none"
              onChange={search}
              placeholder="Search"
            />
          </div>
          <PostsSearched metadatas={metadatas} textSearched={textSearched} />
        </div>
      </main>
      <Footer />
    </>
  );
};

export const getStaticProps = async () => {
  return {
    props: { metadatas },
  };
};

export default Posts;
