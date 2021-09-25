import { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import MainLayout from "../components/MainLayout";
import SearchBar from "../components/SearchBar";
import PostsSearched from "../components/PostSearched";
import { getAllPosts } from "../markdown";

const Posts = ({ useIsDark, posts }) => {
  const useTextSearch = useState("");
  const [textSearched, _] = useTextSearch;
  return (
    <>
      <Header useIsDark={useIsDark} />
      <MainLayout>
        <SearchBar useTextSearch={useTextSearch} />
        <PostsSearched posts={posts} textSearched={textSearched} />
      </MainLayout>
      <Footer />
    </>
  );
};

export const getStaticProps = async () => {
  const posts = getAllPosts();
  return {
    props: { posts },
  };
};

export default Posts;
