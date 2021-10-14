import Header from "../components/Header";
import MainLayout from "../components/MainLayout";
import PostLayout from "../components/PostLayout";
import Footer from "../components/Footer";
import { H2, P } from "../components/markdown-components";

const HomePage = ({ useIsDark }) => {
  return (
    <>
      <Header useIsDark={useIsDark} />
      <MainLayout>
        <PostLayout>
          <H2>Contact me</H2>
          <P>
            You can leave me some messages here, about jobs, cooperation, some
            advices or anything else you want to tell me. I would contact you
            with the Email you provide.
          </P>
          <div className="mt-8">
            <form>
              <div className="flex flex-col gap-4">
                <input
                  type="email"
                  placeholder="Email"
                  className="text-pencil bg-paper-light dark:text-moonlight dark:bg-night-light placeholder-current outline-none py-2 px-4"
                />
                <textarea
                  type="text"
                  rows="4"
                  placeholder="Message"
                  className="text-pencil bg-paper-light dark:text-moonlight dark:bg-night-light placeholder-current outline-none py-2 px-4"
                />
                <button
                  type="submit"
                  className="text-ink bg-paper-light dark:text-light dark:bg-night-light py-2 px-4"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </PostLayout>
      </MainLayout>
      <Footer />
    </>
  );
};

export default HomePage;
