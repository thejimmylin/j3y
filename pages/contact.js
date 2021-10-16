import { useState } from "react";
import classNames from "classnames";
import Header from "../components/Header";
import MainLayout from "../components/MainLayout";
import PostLayout from "../components/PostLayout";
import Footer from "../components/Footer";
import { H1, P } from "../components/markdown-components";

const Contact = ({ useIsDark }) => {

  const [email, setEmail] = useState("");
  const getEmailError = () => {
    if (!email) {
      return "Please provide an email.";
    }
    if (!(email.includes("@") && email.includes("."))) {
      return "Please provide an valid email";
    }
    return "";
  };
  const getEmailClassName = () => {
    const isValid = email && email.includes("@") && email.includes(".");
    return classNames({
      "placeholder-moonlight dark:placeholder-pencil bg-paper-light dark:bg-night-light transition-bg outline-none w-full py-2 px-4": true,
      "text-ink dark:text-light": isValid,
      "text-red-500 border border-red-500": !isValid,
    });
  };
  const emailOnChange = (e) => {
    setEmail(e.target.value);
  };

  const [message, setMessage] = useState("");
  const getMessageError = () => {
    if (!message) {
      return "Please provide a message.";
    }
    return "";
  };
  const getMessageClassName = () => {
    const isValid = message && message.includes("@") && message.includes(".");
    return classNames({
      "placeholder-moonlight dark:placeholder-pencil bg-paper-light dark:bg-night-light transition-bg outline-none w-full py-2 px-4": true,
      "text-ink dark:text-light": isValid,
      "text-red-500 border border-red-500": isValid,
    });
  };
  const messageOnChange = (e) => {
    setMessage(e.target.value);
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
                <div>
                  <input
                    type="email"
                    placeholder="Email"
                    className={getEmailClassName()}
                    value={email}
                    onChange={emailOnChange}
                  />
                  {getEmailError() && (
                    <div>
                      <small className="text-red-500 text-xs">
                        {getEmailError()}
                      </small>
                    </div>
                  )}
                </div>
                <div>
                  <textarea
                    rows="4"
                    placeholder="Message"
                    className={getMessageClassName()}
                    value={message}
                    onChange={messageOnChange}
                  />
                  {getMessageError() && (
                    <div>
                      <small className="text-red-500 text-xs">
                        {getMessageError()}
                      </small>
                    </div>
                  )}
                </div>
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

export default Contact;
