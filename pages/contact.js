import Header from "../components/Header";
import MainLayout from "../components/MainLayout";
import PostLayout from "../components/PostLayout";
import Footer from "../components/Footer";
import { H1, P } from "../components/markdown-components";

const HomePage = ({ useIsDark }) => {
  const onSubmit = (e) => {
    e.preventDefault();
    console.log("submit");
  };

  return (
    <>
      <Header useIsDark={useIsDark} />
      <MainLayout>
        <PostLayout>
          <H1>Contact me</H1>
          <P>
            You can leave me some messages here. I would reply it with Email you
            leave.
          </P>
          <div className="mt-8">
            <form noValidate onSubmit={onSubmit}>
              <div className="flex flex-col gap-4">
                <input
                  type="email"
                  placeholder="Your Email"
                  className="text-moonlight bg-paper-light dark:text-pencil dark:bg-night-light placeholder-current outline-none py-2 px-4 transition-bg"
                />
                <textarea
                  type="text"
                  rows="4"
                  placeholder="Message"
                  className="text-moonlight bg-paper-light dark:text-pencil dark:bg-night-light placeholder-current outline-none py-2 px-4 transition-bg"
                />
                <button
                  type="submit"
                  className="text-ink bg-paper-light dark:text-light dark:bg-night-light py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-800 transition-bg"
                >
                  <span className="text-lg font-semibold">Submit</span>
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
