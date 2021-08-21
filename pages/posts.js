import { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { metadatas } from "../_data/posts";
import MainLayout from "../components/MainLayout";
import SearchBar from "../components/SearchBar";
import PostsSearched from "../components/PostSearched";

const Posts = ({ useIsDark, metadatas }) => {
  const useTextSearch = useState("");
  const [textSearched, _] = useTextSearch;
  return (
    <>
      <Header useIsDark={useIsDark} />
      <MainLayout>
        <SearchBar useTextSearch={useTextSearch} />
        <PostsSearched metadatas={metadatas} textSearched={textSearched} />
      </MainLayout>
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
