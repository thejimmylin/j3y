import { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import MainLayout from "../components/MainLayout";
import SearchBar from "../components/SearchBar";
import PostsSearched from "../components/PostSearched";
import { getPostInfos } from "../utils/posts";

const Posts = ({ useIsDark, postInfos }) => {
  const useTextSearch = useState("");
  const [textSearched, _] = useTextSearch;
  return (
    <>
      <Header useIsDark={useIsDark} />
      <MainLayout>
        <SearchBar useTextSearch={useTextSearch} />
        <PostsSearched postInfos={postInfos} textSearched={textSearched} />
      </MainLayout>
      <Footer />
    </>
  );
};

export const getStaticProps = async () => {
  const postInfos = getPostInfos();
  const compareFn = (a, b) =>
    Date.parse(b.frontmatter.createdAt) - Date.parse(a.frontmatter.createdAt);
  postInfos.sort(compareFn);
  return {
    props: { postInfos },
  };
};

export default Posts;
