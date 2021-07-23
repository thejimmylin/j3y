import "../styles/globals.css";
import "tailwindcss/tailwind.css";
import { MDXProvider } from "@mdx-js/react";

const components = {
  p: (props) => <p className="m-4" {...props} />,
  h1: (props) => <h1 className="m-4 text-4xl font-medium" {...props} />,
  h2: (props) => <h2 className="m-4 text-3xl font-medium" {...props} />,
  h3: (props) => <h3 className="m-4 text-2xl font-medium" {...props} />,
  h4: (props) => <h4 className="m-4 text-xl font-medium" {...props} />,
  h5: (props) => <h5 className="m-4 text-lg font-medium" {...props} />,
  h6: (props) => <h6 className="m-4 font-medium text-md" {...props} />,
  ol: (props) => <ol className="m-4 list-decimal" {...props} />,
  li: (props) => <li className="m-4" {...props} />,
  inlineCode: (props) => <code className="text-white bg-gray-700" {...props} />,
};

function MyApp({ Component, pageProps }) {
  return (
    <MDXProvider components={components}>
      <Component {...pageProps} />
    </MDXProvider>
  );
}

export default MyApp;
