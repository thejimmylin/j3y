import "tailwindcss/tailwind.css";
import "../styles/globals.css";
import { useState } from "react";

function App({ Component, pageProps }) {
  const [isDark, setIsDark] = useState(true);
  return <Component {...pageProps} isDark={isDark} setIsDark={setIsDark} />;
}

export default App;
