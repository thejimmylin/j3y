import { useMemo } from "react";
import { getMDXComponent } from "mdx-bundler/client";
import CodeBlockDark from "../components/mdx-components/CodeBlockDark";
import CodeBlockLight from "../components/mdx-components/CodeBlockLight";

const useMDXComponents = ({ code, isDark }) => {
  const MDXComponent = useMemo(() => getMDXComponent(code), [code]);
  let components;
  if (isDark) {
    components = {
      pre: CodeBlockDark,
      table: ({ children }) => (
        <div className="overflow-x-scroll">
          <table>{children}</table>
        </div>
      ),
    };
  } else {
    components = {
      pre: CodeBlockLight,
      table: ({ children }) => (
        <div className="overflow-x-scroll">
          <table>{children}</table>
        </div>
      ),
    };
  }
  return () => <MDXComponent components={components} />;
};

export default useMDXComponents;
