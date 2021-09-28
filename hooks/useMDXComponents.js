import { useMemo } from "react";
import { getMDXComponent } from "mdx-bundler/client";
import { componentsDark, componentsLight } from "../components/mdx-components";

const useMDXComponents = ({ code, isDark }) => {
  const MDXComponent = useMemo(() => getMDXComponent(code), [code]);
  const components = isDark ? componentsDark : componentsLight;
  return () => <MDXComponent components={components} />;
};

export default useMDXComponents;
