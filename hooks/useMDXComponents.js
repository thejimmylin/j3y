import { useMemo } from "react";
import { getMDXComponent } from "mdx-bundler/client";
import CodeBlockDark from "../components/markdown-components/CodeBlockDark";
import CodeBlockLight from "../components/markdown-components/CodeBlockLight";

const useMDXComponents = ({ code, isDark }) => {
  const MDXComponent = useMemo(() => getMDXComponent(code), [code]);
  let components;
  if (isDark) {
    components = {
      pre: CodeBlockDark,
    };
  } else {
    components = {
      pre: CodeBlockLight,
    };
  }
  return () => <MDXComponent components={components} />;
};

export default useMDXComponents;
