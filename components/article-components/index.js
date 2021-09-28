import PreDark from "./PreDark";
import PreLight from "./PreLight";

const P = ({ children }) => <p className="mb-5">{children}</p>;

const H1 = ({ children }) => (
  <h1 className="text-4xl font-semibold mb-8">{children}</h1>
);

const H2 = ({ children }) => (
  <h2 className="text-2xl font-semibold mb-8">{children}</h2>
);

const H3 = ({ children }) => (
  <h3 className="text-lg font-semibold mb-8">{children}</h3>
);

const Ol = ({ children }) => <ol className="list-decimal">{children}</ol>;

const Ul = ({ children }) => <ul className="list-disc">{children}</ul>;

const Li = ({ children }) => <li className="mb-5">{children}</li>;

const Blockquote = ({ children }) => {
  return (
    <blockquote className="border-l-2 border-gray-200 dark:border-gray-800 pt-6 px-6 pb-1 mb-5 italic">
      {children}
    </blockquote>
  );
};

const Table = ({ children }) => (
  <div className="overflow-x-scroll mb-8 whitespace-nowrap text-sm">
    <table>{children}</table>
  </div>
);

const Thead = ({ children }) => <thead>{children}</thead>;

const Tbody = ({ children }) => <tbody>{children}</tbody>;

const Tr = ({ children }) => <tr>{children}</tr>;

const Th = ({ children }) => (
  <th className="py-2 px-4 align-top text-left border border-gray-200 dark:border-gray-800">
    {children}
  </th>
);

const Td = ({ children }) => (
  <td className="py-2 px-4 border border-gray-200 dark:border-gray-800">
    {children}
  </td>
);

const A = ({ children, href }) => (
  <a
    className="text-blue-600 dark:text-yellow-400 hover:text-blue-700 dark:hover:text-yellow-300"
    href={href}
    target="_blank"
    rel="noopener noreferrer"
  >
    {children}
  </a>
);

const Code = ({ children }) => (
  <code className="text-purple-500 dark:text-pink-500">
    <span className="select-none">`</span>
    {children}
    <span className="select-none">`</span>
  </code>
);

const getArticleComponents = ({ isDark }) => ({
  p: P,
  h1: H1,
  h2: H2,
  h3: H3,
  ol: Ol,
  ul: Ul,
  li: Li,
  blockquote: Blockquote,
  table: Table,
  thead: Thead,
  tbody: Tbody,
  tr: Tr,
  th: Th,
  td: Td,
  a: A,
  code: Code,
  pre: isDark ? PreDark : PreLight,
});

export {
  P,
  H1,
  H2,
  H3,
  Ol,
  Ul,
  Li,
  Blockquote,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  A,
  Code,
  PreDark,
  PreLight,
  getArticleComponents,
};
