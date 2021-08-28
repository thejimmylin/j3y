import Highlight, { defaultProps } from "prism-react-renderer";
// import theme from "prism-react-renderer/themes/vsDark";
import vsDarkCustom from "./vsDarkCustom";

const CodeBlockDark = ({ children }) => {
  const code = children.props.children.trim();
  const className = children.props.className || "";
  const matches = className.match(/language-(?<lang>.*)/);
  const language = matches?.groups?.lang || "";
  return (
    <Highlight {...defaultProps} code={code} language={language} theme={vsDarkCustom}>
      {({ className, style, tokens, getLineProps, getTokenProps }) => (
        <pre className={className} style={style}>
          {tokens.map((line, i) => (
            <div {...getLineProps({ line, key: i })}>
              {line.map((token, key) => (
                <span {...getTokenProps({ token, key })} />
              ))}
            </div>
          ))}
        </pre>
      )}
    </Highlight>
  );
};

export default CodeBlockDark;
