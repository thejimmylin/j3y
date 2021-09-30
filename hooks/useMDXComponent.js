import { useMemo } from "react";
import { getMDXComponent } from "mdx-bundler/client";
import { getPostComponents } from "../components/post-components";

const useMDXComponent = ({ code, isDark }) => {
  const MDXComponent = useMemo(() => getMDXComponent(code), [code]);
  const postComponents = getPostComponents({ isDark });
  return () => <MDXComponent components={postComponents} />;
};

export default useMDXComponent;
