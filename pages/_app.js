import "tailwindcss/tailwind.css";
import "../styles/globals.css";
import { useState } from "react";
import Head from "next/head";
import classNames from "classnames";

const App = ({ Component, pageProps }) => {
  const useIsDark = useState(true);
  const [isDark, _setIsDark] = useIsDark;
  return (
    <>
      <Head>
        <link rel="icon" href="/static/favicon.ico" />
        <title>Jimmy Lin</title>
        <meta name="title" content="I'm Jimmy Lin." />
        <meta name="description" content="Welcome to my blog." />
        <meta property="og:title" content="I'm Jimmy Lin." />
        <meta
          property="og:description"
          content="Welcome to my personal website."
        />
        <meta
          property="og:image"
          content="https://jimmylin.org/static/avatar-1440x1440.jpg"
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="true"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Fira+Code&family=Poppins:ital,wght@0,400;0,600;1,400;1,600&display=swap"
          rel="stylesheet"
        />
      </Head>
      <div className={classNames({ dark: isDark })}>
        <Component {...pageProps} useIsDark={useIsDark} />
      </div>
    </>
  );
};

export default App;
