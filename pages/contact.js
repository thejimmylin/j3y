import { useState } from "react";
import Header from "../components/Header";
import MainLayout from "../components/MainLayout";
import PostLayout from "../components/PostLayout";
import Footer from "../components/Footer";
import { H1, P } from "../components/markdown-components";

const Contact = ({ useIsDark }) => {
  const [isEmailDone, setIsEmailDone] = useState(false);
  const [email, setEmail] = useState("");
  const getEmailError = () => {
    if (isEmailDone && !email) return "Please provide an email.";
    if (email && !(email.includes("@") && email.includes(".")))
      return "Please provide an valid email.";
    return "";
  };
  const emailOnChange = (e) => {
    setEmail(e.target.value);
    setIsEmailDone(false);
  };

  const [isMessageDone, setIsMessageDone] = useState(false);
  const [message, setMessage] = useState("");
  const getMessageError = () => {
    if (isMessageDone && !message) return "Please provide a message.";
    if (!message) return "Please provide a message.";
    return "";
  };
  const messageOnChange = (e) => {
    setMessage(e.target.value);
    setIsMessageDone(false);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    setIsEmailDone(true);
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
                    className="placeholder-moonlight dark:placeholder-pencil bg-paper-light dark:bg-night-light transition-bg outline-none w-full py-2 px-4"
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
                    className="placeholder-moonlight dark:placeholder-pencil bg-paper-light dark:bg-night-light transition-bg outline-none w-full py-2 px-4"
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
