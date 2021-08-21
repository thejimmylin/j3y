import Link from "next/link";
import Image from "next/image";
import Header from "../components/Header";
import Footer from "../components/Footer";
import MainLayout from "../components/MainLayout";
import PostLayout from "../components/PostLayout";
import sorry from "../public/sorry-1920x1440.jpg";

const Custom404 = ({ useIsDark }) => {
  return (
    <>
      <Header useIsDark={useIsDark} />
      <MainLayout>
        <PostLayout>
          <h1>Sorry, no pages found.</h1>
          <div className="mb-5">
            <Image className="rounded-sm" src={sorry} />
          </div>
          <p>
            Maybe you want to go back to the{" "}
            <Link href="/">
              <a className="underline text-pencil hover:text-ink dark:text-moonlight dark:hover:text-light">
                homepage
              </a>
            </Link>
            ?
          </p>
        </PostLayout>
      </MainLayout>
      <Footer />
    </>
  );
};

export default Custom404;
