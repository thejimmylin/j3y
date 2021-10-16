import { useState } from "react";
import classNames from "classnames";
import Header from "../components/Header";
import MainLayout from "../components/MainLayout";
import PostLayout from "../components/PostLayout";
import Footer from "../components/Footer";
import { H1, P } from "../components/markdown-components";

const HomePage = ({ useIsDark }) => {
  const [email, setEmail] = useState("");
  const [emailIsValid, setEmailIsValid] = useState(true);
  const emailClassName = classNames(
    "text-moonlight bg-paper-light dark:text-pencil dark:bg-night-light outline-none py-2 px-4 placeholder-current transition-bg",
    { "border-red-500": emailIsValid }
  );
  const [message, setMessage] = useState("");
  const emailOnChange = (e) => {
    const value = e.target.value;
    setEmail(value);
    if (value && value.includes("@") && value.includes(".")) {
      setEmailIsValid(true);
    } else {
      setEmailIsValid(false);
    }
  };
  const onSubmit = (e) => {
    e.preventDefault();
    console.log(
      `Sending a Email to ${email} with below message:\n\n${message}`
    );
  };
  return (
    <>
      <Header useIsDark={useIsDark} />
      <MainLayout>
        <PostLayout>
          <H1>Contact me</H1>
          <P>You can leave me a message here. I would reply you with email.</P>
          <div className="mt-8">
            <form noValidate onSubmit={onSubmit}>
              <div className="flex flex-col gap-4">
                <input
                  type="email"
                  placeholder="Your Email"
                  className={emailClassName}
                  value={email}
                  onChange={emailOnChange}
                />
                <textarea
                  type="text"
                  rows="4"
                  placeholder="Message"
                  className="text-moonlight bg-paper-light dark:text-pencil dark:bg-night-light outline-none py-2 px-4 placeholder-current transition-bg"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                />
                <button
                  type="submit"
                  className="text-ink bg-paper-light dark:text-light dark:bg-night-light outline-none py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-800 transition-bg"
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
