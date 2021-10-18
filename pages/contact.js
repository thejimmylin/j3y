import { useState } from "react";
import Header from "../components/Header";
import MainLayout from "../components/MainLayout";
import PostLayout from "../components/PostLayout";
import Footer from "../components/Footer";
import { H1, P } from "../components/markdown-components";

const EmailInstruction = ({ value }) => {
  if (!value) {
    return <div className="text-red-500 text-xs">Please provide an email.</div>;
  }
  const emailPattern = /^\S+@\S+\.\S+$/;
  const isEmail = emailPattern.test(value);
  if (!isEmail) {
    return (
      <div className="text-red-500 text-xs">Please provide a valid email.</div>
    );
  }
  return <div className="text-green-500 text-xs">Good!</div>;
};

const MessageInstruction = ({ value }) => {
  if (!value) {
    return (
      <div className="text-red-500 text-xs">Please provide a message.</div>
    );
  }
  return <div className="text-green-500 text-xs">Good!</div>;
};

const SubmitInstruction = ({ isSent }) => {
  if (isSent) {
    return (
      <div className="text-green-500 text-xs">
        The message has been sent successfully!
      </div>
    );
  }
  return null;
};

const Contact = ({ useIsDark }) => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isSent, setIsSent] = useState(false);

  const onSubmit = async (e) => {
    e.preventDefault();
    const res = await fetch("/api/contact", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        message,
      }),
    });
    if (res.status === 200) {
      setIsSent(true);
    }
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
                    onChange={(e) => {
                      setEmail(e.target.value);
                    }}
                  />
                  <EmailInstruction value={email} />
                </div>
                <div>
                  <textarea
                    rows="4"
                    placeholder="Message"
                    className="placeholder-moonlight dark:placeholder-pencil bg-paper-light dark:bg-night-light transition-bg outline-none block w-full py-2 px-4"
                    value={message}
                    onChange={(e) => {
                      setMessage(e.target.value);
                    }}
                  />
                  <MessageInstruction value={message} />
                </div>
                <div>
                  <button
                    type="submit"
                    className="text-ink bg-paper-light dark:text-light dark:bg-night-light outline-none py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-800 transition-bg w-full"
                  >
                    Send
                  </button>
                  <SubmitInstruction isSent={isSent} />
                </div>
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
