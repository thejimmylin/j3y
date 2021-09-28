import { useMemo } from "react";
import { getMDXComponent } from "mdx-bundler/client";
import { getArticleComponents } from "../components/article-components";

const useMDXComponents = ({ code, isDark }) => {
  const MDXComponent = useMemo(() => getMDXComponent(code), [code]);
  const articleComponents = getArticleComponents({ isDark });
  return () => <MDXComponent components={articleComponents} />;
};

export default useMDXComponents;
