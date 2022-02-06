import { Html, Head, Main, NextScript } from "next/document";

const Document = () => {
  return (
    <Html>
      <Head>
        <link rel="icon" href="/static/favicon.ico" />
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
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
};

export default Document;
