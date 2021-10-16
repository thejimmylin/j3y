import { useState } from "react";
import classNames from "classnames";
import Header from "../components/Header";
import MainLayout from "../components/MainLayout";
import PostLayout from "../components/PostLayout";
import Footer from "../components/Footer";
import { H1, P } from "../components/markdown-components";

const HomePage = ({ useIsDark }) => {
  const [email, setEmail] = useState("");
  const isEmailWanted = () => {
    return email === "";
  };
  const isEmailValid = () => {
    return email === "" || email && email.includes("@") && email.includes(".");
  };
  const emailClassName = classNames(
    "placeholder-moonlight dark:placeholder-pencil bg-paper-light dark:bg-night-light transition-bg outline-none w-full py-2 px-4",
    { "text-ink dark:text-light": isEmailValid() },
    { "text-red-500 border border-red-500": !isEmailValid() }
  );
  const getEmailHelpText = () => {
    if (isEmailWanted()) {
      return "Please provide an email."
    }
    if (!isEmailValid) {
      return "Please provide a valid email."
    }
    return ""
  }
  const emailOnChange = (e) => {
    const value = e.target.value;
    setEmail(value);
  };
  const [message, setMessage] = useState("");
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
                <div>
                  <input
                    type="email"
                    placeholder="Your Email"
                    className={emailClassName}
                    value={email}
                    onChange={emailOnChange}
                  />
                  {getEmailHelpText() && (
                    <div>
                      <small className="text-red-500 text-xs">
                        {getEmailHelpText()}
                      </small>
                    </div>
                  )}
                </div>

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
