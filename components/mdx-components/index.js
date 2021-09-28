import CodeBlockDark from "./CodeBlockDark";
import CodeBlockLight from "./CodeBlockLight";

const components = {
  a: ({ children, href }) => (
    <a
      className="text-blue-600 dark:text-yellow-400 hover:text-blue-700 dark:hover:text-yellow-300"
      href={href}
      target="_blank"
      rel="noopener noreferrer"
    >
      {children}
    </a>
  ),
  code: ({ children }) => (
    <code className="text-purple-500 dark:text-pink-500">
      <span className="select-none">`</span>
      {children}
      <span className="select-none">`</span>
    </code>
  ),
  p: ({ children }) => <p className="mb-5">{children}</p>,
  ol: ({ children }) => <ol className="list-decimal">{children}</ol>,
  li: ({ children }) => <li className="mb-5">{children}</li>,
  h1: ({ children }) => (
    <h1 className="text-4xl font-semibold mb-8">{children}</h1>
  ),
  h2: ({ children }) => (
    <h2 className="text-2xl font-semibold mb-8">{children}</h2>
  ),
  h3: ({ children }) => (
    <h3 className="text-lg font-semibold mb-8">{children}</h3>
  ),
  blockquote: ({ children }) => (
    <blockquote className="border-l-2 border-gray-200 dark:border-gray-800 pt-6 pb-1 pr-6 pl-6 mb-5 italic">
      {children}
    </blockquote>
  ),
  table: ({ children }) => (
    <div className="overflow-x-scroll mb-8 whitespace-nowrap">
      <table>{children}</table>
    </div>
  ),
  thead: ({ children }) => <thead>{children}</thead>,
  tbody: ({ children }) => <tbody>{children}</tbody>,
  th: ({ children }) => (
    <th className="py-2 px-4 align-top text-left border border-gray-200 dark:border-gray-800">
      {children}
    </th>
  ),
  td: ({ children }) => (
    <td className="py-2 px-4 border border-gray-200 dark:border-gray-800">
      {children}
    </td>
  ),
};

const componentsDark = {
  ...components,
  pre: CodeBlockDark,
};

const componentsLight = {
  ...components,
  pre: CodeBlockLight,
};

export { components, componentsDark, componentsLight };
