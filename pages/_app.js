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
        <title>Jimmy Lin</title>
      </Head>
      <div className={classNames({ dark: isDark })}>
        <Component {...pageProps} useIsDark={useIsDark} />
      </div>
    </>
  );
};

export default App;
